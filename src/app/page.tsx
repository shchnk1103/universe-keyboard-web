import { routing } from "@/i18n/routing";

/**
 * Static-export friendly root entry.
 * `next/navigation` redirect is not reliable under `output: "export"`.
 */
export default function RootPage() {
  const href = `/${routing.defaultLocale}/`;

  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${href}`} />
        <link rel="canonical" href={href} />
        <title>Universe Keyboard</title>
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          background: "#08090a",
          color: "#f7f8f8",
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <p>
          <a href={href} style={{ color: "#7170ff" }}>
            Universe Keyboard →
          </a>
        </p>
      </body>
    </html>
  );
}
