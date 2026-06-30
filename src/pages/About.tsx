import { useState, useEffect } from 'react'
import Eyebrow from '../components/Eyebrow'
import ScrollReveal from '../components/ScrollReveal'
import SectionTitle, { GradientText } from '../components/SectionTitle'

interface TeamMember {
  name: string
  title: string
  bio: string
  photo: string
  initials: string
  linkedin: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dmitry Kislov',
    title: 'Co-Founder & Software Engineer',
    bio: '20+ years Java. Built the TW AI multi-agent platform from the ground up.',
    photo: '/team/dmitry.jpg',
    initials: 'DK',
    linkedin: 'https://www.linkedin.com/in/dmitrykislov/',
  },
  {
    name: 'Nick Forshteyn',
    title: 'Co-Founder & Cybersecurity Engineer',
    bio: "Owns TW AI's platform architecture and security posture.",
    photo: '/team/nick.jpg',
    initials: 'NF',
    linkedin: 'https://www.linkedin.com/in/forstein/',
  },
  {
    name: 'Nellie Forshteyn',
    title: 'Co-Founder & Operations',
    bio: 'Owns commercial relationships and corporate operations.',
    photo: '/team/nellie.jpg',
    initials: 'NF',
    linkedin: 'https://www.linkedin.com/in/nellie-forshteyn/',
  },
]

const AGENTS = [
  {
    icon: 'ti ti-message-circle-2',
    name: 'Business Analyst',
    role: 'Clarifies briefs, surfaces hidden requirements, produces the spec.',
  },
  {
    icon: 'ti ti-schema',
    name: 'Architect',
    role: 'Decomposes work into a task graph, picks the stack, defines acceptance criteria.',
  },
  {
    icon: 'ti ti-tool',
    name: 'Engineers',
    role: 'Write code in parallel. Investigate, solve, verify. One commit per task.',
  },
  {
    icon: 'ti ti-eye-check',
    name: 'Reviewer',
    role: 'Reads diffs, checks acceptance criteria, posts blocking and advisory feedback.',
  },
  {
    icon: 'ti ti-world-search',
    name: 'Research',
    role: 'Handles web investigations and produces findings the others consume.',
  },
  {
    icon: 'ti ti-file-text',
    name: 'Doc writer',
    role: 'Drafts markdown, diagrams, and slide decks from the finished artefacts.',
  },
]

const BELIEFS = [
  {
    lead: 'AI should ship code, not just suggest it.',
    text: 'Production output is the only useful metric.',
  },
  {
    lead: 'You own the code. Always.',
    text: "We don't host your data, we don't train on your work, we don't lock you into our runtime.",
  },
  {
    lead: 'Multi-agent review beats single-model output.',
    text: 'A reviewer that reads diffs catches things a generator misses.',
  },
  {
    lead: 'Speed without quality is a liability.',
    text: 'The pipeline includes testing, security review, and acceptance checks before anything ships.',
  },
]

// Shuffle array using Fisher-Yates
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function TeamCard({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = useState(false)
  return (
    <article className="sage-card lift" style={{ textAlign: 'center' }}>
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '0 auto 1rem',
          border: '0.5px solid var(--tw-border-strong)',
          background: 'var(--tw-bg-accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!imageError ? (
          <img
            src={member.photo}
            alt={member.name}
            onError={() => setImageError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--tw-text-accent)' }}>
            {member.initials}
          </span>
        )}
      </div>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--tw-text-primary)', marginBottom: '0.2rem' }}>
        {member.name}
      </h3>
      <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--tw-text-accent)', marginBottom: '0.5rem' }}>
        {member.title}
      </p>
      <p style={{ fontSize: '0.82rem', color: 'var(--tw-text-secondary)', lineHeight: 1.7, marginBottom: '0.8rem' }}>
        {member.bio}
      </p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on LinkedIn`}
        className="inline-flex transition-opacity duration-200 hover:opacity-70"
        style={{ color: 'var(--tw-text-accent)' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      </a>
    </article>
  )
}

export default function About() {
  // SSR-safe shuffle: start with default order, shuffle after mount
  const [shuffledTeam, setShuffledTeam] = useState<TeamMember[]>(teamMembers)
  useEffect(() => {
    setShuffledTeam(shuffleArray(teamMembers))
  }, [])

  return (
    <>
      {/* Hero */}
      <div className="hero-wrap">
        <div style={{ padding: '4rem 6vw 3rem', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Eyebrow>About</Eyebrow>
          <h1
            className="hero-h1-dark"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '0.4em' }}
          >
            Software should build itself.
          </h1>
          <p className="hero-sub" style={{ marginBottom: 0, maxWidth: 560 }}>
            We built the factory that makes it happen. An orchestrated swarm of AI
            agents handles every stage of delivery — from understanding requirements
            to shipping production code.
          </p>
        </div>
      </div>

      {/* Team */}
      <section className="section-wrap section-g">
        <div className="section-inner">
          <ScrollReveal>
            <Eyebrow>Our team</Eyebrow>
            <SectionTitle>
              <GradientText>Three founders.</GradientText> One swarm.
            </SectionTitle>
          </ScrollReveal>
          <ScrollReveal>
            <div className="sage-grid">
              {shuffledTeam.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology */}
      <section className="section-wrap" style={{ paddingTop: '2rem' }}>
        <div className="section-inner">
          <ScrollReveal>
            <Eyebrow>Our technology</Eyebrow>
            <SectionTitle sub="We use a multi-agent orchestration approach where specialised AI agents collaborate on every aspect of software delivery. Each agent is trained for a specific role and communicates over a shared substrate — Postgres for state, Neo4j for the task graph, and Anthropic Claude with prompt caching for the language model layer.">
              Specialised agents, one pipeline.
            </SectionTitle>
          </ScrollReveal>
          <ScrollReveal>
            <div className="sage-grid">
              {AGENTS.map((agent) => (
                <article key={agent.name} className="sage-card lift" style={{ display: 'flex', gap: '0.9rem' }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--tw-bg-accent)',
                      color: 'var(--tw-text-accent)',
                      fontSize: 18,
                    }}
                  >
                    <i className={agent.icon} aria-hidden="true" />
                  </div>
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--tw-text-primary)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {agent.name}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--tw-text-secondary)', lineHeight: 1.65 }}>
                      {agent.role}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why */}
      <section className="section-wrap" style={{ background: 'var(--tw-grad-band)' }}>
        <div className="section-inner">
          <ScrollReveal>
            <Eyebrow>Why we built this</Eyebrow>
            <SectionTitle>Software is too slow.</SectionTitle>
            <div style={{ maxWidth: 640 }}>
              <p style={{ fontSize: '0.94rem', color: 'var(--tw-text-secondary)', lineHeight: 1.85, marginBottom: '1rem' }}>
                Most teams ship a fraction of what their customers need, because each
                step in delivery is a human bottleneck — requirements sit in a queue,
                architecture waits on a meeting, code reviews stall on availability.
                We rebuilt the pipeline as software.
              </p>
              <p style={{ fontSize: '0.94rem', color: 'var(--tw-text-secondary)', lineHeight: 1.85 }}>
                The agents work in parallel, persist their state to disk between
                steps, and recover from interruption without losing progress. What
                used to take a team of engineers a quarter, our swarm ships in days.
                Building this substrate is what unlocked the speed.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What we believe */}
      <section className="section-wrap" style={{ paddingTop: '2rem' }}>
        <div className="section-inner">
          <ScrollReveal>
            <Eyebrow>What we believe</Eyebrow>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, maxWidth: 640 }}>
              {BELIEFS.map((belief) => (
                <li
                  key={belief.lead}
                  style={{
                    display: 'flex',
                    gap: '0.7rem',
                    padding: '0.9rem 0',
                    borderBottom: '0.5px solid var(--tw-border-primary)',
                    fontSize: '0.88rem',
                    color: 'var(--tw-text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  <span aria-hidden="true" style={{ color: 'var(--tw-text-accent)', fontWeight: 700, flexShrink: 0 }}>
                    ✓
                  </span>
                  <span>
                    <strong style={{ color: 'var(--tw-text-primary)' }}>{belief.lead}</strong> {belief.text}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
