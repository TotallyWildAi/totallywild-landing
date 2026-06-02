import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TerminalDemo from '../components/TerminalDemo'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <>
      {/* Hero — copy on a soft iris mesh-gradient background (the
          --tw-hero-mesh token, themed for day/night in tokens.css). Pure CSS,
          no canvas: SSR-safe and far calmer than the old particle cloud. */}
      <section className="relative px-6 py-20 md:py-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'var(--tw-hero-mesh)' }}
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

          {/* Small lead-in line; the rotating headline below is the focal
              point, so this stays modest in size and weight. */}
          <p
            className="text-xl md:text-2xl font-semibold mb-2"
            style={{
              color: 'var(--tw-text-secondary)',
              letterSpacing: '-0.02em',
            }}
          >
            Build with AI.
          </p>

          {/* Dominant rotating headline, iris-accented. minHeight holds a
              single line so typing/deleting never shifts the copy below it. */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{
              letterSpacing: '-1.5px',
              lineHeight: 1.08,
              color: 'var(--tw-text-accent)',
              minHeight: '1.08em',
            }}
          >
            <TypewriterHeadline />
          </h1>

          <p
            className="inline-block text-lg md:text-xl max-w-xl mt-6"
            style={{
              color: 'var(--tw-text-primary)',
              lineHeight: 1.55,
              fontWeight: 500,
            }}
          >
            AI agents, software, marketplace and HR tools — all in one
            platform. You keep the IP. Always.
          </p>

          {/* Stats strip — surfaces the IP / revenue-share story up front.
              Each value maps to a claim made lower on the page. */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-6">
            {[
              { v: 'A$0', l: 'to start building' },
              { v: '100%', l: 'IP ownership' },
              { v: '12+', l: 'industries supported' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: 'var(--tw-text-accent)', lineHeight: 1 }}
                >
                  {s.v}
                </div>
                <div
                  className="mt-1 text-xs"
                  style={{ color: 'var(--tw-text-tertiary)' }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Paths — adapted from C:\code\twai-landing-new\tw_ai_access_page_v6.html.
          Two product cards (Workshop for business, then Studio + Marketplace
          for creators) followed by a quiz/contact strip for undecided visitors.
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
                    'AI HR agents: hiring, onboarding, compliance',
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
                  <a
                    href="https://app.totallywild.ai/"
                    className="flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold text-center transition-all duration-200 hover:opacity-90"
                    style={{
                      background: 'var(--tw-btn-primary-bg)',
                      color: 'var(--tw-btn-primary-text)',
                    }}
                  >
                    Start free
                  </a>
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
                  Coming soon
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

      {/* Industries — breadth signal. Pill grid on bg-secondary so it reads
          as a distinct panel between the iris-washed How It Works and Terminal
          Demo sections. Copy stays sentence-case per the brand voice. */}
      <ScrollReveal>
        <section className="py-16 md:py-20 px-6" style={{ background: 'var(--tw-bg-secondary)' }}>
          <div className="max-w-5xl mx-auto">
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
                <i className="ti ti-stack-2" style={{ fontSize: 15 }} aria-hidden="true" />
                Industries
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--tw-text-primary)', letterSpacing: '-1px' }}
              >
                Built for any industry
              </h2>
              <p
                className="text-base max-w-xl mx-auto"
                style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}
              >
                Agents tuned to the workflows and compliance of the work you
                actually do.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {[
                'Healthcare & medical',
                'Finance & fintech',
                'Legal & compliance',
                'Real estate',
                'Retail & ecommerce',
                'Education & training',
                'Construction & trades',
                'Logistics & supply chain',
                'Hospitality & tourism',
                'Manufacturing',
                'Marketing & media',
                'Government & public sector',
              ].map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5"
                  style={{
                    background: 'var(--tw-bg-primary)',
                    border: '0.5px solid var(--tw-border-primary)',
                    color: 'var(--tw-text-secondary)',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: 'var(--tw-iris)',
                      opacity: 0.7,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Terminal Demo Section */}
      <ScrollReveal>
        <section className="relative pt-6 pb-16 md:pt-8 md:pb-20 px-6 overflow-hidden">
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

      {/* FAQ — six common questions in a 2-col accordion grid on
          bg-secondary. Each item manages its own open state (FaqItem), which
          is SSR-safe: it prerenders closed and toggles after hydration. */}
      <ScrollReveal>
        <section className="py-16 md:py-20 px-6" style={{ background: 'var(--tw-bg-secondary)' }}>
          <div className="max-w-5xl mx-auto">
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
                <i className="ti ti-help-circle" style={{ fontSize: 15 }} aria-hidden="true" />
                FAQ
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: 'var(--tw-text-primary)', letterSpacing: '-1px' }}
              >
                Common questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
              {[
                {
                  q: 'Do I own the IP?',
                  a: 'Yes — 100%. Every agent, app or asset you build on Totally Wild belongs to you. We have no claim on your output.',
                },
                {
                  q: 'Can I sell what I build?',
                  a: 'The marketplace is coming. When it launches you will be able to list your work and keep 80% of what you earn in your first year. Today you can build and deploy inside your workshop.',
                },
                {
                  q: 'Is there a free plan?',
                  a: 'Yes. Start building at A$0 — no card required.',
                },
                {
                  q: 'What industries do you support?',
                  a: 'More than twelve, from healthcare and finance to legal, construction and logistics. Agents are built to handle industry-specific workflows and compliance.',
                },
                {
                  q: 'Can I bring my own models?',
                  a: 'Yes. Bring your own models, fine-tune ours, or use the default stack — all inside the studio.',
                },
                {
                  q: 'How do the HR agents work?',
                  a: 'Use our prebuilt HR agents, start from templates, or describe your processes and we build a custom stack — hiring, onboarding, compliance and more.',
                },
              ].map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Closing CTA — iris callout box. Extra bottom padding clears the
          md+ fixed footer (see Layout.tsx). "Start free" goes off-site to the
          product app per the CTA convention; "Talk to sales" stays in-site. */}
      <ScrollReveal>
        <section className="py-16 md:py-20 px-6 pb-24 md:pb-32">
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-2xl p-8 md:p-12"
              style={{
                background: 'var(--tw-bg-accent)',
                border: '0.5px solid var(--tw-border-accent)',
              }}
            >
              <h2
                className="text-3xl md:text-5xl font-bold mb-4"
                style={{
                  color: 'var(--tw-text-primary)',
                  letterSpacing: '-1px',
                  lineHeight: 1.08,
                }}
              >
                Ready to build something wild?
              </h2>
              <p
                className="text-base md:text-lg mb-8 max-w-xl"
                style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.6 }}
              >
                Join the businesses and teams building on Totally Wild —
                starting at A$0, no card required.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://app.totallywild.ai/"
                  className="px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
                  style={{
                    background: 'var(--tw-btn-primary-bg)',
                    color: 'var(--tw-btn-primary-text)',
                  }}
                >
                  Start free
                </a>
                <Link
                  to="/contact"
                  className="px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
                  style={{
                    background: 'transparent',
                    color: 'var(--tw-text-primary)',
                    border: '0.5px solid var(--tw-border-primary)',
                  }}
                >
                  Talk to sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}

// Rotating hero headline phrases. Kept short and declarative (brand voice:
// no exclamation marks). Edit this list to change what cycles.
const HERO_PHRASES = [
  'Own it. Always.',
  'Ship it with agents.',
  'Keep your IP.',
  'List it. Earn from it.',
  'For every industry.',
]

// Typewriter headline. SSR-safe: initial state is the first phrase fully typed,
// so the prerendered HTML carries real text (good for SEO, no layout shift).
// The type/delete animation runs only after mount, and is skipped entirely for
// users who prefer reduced motion — they see a static first phrase.
function TypewriterHeadline() {
  const [text, setText] = useState(HERO_PHRASES[0])
  // Caret renders only after hydration, so it never appears in static markup.
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setAnimating(true)

    let phrase = 0
    let char = HERO_PHRASES[0].length
    let deleting = false
    let timer = window.setTimeout(start, 1800)

    function start() {
      deleting = true
      tick()
    }

    function tick() {
      const current = HERO_PHRASES[phrase]
      if (deleting) {
        char--
        setText(current.slice(0, char))
        if (char === 0) {
          deleting = false
          phrase = (phrase + 1) % HERO_PHRASES.length
          timer = window.setTimeout(tick, 380)
          return
        }
      } else {
        char++
        setText(current.slice(0, char))
        if (char === current.length) {
          deleting = true
          timer = window.setTimeout(tick, 1800)
          return
        }
      }
      timer = window.setTimeout(tick, deleting ? 42 : 75)
    }

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      {text}
      {animating && <span className="tw-caret" aria-hidden="true" />}
    </>
  )
}

// Single FAQ accordion row. Owns its open/closed state so the section needs no
// parent coordination; prerenders closed (SSR-safe) and expands on click.
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: '0.5px solid var(--tw-border-primary)',
        background: 'var(--tw-bg-primary)',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        style={{ background: 'transparent', cursor: 'pointer' }}
      >
        <span
          className="font-semibold"
          style={{ color: 'var(--tw-text-primary)', fontSize: '15px' }}
        >
          {q}
        </span>
        <i
          className="ti ti-plus"
          style={{
            fontSize: 18,
            color: 'var(--tw-text-tertiary)',
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(45deg)' : 'none',
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          className="px-5 pb-4"
          style={{
            color: 'var(--tw-text-secondary)',
            fontSize: '14px',
            lineHeight: 1.7,
          }}
        >
          {a}
        </div>
      )}
    </div>
  )
}
