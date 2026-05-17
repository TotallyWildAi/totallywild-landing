import '../paper.css'
import ParticleCloud from '../components/ParticleCloud'
import { useDocumentTheme, PARTICLE_THEMES } from '../paperTheme'

type Category = 'creator' | 'hero' | 'demo' | 'mark' | 'device'
type PreviewKind = 'particles' | 'mesh' | 'terminal' | 'orbit' | 'device' | 'placeholder'

interface Template {
  name: string
  tagline: string
  category: Category
  categoryLabel: string
  iconClass: string
  features: string[]
  github?: string
  /** Discriminator for which mini-preview to render at the top of the card. */
  previewKind: PreviewKind
  /** Optional URL to a hosted live demo (separate from the GitHub repo). */
  preview?: string
  status: 'available' | 'coming-soon'
}

const templates: Template[] = [
  {
    name: 'Particle Cloud',
    tagline:
      'Drop-in animated background with constellation links, drag-and-throw, and click shockwaves.',
    category: 'creator',
    categoryLabel: 'Background',
    iconClass: 'ti ti-wand',
    features: [
      'Single dependency-free HTML file',
      'Day and night themes built in',
      'Drag a particle, fling it, click for a shockwave',
    ],
    github: 'https://github.com/TotallyWildAi/particles-cloud',
    previewKind: 'particles',
    status: 'available',
  },
  {
    name: 'Hero Mesh',
    tagline:
      'Soft iris-tonal radial gradients with a grid overlay. Calm hero backgrounds without flat fills.',
    category: 'hero',
    categoryLabel: 'Hero',
    iconClass: 'ti ti-prism-light',
    features: [
      'Pure CSS, no runtime cost',
      'Theme-aware via design tokens',
      'Drops behind any hero section',
    ],
    github: 'https://github.com/TotallyWildAi/hero-mesh',
    previewKind: 'mesh',
    status: 'available',
  },
  {
    name: 'Code Terminal',
    tagline:
      'Typewriter terminal that replays a script line by line. Great for in-page product demos.',
    category: 'demo',
    categoryLabel: 'Demo',
    iconClass: 'ti ti-terminal-2',
    features: [
      'Configurable speed and pause',
      'Realistic cursor blink',
      'Pause-on-hover and replay controls',
    ],
    github: 'https://github.com/TotallyWildAi/code-terminal',
    previewKind: 'terminal',
    status: 'available',
  },
  {
    name: 'Orbit',
    tagline:
      'Slow-rotating iris icosahedron rendered in Blender. A tasteful 3D centerpiece for hero sections.',
    category: 'mark',
    categoryLabel: 'Mark',
    iconClass: 'ti ti-3d-cube-sphere',
    features: [
      'Seamless 6-second rotation loop',
      'Day and night MP4 variants (~1 MB each)',
      'Real Blender materials with Eevee bloom',
    ],
    github: 'https://github.com/TotallyWildAi/orbit',
    previewKind: 'orbit',
    status: 'available',
  },
  {
    name: 'Device Frame',
    tagline:
      '3D iPhone-class phone rendered in Blender. Drop your app screenshot onto the screen for a universal product showcase.',
    category: 'device',
    categoryLabel: 'Device',
    iconClass: 'ti ti-device-mobile',
    features: [
      'Seamless 6-second rotation loop',
      'Day and night MP4 variants (~1 MB each)',
      'Swap the screen content via the bundled .blend',
    ],
    github: 'https://github.com/TotallyWildAi/device-frame',
    previewKind: 'device',
    status: 'available',
  },
]

// ─── Card preview components ────────────────────────────────────────────
// Each one renders a live mini-instance of the template, so the previews
// stay accurate as the templates evolve. Theme-aware via the `theme` prop.

function ParticlesPreview({ theme }: { theme: 'day' | 'night' }) {
  const p = PARTICLE_THEMES[theme]
  return (
    <ParticleCloud
      inline
      interactive={false}
      bgColor={p.bgColor}
      particleColor={p.particleColor}
      linkColor={p.linkColor}
      glowColor={p.glowColor}
      count={45}
      speed={0.22}
      linkRadius={55}
      cursorPull={0}
      cursorRadius={0}
    />
  )
}

const MESH_DAY = [
  'radial-gradient(ellipse 60% 55% at 18% 22%, rgba(110, 92, 204, 0.22) 0%, transparent 65%)',
  'radial-gradient(ellipse 55% 50% at 82% 18%, rgba(155, 142, 232, 0.18) 0%, transparent 65%)',
  'radial-gradient(ellipse 70% 60% at 88% 82%, rgba(221, 216, 247, 0.55) 0%, transparent 70%)',
  'radial-gradient(ellipse 65% 55% at 12% 85%, rgba(243, 241, 252, 0.70) 0%, transparent 70%)',
  'radial-gradient(ellipse 80% 65% at 50% 50%, rgba(110, 92, 204, 0.08) 0%, transparent 75%)',
].join(', ')

const MESH_NIGHT = [
  'radial-gradient(ellipse 60% 55% at 18% 22%, rgba(110, 92, 204, 0.32) 0%, transparent 65%)',
  'radial-gradient(ellipse 55% 50% at 82% 18%, rgba(155, 142, 232, 0.22) 0%, transparent 65%)',
  'radial-gradient(ellipse 70% 60% at 88% 82%, rgba(72, 56, 148, 0.35) 0%, transparent 70%)',
  'radial-gradient(ellipse 65% 55% at 12% 85%, rgba(45, 33, 100, 0.40) 0%, transparent 70%)',
  'radial-gradient(ellipse 80% 65% at 50% 50%, rgba(110, 92, 204, 0.14) 0%, transparent 75%)',
].join(', ')

function MeshPreview({ theme }: { theme: 'day' | 'night' }) {
  const isNight = theme === 'night'
  const gridColor = isNight ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)'
  const vignette =
    'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 55%, transparent 100%)'
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: isNight ? MESH_NIGHT : MESH_DAY,
        backgroundColor: isNight ? '#0F0F0F' : '#FFFFFF',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${gridColor} 0.5px, transparent 0.5px),
            linear-gradient(90deg, ${gridColor} 0.5px, transparent 0.5px)
          `,
          backgroundSize: '14px 14px',
          maskImage: vignette,
          WebkitMaskImage: vignette,
        }}
      />
    </div>
  )
}

function TerminalPreview({ theme }: { theme: 'day' | 'night' }) {
  const isNight = theme === 'night'
  const bg = isNight ? '#1A1A1A' : '#F7F7F7'
  const chrome = isNight ? '#2E2E2E' : '#F0F0F0'
  const fg = isNight ? '#FFFFFF' : '#0F0F0F'
  const dim = isNight ? '#A1A1A1' : '#8A8A8A'
  const accent = isNight ? '#9B8EE8' : '#6E5CCC'
  const success = isNight ? '#4ADE80' : '#16A34A'
  const border = isNight ? 'rgba(255, 255, 255, 0.12)' : '#E2E2E2'
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: bg,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          background: chrome,
          padding: '6px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          borderBottom: `0.5px solid ${border}`,
          flexShrink: 0,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF5F57' }} />
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FEBC2E' }} />
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#28C840' }} />
      </div>
      {/* Body */}
      <div
        style={{
          padding: '10px 12px',
          fontFamily: "'Geist Mono', 'SF Mono', monospace",
          fontSize: '9px',
          lineHeight: 1.55,
          color: fg,
          flex: 1,
          overflow: 'hidden',
          whiteSpace: 'pre',
        }}
      >
        <div>
          <span style={{ color: accent }}>$ </span>
          tw run --project invoice-app
        </div>
        <div style={{ color: dim, fontStyle: 'italic' }}>
          [Analysis] 12 stories identified
        </div>
        <div style={{ color: accent }}>
          [Engineer 1] auth service... 14 files
        </div>
        <div style={{ color: accent }}>
          [Engineer 2] invoice API... 18 files
        </div>
        <div style={{ color: success }}>
          [Deploy] Live at invoice-app.totallywild.ai
        </div>
        <div>
          <span style={{ color: accent }}>$ </span>
          <span
            style={{
              display: 'inline-block',
              width: '0.5em',
              height: '1em',
              background: fg,
              verticalAlign: '-2px',
              animation: 'term-preview-blink 1.05s steps(1) infinite',
            }}
          />
        </div>
      </div>
    </div>
  )
}

function OrbitPreview({ theme }: { theme: 'day' | 'night' }) {
  // The mp4s render with their own solid background, so the surrounding
  // box just needs to host the <video> at 16:9. Two <video> elements both
  // mount and play; CSS shows/hides whichever matches the theme so the
  // toggle is instant.
  const src = theme === 'night' ? '/templates/orbit-night.mp4' : '/templates/orbit-day.mp4'
  return (
    <video
      key={src}
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

function DevicePreview({ theme }: { theme: 'day' | 'night' }) {
  const src = theme === 'night' ? '/templates/device-night.mp4' : '/templates/device-day.mp4'
  return (
    <video
      key={src}
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

function PlaceholderPreview() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        placeItems: 'center',
        fontSize: '10px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--warm-text-mute)',
      }}
    >
      <span>preview soon</span>
    </div>
  )
}

function CardPreview({
  kind,
  theme,
}: {
  kind: PreviewKind
  theme: 'day' | 'night'
}) {
  switch (kind) {
    case 'particles':
      return <ParticlesPreview theme={theme} />
    case 'mesh':
      return <MeshPreview theme={theme} />
    case 'terminal':
      return <TerminalPreview theme={theme} />
    case 'orbit':
      return <OrbitPreview theme={theme} />
    case 'device':
      return <DevicePreview theme={theme} />
    default:
      return <PlaceholderPreview />
  }
}

function TemplateCard({
  t,
  theme,
}: {
  t: Template
  theme: 'day' | 'night'
}) {
  const available = t.status === 'available'
  return (
    <article className="tw-card">
      <div className="tw-card-preview">
        <CardPreview kind={t.previewKind} theme={theme} />
      </div>
      <div className="tw-card-head">
        <div className={`tw-card-icon ${t.category}`}>
          <i className={t.iconClass} aria-hidden="true" />
        </div>
        <span className={`tw-card-tag ${t.category}`}>{t.categoryLabel}</span>
      </div>

      <h2>{t.name}</h2>
      <p className="tw-card-desc">{t.tagline}</p>

      <div className="tw-features">
        {t.features.map((f) => (
          <div key={f}>
            <i className="ti ti-check" aria-hidden="true" />
            <span>{f}</span>
          </div>
        ))}
      </div>

      <div className="tw-card-footer">
        <div className="tw-actions">
          {available && t.github ? (
            <>
              <a
                href={t.github}
                target="_blank"
                rel="noopener noreferrer"
                className="tw-btn tw-btn-primary"
              >
                <i className="ti ti-brand-github" aria-hidden="true" />
                View on GitHub
              </a>
              {t.preview && (
                <a
                  href={t.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw-btn tw-btn-secondary"
                >
                  Preview
                </a>
              )}
            </>
          ) : (
            <button
              className="tw-btn tw-btn-secondary"
              disabled
              aria-disabled="true"
              style={{ flex: 1 }}
            >
              Coming soon
            </button>
          )}
        </div>
        {available ? (
          <p className="tw-price-note">Free · MIT-friendly · no dependencies</p>
        ) : (
          <p className="tw-price-note">In the queue · drops here when ready</p>
        )}
      </div>
    </article>
  )
}

export default function Creators() {
  const theme = useDocumentTheme()
  const p = PARTICLE_THEMES[theme]
  return (
    <div className="paper-page">
      {/* Live particle cloud as the page background — showcase of the template.
          Colours swap when the nav theme toggle flips data-theme on <html>. */}
      <ParticleCloud
        bgColor={p.bgColor}
        particleColor={p.particleColor}
        linkColor={p.linkColor}
        glowColor={p.glowColor}
        count={250}
        speed={0.32}
        linkRadius={130}
        cursorPull={0.04}
        cursorRadius={170}
      />
      <div className="paper-shell">
        {/* Hero */}
        <header className="paper-hero">
          <div className="paper-eyebrow">
            <i className="ti ti-sparkles" aria-hidden="true" />
            For Creators
          </div>
          <h1>Templates and building blocks</h1>
          <p>
            Small, drop-in components we use to build our own product surface.
            Take one, fork it, ship it.
          </p>
        </header>

        {/* Template grid */}
        <section className="paper-grid">
          {templates.map((t) => (
            <TemplateCard key={t.name} t={t} theme={theme} />
          ))}
        </section>

        {/* Friendly call-out */}
        <div className="paper-callout">
          <div className="paper-callout-text">
            <i className="ti ti-info-circle" aria-hidden="true" />
            <span>Have a template idea? Tell us what you need next.</span>
          </div>
          <a href="/contact" className="tw-btn tw-btn-secondary">Request a template</a>
        </div>

        {/* Footer note */}
        <p className="paper-note">
          More templates land here as we extract them from our own work.
        </p>
      </div>
    </div>
  )
}
