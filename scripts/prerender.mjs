// Postbuild SSG: imports the SSR bundle, renders each route to HTML via
// ReactDOMServer.renderToString, injects per-route <head> (title, meta,
// canonical, OG/Twitter, JSON-LD) and the body markup into the built
// index.html template, writes dist/<route>/index.html, and emits a sitemap.
// No browser, no native libs — runs as plain Node so Vercel CI has no surprises.

import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const distDir = join(root, 'dist')
const ssrDir = join(root, 'dist-server')
const ssrEntry = join(ssrDir, 'entry-server.js')

const SITE = 'https://totallywild.ai'

const ROUTES = ['/', '/about', '/showcase', '/contact', '/terms', '/privacy']

// --- JSON-LD object definitions -------------------------------------------

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://totallywild.ai/#organization',
  name: 'Totally Wild AI',
  url: 'https://totallywild.ai',
  logo: { '@type': 'ImageObject', url: 'https://totallywild.ai/favicon.svg' },
  description: 'An AI-native software studio that builds custom apps and AI agents through an autonomous code-building factory.',
  address: { '@type': 'PostalAddress', addressLocality: 'Brisbane', addressRegion: 'QLD', addressCountry: 'AU' },
  sameAs: ['https://github.com/TotallyWildAi'],
}

const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://totallywild.ai/#website',
  url: 'https://totallywild.ai',
  name: 'Totally Wild AI',
  description: 'AI-native software studio building custom apps and AI agents.',
  publisher: { '@id': 'https://totallywild.ai/#organization' },
  inLanguage: 'en',
}

function softwareApplication({ name, description, applicationCategory, url, screenshot }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory,
    operatingSystem: 'Web',
    url,
    screenshot: SITE + screenshot,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@id': 'https://totallywild.ai/#organization' },
  }
}

const SHOWCASE_APPS = [
  softwareApplication({
    name: 'Buyer Outreach',
    description: 'A multi-mandate platform that enriches buyer data, sequences outreach, runs NDAs and tracks the pipeline, with a human-in-the-loop checkpoint at every send.',
    applicationCategory: 'BusinessApplication',
    url: 'https://buyer-outreach.eqr.vc/',
    screenshot: '/showcase/buyer-outreach.png',
  }),
  softwareApplication({
    name: 'xBullRadar',
    description: 'An AI-native investment analytics terminal fusing real-time sentiment, technicals and fundamentals into buy, sell and neutral verdicts.',
    applicationCategory: 'FinanceApplication',
    url: 'https://app.xbullradar.com',
    screenshot: '/showcase/xbullradar.png',
  }),
  softwareApplication({
    name: 'Graph Query Agent',
    description: 'Turns plain-English questions into reviewed, parameterised Cypher over a Neo4j knowledge graph, with full source lineage.',
    applicationCategory: 'DeveloperApplication',
    url: 'https://graphagent.eqr.vc/',
    screenshot: '/showcase/graph-query-agent.png',
  }),
  softwareApplication({
    name: 'Whiteout Haul',
    description: 'A Three.js 3D idle mining game — haul gold and silver by truck, survive hazards, automate with a bot, and ride live commodity-price economics.',
    applicationCategory: 'GameApplication',
    url: 'https://github.com/nick-totallywild/whiteout-haul',
    screenshot: '/showcase/whiteout-haul.png',
  }),
]

function breadcrumb(name, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://totallywild.ai' },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  }
}

// --- Per-route meta --------------------------------------------------------

const ROUTE_META = {
  '/': {
    title: 'Totally Wild AI — Autonomous code-building factory',
    description: 'We build complete, production-ready apps and AI agents end to end — designed, written, tested and shipped by AI, and you own every line. Brisbane, AU.',
    canonical: 'https://totallywild.ai/',
    jsonld: [ORGANIZATION, WEBSITE],
  },
  '/about': {
    title: 'About — Totally Wild AI',
    description: 'How Totally Wild AI works: an autonomous factory of AI agents that design, build, test and ship custom software and agents you fully own.',
    canonical: 'https://totallywild.ai/about',
    jsonld: [breadcrumb('About', 'https://totallywild.ai/about')],
  },
  '/showcase': {
    title: 'Showcase — apps built by Totally Wild AI',
    description: 'Real, live applications our autonomous build factory shipped — from M&A buyer outreach to a fintech terminal and an auditable graph query agent.',
    canonical: 'https://totallywild.ai/showcase',
    jsonld: [...SHOWCASE_APPS, breadcrumb('Showcase', 'https://totallywild.ai/showcase')],
  },
  '/contact': {
    title: 'Contact — Totally Wild AI',
    description: 'Tell us what you need built. Start a custom app or AI agent, or talk to the Totally Wild AI team. Based in Brisbane, Australia.',
    canonical: 'https://totallywild.ai/contact',
    jsonld: [breadcrumb('Contact', 'https://totallywild.ai/contact')],
  },
  '/terms': {
    title: 'Terms of Service — Totally Wild AI',
    description: 'The terms of service governing use of the Totally Wild AI website and services.',
    canonical: 'https://totallywild.ai/terms',
    jsonld: [breadcrumb('Terms of Service', 'https://totallywild.ai/terms')],
  },
  '/privacy': {
    title: 'Privacy Policy — Totally Wild AI',
    description: 'How Totally Wild AI collects, uses and protects your personal information.',
    canonical: 'https://totallywild.ai/privacy',
    jsonld: [breadcrumb('Privacy Policy', 'https://totallywild.ai/privacy')],
  },
}

// --- Head block builder ----------------------------------------------------
// Escape title/meta text so characters like the `&` in "M&A" produce valid
// HTML. JSON-LD goes through JSON.stringify (raw text inside <script>), so it
// needs no HTML escaping.
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildHead({ title, description, canonical, jsonld }) {
  const t = esc(title)
  const d = esc(description)
  const c = esc(canonical)
  const tags = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${c}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${c}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:url" content="${c}" />`,
  ]
  for (const obj of jsonld) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(obj)}</script>`)
  }
  return tags.join('\n    ')
}

async function main() {
  if (!existsSync(distDir)) throw new Error(`dist/ not found — run vite build first`)
  if (!existsSync(ssrEntry)) throw new Error(`SSR entry not found at ${ssrEntry} — run the --ssr build first`)

  const template = await readFile(join(distDir, 'index.html'), 'utf8')
  if (!template.includes('<!--app-html-->')) {
    throw new Error(`index.html is missing the <!--app-html--> placeholder`)
  }
  if (!template.includes('<!--app-head-->')) {
    throw new Error(`index.html is missing the <!--app-head--> placeholder`)
  }

  const { render } = await import(pathToFileURL(ssrEntry).href)

  for (const route of ROUTES) {
    const meta = ROUTE_META[route]
    if (!meta) throw new Error(`No ROUTE_META entry for route ${route} — every route must have meta`)
    const appHtml = render(route)
    const headHtml = buildHead(meta)
    const html = template
      .replace('<!--app-head-->', headHtml)
      .replace('<!--app-html-->', appHtml)
    const outPath = route === '/'
      ? join(distDir, 'index.html')
      : join(distDir, route.replace(/^\//, ''), 'index.html')
    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, html, 'utf8')
    console.log(`[prerender] ${route.padEnd(10)} → ${outPath.replace(distDir, 'dist')}  (${html.length} bytes)`)
  }

  // Generate sitemap.xml from the canonical URLs (same forms as ROUTE_META,
  // so they match exactly). /vision is intentionally excluded.
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = ROUTES.map((route) => {
    const { canonical } = ROUTE_META[route]
    return `  <url>\n    <loc>${canonical}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  }).join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  const sitemapPath = join(distDir, 'sitemap.xml')
  await writeFile(sitemapPath, sitemap, 'utf8')
  console.log(`[prerender] sitemap   → ${sitemapPath.replace(distDir, 'dist')}  (${ROUTES.length} urls)`)

  // Clean up the SSR bundle — it's only needed during prerender, not at runtime.
  await rm(ssrDir, { recursive: true, force: true })
}

main().catch((err) => {
  console.error('[prerender] failed:', err)
  process.exit(1)
})
