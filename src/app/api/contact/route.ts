import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const MAX_PER_WINDOW = 5;
const WINDOW_MS = 10 * 60 * 1000;

/**
 * Best-effort in-memory rate limit. Enough to stop a naive bot on a single
 * instance; swap for Upstash/Redis if the site is ever scaled horizontally.
 */
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

// Keep the map from growing without bound on a long-lived instance.
function sweep() {
  const now = Date.now();
  for (const [key, entry] of hits) {
    if (now > entry.resetAt) hits.delete(key);
  }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  sweep();

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a real browser leaves this empty.
  if (str(body.company_website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, 100);
  const email = str(body.email, 160);
  const company = str(body.company, 120);
  const service = str(body.service, 80);
  const budget = str(body.budget, 40);
  const message = str(body.message, 4000);

  const errors: string[] = [];
  if (name.length < 2) errors.push("a name");
  if (!emailPattern.test(email)) errors.push("a valid email address");
  if (message.length < 10) errors.push("a short project description");

  if (errors.length) {
    return NextResponse.json({ error: `Please provide ${errors.join(", ")}.` }, { status: 400 });
  }

  const subject = `New enquiry — ${name}${company ? ` (${company})` : ""}`;
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Service", service || "—"],
    ["Budget", budget || "—"],
  ];

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.6;color:#0f172a">
      <h2 style="margin:0 0 16px">New enquiry via ${site.name}</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="color:#64748b">${label}</td><td><strong>${escapeHtml(value)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;font-size:14px">${escapeHtml(message)}</p>
    </div>
  `;

  const apiKey = process.env.RESEND_API_KEY;

  // Without an API key (local dev, preview builds) log the lead instead of
  // failing the submission, so the form is always testable end to end.
  if (!apiKey) {
    console.info(`[contact] ${subject}\n`, { ...Object.fromEntries(rows), message });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? `${site.name} <onboarding@resend.dev>`,
      to: (process.env.CONTACT_TO_EMAIL ?? site.email).split(",").map((s) => s.trim()),
      replyTo: email,
      subject,
      html,
      text: `${rows.map(([l, v]) => `${l}: ${v}`).join("\n")}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json(
        { error: "We couldn't send that right now. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json(
      { error: "We couldn't send that right now. Please email us directly." },
      { status: 500 },
    );
  }
}
