# Assignment: WEB-PAGES-001 — Cloudflare Static Hosting Setup

## Current Status

| Field | Value |
|---|---|
| Lifecycle | Active |
| Current Phase | Candidate Workers URL is live; hosting config is being published to `origin/main`. Independent documentation review is still pending. |
| Material non-claims | This task does not record Product, Architecture, Quality or Release acceptance. A `*.workers.dev` candidate URL is not a release. Placeholder metadata (`universekeyboard.example`) and download CTAs remain non-production facts. |
| Next handoff / decision | Hosting setup is in use. Public origin cutover continues in [`release-001.md`](release-001.md). |
| Residuals | GitHub Actions auto-deploy waits on repository secrets (`accept` for this Assignment). `KOS-G01-001` remains `tech_debt:KOS-G01-001`. Placeholder `metadataBase` and download CTAs remain non-production facts. |

---

## Authority

- Assignment Authority: `@shchnk1103` (human Product Lead).
- Decision Source / Date: User authorized Cloudflare Pages as the host, then authorized continuing that work, 2026-08-23 Asia/Shanghai.
- Product Approver: `@shchnk1103` (human; no Product acceptance is requested by this task).

## Boundary

- Scope: Add Wrangler config and deploy scripts for an assets-only static site from `out/`; document the Cloudflare host path; add an optional GitHub Actions deploy workflow that uses repository secrets; keep the Next.js static export (do not adopt OpenNext / `@opennextjs/cloudflare`).
- Non-goals: Custom domain, China mainland origin, ICP filing, metadataBase/CTA production values, OpenNext/SSR, Workers Bindings, Release Gate, Product/Architecture/Quality acceptance.
- Required Inputs: Existing `output: "export"` and `trailingSlash: true`; public repository `https://github.com/shchnk1103/universe-keyboard-web`; human Cloudflare account for any live upload.

## Assignment

- Domain Owner: Codex Website Executor.
- Executor: Codex primary agent.
- Environment Executor: Local Node/npm workspace; Cloudflare deploy only after human authentication.
- Human Dependency: `@shchnk1103` for Cloudflare login or API token, and for any Gate outside this setup scope.
- Architecture Reviewer: Codex Architecture Agent (advisory only; no acceptance authority).
- Quality Reviewer: Codex Quality Agent (independent evidence review only; no Quality / Release Gate authority).

## Gates

- Entry Criteria: Human selected Cloudflare Pages and authorized continuation; site remains static export; no domain purchase is required.
- Exit Criteria: `wrangler.jsonc` describes assets-only hosting of `./out`; README documents the host path; `npm run lint` and `npm run build` succeed on the change; live deploy is either evidenced or explicitly residual-blocked on missing Cloudflare auth.
- Stop Conditions: The work would add OpenNext, change Next.js/SWC versions, claim a Release Gate, or treat placeholder product URLs as production facts.

## Evidence Ledger

- Target commit SHA: `04f701fee7e6622bc3fa7e7f622e56a8fa9a0982`
- Evidence records / immutable links: [`2026-08-23T-executor-setup.md`](../evidence/web-pages-001/2026-08-23T-executor-setup.md); [`2026-08-23T-candidate-deploy.md`](../evidence/web-pages-001/2026-08-23T-candidate-deploy.md)
- Evidence grade: Executor-recorded
- Residuals and disposition: Live candidate publish is done. GitHub Actions auto-deploy is `accept` until secrets exist. `KOS-G01-001` remains `tech_debt:KOS-G01-001`.

## Release Gate

- Product decision (human / date / timezone): Not Applicable
- Architecture decision (human / date / timezone): Not Applicable
- Quality / Release decision (human / date / timezone): Not Applicable

## Handoff

- Handoff Target: `@shchnk1103` (human Product Lead) for Cloudflare authentication and any later `RELEASE-*` Assignment.
- Required Handoff Content: Wrangler config, build/deploy commands, auth residual, and that this is not a release.
- Revalidation Trigger: Any change to `output`, `trailingSlash`, asset directory, Wrangler routing, CI secrets, or a request to treat a hosted URL as production.

## History

- 2026-08-23: Assignment created under explicit user authorization to continue Cloudflare Pages work. Cloudflare currently hosts new static sites as Workers Static Assets (Workers & Pages). Classic `wrangler pages deploy` is not used.
- 2026-08-23: Executor added `wrangler.jsonc`, deploy scripts, README notes and an optional GitHub Actions workflow. `npm run lint`, `npm run build` and `wrangler deploy --dry-run` passed. `wrangler whoami` is unauthenticated, so no public URL was published.
- 2026-08-23: After human `npx wrangler login`, executor deployed candidate `https://universe-keyboard-web.761962425.workers.dev` (Workers version `807186c6-318d-4198-aea9-1e9ec814e75d`). This is not a Release Gate.
- 2026-08-23: Hosting config committed as `04f701fee7e6622bc3fa7e7f622e56a8fa9a0982`. GitHub Actions will skip Cloudflare upload until repository secrets exist.
- 2026-08-23: First Actions run failed: `secrets` is invalid in step `if`. Second run failed: `npm ci` on Node 20/npm 10 disagreed with the npm 12 lockfile (`@swc/helpers@0.5.23`). Workflow now uses Node 22; lockfile regenerated with npm 10. Next remains `16.2.12`. Not a G-01 artifact-version change.
