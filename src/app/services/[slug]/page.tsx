import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { AuroraBackdrop } from "@/components/fx/Backdrop";
import { Icon, ArrowRight, Check } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return { title: "Not found" };

  return {
    title: `${service.name} software development`,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} software development | ${site.name}`,
      description: service.short,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <AuroraBackdrop variant="brand" />

        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-faint">
            <Link href="/" className="transition hover:text-brand">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="transition hover:text-brand">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-muted">{service.name}</span>
          </nav>

          <span className="inline-flex size-14 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
            <Icon name={service.icon} className="size-7" />
          </span>

          <h1 className="mt-7 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            {service.tagline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            {service.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={`/contact?service=${service.slug}`} withArrow>
              Discuss a {service.name.split(" ")[0].toLowerCase()} project
            </Button>
            <Button href="/services" variant="secondary">
              All services
            </Button>
          </div>

          <div className="mt-14 grid gap-6 border-t border-line pt-10 sm:grid-cols-3">
            {service.outcomes.map((o) => (
              <div key={o.label}>
                <p className="text-2xl font-semibold tracking-tight text-white">{o.value}</p>
                <p className="mt-1.5 text-sm text-faint">{o.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Problems */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="The usual starting point"
            title="What tends to be broken when clients call us"
            body="If two or three of these sound familiar, we've almost certainly fixed them before."
          />

          <ul className="space-y-4">
            {service.problems.map((problem, i) => (
              <Reveal key={problem} as="li" delay={i * 60}>
                <div className="flex gap-4 rounded-xl border border-line bg-surface/40 p-6">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  <p className="leading-relaxed text-muted">{problem}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="border-t border-line bg-surface/20">
        <SectionHeading
          eyebrow="What we build"
          title={`${service.name} systems, end to end`}
          body="Scoped to what your product actually needs — we don't sell modules you won't use."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {service.capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 60}>
              <div className="card h-full p-8 hover:border-brand/35">
                <span className="font-mono text-xs text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-3 text-lg text-white">{cap.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{cap.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Standards + stack */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="card p-8 sm:p-10">
            <h2 className="display text-2xl text-white">Built to these standards</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Compliance and accessibility requirements shape the architecture from the first
              sprint, so they never become a launch blocker.
            </p>
            <ul className="mt-7 space-y-3.5">
              {service.standards.map((s) => (
                <li key={s} className="flex items-center gap-3 text-body">
                  <Check className="size-4 shrink-0 text-brand" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-8 sm:p-10">
            <h2 className="display text-2xl text-white">Typical stack</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Boring, well-supported technology chosen for the next five years of your product —
              not for our CV.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-line bg-ink/60 px-3.5 py-2 font-mono text-sm text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-line bg-surface/20">
        <SectionHeading eyebrow="FAQ" title={`${service.name} questions`} />

        <div className="mt-10 max-w-3xl divide-y divide-line border-y border-line">
          {service.faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-white">
                {faq.q}
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-line text-muted transition group-open:rotate-45 group-open:border-brand/50 group-open:text-brand">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="size-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Other practices */}
      <Section>
        <h2 className="display text-2xl text-white">Other practices</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/services/${other.slug}`}
              className="card group p-6 hover:border-brand/45 hover:bg-surface"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon name={other.icon} className="size-5" />
              </span>
              <h3 className="display mt-4 text-lg text-white">{other.name}</h3>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-brand">
                View
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner
        title={`Building something in ${service.name.toLowerCase()}?`}
        body="Tell us where you are — an idea, a prototype, or a product that needs to scale. We'll give you a straight read on scope, timeline and cost."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.name} software development`,
            description: service.short,
            provider: { "@type": "Organization", name: site.name, url: site.url },
            areaServed: "Worldwide",
            serviceType: service.name,
          }),
        }}
      />
    </>
  );
}
