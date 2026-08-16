import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const company = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "Engagements", href: "/#engagements" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/30">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Product engineering for travel, healthcare, cybersecurity and AI startups. We design,
              build and ship software that holds up in production.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href={site.socials.linkedin} label="LinkedIn">
                <path d="M6.94 8.5V19H3.6V8.5zM5.27 3.5a1.94 1.94 0 1 1 0 3.88 1.94 1.94 0 0 1 0-3.88M20.4 19h-3.34v-5.5c0-1.4-.5-2.35-1.75-2.35-.95 0-1.52.64-1.77 1.27-.09.22-.11.53-.11.85V19H10.1s.04-9.5 0-10.5h3.33v1.49c.44-.69 1.24-1.67 3.02-1.67 2.2 0 3.85 1.44 3.85 4.54z" />
              </SocialLink>
              <SocialLink href={site.socials.x} label="X">
                <path d="M17.2 3h3.3l-7.2 8.2L21.7 21h-6.6l-4.3-5.6L5.7 21H2.4l7.7-8.8L2.6 3h6.8l3.9 5.2zm-1.2 16h1.8L8.1 4.9H6.2z" />
              </SocialLink>
              <SocialLink href={site.socials.github} label="GitHub">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Industries">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {company.map((c) => (
              <FooterLink key={c.href} href={c.href}>
                {c.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Get in touch">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-muted transition hover:text-brand"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="text-sm text-muted transition hover:text-brand">
                {site.phone}
              </a>
            </li>
            <li className="text-sm text-muted">{site.address}</li>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-faint">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-faint transition hover:text-brand">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-faint transition hover:text-brand">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-[0.16em] text-white uppercase">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-muted transition hover:text-brand">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-brand/50 hover:text-brand"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}
