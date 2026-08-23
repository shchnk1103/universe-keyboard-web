# Assignment: RELEASE-001 — First Public Website Cutover

## Current Status

| Field | Value |
|---|---|
| Lifecycle | Active |
| Current Phase | Human product inputs recorded; public origin set to the existing `workers.dev` URL; CTA and screenshot placeholders accepted for this cutover. G5 Go/No-Go is not recorded. |
| Material non-claims | This Assignment does not itself constitute Product, Architecture, Quality or Release acceptance. Workers Builds success, hosted smoke evidence and independent quality reverify remain required before G5. |
| Next handoff / decision | Executor publishes `siteConfig.siteUrl`, collects G0–G4 evidence on a fixed SHA, then `@shchnk1103` records G5. |
| Residuals | Custom domain later (`accept`). App Store / TestFlight CTA placeholder (`accept`). Home screenshot placeholders (`accept`). `KOS-G01-001` remains `tech_debt:KOS-G01-001`. |

---

## Authority

- Assignment Authority: `@shchnk1103` (human Product Lead).
- Decision Source / Date: User authorized `workers.dev` as the current official origin and accepted CTA/screenshot placeholders, 2026-08-23 Asia/Shanghai.
- Product Approver: `@shchnk1103` (human). G5 Product Go is not yet recorded.

## Boundary

- Scope: Treat `https://universe-keyboard-web.761962425.workers.dev` as the current public origin; update `metadataBase` / `siteConfig.siteUrl`; keep download and showcase placeholders; collect release-matrix evidence for this cutover.
- Non-goals: Custom domain, China mainland origin, ICP filing, App Store / TestFlight URLs, replacing showcase screenshots, OpenNext, changing Next.js/SWC versions.
- Required Inputs: Human origin decision above; existing Cloudflare Worker `universe-keyboard-web`; Git-connected Workers Builds; static export unchanged.

## Assignment

- Domain Owner: Codex Website Executor.
- Executor: Codex primary agent.
- Environment Executor: Local Node/npm workspace; Cloudflare Workers Builds on `origin/main`.
- Human Dependency: `@shchnk1103` for G5 Product / Architecture / Quality / Release signatures.
- Architecture Reviewer: Codex Architecture Agent (advisory only; no acceptance authority).
- Quality Reviewer: Codex Quality Agent (independent evidence review only; no Quality / Release Gate authority).

## Gates

- Entry Criteria: Human selected the current `workers.dev` origin and accepted placeholders; hosting config is on `main`.
- Exit Criteria: Fixed SHA has `siteConfig.siteUrl` equal to the chosen origin; G0–G1 pass; hosted G2/G4 evidence exists for that SHA; residuals are classified; G5 human signatures recorded or the Assignment remains open.
- Stop Conditions: Origin is inferred rather than the recorded `workers.dev` URL; placeholders are presented as live App Store facts; Next.js/SWC versions change; or G5 is claimed without the human signature.

## Evidence Ledger

- Target commit SHA:
- Evidence records / immutable links:
- Evidence grade: Executor-recorded
- Residuals and disposition: Domain later `accept`. CTA placeholder `accept`. Screenshot placeholders `accept`. `KOS-G01-001` `tech_debt:KOS-G01-001`.

## Release Gate

- Product decision (human / date / timezone): Origin and placeholder acceptance recorded 2026-08-23 Asia/Shanghai. **G5 Product Go is not signed.**
- Architecture decision (human / date / timezone): Not signed.
- Quality / Release decision (human / date / timezone): Not signed.

## Handoff

- Handoff Target: `@shchnk1103` for G5 after hosted evidence is attached.
- Required Handoff Content: Fixed SHA, public origin, G0–G4 evidence, classified residuals.
- Revalidation Trigger: Custom domain, CTA URL change, screenshot replacement, `output` / `trailingSlash` / Wrangler routing change, or any Next.js/SWC/registry change.

## History

- 2026-08-23: Assignment created from explicit human origin and placeholder decisions.
