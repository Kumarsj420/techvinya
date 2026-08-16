import Link from "next/link";
import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button, Badge, Pill } from "@/components/ui";
import { Icon, ArrowRight, Check } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { services, capabilities, process, engagements } from "@/lib/services";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const techStack = [
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Claude API",
  "AWS",
  "Kubernetes",
  "Terraform",
  "Stripe",
  "FHIR",
];

const principles = [
  {
    title: "Senior engineers only",
    body: "The people in your kick-off call are the people writing the code. No bait-and-switch to a junior bench after week two.",
  },
  {
    title: "Compliance from day one",
    body: "HIPAA, GDPR, PCI and SOC 2 constraints shape the architecture at the start — not a panicked retrofit before your first enterprise deal.",
  },
  {
    title: "You own everything",
    body: "Your repositories, your cloud accounts, your data. Full documentation and a clean handover whenever you want to bring it in-house.",
  },
  {
    title: "Demos, not status reports",
    body: "Every two weeks you see working software in a staging environment you can click through yourself. Progress you can verify.",
  },
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
      <TrustStrip />
      <Industries />
      <Capabilities />
      <Principles />
      <Process />
      <Engagements />
      <Faq />
      <CtaBanner />
    </>
  );
}

/* -------------------------------------------------------------------- hero */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="glow -top-56 -left-32 size-136 bg-brand"
        aria-hidden="true"
      />
      <div
        className="glow -top-24 -right-40 size-120 bg-accent"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <Badge>Now taking projects for Q4 2026</Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
              We build the software your <span className="text-gradient">startup</span> is judged
              on.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
              TechVinya is a product engineering studio for travel, healthcare, cybersecurity and
              AI companies. Web apps, mobile apps and AI systems — designed, built and shipped to
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
            <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                  <p className="mt-1.5 text-sm text-faint">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- trust strip */

function TrustStrip() {
  return (
    <div className="border-y border-line bg-surface/25 py-7">
      <p className="container-x mb-6 text-center text-xs font-semibold tracking-[0.18em] text-faint uppercase">
        The stack we build production systems on
      </p>
      <div
        className="relative flex overflow-hidden mask-[linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
        aria-hidden="true"
      >
        <div className="marquee-track flex shrink-0 items-center gap-12 pr-12">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-sm whitespace-nowrap text-muted/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Technologies we work with: {techStack.join(", ")}.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------- industries */

function Industries() {
  return (
    <Section id="industries">
      <SectionHeading
        eyebrow="Industries"
        title="Four practices. Deep context in each."
        body="Generalist agencies relearn your domain on your budget. We've concentrated on four industries where the hard part isn't the interface — it's the regulation, the integrations and the load."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 70}>
            <Link
              href={`/services/${service.slug}`}
              className="card group flex h-full flex-col p-8 hover:-translate-y-1 hover:border-brand/45 hover:bg-surface"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                <Icon name={service.icon} />
              </span>

              <h3 className="mt-6 text-xl font-semibold text-white">{service.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{service.short}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.standards.slice(0, 3).map((standard) => (
                  <Pill key={standard}>{standard}</Pill>
                ))}
              </div>

              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Explore {service.name.split(" ")[0].toLowerCase()} work
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------ capabilities */

function Capabilities() {
  return (
    <Section id="capabilities" className="border-t border-line bg-surface/20">
      <SectionHeading
        eyebrow="Capabilities"
        title="One team, the whole product"
        body="Design, engineering and infrastructure under one roof — so nobody is waiting on a hand-off between three vendors."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.title} delay={i * 50}>
            <div className="group h-full bg-ink p-8 transition-colors duration-300 hover:bg-surface">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand/20">
                <Icon name={cap.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{cap.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{cap.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- principles */

function Principles() {
  return (
    <Section id="why">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why TechVinya"
            title="An agency that behaves like your own team"
            body="We're a small studio by choice. That means you get the people you met, working the way you'd want an in-house team to work."
          />
          <div className="mt-9">
            <Button href="/about" variant="secondary" withArrow>
              How we work
            </Button>
          </div>
        </div>

        <ul className="space-y-5">
          {principles.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 70}>
              <div className="card flex gap-5 p-7 hover:border-brand/35">
                <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/12 text-brand">
                  <Check className="size-4" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- process */

function Process() {
  return (
    <Section id="process" className="border-t border-line bg-surface/20">
      <SectionHeading
        eyebrow="Process"
        title="From first call to live product"
        body="A rhythm we've refined so you always know what's happening, what's next, and what it costs."
        align="center"
      />

      <ol className="relative mt-16 space-y-4 md:space-y-0">
        {/* Connecting rail on desktop */}
        <div
          className="absolute top-0 left-[1.4rem] hidden h-full w-px bg-linear-to-b from-brand/60 via-line to-transparent md:block"
          aria-hidden="true"
        />

        {process.map((phase, i) => (
          <Reveal key={phase.step} as="li" delay={i * 60}>
            <div className="relative flex flex-col gap-4 rounded-xl2 border border-line bg-ink/50 p-7 md:ml-0 md:flex-row md:items-start md:gap-8 md:border-0 md:bg-transparent md:py-8 md:pl-16">
              <span className="absolute left-0 hidden size-11 items-center justify-center rounded-full border border-brand/35 bg-ink font-mono text-xs font-semibold text-brand md:inline-flex">
                {phase.step}
              </span>

              <div className="md:w-52 md:shrink-0">
                <h3 className="text-xl font-semibold text-white">
                  <span className="mr-2 font-mono text-sm text-brand md:hidden">{phase.step}</span>
                  {phase.title}
                </h3>
                <p className="mt-1.5 text-sm text-faint">{phase.duration}</p>
              </div>

              <p className="leading-relaxed text-muted md:flex-1 md:pt-1">{phase.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/* ------------------------------------------------------------- engagements */

function Engagements() {
  return (
    <Section id="engagements">
      <SectionHeading
        eyebrow="Engagements"
        title="Three ways to work with us"
        body="Every project is scoped and quoted individually — these are the shapes most clients start from."
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {engagements.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 70}>
            <div
              className={`card flex h-full flex-col p-8 ${
                plan.highlight
                  ? "border-brand/45 bg-surface shadow-[0_0_60px_-24px_var(--color-brand)]"
                  : ""
              }`}
            >
              {plan.highlight ? (
                <span className="mb-5 inline-flex w-fit rounded-full bg-brand px-3 py-1 text-xs font-semibold text-ink">
                  Most popular
                </span>
              ) : null}

              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2.5 text-sm text-muted">{plan.summary}</p>

              <div className="mt-7 border-y border-line py-5">
                <p className="text-2xl font-semibold text-white">{plan.price}</p>
                <p className="mt-1 text-sm text-faint">{plan.duration}</p>
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
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------------- faq */

function Faq() {
  return (
    <Section id="faq" className="border-t border-line bg-surface/20">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we get asked first"
          body="Something not covered here? Ask us directly — we answer plainly."
        />

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium text-white marker:hidden">
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

