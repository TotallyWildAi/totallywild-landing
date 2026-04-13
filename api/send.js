const DEFAULT_EMAIL_API_URL = 'https://365soft-email-worker.nick-598.workers.dev/api/send'

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function buildEmailShell(title, body) {
  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;background:#ffffff;color:#111827;">
      <div style="padding:24px 28px;border-bottom:1px solid #e5e7eb;">
        <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#6b7280;">Totally Wild</p>
        <h1 style="margin:10px 0 0;font-size:24px;line-height:1.2;color:#111827;">${title}</h1>
      </div>
      <div style="padding:28px;">
        ${body}
      </div>
    </div>
  `.trim()
}

function buildAdminEmail({ name, email, message }) {
  return buildEmailShell(
    'New contact form submission',
    `
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;font-weight:600;width:96px;border-bottom:1px solid #e5e7eb;">Name</td>
          <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;font-weight:600;width:96px;border-bottom:1px solid #e5e7eb;">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${escapeHtml(email)}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;font-weight:600;width:96px;vertical-align:top;">Message</td>
          <td style="padding:10px 0;white-space:pre-wrap;">${escapeHtml(message)}</td>
        </tr>
      </table>
      <p style="margin:24px 0 0;font-size:14px;line-height:1.6;color:#4b5563;">
        Reply directly to <a href="mailto:${escapeHtml(email)}" style="color:#111827;">${escapeHtml(email)}</a>.
      </p>
    `
  )
}

function buildConfirmationEmail({ name, message }) {
  return buildEmailShell(
    `Thanks for reaching out, ${escapeHtml(name)}`,
    `
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#374151;">
        We received your message and will get back to you within 24 hours.
      </p>
      <div style="padding:18px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;">
        <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;">Your message</p>
        <p style="margin:0;font-size:14px;line-height:1.7;white-space:pre-wrap;color:#111827;">${escapeHtml(message)}</p>
      </div>
    `
  )
}

async function sendEmail(apiUrl, clientId, clientSecret, payload) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'CF-Access-Client-Id': clientId,
      'CF-Access-Client-Secret': clientSecret
    },
    body: JSON.stringify(payload)
  })

  const responseText = await response.text()
  let data = null

  try {
    data = JSON.parse(responseText)
  } catch {
    data = null
  }

  if (!response.ok || !data?.success) {
    throw new Error(data?.error || `Email service returned ${response.status}.`)
  }

  return data
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'OPTIONS, POST')
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'OPTIONS, POST')
    return res.status(405).json({ success: false, error: 'Method Not Allowed' })
  }

  const apiUrl = String(process.env.EMAIL_API_URL || DEFAULT_EMAIL_API_URL).trim()
  const clientId = String(process.env.CF_ACCESS_CLIENT_ID || '').trim()
  const clientSecret = String(process.env.CF_ACCESS_CLIENT_SECRET || '').trim()
  const adminEmail = String(process.env.CONTACT_TO_EMAIL || '').trim()
  const fromEmail = String(process.env.CONTACT_FROM_EMAIL || '').trim()
  const sendConfirmation = String(process.env.CONTACT_SEND_CONFIRMATION || 'true').trim().toLowerCase() !== 'false'
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})

  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const message = String(body.message || '').trim()

  if (!apiUrl) {
    return res.status(500).json({ success: false, error: 'EMAIL_API_URL is not configured.' })
  }

  if (!clientId || !clientSecret) {
    return res.status(500).json({ success: false, error: 'Cloudflare Access service token is not configured.' })
  }

  if (!adminEmail) {
    return res.status(500).json({ success: false, error: 'CONTACT_TO_EMAIL is not configured.' })
  }

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, error: 'Please enter a valid email address.' })
  }

  if (name.length > 120 || email.length > 254 || message.length > 5000) {
    return res.status(400).json({ success: false, error: 'Your message is too long. Please shorten it and try again.' })
  }

  const basePayload = fromEmail ? { fromEmail } : {}

  try {
    await sendEmail(apiUrl, clientId, clientSecret, {
      to: adminEmail,
      subject: `New Totally Wild contact: ${name} (${email})`,
      message: buildAdminEmail({ name, email, message }),
      contentType: 'HTML',
      ...basePayload
    })

    let confirmationSent = false

    if (sendConfirmation) {
      try {
        await sendEmail(apiUrl, clientId, clientSecret, {
          to: email,
          subject: 'We received your message - Totally Wild',
          message: buildConfirmationEmail({ name, message }),
          contentType: 'HTML',
          ...basePayload
        })
        confirmationSent = true
      } catch (error) {
        console.error('Confirmation email failed', error)
      }
    }

    return res.status(200).json({ success: true, confirmationSent })
  } catch (error) {
    console.error('Contact email failed', error)
    return res.status(502).json({
      success: false,
      error: error instanceof Error ? error.message : 'Email send failed.'
    })
  }
}
