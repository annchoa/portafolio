# Andrea Naranjo — Portfolio Design System

A personal-brand design system extracted from **`portafolio.fig`** (attached to this project as a mounted Figma file; page `Page-1`, frame `portafolio`, node `1:91`). It is the visual language of a one-page portfolio site for **andrea natalia naranjo chávez**, a product engineer based in Valencia, Spain, originally from Ecuador.

The file is small and single-purpose: one 1440 × 6453 page frame, one component set family (a navigation pill and a list of them), and one Figma variable collection. Everything in this project comes from that file. Nothing has been invented.

## Sources
- `portafolio.fig` — mounted Figma file, read via the virtual filesystem. No public Figma URL was supplied, so there is no link to record. Nodes referenced: `1:91` (page frame), `2010:184` / `2010:196` (component sets), `2010:151`, `2055:75`, `2058:124`, `2015:260`, `2054:61` (text / image / vector layers).
- No codebase, repository, deck or brand-guidelines document was provided.

## Product context
There is exactly one product: **the portfolio website** — a single scrolling page, Spanish-first, with an EN/ES language switch. Its sections, in order: hero (name, role, language pills, bio) → PROJECTS (two project blocks: `passporter`, `wiski`) → EXPERIENCE → COMMUNITY & RECOGNITION → contact me → a Chimborazo footer with the mountain's elevation.

Named work in the file: **Passporter**, **wiski**, plus prior employers mentioned in the bio — **ClimateTrade**, **QueryLayer**, **Passporter**. Community credits: Drupal Camp Spain (2023, 2024), Technovation Challenge Valencia, Women in Data Science at Stanford.

## No logo
The source file contains **no logo or brand mark**. Wherever a mark would go, the name is set in plain type — Assistant Regular 40px, lowercase, two lines, centred (`guidelines/wordmark.card.html`). Do not draw one.

---

## CONTENT FUNDAMENTALS

**Language.** Spanish is the primary voice; English is a secondary toggle. The bio is first person and plainly autobiographical, with no marketing register: *"Nací entre volcanes, a 2,754 m sobre el nivel del mar. Estudié periodismo y hace 8 años cambié de profesión y país."* It states facts and dates, names employers, and lets the geography do the emotional work.

**Casing is a system, not decoration.**
- Section headings are set in **ALL CAPS** at display scale: `PROJECTS`, `EXPERIENCE`, `COMMUNITY & RECOGNITION`. Bebas Neue is a caps-only face, so caps are structural.
- The **name is lowercase**: `andrea natalia naranjo chávez`. So are project labels — `passporter`, `wiski` — and the footer place name, `chimborazo`.
- The **role is caps with tracking**: `PRODUCT ENGINEER` at `letter-spacing: 0.04em`.
- Small headings and links are lowercase: `contact me`, `linkedin.com/in/annchoa`.

That lowercase-personal / uppercase-structural split is the copy system. Keep it.

**I, not we.** There is no company voice, no "we help teams…". Everything is first-person singular, and credentials appear as a flat list of roles and years rather than claims: *"Speaker — Test-Driven Development, Drupal Camp Spain (2023)"*. Em-dash-separated role, venue, year in parentheses — repeat that shape.

**No emoji.** None appear anywhere in the file. Do not add them.

**Links are shown raw.** URLs are printed verbatim, unshortened and inconsistently so — `linkedin.com/in/annchoa` next to `https://github.com/annchoa`. That is what the file says; it reads as a plain-text contact block, not a row of social buttons.

**Numbers are specific.** `2,754 m`, `6,263.47 m`, `8 años`, `6 años`. Altitude is the running motif — the bio opens with one and the page closes with another. When copy needs a flourish, it reaches for a measurement, never an adjective.

**Placeholder honesty.** Project and experience bodies in the source are still Lorem Ipsum. The UI kit reproduces them as-is rather than writing copy the author has not written.

---

## VISUAL FOUNDATIONS

**Ground.** One colour carries the entire page: deep navy `#0C0C65` (`--navy-900`), full-bleed, edge to edge, 6453px tall. There is no second background colour and no gradient anywhere in the file.

**Neon on navy.** Against that navy sit saturated, unmixed accents used at full strength: green `#00D51C`, orange `#FF4A03`, pink `#FF0073`, crimson-pink `#EE1B7A`, magenta `#EA00FF` / `#FE28FE`. They are never tinted, never faded, never blended. Each display heading takes one: PROJECTS is crimson-pink, EXPERIENCE magenta, COMMUNITY & RECOGNITION orange. The footer stat is green. The vibe is print-poster / risograph, not SaaS.

**Type.** Two families do everything.
- **Bebas Neue** Regular — condensed caps, `line-height: 100%`, at 200px, 180px, 64px, 60px and 32px. Used for section headings, the `contact me` heading, project labels and the elevation number. Always tight-leaded; the 200px headings are wider than their frames and are deliberately cropped by the canvas edge.
- **Assistant** — 40px Regular for name and role, 40px ExtraBold for the `chimborazo` stat label, 32px Bold for subheads, 24px Regular for all body copy. Body copy is centred in a 731px measure in the hero and left-aligned in 589px columns elsewhere.
- **Inter** 16px / 14px appears only inside the Navigation Pill component (it comes from the Figma variable collection, not the page).

**Bleed blocks.** The signature move: rounded slabs of a single accent colour, `border-radius: 28px`, positioned so that half the shape sits *outside* the 1440px canvas and gets clipped. A 148 × 633 crimson-pink slab at `x: -32`; an 87 × 379 magenta slab at `x: 1396`; a 305 × 179 orange slab at `x: -80`. They are pure decoration — no content sits on them — and they anchor each section to a side.

**Cards.** White (`#FFFFFF`), `border-radius: 28px`, `589 × 379`, no border, **no shadow**. There is not a single shadow in the file. A project image sits centred on the card at its natural 389 × 298 — or, in alternating slots, sits bare on the navy with no card at all. That alternation is the rhythm of the projects section.

**Radii.** Only three values exist: **28px** (blocks and cards), **8px** (navigation pill), **5px** (the chip backing behind the active pill). Images are not rounded.

**Illustration.** Two hand-drawn vector shapes, both full-width:
- A ragged green band (`assets/green-scribble.svg`, 1483 × 392) across the top, behind the name — a stylised volcanic ridge, filled flat green with a 1px white edge.
- A white single-line contour of **Chimborazo** (`assets/wave-band.svg`, 1427 × 322) at the foot of the page, drawn at 2.5px, no fill. It is the page's closing signature.

Both are flat-filled or single-weight-stroked. No hatching, no texture, no grain, no pattern fills.

**Imagery.** One 389 × 298 bitmap, repeated four times in the project slots (`assets/portrait-tile.png`). It is a placeholder screenshot tile in the source. Colour vibe cannot be inferred from one placeholder — treat project imagery as neutral, full-colour, unfiltered, square-cornered.

**Borders, transparency, blur.** A 1px off-white hairline (`--off-white`) is the only border in the file, used on the small tick vector. No translucency, no `backdrop-filter`, no protection gradients or scrims — accent colour is strong enough to carry type directly.

**Layout rules.** Fixed 1440px canvas, `overflow: hidden` (the crop is the point). Left gutter 148px; content columns 589px wide with a 29px gutter; section breathing space in the 74–148px range; 28px between stacked elements. Display headings ignore the gutter and start at `x: 0` or overhang the right edge. Nothing is sticky or fixed on scroll. Spacing steps in use: **8 / 18 / 28 / 74 / 148**.

**Interaction.** The file defines states only for the Navigation Pill: `default` (transparent, dark ink) → `hover` (neutral grey fill `--gray-700`/`--gray-100`) → `active` (brand-tertiary fill). So the brand's hover convention is **a fill appearing**, not opacity or a colour shift. No press state, no transform, no easing curves and no animation are specified anywhere in the file. Keep motion minimal — a short linear colour transition (~120ms) is the most the system implies.

---

## ICONOGRAPHY

The file defines **no icon set** — no icon font, no SVG sprite, no PNG glyphs, no third-party library reference, and no emoji or Unicode characters used as icons. The only vector artwork is illustrative, not iconographic: the green ridge band, the Chimborazo contour, and one 1.4 × 25.5px tick mark (`assets/tick-mark.svg`) used as a hairline detail.

Consequences for anyone designing with this system: **do not introduce an icon library.** Navigation is textual (the pills are labels — `EN`, `ES`, `Link`), links are printed as raw URLs, and the recognition list uses a plain bullet. If an icon becomes genuinely unavoidable, ask the author for artwork rather than importing Lucide/Heroicons — nothing in the source supports a stroke weight or fill style to match against.

---

## Index

**Root**
- `styles.css` — the entry point consumers link; `@import` lines only.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skill wrapper.

**`tokens/`**
- `fonts.css` — Bebas Neue, Assistant, Inter via Google Fonts (see caveat below).
- `colors.css` — base palette + semantic aliases.
- `typography.css` — families, the full size scale, weights, tracking.
- `layout.css` — page grid, radii, spacing steps, stroke widths.

**`components/navigation/`** — the complete component inventory the file defines (2 of 2 families):
- **NavigationPill** — one link pill; `state: default | active | hover`.
- **NavigationPillList** — a row or column of pills; `direction: row | column`, per-slot booleans.
- `fig-tokens.css` — the Figma variable collection (30 variables, all modes including dark).
- `fig-typography.css` — generated; the source file defines no named text styles, so it is empty.
- `navigation.card.html` — Design System tab card.

**`ui_kits/portfolio/`** — recreation of the one page the file contains. See its `README.md`.

**`templates/portfolio-page/`** — `PortfolioPage.dc.html`, the whole page as a copyable starting template (loads the system via `ds-base.js`).

**`guidelines/`** — 16 specimen cards: Colors (ground, neon, neutrals, semantic aliases), Type (display, body, UI, full scale), Spacing (radii, steps, grid in use), Brand (bleed blocks, illustration, imagery, wordmark, stat pairing).

**`assets/`** — `green-scribble.svg`, `wave-band.svg`, `tick-mark.svg`, `portrait-tile.png`. All copied verbatim from the .fig.

## Intentional additions
None. No component, token, colour or asset has been added beyond what `portafolio.fig` defines. The `ui_kits/portfolio` JSX files (`Hero`, `ProjectRow`, `Community`, `Contact`, `Footer`, `DisplayHeading`) are page-assembly helpers for the recreation, not design-system components — they carry no `.d.ts` and are not part of the public API.

## Caveats
- **Font binaries.** The .fig ships no font files. Bebas Neue, Assistant and Inter are all on Google Fonts and are loaded from there — these are the real families, not substitutes, but if you hold licensed files, replace the `@import` in `tokens/fonts.css` with local `@font-face` rules.
- **The Figma variable collection is a stock set.** The 30 variables (`Slate/900`, `Brand/600`, `Gray/100`, Inter, an 8px radius) are greyscale SDS defaults and drive only the Navigation Pill — they do not describe the portfolio's own neon palette. Both systems are shipped: `tokens/colors.css` for the page, `components/navigation/fig-tokens.css` for the component. Where they disagree, the page wins.
- **Placeholder content.** Every project and experience paragraph in the source is Lorem Ipsum, and all four image slots use the same bitmap.
- **Text styles.** The file defines no named TEXT or EFFECT styles, so `fig-typography.css` is empty; the type scale in `tokens/typography.css` was read off the layers instead.
