import { useState, FormEvent } from 'react'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import FloatingInput from '../components/FloatingInput'
import ScrollReveal from '../components/ScrollReveal'

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  const setField = (key: 'name' | 'email' | 'message') =>
    (e: { target: { value: string } }) =>
      setFields((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      message: fields.message.trim(),
    }

    setSubmitState('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      setFields({ name: '', email: '', message: '' })
      setSubmitState('success')
      window.setTimeout(() => {
        setSubmitState((s) => (s === 'success' ? 'idle' : s))
      }, 4000)
    } catch (error) {
      setSubmitState('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or email us directly.'
      )
    }
  }

  return (
    <>
      {/* Hero */}
      <div className="hero-wrap">
        <div style={{ padding: '4rem 6vw 3rem', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Eyebrow>Contact</Eyebrow>
          <h1
            className="hero-h1-dark"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '0.4em' }}
          >
            Tell us about your project.
          </h1>
          <p className="hero-sub" style={{ marginBottom: 0 }}>
            We'll get back to you within 24 hours.
          </p>
        </div>
      </div>

      <section className="section-wrap section-g">
        <div className="section-inner">
          <ScrollReveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '4rem',
                alignItems: 'start',
                maxWidth: 920,
              }}
            >
              <form onSubmit={handleSubmit} noValidate>
                <FloatingInput
                  label="Your name"
                  name="name"
                  value={fields.name}
                  onChange={setField('name')}
                  autoComplete="name"
                  required
                />
                <FloatingInput
                  label="Work email"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={setField('email')}
                  autoComplete="email"
                  required
                />
                <FloatingInput
                  label="Message"
                  name="message"
                  value={fields.message}
                  onChange={setField('message')}
                  textarea
                  rows={6}
                  required
                />
                <Button variant="fill" type="submit" disabled={submitState === 'sending'} arrow>
                  {submitState === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>

                {submitState === 'success' && (
                  <div
                    role="status"
                    style={{
                      marginTop: '1rem',
                      padding: '0.8rem 1rem',
                      borderRadius: 8,
                      border: '0.5px solid var(--tw-text-accent)',
                      background: 'var(--tw-bg-accent)',
                      color: 'var(--tw-text-accent)',
                      fontSize: '0.84rem',
                    }}
                  >
                    Message sent. We'll be in touch soon.
                  </div>
                )}
                {submitState === 'error' && (
                  <div
                    role="alert"
                    style={{
                      marginTop: '1rem',
                      padding: '0.8rem 1rem',
                      borderRadius: 8,
                      border: '0.5px solid var(--tw-red)',
                      background: 'rgba(220, 38, 38, 0.06)',
                      color: 'var(--tw-red)',
                      fontSize: '0.84rem',
                    }}
                  >
                    {errorMessage}
                  </div>
                )}
              </form>

              <div style={{ paddingTop: '0.5rem' }}>
                <p style={{ fontSize: '0.86rem', color: 'var(--tw-text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  Whether you need a custom AI agent, a complete application built
                  end to end, or an enterprise automation partner — we're here to
                  help.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.84rem', color: 'var(--tw-text-secondary)' }}>
                  <div>
                    <i className="ti ti-mail" aria-hidden="true" style={{ color: 'var(--tw-text-accent)', marginRight: 8 }} />
                    hello@totallywild.ai
                  </div>
                  <div>
                    <i className="ti ti-world" aria-hidden="true" style={{ color: 'var(--tw-text-accent)', marginRight: 8 }} />
                    totallywild.ai
                  </div>
                  <div>
                    <i className="ti ti-map-pin" aria-hidden="true" style={{ color: 'var(--tw-text-accent)', marginRight: 8 }} />
                    Based in Brisbane, Australia
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
