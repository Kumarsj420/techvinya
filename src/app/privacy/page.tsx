import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="16 August 2026">
      <p>
        This policy explains what personal information {site.legalName} (&ldquo;{site.name}&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects through this website, why we collect it, and
        what rights you have over it.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us.</strong> When you submit the contact form we collect your
          name, email address, company name, the service you selected, an optional budget range and
          the contents of your message.
        </li>
        <li>
          <strong>Technical information.</strong> Our hosting provider records standard server logs,
          including IP address, browser type and requested pages, for security and reliability
          purposes.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry and discuss a potential engagement.</li>
        <li>To prepare proposals, estimates and contracts you have asked for.</li>
        <li>To protect the site against spam and abuse.</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not add you to marketing lists without
        your explicit consent.
      </p>

      <h2>Legal basis</h2>
      <p>
        Where the GDPR applies, we process contact-form data on the basis of legitimate interest in
        responding to business enquiries, and on the basis of steps taken at your request prior to
        entering a contract.
      </p>

      <h2>Sharing and processors</h2>
      <p>
        We share personal information only with service providers that help us operate this site,
        such as our hosting provider and our transactional email provider. They process data on our
        instructions and are bound by their own data-protection obligations.
      </p>

      <h2>Retention</h2>
      <p>
        Enquiry correspondence is retained for up to 24 months so that we can pick up conversations
        that resume later, unless you ask us to delete it sooner.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of the personal information we hold
        about you, and you may object to our processing of it. Write to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond within 30 days.
      </p>

      <h2>Cookies</h2>
      <p>
        This site does not set advertising or tracking cookies. If we add analytics in future, this
        policy will be updated and consent will be requested where the law requires it.
      </p>

      <h2>Security</h2>
      <p>
        Data submitted through this site is transmitted over TLS. Access to enquiry data is limited
        to the {site.name} team members who need it.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
