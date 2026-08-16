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
          <svg width="56" height="56" viewBox="0 0 512 512">
            <g transform="translate(45 44.7) scale(0.82466)">
              <path d="M8.5 46.9235C8.5 34.5393 18.5393 24.5 30.9235 24.5H344.852C357.237 24.5 367.276 34.5393 367.276 46.9235V91.7705C367.276 104.155 357.237 114.194 344.852 114.194H30.9235C18.5393 114.194 8.5 104.155 8.5 91.7705V46.9235Z" fill="#E8EEFA" />
              <path d="M232.735 114.194V465.495C232.735 477.88 222.695 487.919 210.311 487.919H165.464C153.08 487.919 143.041 477.88 143.041 465.495V114.194H232.735Z" fill="#E8EEFA" />
              <path d="M344.852 159.041C357.237 159.041 367.276 169.08 367.276 181.464V443.072H277.582V181.464C277.582 169.08 287.621 159.041 300.005 159.041H344.852Z" fill="#01FFF6" />
              <path d="M352.327 441.577V462.505C352.327 474.89 342.288 484.929 329.904 484.929H300.006C287.621 484.929 277.582 474.89 277.582 462.505V441.577H352.327Z" fill="#01FFF6" />
              <path d="M491.953 257.733C501.644 265.443 503.249 279.55 495.538 289.241L347.768 474.951L277.582 419.104L425.352 233.394C433.063 223.703 447.17 222.098 456.86 229.809L491.953 257.733Z" fill="#01FFF6" />
            </g>
          </svg>

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
