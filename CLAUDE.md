# CLAUDE.md

Guidance for working in this repository.

## Project

Personal CV site for William Perkola, live at https://perko.la/. One static page:
header, experience, education, footer.

**Stack:** Vite + React + TypeScript, hand-written CSS (no CSS framework).
Serif type is Fraunces, self-hosted via `@fontsource-variable/fraunces`
(`full.css` for roman — opsz/wght/SOFT/WONK axes; `opsz-italic.css` for the
italic). Light/dark is driven purely by `prefers-color-scheme` — **no toggle,
no persistence, no theme JS**.

## Commands

```bash
npm run dev        # dev server on :5173
npm run build      # tsc -b && vite build  ->  dist/
npm run preview    # preview the production build
npm run lint       # oxlint
```

## Where things live

- **Content:** `src/content/cv.ts` — the single source of CV data, typed by
  `src/types.ts` (`Profile`, `CompanyGroup`, `Position`, `Education`). Editing
  copy never requires touching components. The profile photo is
  `public/William.jpeg`, referenced as `photo: "/William.jpeg"`; set `photo`
  to `undefined` to fall back to the initials monogram.
- **Components:** `src/components/` — `Header`, `ExperienceSection`,
  `CompanyGroup` (one company + its roles), `EducationSection`, `Footer`,
  `icons.tsx` (inline contact SVGs).
- **Styles:** `src/styles/`, imported in that order from `main.tsx` —
  `reset.css` (small reset), `tokens.css` (all design tokens: light palette on
  `:root` + one `@media (prefers-color-scheme: dark)` override, fluid type
  scale, spacing), `app.css` (layout + components + `@media print`).
- **Static:** `public/` — `William.jpeg`, `favicon.svg` (dark-green monogram),
  `CNAME` (`perko.la`).

## Conventions

- **Colors:** never hard-code. Use the custom properties from `tokens.css`
  (`--bg`, `--surface`, `--text`, `--text-muted`, `--accent`, `--chip-bg`,
  `--border`, `--rule`, `--timeline`, `--dot`, ...). Define any new one in both
  the `:root` block and the dark `@media` block.
- **Multi-role companies:** a `CompanyGroup` with `positions.length > 1` gets
  the `.roles--timeline` modifier — vertical line (`::before` on the container)
  plus per-role dots (`::before` on `.role`). Single-role companies share the
  same left indent (`.roles` padding) but render without the line or dots.
- **Type:** headings set `font-variation-settings` to push Fraunces' `opsz` /
  `SOFT` / `WONK`; body copy leaves `font-optical-sizing: auto` to track size.
- **BEM-ish class names** (`.block__element`, `.block--modifier`).

## Print (`@media print` in `app.css`)

Triggered by the browser's own Print / ⌘P — there is no in-page button.
The block re-declares the design tokens for flat ink-on-paper (white surface,
near-black text, grey rules, no shadows/backgrounds), hides `.chips` and
`.footer`, strips the timeline chrome, and tightens type/spacing so the whole
CV lands on **one A4 page**. It also resets `html, body { min-height: 0 }` —
without that, Firefox resolves the reset's `min-height: 100vh` against the full
page box and emits a trailing blank page.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: `npm ci` → `npm run
build` → `actions/upload-pages-artifact` → `actions/deploy-pages`. Live in a
few minutes; watch with `gh run watch --repo perkola/perko.la`.

- Pages **Source** is already set to "GitHub Actions" on this repo.
- `base: '/'` in `vite.config.ts` (served from the apex custom domain).
- Custom domain `perko.la` is attached to this repo's Pages settings, backed by
  the committed `public/CNAME`. The domain was moved here from the now
  domain-less `perkola/perkola.github.io` (the previous Lit/Tailwind site,
  still served at `perkola.github.io`).
- DNS is unchanged — the apex A/AAAA records point at GitHub Pages; routing is
  by the per-repo custom-domain setting.
- The workflow logs a harmless "Node 20 deprecated" warning; bump
  `setup-node`'s `node-version` to `22` to silence it.
