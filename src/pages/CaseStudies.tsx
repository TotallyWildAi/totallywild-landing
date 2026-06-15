import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import ScrollReveal from '../components/ScrollReveal'
import { caseStudies } from '../data/caseStudies'

const TAG_STYLE: CSSProperties = {
  fontSize: '0.68rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  padding: '0.2rem 0.6rem',
  borderRadius: 100,
  background: '#E8EFE6',
  color: '#2C4F38',
  alignSelf: 'flex-start',
}

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <div className="hero-wrap">
        <div style={{ padding: '4rem 6vw 3rem', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Eyebrow>Case studies</Eyebrow>
          <h1 className="hero-h1-dark" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '0.4em' }}>
            Proof, in production.
          </h1>
          <p className="hero-sub" style={{ marginBottom: 0, maxWidth: 600 }}>
            Real engagements — the problem, what the factory built, and the result.
          </p>
        </div>
      </div>

      {/* Case study grid */}
      <section className="section-wrap section-g">
        <div className="section-inner">
          <ScrollReveal>
            <div className="sage-grid-2">
              {caseStudies.map((c) => (
                <Link
                  key={c.slug}
                  to={`/case-studies/${c.slug}`}
                  className="sage-card lift"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <span style={TAG_STYLE}>{c.tag}</span>

                  <h2
                    style={{
                      fontFamily: 'var(--tw-font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--tw-text-primary)',
                      margin: '0.9rem 0 0.9rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {c.title}
                  </h2>

                  <div style={{ marginBottom: '0.9rem' }}>
                    <div
                      style={{
                        fontFamily: 'var(--tw-font-display)',
                        color: 'var(--tw-text-accent)',
                        fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                        lineHeight: 1.1,
                        marginBottom: '0.3rem',
                      }}
                    >
                      {c.metrics[0].value}
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--tw-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {c.metrics[0].label}
                    </p>
                  </div>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--tw-text-secondary)',
                      lineHeight: 1.7,
                      marginBottom: '1.1rem',
                    }}
                  >
                    {c.lede}
                  </p>

                  <span
                    style={{
                      marginTop: 'auto',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--tw-text-accent)',
                    }}
                  >
                    Read the case study →
                  </span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing call-out */}
      <section className="section-wrap" style={{ paddingTop: '0.5rem' }}>
        <div className="section-inner">
          <ScrollReveal>
            <div className="callout" style={{ marginBottom: '0.5rem' }}>
              <div>
                <h3>Want results like these?</h3>
                <p>Describe what you need. The factory builds, tests and ships it — and you own every line.</p>
              </div>
              <Button variant="ghost" to="/contact">
                Book a build
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
