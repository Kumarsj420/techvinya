export const site = {
  name: "TechVinya",
  legalName: "TechVinya Technologies",
  tagline: "Product engineering for regulated, fast-moving industries",
  description:
    "TechVinya designs and builds web apps, mobile apps and AI systems for travel, healthcare, cybersecurity and chatbot startups — from first prototype to production scale.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://techvinya.com",
  email: "hello@techvinya.com",
  salesEmail: "sales@techvinya.com",
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  address: "Remote-first · India",
  founded: 2026,
  socials: {
    linkedin: "https://www.linkedin.com/company/techvinya",
    x: "https://x.com/techvinya",
    github: "https://github.com/techvinya",
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
