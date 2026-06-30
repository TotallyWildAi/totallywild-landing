import { MouseEvent, ReactNode, useRef } from 'react'

interface SpotCardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

/**
 * Card with the cursor-following radial glow from the vision template.
 * The glow renders inert (opacity 0) and is positioned from mousemove
 * handlers, so prerendered markup is static.
 */
export default function SpotCard({ children, className = '', onClick }: SpotCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const move = (e: MouseEvent) => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return
    const r = card.getBoundingClientRect()
    glow.style.left = `${e.clientX - r.left}px`
    glow.style.top = `${e.clientY - r.top}px`
    glow.style.opacity = ''
  }

  const leave = () => {
    if (glowRef.current) glowRef.current.style.opacity = '0'
  }

  return (
    <div
      ref={cardRef}
      className={`spot-card ${className}`.trim()}
      onMouseMove={move}
      onMouseLeave={leave}
      onClick={onClick}
    >
      <div ref={glowRef} className="spot-glow" />
      {children}
    </div>
  )
}
