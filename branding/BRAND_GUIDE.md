# Totally Wild AI — Brand & Style Guide

> **Automated Coding Factory**
> "Code ships itself. You ship the vision."

This document defines the visual identity, design tokens, and implementation rules for Totally Wild AI. Follow it precisely to ensure consistency across all surfaces.

---

## 1. Brand overview

Totally Wild AI is an automated coding factory. The brand communicates precision, confidence, and sophistication without feeling "techy." We draw visual inspiration from Vercel's design language — geometric simplicity, generous whitespace, monochrome foundations with a single accent — but apply it to our own identity.

**Brand voice:** Precise · Confident · Minimal · Sharp

**Writing rules:**
- Short, declarative sentences. Two sentences max per social post.
- Never use exclamation marks.
- No jargon: say "we handle the engineering" not "we leverage scalable infrastructure."
- Lowercase energy — don't capitalize words for emphasis.

---

## 2. Logo system

### Logomark

The mark is a thin circle (ring) with a filled circle (core) at center. It represents a signal — something intelligent running quietly.

- **Ring:** 1.5px stroke, no fill
- **Core:** solid circle, centered, roughly 1/3 the diameter of the ring
- **Clear space:** minimum padding around the logo equals the width of the logomark itself

### Variants

| Variant | Ring color | Core color | Text color | Use case |
|---------|-----------|------------|------------|----------|
| Day primary | `#C4C4C4` | `#6E5CCC` | `#0F0F0F` | Default on white/light backgrounds |
| Night primary | `rgba(255,255,255,0.3)` | `#9B8EE8` | `#FFFFFF` | Default on black/dark backgrounds |
| Branded | `#DDD8F7` | `#6E5CCC` | `#6E5CCC` | Marketing features, branded moments |
| Muted | `#E2E2E2` | `#A1A1A1` | `#8A8A8A` | Watermarks, disabled states, footers |

### Files

All SVG logo files are in `logos/svg/`:
- `logo-day-primary.svg` — full lockup, day mode
- `logo-night-primary.svg` — full lockup, night mode
- `logo-branded.svg` — full lockup, iris monochrome
- `logo-muted.svg` — full lockup, gray monochrome
- `mark-day.svg` — standalone mark, day mode
- `mark-night.svg` — standalone mark, night mode
- `favicon.svg` — app icon with dark rounded-rect background

### Rules
- Never rotate, skew, or add effects to the logo.
- Never place the day logo on a dark background or vice versa.
- Minimum size: 24px for the mark alone, 120px wide for the full lockup.
- The wordmark always reads "Totally Wild" (no "AI" in the lockup).

---

## 3. Color palette

### Gray scale

| Token | Hex | Usage |
|-------|-----|-------|
| `black` | `#0F0F0F` | Night backgrounds, day primary text |
| `gray-900` | `#1A1A1A` | Night secondary surfaces |
| `gray-800` | `#2E2E2E` | Night tertiary surfaces, day heading text |
| `gray-600` | `#6B6B6B` | Day ghost button text |
| `gray-500` | `#8A8A8A` | Day secondary text |
| `gray-400` | `#A1A1A1` | Day tertiary text, night tertiary text |
| `gray-300` | `#C4C4C4` | Night secondary text, day logo ring |
| `gray-200` | `#E2E2E2` | Day borders |
| `gray-100` | `#F0F0F0` | Day tertiary surfaces |
| `gray-50` | `#F7F7F7` | Day secondary surfaces, code blocks |
| `white` | `#FFFFFF` | Day backgrounds, night primary text |

### Accent — Iris

| Token | Hex | Usage |
|-------|-----|-------|
| `iris` | `#6E5CCC` | Day accent text, interactive states, logo core |
| `iris-bright` | `#9B8EE8` | Night accent text (higher contrast on dark) |
| `iris-light` | `#F3F1FC` | Day accent backgrounds (pills, badges, code) |
| `iris-mid` | `#DDD8F7` | Branded logo ring, hover states |

### Status colors

| Status | Day | Night |
|--------|-----|-------|
| Success | `#16A34A` | `#4ADE80` |
| Error | `#DC2626` | `#F87171` |
| Warning | `#D97706` | `#FBBF24` |

**Rule:** Iris is the only brand accent. Status colors are reserved for functional UI states only — never use green/red/amber decoratively.

---

## 4. Contrast requirements

Every text/background pairing must meet WCAG AA (4.5:1 for body, 3:1 for large text and UI components).

### Day mode pairings

| Text | Background | Ratio | Pass |
|------|-----------|-------|------|
| `#0F0F0F` (primary) | `#FFFFFF` | 18.4:1 | AAA |
| `#8A8A8A` (secondary) | `#FFFFFF` | 3.5:1 | AA Large only |
| `#6E5CCC` (accent) | `#FFFFFF` | 5.2:1 | AA |
| `#0F0F0F` (primary) | `#F7F7F7` | 16.8:1 | AAA |
| `#6E5CCC` (accent) | `#F3F1FC` | 4.7:1 | AA |

### Night mode pairings

| Text | Background | Ratio | Pass |
|------|-----------|-------|------|
| `#FFFFFF` (primary) | `#0F0F0F` | 17.9:1 | AAA |
| `#C4C4C4` (secondary) | `#0F0F0F` | 9.3:1 | AAA |
| `#A1A1A1` (tertiary) | `#0F0F0F` | 6.3:1 | AA |
| `#9B8EE8` (accent) | `#0F0F0F` | 6.1:1 | AA |
| `#FFFFFF` (primary) | `#1A1A1A` | 16.2:1 | AAA |

### Forbidden pairings

Never combine these — they fail contrast:
- `gray-500` (#8A8A8A) on `black` (#0F0F0F) — 3.6:1, fails AA
- `gray-600` (#6B6B6B) on `black` (#0F0F0F) — 2.6:1, fails AA
- `iris` (#6E5CCC) on `black` (#0F0F0F) — 4.1:1, borderline (use `iris-bright` instead)
- `gray-400` (#A1A1A1) on `white` (#FFFFFF) — 2.5:1, fails AA

---

## 5. Typography

### Font stack

| Role | Font | Fallbacks |
|------|------|-----------|
| Display & headings | Plus Jakarta Sans | -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif |
| Body text | Plus Jakarta Sans | Same as above |
| Code & data | Geist Mono | SF Mono, Fira Code, Fira Mono, monospace |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Geist+Mono:wght@300;400;500&display=swap
```

### Type scale

| Name | Size | Weight | Line height | Letter spacing | Usage |
|------|------|--------|-------------|----------------|-------|
| Display | 48px | 700 | 1.08 | -1.5px | Hero headlines |
| H1 | 36px | 700 | 1.08 | -1px | Page titles |
| H2 | 28px | 600 | 1.3 | -0.5px | Section headings |
| H3 | 22px | 600 | 1.3 | -0.3px | Subsection headings |
| H4 | 18px | 600 | 1.3 | -0.2px | Card titles |
| Body | 15px | 400 | 1.55 | -0.2px | Default paragraph text |
| Body small | 13px | 400 | 1.55 | 0 | Secondary descriptions |
| Caption | 12px | 400 | 1.3 | 0 | Labels, metadata |
| Label | 11px | 500 | 1 | 1.5px | Uppercase section labels |
| Mono | 13px | 400 | 1.8 | 0 | Code, terminal output, data |

### Headline gradient

Hero headlines use a vertical text gradient for dramatic effect:
- **Day:** `linear-gradient(180deg, #0F0F0F 30%, #8A8A8A 100%)`
- **Night:** `linear-gradient(180deg, #FFFFFF 30%, #C4C4C4 100%)`

Apply with:
```css
background: var(--headline-gradient);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 6. Component patterns

### Buttons

**Primary:**
- Day: `bg: #0F0F0F`, `text: #FFFFFF`, `radius: 8px`, `padding: 10px 24px`
- Night: `bg: #FFFFFF`, `text: #0F0F0F`

**Ghost/Secondary:**
- Day: `bg: transparent`, `text: #6B6B6B`, `border: 0.5px solid #E2E2E2`
- Night: `bg: transparent`, `text: #E2E2E2`, `border: 0.5px solid rgba(255,255,255,0.15)`

### Pills / Badges

- Day: `bg: #F3F1FC`, `text: #6E5CCC`, `border: 0.5px solid rgba(110,92,204,0.15)`, `radius: 100px`
- Night: `bg: rgba(110,92,204,0.12)`, `text: #9B8EE8`, `border: 0.5px solid rgba(155,142,232,0.25)`

### Cards

- Day: `bg: #FFFFFF`, `border: 0.5px solid #E2E2E2`, `radius: 12px`, `padding: 1.5rem`
- Night: `bg: #1A1A1A`, `border: 0.5px solid rgba(255,255,255,0.08)`

### Terminal / Code blocks

- Day: `bg: #F7F7F7`, `border: 0.5px solid #E2E2E2`, `radius: 10px`
- Night: `bg: #1A1A1A`, `border: 0.5px solid rgba(255,255,255,0.08)`
- Font: Geist Mono, 13px
- Command text: primary text color
- Muted text: secondary text color
- Highlighted values: accent color (iris/iris-bright)
- Success indicators: green (day/night variant)

### Hero sections

- Subtle grid pattern in background (2% opacity lines, 56px spacing)
- Faint iris radial glow at top center (6% day, 10% night)
- Grid fades via radial mask
- Content centered, max-width 500px

### Navigation

- Logo left, nav links center, CTA button right
- Nav link style: body-small weight 400, secondary text color
- CTA: primary button at small size (13px, padding 6px 16px)

---

## 7. Spacing & layout

### Border radius

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 6px | Small buttons, inputs |
| `md` | 8px | Standard buttons, cards |
| `lg` | 12px | Large cards, modals |
| `xl` | 16px | Hero sections, feature blocks |
| `pill` | 100px | Pills, badges, tags |

### Border widths

- Default border: `0.5px solid` (thinner than standard 1px for refined feel)
- Logo ring: `1.5px`
- Focus rings: `0 0 0 3px var(--tw-focus-ring)`

### General spacing

- Use 8px grid increments: 8, 12, 16, 24, 32, 48, 64
- Card padding: 24px (1.5rem)
- Section gaps: 10-12px between cards
- Hero padding: 40px horizontal, 56px vertical
- Max content width: 500px for centered hero text

---

## 8. Implementation files

```
totally-wild-brand/
├── logos/
│   └── svg/
│       ├── logo-day-primary.svg
│       ├── logo-night-primary.svg
│       ├── logo-branded.svg
│       ├── logo-muted.svg
│       ├── mark-day.svg
│       ├── mark-night.svg
│       └── favicon.svg
├── tokens/
│   ├── tokens.css          ← CSS custom properties, import directly
│   └── tokens.json         ← Structured tokens for build tools
├── docs/
│   └── BRAND_GUIDE.md      ← This file
└── README.md
```

### CSS usage

```html
<link rel="stylesheet" href="tokens/tokens.css" />
```

```css
.card {
  background: var(--tw-bg-primary);
  border: 0.5px solid var(--tw-border-primary);
  border-radius: var(--tw-radius-lg);
  color: var(--tw-text-primary);
}

.card-description {
  color: var(--tw-text-secondary);
  font-size: var(--tw-text-sm);
}

.btn-primary {
  background: var(--tw-btn-primary-bg);
  color: var(--tw-btn-primary-text);
  border-radius: var(--tw-radius-md);
}
```

### Theme switching

```html
<!-- Day mode (default) -->
<html data-theme="day">

<!-- Night mode -->
<html data-theme="night">

<!-- System preference (omit data-theme) -->
<html>
```

---

## 9. Quick reference for coding agents

When generating UI for Totally Wild AI:

1. **Import** `tokens.css` and use CSS variables — never hardcode hex values.
2. **Font:** Always import Plus Jakarta Sans (300-700) and Geist Mono (300-500) from Google Fonts.
3. **Day is default.** Night mode activates via `data-theme="night"` or system preference.
4. **One accent color:** Iris only. Use `iris-bright` (#9B8EE8) on dark backgrounds, `iris` (#6E5CCC) on light.
5. **Borders are 0.5px** — not 1px. This is intentional.
6. **Contrast:** On dark backgrounds, secondary text is `#C4C4C4` (not gray-500 or gray-600). Accent text is `#9B8EE8` (not base iris).
7. **No decorative elements.** No gradients on surfaces, no shadows, no glow effects (except the subtle hero grid/glow pattern).
8. **Terminal blocks** are the signature UI element — use them as product demos and social proof.
9. **Headline gradient** only on hero displays — not on regular headings.
10. **The wordmark reads "Totally Wild"** — never include "AI" in the logo lockup.
