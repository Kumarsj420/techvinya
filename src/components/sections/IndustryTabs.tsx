"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/services";
import { Icon, ArrowRight, Check } from "@/components/Icons";
import {
  BrowserChrome,
  BookingScreen,
  ClinicalScreen,
  SecurityScreen,
  ChatScreen,
} from "@/components/mockups/Screens";

const screens: Record<string, { node: React.ReactNode; label: string; chrome: "brand" | "medical" | "cyber" | "ai" }> = {
  travel: { node: <BookingScreen />, label: "app.travel-client.com/search", chrome: "brand" },
  medical: { node: <ClinicalScreen />, label: "portal.health-client.com/patient", chrome: "medical" },
  cybersecurity: { node: <SecurityScreen />, label: "console.sec-client.io/triage", chrome: "cyber" },
  "ai-chatbots": { node: <ChatScreen />, label: "assistant.ai-client.com", chrome: "ai" },
};

const accents: Record<string, { text: string; bg: string; border: string; dot: string }> = {
  travel: { text: "text-travel", bg: "bg-travel/12", border: "border-travel/40", dot: "bg-travel" },
  medical: { text: "text-medical", bg: "bg-medical/12", border: "border-medical/40", dot: "bg-medical" },
  cybersecurity: { text: "text-cyber", bg: "bg-cyber/12", border: "border-cyber/40", dot: "bg-cyber" },
  "ai-chatbots": { text: "text-ai", bg: "bg-ai/12", border: "border-ai/40", dot: "bg-ai" },
};

export function IndustryTabs() {
  const [active, setActive] = useState(services[0].slug);
  const service = services.find((s) => s.slug === active) ?? services[0];
  const accent = accents[service.slug];
  const screen = screens[service.slug];

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Industry practices"
        className="flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((s) => {
          const isActive = s.slug === active;
          const a = accents[s.slug];
          return (
            <button
              key={s.slug}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`panel-${s.slug}`}
              id={`tab-${s.slug}`}
              onClick={() => setActive(s.slug)}
              className={`flex shrink-0 snap-start items-center gap-2.5 rounded-full border px-5 py-3 text-sm font-medium whitespace-nowrap transition duration-300 ${
                isActive
                  ? `${a.border} ${a.bg} ${a.text}`
                  : "border-line bg-surface/40 text-muted hover:border-line hover:text-white"
              }`}
            >
              <Icon name={s.icon} className="size-4" />
              {s.name}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={`panel-${service.slug}`}
        aria-labelledby={`tab-${service.slug}`}
        key={service.slug}
        className="animate-slide-up-in mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14"
      >
        {/* Copy side */}
        <div>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium ${accent.border} ${accent.bg} ${accent.text}`}
          >
            <span className={`size-1.5 rounded-full ${accent.dot}`} />
            {service.tagline}
          </span>

          <h3 className="display mt-5 text-3xl text-white sm:text-4xl">{service.name}</h3>

          <p className="mt-4 leading-relaxed text-muted">{service.intro}</p>

          <ul className="mt-7 space-y-3">
            {service.capabilities.slice(0, 4).map((cap) => (
              <li key={cap.title} className="flex items-center gap-3 text-sm text-body">
                <span className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full ${accent.bg} ${accent.text}`}>
                  <Check className="size-3" />
                </span>
                {cap.title}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {service.standards.slice(0, 4).map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-ink/60 px-3 py-1 font-mono text-[11px] text-faint"
              >
                {s}
              </span>
            ))}
          </div>

          <Link
            href={`/services/${service.slug}`}
            className={`group mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold whitespace-nowrap ${accent.text}`}
          >
            Explore this practice
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Screen side */}
        <div className="relative">
          <div
            className={`glow -top-10 right-0 size-72 ${accent.dot}`}
            aria-hidden="true"
          />
          <BrowserChrome label={screen.label} accent={screen.chrome} className="relative">
            {screen.node}
          </BrowserChrome>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {service.outcomes.map((o) => (
              <div key={o.label} className="rounded-xl border border-line bg-surface/40 p-3.5">
                <p className={`font-mono text-sm font-semibold ${accent.text}`}>{o.value}</p>
                <p className="mt-1 text-[11px] leading-snug text-faint">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
