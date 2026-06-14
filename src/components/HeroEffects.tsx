import { RefObject, useEffect, useRef } from 'react'

const TRAIL_DOTS = 14

/**
 * Cursor trail dots + following blob glow for the hero, ported from the
 * vision template. Renders inert placeholder divs; everything moves from
 * a rAF loop started in useEffect, gated to fine pointers with motion
 * allowed.
 */
export default function HeroEffects({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  const blobRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = containerRef.current
    const blob = blobRef.current
    const dotsWrap = dotsRef.current
    if (!hero || !blob || !dotsWrap) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dots = Array.from(dotsWrap.children) as HTMLDivElement[]
    const pos = dots.map(() => ({ x: 0, y: 0 }))
    let mx = 0
    let my = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      mx = e.clientX - r.left
      my = e.clientY - r.top
      blob.style.left = `${mx - 140}px`
      blob.style.top = `${my - 140}px`
      blob.style.opacity = '1'
    }
    const onLeave = () => {
      blob.style.opacity = '0'
    }

    const loop = () => {
      let px = mx
      let py = my
      dots.forEach((d, i) => {
        d.style.left = `${px}px`
        d.style.top = `${py}px`
        d.style.opacity = `${(1 - i / dots.length) * 0.45}`
        const sz = Math.max(2, 6 - i * 0.3)
        d.style.width = `${sz}px`
        d.style.height = `${sz}px`
        if (i < dots.length - 1) {
          px = px * 0.65 + pos[i + 1].x * 0.35
          py = py * 0.65 + pos[i + 1].y * 0.35
        }
        pos[i].x = px
        pos[i].y = py
      })
      raf = requestAnimationFrame(loop)
    }

    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)

    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [containerRef])

  return (
    <>
      <div ref={blobRef} className="blob-hero" />
      <div ref={dotsRef} style={{ display: 'contents' }}>
        {Array.from({ length: TRAIL_DOTS }, (_, i) => (
          <div key={i} className="trail-dot" />
        ))}
      </div>
    </>
  )
}
