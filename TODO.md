# TODO

Follow-up work identified but not yet done. Numbers match the ideas
discussed in-session; not sequential on purpose — this isn't the full list,
just what's queued. See [`CLAUDE.md`](CLAUDE.md) for how the project fits
together.

## 1. Run checks on PRs

`deploy.yml` only triggers on push to `main` — there's no workflow that runs
on `pull_request`. This meant merging the recent Dependabot PRs required
manually running `npm ci`/`lint`/`build` locally for each one, since GitHub
had nothing to show as a check.

Add a small `ci.yml`: `npm ci && npm run lint && npm run build` on
`pull_request`. Once it exists, consider branch protection on `main`
requiring it to pass.

## 2. Enable TypeScript `strict` mode

Neither `tsconfig.app.json` nor `tsconfig.node.json` sets `"strict": true` —
modern module settings (`verbatimModuleSyntax`, `erasableSyntaxOnly`,
`noUnusedLocals`) are in place, but not `strictNullChecks`/`noImplicitAny`.
Turn it on and see what surfaces; likely small given the codebase size.

## 8. Accessibility check in CI

No a11y tooling exists at all. Add an `axe-core`-via-Playwright pass,
ideally as a step in the PR CI workflow from #1 once it exists.

## 9. Evaluate oxfmt

[`oxfmt`](https://oxc.rs/docs/guide/usage/formatter.html) is the formatter
from the same Oxc project as `oxlint` (already in use) — Rust-based, ~30x
faster than Prettier, ~95%+ Prettier-compatible, covers JS/TS/CSS/JSON/
Markdown/YAML. Still **alpha** as of writing. Worth trying as `npm run
format` once it's matured a bit — or now, if it's already good enough for a
codebase this size.
