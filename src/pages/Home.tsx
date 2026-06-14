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

const APP_URL = 'https://app.totallywild.ai/'

const TYPEWRITER_PHRASES = [
  'Own it. Earn from it.',
  'Build with agents.',
  'Keep your IP.',
  'List it. Earn from it.',
  'For every industry.',
]

const STUDIO_CARDS = [
  {
    icon: '⚙️',
    title: 'AI Agents for Business',
    items: [
      'Custom agents for your workflows',
      'Use our library or build your own',
      'Deploy, sell or license your agent',
      'Full IP ownership on every output',
    ],
  },
  {
    icon: '💻',
    title: 'Software for Industries',
    items: [
      'Industry-specific AI applications',
      'Rapid build with AI assistance',
      'Source code fully yours',
      'Ready to sell on Marketplace',
    ],
  },
  {
    icon: '🛒',
    title: 'Marketplace',
    items: [
      'List your creation in one click',
      'Built-in payments & licensing',
      'Reach global buyers instantly',
      'Recurring & one-time pricing',
    ],
  },
  {
    icon: '📈',
    title: 'Creator Economics',
    items: [
      '80% revenue share, year one',
      'No upfront listing costs',
      'Earnings & analytics dashboard',
      'AUD payments, global reach',
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
  { title: 'Deploy it, sell it, or keep it private', desc: 'IP stays with you. List on Marketplace or deploy internally.' },
]

const MKT_CARDS = [
  { title: '🚀 List in One Click', desc: 'Publish your AI agent, software or tool directly from the Studio. No technical setup — just add a description and pricing.' },
  { title: '💳 Built-in Payments', desc: 'Accept one-time purchases, subscriptions or usage-based billing. AUD payments processed automatically.' },
  { title: '🔐 IP Protection Built In', desc: 'Every listing comes with built-in licensing. You control who can use your creation, how, and for how long.' },
  { title: '📊 Earnings Dashboard', desc: "Track sales, revenue and buyer analytics in real time. See what's selling and optimise your listings." },
  { title: '🌍 Global Reach', desc: 'Your listings are visible to businesses and developers worldwide. Multi-currency support with AUD as the base.' },
  { title: '⚡ 80% Revenue Share', desc: "Keep 80% of every sale in your first year. We're incentivised to grow with you, not against you." },
]

const MKT_HOW = [
  { n: '01', title: 'Build in the Studio', desc: 'Create your AI agent, software or tool. You own every line of code and every output produced.' },
  { n: '02', title: 'List on the Marketplace', desc: 'Publish with one click. Set your price — one-time, subscription or usage-based.' },
  { n: '03', title: 'Earn while you sleep', desc: 'Buyers find and purchase your work. Revenue lands in your account automatically.' },
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

const TIERS = [
  {
    name: 'Explorer',
    price: 'Free',
    cycle: 'No card required · forever free',
    features: ['3 AI agent builds / month', 'Basic Studio access', '1 Marketplace listing', 'Full IP ownership', 'Community support'],
    cta: 'Start for Free',
    featured: false,
  },
  {
    name: 'Creator',
    price: 'A$39',
    cycle: 'per month · cancel anytime',
    features: ['10 AI agent builds / month', 'Full Studio access', '5 Marketplace listings', 'Full IP ownership', 'Email support'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro',
    price: 'A$79',
    cycle: 'per month · cancel anytime',
    features: [
      'Unlimited Studio builds',
      'Unlimited AI agent usage',
      '80% Marketplace revenue share, yr 1',
      'Priority Marketplace placement',
      'HR agent templates included',
      'Advanced analytics',
      'Priority support',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cycle: 'AUD · contact us for a quote',
    features: [
      'Custom AI agent development',
      'Full HR agent stack',
      'Private Marketplace storefront',
      'Dedicated account manager',
      'SLA & compliance support',
      'Custom integrations',
      'On-premise deployment option',
    ],
    cta: 'Talk to Sales',
    featured: false,
  },
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
  const [studioOpen, setStudioOpen] = useState<number | null>(null)
  const [mktOpen, setMktOpen] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <div className="hero-wrap">
        <div className="hero-trail" ref={heroRef}>
          <HeroEffects containerRef={heroRef} />
          <div className="hero-content">
            <h1 style={{ margin: 0 }}>
              <span className="hero-h1-dark">Build with AI.</span>
              <Typewriter phrases={TYPEWRITER_PHRASES} className="hero-h1-green" />
            </h1>
            <p className="hero-sub">Build it. Own it. Sell it.</p>
            <div className="hero-btns">
              <Button variant="fill" href="#studio" arrow>
                Explore the Studio
              </Button>
              <Button variant="ghost" href="#agents">
                Build Your Agent
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Studio + Marketplace */}
      <section className="section-wrap section-g" id="studio">
        <div className="section-inner">
          <ScrollReveal>
            <Eyebrow>Studio + Marketplace</Eyebrow>
            <SectionTitle sub="You keep the intellectual property on everything you create. Build it, brand it, sell it globally.">
              <GradientText>Build AI agents and software for any industry.</GradientText> Own what you make.
            </SectionTitle>
          </ScrollReveal>

          <ScrollReveal>
            <div className="s-cards">
              {STUDIO_CARDS.map((card, i) => (
                <SpotCard
                  key={card.title}
                  className="sc"
                  onClick={() => setStudioOpen(studioOpen === i ? null : i)}
                >
                  <div className="sc-head">
                    <span className="sc-ico" aria-hidden="true">{card.icon}</span>
                    <h4>{card.title}</h4>
                  </div>
                  <Collapse open={studioOpen === i}>
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

      {/* Marketplace */}
      <section className="section-wrap" style={{ background: 'var(--tw-grad-band)' }} id="marketplace">
        <div className="section-inner">
          <ScrollReveal>
            <Eyebrow>Marketplace</Eyebrow>
            <SectionTitle sub="The TotallyWild Marketplace connects creators of AI agents, software and tools with businesses ready to buy.">
              <GradientText>List your AI creations.</GradientText> Reach buyers worldwide. Keep most of what you earn.
            </SectionTitle>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mkt-grid">
              {MKT_CARDS.map((card, i) => (
                <SpotCard
                  key={card.title}
                  className={`mkt-card lift${mktOpen === i ? ' open' : ''}`}
                  onClick={() => setMktOpen(mktOpen === i ? null : i)}
                >
                  <h4>{card.title}</h4>
                  <Collapse open={mktOpen === i}>
                    <p style={{ paddingTop: '0.5rem' }}>{card.desc}</p>
                  </Collapse>
                </SpotCard>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mkt-how">
              {MKT_HOW.map((step) => (
                <div className="mkt-step" key={step.n}>
                  <div className="mkt-n">{step.n}</div>
                  <h5>{step.title}</h5>
                  <p>{step.desc}</p>
                </div>
              ))}
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

      {/* Pricing */}
      <section
        className="section-wrap"
        style={{ background: 'linear-gradient(180deg, #E8F5EE, #FFFFFF)' }}
        id="pricing"
      >
        <div className="section-inner">
          <ScrollReveal>
            <Eyebrow>Pricing (AUD)</Eyebrow>
            <SectionTitle sub="All plans include full IP ownership on everything you build. Priced in Australian Dollars.">
              <GradientText>Simple, transparent pricing.</GradientText>
            </SectionTitle>
          </ScrollReveal>

          <ScrollReveal>
            <div className="price-grid">
              {TIERS.map((tier) => (
                <div className={`p-card${tier.featured ? ' feat' : ''}`} key={tier.name}>
                  <div className="p-top" />
                  {tier.featured && <div className="p-badge">Most Popular</div>}
                  <h4>{tier.name}</h4>
                  <div className="p-price">{tier.price}</div>
                  <div className="p-cycle">{tier.cycle}</div>
                  <div className="p-div" />
                  <ul>
                    {tier.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  {tier.name === 'Enterprise' ? (
                    <Link to="/contact" className="p-btn outline">
                      {tier.cta}
                    </Link>
                  ) : (
                    <a href={APP_URL} className={`p-btn ${tier.featured ? 'fill' : 'outline'}`}>
                      {tier.cta}
                      {tier.featured && (
                        <>
                          {' '}
                          <span className="btn-arrow">→</span>
                        </>
                      )}
                    </a>
                  )}
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
