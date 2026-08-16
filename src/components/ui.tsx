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
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/* ------------------------------------------------------------- typography */

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-brand uppercase">
      <span className="h-px w-6 bg-brand/50" aria-hidden="true" />
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
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-brand uppercase">
            {eyebrow}
          </p>
        ) : (
          <Eyebrow>{eyebrow}</Eyebrow>
        )
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">{body}</p> : null}
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

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200";

const buttonVariants = {
  primary:
    "bg-brand text-ink hover:bg-brand-soft shadow-[0_0_28px_-6px_var(--color-brand)] hover:shadow-[0_0_36px_-4px_var(--color-brand)]",
  secondary: "border border-line bg-surface/60 text-white hover:border-brand/60 hover:bg-surface-2",
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
    <Link href={href} className={`${buttonBase} ${buttonVariants[variant]} ${className}`}>
      {children}
      {withArrow ? <ArrowRight /> : null}
    </Link>
  );
}

/* ------------------------------------------------------------------ misc */

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface/70 px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3.5 py-1.5 text-xs font-medium text-brand-soft">
      <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
      {children}
    </span>
  );
}
