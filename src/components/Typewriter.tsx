import { useEffect, useRef, useState } from 'react'

interface TypewriterProps {
  phrases: string[]
  className?: string
}

/**
 * Looping typewriter line. The initial render (and the prerendered HTML)
 * shows the complete first phrase so search engines see real copy and
 * hydration matches; the type/delete loop starts after mount. With
 * reduced motion the first phrase simply stays put.
 */
export default function Typewriter({ phrases, className = '' }: TypewriterProps) {
  const [text, setText] = useState(phrases[0])
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let phrase = 0
    let chars = phrases[0].length
    let deleting = true

    const tick = () => {
      const p = phrases[phrase]
      let delay: number
      if (deleting) {
        chars--
        if (chars === 0) {
          deleting = false
          phrase = (phrase + 1) % phrases.length
          delay = 380
        } else {
          delay = 42
        }
      } else {
        chars++
        if (chars === phrases[phrase].length) {
          deleting = true
          delay = 1800
        } else {
          delay = 75
        }
      }
      setText((deleting ? p : phrases[phrase]).slice(0, chars))
      timer.current = setTimeout(tick, delay)
    }

    timer.current = setTimeout(tick, 1800)
    return () => clearTimeout(timer.current)
  }, [phrases])

  return (
    <span className={className}>
      {text}
      <span className="tw-cursor" />
    </span>
  )
}
