# Totally Wild AI — Brand Kit

> Automated Coding Factory

## What's in here

```
logos/svg/          7 SVG logo files (day, night, branded, muted, marks, favicon)
tokens/tokens.css   CSS custom properties — import directly into any project
tokens/tokens.json  Structured tokens for build tools, Figma plugins, or CI
docs/BRAND_GUIDE.md Full brand & style guide with rules, pairings, and code examples
```

## Quick start

```html
<link rel="stylesheet" href="tokens/tokens.css" />
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Geist+Mono:wght@300;400;500&display=swap" rel="stylesheet">
```

Then use variables like `var(--tw-text-primary)`, `var(--tw-bg-secondary)`, etc.

Night mode: add `data-theme="night"` to `<html>`, or let the system preference handle it.

## Coding agent instructions

Read `docs/BRAND_GUIDE.md` before generating any UI. Key rules:

- Use CSS variables from `tokens.css` — never hardcode colors
- Only one accent color: Iris (`#6E5CCC` day / `#9B8EE8` night)
- Borders are `0.5px` — intentionally thinner than default
- Night mode secondary text is `#C4C4C4`, not darker grays
- Wordmark reads "Totally Wild" — no "AI" in the lockup
