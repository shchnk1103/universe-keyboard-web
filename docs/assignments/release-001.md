# Assignment: RELEASE-001 — First Public Website Cutover

## Current Status

| Field | Value |
|---|---|
| Lifecycle | Closed |
| Current Phase | G5 Go recorded for SHA `73e0fb9`. Public origin is the current `workers.dev` URL. |
| Material non-claims | G5 does not approve a custom domain, App Store listing, TestFlight, China mainland origin, or a license/provenance conclusion for `KOS-G01-001`. |
| Next handoff / decision | None for this cutover. A later domain or CTA change needs a new Assignment. |
| Residuals | Custom domain later (`accept`). App Store / TestFlight CTA placeholder (`accept`). Home screenshot placeholders (`accept`). Local font-fetch flake (`accept`). Theme/mobile click-path not Device-attested (`accept`). `KOS-G01-001` remains `tech_debt:KOS-G01-001`. |

---

## Authority

- Assignment Authority: `@shchnk1103` (human Product Lead).
- Decision Source / Date: User authorized `workers.dev` as the current official origin and accepted CTA/screenshot placeholders, 2026-08-23 Asia/Shanghai.
- Product Approver: `@shchnk1103` (human).

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
- Exit Criteria: Fixed SHA has `siteConfig.siteUrl` equal to the chosen origin; G0–G1 pass; hosted G2/G4 evidence exists for that SHA; residuals are classified; G5 human signatures recorded.
- Stop Conditions: Origin is inferred rather than the recorded `workers.dev` URL; placeholders are presented as live App Store facts; Next.js/SWC versions change; or G5 is claimed without the human signature.

## Evidence Ledger

- Target commit SHA: `73e0fb9dfbf3795e7246f79db53650a5517ae67f`
- Evidence records / immutable links: [`../evidence/release-001/2026-08-23T-origin-cutover.md`](../evidence/release-001/2026-08-23T-origin-cutover.md); [`../evidence/release-001/2026-08-23T-quality-reverified.md`](../evidence/release-001/2026-08-23T-quality-reverified.md)
- Evidence grade: Quality-reverified
- Residuals and disposition: Domain later `accept`. CTA placeholder `accept`. Screenshot placeholders `accept`. Font-fetch flake `accept`. Theme/mobile not Device-attested `accept`. `KOS-G01-001` `tech_debt:KOS-G01-001`.

## Release Gate

- Product decision (human / date / timezone): Go — `@shchnk1103` / 2026-08-23 / Asia/Shanghai. Origin is the current `workers.dev` URL; CTA and screenshot placeholders are accepted for this cutover.
- Architecture decision (human / date / timezone): Go — `@shchnk1103` / 2026-08-23 / Asia/Shanghai. Static export hosted as Cloudflare Workers Static Assets at the recorded origin.
- Quality / Release decision (human / date / timezone): Go — `@shchnk1103` / 2026-08-23 / Asia/Shanghai, after independent Quality-reverified evidence at `73e0fb9`.

## Handoff

- Handoff Target: None for this closed cutover.
- Required Handoff Content: Public origin `https://universe-keyboard-web.761962425.workers.dev`; SHA `73e0fb9`; G5 Go recorded.
- Revalidation Trigger: Custom domain, CTA URL change, screenshot replacement, `output` / `trailingSlash` / Wrangler routing change, or any Next.js/SWC/registry change.

## History

- 2026-08-23: Assignment created from explicit human origin and placeholder decisions.
- 2026-08-23: `a4244ea` set `siteConfig.siteUrl` and `metadataBase`. Cloudflare Workers Builds produced version `69ae677c-4ae5-434b-96cf-88b447b5c0ad`. GitHub Actions run `32617646837` succeeded (lint/build; deploy skipped without secrets). G5 remains unsigned.
- 2026-08-23: Privacy/changelog pages no longer show internal sync source. Public privacy markdown strips repository-status notes such as App Store publication-URL requirements.
- 2026-08-23: Independent Quality Agent reverified G0–G4 at `73e0fb9` (`2026-08-23T-quality-reverified.md`); no blocking residual. Human Product Lead authorized G5 Go.
