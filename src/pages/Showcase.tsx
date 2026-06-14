import { CSSProperties } from 'react'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import ScrollReveal from '../components/ScrollReveal'

interface App {
  name: string
  tagline: string
  description: string
  /** Screenshot in /public/showcase — rendered 16:9, anchored to the top. */
  image: string
  tags: string[]
  /** Hosted live demo, if one is available. */
  liveUrl?: string
  /** Public source repository, if one is available. */
  source?: string
}

// Applications the build factory has produced. Append new entries here —
// the grid and cards scale automatically.
const apps: App[] = [
  {
    name: 'Buyer Outreach',
    tagline: 'Strategic buyer outreach for sell-side M&A.',
    description:
      'A multi-mandate platform that enriches buyer data, sequences outreach, runs NDAs and tracks the pipeline — with a human-in-the-loop checkpoint at every send and every client-facing decision.',
    image: '/showcase/buyer-outreach.png',
    tags: ['M&A', 'Outreach', 'Human-in-the-loop'],
    liveUrl: 'https://buyer-outreach.eqr.vc/',
    source: 'https://github.com/TotallyWildAi/buyer-outreach',
  },
  {
    name: 'xBullRadar',
    tagline: 'An AI-native investment analytics terminal.',
    description:
      'Real-time X sentiment, technical indicators and fundamentals fused into clear buy, sell and neutral verdicts — with a Grok-powered co-pilot that analyses holdings and rebalances by voice.',
    image: '/showcase/xbullradar.png',
    tags: ['FinTech', 'Analytics', 'AI co-pilot'],
    liveUrl: 'https://app.xbullradar.com',
    source: 'https://github.com/TotallyWildAi/xbullradar',
  },
  {
    name: 'Graph Query Agent',
    tagline: 'Plain English to auditable graph queries.',
    description:
      'Turns plain-English questions into reviewed, parameterised Cypher over a Neo4j knowledge graph. Every value traces back to its source, and write operations wait for explicit approval.',
    image: '/showcase/graph-query-agent.png',
    tags: ['Knowledge graph', 'Neo4j', 'Auditable'],
    liveUrl: 'https://graphagent.eqr.vc/',
    source: 'https://github.com/TotallyWildAi/graph-query-agent',
  },
]

const GHOST_BTN_SMALL: CSSProperties = {
  padding: '0.55rem 1.1rem',
  fontSize: '0.8rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
}

const TAG_STYLE: CSSProperties = {
  fontSize: '0.68rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  padding: '0.2rem 0.6rem',
  borderRadius: 100,
  background: '#E8EFE6',
  color: '#2C4F38',
}

function AppCard({ app }: { app: App }) {
  return (
    <article className="sage-card lift" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="tpl-preview">
        <img
          src={app.image}
          alt={`${app.name} interface`}
          loading="lazy"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            display: 'block',
          }}
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.7rem' }}>
        {app.tags.map((tag) => (
          <span key={tag} style={TAG_STYLE}>
            {tag}
          </span>
        ))}
      </div>

      <h2
        style={{
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--tw-text-primary)',
          marginBottom: '0.2rem',
          fontFamily: 'var(--tw-font-display)',
        }}
      >
        {app.name}
      </h2>
      <p style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--tw-text-accent)', marginBottom: '0.5rem' }}>
        {app.tagline}
      </p>
      <p style={{ fontSize: '0.84rem', color: 'var(--tw-text-secondary)', lineHeight: 1.7, marginBottom: '1.1rem' }}>
        {app.description}
      </p>

      <div style={{ marginTop: 'auto', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
        {app.liveUrl && (
          <a
            href={app.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill"
            style={GHOST_BTN_SMALL}
          >
            Visit live
            <span className="btn-arrow">→</span>
          </a>
        )}
        {app.source && (
          <a
            href={app.source}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={GHOST_BTN_SMALL}
          >
            <i className="ti ti-brand-github" aria-hidden="true" />
            View source
          </a>
        )}
      </div>
    </article>
  )
}

export default function Showcase() {
  return (
    <>
      {/* Hero */}
      <div className="hero-wrap">
        <div style={{ padding: '4rem 6vw 3rem', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Eyebrow>Showcase</Eyebrow>
          <h1
            className="hero-h1-dark"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '0.4em' }}
          >
            Applications built by the factory
          </h1>
          <p className="hero-sub" style={{ marginBottom: 0, maxWidth: 600 }}>
            Complete applications our autonomous build factory designed, wrote and
            shipped — each one explorable live, with the source open to read.
          </p>
        </div>
      </div>

      {/* App grid */}
      <section className="section-wrap section-g">
        <div className="section-inner">
          <ScrollReveal>
            <div className="sage-grid-2">
              {apps.map((app) => (
                <AppCard key={app.name} app={app} />
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
                <h3>Have something to build?</h3>
                <p>Describe what you need. The factory builds, tests and ships it — and you own every line.</p>
              </div>
              <Button variant="ghost" to="/contact">
                Start a build
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
