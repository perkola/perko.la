# perko.la

Personal CV site for William Perkola — [perko.la](https://perko.la/).

Built with **Vite + React + TypeScript** and hand-written CSS. Serif type is
[Fraunces](https://fonts.google.com/specimen/Fraunces), self-hosted via
`@fontsource-variable/fraunces`. Light/dark follows the OS setting
(`prefers-color-scheme`) — there is no theme toggle.

## Develop

```bash
npm install
npm run dev          # http://localhost:5173/
npm run build        # type-check + production build to dist/
npm run preview      # serve the production build locally
```

## Editing content

All CV data lives in [`src/content/cv.ts`](src/content/cv.ts) — profile, contact
links, experience (grouped by company, one or more roles each), and education.
No component changes are needed to update text.

### Profile photo

Drop a square-ish image at `src/assets/profile.jpg`, then in `src/content/cv.ts`
uncomment the `profilePhoto` import and set `photo: profilePhoto`. Until then the
header shows an initials monogram.

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
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. The custom domain is set via
`public/CNAME` plus the repo's Pages settings. Pages *Source* must be set to
**GitHub Actions** (Settings → Pages).
