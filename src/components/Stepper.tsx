import { useState } from 'react'

export interface Step {
  title: string
  desc: string
}

/**
 * The vision template's agents stepper: numbered dots with connecting
 * lines, a detail card that cross-fades on change, and Back/Next nav.
 * Prerenders on step 1; all interaction is client-side.
 */
export default function Stepper({ steps }: { steps: Step[] }) {
  const [current, setCurrent] = useState(0)
  const [shown, setShown] = useState(0)
  const [fading, setFading] = useState(false)

  const go = (index: number) => {
    const next = Math.max(0, Math.min(steps.length - 1, index))
    if (next === current) return
    setCurrent(next)
    setFading(true)
    setTimeout(() => {
      setShown(next)
      setFading(false)
    }, 180)
  }

  const step = steps[shown]

  return (
    <div>
      <div className="stepper-progress">
        {steps.map((s, i) => (
          <span key={s.title} style={{ display: 'contents' }}>
            {i > 0 && <div className={`stepper-line${i <= current ? ' done' : ''}`} />}
            <button
              type="button"
              className={`stepper-dot${i === current ? ' active' : i < current ? ' done' : ''}`}
              onClick={() => go(i)}
              aria-label={`Step ${i + 1}: ${s.title}`}
            >
              0{i + 1}
            </button>
          </span>
        ))}
      </div>
      <div className={`stepper-card${fading ? ' fade' : ''}`}>
        <div className="s-num">
          Step 0{shown + 1} of 0{steps.length}
        </div>
        <h5>{step.title}</h5>
        <p>{step.desc}</p>
      </div>
      <div className="stepper-nav">
        <button type="button" onClick={() => go(current - 1)} disabled={current === 0}>
          ← Back
        </button>
        <span className="stepper-count">
          {current + 1} / {steps.length}
        </span>
        <button type="button" onClick={() => go(current + 1)} disabled={current === steps.length - 1}>
          Next →
        </button>
      </div>
    </div>
  )
}
