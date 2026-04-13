import TerminalDemo from '../components/TerminalDemo'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        {/* Grid background with iris glow */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(110, 92, 204, 0.12) 0%, transparent 60%),
              linear-gradient(var(--tw-grid-color) 0.5px, transparent 0.5px),
              linear-gradient(90deg, var(--tw-grid-color) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '100% 100%, 40px 40px, 40px 40px',
            backgroundPosition: 'center, 0 0, 0 0'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Two-line headline with gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 headline-gradient" style={{ letterSpacing: '-1.5px', lineHeight: 1.08 }}>
              Code ships itself.
              <br />
              You ship the vision.
            </h1>
            
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
                className="px-8 py-4 rounded-lg text-base font-semibold transition-all duration-200 hover:opacity-70"
                style={{ 
                  background: 'var(--tw-btn-ghost-bg)', 
                  color: 'var(--tw-btn-ghost-text)',
                  border: '0.5px solid var(--tw-btn-ghost-border)'
                }}
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* 3D Wireframe Cube Cluster */}
          <div className="mt-16 flex justify-center">
            <svg width="400" height="300" viewBox="0 0 400 300" className="opacity-40">
              {/* Interconnected isometric cubes */}
              {/* Cube 1 - center */}
              <g stroke="var(--tw-text-accent)" strokeWidth="0.8" fill="none">
                <path d="M200,150 L240,130 L240,90 L200,110 Z" />
                <path d="M200,150 L160,130 L160,90 L200,110 Z" />
                <path d="M200,110 L240,90 L240,50 L200,70 Z" />
                <path d="M200,110 L160,90 L160,50 L200,70 Z" />
                <path d="M240,130 L240,90 L280,70 L280,110 Z" />
                <path d="M160,130 L160,90 L120,70 L120,110 Z" />
              </g>
              {/* Cube 2 - top left */}
              <g stroke="var(--tw-text-accent)" strokeWidth="0.8" fill="none" opacity="0.7">
                <path d="M120,110 L160,90 L160,50 L120,70 Z" />
                <path d="M120,110 L80,90 L80,50 L120,70 Z" />
                <path d="M120,70 L160,50 L160,10 L120,30 Z" />
              </g>
              {/* Cube 3 - top right */}
              <g stroke="var(--tw-text-accent)" strokeWidth="0.8" fill="none" opacity="0.7">
                <path d="M280,110 L320,90 L320,50 L280,70 Z" />
                <path d="M280,110 L240,90 L240,50 L280,70 Z" />
                <path d="M280,70 L320,50 L320,10 L280,30 Z" />
              </g>
              {/* Cube 4 - bottom left */}
              <g stroke="var(--tw-text-accent)" strokeWidth="0.8" fill="none" opacity="0.6">
                <path d="M120,190 L160,170 L160,130 L120,150 Z" />
                <path d="M120,190 L80,170 L80,130 L120,150 Z" />
                <path d="M160,170 L160,130 L200,110 L200,150 Z" />
              </g>
              {/* Cube 5 - bottom right */}
              <g stroke="var(--tw-text-accent)" strokeWidth="0.8" fill="none" opacity="0.6">
                <path d="M280,190 L320,170 L320,130 L280,150 Z" />
                <path d="M280,190 L240,170 L240,130 L280,150 Z" />
                <path d="M240,170 L240,130 L200,110 L200,150 Z" />
              </g>
              {/* Connection lines */}
              <g stroke="var(--tw-text-accent)" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2">
                <line x1="200" y1="150" x2="120" y2="190" />
                <line x1="200" y1="150" x2="280" y2="190" />
                <line x1="200" y1="70" x2="120" y2="30" />
                <line x1="200" y1="70" x2="280" y2="30" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <ScrollReveal>
        <section id="how-it-works" className="py-16 md:py-20 px-6" style={{ background: 'var(--tw-bg-secondary)' }}>
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
        <section className="py-16 md:py-20 px-6">
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
        <section className="py-16 px-6" style={{ background: 'var(--tw-bg-secondary)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--tw-text-primary)', letterSpacing: '-1px' }}>
              Watch It Build
            </h2>
            <TerminalDemo />
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
