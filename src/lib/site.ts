/**
 * Site-wide configuration.
 *
 * Contact details are read from NEXT_PUBLIC_* environment variables so they can
 * be changed without a code change, and so real addresses and phone numbers are
 * not committed to a public repository where scrapers harvest them.
 *
 * These values are NOT secrets. Anything prefixed NEXT_PUBLIC_ is inlined into
 * the JavaScript bundle and rendered into the HTML — that is the point, since
 * the site publishes them. Genuine secrets (RESEND_API_KEY) are read server-side
 * only, in src/app/api/contact/route.ts, and must never gain that prefix.
 *
 * Fallbacks are deliberately obvious placeholders: a missing variable should be
 * visible on the page, not silently wrong.
 */

const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  salesEmail: process.env.NEXT_PUBLIC_SALES_EMAIL,
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS,
  linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
  x: process.env.NEXT_PUBLIC_SOCIAL_X,
  github: process.env.NEXT_PUBLIC_SOCIAL_GITHUB,
};

/** Strips spaces, hyphens and brackets so "+91 98765 43210" becomes a tel: href. */
function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

const phone = env.phone ?? "+91 00000 00000";

export const site = {
  name: "TechVinya",
  legalName: "TechVinya Technologies",
  tagline: "Product engineering for regulated, fast-moving industries",
  description:
    "TechVinya designs and builds web apps, mobile apps and AI systems for travel, healthcare, cybersecurity and chatbot startups — from first prototype to production scale.",
  url: env.siteUrl ?? "https://techvinya.com",

  email: env.email ?? "hello@example.com",
  salesEmail: env.salesEmail ?? "sales@example.com",
  phone,
  phoneHref: telHref(phone),
  address: env.address ?? "Remote-first · India",

  founded: 2026,
  /*
   * Empty string means "no account yet" — the footer hides the icon and the
   * schema.org sameAs list drops it. Set the matching NEXT_PUBLIC_SOCIAL_*
   * variable and the link reappears with no code change.
   */
  socials: {
    linkedin: env.linkedin ?? "",
    x: env.x ?? "",
    github: env.github ?? "",
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
] as const;

export const stats = [
  { value: "4", label: "industry practices" },
  { value: "6–10", label: "weeks to first release" },
  { value: "100%", label: "senior engineers" },
  { value: "24h", label: "response time" },
] as const;
