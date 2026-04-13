import { useState, useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

interface TeamMember {
  name: string
  title: string
  photo: string
  initials: string
}

const teamMembers: TeamMember[] = [
  { name: 'Dmitry Kislov', title: 'Co-Founder & Software Engineer', photo: '/team/dmitry.jpg', initials: 'DK' },
  { name: 'Nick Forshteyn', title: 'Co-Founder & Cybersecurity Engineer', photo: '/team/nick.jpg', initials: 'NF' },
  { name: 'Nellie Forshteyn', title: 'Co-Founder & Operations', photo: '/team/nellie.jpg', initials: 'NF' }
]

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function About() {
  const [shuffledTeam, setShuffledTeam] = useState<TeamMember[]>([])

  useEffect(() => {
    setShuffledTeam(shuffleArray(teamMembers))
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 headline-gradient" style={{ letterSpacing: '-1px', lineHeight: 1.08 }}>
            About Totally Wild
          </h1>
          <p className="text-lg mb-12" style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}>
            Software should build itself. We built the factory that makes it happen. An orchestrated swarm of AI agents handles every stage of delivery — from understanding requirements to shipping production code. No meetings. No delays. Just working software.
          </p>
          
          {/* Prominent tagline */}
          <div className="py-12 px-8 rounded-2xl" style={{ background: 'var(--tw-bg-secondary)', border: '0.5px solid var(--tw-border-primary)' }}>
            <p className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--tw-text-secondary)', letterSpacing: '-0.5px', lineHeight: 1.3 }}>
              No meetings. No delays. Just working software.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <ScrollReveal>
        <section className="py-16 px-6" style={{ background: 'var(--tw-bg-secondary)' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--tw-text-primary)', letterSpacing: '-1px' }}>
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {shuffledTeam.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Technology Section */}
      <ScrollReveal>
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: 'var(--tw-text-primary)', letterSpacing: '-1px' }}>
              Our Technology
            </h2>
            <p className="text-base text-center" style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}>
              We use a multi-agent orchestration approach where specialised AI agents collaborate on every aspect of software delivery. Each agent is trained for a specific role — requirements analysis, system architecture, code implementation, review, testing, security auditing, and deployment. They communicate, coordinate, and execute tasks in parallel, delivering production-ready software in a fraction of the time traditional teams require.
            </p>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}

function TeamCard({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="text-center">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #6E5CCC 0%, #9B8EE8 100%)' }}>
        {!imageError ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
            {member.initials}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--tw-text-primary)' }}>
        {member.name}
      </h3>
      <p className="text-sm" style={{ color: 'var(--tw-text-secondary)' }}>
        {member.title}
      </p>
    </div>
  )
}
