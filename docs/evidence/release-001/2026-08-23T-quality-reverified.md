# Evidence: RELEASE-001 — Independent Quality Reverification

| Field | Value |
|---|---|
| Run fingerprint | `RELEASE-001/73e0fb9/2026-08-23T06:38:20Z` |
| Target commit SHA | `73e0fb9dfbf3795e7246f79db53650a5517ae67f` (`origin/main` tip; privacy-page cleanup after origin cutover) |
| Reviewer | Codex Quality Agent (independent of executor; no Product / Architecture / Quality / Release acceptance authority) |
| Environment | Local macOS, Node `v22.22.3`, npm `12.0.1`, `node_modules` already present (`npm ci` not re-run). Hosted origin `https://universe-keyboard-web.761962425.workers.dev`. |
| Evidence grade | Quality-reverified |
| Gate conclusion | Quality-reverified evidence **supports** a human G5 decision at this SHA. This file is **not** a Quality, Product, Architecture, or Release signature. G5 remains unsigned. |

Independent re-check at `git rev-parse HEAD` = `73e0fb9dfbf3795e7246f79db53650a5517ae67f`. SHA match: **pass**. Executor-recorded cutover evidence at `a4244ea` was not treated as proof for this SHA.

---

## G0 — baseline

**Claim** -> Locked workspace lints clean at `73e0fb9`.

**Method** -> Confirmed `package-lock.json` present and `git diff HEAD -- package-lock.json package.json` empty. Skipped `npm ci` because `node_modules` was present. Independently ran `npm run lint`.

**Result** -> `npm run lint` exit `0`. Lockfile unchanged.

**Evidence grade** -> Quality-reverified.

**Residuals** -> None for G0. `KOS-G01-001` is unrelated to this lint run (`tech_debt:KOS-G01-001`).

**Gate conclusion** -> G0 **pass**.

---

## G1 — static build

**Claim** -> `npm run build` produces static export routes for `/`, `zh`, `en`, and privacy.

**Method** -> Independently ran `npm run build` twice at `73e0fb9`. Inventoried `out/` after the successful run. Corroborated (not substituted) Cloudflare Workers Builds `b8ddeb75-ba43-447a-941f-67fa4ea8875e` (`commitHash` `73e0fb9…`, `buildOutcome` success) and GitHub Actions run [`32618154357`](https://github.com/shchnk1103/universe-keyboard-web/actions/runs/32618154357) (push `73e0fb9`, conclusion success; workflow `Deploy Cloudflare` runs `npm ci`, `npm run lint`, `npm run build`).

**Result** -> First local `npm run build` exit `1`: Turbopack `next/font` failed to fetch Geist / Geist Mono from `fonts.googleapis.com`. Immediate HTTPS probe then returned `200` for that host. Second `npm run build` exit `0` (Next.js 16.2.12, 16 static pages). `out/` present:

- `out/index.html`
- `out/zh/index.html`
- `out/en/index.html`
- `out/zh/privacy/index.html`
- `out/en/privacy/index.html`
- also `out/en/changelog/index.html`, `out/zh/features/index.html`, `out/404.html`

Working tree remained clean after `prebuild` `sync:content` (no lockfile or source diff).

**Evidence grade** -> Quality-reverified (local retry + hosted CI corroboration).

**Residuals** -> First local build failed on Google Fonts fetch, then succeeded; Cloudflare build for this SHA succeeded. Disposition: `accept` for this cutover (environment flake; not a product-source defect at `73e0fb9`).

**Gate conclusion** -> G1 **pass** after recorded retry.

---

## G2 — smoke

**Claim** -> Public origin serves root refresh, zh/en pages, listed deep links, and 404 for a missing path.

**Method** -> `curl` with browser User-Agent `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36`. Python `urllib` without that UA was also probed to confirm it is not a valid method here. HTML inspected for locale nav and theme-toggle markup. Interactive locale/theme/mobile gestures were **not** device-run.

**Result** ->

| Path | HTTP |
|---|---|
| `/` | 200 (meta refresh `0;url=/zh/`, canonical `/zh/`) |
| `/zh/` | 200 |
| `/en/` | 200 |
| `/zh/features/` | 200 |
| `/en/privacy/` | 200 |
| `/zh/privacy/` | 200 |
| `/en/changelog/` | 200 |
| `/nope` | 404 |
| `/this-path-does-not-exist` | 404 |
| `/en/privacy` (no trailing slash) | 307 → `/en/privacy/` |

Python `urllib` `GET /` with default UA: HTTP `403` (method rejected; not used as evidence).

`/en/` HTML contains locale links (`/zh/`, `/en/features/`, `/en/privacy/`, …) and `aria-label="Toggle theme"`.

**Evidence grade** -> Quality-reverified for HTTP routes and markup presence. Not Device-attested for theme/mobile interaction.

**Residuals** -> Theme toggle, locale switcher click-path, and mobile menu were not exercised in a browser/device. Disposition: `accept` for this curl-scoped reverify (source + hosted markup present; no HTTP route failure).

**Gate conclusion** -> G2 **pass** for the required hosted HTTP matrix.

---

## G3 — content claims

**Claim** -> Live privacy is a public document (no internal sync/process labels); download CTA is a placeholder, not a live App Store listing; `metadataBase` / `siteUrl` is the workers.dev origin.

**Method** -> Read `src/lib/site.ts` and `src/app/[locale]/layout.tsx` at `73e0fb9`. Fetched live `/en/privacy/`, `/zh/privacy/`, `/en/`, `/zh/`, `/en/changelog/` with the browser UA and searched the HTML. Confirmed privacy/changelog pages drop the `source` field from `readSyncedMarkdown` (only `markdown` is rendered).

**Result** -> Live `/en/privacy/` contains **0** occurrences of: `内容来源`, `Source: synced`, `Source: fallback`, `publication URL required`, `npm run sync:content`, `before every submission`. Same for `/zh/privacy/` and `/en/changelog/`. Public policy heading `App Store Privacy Labels` is present; `App Privacy Disclosure`, `**Status:**`, and `repository product contracts` are absent.

Download CTA: `href="#download-placeholder"` with visible copy `Coming soon` / `Coming soon to the App Store` (en) and `即将上架` (zh). No `apps.apple.com` or `testflight.apple.com` URL. `siteConfig.appStoreUrl` and `testFlightUrl` are `null` in source.

Home showcase copy includes `Device screenshot / video placeholder` (en). Placeholders are labeled as placeholders.

`siteConfig.siteUrl` = `https://universe-keyboard-web.761962425.workers.dev`. `metadataBase: new URL(siteConfig.siteUrl)` in `src/app/[locale]/layout.tsx`. Hosted HTML does not emit `og:url`; that does not contradict the source `metadataBase`.

**Evidence grade** -> Quality-reverified.

**Residuals** -> App Store / TestFlight CTA placeholder: `accept` (human Product Lead already accepted). Home screenshot placeholders: `accept` (already accepted). Custom domain later: `accept`. `KOS-G01-001`: `tech_debt:KOS-G01-001` (not a legal conclusion).

**Gate conclusion** -> G3 **pass**. Placeholders are not presented as live store facts.

---

## G4 — hosted static site

**Claim** -> Candidate origin at this SHA serves static assets and required deep links.

**Method** -> Same browser-UA `curl` as G2, plus CSS/JS/favicon fetches from `/en/` HTML. Cloudflare Workers Builds list for worker `universe-keyboard-web` (`685a6ffe2e384b87b97781c3c7fb01ca`). External GitHub link from `siteConfig.githubUrl`. Compared live `/en/privacy/` bytes with local `out/en/privacy/index.html` (expected build-id drift only).

**Result** ->

- Hosted routes as in G2.
- `/_next/static/chunks/2c04-t60rbt6z.css` → 200 `text/css`
- `/_next/static/chunks/27jktro2p5rq9.js` → 200 `text/javascript`
- `/favicon.ico` → 200
- `https://github.com/shchnk1103/Universe-Keyboard` → 200
- Workers Build `b8ddeb75-ba43-447a-941f-67fa4ea8875e` on `main` / `73e0fb9` / success (created 2026-08-23T04:33:06Z). Worker `modified_on` 2026-08-23T04:34:02Z.
- Live vs local privacy HTML differ at Next flight-data build id (`LDWcj2G4_wVGgywa1Ph-o` vs local `u_Uu8PCcXuiFLVm6JKIDV`); public copy claims match.

**Evidence grade** -> Quality-reverified.

**Residuals** -> Same classified placeholders and `KOS-G01-001` as G3. Assignment ledger in `docs/assignments/release-001.md` still names target SHA `a4244ea`; this reverify is at instructed `73e0fb9`. Disposition: `accept` as documentation lag for the human/executor to update the Assignment; not a hosted-route defect.

**Gate conclusion** -> G4 **pass**.

---

## G5 — release (not signed)

**Claim** -> Independent Quality-reverified G0–G4 at `73e0fb9` with classified residuals.

**Method** -> This file. Human Product Lead `@shchnk1103` already accepted workers.dev as current official origin, CTA/screenshot placeholders, and `KOS-G01-001` remaining tech debt. Architecture / Quality / Release signatures were not present on the Assignment at review time.

**Result** -> No blocking residual found for the required matrix. G5 human signatures are absent by design of this review.

**Evidence grade** -> Quality-reverified (advisory). **Not** a Quality Gate acceptance.

**Residuals** ->

| Residual | Disposition |
|---|---|
| Custom domain later | `accept` |
| App Store / TestFlight CTA placeholder (`#download-placeholder`, “Coming soon”) | `accept` |
| Home screenshot placeholders | `accept` |
| `KOS-G01-001` (SWC artifact license/provenance disposition) | `tech_debt:KOS-G01-001` |
| Local first `npm run build` Google Fonts fetch failure (retry + CF build succeeded) | `accept` |
| Theme/mobile/locale click-path not Device-attested in this run | `accept` |
| Assignment Evidence Ledger still lists `a4244ea` | `accept` (ledger update is human/executor; product origin at `73e0fb9` verified here) |
| G5 Product / Architecture / Quality / Release signatures | open (human only) |

**Gate conclusion** -> Quality-reverified evidence **supports G5**. This agent does **not** sign G5. If the human requires Device-attested theme/mobile interaction or an updated Assignment SHA field before signing, that is a human stop — not a newly found product-route failure.

---

## Commands (raw)

```
git rev-parse HEAD
# 73e0fb9dfbf3795e7246f79db53650a5517ae67f

npm run lint
# LINT_EXIT:0

npm run build
# first: BUILD_EXIT:1 (next/font Google Fonts fetch)
# second: BUILD_EXIT:0
```

Hosted `curl` User-Agent: Chrome 120 macOS string above. Public origin: `https://universe-keyboard-web.761962425.workers.dev`.
