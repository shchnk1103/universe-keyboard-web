import fs from "node:fs";
import path from "node:path";

const contentDir = path.join(process.cwd(), "content", "synced");

export function readSyncedMarkdown(filename: string): {
  markdown: string;
  source: "synced" | "fallback";
} {
  const syncedPath = path.join(contentDir, filename);
  const fallbackPath = path.join(process.cwd(), "content", "fallback", filename);

  if (fs.existsSync(syncedPath)) {
    return {
      markdown: fs.readFileSync(syncedPath, "utf8"),
      source: "synced",
    };
  }

  if (fs.existsSync(fallbackPath)) {
    return {
      markdown: fs.readFileSync(fallbackPath, "utf8"),
      source: "fallback",
    };
  }

  return {
    markdown: "_Content not found. Run `npm run sync:content`._\n",
    source: "fallback",
  };
}
