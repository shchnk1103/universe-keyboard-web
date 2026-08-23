# Evidence: WEB-PAGES-001 — Candidate Cloudflare Deploy

| Field | Value |
|---|---|
| Run fingerprint | `WEB-PAGES-001/candidate-workers.dev/2026-08-23+08:00` |
| Project baseline commit | `7eac858d96c3e21f04c1a90f6175db2df016ab1c` at deploy time; hosting files were still uncommitted |
| Evidence grade | Executor-recorded |
| Remote verification | Cloudflare Workers version `807186c6-318d-4198-aea9-1e9ec814e75d` |
| Gate conclusion | Not a Release Gate. A candidate URL exists. Placeholder metadata and download CTAs remain non-production facts. |

## Environment

- macOS local Node/npm workspace
- `wrangler` 4.125.0 after human `npx wrangler login`
- Account: `761962425@qq.com` / `cc27a58999b235226b93be085c4687dc`

## Validation

| Method | Result |
|---|---|
| `npm run deploy` | Exit 0; uploaded 110 new/changed assets from `out/` |
| Candidate URL | `https://universe-keyboard-web.761962425.workers.dev` |
| `GET /`, `/zh/`, `/en/`, `/zh/features/` | HTTP 200 |
| `GET /this-should-404` | HTTP 404 |

## Residual

- GitHub Actions auto-deploy is `accept` until `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are set; local Wrangler remains the current publish path.
- `KOS-G01-001` unchanged (`tech_debt:KOS-G01-001`).
- Placeholder `metadataBase` and download CTAs remain non-production facts.
