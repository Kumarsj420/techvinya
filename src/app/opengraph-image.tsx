import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  /*
   * Satori (the renderer behind ImageResponse) cannot read woff2, so this is a
   * static SemiBold woff rather than the variable woff2 the site itself uses.
   * Read from disk at render time — bundlers do not follow font imports here.
   */
  const display = await readFile(
    join(process.cwd(), "src/fonts/BricolageGrotesque-SemiBold.woff"),
  );

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
            "radial-gradient(circle at 12% 0%, rgba(1, 255, 246,0.28), transparent 55%), radial-gradient(circle at 92% 12%, rgba(99,102,241,0.24), transparent 50%)",
          padding: 72,
          fontFamily: "Bricolage Grotesque, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 512 512"><path d="M134.667 166.4L116 116H280.267L261.6 166.4H134.667Z" fill="#FFFFFF" /><path d="M149.6 205.6L224.267 396H280.267L249.576 315.733L207.467 205.6H149.6Z" fill="#FFFFFF" /><path d="M338.133 116H396L375.467 166.4H315.733L338.133 116Z" fill="#01FFF6" /><path d="M358.667 205.6H300.8L249.576 315.733L280.267 396L358.667 205.6Z" fill="#ACB7C7" /></svg>

          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
            Tech<span style={{ color: "#01fff6" }}>Vinya</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.12,
              letterSpacing: -2.4,
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
    {
      ...size,
      fonts: [
        {
          name: "Bricolage Grotesque",
          data: display,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
