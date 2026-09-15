# app — the website

React 19 + TypeScript + Vite. Built on the design system in `../desig-system/`.

Start it from the repository root with `docker compose up web-dev`
(see [`../README.md`](../README.md)).

## How to change the look

The whole design lives in CSS variables, in two layers:

| File | What it holds | Edit it? |
|---|---|---|
| `src/styles/tokens.css` | Raw brand values (`--pink-500`, `--navy-900`, `--space-3`…) | Only if the brand palette itself changes |
| `src/styles/theme.css` | Semantic variables (`--primary-color`, `--title-size`, `--subtitle-font`…) | **Yes — this is the file you edit** |

Examples:

```css
/* Change the primary color across the whole site */
--primary-color: var(--green-500);

/* Change the background */
--background-color: var(--ink-900);

/* Change the heading typeface */
--title-font: var(--font-family-body);
--title-size: clamp(3rem, 10vw, 140px);
```

No component hardcodes a color or a size: they all read variables.

## Structure

```
Dockerfile         production build (node → nginx)
Dockerfile.dev     development server
nginx.conf
index.html         HTML first, <script> at the end of the body
src/
  main.tsx         entry point
  App.tsx          section composition
  styles/
    global.css     fonts → tokens → theme → reset
    tokens.css     layer 1: brand values
    theme.css      layer 2: semantic variables  ← edit here
    reset.css
  components/
    layout/        Page, Section, Container
    sections/      Hero, Projects, Experience, Community, Contact, Footer
    ui/            Button, DisplayHeading, BleedBlock, ProjectShot, TextColumns
  content/         typed ES / EN copy
  context/ hooks/  language (EN/ES)
  lib/             asset() — builds public/ URLs honouring the Vite base
  types/           content types
public/assets/     SVGs and bitmap copied from the design system
```

Imports use the `@/` alias → `src/` (configured in `vite.config.ts` and `tsconfig.app.json`):

```ts
import { Button } from '@/components/ui/Button';
```

## Assets

Files in `public/assets/` are referenced through `asset()` from `@/lib/asset`, never as a
hand-written absolute path. Vite rewrites the base in HTML and in imports, but not in path
strings living inside JS — and GitHub Pages serves the site from `/portafolio/`, so a raw
`/assets/photo.png` would 404 there.

```tsx
<img src={asset('assets/green-scribble.svg')} alt="" />
```

These files are a copy of `../desig-system/assets/`. If the design system changes them,
copy them over again.

## Content

The original `.fig` carries Lorem Ipsum in every project and experience paragraph, and the
same bitmap in all four image slots. That is reproduced as-is in `src/content/es.ts`;
replace those texts and images once the real content exists.

## Scripts

```bash
npm run dev        # development server
npm run build      # typecheck + production build
npm run typecheck  # TypeScript only
```
