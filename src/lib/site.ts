/** Site-wide constants. Update download URLs when App Store / TestFlight is ready. */
export const siteConfig = {
  name: "Universe Keyboard",
  /** Public origin until a custom domain is attached. No trailing slash. */
  siteUrl: "https://universe-keyboard-web.761962425.workers.dev",
  githubUrl: "https://github.com/shchnk1103/Universe-Keyboard",
  /** Placeholder until App Store listing exists */
  appStoreUrl: null as string | null,
  testFlightUrl: null as string | null,
  /** Sibling main repo path used by sync script (not used at runtime in browser) */
  mainRepoRelative: "../Universe Keyboard",
} as const;

export function downloadHref(): string {
  return (
    siteConfig.appStoreUrl ??
    siteConfig.testFlightUrl ??
    "#download-placeholder"
  );
}
