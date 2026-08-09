export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#08090a",
          color: "#f7f8f8",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 14, opacity: 0.6 }}>404</p>
          <p style={{ marginTop: 8 }}>Page not found</p>
          <p style={{ marginTop: 16 }}>
            <a href="/zh/" style={{ color: "#7170ff" }}>
              Home
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
