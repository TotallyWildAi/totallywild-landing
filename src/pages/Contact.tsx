import { useState, FormEvent } from 'react'
import ScrollReveal from '../components/ScrollReveal'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    }

    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const body = await res.text()
        throw new Error(body || `Request failed (${res.status})`)
      }
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
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
              disabled={status === 'sending'}
              className="w-full px-8 py-4 rounded-lg text-base font-semibold transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: 'var(--tw-btn-primary-bg)', color: 'var(--tw-btn-primary-text)' }}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="p-4 rounded-lg text-center" style={{ background: 'var(--tw-bg-accent)', color: 'var(--tw-text-accent)' }}>
                Message sent! We'll be in touch soon.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-lg text-center" style={{ background: 'var(--tw-bg-accent)', color: 'var(--tw-text-accent)' }}>
                Couldn't send: {errorMsg || 'please try again later.'}
              </div>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
