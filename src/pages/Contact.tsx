import { useState, FormEvent } from 'react'
import '../paper.css'
import ParticleCloud from '../components/ParticleCloud'
import { useDocumentTheme, PARTICLE_THEMES } from '../paperTheme'

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const theme = useDocumentTheme()
  const p = PARTICLE_THEMES[theme]

  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
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

      form.reset()
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
      <div className="paper-shell" style={{ maxWidth: '640px' }}>
        {/* Hero */}
        <header className="paper-hero">
          <div className="paper-eyebrow">
            <i className="ti ti-mail" aria-hidden="true" />
            Contact
          </div>
          <h1>Tell us about your project.</h1>
          <p>We'll get back to you within 24 hours.</p>
        </header>

        {/* Form */}
        <form className="paper-form" onSubmit={handleSubmit} noValidate>
          <div className="paper-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" autoComplete="name" required />
          </div>

          <div className="paper-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>

          <div className="paper-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} required />
          </div>

          <button
            type="submit"
            className="paper-submit"
            disabled={submitState === 'sending'}
          >
            {submitState === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {submitState === 'success' && (
            <div className="paper-banner success" role="status">
              Message sent. We'll be in touch soon.
            </div>
          )}
          {submitState === 'error' && (
            <div className="paper-banner error" role="alert">
              {errorMessage}
            </div>
          )}
        </form>

        <p className="paper-note">
          Or email us directly at hello@totallywild.ai
        </p>
      </div>
    </div>
  )
}
