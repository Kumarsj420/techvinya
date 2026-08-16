import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { Icon, Check } from "@/components/Icons";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with TechVinya. Tell us what you're building in travel, healthcare, cybersecurity or AI — we reply within one business day.",
  alternates: { canonical: "/contact" },
};

const expectations = [
  "A reply from a person, within one business day",
  "A 30-minute call to understand the problem properly",
  "A written scope, timeline and fixed estimate after discovery",
  "No pressure, no drip campaign, no reselling your details",
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service: serviceSlug } = await searchParams;
  const preselected = serviceSlug ? getService(serviceSlug)?.name : undefined;

  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="glow -top-40 left-1/3 size-120 bg-brand" aria-hidden="true" />
        <Container className="relative">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            Contact
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Let&apos;s talk about what you&apos;re building.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            Whether it&apos;s a rough idea or a product already in production, send us the details
            and we&apos;ll come back with honest questions and a realistic view of the work.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <ContactForm defaultService={preselected ?? ""} />
          </div>

          <aside className="order-1 space-y-6 lg:order-2">
            <div className="card p-8">
              <h2 className="text-lg font-semibold text-white">What happens next</h2>
              <ul className="mt-5 space-y-3.5">
                {expectations.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-8">
              <h2 className="text-lg font-semibold text-white">Reach us directly</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-faint">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="text-brand hover:text-brand-soft">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-faint">New business</dt>
                  <dd>
                    <a
                      href={`mailto:${site.salesEmail}`}
                      className="text-brand hover:text-brand-soft"
                    >
                      {site.salesEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-faint">Phone</dt>
                  <dd>
                    <a href={site.phoneHref} className="text-body hover:text-brand">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-faint">Based</dt>
                  <dd className="text-body">{site.address}</dd>
                </div>
              </dl>
            </div>

            <div className="card p-8">
              <h2 className="text-lg font-semibold text-white">Our practices</h2>
              <ul className="mt-5 space-y-3">
                {services.map((s) => (
                  <li key={s.slug} className="flex items-center gap-3 text-sm text-muted">
                    <span className="inline-flex size-8 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon name={s.icon} className="size-4" />
                    </span>
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
