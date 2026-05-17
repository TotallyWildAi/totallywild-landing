import { useState, useEffect } from 'react'
import '../paper.css'
import ParticleCloud from '../components/ParticleCloud'
import MarqueeTape from '../components/MarqueeTape'
import { useDocumentTheme, PARTICLE_THEMES } from '../paperTheme'

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
    <article className="paper-team-card">
      <div className="paper-team-photo">
        {!imageError ? (
          <img
            src={member.photo}
            alt={member.name}
            onError={() => setImageError(true)}
          />
        ) : (
          <span>{member.initials}</span>
        )}
      </div>
      <h3>{member.name}</h3>
      <p className="paper-team-title">{member.title}</p>
      <p className="paper-team-bio">{member.bio}</p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on LinkedIn`}
        className="paper-team-social"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      </a>
    </article>
  )
}

export default function About() {
  const theme = useDocumentTheme()
  const p = PARTICLE_THEMES[theme]

  // SSR-safe shuffle: start with default order, shuffle after mount
  const [shuffledTeam, setShuffledTeam] = useState<TeamMember[]>(teamMembers)
  useEffect(() => {
    setShuffledTeam(shuffleArray(teamMembers))
  }, [])

  return (
    <div className="paper-page">
      <ParticleCloud
        bgColor={p.bgColor}
        particleColor={p.particleColor}
        linkColor={p.linkColor}
        glowColor={p.glowColor}
        count={250}
        speed={0.32}
        linkRadius={130}
        cursorPull={0.04}
        cursorRadius={170}
      />
      <div className="paper-shell">
        {/* Hero */}
        <header className="paper-hero">
          <div className="paper-eyebrow">
            <i className="ti ti-users-group" aria-hidden="true" />
            About
          </div>
          <h1>Software should build itself.</h1>
          <p>
            We built the factory that makes it happen. An orchestrated swarm of AI
            agents handles every stage of delivery — from understanding requirements
            to shipping production code.
          </p>

          {/* Running terminal tape — restored from the previous About design.
              Sits under the lede as a kinetic tagline. */}
          <div style={{ marginTop: '2rem' }}>
            <MarqueeTape />
          </div>
        </header>

        {/* Team */}
        <section className="paper-section">
          <h2>Our team</h2>
          <div className="paper-team-grid">
            {shuffledTeam.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* Technology */}
        <section className="paper-section">
          <h2>Our technology</h2>
          <p>
            We use a multi-agent orchestration approach where specialised AI agents
            collaborate on every aspect of software delivery. Each agent is trained
            for a specific role and communicates over a shared substrate — Postgres
            for state, Neo4j for the task graph, and Anthropic Claude with prompt
            caching for the language model layer.
          </p>

          <div className="paper-agents">
            {[
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
            ].map((a) => (
              <article key={a.name} className="paper-agent">
                <div className="paper-agent-icon">
                  <i className={a.icon} aria-hidden="true" />
                </div>
                <div className="paper-agent-text">
                  <span className="paper-agent-name">{a.name}</span>
                  <span className="paper-agent-role">{a.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why */}
        <section className="paper-section">
          <h2>Why we built this</h2>
          <p>
            Software is too slow. Most teams ship a fraction of what their customers
            need, because each step in delivery is a human bottleneck — requirements
            sit in a queue, architecture waits on a meeting, code reviews stall on
            availability. We rebuilt the pipeline as software.
          </p>
          <p>
            The agents work in parallel, persist their state to disk between steps,
            and recover from interruption without losing progress. What used to take
            a team of engineers a quarter, our swarm ships in days. Building this
            substrate is what unlocked the speed.
          </p>
        </section>

        {/* What we believe */}
        <section className="paper-section">
          <h2>What we believe</h2>
          <ul className="paper-beliefs">
            <li>
              <i className="ti ti-check" aria-hidden="true" />
              <span>
                <strong>AI should ship code, not just suggest it.</strong>{' '}
                Production output is the only useful metric.
              </span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true" />
              <span>
                <strong>You own the code. Always.</strong> We don't host your data,
                we don't train on your work, we don't lock you into our runtime.
              </span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true" />
              <span>
                <strong>Multi-agent review beats single-model output.</strong>{' '}
                A reviewer that reads diffs catches things a generator misses.
              </span>
            </li>
            <li>
              <i className="ti ti-check" aria-hidden="true" />
              <span>
                <strong>Speed without quality is a liability.</strong> The pipeline
                includes testing, security review, and acceptance checks before
                anything ships.
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
