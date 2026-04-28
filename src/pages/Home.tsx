import TerminalDemo from '../components/TerminalDemo'
import ScrollReveal from '../components/ScrollReveal'
import AgentSwarm from '../components/AgentSwarm'

export default function Home() {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 md:pt-10 pb-8 md:pb-10 px-6 overflow-hidden">
        {/* Mesh gradient base (theme-aware) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'var(--tw-hero-mesh)' }}
          aria-hidden="true"
        />
        {/* Grid overlay on top of the mesh */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(var(--tw-grid-color) 0.5px, transparent 0.5px),
              linear-gradient(90deg, var(--tw-grid-color) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '40px 40px, 40px 40px',
            backgroundPosition: '0 0, 0 0',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 55%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 55%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Two-line headline with gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 headline-gradient" style={{ letterSpacing: '-1.5px', lineHeight: 1.08 }}>
              Code ships itself.
              <br />
              You ship the vision.
            </h1>

            {/* Subhead — explains the offer in plain language */}
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto mt-6"
              style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}
            >
              We turn product ideas into production-ready software in days, not months.
              <br />
              Built end-to-end by a coordinated swarm of AI engineers.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="/contact"
                className="px-8 py-4 rounded-lg text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: 'var(--tw-btn-primary-bg)', color: 'var(--tw-btn-primary-text)' }}
              >
                Start Your Project
              </a>
              <button
                onClick={scrollToHowItWorks}
                className="px-8 py-4 rounded-lg text-base font-semibold transition-all duration-200 hover:opacity-80"
                style={{
                  background: 'var(--tw-btn-ghost-bg)',
                  color: 'var(--tw-text-primary)',
                  border: '1.5px solid var(--tw-text-primary)'
                }}
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* Hero illustration: agent crew building together */}
          <div className="mt-8">
            <AgentSwarm />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <ScrollReveal>
        <section id="how-it-works" className="py-12 md:py-16 px-6" style={{ background: 'var(--tw-bg-secondary)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--tw-text-primary)', letterSpacing: '-1px' }}>
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Describe', desc: 'Tell us what you need. We analyse, clarify, and define the scope.' },
                { num: '02', title: 'Design', desc: 'Our agents architect the system, plan every task, and choose the right technology.' },
                { num: '03', title: 'Build', desc: 'Multiple engineers write code in parallel. Reviewers verify. Testers validate. Security audits run automatically.' },
                { num: '04', title: 'Ship', desc: 'Tested, reviewed, and deployed. Production-ready.' }
              ].map((step) => (
                <div key={step.num} className="text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                  {/* Large gradient badge */}
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
                    style={{ background: 'linear-gradient(135deg, #6E5CCC 0%, #9B8EE8 100%)' }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--tw-text-primary)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Built by a Swarm Section */}
      <ScrollReveal>
        <section className="pt-16 md:pt-20 pb-8 md:pb-10 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--tw-text-primary)', letterSpacing: '-1px' }}>
              Built by a Swarm
            </h2>
            <p className="text-base" style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}>
              Behind the scenes, a coordinated swarm of specialised AI agents handles every stage of your project — analysis, architecture, implementation, code review, testing, security, and deployment. Each agent is trained for its role. They work together like a real engineering team, except they never sleep and they ship in hours, not months.
            </p>
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider mb-5"
                style={{
                  background: 'var(--tw-bg-accent)',
                  color: 'var(--tw-text-accent)',
                  border: '0.5px solid var(--tw-border-accent)',
                  letterSpacing: '0.08em',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: 'var(--tw-text-accent)',
                    boxShadow: '0 0 8px var(--tw-text-accent)',
                  }}
                />
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
