// Continuously scrolling marquee styled as a macOS terminal — same chrome
// (red/yellow/green dots, "tw@totallywild — zsh" label) as TerminalDemo
// on the home page.

const phrases: { icon: string; text: string }[] = [
  { icon: '⏱️', text: 'No meetings.' },
  { icon: '⚡', text: 'No delays.' },
  { icon: '✅', text: 'Just working software.' },
  { icon: '🤖', text: 'Multi-agent coordination.' },
  { icon: '🛡️', text: 'AWS-native security.' },
  { icon: '🔁', text: 'Durable workflow orchestration.' },
  { icon: '🏛️', text: 'Enterprise and government ready.' },
  { icon: '📍', text: 'Brisbane-based AI company.' },
]

function TapeItem({ icon, text }: { icon: string; text: string }) {
  return (
    <span className="inline-flex items-center mx-8 whitespace-nowrap">
      <span className="mr-3" aria-hidden="true">{icon}</span>
      <span>{text}</span>
    </span>
  )
}

export default function MarqueeTape() {
  return (
    <div
      className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden"
      style={{
        border: '0.5px solid var(--tw-border-primary)',
        boxShadow:
          '0 1px 0 0 color-mix(in srgb, var(--tw-text-primary) 4%, transparent) inset, 0 20px 60px -20px rgba(110, 92, 204, 0.25), 0 8px 24px -12px rgba(0, 0, 0, 0.15)',
        background: 'var(--tw-bg-code)',
      }}
    >
      {/* macOS window chrome — matches TerminalDemo */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{
          background: 'var(--tw-bg-tertiary)',
          borderBottom: '0.5px solid var(--tw-border-primary)',
        }}
      >
        <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
        <span
          className="ml-3 text-[11px] font-mono"
          style={{ color: 'var(--tw-text-tertiary)', letterSpacing: '0.02em' }}
        >
          tw@totallywild — zsh
        </span>
      </div>

      {/* Marquee track — phrases doubled for a seamless -50% loop */}
      <div
        className="overflow-hidden py-5 font-mono text-sm md:text-base"
        style={{ color: 'var(--tw-text-primary)' }}
      >
        <div className="tape-track flex w-max">
          {phrases.map((p, i) => <TapeItem key={`a-${i}`} icon={p.icon} text={p.text} />)}
          {phrases.map((p, i) => <TapeItem key={`b-${i}`} icon={p.icon} text={p.text} />)}
        </div>
      </div>
    </div>
  )
}
