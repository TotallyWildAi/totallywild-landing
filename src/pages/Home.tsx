import { Link } from 'react-router-dom'
import TerminalDemo from '../components/TerminalDemo'
import ScrollReveal from '../components/ScrollReveal'

// The specialist agents that make up the build factory (see
// C:\code\swarm-of-agents). Each role spins up on demand and hands its
// work to the next — BA clarifies, Architect plans, Engineers build in
// parallel, the Reviewer gates every diff, with Research and Docs in support.
const FACTORY_AGENTS = [
  {
    icon: 'ti-clipboard-text',
    name: 'Business Analyst',
    desc: 'Clarifies what you need and turns it into a precise, testable spec.',
  },
  {
    icon: 'ti-sitemap',
    name: 'Architect',
    desc: 'Breaks the work into a task graph — files, layers and acceptance criteria.',
  },
  {
    icon: 'ti-code',
    name: 'Engineer',
    desc: 'Writes the code in an investigate, solve, verify loop. Many run in parallel.',
  },
  {
    icon: 'ti-eye-check',
    name: 'Reviewer',
    desc: 'Reviews every diff against the spec before it lands. Nothing ships unchecked.',
  },
  {
    icon: 'ti-search',
    name: 'Researcher',
    desc: 'Searches and investigates whenever the work needs outside knowledge.',
  },
  {
    icon: 'ti-file-text',
    name: 'Documentation',
    desc: 'Writes the docs and diagrams so you own a codebase you can maintain.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero — static copy on a soft iris wash (the particle canvas was
          removed). The wash mirrors the How It Works / Terminal sections so
          the page reads as one continuous surface. */}
      <section className="relative px-6 py-20 md:py-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 30%, var(--tw-bg-accent) 0%, transparent 72%)',
          }}
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
            Build it. Ship it.
          </h1>

          <p
            className="inline-block text-lg md:text-xl max-w-3xl mt-6"
            style={{
              color: 'var(--tw-text-primary)',
              lineHeight: 1.55,
              fontWeight: 500,
            }}
          >
            Direct a team of AI agents to design, build, test and ship
            production software — and deploy it inside your business.
          </p>
        </div>
      </section>

      {/* The Factory — the specialist agents behind every build. Replaces the
          old Business / Creators two-path split: a single, software-focused
          story about the agent team, with a product CTA and a sales path. */}
      <ScrollReveal>
        <section className="py-16 md:py-20 px-6" style={{ background: 'var(--tw-bg-primary)' }}>
          <div className="max-w-6xl mx-auto">
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
                <i className="ti ti-robot" style={{ fontSize: 15 }} aria-hidden="true" />
                The factory
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--tw-text-primary)', letterSpacing: '-1px' }}
              >
                A full software team, run by agents
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}
              >
                Every build spins up a team of specialist agents. Each one owns a
                role, hands its work to the next, and an orchestrator keeps the
                whole pipeline moving — from first requirement to deployed code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FACTORY_AGENTS.map((agent) => (
                <article
                  key={agent.name}
                  className="flex flex-col p-6 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: 'var(--tw-bg-primary)',
                    border: '0.5px solid var(--tw-border-primary)',
                  }}
                >
                  <div
                    className="w-9 h-9 mb-4 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--tw-iris-subtle)', color: 'var(--tw-text-accent)' }}
                  >
                    <i className={`ti ${agent.icon}`} style={{ fontSize: 18 }} aria-hidden="true" />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: 'var(--tw-text-primary)', letterSpacing: '-0.01em' }}
                  >
                    {agent.name}
                  </h3>
                  <p
                    style={{
                      color: 'var(--tw-text-secondary)',
                      fontSize: '13px',
                      lineHeight: 1.55,
                    }}
                  >
                    {agent.desc}
                  </p>
                </article>
              ))}
            </div>

            {/* CTA row — primary product signup (off-site) plus a sales path
                into the contact form. */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://app.totallywild.ai/"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center transition-all duration-200 hover:opacity-90"
                style={{
                  background: 'var(--tw-btn-primary-bg)',
                  color: 'var(--tw-btn-primary-text)',
                }}
              >
                Start free
              </a>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center transition-all duration-200 hover:opacity-90"
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
