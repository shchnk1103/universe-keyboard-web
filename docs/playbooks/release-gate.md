# Release Gate Playbook

## Authority and Source of Truth

Every public deployment or GitHub Release requires a dedicated `docs/assignments/RELEASE-<id>.md`. That Assignment is the sole Source of Truth for its scope, target commit SHA, evidence ledger, residuals and human Go/No-Go decisions. `ACTIVE_WORK.md`, GitHub PRs, Issues, Actions and Releases may link evidence but never replace it.

Only `@shchnk1103` may record final Product, Architecture, Quality or Release acceptance. Codex agents may execute checks, draft records or independently reverify evidence; they must not create an Accepted ADR or a Go/No-Go conclusion.

## Evidence ledger

Each run uses `TASK-ID/<short-SHA>/<UTC>` as its fingerprint and records one file under `docs/evidence/<TASK-ID>/`. Include the target SHA, environment, exact command or human method, raw exit status, immutable GitHub Actions/PR/tag/Release URLs, evidence grade and every residual.

- `Executor-recorded`: proves that the executor ran the recorded method.
- `Quality-reverified`: a non-executing Quality Agent independently checked or reran the claim at the same SHA.
- `Device-attested`: the Assignment-required human/physical-environment operation was attested.

Residuals must be `fix`, `accept` or `tech_debt:<ID>`; an unclassified residual blocks closure.

## Minimum website release matrix

| Gate | Required evidence | Stop condition |
|---|---|---|
| G0 — baseline | Locked dependencies, `npm ci`, `npm run lint` | Command fails or lockfile changes unexpectedly |
| G1 — static build | `npm run build`, artifact/route inventory | Build fails or target SHA differs |
| G2 — smoke | Root redirect, zh/en pages, 404, navigation, locale/theme/mobile behavior | Any expected route or interaction fails |
| G3 — content claims | Privacy/changelog source, CTA and metadata-domain review | Fallback/placeholder/example values are presented as production facts |
| G4 — hosted static site | Candidate URL deep-link refresh, static assets and external links | No real candidate URL or route failure |
| G5 — release | Independent Quality-reverified result, no blocking residual, explicit human approvals | Any required human decision or evidence is absent |

A public repository is not a deployment, release, Product acceptance or Quality acceptance.
