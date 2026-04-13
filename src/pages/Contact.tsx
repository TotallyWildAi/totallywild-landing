import { useState, FormEvent } from 'react'
import ScrollReveal from '../components/ScrollReveal'

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim()
    }

    setSubmitState('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json().catch(() => null)

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      form.reset()
      setSubmitState('success')
      window.setTimeout(() => {
        setSubmitState((currentState) => currentState === 'success' ? 'idle' : currentState)
      }, 4000)
    } catch (error) {
      setSubmitState('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 headline-gradient" style={{ letterSpacing: '-1px', lineHeight: 1.08 }}>
            Get Started
          </h1>
          <p className="text-center text-base mb-12" style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}>
            Tell us about your project. We'll get back to you within 24 hours.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--tw-text-primary)' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                style={{
                  background: 'var(--tw-bg-secondary)',
                  border: '0.5px solid var(--tw-border-primary)',
                  color: 'var(--tw-text-primary)'
                }}
                onFocus={(e) => e.target.style.outline = '2px solid var(--tw-text-accent)'}
                onBlur={(e) => e.target.style.outline = 'none'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--tw-text-primary)' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                style={{
                  background: 'var(--tw-bg-secondary)',
                  border: '0.5px solid var(--tw-border-primary)',
                  color: 'var(--tw-text-primary)'
                }}
                onFocus={(e) => e.target.style.outline = '2px solid var(--tw-text-accent)'}
                onBlur={(e) => e.target.style.outline = 'none'}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--tw-text-primary)' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg transition-all duration-200 resize-none"
                style={{
                  background: 'var(--tw-bg-secondary)',
                  border: '0.5px solid var(--tw-border-primary)',
                  color: 'var(--tw-text-primary)'
                }}
                onFocus={(e) => e.target.style.outline = '2px solid var(--tw-text-accent)'}
                onBlur={(e) => e.target.style.outline = 'none'}
              />
            </div>

            <button
              type="submit"
              disabled={submitState === 'sending'}
              className="w-full px-8 py-4 rounded-lg text-base font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: 'var(--tw-btn-primary-bg)',
                color: 'var(--tw-btn-primary-text)',
                cursor: submitState === 'sending' ? 'wait' : 'pointer',
                opacity: submitState === 'sending' ? 0.75 : 1
              }}
            >
              {submitState === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {submitState === 'success' && (
              <div className="p-4 rounded-lg text-center" style={{ background: 'var(--tw-bg-accent)', color: 'var(--tw-text-accent)' }}>
                Message sent! We'll be in touch soon.
              </div>
            )}

            {submitState === 'error' && (
              <div className="p-4 rounded-lg text-center" style={{ background: 'var(--tw-bg-secondary)', color: 'var(--tw-text-primary)', border: '0.5px solid var(--tw-border-primary)' }}>
                {errorMessage}
              </div>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
