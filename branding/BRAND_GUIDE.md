# Totally Wild AI — Brand & Style Guide

> **Studio + Marketplace for AI agents and software**
> "Build with AI. Own it. Sell it."

This document defines the visual identity, design tokens, and implementation rules for Totally Wild AI. Follow it precisely to ensure consistency across all surfaces. The reference implementation of this language is the live site (`src/site.css`, `src/tokens.css`) and the `/vision` page it was distilled from.

---

## 1. Brand overview

Totally Wild AI is a Studio and Marketplace for building AI agents and software. The brand communicates warmth, craft, and ownership — natural greens on warm paper neutrals, a serif display face for headlines, and a single terracotta call-to-action color that stands apart from everything else on the page.

**Brand voice:** Precise · Confident · Minimal · Warm

**Writing rules:**
- Short, declarative sentences. Two sentences max per social post.
- Never use exclamation marks.
- No jargon: say "we handle the engineering" not "we leverage scalable infrastructure."
- Lowercase energy — don't capitalize words for emphasis.

---

## 2. Logo system

### Lockup

The lockup is the robot mark plus the wordmark **TotallyWild.ai** (camel-cased, with the `.ai`). The wordmark uses the logo gradient (`#1F2E24 → #4A7C59`) on light surfaces, or white with "Wild" in sage (`#7FAF8A`) on the dark footer.

### Robot mark

A circled robot head: ring + chassis strokes in pine (`#2C4F38`), antenna dot and chin line in fern (`#4A7C59`), eye glints in `#BDD9C5`, circle fill `#EDF1EC`. It lives inline as SVG in `src/components/LogoLockup.tsx` — there are no separate day/night asset variants.

### Rules
- Never rotate, skew, or add effects to the mark.
- Minimum size: 24px for the mark alone, 120px wide for the full lockup.
- Clear space: minimum padding around the mark equals the width of the mark circle.

---

## 3. Color palette

The theme is **light only**. There is no night mode.

### Warm neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| `paper-0` | `#FAFAF8` | Page background |
| `paper-1` | `#F5F5F2` | Secondary surfaces, code blocks |
| `paper-2` | `#EEECEA` | Tertiary surfaces |
| `white` | `#FFFFFF` | Card backgrounds, gradient ends |
| `line` | `#E2E0DC` | Default borders |
| `line-strong` | `#D0CEC8` | Stronger borders (inputs, ghost buttons) |

### Greens (brand accent family)

| Token | Hex | Usage |
|-------|-----|-------|
| `ink` | `#1E2B1A` | Primary text |
| `pine` | `#2C4F38` | Deep green — gradients, active stepper dots |
| `fern` | `#4A7C59` | Mid green — gradients, hovers, cursor |
| `moss` | `#4A6741` | Accent — eyebrows, links, checks, focus |
| `sage` | `#7FAF8A` | Light green — gradient ends, footer em |
| `sage-tint` | `#E8EFE6` | Pale green wash — accent surfaces |
| `deep-1/-2` | `#0C2E2A` / `#144E46` | Footer gradient |

### Terracotta (CTA only)

| Token | Hex | Usage |
|-------|-----|-------|
| `terra` | `#C1693A` | Primary CTA buttons (nav, hero, pricing) |
| `terra-deep` | `#A84E28` | CTA gradient start |

**Rule:** Terracotta is reserved for primary calls to action — never for decoration, text, or borders. Everything else accents with the green family.

### Status colors

Success `#1D9E75` · Error `#DC2626` · Warning `#D97706`. Functional UI states only — never decorative.

---

## 4. Gradients

Ombré treatments are the core of the design language. Use the tokens, never ad-hoc gradients:

| Token | Value | Usage |
|-------|-------|-------|
| `--tw-hero-ombre` | `linear-gradient(135deg, #E2F2EE 0%, #EFF7F5 50%, #FDF5F0 100%)` | Hero bands |
| `--tw-grad-heading` | `linear-gradient(90deg, #1F2E24, #3D6B4F)` | Gradient-clipped headings |
| `--tw-grad-green` | `linear-gradient(90deg, #3D6B4F, #4A7C59, #7FAF8A)` | Typewriter line, CTA line 2 |
| `--tw-grad-dark` | `linear-gradient(90deg, #0C2E2A, #144E46)` | Hero headline line 1 |
| `--tw-grad-cta` | `linear-gradient(135deg, #A84E28, #C1693A)` | Featured pricing button |
| `--tw-grad-band` | `linear-gradient(180deg, #F0F6F1, #FFFFFF)` | Alternating section bands |
| `--tw-grad-callout` | `linear-gradient(135deg, #E2F2EE, #FDF5F0)` | Callouts, CTA box |
| `--tw-grad-footer` | `linear-gradient(135deg, #0C2E2A, #144E46)` | Footer |

Cards use sage ombré ramps (see `.sage-card`, `.mkt-card`, `.sc` in `src/site.css`) — sequenced `linear-gradient(145deg, …)` washes from `#E8F5EE` down to `#BDD9C5`.

---

## 5. Typography

### Font stack

| Role | Font | Fallbacks |
|------|------|-----------|
| Display & hero headings | Playfair Display (700, 800) | Georgia, Times New Roman, serif |
| Body text & UI | Inter (300–700) | system-ui, -apple-system, Segoe UI, sans-serif |
| Code & data | Geist Mono (300–500) | SF Mono, Fira Code, Fira Mono, monospace |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800&family=Geist+Mono:wght@300;400;500&display=swap
```

The serif is for display moments only — hero headlines, section titles (`.s-title`), page titles. Body copy, buttons, labels and navigation are always Inter.

### Type scale

| Name | Size | Weight | Usage |
|------|------|--------|-------|
| Hero display | clamp(2.8rem, 5.5vw, 4.8rem) | 700 serif | Hero headline lines |
| Section title | clamp(1.7rem, 3vw, 2.6rem) | 700 serif | `.s-title` |
| H4 / card title | 0.88–1rem | 600–700 | Card headings |
| Body | 0.94rem | 400 | Section subtitles, prose |
| Small | 0.8–0.86rem | 400–500 | Card copy, lists |
| Eyebrow | 0.7–0.72rem | 600, 0.13em tracking, uppercase | Section eyebrows |

### Gradient headings

Headings gradient-clip via `background-clip: text`. Hero line 1 uses `--tw-grad-dark`, the animated line uses `--tw-grad-green`, section titles use `--tw-grad-heading` (`.s-title-grad` / `.headline-gradient`).

### Eyebrows

Section labels are uppercase, letterspaced moss green with a leading dash (`.eyebrow` — an 18px 1px-high line before the text).

---

## 6. Component patterns

All from `src/site.css` — use the classes rather than re-deriving styles:

- **Buttons:** `.btn-fill` (terracotta, white text, radius 8px) and `.btn-ghost` (transparent, 0.5px `line-strong` border, greens on hover). Interactive flourishes: click ripple, slight 3D tilt on hover, arrow nudge (`.btn-arrow`).
- **Cards:** 0.5px borders, radius 10–14px, sage ombré backgrounds by position, `.lift` hover (translateY −3/−4px + soft shadow), optional `.spot-card` cursor-follow glow.
- **Pills:** `.ind-pill` (industries) and `.hr-f` (✓-prefixed features) — 0.5px border, sage gradient wash, green hover.
- **Pricing:** `.p-card` grid, featured card gets `.feat` + badge + `--tw-grad-cta` button.
- **Reveals:** `.fade-up` IntersectionObserver reveals with stagger delays (`-d1…-d6`); the React `ScrollReveal` component with `delay` prop is the in-app equivalent.
- **Forms:** floating-label inputs (`.float-wrap/.float-input/.float-label`).
- **Footer:** dark-green gradient band, white lockup, muted white links.

### Hero sections

Hero bands sit on `--tw-hero-ombre` with a soft radial glow top-right and a fade-to-page bottom edge. Home adds cursor-trail dots and a blob glow (pointer-fine devices only).

---

## 7. Spacing & layout

### Border radius

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 6px | Small buttons, inputs |
| `md` | 8px | Standard buttons, pills |
| `lg` | 12px | Cards |
| `xl` | 14–16px | Pricing cards, feature blocks |
| `pill` | 100px | Badges, stat chips |

### Border widths

- Default border: `0.5px solid` (thinner than standard 1px for refined feel)
- Mark strokes: `1.5px`
- Focus rings: `0 0 0 3px var(--tw-focus-ring)`

### Sections

- `.section-wrap`: `3.5rem 6vw` padding; `.section-inner`: max-width 1200px centered.
- Alternate plain paper and `--tw-grad-band` washes between sections.
- Grids: 1.2rem gaps; collapse to single column under 960px.

---

## 8. Implementation files

```
branding/
├── tokens.css          ← CSS custom properties (mirror of src/tokens.css)
├── tokens.json         ← Structured tokens for build tools
├── BRAND_GUIDE.md      ← This file
└── README.md
```

`src/tokens.css` is the copy the app actually loads; keep `branding/tokens.css` in sync when tokens change.

---

## 9. Quick reference for coding agents

When generating UI for Totally Wild AI:

1. **Import** `tokens.css` and use CSS variables — never hardcode hex values (gradient ramps in `site.css` are the tokenized exception).
2. **Fonts:** Inter (300–700) for everything, Playfair Display (700, 800) for display headings only, Geist Mono for terminal/code.
3. **Light theme only.** There is no night mode, no `data-theme` attribute, no theme toggle.
4. **Green accents, terracotta CTAs.** Moss `#4A6741` is the working accent; terracotta `#C1693A` appears only on primary calls to action.
5. **Borders are 0.5px** — not 1px. This is intentional.
6. **Gradients are tokens.** Use `--tw-grad-*` / `--tw-hero-ombre`; don't invent new ramps.
7. **Serif is for display.** Never set body copy, buttons, or labels in Playfair Display.
8. **Eyebrow + serif title + sub** is the standard section opener.
9. **Respect reduced motion.** Every animation (reveals, typewriter, tilt, ripple, trails) must no-op under `prefers-reduced-motion`.
10. **The lockup reads "TotallyWild.ai"** with the robot mark — render it via `LogoLockup`, don't redraw it.
