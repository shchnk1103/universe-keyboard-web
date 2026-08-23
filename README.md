# Universe Keyboard — Official Website

Marketing site for [Universe Keyboard](https://github.com/shchnk1103/Universe-Keyboard): a RIME-powered third-party Chinese keyboard for iOS.

## Stack

- **Next.js** (App Router) + TypeScript + Tailwind CSS v4
- **next-intl** — Chinese / English (`/zh`, `/en`)
- **Framer Motion** — page motion
- **next-themes** — system preference, dark-friendly
- **Static export** (`output: "export"`) — Cloudflare Workers Static Assets (Workers & Pages); `out/` can also be served by nginx later

## Pages

| Path | Purpose |
|------|---------|
| `/[locale]/` | Home |
| `/[locale]/features/` | Features |
| `/[locale]/get-started/` | Setup guide + FAQ |
| `/[locale]/privacy/` | Privacy (synced from main repo) |
| `/[locale]/about/` | About / licenses |
| `/[locale]/changelog/` | Changelog (synced, truncated) |

## Develop

```bash
npm install
npm run sync:content   # optional if main repo is a sibling
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) → redirects to `/zh/`.

## Sync content from main repo

By default the script reads:

```text
../Universe Keyboard/docs/PRIVACY_POLICY.md
../Universe Keyboard/CHANGELOG.md
```

```bash
npm run sync:content
# or
MAIN_REPO_PATH="/path/to/Universe Keyboard" npm run sync:content
```

Output: `content/synced/`. If missing, pages fall back to `content/fallback/`.

`prebuild` runs sync automatically.

## Build (static)

```bash
npm run build
# artifacts in out/
```

Serve locally:

```bash
npx serve out
```

### Deploy (Cloudflare)

This site is a static export. Cloudflare hosts it as **Workers Static Assets** (the current static path under Workers & Pages). Do not run unconfigured `wrangler deploy` in a way that auto-detects Next.js and installs OpenNext.

```bash
npx wrangler login
npm run deploy
```

Config is `wrangler.jsonc`: assets from `out/`, trailing slashes forced to match `trailingSlash: true`, unknown routes use `404.html`.

GitHub Actions (`.github/workflows/deploy-cloudflare.yml`) deploys `main` when these repository secrets exist:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

A `*.workers.dev` URL is a candidate host, not a product release. Update `metadataBase` and download URLs before treating any public URL as production.

### Optional self-host

`out/` can also be uploaded to nginx, Caddy, or object storage. This site uses real multi-page paths with `trailingSlash: true`, not SPA fallback.

```nginx
server {
  listen 80;
  server_name your.domain;
  root /var/www/universe-web;
  index index.html;

  location / {
    try_files $uri $uri/ $uri/index.html =404;
  }
}
```

## Download CTA

Placeholder only. Edit:

```ts
// src/lib/site.ts
appStoreUrl: "https://apps.apple.com/...",
testFlightUrl: null,
```

## Assets

Device screenshots / screen recordings go under `public/images/` (to be added). Home showcase blocks are placeholders until then.

## Design direction

Linear-inspired: restrained type, fine borders, system theme with dark preference, precise motion — not a loud “skin keyboard” brand.
