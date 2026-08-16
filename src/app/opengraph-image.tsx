import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070b14",
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(34,211,238,0.28), transparent 55%), radial-gradient(circle at 92% 12%, rgba(99,102,241,0.24), transparent 50%)",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              border: "2px solid rgba(34,211,238,0.55)",
              background: "rgba(34,211,238,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#67e8f9",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            TV
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
            Tech<span style={{ color: "#22d3ee" }}>Vinya</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.12,
              letterSpacing: -1.6,
              maxWidth: 940,
            }}
          >
            We build the software your startup is judged on.
          </div>
          <div style={{ marginTop: 26, fontSize: 28, color: "#94a3b8", maxWidth: 900 }}>
            Web, mobile and AI product engineering for travel, healthcare, cybersecurity and
            chatbot companies.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Travel", "Healthcare", "Cybersecurity", "AI & Chatbots"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                border: "1px solid #1e2a45",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 22,
                color: "#94a3b8",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
