import Link from "next/link";
import { ArrowRight } from "./Icons";

/* ---------------------------------------------------------------- layout */

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <Container className="relative">{children}</Container>
    </section>
  );
}

/* ------------------------------------------------------------- typography */

export function Eyebrow({
  children,
  className = "text-brand",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mb-4 flex items-center gap-2.5 font-mono text-[11px] font-medium tracking-[0.22em] uppercase ${className}`}
    >
      <span className="h-px w-7 bg-current opacity-50" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        centered ? (
          <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.22em] text-brand uppercase">
            {eyebrow}
          </p>
        ) : (
          <Eyebrow>{eyebrow}</Eyebrow>
        )
      ) : null}
      <h2 className="display text-4xl text-balance text-white sm:text-5xl">{title}</h2>
      {body ? (
        <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">{body}</p>
      ) : null}
    </div>
  );
}

/* ---------------------------------------------------------------- buttons */

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  withArrow?: boolean;
};

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300";

const variants = {
  primary:
    "bg-brand text-ink shadow-[0_0_0_0_rgba(1,255,246,0.5)] hover:shadow-[0_10px_40px_-8px_rgba(1,255,246,0.7)] hover:-translate-y-0.5",
  secondary:
    "border border-line bg-surface/50 text-white backdrop-blur-sm hover:border-brand/50 hover:bg-surface hover:-translate-y-0.5",
  ghost: "text-body hover:text-brand",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {/* shine that sweeps across on hover */}
      {variant === "primary" ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
        />
      ) : null}
      <span className="relative">{children}</span>
      {withArrow ? (
        <ArrowRight className="relative size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
      ) : null}
    </Link>
  );
}

/* ------------------------------------------------------------------ misc */

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-brand/8 py-2 pr-4 pl-2.5 text-xs font-medium text-brand-soft backdrop-blur-sm">
      <span className="relative inline-flex size-1.5 rounded-full bg-brand text-brand pulse-ring" />
      {children}
    </span>
  );
}

/** Big translucent section number used to anchor major sections. */
export function SectionIndex({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="display pointer-events-none absolute -top-6 right-0 text-8xl text-white/4 select-none sm:text-9xl"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
