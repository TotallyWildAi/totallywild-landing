// Hero illustration: three classic-anatomy robots — Researcher, Engineer,
// Security — passing data left-to-right. Distinct head shapes (round,
// cube, hex), shoulder pauldrons, articulated arms, and a sleek hover
// thruster base — they float silently above the ground.

export default function AgentSwarm() {
  return (
    <div className="w-full max-w-[940px] mx-auto" aria-hidden="true">
      <svg
        viewBox="0 20 940 185"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: 'block' }}
      >
        <defs>
          {/* Body gradients */}
          <linearGradient id="tw-iris-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D7CFF7" /><stop offset="1" stopColor="#8674DB" />
          </linearGradient>
          <linearGradient id="tw-mint-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#BCEFDA" /><stop offset="1" stopColor="#5DC4A2" />
          </linearGradient>
          <linearGradient id="tw-rose-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FAD0DD" /><stop offset="1" stopColor="#E282A4" />
          </linearGradient>

          {/* Limb gradients (machined-metal feel) */}
          <linearGradient id="tw-iris-limb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7C6BD3" /><stop offset="1" stopColor="#5B49B5" /></linearGradient>
          <linearGradient id="tw-mint-limb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#48B594" /><stop offset="1" stopColor="#226B57" /></linearGradient>
          <linearGradient id="tw-rose-limb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#D75D87" /><stop offset="1" stopColor="#A53D67" /></linearGradient>

          {/* Halos */}
          <radialGradient id="tw-glow-iris"><stop offset="0" stopColor="#9B8EE8" stopOpacity="0.45" /><stop offset="1" stopColor="#9B8EE8" stopOpacity="0" /></radialGradient>
          <radialGradient id="tw-glow-mint"><stop offset="0" stopColor="#9CE6CD" stopOpacity="0.45" /><stop offset="1" stopColor="#9CE6CD" stopOpacity="0" /></radialGradient>
          <radialGradient id="tw-glow-rose"><stop offset="0" stopColor="#F4ACC1" stopOpacity="0.45" /><stop offset="1" stopColor="#F4ACC1" stopOpacity="0" /></radialGradient>

          {/* Floor contact shadow */}
          <radialGradient id="tw-floor-shadow" cx="0.5" cy="0.5">
            <stop offset="0" stopColor="#0F0F0F" stopOpacity="0.22" />
            <stop offset="1" stopColor="#0F0F0F" stopOpacity="0" />
          </radialGradient>

          {/* Card drop-shadow */}
          <filter id="tw-card-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.6" />
            <feOffset dx="0" dy="1.4" result="offsetblur" />
            <feComponentTransfer><feFuncA type="linear" slope="0.32" /></feComponentTransfer>
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Flow line gradient */}
          <linearGradient id="tw-flow-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0"   stopColor="var(--tw-text-accent)" stopOpacity="0" />
            <stop offset="0.18" stopColor="var(--tw-text-accent)" stopOpacity="0.55" />
            <stop offset="0.82" stopColor="var(--tw-text-accent)" stopOpacity="0.55" />
            <stop offset="1"   stopColor="var(--tw-text-accent)" stopOpacity="0" />
          </linearGradient>

          {/* Chevron */}
          <marker id="tw-flow-tip" viewBox="0 0 8 8" refX="6.5" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 1 1.5 L 6 4 L 1 6.5" fill="none" stroke="var(--tw-text-accent)" strokeOpacity="0.85" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </marker>

          {/* Card halos */}
          <radialGradient id="tw-halo-iris"><stop offset="0" stopColor="#9B8EE8" stopOpacity="0.30" /><stop offset="1" stopColor="#9B8EE8" stopOpacity="0" /></radialGradient>
          <radialGradient id="tw-halo-mint"><stop offset="0" stopColor="#9CE6CD" stopOpacity="0.32" /><stop offset="1" stopColor="#9CE6CD" stopOpacity="0" /></radialGradient>
        </defs>

        {/* Ground baseline */}
        <line x1="40" y1="200" x2="900" y2="200" stroke="var(--tw-text-accent)" strokeOpacity="0.16" strokeWidth="0.6" strokeDasharray="2 6" />

        {/* Floor contact shadows */}
        <ellipse cx="170" cy="202" rx="40" ry="4" fill="url(#tw-floor-shadow)" />
        <ellipse cx="470" cy="202" rx="44" ry="4" fill="url(#tw-floor-shadow)" />
        <ellipse cx="770" cy="202" rx="40" ry="4" fill="url(#tw-floor-shadow)" />

        {/* Flow lines */}
        <g fill="none" stroke="url(#tw-flow-grad)" strokeWidth="1.7" strokeLinecap="round">
          <path d="M 220 138 C 270 102, 370 102, 420 138" markerEnd="url(#tw-flow-tip)" />
          <path d="M 520 138 C 570 102, 670 102, 720 138" markerEnd="url(#tw-flow-tip)" />
        </g>

        {/* Trail dots */}
        <g fill="var(--tw-text-accent)">
          {[ {cx: 260, cy: 122}, {cx: 295, cy: 110}, {cx: 330, cy: 105}, {cx: 365, cy: 108} ].map((p, i) => (
            <circle key={`a${i}`} cx={p.cx} cy={p.cy} r={1.2 + i * 0.25} opacity={0.30 + i * 0.15} />
          ))}
          {[ {cx: 560, cy: 122}, {cx: 595, cy: 110}, {cx: 630, cy: 105}, {cx: 665, cy: 108} ].map((p, i) => (
            <circle key={`b${i}`} cx={p.cx} cy={p.cy} r={1.2 + i * 0.25} opacity={0.30 + i * 0.15} />
          ))}
        </g>

        {/* ─── DATA CARDS ─── */}

        {/* Card 1 — REQUIREMENTS (Researcher → Engineer) */}
        <g transform="translate(320, 100)">
          <ellipse cx="0" cy="0" rx="48" ry="26" fill="url(#tw-halo-iris)" />
          <g filter="url(#tw-card-shadow)">
            <rect x="-34" y="-18" width="68" height="36" rx="5" fill="#FFFFFF" stroke="#5B49B5" strokeOpacity="0.45" strokeWidth="0.8" />
            {/* Header */}
            <rect x="-34" y="-18" width="68" height="10" rx="5" fill="#9B8EE8" opacity="0.22" />
            <rect x="-34" y="-13" width="68" height="5" fill="#9B8EE8" opacity="0.22" />
            <text x="-30" y="-11" fill="#5B49B5" fontSize="5.2" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="700" letterSpacing="0.3">REQUIREMENTS</text>
            <circle cx="29" cy="-12.5" r="1.5" fill="#48B594" />
            <circle cx="29" cy="-12.5" r="2.6" fill="#48B594" opacity="0.32" />
            {/* Bar chart */}
            <g transform="translate(-23, 6)">
              <rect x="-5" y="-1" width="2.2" height="4" rx="0.4" fill="#9B8EE8" />
              <rect x="-2" y="-3" width="2.2" height="6" rx="0.4" fill="#7C6BD3" />
              <rect x="1"  y="-5" width="2.2" height="8" rx="0.4" fill="#5B49B5" />
              <rect x="4"  y="-2" width="2.2" height="5" rx="0.4" fill="#9B8EE8" />
              <line x1="-6" y1="3.5" x2="7" y2="3.5" stroke="#5B49B5" strokeWidth="0.5" opacity="0.65" />
              <path d="M -5 -1 L -2 -3 L 1 -5 L 4 -2" stroke="#48B594" strokeWidth="0.7" fill="none" />
            </g>
            {/* Title + body lines */}
            <g transform="translate(-9, -1)">
              <rect x="0" y="-3" width="34" height="2.2" rx="1" fill="#7C6BD3" opacity="0.85" />
              <rect x="0" y="0.5" width="28" height="1.6" rx="0.7" fill="#7C6BD3" opacity="0.45" />
              <rect x="0" y="3.5" width="32" height="1.6" rx="0.7" fill="#7C6BD3" opacity="0.45" />
              <rect x="0" y="6.5" width="22" height="1.6" rx="0.7" fill="#7C6BD3" opacity="0.45" />
              <rect x="0" y="9.5" width="30" height="1.6" rx="0.7" fill="#7C6BD3" opacity="0.45" />
            </g>
          </g>
        </g>

        {/* Card 2 — RELEASE (Engineer → Security) */}
        <g transform="translate(620, 100)">
          <ellipse cx="0" cy="0" rx="48" ry="26" fill="url(#tw-halo-mint)" />
          <g filter="url(#tw-card-shadow)">
            <rect x="-34" y="-18" width="68" height="36" rx="5" fill="#FFFFFF" stroke="#226B57" strokeOpacity="0.45" strokeWidth="0.8" />
            <rect x="-34" y="-18" width="68" height="10" rx="5" fill="#9CE6CD" opacity="0.45" />
            <rect x="-34" y="-13" width="68" height="5" fill="#9CE6CD" opacity="0.45" />
            <text x="-30" y="-11" fill="#226B57" fontSize="5.2" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="700" letterSpacing="0.3">RELEASE v3</text>
            <circle cx="29" cy="-12.5" r="1.5" fill="#FBBF24" />
            <circle cx="29" cy="-12.5" r="2.6" fill="#FBBF24" opacity="0.32" />
            {/* Branch graph */}
            <g transform="translate(-23, 5)">
              <circle cx="-4" cy="-5" r="1.6" fill="#48B594" />
              <circle cx="-4" cy="0"  r="1.6" fill="#48B594" />
              <circle cx="-4" cy="5"  r="1.6" fill="#48B594" />
              <line x1="-4" y1="-3.4" x2="-4" y2="-1.6" stroke="#48B594" strokeWidth="1" />
              <line x1="-4" y1="1.6"  x2="-4" y2="3.4"  stroke="#48B594" strokeWidth="1" />
              <path d="M -4 -2 Q 0 -2, 3 -5" stroke="#22A06B" strokeWidth="1" fill="none" strokeLinecap="round" />
              <circle cx="3" cy="-5" r="1.6" fill="#22A06B" />
              <path d="M -4 0 Q 0 0, 3 -3" stroke="#22A06B" strokeWidth="1" fill="none" strokeLinecap="round" />
              <circle cx="3" cy="-3" r="1.5" fill="#22A06B" />
            </g>
            {/* Code preview + diff */}
            <g transform="translate(-9, -1)">
              <text x="0" y="-1" fill="#226B57" fontSize="3.6" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="700">{'fn ship() {'}</text>
              <text x="2" y="3.2" fill="#226B57" fontSize="3.6" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="500" opacity="0.85">{'  return ok'}</text>
              <text x="0" y="7.4" fill="#226B57" fontSize="3.6" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="700">{'}'}</text>
              <rect x="26" y="4" width="8" height="2.4" rx="0.6" fill="#48B594" opacity="0.85" />
              <rect x="26" y="7.2" width="5" height="2.4" rx="0.6" fill="#D75D87" opacity="0.85" />
            </g>
          </g>
        </g>

        {/* ═════════════════════ ROBOT 1 — RESEARCHER (Iris) — Round head ═════════════════════ */}
        <g transform="translate(170, 130)">
          <ellipse cx="0" cy="-2" rx="56" ry="64" fill="url(#tw-glow-iris)" />

          {/* Antenna with idea bulb + ring */}
          <line x1="0" y1="-60" x2="0" y2="-72" stroke="#5B49B5" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="0" cy="-58" r="1.8" fill="#7C6BD3" stroke="#5B49B5" strokeWidth="0.5" />
          <ellipse cx="0" cy="-66" rx="3" ry="1" fill="none" stroke="#5B49B5" strokeWidth="0.6" />
          <path d="M -3.5 -78 Q -4.8 -82 0 -82 Q 4.8 -82 3.5 -78 Z" fill="#FFE082" stroke="#A06F2C" strokeWidth="0.7" />
          <line x1="-2.5" y1="-76" x2="2.5" y2="-76" stroke="#A06F2C" strokeWidth="0.5" />
          <circle cx="0" cy="-74" r="1.1" fill="#FBBF24" />
          <g stroke="#FBBF24" strokeWidth="0.9" strokeLinecap="round" opacity="0.85">
            <line x1="-7" y1="-84" x2="-5.5" y2="-82.5" />
            <line x1="7"  y1="-84" x2="5.5"  y2="-82.5" />
            <line x1="0"  y1="-89" x2="0"    y2="-87" />
          </g>

          {/* HEAD — round/spherical */}
          <ellipse cx="0" cy="-38" rx="25" ry="22" fill="url(#tw-iris-body)" stroke="#5B49B5" strokeWidth="0.8" />
          {/* Top sheen */}
          <ellipse cx="-8" cy="-48" rx="8" ry="3.6" fill="#FFFFFF" opacity="0.45" />
          {/* Horizontal seam */}
          <line x1="-25" y1="-36" x2="25" y2="-36" stroke="#5B49B5" strokeWidth="0.5" opacity="0.5" />
          {/* Side bolts */}
          <circle cx="-22" cy="-40" r="0.8" fill="#5B49B5" opacity="0.7" />
          <circle cx="-22" cy="-32" r="0.8" fill="#5B49B5" opacity="0.7" />
          <circle cx="22"  cy="-40" r="0.8" fill="#5B49B5" opacity="0.7" />
          <circle cx="22"  cy="-32" r="0.8" fill="#5B49B5" opacity="0.7" />

          {/* Face */}
          <circle cx="-7" cy="-40" r="3.8" fill="#FFFFFF" stroke="#3A2C7E" strokeWidth="0.5" />
          <circle cx="7"  cy="-40" r="3.8" fill="#FFFFFF" stroke="#3A2C7E" strokeWidth="0.5" />
          <circle cx="-6.4" cy="-39.4" r="1.8" fill="#3A2C7E" />
          <circle cx="7.6"  cy="-39.4" r="1.8" fill="#3A2C7E" />
          <circle cx="-5.7" cy="-40.2" r="0.8" fill="#FFFFFF" />
          <circle cx="8.3"  cy="-40.2" r="0.8" fill="#FFFFFF" />
          <ellipse cx="-14" cy="-30.5" rx="2.6" ry="1.4" fill="#F4ACC1" opacity="0.6" />
          <ellipse cx="14"  cy="-30.5" rx="2.6" ry="1.4" fill="#F4ACC1" opacity="0.6" />
          <path d="M -4 -28.5 Q 0 -25.5 4 -28.5" stroke="#3A2C7E" strokeWidth="1.3" fill="none" strokeLinecap="round" />

          {/* NECK */}
          <rect x="-6" y="-17" width="12" height="5" rx="1.4" fill="url(#tw-iris-limb)" />
          <line x1="-5" y1="-15" x2="5" y2="-15" stroke="#3A2C7E" strokeWidth="0.5" opacity="0.6" />

          {/* SHOULDER PAULDRONS */}
          <path d="M -28 -12 Q -28 -18 -22 -18 Q -16 -18 -16 -12 Z" fill="url(#tw-iris-body)" stroke="#5B49B5" strokeWidth="0.6" />
          <ellipse cx="-22" cy="-15" rx="3" ry="1.2" fill="#FFFFFF" opacity="0.45" />
          <path d="M 16 -12 Q 16 -18 22 -18 Q 28 -18 28 -12 Z" fill="url(#tw-iris-body)" stroke="#5B49B5" strokeWidth="0.6" />
          <ellipse cx="22" cy="-15" rx="3" ry="1.2" fill="#FFFFFF" opacity="0.45" />

          {/* TORSO — rounded rectangle */}
          <rect x="-25" y="-12" width="50" height="48" rx="7" fill="url(#tw-iris-body)" stroke="#5B49B5" strokeWidth="0.8" />
          {/* Vertical sheen */}
          <rect x="-21" y="-9" width="6" height="22" rx="2.5" fill="#FFFFFF" opacity="0.40" />
          {/* Side seam */}
          <line x1="-25" y1="2" x2="25" y2="2" stroke="#5B49B5" strokeWidth="0.5" opacity="0.45" />
          {/* Bolts */}
          <circle cx="-21" cy="-8" r="0.8" fill="#5B49B5" opacity="0.7" />
          <circle cx="21"  cy="-8" r="0.8" fill="#5B49B5" opacity="0.7" />
          <circle cx="-21" cy="32" r="0.8" fill="#5B49B5" opacity="0.7" />
          <circle cx="21"  cy="32" r="0.8" fill="#5B49B5" opacity="0.7" />

          {/* CHEST PANEL — analyse readout */}
          <rect x="-15" y="-3" width="30" height="22" rx="2.5" fill="#FFFFFF" stroke="#5B49B5" strokeWidth="0.6" />
          <rect x="-15" y="-3" width="30" height="4" rx="2" fill="#9B8EE8" opacity="0.32" />
          <rect x="-15" y="-1" width="30" height="2" fill="#9B8EE8" opacity="0.32" />
          <text x="-12" y="0.5" fill="#5B49B5" fontSize="3.4" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="700">analyse</text>
          <circle cx="11" cy="-0.5" r="1" fill="#48B594" />
          {/* Mini bars */}
          <rect x="-12" y="4" width="2.4" height="5" rx="0.4" fill="#7C6BD3" opacity="0.85" />
          <rect x="-8.5" y="3" width="2.4" height="6" rx="0.4" fill="#7C6BD3" />
          <rect x="-5"  y="5" width="2.4" height="4" rx="0.4" fill="#9B8EE8" opacity="0.85" />
          <rect x="-1.5" y="2" width="2.4" height="7" rx="0.4" fill="#5B49B5" />
          <rect x="2"  y="4" width="2.4" height="5" rx="0.4" fill="#7C6BD3" opacity="0.85" />
          <rect x="5.5" y="3.5" width="2.4" height="5.5" rx="0.4" fill="#7C6BD3" />
          <rect x="9" y="5" width="2.4" height="4" rx="0.4" fill="#9B8EE8" opacity="0.85" />
          {/* Footer text */}
          <text x="-12" y="15" fill="#5B49B5" fontSize="2.8" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="600" opacity="0.85">queries</text>
          <text x="12" y="15" textAnchor="end" fill="#48B594" fontSize="2.8" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="700">142</text>

          {/* LEFT ARM — articulated */}
          <circle cx="-22" cy="-10" r="3" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.7" />
          <line x1="-22" y1="-10" x2="-32" y2="4" stroke="url(#tw-iris-limb)" strokeWidth="6" strokeLinecap="round" />
          <circle cx="-32" cy="4" r="2.4" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.7" />
          <line x1="-32" y1="4" x2="-42" y2="18" stroke="url(#tw-iris-limb)" strokeWidth="6" strokeLinecap="round" />
          {/* Hand: 3 fingers + thumb with knuckle lines */}
          <g transform="translate(-42, 20) rotate(-18)">
            <ellipse cx="0" cy="-3.5" rx="3.8" ry="1.7" fill="#3A2C7E" />
            <rect x="-3.8" y="-3" width="7.6" height="3.4" rx="1.4" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.5" />
            <rect x="-3" y="0.4" width="1.7" height="4" rx="0.5" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.4" />
            <line x1="-3" y1="2.2" x2="-1.3" y2="2.2" stroke="#3A2C7E" strokeWidth="0.3" opacity="0.6" />
            <rect x="-1.1" y="0.4" width="1.7" height="4.6" rx="0.5" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.4" />
            <line x1="-1.1" y1="2.5" x2="0.6" y2="2.5" stroke="#3A2C7E" strokeWidth="0.3" opacity="0.6" />
            <rect x="0.8" y="0.4" width="1.7" height="4" rx="0.5" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.4" />
            <line x1="0.8" y1="2.2" x2="2.5" y2="2.2" stroke="#3A2C7E" strokeWidth="0.3" opacity="0.6" />
            <ellipse cx="4" cy="-1.5" rx="1.5" ry="2" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.4" />
          </g>
          {/* Magnifier */}
          <g transform="translate(-50, 26) rotate(-22)">
            <circle r="7.5" fill="#FFFFFF" stroke="#3A2C7E" strokeWidth="1.4" />
            <circle r="5.5" fill="#9B8EE8" opacity="0.20" />
            <path d="M -3 -3 Q -4 -1 -3 1" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.85" />
            <line x1="5.3" y1="5.3" x2="11" y2="11" stroke="#3A2C7E" strokeWidth="2.6" strokeLinecap="round" />
            <circle r="7.5" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.7" />
          </g>

          {/* RIGHT ARM */}
          <circle cx="22" cy="-10" r="3" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.7" />
          <line x1="22" y1="-10" x2="32" y2="4" stroke="url(#tw-iris-limb)" strokeWidth="6" strokeLinecap="round" />
          <circle cx="32" cy="4" r="2.4" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.7" />
          <line x1="32" y1="4" x2="42" y2="18" stroke="url(#tw-iris-limb)" strokeWidth="6" strokeLinecap="round" />
          <g transform="translate(42, 20) rotate(18)">
            <ellipse cx="0" cy="-3.5" rx="3.8" ry="1.7" fill="#3A2C7E" />
            <rect x="-3.8" y="-3" width="7.6" height="3.4" rx="1.4" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.5" />
            <rect x="-3" y="0.4" width="1.7" height="4" rx="0.5" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.4" />
            <line x1="-3" y1="2.2" x2="-1.3" y2="2.2" stroke="#3A2C7E" strokeWidth="0.3" opacity="0.6" />
            <rect x="-1.1" y="0.4" width="1.7" height="4.6" rx="0.5" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.4" />
            <line x1="-1.1" y1="2.5" x2="0.6" y2="2.5" stroke="#3A2C7E" strokeWidth="0.3" opacity="0.6" />
            <rect x="0.8" y="0.4" width="1.7" height="4" rx="0.5" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.4" />
            <line x1="0.8" y1="2.2" x2="2.5" y2="2.2" stroke="#3A2C7E" strokeWidth="0.3" opacity="0.6" />
            <ellipse cx="4" cy="-1.5" rx="1.5" ry="2" fill="url(#tw-iris-body)" stroke="#3A2C7E" strokeWidth="0.4" />
          </g>
          {/* Open notebook */}
          <g transform="translate(50, 24) rotate(8)">
            <rect x="-7" y="-9" width="14" height="16" rx="1.4" fill="#FFFFFF" stroke="#3A2C7E" strokeWidth="0.9" />
            <line x1="0" y1="-9" x2="0" y2="7" stroke="#3A2C7E" strokeWidth="0.7" opacity="0.55" />
            <rect x="-5.5" y="-7.5" width="4.5" height="1.6" rx="0.5" fill="#9B8EE8" opacity="0.7" />
            <line x1="-5.5" y1="-4.5" x2="-1.5" y2="-4.5" stroke="#3A2C7E" strokeWidth="0.5" opacity="0.6" />
            <line x1="-5.5" y1="-2.5" x2="-2"   y2="-2.5" stroke="#3A2C7E" strokeWidth="0.5" opacity="0.6" />
            <line x1="-5.5" y1="-0.5" x2="-1"   y2="-0.5" stroke="#3A2C7E" strokeWidth="0.5" opacity="0.6" />
            <line x1="-5.5" y1="1.5"  x2="-2.5" y2="1.5" stroke="#3A2C7E" strokeWidth="0.5" opacity="0.6" />
            <line x1="1"   y1="-7"   x2="5.5"  y2="-7"   stroke="#3A2C7E" strokeWidth="0.5" opacity="0.6" />
            <line x1="1"   y1="-5"   x2="4.5"  y2="-5"   stroke="#3A2C7E" strokeWidth="0.5" opacity="0.6" />
            <line x1="1"   y1="-3"   x2="5.5"  y2="-3" stroke="#3A2C7E" strokeWidth="0.5" opacity="0.6" />
            <line x1="1"   y1="-1"   x2="4"    y2="-1"   stroke="#3A2C7E" strokeWidth="0.5" opacity="0.6" />
            <path d="M 5 -9 L 5 -3 L 6.5 -4.6 L 8 -3 L 8 -9 Z" fill="#E282A4" />
          </g>

          {/* HOVER THRUSTER — slim disc */}
          <ellipse cx="0" cy="38" rx="22" ry="3.2" fill="url(#tw-iris-limb)" stroke="#3A2C7E" strokeWidth="0.6" />
          <ellipse cx="0" cy="36.6" rx="19" ry="1.4" fill="#FFFFFF" opacity="0.32" />
          <ellipse cx="0" cy="40.4" rx="18" ry="1.2" fill="#9B8EE8" />
          <line x1="-12" y1="40.4" x2="-7" y2="40.4" stroke="#3A2C7E" strokeWidth="0.5" opacity="0.65" />
          <line x1="-3" y1="40.4" x2="3" y2="40.4" stroke="#3A2C7E" strokeWidth="0.5" opacity="0.65" />
          <line x1="7" y1="40.4" x2="12" y2="40.4" stroke="#3A2C7E" strokeWidth="0.5" opacity="0.65" />

          {/* Hover thrust glow cascade */}
          <ellipse cx="0" cy="46" rx="20" ry="3" fill="#9B8EE8" opacity="0.45" />
          <ellipse cx="0" cy="52" rx="24" ry="2.4" fill="#9B8EE8" opacity="0.25" />
          <ellipse cx="0" cy="58" rx="28" ry="1.8" fill="#9B8EE8" opacity="0.12" />
        </g>

        {/* ═════════════════════ ROBOT 2 — ENGINEER (Mint) — Cube head ═════════════════════ */}
        <g transform="translate(470, 130)">
          <ellipse cx="0" cy="-2" rx="58" ry="64" fill="url(#tw-glow-mint)" />

          {/* Antenna with broadcast pulse + radio waves */}
          <line x1="0" y1="-60" x2="0" y2="-74" stroke="#226B57" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="0" cy="-76" r="2" fill="#FBBF24" />
          <circle cx="0" cy="-76" r="3.8" fill="#FBBF24" opacity="0.42" />
          <path d="M -4 -68 Q 0 -64 4 -68" fill="none" stroke="#9CE6CD" strokeWidth="0.7" opacity="0.7" />
          <path d="M -7 -72 Q 0 -64 7 -72" fill="none" stroke="#9CE6CD" strokeWidth="0.5" opacity="0.45" />

          {/* HEAD — cube/rounded square */}
          <rect x="-26" y="-60" width="52" height="44" rx="7" fill="url(#tw-mint-body)" stroke="#226B57" strokeWidth="0.8" />
          {/* Top sheen */}
          <rect x="-22" y="-56" width="6" height="22" rx="2.5" fill="#FFFFFF" opacity="0.45" />
          <ellipse cx="-10" cy="-56" rx="6" ry="2.4" fill="#FFFFFF" opacity="0.30" />
          {/* Side ear vents */}
          <g stroke="#226B57" strokeWidth="0.6" opacity="0.6" strokeLinecap="round">
            <line x1="-26" y1="-44" x2="-22" y2="-44" />
            <line x1="-26" y1="-40" x2="-22" y2="-40" />
            <line x1="-26" y1="-36" x2="-22" y2="-36" />
            <line x1="22" y1="-44" x2="26" y2="-44" />
            <line x1="22" y1="-40" x2="26" y2="-40" />
            <line x1="22" y1="-36" x2="26" y2="-36" />
          </g>
          {/* Corner bolts */}
          <circle cx="-22" cy="-56" r="0.8" fill="#226B57" opacity="0.7" />
          <circle cx="22"  cy="-56" r="0.8" fill="#226B57" opacity="0.7" />
          <circle cx="-22" cy="-20" r="0.8" fill="#226B57" opacity="0.7" />
          <circle cx="22"  cy="-20" r="0.8" fill="#226B57" opacity="0.7" />

          {/* Face — LED panels */}
          <rect x="-13" y="-46" width="8" height="7" rx="1.2" fill="#1A1A1A" />
          <rect x="5"   y="-46" width="8" height="7" rx="1.2" fill="#1A1A1A" />
          <path d="M -11 -41.5 Q -9 -44.5 -7 -41.5" stroke="#9CE6CD" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <path d="M  7 -41.5 Q  9 -44.5 11 -41.5" stroke="#9CE6CD" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <rect x="-10.4" y="-44.4" width="1.6" height="1.6" fill="#9CE6CD" opacity="0.85" />
          <rect x="9.4"  y="-44.4" width="1.6" height="1.6" fill="#9CE6CD" opacity="0.85" />
          <ellipse cx="-17" cy="-30" rx="2.6" ry="1.4" fill="#F4ACC1" opacity="0.55" />
          <ellipse cx="17"  cy="-30" rx="2.6" ry="1.4" fill="#F4ACC1" opacity="0.55" />
          {/* LED bar smile */}
          <rect x="-7" y="-28" width="14" height="3.5" rx="1.5" fill="#1A1A1A" />
          <rect x="-5.4" y="-27.4" width="2" height="1.8" fill="#9CE6CD" />
          <rect x="-2.6" y="-27.4" width="2" height="1.8" fill="#9CE6CD" />
          <rect x="0.2" y="-27.4" width="2" height="1.8" fill="#FBBF24" />
          <rect x="3" y="-27.4" width="2" height="1.8" fill="#9CE6CD" />

          {/* NECK */}
          <rect x="-7" y="-15" width="14" height="5" rx="1.5" fill="url(#tw-mint-limb)" />
          <line x1="-6" y1="-12.5" x2="6" y2="-12.5" stroke="#10463A" strokeWidth="0.5" opacity="0.6" />

          {/* SHOULDER PAULDRONS — chunky for engineer */}
          <path d="M -32 -10 Q -32 -18 -25 -18 Q -18 -18 -18 -10 Z" fill="url(#tw-mint-body)" stroke="#226B57" strokeWidth="0.6" />
          <ellipse cx="-25" cy="-15" rx="3.5" ry="1.4" fill="#FFFFFF" opacity="0.45" />
          <circle cx="-25" cy="-12" r="0.6" fill="#226B57" opacity="0.7" />
          <path d="M 18 -10 Q 18 -18 25 -18 Q 32 -18 32 -10 Z" fill="url(#tw-mint-body)" stroke="#226B57" strokeWidth="0.6" />
          <ellipse cx="25" cy="-15" rx="3.5" ry="1.4" fill="#FFFFFF" opacity="0.45" />
          <circle cx="25" cy="-12" r="0.6" fill="#226B57" opacity="0.7" />

          {/* TORSO — chunky chassis */}
          <rect x="-28" y="-10" width="56" height="48" rx="8" fill="url(#tw-mint-body)" stroke="#226B57" strokeWidth="0.8" />
          <rect x="-24" y="-7" width="6" height="22" rx="2.5" fill="#FFFFFF" opacity="0.40" />
          {/* Side bezels */}
          <rect x="-28" y="-10" width="3" height="48" rx="1.5" fill="#226B57" opacity="0.20" />
          <rect x="25" y="-10" width="3" height="48" rx="1.5" fill="#226B57" opacity="0.20" />
          {/* Bolts */}
          <circle cx="-23" cy="-6" r="0.8" fill="#226B57" opacity="0.7" />
          <circle cx="23"  cy="-6" r="0.8" fill="#226B57" opacity="0.7" />
          <circle cx="-23" cy="34" r="0.8" fill="#226B57" opacity="0.7" />
          <circle cx="23"  cy="34" r="0.8" fill="#226B57" opacity="0.7" />
          {/* Side LED indicators */}
          <circle cx="-22" cy="0" r="0.9" fill="#9CE6CD" />
          <circle cx="-22" cy="3" r="0.9" fill="#FBBF24" />
          <circle cx="-22" cy="6" r="0.9" fill="#226B57" opacity="0.4" />

          {/* CHEST PANEL — terminal */}
          <rect x="-16" y="-2" width="32" height="26" rx="3" fill="#0F0F0F" stroke="#226B57" strokeWidth="0.7" />
          <rect x="-15" y="-1" width="30" height="4" rx="1" fill="#9CE6CD" opacity="0.18" />
          <text x="-13" y="2" fill="#9CE6CD" fontSize="3.6" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="700">$ ship</text>
          <circle cx="12" cy="0.5" r="1" fill="#48B594" />
          {/* Code mock lines */}
          <line x1="-13" y1="6" x2="-2" y2="6" stroke="#5DC4A2" strokeWidth="0.5" opacity="0.85" />
          <line x1="-13" y1="8" x2="6"  y2="8" stroke="#5DC4A2" strokeWidth="0.5" opacity="0.6" />
          <line x1="-13" y1="10" x2="3" y2="10" stroke="#5DC4A2" strokeWidth="0.5" opacity="0.6" />
          {/* Progress bars */}
          <rect x="-13" y="13" width="26" height="1.6" rx="0.6" fill="#1A1A1A" />
          <rect x="-13" y="13" width="18" height="1.6" rx="0.6" fill="#5DC4A2" />
          <rect x="-13" y="16" width="26" height="1.6" rx="0.6" fill="#1A1A1A" />
          <rect x="-13" y="16" width="22" height="1.6" rx="0.6" fill="#FBBF24" />
          {/* Footer */}
          <text x="-13" y="22" fill="#9CE6CD" fontSize="3" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="600" opacity="0.85">deploy</text>
          <text x="13" y="22" textAnchor="end" fill="#FBBF24" fontSize="3" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="700">98%</text>

          {/* LEFT ARM with laptop */}
          <circle cx="-28" cy="-6" r="3.2" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.7" />
          <line x1="-28" y1="-6" x2="-36" y2="6" stroke="url(#tw-mint-limb)" strokeWidth="6.5" strokeLinecap="round" />
          <circle cx="-36" cy="6" r="2.4" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.7" />
          <line x1="-36" y1="6" x2="-44" y2="18" stroke="url(#tw-mint-limb)" strokeWidth="6.5" strokeLinecap="round" />
          <g transform="translate(-44, 20) rotate(-15)">
            <ellipse cx="0" cy="-3.5" rx="3.8" ry="1.7" fill="#10463A" />
            <rect x="-3.8" y="-3" width="7.6" height="3.4" rx="1.4" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.5" />
            <rect x="-3" y="0.4" width="1.7" height="4" rx="0.5" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.4" />
            <line x1="-3" y1="2.2" x2="-1.3" y2="2.2" stroke="#10463A" strokeWidth="0.3" opacity="0.6" />
            <rect x="-1.1" y="0.4" width="1.7" height="4.6" rx="0.5" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.4" />
            <line x1="-1.1" y1="2.5" x2="0.6" y2="2.5" stroke="#10463A" strokeWidth="0.3" opacity="0.6" />
            <rect x="0.8" y="0.4" width="1.7" height="4" rx="0.5" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.4" />
            <line x1="0.8" y1="2.2" x2="2.5" y2="2.2" stroke="#10463A" strokeWidth="0.3" opacity="0.6" />
            <ellipse cx="4" cy="-1.5" rx="1.5" ry="2" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.4" />
          </g>
          {/* Laptop */}
          <g transform="translate(-52, 26)">
            <path d="M -8.5 5 L 8.5 5 L 9.8 7 L -9.8 7 Z" fill="#1A1A1A" />
            <rect x="-8" y="-8" width="16" height="13" rx="1" fill="#1A1A1A" />
            <rect x="-7" y="-7" width="14" height="11" rx="0.5" fill="#0A0A0A" />
            <text x="-6" y="-4" fill="#5DC4A2" fontSize="2.8" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="700">{'> ship'}</text>
            <line x1="-6" y1="-1.5" x2="3"  y2="-1.5" stroke="#5DC4A2" strokeWidth="0.5" opacity="0.7" />
            <line x1="-6" y1="0.5" x2="4.5" y2="0.5" stroke="#5DC4A2" strokeWidth="0.5" opacity="0.55" />
            <rect x="-6" y="2.5" width="12" height="1.6" rx="0.4" fill="#1A1A1A" />
            <rect x="-6" y="2.5" width="9"  height="1.6" rx="0.4" fill="#5DC4A2" />
            {/* Stickers */}
            <rect x="-3" y="-6" width="2" height="2" fill="#FBBF24" opacity="0.85" />
            <rect x="0"  y="-6" width="2" height="2" fill="#E282A4" opacity="0.85" />
            <rect x="3"  y="-6" width="2" height="2" fill="#9B8EE8" opacity="0.85" />
          </g>

          {/* RIGHT ARM raised triumphantly with wrench */}
          <circle cx="28" cy="-6" r="3.2" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.7" />
          <line x1="28" y1="-6" x2="36" y2="-22" stroke="url(#tw-mint-limb)" strokeWidth="6.5" strokeLinecap="round" />
          <circle cx="36" cy="-22" r="2.4" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.7" />
          <line x1="36" y1="-22" x2="44" y2="-36" stroke="url(#tw-mint-limb)" strokeWidth="6.5" strokeLinecap="round" />
          <g transform="translate(44, -38) rotate(15)">
            <ellipse cx="0" cy="-3.5" rx="3.8" ry="1.7" fill="#10463A" />
            <rect x="-3.8" y="-3" width="7.6" height="3.4" rx="1.4" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.5" />
            <rect x="-3" y="-7.5" width="1.7" height="5" rx="0.5" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.4" />
            <rect x="-1.1" y="-8.5" width="1.7" height="6" rx="0.5" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.4" />
            <rect x="0.8" y="-7.5" width="1.7" height="5" rx="0.5" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.4" />
            <ellipse cx="4" cy="-1.5" rx="1.5" ry="2" fill="url(#tw-mint-body)" stroke="#10463A" strokeWidth="0.4" />
          </g>
          {/* Wrench */}
          <g transform="translate(46, -50) rotate(15)">
            <path d="M -3.5 -8 A 3.8 3.8 0 0 0 -3.5 -1 L -3.5 1 L 3.5 1 L 3.5 -1 A 3.8 3.8 0 0 0 3.5 -8 L 1.7 -5.2 A 1.7 1.7 0 0 1 -1.7 -5.2 Z" fill="#226B57" />
            <line x1="0" y1="1" x2="0" y2="13" stroke="#226B57" strokeWidth="2.6" strokeLinecap="round" />
            <line x1="-1.5" y1="11.5" x2="1.5" y2="11.5" stroke="#9CE6CD" strokeWidth="0.7" />
            {/* Effort sparks */}
            <g stroke="#FBBF24" strokeWidth="0.9" strokeLinecap="round">
              <line x1="-6" y1="-9" x2="-8" y2="-11" />
              <line x1="6" y1="-9" x2="8" y2="-11" />
              <line x1="0" y1="-12" x2="0" y2="-14" />
            </g>
          </g>

          {/* HOVER THRUSTER — chunky for engineer */}
          <ellipse cx="0" cy="40" rx="25" ry="3.6" fill="url(#tw-mint-limb)" stroke="#10463A" strokeWidth="0.6" />
          <ellipse cx="0" cy="38.4" rx="22" ry="1.6" fill="#FFFFFF" opacity="0.36" />
          <ellipse cx="0" cy="42.6" rx="20" ry="1.4" fill="#9CE6CD" />
          <line x1="-14" y1="42.6" x2="-8" y2="42.6" stroke="#10463A" strokeWidth="0.5" opacity="0.65" />
          <line x1="-4"  y1="42.6" x2="4"  y2="42.6" stroke="#10463A" strokeWidth="0.5" opacity="0.65" />
          <line x1="8"   y1="42.6" x2="14" y2="42.6" stroke="#10463A" strokeWidth="0.5" opacity="0.65" />

          {/* Hover thrust glow cascade */}
          <ellipse cx="0" cy="48" rx="22" ry="3.2" fill="#9CE6CD" opacity="0.50" />
          <ellipse cx="0" cy="54" rx="26" ry="2.4" fill="#9CE6CD" opacity="0.28" />
          <ellipse cx="0" cy="60" rx="30" ry="1.8" fill="#9CE6CD" opacity="0.14" />
        </g>

        {/* ═════════════════════ ROBOT 3 — SECURITY (Rose) — Hexagon head ═════════════════════ */}
        <g transform="translate(770, 130)">
          <ellipse cx="0" cy="-2" rx="56" ry="64" fill="url(#tw-glow-rose)" />

          {/* Antenna with shield emblem */}
          <line x1="0" y1="-58" x2="0" y2="-72" stroke="#A53D67" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="0" cy="-58" r="1.7" fill="#7E2C4D" />
          <path d="M -4 -78 L 4 -78 L 4 -75 Q 4 -71 0 -69 Q -4 -71 -4 -75 Z" fill="#FBBF24" stroke="#A06F2C" strokeWidth="0.6" />
          <path d="M -1.6 -75 L -0.4 -73.8 L 1.8 -76.5" stroke="#A53D67" strokeWidth="0.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />

          {/* HEAD — hexagon */}
          <path d="M -14 -58 L 14 -58 L 24 -38 L 14 -18 L -14 -18 L -24 -38 Z" fill="url(#tw-rose-body)" stroke="#A53D67" strokeWidth="0.8" strokeLinejoin="round" />
          {/* Inner panel */}
          <path d="M -10 -52 L 10 -52 L 18 -38 L 10 -24 L -10 -24 L -18 -38 Z" fill="none" stroke="#A53D67" strokeWidth="0.5" opacity="0.42" />
          {/* Sheen */}
          <path d="M -10 -52 L -2 -38 L -10 -24" fill="#FFFFFF" opacity="0.34" />
          {/* Side bolts */}
          <circle cx="-17" cy="-38" r="0.8" fill="#A53D67" opacity="0.7" />
          <circle cx="17"  cy="-38" r="0.8" fill="#A53D67" opacity="0.7" />

          {/* Face */}
          <circle cx="-7" cy="-40" r="3.8" fill="#FFFFFF" stroke="#7E2C4D" strokeWidth="0.5" />
          <circle cx="7"  cy="-40" r="3.8" fill="#FFFFFF" stroke="#7E2C4D" strokeWidth="0.5" />
          <circle cx="-6.4" cy="-39.4" r="1.8" fill="#7E2C4D" />
          <circle cx="7.6"  cy="-39.4" r="1.8" fill="#7E2C4D" />
          <circle cx="-5.7" cy="-40.2" r="0.8" fill="#FFFFFF" />
          <circle cx="8.3"  cy="-40.2" r="0.8" fill="#FFFFFF" />
          <ellipse cx="-13" cy="-30" rx="2.4" ry="1.3" fill="#F4ACC1" opacity="0.6" />
          <ellipse cx="13"  cy="-30" rx="2.4" ry="1.3" fill="#F4ACC1" opacity="0.6" />
          <path d="M -4 -28 Q 0 -25 4 -28" stroke="#7E2C4D" strokeWidth="1.3" fill="none" strokeLinecap="round" />

          {/* NECK */}
          <rect x="-6" y="-17" width="12" height="5" rx="1.4" fill="url(#tw-rose-limb)" />
          <line x1="-5" y1="-15" x2="5" y2="-15" stroke="#7E2C4D" strokeWidth="0.5" opacity="0.6" />

          {/* SHOULDER PAULDRONS */}
          <path d="M -28 -12 Q -28 -18 -22 -18 Q -16 -18 -16 -12 Z" fill="url(#tw-rose-body)" stroke="#A53D67" strokeWidth="0.6" />
          <ellipse cx="-22" cy="-15" rx="3" ry="1.2" fill="#FFFFFF" opacity="0.45" />
          <path d="M 16 -12 Q 16 -18 22 -18 Q 28 -18 28 -12 Z" fill="url(#tw-rose-body)" stroke="#A53D67" strokeWidth="0.6" />
          <ellipse cx="22" cy="-15" rx="3" ry="1.2" fill="#FFFFFF" opacity="0.45" />

          {/* TORSO — armored hex shape */}
          <path d="M -25 -12 L 25 -12 L 23 16 L 18 36 L -18 36 L -23 16 Z" fill="url(#tw-rose-body)" stroke="#A53D67" strokeWidth="0.8" strokeLinejoin="round" />
          {/* Vertical sheen */}
          <rect x="-21" y="-9" width="6" height="22" rx="2.5" fill="#FFFFFF" opacity="0.40" />
          {/* Seam */}
          <line x1="-24" y1="2" x2="24" y2="2" stroke="#A53D67" strokeWidth="0.5" opacity="0.4" />
          {/* Bolts */}
          <circle cx="-21" cy="-8" r="0.8" fill="#A53D67" opacity="0.7" />
          <circle cx="21"  cy="-8" r="0.8" fill="#A53D67" opacity="0.7" />
          <circle cx="-19" cy="32" r="0.8" fill="#A53D67" opacity="0.7" />
          <circle cx="19"  cy="32" r="0.8" fill="#A53D67" opacity="0.7" />

          {/* CHEST PANEL — auth */}
          <rect x="-15" y="-3" width="30" height="22" rx="2.5" fill="#FFFFFF" stroke="#A53D67" strokeWidth="0.6" />
          <rect x="-15" y="-3" width="30" height="4" rx="2" fill="#F4ACC1" opacity="0.40" />
          <rect x="-15" y="-1" width="30" height="2" fill="#F4ACC1" opacity="0.40" />
          <text x="-12" y="0.5" fill="#A53D67" fontSize="3.4" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="700">audit</text>
          <circle cx="11" cy="-0.5" r="1" fill="#48B594" />
          {/* Shield + check */}
          <path d="M -10 5 L -2 5 L -2 11 Q -2 14 -6 15.5 Q -10 14 -10 11 Z" fill="#A53D67" />
          <path d="M -8 9 L -7 10 L -4 7" stroke="#FFFFFF" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* Lock + status bars */}
          <g transform="translate(3, 9)">
            <path d="M -1.6 -2 A 1.6 1.6 0 0 1 1.6 -2 L 1.6 -0.5 L -1.6 -0.5 Z" fill="none" stroke="#A53D67" strokeWidth="0.6" />
            <rect x="-2.2" y="-0.5" width="4.4" height="3.2" rx="0.5" fill="#A53D67" opacity="0.85" />
            <circle cx="0" cy="0.9" r="0.5" fill="#FFFFFF" />
          </g>
          <rect x="6.5" y="6.5" width="6" height="1.4" rx="0.5" fill="#1A1A1A" />
          <rect x="6.5" y="6.5" width="5" height="1.4" rx="0.5" fill="#48B594" />
          <rect x="6.5" y="9" width="6" height="1.4" rx="0.5" fill="#1A1A1A" />
          <rect x="6.5" y="9" width="4.5" height="1.4" rx="0.5" fill="#FBBF24" />
          {/* Footer */}
          <text x="-12" y="15" fill="#A53D67" fontSize="2.8" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="600" opacity="0.85">scan</text>
          <text x="12" y="15" textAnchor="end" fill="#48B594" fontSize="2.8" fontFamily='"Geist Mono", "SF Mono", monospace' fontWeight="700">PASS</text>

          {/* LEFT ARM with shield */}
          <circle cx="-22" cy="-10" r="3" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.7" />
          <line x1="-22" y1="-10" x2="-32" y2="4" stroke="url(#tw-rose-limb)" strokeWidth="6" strokeLinecap="round" />
          <circle cx="-32" cy="4" r="2.4" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.7" />
          <line x1="-32" y1="4" x2="-42" y2="18" stroke="url(#tw-rose-limb)" strokeWidth="6" strokeLinecap="round" />
          <g transform="translate(-42, 20) rotate(-15)">
            <ellipse cx="0" cy="-3.5" rx="3.8" ry="1.7" fill="#7E2C4D" />
            <rect x="-3.8" y="-3" width="7.6" height="3.4" rx="1.4" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.5" />
            <rect x="-3" y="0.4" width="1.7" height="4" rx="0.5" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.4" />
            <line x1="-3" y1="2.2" x2="-1.3" y2="2.2" stroke="#7E2C4D" strokeWidth="0.3" opacity="0.6" />
            <rect x="-1.1" y="0.4" width="1.7" height="4.6" rx="0.5" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.4" />
            <line x1="-1.1" y1="2.5" x2="0.6" y2="2.5" stroke="#7E2C4D" strokeWidth="0.3" opacity="0.6" />
            <rect x="0.8" y="0.4" width="1.7" height="4" rx="0.5" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.4" />
            <line x1="0.8" y1="2.2" x2="2.5" y2="2.2" stroke="#7E2C4D" strokeWidth="0.3" opacity="0.6" />
            <ellipse cx="4" cy="-1.5" rx="1.5" ry="2" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.4" />
          </g>
          {/* Shield with star */}
          <g transform="translate(-50, 28)">
            <path d="M 0 -10 L 8 -7 L 8 1.5 Q 8 7 0 11 Q -8 7 -8 1.5 L -8 -7 Z" fill="#FFFFFF" stroke="#7E2C4D" strokeWidth="1.3" strokeLinejoin="round" />
            <path d="M 0 -10 L 8 -7 L 8 1.5 Q 8 7 0 11 Q -8 7 -8 1.5 L -8 -7 Z" fill="url(#tw-rose-body)" opacity="0.18" />
            <path d="M -3.5 1 L -1 3.5 L 4 -2.5" stroke="#48B594" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 0 -7 L 0.5 -5.6 L 2 -5.6 L 0.8 -4.7 L 1.2 -3.4 L 0 -4.2 L -1.2 -3.4 L -0.8 -4.7 L -2 -5.6 L -0.5 -5.6 Z" fill="#A53D67" opacity="0.45" />
          </g>

          {/* RIGHT ARM raised with key */}
          <circle cx="22" cy="-10" r="3" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.7" />
          <line x1="22" y1="-10" x2="30" y2="-22" stroke="url(#tw-rose-limb)" strokeWidth="6" strokeLinecap="round" />
          <circle cx="30" cy="-22" r="2.4" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.7" />
          <line x1="30" y1="-22" x2="38" y2="-34" stroke="url(#tw-rose-limb)" strokeWidth="6" strokeLinecap="round" />
          <g transform="translate(38, -36) rotate(20)">
            <ellipse cx="0" cy="-3.5" rx="3.8" ry="1.7" fill="#7E2C4D" />
            <rect x="-3.8" y="-3" width="7.6" height="3.4" rx="1.4" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.5" />
            <rect x="-3" y="-7.5" width="1.7" height="5" rx="0.5" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.4" />
            <rect x="-1.1" y="-8.5" width="1.7" height="6" rx="0.5" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.4" />
            <rect x="0.8" y="-7.5" width="1.7" height="5" rx="0.5" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.4" />
            <ellipse cx="4" cy="-1.5" rx="1.5" ry="2" fill="url(#tw-rose-body)" stroke="#7E2C4D" strokeWidth="0.4" />
          </g>
          {/* Key */}
          <g transform="translate(40, -48) rotate(20)">
            <circle cx="0" cy="-3" r="3.6" fill="none" stroke="#FBBF24" strokeWidth="1.7" />
            <circle cx="0" cy="-3" r="1.4" fill="#FBBF24" />
            <line x1="0" y1="0.4" x2="0" y2="10" stroke="#FBBF24" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="0" y1="6.8" x2="2.8" y2="6.8" stroke="#FBBF24" strokeWidth="1.7" strokeLinecap="round" />
            <line x1="0" y1="9" x2="2.2" y2="9" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
            <g stroke="#FBBF24" strokeWidth="0.7" strokeLinecap="round" opacity="0.85">
              <line x1="-7" y1="-7" x2="-9" y2="-8" />
              <line x1="-3" y1="-10" x2="-3" y2="-12" />
              <line x1="-7" y1="-3" x2="-9" y2="-3" />
            </g>
          </g>

          {/* HOVER THRUSTER */}
          <ellipse cx="0" cy="38" rx="22" ry="3.2" fill="url(#tw-rose-limb)" stroke="#7E2C4D" strokeWidth="0.6" />
          <ellipse cx="0" cy="36.6" rx="19" ry="1.4" fill="#FFFFFF" opacity="0.32" />
          <ellipse cx="0" cy="40.4" rx="18" ry="1.2" fill="#F4ACC1" />
          <line x1="-12" y1="40.4" x2="-7" y2="40.4" stroke="#7E2C4D" strokeWidth="0.5" opacity="0.65" />
          <line x1="-3"  y1="40.4" x2="3"  y2="40.4" stroke="#7E2C4D" strokeWidth="0.5" opacity="0.65" />
          <line x1="7"   y1="40.4" x2="12" y2="40.4" stroke="#7E2C4D" strokeWidth="0.5" opacity="0.65" />

          {/* Hover thrust glow cascade */}
          <ellipse cx="0" cy="46" rx="20" ry="3" fill="#F4ACC1" opacity="0.45" />
          <ellipse cx="0" cy="52" rx="24" ry="2.4" fill="#F4ACC1" opacity="0.25" />
          <ellipse cx="0" cy="58" rx="28" ry="1.8" fill="#F4ACC1" opacity="0.12" />
        </g>
      </svg>
    </div>
  )
}
