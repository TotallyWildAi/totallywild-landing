import { useState, useEffect, useRef } from 'react'

// Define terminal lines at module level to prevent recreation on every render
const terminalLines = [
  '$ tw run --project invoice-app',
  '[Analysis] Analysing requirements... 12 user stories identified.',
  '[Architecture] Designing system... 3 services, 8 endpoints, 2 databases.',
  '[Engineer 1] Writing auth service... 14 files.',
  '[Engineer 2] Writing invoice API... 18 files.',
  '[Engineer 3] Writing frontend... 15 files, 4 pages.',
  '[Review] 3 reviews completed. All checks passed.',
  '[Testing] 94 tests passed, 0 failed. Coverage 87%.',
  '[Security] OWASP top-10 scan clean. No vulnerabilities.',
  '[Deploy] Live at invoice-app.totallywild.ai'
]

export default function TerminalDemo() {
  // Start with all lines visible (animation is a nice-to-have)
  const [visibleCount, setVisibleCount] = useState(terminalLines.length)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          setVisibleCount(0) // Reset to 0 to start animation
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated || visibleCount >= terminalLines.length) return

    const timer = setTimeout(() => {
      setVisibleCount(c => c + 1)
    }, 400)

    return () => clearTimeout(timer)
  }, [visibleCount, hasAnimated])

  return (
    <div ref={containerRef} className="w-full max-w-3xl mx-auto">
      {/* macOS window chrome */}
      <div className="rounded-t-xl px-4 py-3 flex items-center gap-2" style={{ background: 'var(--tw-bg-tertiary)' }}>
        <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
      </div>
      {/* Terminal content */}
      <div 
        className="rounded-b-xl p-6 font-mono text-sm overflow-x-auto"
        style={{ 
          background: 'var(--tw-bg-code)',
          color: 'var(--tw-text-primary)',
          lineHeight: 1.8
        }}
      >
        {terminalLines.slice(0, visibleCount).map((line, i) => {
          const isCommand = line.startsWith('$')
          const hasBracket = line.startsWith('[')
          const isSuccess = line.includes('passed') || line.includes('Live at')

          return (
            <div key={i} className="whitespace-nowrap">
              {isCommand ? (
                <span style={{ color: 'var(--tw-text-accent)' }}>{line}</span>
              ) : hasBracket ? (
                <>
                  <span style={{ color: 'var(--tw-text-accent)' }}>
                    {line.substring(0, line.indexOf(']') + 1)}
                  </span>
                  <span style={{ color: isSuccess ? 'var(--tw-green)' : 'var(--tw-text-primary)' }}>
                    {line.substring(line.indexOf(']') + 1)}
                  </span>
                </>
              ) : (
                <span>{line}</span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
