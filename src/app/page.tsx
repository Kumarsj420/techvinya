import Link from "next/link";
import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button, Badge, Eyebrow } from "@/components/ui";
import { Icon, Check } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { AuroraBackdrop, SectionBackdrop } from "@/components/fx/Backdrop";
import { Counter } from "@/components/fx/Counter";
import { SpotlightCard } from "@/components/fx/SpotlightCard";
import { Marquee } from "@/components/fx/Marquee";
import { HeroCollage } from "@/components/mockups/Screens";
import { IndustryTabs } from "@/components/sections/IndustryTabs";
import { capabilities, process, engagements } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const stackRow = [
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Claude API",
  "AWS",
];

const practiceRow = [
  "Kubernetes",
  "Terraform",
  "Stripe",
  "FHIR R4",
  "ClickHouse",
  "pgvector",
  "Kafka",
  "Go",
];

const heroStats = [
  { value: 4, suffix: "", label: "industry practices" },
  { value: 6, suffix: "wk", label: "to first release" },
  { value: 100, suffix: "%", label: "senior engineers" },
  { value: 24, suffix: "h", label: "response time" },
];

const compliance = [
  "HIPAA-aligned",
  "GDPR",
  "SOC 2 readiness",
  "PCI-DSS aware",
  "ISO 27001 practices",
  "WCAG 2.2 AA",
];

const comparison = [
  { point: "Who writes your code", them: "A junior bench after the pitch", us: "The seniors you met on day one" },
  { point: "Compliance", them: "A hardening sprint before launch", us: "Shaped into the architecture in week one" },
  { point: "Progress reporting", them: "A slide deck every fortnight", us: "A staging URL you can click through" },
  { point: "Ownership", them: "Their repos, their cloud, their lock-in", us: "Your repos, your cloud, from commit one" },
  { point: "After launch", them: "A support ticket queue", us: "On-call with you through first traffic" },
];

const faqs = [
  {
    q: "How quickly can you start?",
    a: "Usually within one to two weeks. Discovery can often begin sooner — we'll tell you honestly on the first call rather than promising a date we can't hold.",
  },
  {
    q: "What does a typical project cost?",
    a: "An MVP sprint starts around $12k for six to eight weeks. Ongoing product partnerships are a monthly retainer sized to the squad. You get a fixed estimate after discovery, before any build work begins.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Frequently. We translate between business goals and technical decisions, and we'll tell you when the cheaper option is good enough rather than upselling architecture you don't need yet.",
  },
  {
    q: "Who owns the code and the IP?",
    a: "You do, completely, from the first commit. We work in your repositories and your cloud accounts wherever possible.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes — that's our Rescue & Scale engagement. We audit the code, architecture and security, give you a prioritised plan, and then fix the things that are actually blocking you.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TickerBand />
      <StatBand />
      <Practices />
      <CapabilityBento />
      <ProcessRail />
      <Comparison />
      <ComplianceStrip />
      <Engagements />
      <Faq />
      <CtaBanner />
    </>
  );
}

/* -------------------------------------------------------------------- hero */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32">
      <AuroraBackdrop />
      <div className="grid-bg absolute inset-0" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <Reveal>
              <Badge>Now taking projects for Q4 2026</Badge>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display mt-7 text-5xl text-balance text-white sm:text-6xl lg:text-7xl">
                We build the software your startup is{" "}
                <span className="accent-word">judged</span> on.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty">
                A product engineering studio for travel, healthcare, cybersecurity and AI
                companies. Web apps, mobile apps and AI systems — designed, built and shipped to
                production by senior engineers who have done it before.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/contact" withArrow>
                  Start a project
                </Button>
                <Button href="/services" variant="secondary">
                  See what we build
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {["#01fff6", "#34d399", "#a78bfa", "#fbbf24"].map((c) => (
                    <span
                      key={c}
                      className="size-8 rounded-full border-2 border-ink"
                      style={{ background: `linear-gradient(140deg, ${c}, ${c}44)` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted">
                  Four practices, one senior team —{" "}
                  <Link href="/about" className="text-brand hover:text-brand-soft">
                    how we work
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pl-6">
            <HeroCollage />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ ticker band */

function TickerBand() {
  return (
    <div className="relative border-y border-line bg-surface/20 py-8">
      <p className="container-x mb-5 text-center font-mono text-[11px] tracking-[0.22em] text-faint uppercase">
        The stack we build production systems on
      </p>
      <div className="space-y-3">
        <Marquee items={stackRow} direction="left" duration={44} />
        <Marquee items={practiceRow} direction="right" duration={54} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- stat band */

function StatBand() {
  return (
    <Section className="py-14 sm:py-16">
      <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {heroStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 70}>
            <div className="border-l border-line pl-5">
              <dd className="display text-4xl text-white sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 text-sm text-faint">{stat.label}</dt>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}

/* -------------------------------------------------------------- practices */

function Practices() {
  return (
    <Section id="industries" className="border-t border-line">
      <SectionBackdrop color="#01fff6" />
      <SectionHeading
        eyebrow="Industry practices"
        title={
          <>
            Four practices. <span className="accent-word">Deep</span> context in each.
          </>
        }
        body="Generalist agencies relearn your domain on your budget. We've concentrated on four industries where the hard part isn't the interface — it's the regulation, the integrations and the load."
      />

      <div className="mt-14">
        <IndustryTabs />
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- bento */

function CapabilityBento() {
  // Tiles a 6-column grid exactly: a tall feature card beside two stacked
  // cards, then a row of three. Any other split leaves a hole in the grid.
  const spans = [
    "lg:col-span-3 lg:row-span-2",
    "lg:col-span-3",
    "lg:col-span-3",
    "lg:col-span-2",
    "lg:col-span-2",
    "lg:col-span-2",
  ];

  return (
    <Section id="capabilities" className="border-t border-line bg-ink-2/40">
      <SectionHeading
        eyebrow="Capabilities"
        title={
          <>
            One team, the <span className="accent-word">whole</span> product
          </>
        }
        body="Design, engineering and infrastructure under one roof — so nobody is waiting on a hand-off between three vendors."
        align="center"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-6">
        {capabilities.map((cap, i) => {
          const feature = i === 0;
          return (
            <Reveal key={cap.title} delay={i * 60} className={spans[i]}>
              <SpotlightCard className="card card-lit flex h-full flex-col justify-between p-7 transition hover:-translate-y-1 hover:border-brand/40 sm:p-8">
                <div>
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                    <Icon name={cap.icon} className="size-5" />
                  </span>
                  <h3
                    className={`display mt-6 text-white ${feature ? "text-2xl sm:text-3xl" : "text-xl"}`}
                  >
                    {cap.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{cap.body}</p>
                </div>

                {feature ? (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {["Discovery", "Design", "Build", "Ship", "Scale"].map((step) => (
                      <span
                        key={step}
                        className="rounded-full border border-line bg-ink/50 px-3 py-1.5 font-mono text-[11px] text-faint"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                ) : null}
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- process */

function ProcessRail() {
  return (
    <Section id="process" className="border-t border-line">
      <SectionBackdrop color="#6366f1" />
      <SectionHeading
        eyebrow="Process"
        title={
          <>
            From first call to <span className="accent-word">live</span> product
          </>
        }
        body="A rhythm we've refined so you always know what's happening, what's next, and what it costs."
        align="center"
      />

      <ol className="mt-16 grid gap-4 lg:grid-cols-5">
        {process.map((phase, i) => (
          <Reveal key={phase.step} as="li" delay={i * 70}>
            <SpotlightCard className="card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-brand/40">
              <div className="flex items-center justify-between">
                <span className="display text-3xl text-white/10 transition-colors duration-300 group-hover:text-brand/30">
                  {phase.step}
                </span>
                <span className="rounded-full border border-line bg-ink/50 px-2.5 py-1 font-mono text-[10px] text-faint">
                  {phase.duration}
                </span>
              </div>

              {/* connector rail */}
              <div className="mt-5 h-px w-full bg-linear-to-r from-brand/50 to-transparent" />

              <h3 className="display mt-5 text-xl text-white">{phase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{phase.body}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/* ------------------------------------------------------------ comparison */

function Comparison() {
  return (
    <Section className="border-t border-line bg-ink-2/40">
      <SectionHeading
        eyebrow="Why TechVinya"
        title={
          <>
            The <span className="accent-word">difference</span> shows up in month three
          </>
        }
        body="Every agency sounds the same in the pitch. Here's where the paths separate."
      />

      <Reveal>
        <div className="card mt-12 overflow-hidden p-0">
          {/* header row */}
          <div className="grid grid-cols-[1fr_1fr] border-b border-line sm:grid-cols-[1.2fr_1fr_1fr]">
            <div className="hidden p-5 sm:block" />
            <div className="border-l border-line p-5">
              <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
                Typical agency
              </p>
            </div>
            <div className="border-l border-line bg-brand/6 p-5">
              <p className="font-mono text-[11px] tracking-[0.18em] text-brand uppercase">
                TechVinya
              </p>
            </div>
          </div>

          {comparison.map((row) => (
            <div
              key={row.point}
              className="grid grid-cols-[1fr_1fr] border-b border-line last:border-0 sm:grid-cols-[1.2fr_1fr_1fr]"
            >
              <p className="col-span-2 px-5 pt-5 text-sm font-medium text-white sm:col-span-1 sm:py-5">
                {row.point}
              </p>
              <div className="flex items-start gap-2.5 border-l border-line p-5 sm:border-l">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 size-4 shrink-0 text-faint"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
                <p className="text-sm text-faint">{row.them}</p>
              </div>
              <div className="flex items-start gap-2.5 border-l border-line bg-brand/6 p-5">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                <p className="text-sm text-body">{row.us}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------- compliance strip */

function ComplianceStrip() {
  return (
    <div className="relative border-y border-line py-10">
      <Container>
        <div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-between">
          <p className="max-w-xs text-center text-sm text-muted lg:text-left">
            Built against the standards your enterprise buyers and auditors will ask about.
          </p>
          <div className="flex max-w-3xl flex-wrap justify-center gap-2.5 lg:justify-end">
            {compliance.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/50 px-4 py-2.5 text-sm text-body"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-3.5 text-brand"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M12 3 5 6v6c0 4.2 2.9 7.7 7 9 4.1-1.3 7-4.8 7-9V6z" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

/* ------------------------------------------------------------ engagements */

function Engagements() {
  return (
    <Section id="engagements">
      <SectionHeading
        eyebrow="Engagements"
        title={
          <>
            Three ways to <span className="accent-word">work</span> with us
          </>
        }
        body="Every project is scoped and quoted individually — these are the shapes most clients start from."
        align="center"
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {engagements.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 70}>
            <SpotlightCard
              className={`card flex h-full flex-col p-8 transition hover:-translate-y-1 ${
                plan.highlight
                  ? "card-lit border-brand/45 shadow-[0_0_80px_-30px_rgba(1,255,246,0.8)]"
                  : "hover:border-brand/35"
              }`}
            >
              {/* Reserved on every card so the price rows align across all three. */}
              <div className="mb-5 h-6">
                {plan.highlight ? (
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-ink">
                    Most popular
                  </span>
                ) : null}
              </div>

              <h3 className="display text-2xl text-white">{plan.name}</h3>
              <p className="mt-2.5 text-sm text-muted">{plan.summary}</p>

              <div className="mt-7 border-y border-line py-5">
                <p className="display text-3xl text-white">{plan.price}</p>
                <p className="mt-1.5 font-mono text-xs text-faint">{plan.duration}</p>
              </div>

              <ul className="mt-7 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={plan.highlight ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                Talk to us
              </Button>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------------- faq */

function Faq() {
  return (
    <Section id="faq" className="border-t border-line bg-ink-2/40">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="display text-4xl text-balance text-white sm:text-5xl">
            Questions we get <span className="accent-word">asked</span> first
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Something not covered here? Ask us directly — we answer plainly.
          </p>
          <Button href="/contact" variant="secondary" className="mt-8" withArrow>
            Ask a question
          </Button>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium text-white transition group-hover:text-brand-soft marker:hidden">
                {faq.q}
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition duration-300 group-open:rotate-45 group-open:border-brand/50 group-open:bg-brand/10 group-open:text-brand">
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
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </Section>
  );
}
