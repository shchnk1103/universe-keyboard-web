import type { ReactNode } from "react";
import "./globals.css";

/** Root layout — locale-specific shell lives under `[locale]`. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
