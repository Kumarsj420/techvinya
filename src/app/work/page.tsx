import Link from "next/link";
import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button, Pill } from "@/components/ui";
import { Icon, ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { services, type IconName } from "@/lib/services";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Reference architectures and the anatomy of a TechVinya engagement — what we build for travel, healthcare, cybersecurity and AI clients.",
  alternates: { canonical: "/work" },
};

/**
 * We are a new studio, so this page shows reference architectures — the systems
 * we build and how they're put together — rather than client case studies we
 * haven't earned yet. Replace these with real case studies as projects ship.
 */
const blueprints: {
  slug: string;
  icon: IconName;
  vertical: string;
  title: string;
  brief: string;
  scope: string[];
  architecture: string[];
  timeline: string;
}[] = [
  {
    slug: "travel",
    icon: "compass",
    vertical: "Travel",
    title: "Multi-supplier booking platform",
    brief:
      "A booking engine that searches several supplier APIs at once, holds inventory during checkout, and reconciles payments and refunds without manual intervention.",
    scope: [
      "Federated search across supplier adapters",
      "Hold-and-confirm reservation flow",
      "Multi-currency checkout and refunds",
      "Agent console for manual rebooking",
    ],
    architecture: [
      "Next.js storefront with edge caching",
      "Supplier adapter services with circuit breakers",
      "Elasticsearch availability index",
      "Stripe payments with reconciliation jobs",
    ],
    timeline: "10–14 weeks",
  },
  {
    slug: "medical",
    icon: "pulse",
    vertical: "Healthcare",
    title: "Telehealth & patient portal",
    brief:
      "A patient-facing portal and clinician console sharing one audited clinical data layer, with encrypted video consultations and EHR write-back.",
    scope: [
      "Registration, consent and intake forms",
      "Encrypted video consultations",
      "Clinician scheduling and triage queue",
      "Immutable audit log of every record access",
    ],
    architecture: [
      "Next.js app with SSO (SAML / OIDC)",
      "FHIR R4 interoperability service",
      "Postgres with row-level security",
      "HIPAA-eligible cloud, infrastructure as code",
    ],
    timeline: "12–16 weeks",
  },
  {
    slug: "cybersecurity",
    icon: "shield",
    vertical: "Cybersecurity",
    title: "Multi-tenant security console",
    brief:
      "An analyst-facing platform that ingests events at volume, scores risk, and gives each customer a strictly isolated view of their own estate.",
    scope: [
      "Asset inventory and risk scoring",
      "Alert triage queue with timelines",
      "Tenant, org and workspace hierarchy",
      "Exportable compliance evidence",
    ],
    architecture: [
      "Kafka ingestion into ClickHouse",
      "Go detection and enrichment services",
      "Row-level tenant isolation in Postgres",
      "SSO + SCIM, CI-gated security scanning",
    ],
    timeline: "12–18 weeks",
  },
  {
    slug: "ai-chatbots",
    icon: "spark",
    vertical: "AI & Chatbots",
    title: "Cited support assistant",
    brief:
      "A customer-facing assistant that answers from your documentation with citations, completes real actions through tools, and escalates cleanly to a human.",
    scope: [
      "Document ingestion and hybrid retrieval",
      "Tool calling into billing and ticketing",
      "Web, WhatsApp and in-app channels",
      "Evaluation suite gating every prompt change",
    ],
    architecture: [
      "Claude API behind a provider-agnostic layer",
      "pgvector retrieval with reranking",
      "Guardrails: PII redaction, injection defence",
      "Per-conversation cost and latency telemetry",
    ],
    timeline: "6–10 weeks",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="glow -top-40 left-1/4 size-120 bg-brand" aria-hidden="true" />
        <Container className="relative">
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-brand uppercase">Work</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            The systems we build, in detail.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            We&apos;re a new studio, and we&apos;d rather show you real architecture than
            invent case studies. Below are the reference builds we work from — scope, stack and
            realistic timelines. Client case studies will replace them as engagements ship.
          </p>
          <div className="mt-9">
            <Button href="/contact" withArrow>
              Discuss your build
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Reference builds"
          title="Four blueprints we start from"
          body="Every project deviates from these — but they show the shape of the work, and what a realistic scope looks like."
        />

        <div className="mt-14 space-y-8">
          {blueprints.map((bp, i) => (
            <Reveal key={bp.slug} delay={i * 60}>
              <article className="card p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                    <Icon name={bp.icon} className="size-5" />
                  </span>
                  <Pill>{bp.vertical}</Pill>
                  <Pill>{bp.timeline}</Pill>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">{bp.title}</h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted">{bp.brief}</p>

                <div className="mt-8 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold tracking-[0.14em] text-white uppercase">
                      Typical scope
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {bp.scope.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-muted">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold tracking-[0.14em] text-white uppercase">
                      Architecture
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {bp.architecture.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-muted">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={`/services/${bp.slug}`}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                >
                  See the {bp.vertical.toLowerCase()} practice
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/20">
        <SectionHeading
          eyebrow="Practices"
          title="Pick the one closest to your product"
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card group p-6 hover:border-brand/45 hover:bg-surface"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon name={s.icon} className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">{s.name}</h3>
              <p className="mt-2 text-sm text-muted">{s.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand">
                View
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Be the case study."
        body="We take on a small number of projects at a time, and founding clients get our full attention. Tell us what you're building."
      />
    </>
  );
}
