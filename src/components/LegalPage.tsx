import { Container } from "./ui";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-line py-14 sm:py-20">
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-faint">Last updated {updated}</p>
        </Container>
      </section>

      <Container>
        <div className="max-w-3xl space-y-8 py-14 sm:py-20 [&_a]:text-brand [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_li]:text-muted [&_p]:leading-relaxed [&_p]:text-muted [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </Container>
    </>
  );
}
