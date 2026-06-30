// Friendly line-art robot that rises from behind the hero headline and waves.
// Pure SVG + CSS (animation lives in index.css: .hero-robot / .wave-arm).
// Colours come from theme tokens via the rb-* classes, so it adapts to
// light/dark. The whole thing no-ops under prefers-reduced-motion.

export default function HeroRobot({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 160"
      fill="none"
      role="img"
      aria-label="A robot waving"
    >
      {/* antenna */}
      <line className="rb-limb rb-limb-thin" x1="100" y1="26" x2="100" y2="14" />
      <circle className="rb-accent" cx="100" cy="9" r="5" />

      {/* resting arm (robot's right) draped over the headline edge */}
      <path className="rb-limb" d="M76 102 C 60 106, 50 118, 48 130" />
      <rect className="rb-body" x="38" y="124" width="20" height="14" rx="6" />

      {/* waving arm (robot's left) — pivots at the shoulder */}
      <g className="wave-arm">
        <path className="rb-limb" d="M124 102 L142 80 L150 58" />
        <rect className="rb-body" x="142" y="44" width="17" height="15" rx="5" />
        <line className="rb-thin" x1="147" y1="45" x2="145" y2="34" />
        <line className="rb-thin" x1="151" y1="44" x2="151" y2="32" />
        <line className="rb-thin" x1="155" y1="45" x2="158" y2="35" />
      </g>

      {/* torso (mostly hidden behind the headline) */}
      <rect className="rb-body" x="70" y="84" width="60" height="68" rx="20" />
      <circle className="rb-accent" cx="100" cy="116" r="7" />

      {/* side bolts */}
      <rect className="rb-body" x="53" y="46" width="9" height="22" rx="4" />
      <rect className="rb-body" x="138" y="46" width="9" height="22" rx="4" />

      {/* head */}
      <rect className="rb-body" x="60" y="24" width="80" height="62" rx="22" />

      {/* eyes */}
      <circle className="rb-accent" cx="84" cy="54" r="8" />
      <circle className="rb-accent" cx="116" cy="54" r="8" />
      <circle className="rb-shine" cx="81" cy="51" r="2.5" />
      <circle className="rb-shine" cx="113" cy="51" r="2.5" />

      {/* smile */}
      <path className="rb-thin" d="M86 68 Q100 80 114 68" />
    </svg>
  )
}
