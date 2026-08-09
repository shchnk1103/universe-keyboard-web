# Assignment: WEB-QUALITY-001 — Resolve Recorded Lint Findings

## Current Status

| Field | Value |
|---|---|
| Lifecycle | Active |
| Current Phase | Implement the two recorded lint corrections, then collect executor and independent-review evidence. |
| Material non-claims | This task does not claim a release, deployment, visual redesign, full end-to-end coverage, or human Quality / Release acceptance. |
| Next handoff / decision | Codex Quality Agent independently revalidates the target commit; `@shchnk1103` retains any final Gate decision. |
| Residuals | None at assignment start; `WEB-QUALITY-001` technical debt is the item under disposition. |

---

## Authority

- Assignment Authority: `@shchnk1103` (human Product Lead).
- Decision Source / Date: User authorization to autonomously complete `WEB-QUALITY-001`, 2026-08-09 Asia/Shanghai.
- Product Approver: `@shchnk1103` (human; no Product acceptance is requested by this task).

## Boundary

- Scope: Replace the 404 page's internal `/zh/` anchor navigation with the Next.js Link component; remove the Button component's unused destructuring path while preserving its current public props and rendered styling; update KOS status and evidence.
- Non-goals: Change routes, localization policy, button API, visual design, dependencies, build configuration, CI/CD, deployment, or any Product / Architecture / Quality / Release Gate.
- Required Inputs: The recorded lint evidence; applicable Next.js Link documentation; a clean `main` baseline; an independent Quality Agent for revalidation.

## Assignment

- Domain Owner: Codex Website Executor.
- Executor: Codex primary agent.
- Environment Executor: Local Node/npm workspace.
- Human Dependency: `@shchnk1103` only for any final Gate outside this implementation scope.
- Architecture Reviewer: Codex Architecture Agent (advisory only; no acceptance authority).
- Quality Reviewer: Codex Quality Agent (independent evidence review only; no Quality / Release Gate authority).

## Gates

- Entry Criteria: `WEB-QUALITY-001` is recorded; the initial lint findings identify the target files; no unrelated local changes exist.
- Exit Criteria: `npm run lint` exits `0`; the 404 internal navigation remains `/zh/`; no unrelated source/configuration files change; executor evidence links the immutable target SHA; Quality Agent independently rechecks the same SHA.
- Stop Conditions: A proposed edit changes route, localization or visible behavior beyond the recorded lint findings; lint/build introduces unrelated failures; the target SHA changes before review; or the work expands to release/deployment.

## Evidence Ledger

- Target commit SHA: Pending after implementation commit.
- Evidence records / immutable links: `docs/evidence/web-quality-001/`.
- Evidence grade: Executor-recorded, then Quality-reverified.
- Residuals and disposition: `WEB-QUALITY-001` is `fix`; any new residual must be classified before closure.

## Release Gate

- Product decision (human / date / timezone): Not Applicable.
- Architecture decision (human / date / timezone): Not Applicable.
- Quality / Release decision (human / date / timezone): Not Applicable.

## Handoff

- Handoff Target: Codex Quality Agent, then `@shchnk1103`.
- Required Handoff Content: target SHA, diff scope, lint output, rendered 404 navigation evidence, and residual status.
- Revalidation Trigger: Any source change after lint, any branch/commit change, or a request to deploy/release.

## History

- 2026-08-09: Assignment created from `WEB-QUALITY-001` technical debt under explicit user authorization.
