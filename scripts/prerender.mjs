// Postbuild prerender: serves dist/ on localhost, loads each route in
// headless Chromium, captures the fully-rendered HTML, and writes
// dist/<route>/index.html so static scanners (AWS reviewers, crawlers,
// no-JS clients) see real body content on every route.
//
// The client still ships React via createRoot — visitors with JS get
// the same SPA they always did. The captured HTML is a snapshot React
// will replace on mount. No router or hydration changes required.

import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync, statSync } from 'node:fs'
import { dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')

const ROUTES = ['/', '/about', '/contact', '/terms', '/privacy']
const PORT = 4173
const POST_LOAD_SETTLE_MS = 3000

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.mjs':  'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.txt':  'text/plain; charset=utf-8',
}

function startStaticServer() {
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
    const candidate = join(distDir, urlPath === '/' ? 'index.html' : urlPath)

    let filePath = candidate
    const isFile = existsSync(filePath) && statSync(filePath).isFile()

    if (!isFile) {
      // SPA fallback — let React Router handle the route in the browser.
      filePath = join(distDir, 'index.html')
    }

    try {
      const body = await readFile(filePath)
      res.setHeader('Content-Type', MIME[extname(filePath).toLowerCase()] || 'application/octet-stream')
      res.setHeader('Cache-Control', 'no-store')
      res.end(body)
    } catch (err) {
      res.statusCode = 500
      res.end(String(err))
    }
  })

  return new Promise((resolveServer, rejectServer) => {
    server.once('error', rejectServer)
    server.listen(PORT, '127.0.0.1', () => resolveServer(server))
  })
}

async function capture(browser, route) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  // Force light scheme so captured DOM matches the default day theme.
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }])

  const url = `http://127.0.0.1:${PORT}${route}`
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
  // Let scroll/intersection-driven content settle (terminal demo, fade-ins).
  await new Promise(r => setTimeout(r, POST_LOAD_SETTLE_MS))

  const html = await page.content()
  await page.close()
  return html
}

function outputPathFor(route) {
  if (route === '/') return join(distDir, 'index.html')
  return join(distDir, route.replace(/^\//, ''), 'index.html')
}

async function main() {
  if (!existsSync(distDir)) {
    throw new Error(`dist/ not found at ${distDir}. Run vite build first.`)
  }

  console.log(`[prerender] serving ${distDir} on http://127.0.0.1:${PORT}`)
  const server = await startStaticServer()

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    for (const route of ROUTES) {
      const html = await capture(browser, route)
      const outPath = outputPathFor(route)
      await mkdir(dirname(outPath), { recursive: true })
      await writeFile(outPath, html, 'utf8')
      console.log(`[prerender] ${route.padEnd(10)} → ${outPath.replace(distDir, 'dist')}  (${html.length} bytes)`)
    }
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error('[prerender] failed:', err)
  process.exit(1)
})
