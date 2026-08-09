# Evidence: WEB-PUBLISH-001 — Pre-push lint

| Field | Value |
|---|---|
| Run fingerprint | `WEB-PUBLISH-001/uncommitted/2026-08-09T21:31:35+08:00` |
| Evidence grade | Executor-recorded |
| Environment | Local macOS workspace; npm script from `package.json` |
| Command | `npm run lint` |
| Exit status | `1` |
| Result | Failed: one ESLint error and one warning. |
| Gate conclusion | No Quality / Release Gate conclusion. The public-repository initialization task makes no lint-success claim. |

## Findings

1. `src/app/not-found.tsx:19` — `@next/next/no-html-link-for-pages`: internal navigation to `/zh/` must use `next/link`.
2. `src/components/ui/Button.tsx:72` — `@typescript-eslint/no-unused-vars`: `_h` is assigned but unused.

## Residuals

- `WEB-QUALITY-001` — disposition: `fix` in a separate Implementation Assignment, followed by independent Quality Agent revalidation.
