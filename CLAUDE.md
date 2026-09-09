# CLAUDE.md

Guidance for working in this repository.

## Project

Personal CV site for William Perkola, served at https://perko.la/. Single static
page: header, experience, education, footer.

**Stack:** Vite + React + TypeScript, hand-written CSS (no CSS framework).
Serif type is Fraunces, self-hosted via `@fontsource-variable/fraunces`
(`full.css` for roman — opsz/wght/SOFT/WONK axes; `opsz-italic.css` for italic).
Light/dark is driven purely by `prefers-color-scheme` — **no toggle, no
persistence, no theme JS**.

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
  copy never requires touching components.
- **Components:** `src/components/` — `Header`, `ExperienceSection`,
  `CompanyGroup` (renders one company + its roles), `EducationSection`,
  `Footer`, `icons.tsx` (inline SVGs).
- **Styles:** `src/styles/` — `tokens.css` holds all design tokens (palette for
  light + a single `@media (prefers-color-scheme: dark)` override, fluid type
  scale, spacing). `app.css` is layout + components + `@media print`.
  `reset.css` is a small reset.

## Conventions

- **Colors:** never hard-code. Use the CSS custom properties from `tokens.css`
  (`--bg`, `--surface`, `--text`, `--text-muted`, `--accent`, `--chip-bg`,
  `--border`, `--rule`, `--timeline`, `--dot`, ...). Define any new color in
  both the `:root` (light) block and the dark `@media` block.
- **Multi-role companies:** a `CompanyGroup` with `positions.length > 1` gets the
  `.roles--timeline` modifier, which draws the vertical line (`::before` on the
  container) and per-role dots (`::before` on `.role`). Single-role companies
  render with no timeline chrome.
- **Type:** headings use `font-variation-settings` to push Fraunces' `opsz` /
  `SOFT` / `WONK`; body copy leaves `font-optical-sizing: auto` to track size.
- **BEM-ish class names** (`.block__element`, `.block--modifier`).

## Deployment

`.github/workflows/deploy.yml` builds on push to `main` and deploys to GitHub
Pages via `actions/deploy-pages`. `base: '/'` in `vite.config.ts` (apex custom
domain). `public/CNAME` = `perko.la`. Repo Pages *Source* must be "GitHub
Actions".
