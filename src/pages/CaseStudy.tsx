import { CSSProperties } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import ScrollReveal from '../components/ScrollReveal'
import SectionTitle from '../components/SectionTitle'
import { caseStudyBySlug } from '../data/caseStudies'

const APP_URL = 'https://app.totallywild.ai/'

const HEADING_STYLE: CSSProperties = {
  fontFamily: 'var(--tw-font-display)',
  fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)',
  fontWeight: 700,
  color: 'var(--tw-text-primary)',
  lineHeight: 1.15,
  margin: '0 0 0.5rem',
}

const SUB_STYLE: CSSProperties = {
  fontSize: '0.94rem',
  color: 'var(--tw-text-secondary)',
  lineHeight: 1.8,
  maxWidth: 680,
  marginBottom: '1.8rem',
}

const BODY_STYLE: CSSProperties = {
  fontSize: '0.94rem',
  color: 'var(--tw-text-secondary)',
  lineHeight: 1.85,
  maxWidth: 680,
  marginBottom: '1rem',
}

const COL_LABEL_STYLE: CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--tw-text-tertiary)',
  marginBottom: '0.35rem',
}

export default function CaseStudy() {
  const { slug } = useParams()
  const cs = caseStudyBySlug(slug)
  if (!cs) return <Navigate to="/case-studies" replace />

  return (
    <>
      {/* Hero */}
      <div className="hero-wrap">
        <div style={{ padding: '4rem 6vw 3rem', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Eyebrow>{cs.vertical}</Eyebrow>
          <h1 className="hero-h1-dark" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '0.4em' }}>
            {cs.title}
          </h1>
          <p className="hero-sub" style={{ marginBottom: '0.8rem', maxWidth: 680 }}>
            {cs.lede}
          </p>
          <p style={{ fontSize: '0.84rem', color: 'var(--tw-text-tertiary)', lineHeight: 1.7, maxWidth: 600, marginBottom: '2.2rem' }}>
            {cs.client}
          </p>

          {/* Metrics band */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.6rem',
              marginBottom: '2.2rem',
            }}
          >
            {cs.metrics.map((m) => (
              <div key={m.label}>
                <div
                  style={{
                    fontFamily: 'var(--tw-font-display)',
                    color: 'var(--tw-text-accent)',
                    fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                    lineHeight: 1.1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {m.value}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--tw-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Button row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
            {cs.liveUrl && (
              <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-fill">
                Visit live demo <span className="btn-arrow">→</span>
              </a>
            )}
            {cs.source && (
              <a
                href={cs.source}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <i className="ti ti-brand-github" aria-hidden="true" />
                View source
              </a>
            )}
            <Button variant="ghost" to="/contact">
              Book a build
            </Button>
          </div>
        </div>
      </div>

      {/* Problem */}
      <section className="section-wrap section-g">
        <div className="section-inner">
          <ScrollReveal>
            <SectionTitle>{cs.problem.heading}</SectionTitle>
            {cs.problem.body.map((p, i) => (
              <p key={i} style={BODY_STYLE}>
                {p}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Pipeline */}
      {cs.pipeline && (
        <section className="section-wrap">
          <div className="section-inner">
            <ScrollReveal>
              <h2 style={HEADING_STYLE}>{cs.pipeline.heading}</h2>
              <p style={SUB_STYLE}>{cs.pipeline.sub}</p>
            </ScrollReveal>
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {cs.pipeline.stages.map((stage) => (
                  <article key={stage.n} className="sage-card">
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', marginBottom: '1rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--tw-font-display)',
                          fontSize: '1.1rem',
                          color: 'var(--tw-text-accent)',
                        }}
                      >
                        {stage.n}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--tw-font-display)',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: 'var(--tw-text-primary)',
                          margin: 0,
                        }}
                      >
                        {stage.name}
                      </h3>
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1.2rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <div>
                        <p style={COL_LABEL_STYLE}>Traditional</p>
                        <p style={{ fontSize: '0.86rem', color: 'var(--tw-text-tertiary)', lineHeight: 1.7, margin: 0 }}>
                          {stage.traditional}
                        </p>
                      </div>
                      <div>
                        <p style={COL_LABEL_STYLE}>With the factory</p>
                        <p style={{ fontSize: '0.86rem', color: 'var(--tw-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                          {stage.withAI}
                        </p>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--tw-text-accent)', margin: 0 }}>
                      → {stage.result}
                    </p>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Features */}
      {cs.features && (
        <section className="section-wrap section-g">
          <div className="section-inner">
            <ScrollReveal>
              <h2 style={HEADING_STYLE}>{cs.features.heading}</h2>
              {cs.features.sub && <p style={SUB_STYLE}>{cs.features.sub}</p>}
            </ScrollReveal>
            <ScrollReveal>
              <div className="sage-grid">
                {cs.features.items.map((item) => (
                  <article key={item.title} className="sage-card lift">
                    <h3
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: 'var(--tw-text-primary)',
                        margin: '0 0 0.45rem',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: 'var(--tw-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Results */}
      {cs.results && (
        <section className="section-wrap">
          <div className="section-inner">
            <ScrollReveal>
              <h2 style={HEADING_STYLE}>{cs.results.heading}</h2>
              <p style={SUB_STYLE}>{cs.results.sub}</p>
            </ScrollReveal>
            <ScrollReveal>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem' }}>
                  <thead>
                    <tr>
                      {['Activity', 'Traditional', 'With the factory', 'Reduction'].map((h) => (
                        <th
                          key={h}
                          style={{
                            ...COL_LABEL_STYLE,
                            textAlign: 'left',
                            padding: '0.6rem 0.8rem',
                            borderBottom: '0.5px solid var(--tw-border-primary)',
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cs.results.rows.map((row) => {
                      const isTotal = row.activity === 'Total per file'
                      const weight = isTotal ? 700 : 400
                      return (
                        <tr key={row.activity}>
                          <td
                            style={{
                              padding: '0.7rem 0.8rem',
                              borderBottom: '0.5px solid var(--tw-border-primary)',
                              color: 'var(--tw-text-primary)',
                              fontWeight: weight,
                            }}
                          >
                            {row.activity}
                          </td>
                          <td
                            style={{
                              padding: '0.7rem 0.8rem',
                              borderBottom: '0.5px solid var(--tw-border-primary)',
                              color: 'var(--tw-text-tertiary)',
                              fontWeight: weight,
                            }}
                          >
                            {row.traditional}
                          </td>
                          <td
                            style={{
                              padding: '0.7rem 0.8rem',
                              borderBottom: '0.5px solid var(--tw-border-primary)',
                              color: 'var(--tw-text-secondary)',
                              fontWeight: weight,
                            }}
                          >
                            {row.withAI}
                          </td>
                          <td
                            style={{
                              padding: '0.7rem 0.8rem',
                              borderBottom: '0.5px solid var(--tw-border-primary)',
                              color: 'var(--tw-text-accent)',
                              fontWeight: isTotal ? 700 : 600,
                            }}
                          >
                            {row.reduction}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Human in the loop */}
      {cs.humanInLoop && (
        <section className="section-wrap section-g">
          <div className="section-inner">
            <ScrollReveal>
              <h2 style={HEADING_STYLE}>{cs.humanInLoop.heading}</h2>
              <ul style={{ listStyle: 'none', margin: '0.8rem 0 1.4rem', padding: 0, maxWidth: 680 }}>
                {cs.humanInLoop.staysHuman.map((line) => (
                  <li
                    key={line}
                    style={{
                      display: 'flex',
                      gap: '0.7rem',
                      padding: '0.7rem 0',
                      borderBottom: '0.5px solid var(--tw-border-primary)',
                      fontSize: '0.88rem',
                      color: 'var(--tw-text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    <span aria-hidden="true" style={{ color: 'var(--tw-text-accent)', fontWeight: 700, flexShrink: 0 }}>
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: '0.88rem',
                  fontStyle: 'italic',
                  color: 'var(--tw-text-tertiary)',
                  lineHeight: 1.8,
                  maxWidth: 680,
                  margin: 0,
                }}
              >
                {cs.humanInLoop.note}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Beyond */}
      {cs.beyond && (
        <section className="section-wrap">
          <div className="section-inner">
            <ScrollReveal>
              <h2 style={HEADING_STYLE}>{cs.beyond.heading}</h2>
              {cs.beyond.body.map((p, i) => (
                <p key={i} style={BODY_STYLE}>
                  {p}
                </p>
              ))}
            </ScrollReveal>
            {cs.beyond.items && (
              <ScrollReveal>
                <div className="sage-grid" style={{ marginTop: '1rem' }}>
                  {cs.beyond.items.map((item) => (
                    <article key={item.title} className="sage-card lift">
                      <h3
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: 'var(--tw-text-primary)',
                          margin: '0 0 0.45rem',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ fontSize: '0.84rem', color: 'var(--tw-text-secondary)', lineHeight: 1.7, margin: 0 }}>
                        {item.body}
                      </p>
                    </article>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* Closing */}
      {cs.closing && (
        <section className="section-wrap" style={{ paddingTop: '0.5rem' }}>
          <div className="section-inner">
            <ScrollReveal>
              <div className="callout" style={{ marginBottom: '0.5rem' }}>
                <div>
                  <h3>Ready to build something wild?</h3>
                  <p>{cs.closing}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
                  <Button variant="fill" href={APP_URL} arrow>
                    Get started free
                  </Button>
                  <Button variant="ghost" to="/contact">
                    Book a build
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
    </>
  )
}
