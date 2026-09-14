# perko.la

Personal CV site for William Perkola — [perko.la](https://perko.la/).

Built with **Vite + React + TypeScript** and hand-written CSS. Serif type is
[Fraunces](https://fonts.google.com/specimen/Fraunces), self-hosted via
`@fontsource-variable/fraunces`. Light/dark follows the OS setting
(`prefers-color-scheme`) — there is no theme toggle. A downloadable PDF CV is
built separately from [Typst](https://typst.app/) source in `resume/`.

## Develop

```bash
npm install
npm run dev          # http://localhost:5173/
npm run build        # type-check + production build to dist/
npm run preview      # serve the production build locally
npm run lint         # oxlint
npm run format       # oxfmt, writes in place
```

## Editing content

All CV data lives in [`src/content/cv.ts`](src/content/cv.ts) — profile, contact
links, experience (grouped by company, one or more roles each), and education.
No component changes are needed to update text.

The PDF CV (`resume/cv.typ`) is a second, independent copy of this content —
update both when the CV changes. See [`CLAUDE.md`](CLAUDE.md) for how the two
relate.

### Profile photo

The photo is [`public/William.jpeg`](public/William.jpeg), referenced in
`cv.ts` as `photo: "/William.jpeg"`. Set `photo: undefined` there to fall back
to an initials monogram instead.

## Building the PDF CV

Requires the [Typst](https://typst.app/) CLI (`brew install typst`):

```bash
npm run resume    # compiles resume/cv.typ -> public/William-Perkola-CV.pdf
```

Not built in CI — regenerate and commit the PDF by hand whenever
`resume/cv.typ` changes.

## Structure

```
src/
  content/cv.ts          # all CV data (edit here)
  types.ts               # data model
  App.tsx                # page composition
  components/            # Header, ExperienceSection, CompanyGroup,
                         # EducationSection, Footer, icons
  styles/
    reset.css            # minimal reset
    tokens.css           # design tokens: palette (light + dark), type scale
    app.css              # layout + component styles + print
resume/                  # PDF CV: cv.typ (content) + style.typ (styling)
public/                  # William.jpeg, favicon.svg, CNAME, the built PDF
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. The custom domain is set via
`public/CNAME` plus the repo's Pages settings. Pages _Source_ must be set to
**GitHub Actions** (Settings → Pages).
