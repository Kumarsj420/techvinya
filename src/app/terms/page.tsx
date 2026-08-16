import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms governing use of the ${site.name} website.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="16 August 2026">
      <p>
        These terms govern your use of this website. They do not govern any engagement between{" "}
        {site.legalName} and a client — that is covered by a separate written agreement.
      </p>

      <h2>Use of the site</h2>
      <p>
        You may browse and reference this site for lawful purposes. You may not attempt to gain
        unauthorised access to it, interfere with its operation, or use automated systems to submit
        the contact form.
      </p>

      <h2>Content and intellectual property</h2>
      <p>
        The text, design, code and marks on this site are owned by {site.legalName} unless stated
        otherwise. You may quote short excerpts with attribution; wholesale reproduction requires
        our written permission.
      </p>

      <h2>No warranty</h2>
      <p>
        The content here is provided for general information. Descriptions of services, timelines
        and indicative pricing are illustrative and do not constitute an offer or a binding quote.
        Any commitment we make is set out in a signed statement of work.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, {site.legalName} is not liable for indirect or consequential
        loss arising from your use of this website. Nothing in these terms limits liability that
        cannot lawfully be limited.
      </p>

      <h2>Third-party links</h2>
      <p>
        We are not responsible for the content or practices of external sites we link to.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The date at the top of this page reflects the
        most recent revision.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
