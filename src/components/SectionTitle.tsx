import { ReactNode } from 'react'

/** Span with the green heading gradient, for partial-gradient titles. */
export function GradientText({ children }: { children: ReactNode }) {
  return <span className="s-title-grad">{children}</span>
}

interface SectionTitleProps {
  children: ReactNode
  sub?: ReactNode
}

export default function SectionTitle({ children, sub }: SectionTitleProps) {
  return (
    <>
      <h2 className="s-title">{children}</h2>
      {sub && <p className="s-sub">{sub}</p>}
    </>
  )
}
