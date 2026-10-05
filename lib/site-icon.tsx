import { ImageResponse } from "next/og"

export function SiteIcon(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5b4ce6",
          color: "#ffffff",
          fontSize: Math.round(size * 0.62),
          fontWeight: 600,
          letterSpacing: "-0.06em",
        }}
      >
        B
      </div>
    ),
    { width: size, height: size }
  )
}
