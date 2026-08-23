import fs from "node:fs";
import path from "node:path";

const contentDir = path.join(process.cwd(), "content", "synced");

export function readSyncedMarkdown(filename: string): {
  markdown: string;
  source: "synced" | "fallback";
} {
  const syncedPath = path.join(contentDir, filename);
  const fallbackPath = path.join(process.cwd(), "content", "fallback", filename);

  let markdown: string | null = null;
  let source: "synced" | "fallback" = "fallback";

  if (fs.existsSync(syncedPath)) {
    markdown = fs.readFileSync(syncedPath, "utf8");
    source = "synced";
  } else if (fs.existsSync(fallbackPath)) {
    markdown = fs.readFileSync(fallbackPath, "utf8");
    source = "fallback";
  }

  if (markdown == null) {
    markdown = "This page is not available yet.\n";
  }

  if (filename === "PRIVACY_POLICY.md") {
    markdown = toPublicPrivacyMarkdown(markdown);
  }

  return { markdown, source };
}

/** Strip repository-process notes so the published policy reads as a public document. */
export function toPublicPrivacyMarkdown(markdown: string): string {
  let text = markdown.replace(/\r\n/g, "\n");

  text = text.replace(/^>\s*\*\*Status:\*\*.+\n?/gim, "");
  text = text.replace(
    /follow their corresponding in-app controls and repository product contracts\./g,
    "follow the corresponding in-app controls.",
  );
  text = text.replace(
    /## App Privacy Disclosure\n[\s\S]*?(?=\n## )/,
    [
      "## App Store Privacy Labels",
      "",
      "Processing that stays on the device and is never sent off the device is not treated as developer collection in App Store privacy labels. Optional encrypted transfer to a storage destination you choose is directed by you and is separate from developer collection.",
      "",
    ].join("\n"),
  );

  return text.replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
