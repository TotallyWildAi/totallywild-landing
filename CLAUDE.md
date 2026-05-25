# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server at http://localhost:5173 (client-only render; no prerender)
- `npm run build` — four chained steps: `tsc` typecheck → `vite build` (client bundle → `dist/`) → `vite build --ssr src/entry-server.tsx --outDir dist-server` (SSR bundle) → `node scripts/prerender.mjs` (renders each route to static HTML, then deletes `dist-server/`). Build fails on TS errors (strict mode + `noUnusedLocals`/`noUnusedParameters`).
- `npm run preview` — serve the production build locally

There are **no test, lint, or format scripts**. Typechecking happens only as part of `npm run build`. The contact form (`/api/send`) is a Vercel serverless function and won't run under `vite dev` — test the form against a Vercel preview deploy or `vercel dev`.

`.visual-capture.mjs` is a Puppeteer screenshot helper invoked by external tooling (e.g. visual review agents); it's not wired to an npm script.

## Architecture

**Stack:** React 19 + TypeScript 5 + Vite 6 + Tailwind v4 + React Router 7. Deployed to **Vercel** (despite the README mentioning Cloudflare Pages — the live setup is Vercel because of the serverless function and `vercel.json`).

**Rendering: prerendered SSG + client hydration.** This is not a plain client-rendered SPA. At build time `scripts/prerender.mjs` imports the SSR bundle's `render(url)` (`src/entry-server.tsx`, `renderToString` under `<StaticRouter>`) and writes static HTML for each route into the `<!--app-html-->` placeholder in `dist/index.html`, emitting `dist/<route>/index.html`. At runtime `src/main.tsx` calls `hydrateRoot` (not `createRoot`) under `<BrowserRouter>` to attach to that prerendered markup. Consequences:
- **Components must be SSR-safe.** Code runs once under Node during prerender with no DOM. Touch `window`/`document` only inside `useEffect` (see `ScrollReveal.tsx`, `paperTheme.ts`) and assume `data-theme` is `"day"` during prerender.
- **The `ROUTES` array in `scripts/prerender.mjs` must stay in sync with `App.tsx`.** A route added to `App.tsx` but not to `ROUTES` won't get a prerendered HTML file (it still works via the SPA fallback, but loses SSG/SEO benefit).
- **The `<!--app-html-->` comment in `index.html` is load-bearing** — prerender throws if it's missing.

**Routing.** `src/App.tsx` declares six routes nested under `<Layout />`: `/` (Home), `/about`, `/creators`, `/contact`, `/terms`, `/privacy`. SPA fallback routing is handled by the rewrite in `vercel.json` — any non-asset path serves `index.html`.

**"Get Started" CTA goes off-site.** The primary CTA buttons in `Navigation.tsx` and `Home.tsx` link to `https://app.totallywild.ai/` (the product app), **not** the in-site `/contact` page. Don't "fix" these to internal links — the contact form is a separate path for inbound enquiries; the CTA is for product signup.

**Layout shell.** `src/components/Layout.tsx` renders `<Navigation>` (sticky top), `<Outlet />`, and a glass-blur footer. The footer is `position: fixed` on `md+` and inline on mobile, so page sections need `md:pb-12`-style bottom padding to clear it.

**Theming.** All colors, spacing, typography are driven by CSS custom properties in `src/tokens.css` (e.g. `var(--tw-bg-primary)`, `var(--tw-text-secondary)`, `var(--tw-iris)`). Day mode is the default; night mode activates when `data-theme="night"` is set on `<html>`. The toggle in `Navigation.tsx` stores theme in **local React state only** and writes `data-theme` to `<html>`; it's not persisted, so a full page reload resets to day mode. The README's "persists across navigation" refers to in-session SPA navigation (Layout doesn't unmount), not reloads. Canvas/particle components don't see React state — they read the theme via the `useDocumentTheme()` hook in `src/paperTheme.ts` (a `MutationObserver` on `<html data-theme>`), which also exports `PARTICLE_THEMES` for the warm-paper pages.

**Tailwind v4 quirks.** `src/index.css` uses the v4 `@import 'tailwindcss'` syntax (not the legacy `@tailwind base/components/utilities` directives). `tailwind.config.ts` defines `brand`/`surface`/`text`/`border` color scales and the `Plus Jakarta Sans` / `Geist Mono` fonts, but most components apply colors via inline `style={{ color: 'var(--tw-...)' }}` rather than utility classes — follow that pattern when editing or adding UI so day/night mode keeps working.

**Two tokens.css files.** `branding/tokens.css` is the brand-kit source artifact; `src/tokens.css` is the copy actually loaded by the app (imported from `src/index.css`). When changing tokens, update `src/tokens.css` (and ideally keep `branding/` in sync). `branding/BRAND_GUIDE.md` is the authoritative voice/visual reference — read it before generating new UI or copy.

**Contact form pipeline.** `src/pages/Contact.tsx` POSTs JSON to `/api/send`. `api/send.js` (Vercel function) validates input, then forwards to a Cloudflare Worker email service authenticated via a Cloudflare Access service token. Required env vars on the Vercel project:

- `CF_ACCESS_CLIENT_ID`, `CF_ACCESS_CLIENT_SECRET` — Cloudflare Access service token
- `CONTACT_TO_EMAIL` — admin recipient

Optional: `EMAIL_API_URL` (defaults to the worker URL hardcoded in `send.js`), `CONTACT_FROM_EMAIL`, `CONTACT_SEND_CONFIRMATION` (set to `"false"` to skip the user-facing confirmation email).

## Brand & writing rules

From `branding/BRAND_GUIDE.md` and `branding/README.md` — apply these any time you touch copy or UI:

- Voice: precise, confident, minimal. Short declarative sentences. **Never use exclamation marks.** Lowercase energy — don't capitalize for emphasis.
- Colors: only one accent (Iris `#6E5CCC` day / `#9B8EE8` night). Use CSS variables from `tokens.css`; never hardcode colors.
- Borders are intentionally `0.5px`, thinner than browser default.
- Wordmark reads "Totally Wild" (no "AI" in the lockup).
