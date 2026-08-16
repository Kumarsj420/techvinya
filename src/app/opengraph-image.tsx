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
          <svg width="56" height="56" viewBox="0 0 512 512"><path d="M61 88C61 78.0588 68.9469 70 78.75 70H327.25C337.053 70 345 78.0589 345 88V124C345 133.941 337.053 142 327.25 142H78.75C68.9469 142 61 133.941 61 124V88Z" fill="#01FFF6" /><path d="M238.5 142V424C238.5 433.941 230.553 442 220.75 442H185.25C175.447 442 167.5 433.941 167.5 424V142H238.5Z" fill="#01FFF6" /><path d="M327.434 179C337.271 179 345.245 187.01 345.245 196.89V405.606H274V196.89C274 187.01 281.974 179 291.811 179H327.434Z" fill="#01FFF6" /><path d="M333.371 404.413V421.11C333.371 430.99 325.397 439 315.56 439H291.811C281.974 439 274 430.99 274 421.11V404.413H333.371Z" fill="#01FFF6" /><path d="M444.278 257.738C451.976 263.89 453.25 275.145 447.125 282.876L329.75 431.04L274 386.484L391.376 238.32C397.501 230.589 408.706 229.308 416.403 235.46L444.278 257.738Z" fill="#01FFF6" /></svg>

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
