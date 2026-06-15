import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Collapse from '../components/Collapse'
import Eyebrow from '../components/Eyebrow'
import HeroEffects from '../components/HeroEffects'
import ScrollReveal from '../components/ScrollReveal'
import SectionTitle, { GradientText } from '../components/SectionTitle'
import SpotCard from '../components/SpotCard'
import Stepper from '../components/Stepper'
import Typewriter from '../components/Typewriter'
import { apps } from '../data/apps'

const APP_URL = 'https://app.totallywild.ai/'

const TYPEWRITER_PHRASES = ['built by AI.', 'shipped in days.', 'owned by you.', 'tested and live.']

const FACTORY_CARDS = [
  {
    icon: 'ti-robot',
    title: 'AI Agents for Business',
    items: [
      'Custom agents for your workflows',
      'Use our library or build your own',
      'Deploy them wherever you work',
      'Full IP ownership on every output',
    ],
  },
  {
    icon: 'ti-app-window',
    title: 'Software for Industries',
    items: [
      'Industry-specific applications',
      'Built end to end by AI',
      'Source code fully yours',
      'Tested and ready to deploy',
    ],
  },
  {
    icon: 'ti-building-factory-2',
    title: 'The Build Pipeline',
    items: [
      'Agents plan, write and review code',
      'Parallel engineers build in tandem',
      'Automated tests on every build',
      'Shipped and deployed for you',
    ],
  },
  {
    icon: 'ti-lock',
    title: 'You Own Everything',
    items: [
      'Full IP on every line of code',
      'No lock-in, no licensing games',
      'Keep it private or take it public',
      'Handed off with complete source',
    ],
  },
]

const INDUSTRIES = [
  'Healthcare & Medical',
  'Finance & FinTech',
  'Legal & Compliance',
  'Real Estate',
  'Retail & eCommerce',
  'Education & Training',
  'Construction & Trades',
  'Logistics & Supply Chain',
  'Hospitality & Tourism',
  'Manufacturing',
  'Marketing & Media',
  'Government & Public Sector',
]

const USE_CASES = [
  { label: 'Software development', desc: 'agents that scaffold, write and review code, then ship and maintain features.' },
  { label: 'Industry automation', desc: 'automate the repetitive, rules-based work specific to your sector, end to end.' },
  { label: 'Content creation', desc: 'draft, edit and repurpose copy and assets that stay on brand.' },
  { label: 'Customer service', desc: 'answer enquiries, resolve tickets and escalate the rest, around the clock.' },
  { label: 'Sales & CRM', desc: 'qualify leads, update records and follow up so the pipeline never goes cold.' },
  { label: 'Operations & workflow', desc: 'orchestrate multi-step processes across your tools without manual handoffs.' },
  { label: 'Research & analytics', desc: 'gather sources, surface patterns and turn raw data into decisions.' },
  { label: 'Marketing automation', desc: 'plan campaigns, schedule sends and personalise outreach at scale.' },
  { label: 'Data processing', desc: "clean, transform and enrich data so it's ready wherever you need it." },
  { label: 'Legal & compliance', desc: 'review documents, flag risk and keep records aligned with your obligations.' },
]

const AGENT_STEPS = [
  { title: 'Share your idea or business need', desc: 'Describe what you want the agent to do — no technical knowledge required.' },
  { title: 'Use our agents or build your own', desc: 'Pick from our growing library or start fresh with a custom agent spec.' },
  { title: 'Select templates or start from scratch', desc: 'Battle-tested templates for common use cases, or a blank canvas.' },
  { title: 'Agent builds, tests & delivers', desc: 'Trained, tested and deployed — you review and own every output.' },
  { title: 'Deploy it or keep it private', desc: 'IP stays with you. Deploy it publicly or run it internally — your call.' },
]

const HR_CARDS = [
  { n: '01', title: 'Use Our HR Agents', desc: 'Deploy pre-built AI HR agents instantly. Hiring, onboarding, compliance, performance reviews — out of the box, zero configuration required.' },
  { n: '02', title: 'Use Our Templates', desc: 'Start from battle-tested HR workflow templates and customise for your team size, industry and culture.' },
  { n: '03', title: 'Build Your Own', desc: "Describe your HR processes and we build a fully custom AI agent stack tailored to your company's unique needs." },
]

const HR_FEATURES = [
  'Hiring & candidate screening',
  'Onboarding automation',
  'Performance tracking',
  'Policy & compliance',
  'Payroll workflow agents',
  'Team analytics & insights',
  'Leave & absence management',
  'Benefits administration',
  'Employee communications',
]

const UPPER_LABEL_STYLE = {
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
  color: 'var(--tw-text-tertiary)',
  marginBottom: '1rem',
} as const

/** Collapsible use-case grid with a detail panel, from the vision agents section. */
function UseCaseExplorer() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)
  const active = USE_CASES[selected]

  return (
    <div className={open ? 'uc-open' : undefined} style={{ marginBottom: '1.5rem' }}>
      <button type="button" className="uc-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>Agent use cases</span>
        <span className="uc-arr">▼</span>
      </button>
      <div className="uc-collapsible">
        <div className="uc-grid">
          {USE_CASES.map((uc, i) => (
            <button
              type="button"
              key={uc.label}
              className={`uc-item${i === selected ? ' active' : ''}`}
              onClick={() => setSelected(i)}
            >
              {uc.label}
            </button>
          ))}
        </div>
        <div className="uc-detail">
          <h5>{active.label}</h5>
          <p>{active.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [factoryOpen, setFactoryOpen] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <div className="hero-wrap">
        <div className="hero-trail" ref={heroRef}>
          <HeroEffects containerRef={heroRef} />
          <div className="hero-content">
            <h1 style={{ margin: 0 }}>
              <span className="hero-h1-dark">Your software,</span>
              <Typewriter phrases={TYPEWRITER_PHRASES} className="hero-h1-green" />
            </h1>
            <p className="hero-sub">
              An autonomous build factory. Describe the app or agent you need — our AI engineers design it,
              build it, test it and ship it, then hand you every line. No engineering team required.
            </p>
            <div className="hero-btns">
              <Button variant="fill" href={APP_URL} arrow>
                Get started free
              </Button>
              <Button variant="ghost" to="/contact">
                Book a build
              </Button>
            </div>
            <Link
              to="/showcase"
              style={{
                display: 'inline-block',
                marginTop: '0.9rem',
                fontSize: '0.85rem',
                color: 'var(--tw-text-tertiary)',
                textDecoration: 'none',
              }}
            >
              see what we've built →
            </Link>
          </div>
        </div>
      </div>

      {/* Proof band */}
      <section className="section-wrap section-g">
        <div className="section-inner">
          <ScrollReveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.6rem',
              }}
            >
              {[
                { big: '80%', caption: 'faster to ship — buyer-outreach platform for a business broker' },
                { big: 'Hours, not days', caption: 'to a working loan-document review prototype for a mortgage broker' },
                { big: '4', caption: 'production apps shipped and live' },
                { big: '100%', caption: 'source and IP ownership — every line is yours' },
              ].map((stat) => (
                <div key={stat.caption}>
                  <div
                    style={{
                      fontFamily: 'var(--tw-font-display)',
                      color: 'var(--tw-text-accent)',
                      fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                      lineHeight: 1.1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {stat.big}
                  </div>
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--tw-text-secondary)',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {stat.caption}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Built by the factory */}
      <section className="section-wrap">
        <div className="section-inner">
          <ScrollReveal>
            <Eyebrow>Proof</Eyebrow>
            <SectionTitle sub="A few of the production applications the factory has designed, built and shipped.">
              Real apps. Shipped and live.
            </SectionTitle>
          </ScrollReveal>

          <ScrollReveal>
            <div className="sage-grid-2">
              {apps.map((app) => (
                <article className="sage-card lift" key={app.name}>
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
                  <h3
                    style={{
                      fontFamily: 'var(--tw-font-display)',
                      fontSize: '1rem',
                      color: 'var(--tw-text-primary)',
                      margin: '0 0 0.35rem',
                    }}
                  >
                    {app.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--tw-text-secondary)',
                      margin: 0,
                    }}
                  >
                    {app.tagline}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Button variant="ghost" to="/showcase">
                Explore the showcase
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Factory */}
      <section className="section-wrap section-g" id="factory">
        <div className="section-inner">
          <ScrollReveal>
            <Eyebrow>The Factory</Eyebrow>
            <SectionTitle sub="Describe what you need and autonomous agents design, write, test and ship it. You keep the intellectual property on everything the factory builds.">
              <GradientText>Build AI agents and software for any industry.</GradientText> Own what you make.
            </SectionTitle>
          </ScrollReveal>

          <ScrollReveal>
            <div className="s-cards">
              {FACTORY_CARDS.map((card, i) => (
                <SpotCard
                  key={card.title}
                  className="sc"
                  onClick={() => setFactoryOpen(factoryOpen === i ? null : i)}
                >
                  <div className="sc-head">
                    <i className={`sc-ico ti ${card.icon}`} aria-hidden="true" />
                    <h4>{card.title}</h4>
                  </div>
                  <Collapse open={factoryOpen === i}>
                    <ul>
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Collapse>
                </SpotCard>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p style={UPPER_LABEL_STYLE}>Industries we serve</p>
            <div className="ind-grid">
              {INDUSTRIES.map((industry) => (
                <div className="ind-pill" key={industry}>
                  <span className="ind-dot" />
                  {industry}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Agents */}
      <section className="section-wrap" style={{ paddingTop: '2rem' }} id="agents">
        <div className="section-inner">
          <ScrollReveal>
            <Eyebrow>AI Agents</Eyebrow>
            <SectionTitle sub="Custom AI agents for businesses and individuals. Use ours, adapt our templates, or we'll build from scratch.">
              Agents built around your ideas. You own the output and IP.
            </SectionTitle>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div style={{ maxWidth: 600 }}>
              <UseCaseExplorer />
              <Stepper steps={AGENT_STEPS} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI-Powered HR */}
      <section className="section-wrap" style={{ paddingTop: '2rem' }} id="hr">
        <div className="section-inner">
          <ScrollReveal>
            <Eyebrow>AI-Powered HR</Eyebrow>
            <SectionTitle sub="An intelligent alternative to traditional HR. Deploy ready-made agents or build custom workflows. You stay in control.">
              Your AI HR department. Use ours, use templates, or build your own.
            </SectionTitle>
          </ScrollReveal>

          <ScrollReveal>
            <div className="hr-cards">
              {HR_CARDS.map((card) => (
                <div className="hr-card lift" key={card.n}>
                  <div className="hr-top" />
                  <div className="hr-n">{card.n}</div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p style={{ ...UPPER_LABEL_STYLE, letterSpacing: '0.12em', marginBottom: '0.8rem' }}>
              Covers every aspect of HR
            </p>
            <div className="hr-feats">
              {HR_FEATURES.map((feature) => (
                <div className="hr-f" key={feature}>
                  {feature}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <div className="cta-box">
        <h2>
          <span className="cta-h2-dark">Ready to build</span>
          <br />
          <span className="cta-h2-green">something wild?</span>
        </h2>
        <div className="cta-btns">
          <Button variant="fill" href={APP_URL} arrow>
            Start Building Free
          </Button>
          <Button variant="ghost" to="/contact">
            Talk to Sales
          </Button>
        </div>
      </div>
    </>
  )
}
