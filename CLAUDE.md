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
- **Components must be SSR-safe.** Code runs once under Node during prerender with no DOM. Touch `window`/`document` only inside `useEffect` or event handlers (see `ScrollReveal.tsx`, `Typewriter.tsx`, `HeroEffects.tsx`), and make sure the initial render matches the first client render (no `Date`/random in render).
- **The `ROUTES` array in `scripts/prerender.mjs` must stay in sync with `App.tsx`.** A route added to `App.tsx` but not to `ROUTES` won't get a prerendered HTML file (it still works via the SPA fallback, but loses SSG/SEO benefit).
- **The `<!--app-html-->` comment in `index.html` is load-bearing** — prerender throws if it's missing.

**Routing.** `src/App.tsx` declares six routes nested under `<Layout />`: `/` (Home), `/about`, `/creators`, `/contact`, `/terms`, `/privacy`. SPA fallback routing is handled by the rewrite in `vercel.json` — any non-asset path serves `index.html`.

**"Get Started" CTA goes off-site.** The primary CTA buttons in `Navigation.tsx` and `Home.tsx` link to `https://app.totallywild.ai/` (the product app), **not** the in-site `/contact` page. Don't "fix" these to internal links — the contact form is a separate path for inbound enquiries; the CTA is for product signup.

**Layout shell.** `src/components/Layout.tsx` renders `<Navigation>` (sticky top, blurred), `<Outlet />`, and a normal-flow footer — a dark-green gradient band (`--tw-grad-footer`) with the white lockup, link row, and legal line. The footer is **not** fixed; pages don't need clearance padding.

**Theming.** Single light theme — there is **no night mode**, no `data-theme` attribute, no theme toggle. All colors, spacing, typography are driven by CSS custom properties in `src/tokens.css` (e.g. `var(--tw-bg-primary)`, `var(--tw-text-accent)`, the `--tw-grad-*` gradient tokens). The design language (warm paper neutrals, green accent family, terracotta CTAs, Playfair Display display face, ombré gradients) comes from the `/vision` page; reusable class rules live in `src/site.css` (`.eyebrow`, `.s-title`, `.btn-fill`/`.btn-ghost`, `.sage-card`, `.fade-up`, etc.) — reach for those classes before writing new styles.

**The `/vision` page is static and standalone.** `public/vision/index.html` is a self-contained HTML file copied verbatim into `dist/` — it does not use the React app, tokens.css, or site.css. Don't refactor it to share code with the app.

**Tailwind v4 quirks.** `src/index.css` uses the v4 `@import 'tailwindcss'` syntax (not the legacy `@tailwind base/components/utilities` directives). `tailwind.config.ts` defines `brand`/`surface`/`text`/`border` color scales and the `Inter` / `Playfair Display` / `Geist Mono` fonts, but most components apply colors via inline `style={{ color: 'var(--tw-...)' }}` or the shared classes in `site.css` rather than utility classes — follow that pattern when editing or adding UI.

**Two tokens.css files.** `branding/tokens.css` is the brand-kit source artifact; `src/tokens.css` is the copy actually loaded by the app (imported from `src/index.css`). When changing tokens, update `src/tokens.css` (and ideally keep `branding/` in sync). `branding/BRAND_GUIDE.md` is the authoritative voice/visual reference — read it before generating new UI or copy.

**Contact form pipeline.** `src/pages/Contact.tsx` POSTs JSON to `/api/send`. `api/send.js` (Vercel function) validates input, then forwards to a Cloudflare Worker email service authenticated via a Cloudflare Access service token. Required env vars on the Vercel project:

- `CF_ACCESS_CLIENT_ID`, `CF_ACCESS_CLIENT_SECRET` — Cloudflare Access service token
- `CONTACT_TO_EMAIL` — admin recipient

Optional: `EMAIL_API_URL` (defaults to the worker URL hardcoded in `send.js`), `CONTACT_FROM_EMAIL`, `CONTACT_SEND_CONFIRMATION` (set to `"false"` to skip the user-facing confirmation email).

## Brand & writing rules

From `branding/BRAND_GUIDE.md` and `branding/README.md` — apply these any time you touch copy or UI:

- Voice: precise, confident, minimal. Short declarative sentences. **Never use exclamation marks.** Lowercase energy — don't capitalize for emphasis.
- Colors: green accent family (moss `#4A6741` is the working accent); terracotta `#C1693A` is reserved for primary CTAs only. Use CSS variables from `tokens.css`; never hardcode colors (the gradient ramps in `site.css` are the tokenized exception).
- Typography: Inter for everything; Playfair Display only for display headings (hero lines, `.s-title`, page titles); Geist Mono for terminal/code.
- Borders are intentionally `0.5px`, thinner than browser default.
- The lockup reads "TotallyWild.ai" with the robot mark — render it via `LogoLockup`, don't redraw it.
- Every animation must no-op under `prefers-reduced-motion`.
