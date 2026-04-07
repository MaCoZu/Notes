# Notes

A personal notes website featuring mathematical notation, data visualization, and thoughtful typography. Built with Astro.

## Features

- **LaTeX Math Rendering** — Write mathematical expressions with KaTeX
- **Dark/Light Theme** — Automatic detection with manual toggle
- **Responsive Design** — Optimized for mobile and desktop
- **Data Visualizations** — Inline SVGs with theme-aware colors

## Tech Stack

- [Astro](https://astro.build) — Static site generator
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- [Tailwind Typography](https://tailwindcss-typography.vercel.app) — Prose styling
- [KaTeX](https://katex.org) — Math rendering

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Site runs at `http://localhost:4321`

### Build

```bash
pnpm build
```

Output in `dist/` directory.

### Preview

```bash
pnpm preview
```

## Project Structure

```
src/
├── content/notes/     # MDX note files
├── components/        # Reusable components
├── layouts/           # Page layouts (Layout.astro)
├── pages/             # Astro pages
└── styles/            # CSS files (global.css)
```

## Writing Notes

Create `.mdx` files in `src/content/notes/`:

```mdx
---
title: My Note
description: A brief description
date: 2026-01-01
---

Regular content with **bold** and *italic* text.

Inline math: $\sqrt{2}$

Block math:

$$
\int_0^1 x^2 dx = \frac{1}{3}
$$
```

## Theme

Colors defined in `src/styles/global.css` using CSS custom properties:

- Light: `#EDEAF6` background, `#4F2B3B` text
- Dark: `#0F121E` background, `#EDEAF6` text

SVG colors use `--svg-link` for theme-aware styling.

## License

ISC
