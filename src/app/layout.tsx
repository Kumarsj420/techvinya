import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { site } from "@/lib/site";

/*
 * Fonts are self-hosted from src/fonts rather than pulled with
 * `next/font/google`. The Google loader downloads font files at build time, so
 * any machine or CI runner without egress to fonts.gstatic.com fails the build
 * with "Can't resolve @vercel/turbopack-next/internal/font/google/font".
 * Serving them from the repo makes the build hermetic — and removes a
 * third-party request at runtime.
 */

const geistSans = localFont({
  src: "../fonts/Geist-Variable.woff2",
  variable: "--font-brand-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "../fonts/GeistMono-Variable.woff2",
  variable: "--font-brand-mono",
  weight: "100 900",
  display: "swap",
});

/* Display face — playful, tightly-set grotesque for headlines. */
const display = localFont({
  src: "../fonts/BricolageGrotesque-Variable.woff2",
  variable: "--font-brand-display",
  weight: "200 800",
  display: "swap",
});

/* One elegant italic serif, used only for the accent word in headlines. */
const serif = localFont({
  src: "../fonts/InstrumentSerif-Italic.woff2",
  variable: "--font-brand-serif",
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "web app development",
    "travel software development",
    "healthcare software development",
    "cybersecurity software development",
    "AI chatbot development",
    "product engineering agency",
    "Next.js development company",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  description: site.description,
  email: site.email,
  foundingDate: String(site.founded),
  sameAs: Object.values(site.socials).filter(Boolean),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: site.email,
    availableLanguage: ["English", "Hindi"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${display.variable} ${serif.variable}`}
    >
      <body className="font-sans antialiased">
        <div className="noise" aria-hidden="true" />
        <ScrollProgress />

        {/* Without JS, scroll-reveal elements must not stay invisible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>

        <Header />
        <main id="main" className="pt-18">
          {children}
        </main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
