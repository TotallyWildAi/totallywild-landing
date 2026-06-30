import { ReactNode, useRef } from 'react'

interface CollapseProps {
  open: boolean
  children: ReactNode
  className?: string
}

/**
 * Max-height collapse animation. Content stays in the DOM (and in the
 * prerendered HTML) at all times; the measured scrollHeight avoids the
 * vision template's fixed caps clipping longer copy. Everything starts
 * closed, so the SSR render (max-height: 0) matches hydration.
 */
export default function Collapse({ open, children, className = '' }: CollapseProps) {
  const ref = useRef<HTMLDivElement>(null)
  const maxHeight = open && ref.current ? ref.current.scrollHeight : 0

  return (
    <div
      ref={ref}
      className={className}
      style={{ maxHeight, overflow: 'hidden', transition: 'max-height 0.3s ease' }}
    >
      {children}
    </div>
  )
}
