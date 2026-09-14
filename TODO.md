# TODO

Follow-up work identified but not yet done. Numbers match the ideas
discussed in-session; not sequential on purpose — this isn't the full list,
just what's queued. See [`CLAUDE.md`](CLAUDE.md) for how the project fits
together.

## ~~1. Run checks on PRs~~ — done

Added `.github/workflows/ci.yml`: `npm ci && npm run lint && npm run build`
on `pull_request`. Consider branch protection on `main` requiring it to pass.

## ~~2. Enable TypeScript `strict` mode~~ — done

Turned on in both `tsconfig.app.json`/`tsconfig.node.json`. Zero errors —
the codebase was already clean enough (`strictNullChecks`, `noImplicitAny`,
etc. included, no code changes needed).

## 8. Accessibility check in CI

No a11y tooling exists at all. Add an `axe-core`-via-Playwright pass,
ideally as a step in the PR CI workflow from #1 once it exists.

## ~~9. Evaluate oxfmt~~ — done

Added `oxfmt` (latest, alongside `oxlint` bumped to latest too) as
`npm run format` / `npm run format:check`, the latter wired into CI. Vanilla
defaults, no `.oxfmtrc.json`. Applied once to the whole repo — mostly
mechanical (line-wrap widths, quote style), one quirk worth knowing:
oxfmt de-indents multi-line Markdown list-item continuation lines (still
renders fine — CommonMark's lazy-continuation rule — just looks a little
inconsistent in raw source).
