import { CSSProperties } from 'react'
import ParticleCloud from '../components/ParticleCloud'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import ScrollReveal from '../components/ScrollReveal'

type Category = 'creator' | 'hero' | 'demo' | 'mark'
type PreviewKind = 'particles' | 'mesh' | 'terminal' | 'orbit' | 'placeholder'

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
]

// Category chip tints in the new palette (green / terracotta / sage / amber).
const CATEGORY_COLORS: Record<Category, { bg: string; fg: string }> = {
  creator: { bg: '#E8EFE6', fg: '#2C4F38' },
  hero: { bg: '#FDE8DC', fg: '#A84E28' },
  demo: { bg: '#E5F4ED', fg: '#1D5A45' },
  mark: { bg: '#FAF0DC', fg: '#7A5C18' },
}

// ─── Card preview components ────────────────────────────────────────────
// Each one renders a live mini-instance of the template, so the previews
// stay accurate as the templates evolve. The templates ship their own
// (iris-era) palettes — they're showcased content, not site chrome.

const PARTICLE_PALETTE = {
  bgColor: '#fafaf7',
  particleColor: '60, 52, 137',
  linkColor: '110, 92, 204',
  glowColor: '155, 142, 232',
} as const

function ParticlesPreview() {
  return (
    <ParticleCloud
      inline
      interactive={false}
      bgColor={PARTICLE_PALETTE.bgColor}
      particleColor={PARTICLE_PALETTE.particleColor}
      linkColor={PARTICLE_PALETTE.linkColor}
      glowColor={PARTICLE_PALETTE.glowColor}
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

function MeshPreview() {
  const gridColor = 'rgba(0, 0, 0, 0.06)'
  const vignette =
    'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 55%, transparent 100%)'
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: MESH_DAY,
        backgroundColor: '#FFFFFF',
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

function TerminalPreview() {
  const bg = '#F7F7F7'
  const chrome = '#F0F0F0'
  const fg = '#0F0F0F'
  const dim = '#8A8A8A'
  const accent = '#6E5CCC'
  const success = '#16A34A'
  const border = '#E2E2E2'
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

function OrbitPreview() {
  // The mp4 renders with its own solid background, so the surrounding box
  // just needs to host the <video> at 16:9.
  return (
    <video
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
      <source src="/templates/orbit-day.mp4" type="video/mp4" />
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
        color: 'var(--tw-text-tertiary)',
      }}
    >
      <span>preview soon</span>
    </div>
  )
}

function CardPreview({ kind }: { kind: PreviewKind }) {
  switch (kind) {
    case 'particles':
      return <ParticlesPreview />
    case 'mesh':
      return <MeshPreview />
    case 'terminal':
      return <TerminalPreview />
    case 'orbit':
      return <OrbitPreview />
    default:
      return <PlaceholderPreview />
  }
}

const GHOST_BTN_SMALL: CSSProperties = {
  padding: '0.55rem 1.1rem',
  fontSize: '0.8rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
}

function TemplateCard({ t }: { t: Template }) {
  const available = t.status === 'available'
  const chip = CATEGORY_COLORS[t.category]
  return (
    <article className="sage-card lift" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="tpl-preview">
        <CardPreview kind={t.previewKind} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.7rem' }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: chip.bg,
            color: chip.fg,
            fontSize: 17,
          }}
        >
          <i className={t.iconClass} aria-hidden="true" />
        </div>
        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '0.2rem 0.6rem',
            borderRadius: 100,
            background: chip.bg,
            color: chip.fg,
          }}
        >
          {t.categoryLabel}
        </span>
      </div>

      <h2
        style={{
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--tw-text-primary)',
          marginBottom: '0.35rem',
          fontFamily: 'var(--tw-font-display)',
        }}
      >
        {t.name}
      </h2>
      <p style={{ fontSize: '0.84rem', color: 'var(--tw-text-secondary)', lineHeight: 1.7, marginBottom: '0.9rem' }}>
        {t.tagline}
      </p>

      <div style={{ marginBottom: '1.1rem' }}>
        {t.features.map((f) => (
          <div
            key={f}
            style={{
              display: 'flex',
              gap: '0.5rem',
              fontSize: '0.8rem',
              color: 'var(--tw-text-secondary)',
              padding: '0.18rem 0',
              lineHeight: 1.5,
            }}
          >
            <span aria-hidden="true" style={{ color: 'var(--tw-text-accent)', fontWeight: 700, flexShrink: 0 }}>
              ✓
            </span>
            <span>{f}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 'auto' }}>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
          {available && t.github ? (
            <>
              <a
                href={t.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={GHOST_BTN_SMALL}
              >
                <i className="ti ti-brand-github" aria-hidden="true" />
                View on GitHub
              </a>
              {t.preview && (
                <a
                  href={t.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={GHOST_BTN_SMALL}
                >
                  Preview
                </a>
              )}
            </>
          ) : (
            <button className="btn-ghost" disabled aria-disabled="true" style={{ ...GHOST_BTN_SMALL, opacity: 0.5 }}>
              Coming soon
            </button>
          )}
        </div>
        <p style={{ fontSize: '0.72rem', color: 'var(--tw-text-tertiary)', margin: 0 }}>
          {available ? 'Free · MIT-friendly · no dependencies' : 'In the queue · drops here when ready'}
        </p>
      </div>
    </article>
  )
}

export default function Creators() {
  return (
    <>
      {/* Hero */}
      <div className="hero-wrap">
        <div style={{ padding: '4rem 6vw 3rem', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Eyebrow>For Creators</Eyebrow>
          <h1
            className="hero-h1-dark"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '0.4em' }}
          >
            Templates and building blocks
          </h1>
          <p className="hero-sub" style={{ marginBottom: 0, maxWidth: 560 }}>
            Small, drop-in components we use to build our own product surface.
            Take one, fork it, ship it.
          </p>
        </div>
      </div>

      {/* Template grid */}
      <section className="section-wrap section-g">
        <div className="section-inner">
          <ScrollReveal>
            <div className="sage-grid-2">
              {templates.map((t) => (
                <TemplateCard key={t.name} t={t} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Friendly call-out */}
      <section className="section-wrap" style={{ paddingTop: '0.5rem' }}>
        <div className="section-inner">
          <ScrollReveal>
            <div className="callout" style={{ marginBottom: '0.5rem' }}>
              <div>
                <h3>Have a template idea?</h3>
                <p>Tell us what you need next. More templates land here as we extract them from our own work.</p>
              </div>
              <Button variant="ghost" to="/contact">
                Request a template
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
