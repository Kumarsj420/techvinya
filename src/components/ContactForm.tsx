"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { ArrowRight, Check } from "./Icons";

const budgets = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-faint transition outline-none focus:border-brand/70 focus:ring-2 focus:ring-brand/20";

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card flex flex-col items-start gap-4 p-8 sm:p-10">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand/15 text-brand">
          <Check className="size-6" />
        </span>
        <h3 className="text-2xl font-semibold text-white">Thanks — that&apos;s landed.</h3>
        <p className="text-muted">
          We read every enquiry ourselves. Expect a reply within one business day, usually with a
          couple of questions and a suggested time to talk.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-brand hover:text-brand-soft"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8" noValidate={false}>
      {/* Honeypot — hidden from humans, irresistible to bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company_website">Do not fill this in</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Priya Sharma"
            className={fieldClass}
          />
        </Field>

        <Field label="Work email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={160}
            autoComplete="email"
            placeholder="priya@company.com"
            className={fieldClass}
          />
        </Field>

        <Field label="Company" htmlFor="company" optional>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={120}
            autoComplete="organization"
            placeholder="Acme Travel"
            className={fieldClass}
          />
        </Field>

        <Field label="What do you need?" htmlFor="service">
          <select
            id="service"
            name="service"
            required
            defaultValue={defaultService}
            className={`${fieldClass} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </Field>

        <Field label="Budget range" htmlFor="budget" className="sm:col-span-2">
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className={`${fieldClass} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Prefer not to say</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Tell us about the project" htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            minLength={10}
            maxLength={4000}
            placeholder="What are you building, who is it for, and what's the deadline you're working towards?"
            className={`${fieldClass} resize-y`}
          />
        </Field>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-brand-soft disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
          {status === "sending" ? null : <ArrowRight />}
        </button>
        <p className="text-xs text-faint">
          We reply within one business day. No newsletters, no reselling your details.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className = "",
  optional = false,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
  optional?: boolean;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-body">
        {label}
        {optional ? <span className="ml-1.5 text-xs text-faint">optional</span> : null}
      </label>
      {children}
    </div>
  );
}
