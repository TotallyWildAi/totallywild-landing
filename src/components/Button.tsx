import { MouseEvent, ReactNode, useRef } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  variant?: 'fill' | 'ghost'
  /** External or hash link. */
  href?: string
  /** Internal route — rendered as a React Router <Link>. */
  to?: string
  /** Append a nudging → arrow. */
  arrow?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
  children: ReactNode
}

function allowMotion() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Fill (terracotta) / ghost button with the vision template's click ripple
 * and 3D hover tilt. All effects live in event handlers, so the component
 * renders as plain markup during prerender.
 */
export default function Button({
  variant = 'fill',
  href,
  to,
  arrow = false,
  onClick,
  type = 'button',
  disabled,
  className = '',
  children,
}: ButtonProps) {
  const ref = useRef<HTMLElement | null>(null)

  const ripple = (e: MouseEvent) => {
    const el = ref.current
    if (!el || !allowMotion()) return
    const r = el.getBoundingClientRect()
    const size = Math.max(r.width, r.height)
    const circle = document.createElement('span')
    circle.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px;border-radius:50%;background:rgba(255,255,255,0.2);transform:scale(0);animation:rpl 0.55s ease-out forwards;pointer-events:none`
    el.appendChild(circle)
    setTimeout(() => circle.remove(), 560)
  }

  const tilt = (e: MouseEvent) => {
    const el = ref.current
    if (!el || !allowMotion()) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(300px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-2px)`
  }

  const untilt = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  const common = {
    className: `${variant === 'fill' ? 'btn-fill' : 'btn-ghost'} ${className}`.trim(),
    onClick: (e: MouseEvent) => {
      ripple(e)
      onClick?.()
    },
    onMouseMove: tilt,
    onMouseLeave: untilt,
  }

  const content = (
    <>
      {children}
      {arrow && (
        <>
          {' '}
          <span className="btn-arrow">→</span>
        </>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} ref={(el) => { ref.current = el }} {...common}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} ref={(el) => { ref.current = el }} {...common}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} disabled={disabled} ref={(el) => { ref.current = el }} {...common}>
      {content}
    </button>
  )
}
