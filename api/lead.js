// Lead capture for the /vision landing page.
//
// Reuses the same Cloudflare email-worker integration as api/send.js (so it
// works with the env that's already configured), and additionally pushes the
// lead into the CRM (projects.totallywild.ai) when CRM_USER / CRM_PASS are set.
// Email and CRM run independently — neither failing blocks the lead.

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

function buildShell(title, body) {
  return `
    <div style="font-family:Inter,-apple-system,Segoe UI,Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;color:#0b0d10;">
      <div style="background:linear-gradient(135deg,#2f6be0,#2257c4);padding:30px 28px;">
        <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.85);">TotallyWild.ai</p>
        <h1 style="margin:10px 0 0;font-size:23px;line-height:1.2;color:#ffffff;">${title}</h1>
      </div>
      <div style="padding:28px;">${body}</div>
      <div style="padding:20px 28px;border-top:1px solid #e2e6ec;color:#5b626e;font-size:12px;">
        Totally Wild AI · Brisbane, Australia
      </div>
    </div>
  `.trim()
}

function adminEmail({ name, email, company, message, source }) {
  const r = (label, val) =>
    val
      ? `<tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#5b626e;white-space:nowrap;">${label}</td><td style="padding:8px 0;color:#0b0d10;">${escapeHtml(val)}</td></tr>`
      : ''
  return buildShell(
    'New lead from /vision',
    `<table style="border-collapse:collapse;">
       ${r('Name', name)}${r('Email', email)}${r('Company', company)}${r('Source', source)}
     </table>
     ${message ? `<div style="margin-top:18px;padding:14px;background:#f6f8fa;border:1px solid #e2e6ec;border-radius:10px;white-space:pre-wrap;">${escapeHtml(message)}</div>` : ''}
     <p style="margin:22px 0 0;font-size:14px;">Reply directly: <a href="mailto:${escapeHtml(email)}" style="color:#2f6be0;">${escapeHtml(email)}</a></p>`
  )
}

function confirmationEmail({ name }) {
  const hi = name ? `Hi ${escapeHtml(name.split(' ')[0])},` : 'Hi there,'
  return buildShell(
    'Thanks for reaching out',
    `<p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#374151;">${hi}</p>
     <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#374151;">Thanks for your interest in TotallyWild.ai. We help teams certify the models they build, then distil and route workloads to the cheapest backend that passes. A member of our team will be in touch shortly.</p>
     <p style="margin:0;"><a href="https://app.totallywild.ai/" style="display:inline-block;background:#2f6be0;color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:10px 18px;border-radius:8px;">Open the platform →</a></p>`
  )
}

async function sendEmail(apiUrl, clientId, clientSecret, payload) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'CF-Access-Client-Id': clientId,
      'CF-Access-Client-Secret': clientSecret,
    },
    body: JSON.stringify(payload),
  })
  const text = await response.text()
  let data = null
  try {
    data = JSON.parse(text)
  } catch {
    data = null
  }
  if (!response.ok || !data?.success) {
    throw new Error(data?.error || `Email service returned ${response.status}.`)
  }
  return data
}

// ── CRM (projects.totallywild.ai) — optional, graceful ──────────────
let crmToken = null
let crmTokenExpires = 0

async function crmLogin(base, user, pass) {
  const res = await fetch(`${base}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: user, password: pass }),
  })
  if (!res.ok) throw new Error(`CRM login ${res.status}`)
  const data = await res.json()
  if (!data?.token) throw new Error('CRM login returned no token')
  crmToken = data.token
  crmTokenExpires = Date.now() + 60 * 60 * 1000
  return crmToken
}

async function pushToCrm({ name, email, company, phone, message, source }) {
  const base = String(process.env.CRM_API_URL || 'https://projects.totallywild.ai').replace(/\/$/, '')
  const user = String(process.env.CRM_USER || '').trim()
  const pass = String(process.env.CRM_PASS || '').trim()
  if (!base || !user || !pass) return { skipped: true }

  const token = crmToken && crmTokenExpires > Date.now() ? crmToken : await crmLogin(base, user, pass)
  const body = {
    email,
    name: name || '',
    company: company || '',
    phone: phone || '',
    tags: ['source:vision-landing', `source:${source}`],
  }
  let res = await fetch(`${base}/api/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  })
  if (res.status === 401) {
    const fresh = await crmLogin(base, user, pass)
    res = await fetch(`${base}/api/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${fresh}` },
      body: JSON.stringify(body),
    })
  }
  if (res.status === 409) return { existed: true }
  if (!res.ok) throw new Error(`CRM contact ${res.status}`)
  const created = await res.json().catch(() => ({}))
  if (created?.id && message) {
    try {
      await fetch(`${base}/api/crm/contact/${created.id}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${crmToken}` },
        body: JSON.stringify({ content: message, type: 'note' }),
      })
    } catch {
      /* note is best-effort */
    }
  }
  return { contactId: created?.id }
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

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const company = String(body.company || '').trim()
  const phone = String(body.phone || '').trim()
  const message = String(body.message || '').trim()
  const source = String(body.source || 'vision').trim().slice(0, 60)

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ success: false, error: 'Please enter a valid email address.' })
  }
  if (name.length > 120 || company.length > 160 || message.length > 5000) {
    return res.status(400).json({ success: false, error: 'One of the fields is too long.' })
  }

  const apiUrl = String(process.env.EMAIL_API_URL || DEFAULT_EMAIL_API_URL).trim()
  const clientId = String(process.env.CF_ACCESS_CLIENT_ID || '').trim()
  const clientSecret = String(process.env.CF_ACCESS_CLIENT_SECRET || '').trim()
  const adminTo = String(process.env.CONTACT_TO_EMAIL || '').trim()
  const fromEmail = String(process.env.CONTACT_FROM_EMAIL || '').trim()
  const basePayload = fromEmail ? { fromEmail } : {}
  const emailConfigured = Boolean(apiUrl && clientId && clientSecret && adminTo)

  const [crmResult, emailResult] = await Promise.allSettled([
    pushToCrm({ name, email, company, phone, message, source }),
    (async () => {
      if (!emailConfigured) return { skipped: true }
      await sendEmail(apiUrl, clientId, clientSecret, {
        to: adminTo,
        subject: `New /vision lead: ${name || email} (${source})`,
        message: adminEmail({ name, email, company, message, source }),
        contentType: 'HTML',
        ...basePayload,
      })
      try {
        await sendEmail(apiUrl, clientId, clientSecret, {
          to: email,
          subject: 'Thanks for reaching out — TotallyWild.ai',
          message: confirmationEmail({ name }),
          contentType: 'HTML',
          ...basePayload,
        })
      } catch (err) {
        console.error('Vision confirmation email failed', err)
      }
      return { sent: true }
    })(),
  ])

  if (crmResult.status === 'rejected') console.error('Vision CRM push failed', crmResult.reason)
  if (emailResult.status === 'rejected') console.error('Vision admin email failed', emailResult.reason)

  // Succeed as long as the lead reached at least one destination.
  const crmOk = crmResult.status === 'fulfilled' && !crmResult.value?.skipped
  const emailOk = emailResult.status === 'fulfilled' && !emailResult.value?.skipped
  if (!crmOk && !emailOk) {
    return res.status(502).json({ success: false, error: 'Lead could not be delivered. Please email us directly.' })
  }

  return res.status(200).json({ success: true })
}
