#!/usr/bin/env node
/**
 * Copy privacy policy + changelog from the Universe Keyboard main repo
 * into content/synced/ for the marketing site build.
 *
 * Default main repo path: ../Universe Keyboard (sibling of UniverseWeb)
 * Override: MAIN_REPO_PATH=/path/to/Universe Keyboard npm run sync:content
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "content", "synced");

const mainRepo =
  process.env.MAIN_REPO_PATH ||
  path.resolve(root, "..", "Universe Keyboard");

const files = [
  {
    from: path.join(mainRepo, "docs", "PRIVACY_POLICY.md"),
    to: path.join(outDir, "PRIVACY_POLICY.md"),
    transform: (s) => s,
  },
  {
    from: path.join(mainRepo, "CHANGELOG.md"),
    to: path.join(outDir, "CHANGELOG.md"),
    // Keep the public changelog readable; full history stays in the main repo.
    transform: (s) => truncateChangelog(s, 12),
  },
];

function truncateChangelog(text, maxHeadings) {
  const lines = text.split(/\r?\n/);
  let headings = 0;
  const out = [];
  for (const line of lines) {
    if (/^##\s+/.test(line)) {
      headings += 1;
      if (headings > maxHeadings) {
        out.push("");
        out.push(
          "---",
          "",
          "_… truncated for the website. See the full CHANGELOG in the main repository._",
          "",
        );
        break;
      }
    }
    out.push(line);
  }
  return out.join("\n");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

ensureDir(outDir);

let ok = 0;
let missing = 0;

for (const file of files) {
  if (!fs.existsSync(file.from)) {
    console.warn(`[sync] skip (not found): ${file.from}`);
    missing += 1;
    continue;
  }
  const raw = fs.readFileSync(file.from, "utf8");
  const body = file.transform(raw);
  fs.writeFileSync(file.to, body, "utf8");
  console.log(`[sync] wrote ${path.relative(root, file.to)}`);
  ok += 1;
}

const meta = {
  syncedAt: new Date().toISOString(),
  mainRepo,
  filesWritten: ok,
  filesMissing: missing,
};
fs.writeFileSync(
  path.join(outDir, "sync-meta.json"),
  JSON.stringify(meta, null, 2) + "\n",
  "utf8",
);

if (ok === 0) {
  console.warn(
    "[sync] no files copied — site will use content/fallback. Set MAIN_REPO_PATH if needed.",
  );
  process.exitCode = 0;
} else {
  console.log(`[sync] done (${ok} file(s))`);
}
