import { useEffect, useRef, type RefObject } from 'react'

// Port of the standalone particle cloud at C:\code\particles-cloud\index.html
// (also at https://github.com/TotallyWildAi/particles-cloud), restructured as a
// self-contained React component. Mounts a fixed-position canvas, paints its
// own background colour, and runs the drift / link / drag / click loop until
// unmount. All event listeners and the RAF are cleaned up on unmount.

interface ParticleCloudProps {
  /** Background colour painted under the particles each frame. */
  bgColor?: string
  /** rgb-only triplets (no `rgb()` wrapper). */
  particleColor?: string
  linkColor?: string
  glowColor?: string
  count?: number
  speed?: number
  linkRadius?: number
  cursorPull?: number
  cursorRadius?: number
  /** Allow click shockwaves and drag-and-throw. Default true. */
  interactive?: boolean
  /** Allow additive ('lighter') compositing on the particles draw pass. */
  additive?: boolean
  /** Soft halo circle drawn under the cursor. Off by default — looks loud on light bg. */
  cursorHalo?: boolean
  /** Stacking order. Default 0 (sits behind page content via z-index of siblings). */
  zIndex?: number
  /**
   * Render position. Default 'fixed' fills the viewport (full-page background).
   * 'absolute' fills the nearest positioned parent — use this for card
   * previews and other contained instances.
   */
  inline?: boolean
  /**
   * Refs to elements whose bounding rects should push particles away. Use
   * this to keep particles from drifting over copy or other UI that needs
   * to stay legible.
   */
  repelRefs?: RefObject<HTMLElement | null>[]
  /** Halo distance (px) around each repel rect within which particles get pushed. */
  repelHalo?: number
  /** Repulsion force strength. */
  repelStrength?: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  twinkle: number
  glow: number
  pinned: boolean
}

interface Ripple {
  x: number
  y: number
  age: number
  max: number
}

export default function ParticleCloud({
  bgColor = '#fafaf7',
  particleColor = '60, 52, 137',     // dark iris — readable on cream
  linkColor = '110, 92, 204',         // iris
  glowColor = '155, 142, 232',        // iris-bright
  count = 90,
  speed = 0.32,
  linkRadius = 130,
  cursorPull = 0.04,
  cursorRadius = 170,
  interactive = true,
  additive = false,                   // 'lighter' blows out on light bg
  cursorHalo = false,                 // off by default — calmer
  zIndex = 0,
  inline = false,
  repelRefs,
  repelHalo = 36,
  repelStrength = 0.4,
}: ParticleCloudProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Refs for live-tunable values without restarting the loop
  const cfgRef = useRef({
    bgColor,
    particleColor,
    linkColor,
    glowColor,
    count,
    speed,
    linkRadius,
    cursorPull,
    cursorRadius,
    interactive,
    additive,
    cursorHalo,
    inline,
    repelRefs,
    repelHalo,
    repelStrength,
    sizeMin: 0.8,
    sizeMax: 2.2,
    hitRadius: 22,
    burstStrength: 7,
    burstRadius: 200,
  })

  // Keep cfgRef in sync when props change
  useEffect(() => {
    cfgRef.current = {
      ...cfgRef.current,
      bgColor,
      particleColor,
      linkColor,
      glowColor,
      count,
      speed,
      linkRadius,
      cursorPull,
      cursorRadius,
      interactive,
      additive,
      cursorHalo,
      repelRefs,
      repelHalo,
      repelStrength,
    }
  }, [
    bgColor,
    particleColor,
    linkColor,
    glowColor,
    count,
    speed,
    linkRadius,
    cursorPull,
    cursorRadius,
    interactive,
    additive,
    cursorHalo,
    repelRefs,
    repelHalo,
    repelStrength,
  ])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let DPR = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0
    let H = 0
    const isInline = cfgRef.current.inline

    function readSize(): { w: number; h: number } {
      if (isInline) {
        // Read the canvas's own rendered size — the parent constrains it.
        const rect = canvas!.getBoundingClientRect()
        return { w: Math.max(1, rect.width), h: Math.max(1, rect.height) }
      }
      return { w: window.innerWidth, h: window.innerHeight }
    }

    function resize() {
      const prevW = W
      const prevH = H
      const next = readSize()
      W = next.w
      H = next.h
      DPR = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = Math.floor(W * DPR)
      canvas!.height = Math.floor(H * DPR)
      canvas!.style.width = W + 'px'
      canvas!.style.height = H + 'px'
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0)

      // Rescale particle positions proportionally so coverage stays uniform.
      if (prevW > 0 && prevH > 0 && (prevW !== W || prevH !== H)) {
        const sx = W / prevW
        const sy = H / prevH
        for (const p of particles) {
          p.x *= sx
          p.y *= sy
          if (p.pinned) {
            if (p.x < 0) p.x = 0
            else if (p.x > W) p.x = W
            if (p.y < 0) p.y = 0
            else if (p.y > H) p.y = H
          }
        }
      }
    }
    resize()

    // Wire the right size source: window for fixed, ResizeObserver on the
    // canvas for inline. Window resize alone misses container reflows.
    let ro: ResizeObserver | null = null
    if (isInline && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => resize())
      ro.observe(canvas)
    } else {
      window.addEventListener('resize', resize)
    }

    const mouse = { x: 0, y: 0, active: false }
    const drag: { p: Particle | null; history: { x: number; y: number; t: number }[] } = {
      p: null,
      history: [],
    }
    const ripples: Ripple[] = []

    function makeParticle(): Particle {
      const { sizeMin, sizeMax, speed: sp } = cfgRef.current
      const angle = Math.random() * Math.PI * 2
      const v = (0.4 + Math.random() * 0.8) * sp
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: Math.cos(angle) * v,
        vy: Math.sin(angle) * v,
        r: sizeMin + Math.random() * (sizeMax - sizeMin),
        twinkle: Math.random() * Math.PI * 2,
        glow: 0,
        pinned: false,
      }
    }

    let particles: Particle[] = Array.from({ length: cfgRef.current.count }, makeParticle)

    function syncCount() {
      const n = cfgRef.current.count | 0
      if (particles.length < n) {
        while (particles.length < n) particles.push(makeParticle())
      } else if (particles.length > n) {
        particles.length = n
      }
    }

    function pickParticle(x: number, y: number): Particle | null {
      const R2 = cfgRef.current.hitRadius * cfgRef.current.hitRadius
      let best: Particle | null = null
      let bestD2 = R2
      for (const p of particles) {
        const dx = p.x - x
        const dy = p.y - y
        const d2 = dx * dx + dy * dy
        if (d2 < bestD2) {
          bestD2 = d2
          best = p
        }
      }
      return best
    }

    function burstAt(x: number, y: number) {
      if (!cfgRef.current.interactive) return
      const R = cfgRef.current.burstRadius
      for (const p of particles) {
        if (p.pinned) continue
        const dx = p.x - x
        const dy = p.y - y
        const d = Math.hypot(dx, dy)
        if (d > 0 && d < R) {
          const falloff = 1 - d / R
          p.vx += (dx / d) * cfgRef.current.burstStrength * falloff
          p.vy += (dy / d) * cfgRef.current.burstStrength * falloff
          p.glow = Math.min(1, p.glow + falloff)
        }
      }
      ripples.push({ x, y, age: 0, max: 65 })
    }

    function onPointerDown(e: PointerEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
      if (!cfgRef.current.interactive) return
      const hit = pickParticle(e.clientX, e.clientY)
      if (hit) {
        drag.p = hit
        hit.pinned = true
        hit.glow = 1
        drag.history = [{ x: e.clientX, y: e.clientY, t: performance.now() }]
        canvas!.classList.add('pcloud-grabbing')
        try {
          canvas!.setPointerCapture(e.pointerId)
        } catch (_) {
          /* ignore */
        }
      } else {
        burstAt(e.clientX, e.clientY)
      }
    }

    function onPointerMove(e: PointerEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
      if (drag.p) {
        drag.p.x = e.clientX
        drag.p.y = e.clientY
        drag.history.push({ x: e.clientX, y: e.clientY, t: performance.now() })
        if (drag.history.length > 6) drag.history.shift()
      }
    }

    function endDrag(e?: PointerEvent) {
      if (!drag.p) return
      if (drag.history.length >= 2) {
        const a = drag.history[0]
        const b = drag.history[drag.history.length - 1]
        const dt = Math.max(8, b.t - a.t)
        drag.p.vx = ((b.x - a.x) / dt) * 16.67 * 0.5
        drag.p.vy = ((b.y - a.y) / dt) * 16.67 * 0.5
      }
      drag.p.pinned = false
      burstAt(drag.p.x, drag.p.y)
      drag.p = null
      drag.history.length = 0
      canvas!.classList.remove('pcloud-grabbing')
      if (e && e.pointerId !== undefined) {
        try {
          canvas!.releasePointerCapture(e.pointerId)
        } catch (_) {
          /* ignore */
        }
      }
    }

    function onPointerLeave() {
      mouse.active = false
    }
    function onBlur() {
      endDrag()
    }

    // Skip listeners entirely when the canvas is non-interactive — combined
    // with pointer-events:none on the style, this leaves clicks free to hit
    // whatever's underneath / above.
    const wantsInput = cfgRef.current.interactive
    if (wantsInput) {
      canvas.addEventListener('pointerdown', onPointerDown)
      canvas.addEventListener('pointermove', onPointerMove)
      canvas.addEventListener('pointerup', endDrag)
      canvas.addEventListener('pointercancel', endDrag)
      canvas.addEventListener('pointerleave', onPointerLeave)
      window.addEventListener('blur', onBlur)
    }

    let lastT = performance.now()
    let raf = 0
    let prevCount = cfgRef.current.count

    function frame(now: number) {
      const dt = Math.min(33, now - lastT) / 16.67
      lastT = now
      const cfg = cfgRef.current

      // Pop / drop particles if count prop changed mid-flight
      if (cfg.count !== prevCount) {
        syncCount()
        prevCount = cfg.count
      }

      // Paint background — gives this canvas a solid surface independent of
      // whatever's underneath, so it can sit on any colour.
      ctx!.globalCompositeOperation = 'source-over'
      ctx!.fillStyle = cfg.bgColor
      ctx!.fillRect(0, 0, W, H)

      // Resolve repel zones to canvas-space rects once per frame so we don't
      // re-translate per particle. Element refs are read here (live) so the
      // zones track layout changes (resize, scroll, text reflow).
      const repelRects: { x: number; y: number; w: number; h: number }[] = []
      if (cfg.repelRefs && cfg.repelRefs.length) {
        const canvasRect = canvas!.getBoundingClientRect()
        for (const ref of cfg.repelRefs) {
          const el = ref.current
          if (!el) continue
          const r = el.getBoundingClientRect()
          if (r.width === 0 || r.height === 0) continue
          repelRects.push({
            x: r.left - canvasRect.left,
            y: r.top - canvasRect.top,
            w: r.width,
            h: r.height,
          })
        }
      }

      // Update physics
      for (const p of particles) {
        if (p.pinned) continue

        if (mouse.active && !drag.p) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const d2 = dx * dx + dy * dy
          const r2 = cfg.cursorRadius * cfg.cursorRadius
          if (d2 < r2 && d2 > 0.01) {
            const d = Math.sqrt(d2)
            const falloff = 1 - d / cfg.cursorRadius
            const a = cfg.cursorPull * falloff
            p.vx += (dx / d) * a
            p.vy += (dy / d) * a
          }
        }

        // Repel from copy/UI rects — particles get pushed away from anything
        // we want to keep legible (e.g. the hero subtitle).
        for (const rect of repelRects) {
          // Closest point on rect to the particle. If particle is inside the
          // rect, this equals the particle's own (x, y) and dx=dy=0.
          const cx = Math.max(rect.x, Math.min(p.x, rect.x + rect.w))
          const cy = Math.max(rect.y, Math.min(p.y, rect.y + rect.h))
          const dx = p.x - cx
          const dy = p.y - cy
          const d = Math.hypot(dx, dy)

          if (d < cfg.repelHalo) {
            if (d < 0.5) {
              // Inside the rect — push toward the nearest edge so we always
              // leave via the shortest exit (avoids zipping across the box).
              const distLeft = p.x - rect.x
              const distRight = rect.x + rect.w - p.x
              const distTop = p.y - rect.y
              const distBottom = rect.y + rect.h - p.y
              const m = Math.min(distLeft, distRight, distTop, distBottom)
              if (m === distLeft) p.vx -= cfg.repelStrength
              else if (m === distRight) p.vx += cfg.repelStrength
              else if (m === distTop) p.vy -= cfg.repelStrength
              else p.vy += cfg.repelStrength
            } else {
              // Outside but in the halo — push away from the closest point,
              // with linear falloff so particles further out feel less force.
              const falloff = 1 - d / cfg.repelHalo
              const f = cfg.repelStrength * falloff
              p.vx += (dx / d) * f
              p.vy += (dy / d) * f
            }
          }
        }

        p.vx *= 0.992
        p.vy *= 0.992
        p.vx += (Math.random() - 0.5) * 0.01 * cfg.speed
        p.vy += (Math.random() - 0.5) * 0.01 * cfg.speed

        const sp2 = p.vx * p.vx + p.vy * p.vy
        const cap = 6
        if (sp2 > cap * cap) {
          const s = cap / Math.sqrt(sp2)
          p.vx *= s
          p.vy *= s
        }

        p.x += p.vx * dt
        p.y += p.vy * dt

        if (p.x < -10) p.x = W + 10
        else if (p.x > W + 10) p.x = -10
        if (p.y < -10) p.y = H + 10
        else if (p.y > H + 10) p.y = -10

        p.glow *= 0.96
        p.twinkle += 0.02 * dt
      }

      ctx!.globalCompositeOperation = cfg.additive ? 'lighter' : 'source-over'

      // Links
      const R = cfg.linkRadius
      const R2 = R * R
      ctx!.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          if (dx > R || dx < -R) continue
          const dy = a.y - b.y
          if (dy > R || dy < -R) continue
          const d2 = dx * dx + dy * dy
          if (d2 > R2) continue
          const t = 1 - d2 / R2
          const energy = Math.max(a.glow, b.glow)
          const baseAlpha = t * 0.22
          const glowAlpha = energy * t * 0.55
          if (glowAlpha > 0.02) {
            ctx!.strokeStyle = `rgba(${cfg.glowColor}, ${glowAlpha})`
            ctx!.lineWidth = 1.3
          } else {
            ctx!.strokeStyle = `rgba(${cfg.linkColor}, ${baseAlpha})`
            ctx!.lineWidth = 1
          }
          ctx!.beginPath()
          ctx!.moveTo(a.x, a.y)
          ctx!.lineTo(b.x, b.y)
          ctx!.stroke()
        }
      }

      // Particles
      for (const p of particles) {
        const tw = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(p.twinkle))
        const alpha = Math.min(1, tw + p.glow * 0.5)
        const radius = p.r * (1 + p.glow * 1.4) * (p.pinned ? 1.6 : 1)

        if (p.glow > 0.05 || p.pinned) {
          const g = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 5)
          const peak = Math.min(0.45, p.glow * 0.5 + (p.pinned ? 0.35 : 0))
          g.addColorStop(0, `rgba(${cfg.glowColor}, ${peak})`)
          g.addColorStop(1, `rgba(${cfg.glowColor}, 0)`)
          ctx!.fillStyle = g
          ctx!.beginPath()
          ctx!.arc(p.x, p.y, radius * 5, 0, Math.PI * 2)
          ctx!.fill()
        }

        ctx!.fillStyle = `rgba(${cfg.particleColor}, ${alpha})`
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx!.fill()
      }

      // Cursor halo
      if (cfg.cursorHalo && mouse.active && !drag.p) {
        const g = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, cfg.cursorRadius)
        g.addColorStop(0, `rgba(${cfg.linkColor}, 0.10)`)
        g.addColorStop(1, `rgba(${cfg.linkColor}, 0)`)
        ctx!.fillStyle = g
        ctx!.beginPath()
        ctx!.arc(mouse.x, mouse.y, cfg.cursorRadius, 0, Math.PI * 2)
        ctx!.fill()
      }

      // Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        r.age += dt
        if (r.age > r.max) {
          ripples.splice(i, 1)
          continue
        }
        const t = r.age / r.max
        const radius = 8 + t * 230
        const a = (1 - t) * 0.5
        ctx!.strokeStyle = `rgba(${cfg.glowColor}, ${a})`
        ctx!.lineWidth = 2 * (1 - t * 0.7)
        ctx!.beginPath()
        ctx!.arc(r.x, r.y, radius, 0, Math.PI * 2)
        ctx!.stroke()
        ctx!.strokeStyle = `rgba(${cfg.linkColor}, ${a * 0.5})`
        ctx!.lineWidth = 1
        ctx!.beginPath()
        ctx!.arc(r.x, r.y, radius * 0.7, 0, Math.PI * 2)
        ctx!.stroke()
      }

      ctx!.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      if (ro) ro.disconnect()
      else window.removeEventListener('resize', resize)
      if (wantsInput) {
        window.removeEventListener('blur', onBlur)
        canvas.removeEventListener('pointerdown', onPointerDown)
        canvas.removeEventListener('pointermove', onPointerMove)
        canvas.removeEventListener('pointerup', endDrag)
        canvas.removeEventListener('pointercancel', endDrag)
        canvas.removeEventListener('pointerleave', onPointerLeave)
      }
    }
  // We intentionally don't depend on the props here — cfgRef carries the
  // latest values into the running loop, so changing a colour or count won't
  // tear down and rebuild the animation.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: inline ? 'absolute' : 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex,
        display: 'block',
        cursor: interactive ? 'grab' : 'default',
        pointerEvents: interactive ? 'auto' : 'none',
        touchAction: 'none',
      }}
    />
  )
}
