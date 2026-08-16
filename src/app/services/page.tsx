import Link from "next/link";
import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button, Pill } from "@/components/ui";
import { AuroraBackdrop } from "@/components/fx/Backdrop";
import { Icon, ArrowRight, Check } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { services, capabilities } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web and mobile app development, AI engineering, cloud infrastructure and product design for travel, healthcare, cybersecurity and AI chatbot startups.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <AuroraBackdrop variant="brand" />
        <Container className="relative">
          <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
            Services
          </p>
          <h1 className="display max-w-3xl text-5xl text-balance text-white sm:text-6xl lg:text-7xl">
            Everything between an idea and a <span className="accent-word">product</span> in production.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            We take on the whole build — discovery, design, engineering, infrastructure and the
            unglamorous launch work that decides whether a product survives contact with real
            users.
          </p>
        </Container>
      </section>

      {/* Industry practices */}
      <Section id="industries">
        <SectionHeading
          eyebrow="Industry practices"
          title="Where we go deep"
          body="Four verticals we know well enough to challenge your assumptions, not just take instructions."
        />

        <div className="mt-14 space-y-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <Link
                href={`/services/${service.slug}`}
                className="card group grid gap-8 p-8 hover:border-brand/45 hover:bg-surface sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center"
              >
                <span className="inline-flex size-14 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                  <Icon name={service.icon} className="size-7" />
                </span>

                <div>
                  <h3 className="display text-2xl text-white">{service.name}</h3>
                  <p className="mt-2 text-brand-soft">{service.tagline}</p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">{service.short}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.standards.map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap text-brand">
                  View practice
                  <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Cross-cutting capabilities */}
      <Section className="border-t border-line bg-surface/20">
        <SectionHeading
          eyebrow="Capabilities"
          title="What we actually do all day"
          body="The disciplines behind every project, whichever industry it sits in."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 50}>
              <div className="card h-full p-8 hover:border-brand/35">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon name={cap.icon} className="size-5" />
                </span>
                <h3 className="display mt-5 text-xl text-white">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{cap.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What's always included */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Included as standard"
            title="The parts other quotes leave out"
            body="These aren't line items you negotiate up. They're how we build, on every engagement."
          />

          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {[
              "Automated test suite",
              "CI/CD pipeline",
              "Infrastructure as code",
              "Error tracking & alerting",
              "Performance budgets",
              "WCAG 2.2 AA accessibility",
              "Technical SEO",
              "Security review",
              "Architecture documentation",
              "Runbook & handover",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted">
                <Check className="size-4 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <Button href="/contact" withArrow>
            Get a scoped estimate
          </Button>
        </div>
      </Section>

      <CtaBanner
        title="Not sure which of these you need?"
        body="Describe the problem in plain language. We'll tell you what it would take to solve — and whether we're the right people to do it."
      />
    </>
  );
}
