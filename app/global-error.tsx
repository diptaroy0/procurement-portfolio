"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body
        style={{
          background: "#081120",
          color: "#fff",
          padding: 20,
          fontFamily: "sans-serif",
        }}
      >
        <h1>Application Error</h1>

        <pre
          style={{
            whiteSpace: "pre-wrap",
            color: "#ff8080",
          }}
        >
          {error.message}
        </pre>

        <button
          onClick={() => reset()}
          style={{
            padding: 12,
            marginTop: 20,
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}