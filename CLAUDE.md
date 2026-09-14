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
npm run dev           # dev server on :5173
npm run build         # tsc -b && vite build  ->  dist/
npm run preview       # preview the production build
npm run lint          # oxlint
npm run format        # oxfmt, writes in place
npm run format:check  # oxfmt --check, used in CI
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
  `CNAME` (`perko.la`), and `William-Perkola-CV.pdf` (built by `npm run
resume`, see "PDF CV" below — not written by hand).

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
- **`.header__download`** (the PDF button) is `position: absolute`, not a
  flex sibling of `.header__portrait`/`.header__body` — as a flex item it
  stole width from `.header__body` and made the name wrap. The header's
  mobile breakpoint is 700px (not the usual 560px) so the fluid-sized name
  never grows wide enough to run under the absolutely-positioned button
  before the layout stacks.

## Print (`@media print` in `app.css`)

Triggered by the browser's own Print / ⌘P — there is no in-page button, and
there's no reliable way to intercept ⌘P and redirect it to the PDF instead
(no cross-browser way for a page to cancel or redirect the native print
action).

Printing hides `.card`/`.footer` and shows `.print-notice` instead (a `div`
in `App.tsx`, hidden on screen) — the name and title re-using
`.header__name`/`.header__title`'s own `font-variation-settings`, the PDF
link styled like `.header__download`'s pill button. This replaced an earlier
tuned one-page printout of the CV itself, dropped because it duplicated (and
was a strictly lesser copy of — it lacked About me / Personal Interests /
Other Experience) the dedicated PDF CV below, and needed re-tuning by hand
whenever content changed to keep fitting one page.

Still resets `html, body, .page { min-height: 0 }` — without that, Firefox
resolves the reset's `min-height: 100vh` against the full page box and emits
a trailing blank page, even with as little content as the notice.

## PDF CV (`resume/`)

A downloadable PDF CV, built from Typst source and linked from the site
footer. Used to live on typst.app as a `@preview/neat-cv` document; that
package is no longer a dependency anywhere in this repo.

- **`resume/cv.typ`** — the actual content (positions, entries, sidebar). This
  is the second, independent source of CV content, alongside
  `src/content/cv.ts` — there's no generator linking them. **Keep both in
  sync by hand** when the CV changes.
- **`resume/style.typ`** — colors, fonts, icon rendering, and the small
  layout helpers (`entry()`, `icon-rows()`, `item-pills()`, the sidebar
  grid). Purpose-built for this one document, not a reusable theme — no
  `author:` dict, no generic theme state. Its structure (sidebar + entry
  grid) is inspired by `neat-cv`'s layout, rewritten from scratch.
- **`resume/icons/*.svg`** — single-color icons baked to the accent green
  (`#2f5d3a`), redrawn from `src/components/icons.tsx` (email, location,
  linkedin, github) plus two more in the same style (phone, globe — adapted
  from Feather Icons, MIT). Kept in sync by hand, not generated (see the
  comment in `icons.tsx`) — deliberately, since they rarely change; if that
  changes, revisit generating them instead. If the accent color ever
  changes, regenerate these too — the color is baked in, not a runtime
  parameter.
- **`resume/fonts/`** — Fraunces variable TTFs (roman + italic), sourced from
  the [Fraunces GitHub repo](https://github.com/undercasetype/Fraunces)
  (OFL). Typst can't load the `.woff2` files `@fontsource-variable/fraunces`
  ships for the web, so these are a separate copy of the same typeface —
  necessarily, not just for convenience, since there's no format that works
  in both. **They can drift**: as of writing, the web is on Fontsource's
  build of Fraunces v38 (2025-09-10) and the PDF's `.ttf` is a slightly newer
  pull from Fraunces' `master` branch. Not worth fully unifying (it'd mean
  dropping Fontsource and reimplementing its per-script/per-axis subsetting
  by hand), but re-pull the `.ttf` from
  https://github.com/undercasetype/Fraunces/tree/master/fonts/variable
  whenever `@fontsource-variable/fraunces` gets bumped, to keep them close.

Colors, fonts, and icons intentionally mirror the site's own (`tokens.css`'s
`--accent`/`--text`/`--font-serif`, `icons.tsx`'s SVGs) so the PDF and the web
CV read as one thing. Typst's `text(variations: (SOFT: .., WONK: ..))`
reproduces the site's `font-variation-settings` heading treatment directly;
`opsz` is auto-driven from size the same way the site's
`font-optical-sizing: auto` is.

Build it with `npm run resume` (needs the `typst` CLI — `brew install
typst`), which compiles straight to `public/William-Perkola-CV.pdf`. This
isn't built in CI: regenerate and commit the PDF locally whenever
`resume/cv.typ` changes, the same way you'd update `cv.ts` for the web CV.

## CI (`.github/workflows/ci.yml`)

Runs on every PR against `main`: `npm ci` → `npm run lint` → `npm run
format:check` → `npm run build`.
Doesn't touch `resume/` — the PDF isn't built or checked here (see above).
Exists so Dependabot PRs (and any other PR) get a check before merging,
rather than relying on testing them locally by hand.

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
- Dependabot (`.github/dependabot.yml`) checks `npm` + `github-actions` monthly.
  `node-version: 20` in the workflow is the Node version used to run `npm ci`/
  `npm run build`, unrelated to which Node the actions themselves run on.
