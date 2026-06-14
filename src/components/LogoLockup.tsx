interface LogoLockupProps {
  variant?: 'nav' | 'footer'
}

/** Robot mark from the vision template. */
function RobotMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="27.25" fill="#EDF1EC" stroke="#2C4F38" strokeWidth="1.5" />
      <rect x="12" y="18" width="32" height="24" rx="5" fill="none" stroke="#2C4F38" strokeWidth="1.5" />
      <rect x="17" y="24" width="8" height="8" rx="2" fill="#2C4F38" />
      <rect x="22" y="25" width="2" height="2" rx="0.5" fill="#BDD9C5" />
      <rect x="31" y="24" width="8" height="8" rx="2" fill="#2C4F38" />
      <rect x="36" y="25" width="2" height="2" rx="0.5" fill="#BDD9C5" />
      <line x1="18" y1="47" x2="38" y2="47" stroke="#4A7C59" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="18" x2="28" y2="12" stroke="#2C4F38" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="10" r="2" fill="#4A7C59" />
    </svg>
  )
}

/**
 * "TotallyWild.ai" lockup: robot mark + gradient wordmark (nav) or white
 * wordmark with sage emphasis (footer).
 */
export default function LogoLockup({ variant = 'nav' }: LogoLockupProps) {
  if (variant === 'footer') {
    return (
      <span style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>
        Totally<em style={{ color: 'var(--tw-sage)', fontStyle: 'normal' }}>Wild</em>.ai
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      <RobotMark />
      <span
        style={{
          fontSize: '1.1rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          background: 'var(--tw-grad-logo)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Totally<em style={{ fontStyle: 'normal' }}>Wild</em>.ai
      </span>
    </span>
  )
}
