import { Section, Button } from "./ui";
import { BeamBackdrop } from "./fx/Backdrop";
import { site } from "@/lib/site";

export function CtaBanner({
  title,
  body = "A 30-minute call, a straight answer on scope, timeline and cost — and no obligation to go further. We reply within one business day.",
}: {
  title?: React.ReactNode;
  body?: string;
}) {
  return (
    <Section>
      <div className="card card-lit relative overflow-hidden px-7 py-20 text-center sm:px-14 sm:py-24">
        <BeamBackdrop />

        {/* Oversized wordmark ghosted into the background */}
        <span
          className="display pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 text-[min(15vw,7.5rem)] leading-[1.05] text-white/2.5 select-none"
          aria-hidden="true"
        >
          TechVinya
        </span>

        <div className="relative mx-auto max-w-2xl">
          <h2 className="display text-4xl text-balance text-white sm:text-5xl lg:text-6xl">
            {title ?? (
              <>
                Tell us what you&apos;re <span className="accent-word">building</span>.
              </>
            )}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted text-pretty">{body}</p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" withArrow>
              Start a project
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-ink/50 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand/50"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
