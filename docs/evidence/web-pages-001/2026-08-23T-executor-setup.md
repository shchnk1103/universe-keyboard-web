# Evidence: WEB-PAGES-001 — Executor Hosting Setup

| Field | Value |
|---|---|
| Run fingerprint | `WEB-PAGES-001/uncommitted-on-7eac858/2026-08-23+08:00` |
| Project baseline commit | `7eac858d96c3e21f04c1a90f6175db2df016ab1c` (`origin/main`) |
| Evidence grade | Executor-recorded |
| Remote verification | Setup files are local and uncommitted; no live Cloudflare upload occurred. |
| Gate conclusion | Not a Release Gate. Local lint, static build and Wrangler dry-run succeeded. Live deploy is blocked on missing Cloudflare CLI authentication. |

## Environment

- macOS local Node/npm workspace
- `wrangler` 4.125.0 (devDependency)
- `npx wrangler whoami`: not authenticated
- No `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` in the executor environment

## Validation

| Method | Result |
|---|---|
| `npm run lint` | Exit 0 |
| `npm run build` | Exit 0; static routes `/`, `/zh/*`, `/en/*` generated into `out/` |
| `npx wrangler deploy --dry-run` | Exit 0; read 179 files from `out/`; no bindings; `--dry-run: exiting now` |
| `npx wrangler whoami` | Not authenticated; live deploy not attempted |

## Residual

- Live Cloudflare publish: `fix` — human must `npx wrangler login` or set GitHub secrets, then deploy.
- `KOS-G01-001` unchanged (`tech_debt:KOS-G01-001`). Wrangler is a JS CLI toolchain, not a Next.js/SWC artifact change.
- Placeholder `metadataBase` and download CTAs remain non-production facts.
