// Postbuild SSG: imports the SSR bundle, renders each route to HTML via
// ReactDOMServer.renderToString, injects into the built index.html template,
// and writes dist/<route>/index.html. No browser, no native libs — runs as
// plain Node so Vercel CI has no surprises.

import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const distDir = join(root, 'dist')
const ssrDir = join(root, 'dist-server')
const ssrEntry = join(ssrDir, 'entry-server.js')

const ROUTES = ['/', '/about', '/contact', '/terms', '/privacy']

async function main() {
  if (!existsSync(distDir)) throw new Error(`dist/ not found — run vite build first`)
  if (!existsSync(ssrEntry)) throw new Error(`SSR entry not found at ${ssrEntry} — run the --ssr build first`)

  const template = await readFile(join(distDir, 'index.html'), 'utf8')
  if (!template.includes('<!--app-html-->')) {
    throw new Error(`index.html is missing the <!--app-html--> placeholder`)
  }

  const { render } = await import(pathToFileURL(ssrEntry).href)

  for (const route of ROUTES) {
    const appHtml = render(route)
    const html = template.replace('<!--app-html-->', appHtml)
    const outPath = route === '/'
      ? join(distDir, 'index.html')
      : join(distDir, route.replace(/^\//, ''), 'index.html')
    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, html, 'utf8')
    console.log(`[prerender] ${route.padEnd(10)} → ${outPath.replace(distDir, 'dist')}  (${html.length} bytes)`)
  }

  // Clean up the SSR bundle — it's only needed during prerender, not at runtime.
  await rm(ssrDir, { recursive: true, force: true })
}

main().catch((err) => {
  console.error('[prerender] failed:', err)
  process.exit(1)
})
