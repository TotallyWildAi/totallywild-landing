import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import TerminalDemo from '../components/TerminalDemo'
import ScrollReveal from '../components/ScrollReveal'
import ParticleCloud from '../components/ParticleCloud'
import { useDocumentTheme } from '../paperTheme'

// Tracks viewport width across the md breakpoint (768px). Used to thin the
// hero particle cloud on phones — fewer particles + faster motion feels
// alive without crowding the small screen.
function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])
  return isMobile
}

// Home-tuned particle palette — same iris colours as /creators et al, but
// the canvas paints over bg-primary (white in day, near-black in night)
// instead of the warm cream/dark-warm-grey of the paper-aesthetic pages.
const HOME_PARTICLE_THEMES = {
  day: {
    bgColor: '#FFFFFF',
    particleColor: '60, 52, 137',
    linkColor: '110, 92, 204',
    glowColor: '155, 142, 232',
  },
  night: {
    bgColor: '#0F0F0F',
    particleColor: '255, 255, 255',
    linkColor: '155, 142, 232',
    glowColor: '110, 92, 204',
  },
} as const

export default function Home() {
  const theme = useDocumentTheme()
  const p = HOME_PARTICLE_THEMES[theme]
  const isMobile = useIsMobile()
  // The subtitle gets passed to ParticleCloud as a repel zone so particles
  // flow around its bounding rect instead of drifting over the copy.
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  return (
    <>
      {/* Hero — v6 copy on a ParticleCloud background.
          `inline` so the canvas positions absolute within this section.
          `interactive` so taps/clicks fire ripples and bursts — same touch +
          mouse behavior as the other pages with ParticleCloud. ParticleCloud
          sets touch-action: pan-y for inline+interactive canvases so vertical
          scroll still works on phones; horizontal touches trigger particle
          interaction. */}
      <section className="relative px-6 py-20 md:py-28 overflow-hidden">
        <ParticleCloud
          inline
          interactive
          bgColor={p.bgColor}
          particleColor={p.particleColor}
          linkColor={p.linkColor}
          glowColor={p.glowColor}
          count={isMobile ? 150 : 250}
          speed={isMobile ? 0.6 : 0.32}
          linkRadius={130}
          cursorPull={0.04}
          cursorRadius={170}
          repelRefs={[subtitleRef]}
          repelHalo={48}
          repelStrength={0.5}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center mb-6"
            style={{
              background: 'var(--tw-bg-accent)',
              color: 'var(--tw-text-accent)',
              padding: '4px 10px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              gap: '6px',
            }}
          >
            <i className="ti ti-sparkles" style={{ fontSize: 15 }} aria-hidden="true" />
            Agentic creation platform
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              letterSpacing: '-1.5px',
              lineHeight: 1.08,
              color: 'var(--tw-text-primary)',
            }}
          >
            Build it. Ship it. Sell it.
          </h1>

          <p
            ref={subtitleRef}
            className="inline-block text-lg md:text-xl max-w-3xl mt-6"
            style={{
              color: 'var(--tw-text-primary)',
              lineHeight: 1.55,
              fontWeight: 500,
            }}
          >
            Direct AI agents to build software, games and content. Publish to
            the marketplace or deploy inside your business.
          </p>
        </div>
      </section>

      {/* Two Paths — adapted from C:\code\twai-landing-new\tw_ai_access_page_v6.html.
          Two product cards (Studio + Marketplace for creators, Workshop for
          business) followed by a quiz/contact strip for undecided visitors.
          On bg-primary so it flows from the hero; How It Works below sits on
          bg-secondary, giving the page its alternating panel rhythm. */}
      <ScrollReveal>
        <section className="py-16 md:py-20 px-6" style={{ background: 'var(--tw-bg-primary)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <div
                className="inline-flex items-center"
                style={{
                  background: 'var(--tw-bg-accent)',
                  color: 'var(--tw-text-accent)',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  gap: '6px',
                }}
              >
                <i className="ti ti-route" style={{ fontSize: 15 }} aria-hidden="true" />
                Choose your path
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Creator card */}
              <article
                className="flex flex-col p-6 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: 'var(--tw-bg-primary)',
                  border: '0.5px solid var(--tw-border-primary)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--tw-iris-subtle)', color: 'var(--tw-text-accent)' }}
                  >
                    <i className="ti ti-wand" style={{ fontSize: 18 }} aria-hidden="true" />
                  </div>
                  <span
                    className="text-[11px] px-2 py-1 rounded-md font-semibold uppercase"
                    style={{
                      background: 'var(--tw-iris-subtle)',
                      color: 'var(--tw-text-accent)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    For Creators
                  </span>
                </div>

                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: 'var(--tw-text-primary)', letterSpacing: '-0.01em' }}
                >
                  Studio + Marketplace
                </h3>
                <p className="text-sm mb-5" style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}>
                  Build software, games and content with agents. Own what you make.
                  List it for sale.
                </p>

                <ul className="flex flex-col gap-2 mb-6 flex-1 list-none p-0 m-0">
                  {[
                    'Software, gaming, content design',
                    'You own the output and IP',
                    '80% revenue share, first year',
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2"
                      style={{
                        color: 'var(--tw-text-secondary)',
                        fontSize: '13px',
                        lineHeight: 1.45,
                      }}
                    >
                      <i
                        className="ti ti-check"
                        style={{
                          fontSize: 15,
                          color: 'var(--tw-green)',
                          marginTop: 1,
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 mb-3">
                  <a
                    href="https://app-test.totallywild.ai/"
                    className="flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold text-center transition-all duration-200 hover:opacity-90"
                    style={{
                      background: 'var(--tw-btn-primary-bg)',
                      color: 'var(--tw-btn-primary-text)',
                    }}
                  >
                    Start free
                  </a>
                  <Link
                    to="/creators"
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      background: 'transparent',
                      color: 'var(--tw-text-primary)',
                      border: '0.5px solid var(--tw-border-primary)',
                    }}
                  >
                    Browse templates
                  </Link>
                </div>
                <p
                  className="text-xs text-center"
                  style={{ color: 'var(--tw-text-tertiary)' }}
                >
                  Free tier · Pro · Studio
                </p>
              </article>

              {/* Business card */}
              <article
                className="flex flex-col p-6 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: 'var(--tw-bg-primary)',
                  border: '0.5px solid var(--tw-border-primary)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'var(--tw-bg-tertiary)',
                      color: 'var(--tw-text-primary)',
                    }}
                  >
                    <i className="ti ti-building" style={{ fontSize: 18 }} aria-hidden="true" />
                  </div>
                  <span
                    className="text-[11px] px-2 py-1 rounded-md font-semibold uppercase"
                    style={{
                      background: 'var(--tw-bg-tertiary)',
                      color: 'var(--tw-text-primary)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    For Business
                  </span>
                </div>

                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: 'var(--tw-text-primary)', letterSpacing: '-0.01em' }}
                >
                  Workshop
                </h3>
                <p className="text-sm mb-5" style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}>
                  Your tenant. Your data. Build internal tools and software, or let
                  TW AI run it for you.
                </p>

                <ul className="flex flex-col gap-2 mb-6 flex-1 list-none p-0 m-0">
                  {[
                    'SSO, audit logs, private templates',
                    'Managed services tier optional',
                    'Dedicated VPC available',
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2"
                      style={{
                        color: 'var(--tw-text-secondary)',
                        fontSize: '13px',
                        lineHeight: 1.45,
                      }}
                    >
                      <i
                        className="ti ti-check"
                        style={{
                          fontSize: 15,
                          color: 'var(--tw-green)',
                          marginTop: 1,
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 mb-3">
                  <Link
                    to="/contact"
                    className="flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold text-center transition-all duration-200 hover:opacity-90"
                    style={{
                      background: 'var(--tw-btn-primary-bg)',
                      color: 'var(--tw-btn-primary-text)',
                    }}
                  >
                    Book demo
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      background: 'transparent',
                      color: 'var(--tw-text-primary)',
                      border: '0.5px solid var(--tw-border-primary)',
                    }}
                  >
                    See pricing
                  </Link>
                </div>
                <p
                  className="text-xs text-center"
                  style={{ color: 'var(--tw-text-tertiary)' }}
                >
                  Self-serve · Managed · Enterprise
                </p>
              </article>
            </div>

            {/* Quiz / talk-to-us strip — matches the .paper-callout pattern
                on /creators ("Have a template idea?"). Uses TW iris tokens
                that visually approximate the warm tokens used over there. */}
            <div
              className="mt-6 flex flex-col sm:flex-row items-center justify-between"
              style={{
                background: 'var(--tw-bg-tertiary)',
                padding: '14px 18px',
                borderRadius: '8px',
                gap: '16px',
              }}
            >
              <div
                className="flex items-center"
                style={{
                  color: 'var(--tw-text-secondary)',
                  fontSize: '13px',
                  gap: '10px',
                }}
              >
                <i
                  className="ti ti-info-circle"
                  style={{ fontSize: 18, color: 'var(--tw-text-secondary)' }}
                  aria-hidden="true"
                />
                <span>Not sure which fits? Tell us about your project.</span>
              </div>
              <Link
                to="/contact"
                className="hover:opacity-90 whitespace-nowrap"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: 'transparent',
                  color: 'var(--tw-text-primary)',
                  border: '0.5px solid var(--tw-gray-300)',
                  borderRadius: '8px',
                  padding: '7px 12px',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s, transform 0.05s',
                }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How It Works — restyled to match Two Paths / About cards.
          Iris chip eyebrow, sentence-case h2, 4-card grid with small iris
          number badges replacing the 64x64 gradient blocks. Sits on
          bg-primary with a soft iris wash for rhythm (mirroring the
          Terminal Demo treatment one section below) instead of the old
          flat grey panel. */}
      <ScrollReveal>
        <section
          id="how-it-works"
          className="relative py-16 md:py-20 px-6 overflow-hidden"
        >
          {/* Soft iris wash — fades at top/bottom so it blends with the
              flanking white sections rather than cutting a hard band. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 55% at 50% 40%, var(--tw-bg-accent) 0%, transparent 75%)',
              maskImage:
                'linear-gradient(180deg, transparent 0%, #000 12%, #000 80%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(180deg, transparent 0%, #000 12%, #000 80%, transparent 100%)',
            }}
          />

          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <div
                className="inline-flex items-center mb-5"
                style={{
                  background: 'var(--tw-bg-accent)',
                  color: 'var(--tw-text-accent)',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  gap: '6px',
                }}
              >
                <i className="ti ti-list-numbers" style={{ fontSize: 15 }} aria-hidden="true" />
                Process
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: 'var(--tw-text-primary)', letterSpacing: '-1px' }}
              >
                How it works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: '01',
                  title: 'Describe',
                  desc: 'Tell us what you need. We analyse, clarify, and define the scope.',
                },
                {
                  num: '02',
                  title: 'Design',
                  desc: 'Our agents architect the system, plan every task, and choose the right technology.',
                },
                {
                  num: '03',
                  title: 'Build',
                  desc: 'Multiple engineers write code in parallel. Reviewers verify. Testers validate. Security audits run automatically.',
                },
                {
                  num: '04',
                  title: 'Ship',
                  desc: 'Tested, reviewed, and deployed. Production-ready.',
                },
              ].map((step) => (
                <article
                  key={step.num}
                  className="text-center p-6 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: 'var(--tw-bg-primary)',
                    border: '0.5px solid var(--tw-border-primary)',
                  }}
                >
                  <div
                    className="w-10 h-10 mx-auto mb-4 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'var(--tw-iris-subtle)',
                      color: 'var(--tw-text-accent)',
                    }}
                  >
                    <span className="text-base font-semibold">{step.num}</span>
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      color: 'var(--tw-text-primary)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--tw-text-secondary)',
                      fontSize: '13px',
                      lineHeight: 1.55,
                    }}
                  >
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Terminal Demo Section */}
      <ScrollReveal>
        <section className="relative pt-6 pb-28 md:pt-8 md:pb-32 px-6 overflow-hidden">
          {/* Soft iris wash that fades out before reaching the footer */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 55% at 50% 40%, var(--tw-bg-accent) 0%, transparent 75%)',
              maskImage:
                'linear-gradient(180deg, transparent 0%, #000 12%, #000 80%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(180deg, transparent 0%, #000 12%, #000 80%, transparent 100%)',
            }}
          />

          <div className="relative max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <div
                className="inline-flex items-center mb-5"
                style={{
                  background: 'var(--tw-bg-accent)',
                  color: 'var(--tw-text-accent)',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  gap: '6px',
                }}
              >
                <i className="ti ti-broadcast" style={{ fontSize: 15 }} aria-hidden="true" />
                Live Demo
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--tw-text-primary)', letterSpacing: '-1px' }}
              >
                Watch It Build
              </h2>
              <p
                className="text-base max-w-xl mx-auto"
                style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}
              >
                A real run, end to end — from requirements to a deployed URL.
              </p>
            </div>
            <TerminalDemo />
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
