import { Section, Button } from "./ui";
import { site } from "@/lib/site";

export function CtaBanner({
  title = "Tell us what you're building.",
  body = "A 30-minute call, a straight answer on scope, timeline and cost — and no obligation to go further. We reply within one business day.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-xl2 border border-line bg-surface/60 px-7 py-16 text-center sm:px-14 sm:py-20">
        <div
          className="glow -top-32 left-1/2 size-104 -translate-x-1/2 bg-brand"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">{body}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" withArrow>
              Start a project
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-ink/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand/60"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
