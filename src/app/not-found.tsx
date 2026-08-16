import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { services } from "@/lib/services";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="glow -top-40 left-1/2 size-104 -translate-x-1/2 bg-brand" aria-hidden="true" />

      <Container className="relative text-center">
        <p className="font-mono text-sm text-brand">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          That page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
          The link may be out of date. Here&apos;s where most people are heading.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" withArrow>
            Back to home
          </Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-muted transition hover:border-brand/50 hover:text-brand"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
