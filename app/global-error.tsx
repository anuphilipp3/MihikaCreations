"use client";

// Catches errors in the root layout itself. Replaces the whole document, so it
// can't rely on globals.css — brand styles are inlined.
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
          background: "#f6f2ea",
          color: "#232a24",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#9e4861",
            margin: 0,
          }}
        >
          A small snag
        </p>
        <h1 style={{ fontSize: "2.6rem", fontWeight: 500, margin: "1.2rem 0 0" }}>
          Something went wrong
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            color: "#6b675d",
            maxWidth: 420,
            lineHeight: 1.7,
            margin: "1.2rem 0 0",
          }}
        >
          Please refresh the page. If it keeps happening, reach us on WhatsApp.
        </p>
        <button
          onClick={reset}
          style={{
            marginTop: "2rem",
            cursor: "pointer",
            border: "none",
            background: "#232a24",
            color: "#fbf8f2",
            padding: "14px 28px",
            fontFamily: "system-ui, sans-serif",
            fontSize: 13,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            borderRadius: 2,
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
