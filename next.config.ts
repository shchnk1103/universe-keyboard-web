import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Static export for China self-host / OSS + CDN later.
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Silence multi-lockfile root inference when parent dirs also have package-lock.
  turbopack: {
    root: process.cwd(),
  },
};

export default withNextIntl(nextConfig);
