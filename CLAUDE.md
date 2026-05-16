# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server at http://localhost:5173
- `npm run build` — `tsc` typecheck then `vite build` → `dist/`. Build fails on TS errors (strict mode + `noUnusedLocals`/`noUnusedParameters`).
- `npm run preview` — serve the production build locally

There are **no test, lint, or format scripts**. Typechecking happens only as part of `npm run build`. The contact form (`/api/send`) is a Vercel serverless function and won't run under `vite dev` — test the form against a Vercel preview deploy or `vercel dev`.

`.visual-capture.mjs` is a Puppeteer screenshot helper invoked by external tooling (e.g. visual review agents); it's not wired to an npm script.

## Architecture

**Stack:** React 19 + TypeScript 5 + Vite 6 + Tailwind v4 + React Router 7. Deployed to **Vercel** (despite the README mentioning Cloudflare Pages — the live setup is Vercel because of the serverless function and `vercel.json`).

**Routing.** `src/main.tsx` mounts `<BrowserRouter>`; `src/App.tsx` declares five routes nested under `<Layout />`: `/` (Home), `/about`, `/contact`, `/terms`, `/privacy`. SPA fallback routing is handled by the rewrite in `vercel.json` — any non-asset path serves `index.html`.

**"Get Started" CTA goes off-site.** The primary CTA buttons in `Navigation.tsx` and `Home.tsx` link to `https://app-test.totallywild.ai/` (the product app), **not** the in-site `/contact` page. Don't "fix" these to internal links — the contact form is a separate path for inbound enquiries; the CTA is for product signup.

**Layout shell.** `src/components/Layout.tsx` renders `<Navigation>` (sticky top), `<Outlet />`, and a glass-blur footer. The footer is `position: fixed` on `md+` and inline on mobile, so page sections need `md:pb-12`-style bottom padding to clear it.

**Theming.** All colors, spacing, typography are driven by CSS custom properties in `src/tokens.css` (e.g. `var(--tw-bg-primary)`, `var(--tw-text-secondary)`, `var(--tw-iris)`). Day mode is the default; night mode activates when `data-theme="night"` is set on `<html>`. The toggle in `Navigation.tsx` stores theme in **local React state only** — it's not persisted, so a full page reload resets to day mode. The README's "persists across navigation" refers to in-session SPA navigation (Layout doesn't unmount), not reloads.

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
