import { ImageResponse } from "next/og";

// Brand-generated link preview — Silver-on-snow, refined, cold, minimal.
// Latin-only copy to stay font-safe with the default ImageResponse renderer.
export const alt = "BAEXOL — Full-Stack AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px",
          background: "linear-gradient(180deg, #f8f9fb 0%, #eceef2 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#949aa4",
          }}
        >
          <span>Full-Stack AI Engineer</span>
          <span>baexol.dev</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 176,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
              color: "#14161b",
            }}
          >
            BAEXOL
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 34,
              lineHeight: 1.4,
              maxWidth: 920,
              color: "#474d57",
            }}
          >
            From initial architecture to high-performance AI serving — taking full
            ownership of the product lifecycle.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#949aa4",
          }}
        >
          <div style={{ width: 60, height: 2, background: "#14161b" }} />
          <span>Zero-Defect Systems</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
