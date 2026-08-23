# Evidence: RELEASE-001 — Origin Cutover

| Field | Value |
|---|---|
| Run fingerprint | `RELEASE-001/a4244ea/2026-08-23+08:00` |
| Project target commit | `a4244ea45a9334eb58adb584db6099cc3815fe00` |
| Evidence grade | Executor-recorded |
| Gate conclusion | Not G5. Origin and placeholder inputs are implemented and hosted. Human Product / Architecture / Quality signatures remain open. |

## Validation

| Method | Result |
|---|---|
| `npm run lint` | Exit 0 (local, SHA `a4244ea`) |
| `npm run build` | Exit 0; `metadataBase` is `https://universe-keyboard-web.761962425.workers.dev` |
| GitHub Actions `32617646837` | Success: `npm ci`, lint, build; Cloudflare upload skipped (no secrets) |
| Workers Builds deploy | Version `69ae677c-4ae5-434b-96cf-88b447b5c0ad` at 2026-08-23T04:21:47Z |
| Hosted `GET /`, `/zh/`, `/en/`, `/zh/features/`, `/en/privacy/` | HTTP 200 (browser User-Agent) |
| Hosted `GET /nope` | HTTP 404 |
| Hosted `/zh/` HTML | Contains `og:locale`; does not contain `universekeyboard.example` |

## Residuals

- Custom domain later: `accept`
- App Store / TestFlight CTA placeholder: `accept`
- Home screenshot placeholders: `accept`
- `KOS-G01-001`: `tech_debt:KOS-G01-001`
- G5 signatures: open
