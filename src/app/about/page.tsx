import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import { AuroraBackdrop } from "@/components/fx/Backdrop";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { Check } from "@/components/Icons";
import { process } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "TechVinya is a product engineering studio building web, mobile and AI software for travel, healthcare, cybersecurity and chatbot companies.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Say the hard thing early",
    body: "If a deadline is unrealistic or a feature isn't worth building, you hear it in week one — not in a retrospective after the money is spent.",
  },
  {
    title: "Small team, senior people",
    body: "We stay deliberately small. Every engagement is staffed with people who have shipped production systems in your industry before.",
  },
  {
    title: "Boring technology, on purpose",
    body: "We choose tools with long support horizons and large hiring pools, so your product stays maintainable after we've handed it over.",
  },
  {
    title: "Working software over documents",
    body: "Specifications age badly. A staging environment you can click through tells you more in five minutes than a fifty-page document.",
  },
  {
    title: "Security is not a phase",
    body: "Threat modelling, access control and audit trails are part of the build, not a hardening sprint bolted on before launch.",
  },
  {
    title: "Leave the code better than we found it",
    body: "Whether it's a greenfield build or an inherited codebase, we hand back something your next engineer can pick up without a briefing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <AuroraBackdrop variant="amber" />
        <Container className="relative">
          <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
            About {site.name}
          </p>
          <h1 className="display max-w-3xl text-5xl text-balance text-white sm:text-6xl lg:text-7xl">
            A small studio for products that can&apos;t afford to be <span className="accent-word">flaky</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
            {site.name} was founded on a simple observation: the industries where software is
            hardest to get right — travel, healthcare, security — are the ones most often served by
            generalist agencies learning on the job.
          </p>
        </Container>
      </section>

      {/* Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            <h2 className="display text-3xl text-white sm:text-4xl">Why we exist</h2>
            <p>
              Most startups don&apos;t fail because they picked the wrong framework. They fail
              because the booking flow dropped payments during the one week that mattered, because
              a compliance review stalled the enterprise deal, or because an AI feature confidently
              told a customer something untrue.
            </p>
            <p>
              Those are engineering problems with a business-sized blast radius, and they&apos;re
              the ones we&apos;ve chosen to specialise in. We build in four industries where
              correctness, uptime and regulation genuinely matter — and we build the boring
              infrastructure around them that keeps a product alive after launch day.
            </p>
            <p>
              We are a young studio and we say so plainly. What we bring is senior engineering
              experience, a narrow focus, and the kind of attention a founding client gets that a
              hundred-person agency can no longer offer.
            </p>
          </div>

          <div className="card h-fit p-8 sm:p-10">
            <h3 className="display text-lg text-white">At a glance</h3>
            <dl className="mt-6 space-y-5">
              {[
                ["Founded", String(site.founded)],
                ["Model", "Remote-first studio"],
                ["Practices", "Travel · Healthcare · Cybersecurity · AI"],
                ["Engagements", "MVP sprints, retainers, rescue projects"],
                ["Response time", "Within one business day"],
                ["Working hours", "Overlap with EU & US timezones"],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-line pb-5 last:border-0 last:pb-0">
                  <dt className="text-xs font-semibold tracking-[0.14em] text-faint uppercase">
                    {label}
                  </dt>
                  <dd className="mt-1.5 text-body">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="border-t border-line bg-surface/20">
        <SectionHeading
          eyebrow="How we work"
          title="Six things we won't compromise on"
          body="These aren't posters on a wall — they're the reasons we say no to some projects."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 50}>
              <div className="card h-full p-8 hover:border-brand/35">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand/12 text-brand">
                  <Check className="size-4" />
                </span>
                <h3 className="display mt-5 text-xl text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process recap */}
      <Section>
        <SectionHeading
          eyebrow="Engagement rhythm"
          title="What working together looks like"
          body="Predictable, visible, and easy to stop if it isn't working."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {process.map((phase, i) => (
            <Reveal key={phase.step} delay={i * 50}>
              <div className="card h-full p-6">
                <span className="font-mono text-xs text-brand">{phase.step}</span>
                <h3 className="display mt-3 text-lg text-white">{phase.title}</h3>
                <p className="mt-1 text-xs text-faint">{phase.duration}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{phase.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/contact" withArrow>
            Book an intro call
          </Button>
        </div>
      </Section>

      <CtaBanner
        title="Want to know if we're a fit?"
        body="The fastest way to find out is a short call. Bring the messy version of the problem — that's the useful one."
      />
    </>
  );
}
