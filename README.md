# Universe Keyboard — Official Website

Marketing site for [Universe Keyboard](https://github.com/shchnk1103/Universe-Keyboard): a RIME-powered third-party Chinese keyboard for iOS.

## Stack

- **Next.js** (App Router) + TypeScript + Tailwind CSS v4
- **next-intl** — Chinese / English (`/zh`, `/en`)
- **Framer Motion** — page motion
- **next-themes** — system preference, dark-friendly
- **Static export** (`output: "export"`) — deploy to any static host or China VPS/nginx later

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

### Deploy notes (China / self-host)

1. Upload `out/` to nginx, Caddy, or object storage + CDN.
2. Point SPA-style unknown routes carefully — this site uses real multi-page paths with `trailingSlash: true`.
3. Example nginx:

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

4. Update `src/lib/site.ts` when App Store / TestFlight URLs exist.
5. Replace `metadataBase` in `src/app/[locale]/layout.tsx` with the real domain.

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
