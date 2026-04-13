# Totally Wild — Automated Coding Factory

A production-ready marketing website for TotallyWild.ai, built with React 19, TypeScript, Vite 6, and Tailwind CSS 4.

## Features

- **3 Pages:** Home (hero, How It Works, Built by a Swarm, animated terminal demo), About (team, technology), Contact (form)
- **Day/Night Mode:** Toggle between light and dark themes with persistent state
- **Responsive Design:** Mobile-first, works on 320px-2560px viewports
- **Scroll Animations:** Sections fade in and slide up as they enter the viewport
- **Terminal Demo:** Animated line-by-line typewriter effect with macOS window chrome
- **Team Randomization:** Team member order shuffles on every page load
- **Brand Tokens:** All colors, fonts, and spacing use CSS custom properties from tokens.css

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
```

Produces a static build in the `dist/` directory.

## Preview

```bash
npm run preview
```

Preview the production build locally.

## Deploy to Cloudflare Pages

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set build output directory: `dist`
5. Deploy

## Team Photos

Team member photos for the About page should be placed in `public/team/`:

- `public/team/dmitry.jpg` — Dmitry Kislov
- `public/team/nick.jpg` — Nick Forshteyn
- `public/team/nellie.jpg` — Nellie Forshteyn

**Recommended specs:**
- Size: 400x400px (square)
- Format: JPEG
- File size: Under 100KB each
- Style: Professional headshots or friendly portraits

If a photo file is missing, the site automatically falls back to showing the person's initials in a gradient circle.

## Theme Toggle

The site loads in **day mode** by default. Click the sun/moon icon in the navigation to switch between day and night modes. The theme persists across page navigation during the session.

## Technology Stack

- **React 19** with TypeScript 5.x
- **Vite 6.x** as build tool
- **Tailwind CSS 4.x** with PostCSS integration
- **React Router 7.x** for multi-page navigation
- **CSS Custom Properties** for theming (tokens.css)

## License

© 2026 Totally Wild AI. All rights reserved.
