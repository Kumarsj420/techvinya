/**
 * Fake-but-plausible product screens, one per practice. Pure markup and CSS —
 * no images, no chart library — so they stay crisp at any size, weigh nothing,
 * and restyle with the design tokens.
 */

/* --------------------------------------------------------- browser chrome */

export function BrowserChrome({
  children,
  label = "app.techvinya.com",
  className = "",
  accent = "brand",
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
  accent?: "brand" | "medical" | "cyber" | "ai";
}) {
  const dot = {
    brand: "bg-brand",
    medical: "bg-medical",
    cyber: "bg-cyber",
    ai: "bg-ai",
  }[accent];

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-ink-2/95 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className={`size-2.5 rounded-full ${dot} opacity-70`} />
        </div>
        <div className="flex-1 rounded-md bg-ink/70 px-3 py-1 text-center font-mono text-[10px] text-faint">
          {label}
        </div>
      </div>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------- 01 booking */

export function BookingScreen() {
  const results = [
    { code: "DEL → SIN", time: "09:20 — 17:45", price: "₹24,180", tag: "Fastest", best: true },
    { code: "DEL → SIN", time: "11:05 — 21:30", price: "₹21,940", tag: "Cheapest" },
    { code: "DEL → SIN", time: "14:40 — 23:15", price: "₹26,500", tag: "" },
  ];

  return (
    <div className="p-4 sm:p-5">
      {/* search bar */}
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-line bg-surface/70 p-2">
        <div className="flex-1 rounded-lg bg-ink/60 px-3 py-2">
          <p className="text-[9px] tracking-wider text-faint uppercase">From</p>
          <p className="text-xs font-medium text-white">Delhi (DEL)</p>
        </div>
        <div className="flex-1 rounded-lg bg-ink/60 px-3 py-2">
          <p className="text-[9px] tracking-wider text-faint uppercase">To</p>
          <p className="text-xs font-medium text-white">Singapore (SIN)</p>
        </div>
        <span className="rounded-lg bg-travel px-3 py-2.5 text-[11px] font-semibold text-ink">
          Search
        </span>
      </div>

      {/* latency badge */}
      <div className="mt-3 flex items-center gap-2">
        <span className="relative inline-flex size-1.5 rounded-full bg-travel text-travel pulse-ring" />
        <p className="font-mono text-[10px] text-muted">
          412 fares from 6 suppliers · <span className="text-travel">238ms</span>
        </p>
      </div>

      {/* results */}
      <div className="mt-3 space-y-2">
        {results.map((r, i) => (
          <div
            key={r.time}
            className={`animate-slide-up-in flex items-center gap-3 rounded-xl border p-3 ${
              r.best ? "border-travel/40 bg-travel/8" : "border-line bg-surface/40"
            }`}
            style={{ animationDelay: `${i * 140}ms` }}
          >
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink/70 font-mono text-[10px] text-muted">
              6E
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-white">{r.code}</p>
              <p className="font-mono text-[10px] text-faint">{r.time}</p>
            </div>
            {r.tag ? (
              <span
                className={`hidden rounded-full px-2 py-0.5 text-[9px] font-medium sm:inline ${
                  r.best ? "bg-travel/20 text-travel" : "bg-line/60 text-muted"
                }`}
              >
                {r.tag}
              </span>
            ) : null}
            <p className="text-xs font-semibold whitespace-nowrap text-white">{r.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ 02 clinical */

export function ClinicalScreen() {
  const vitals = [42, 55, 48, 62, 58, 71, 66, 78, 74, 85, 80, 88];

  return (
    <div className="p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-full bg-medical/15 font-mono text-[10px] font-semibold text-medical">
            AK
          </div>
          <div>
            <p className="text-xs font-medium text-white">A. Kapoor</p>
            <p className="font-mono text-[10px] text-faint">MRN 40182 · 34y</p>
          </div>
        </div>
        <span className="rounded-full bg-medical/15 px-2.5 py-1 text-[9px] font-medium text-medical">
          Stable
        </span>
      </div>

      {/* vitals sparkline */}
      <div className="mt-4 rounded-xl border border-line bg-surface/50 p-3">
        <div className="flex items-baseline justify-between">
          <p className="text-[9px] tracking-wider text-faint uppercase">Heart rate · 24h</p>
          <p className="font-mono text-[10px] text-medical">72 bpm</p>
        </div>
        <div className="mt-2.5 flex h-12 items-end gap-1">
          {vitals.map((v, i) => (
            <span
              key={i}
              className="animate-slide-up-in flex-1 rounded-sm bg-linear-to-t from-medical/25 to-medical/70"
              style={{ height: `${v}%`, animationDelay: `${i * 45}ms` }}
            />
          ))}
        </div>
      </div>

      {/* care timeline */}
      <div className="mt-3 space-y-2">
        {[
          ["09:15", "Consultation completed", true],
          ["10:02", "Lab results received", true],
          ["11:30", "Follow-up scheduled", false],
        ].map(([time, label, done], i) => (
          <div
            key={label as string}
            className="animate-slide-up-in flex items-center gap-3 rounded-lg border border-line bg-surface/40 px-3 py-2"
            style={{ animationDelay: `${i * 160}ms` }}
          >
            <span
              className={`size-1.5 shrink-0 rounded-full ${done ? "bg-medical" : "bg-faint"}`}
            />
            <p className="flex-1 text-[11px] text-body">{label as string}</p>
            <p className="font-mono text-[10px] text-faint">{time as string}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-lg border border-line/60 bg-ink/50 px-3 py-2">
        <svg viewBox="0 0 24 24" className="size-3 shrink-0 text-medical" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3 5 6v6c0 4.2 2.9 7.7 7 9 4.1-1.3 7-4.8 7-9V6z" />
        </svg>
        <p className="font-mono text-[9px] text-faint">
          Every record access written to the audit log
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ 03 security */

export function SecurityScreen() {
  const alerts = [
    { sev: "Critical", label: "Privilege escalation", host: "prod-api-04", color: "text-red-400 bg-red-400/12" },
    { sev: "High", label: "Anomalous egress", host: "vpc-edge-01", color: "text-amber-400 bg-amber-400/12" },
    { sev: "Medium", label: "Stale IAM key", host: "ci-runner-07", color: "text-cyber bg-cyber/12" },
  ];

  return (
    <div className="p-4 sm:p-5">
      <div className="grid grid-cols-3 gap-2">
        {[
          ["Risk score", "34", "text-cyber"],
          ["Open alerts", "12", "text-white"],
          ["Assets", "1,284", "text-white"],
        ].map(([label, value, tone]) => (
          <div key={label} className="rounded-xl border border-line bg-surface/50 p-2.5">
            <p className="text-[9px] tracking-wider text-faint uppercase">{label}</p>
            <p className={`mt-1 font-mono text-base font-semibold ${tone}`}>{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-[9px] tracking-wider text-faint uppercase">Triage queue</p>
        <span className="flex items-center gap-1.5 font-mono text-[9px] text-cyber">
          <span className="size-1.5 animate-blink rounded-full bg-cyber" />
          live
        </span>
      </div>

      <div className="mt-2 space-y-2">
        {alerts.map((a, i) => (
          <div
            key={a.label}
            className="animate-slide-up-in flex items-center gap-2.5 rounded-xl border border-line bg-surface/40 p-2.5"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <span className={`rounded-md px-2 py-0.5 text-[9px] font-semibold ${a.color}`}>
              {a.sev}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium text-white">{a.label}</p>
              <p className="font-mono text-[9px] text-faint">{a.host}</p>
            </div>
            <svg viewBox="0 0 24 24" className="size-3 shrink-0 text-faint" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-line bg-ink/50 p-2.5">
        <div className="flex items-center justify-between text-[9px]">
          <span className="text-faint">Tenant isolation</span>
          <span className="font-mono text-cyber">row-level · enforced</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
          <div className="h-full w-[92%] rounded-full bg-linear-to-r from-cyber to-brand" />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- 04 chat */

export function ChatScreen() {
  return (
    <div className="p-4 sm:p-5">
      <div className="flex items-center gap-2.5 border-b border-line pb-3">
        <div className="relative flex size-7 items-center justify-center rounded-full bg-ai/15 text-ai">
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
          </svg>
          <span className="absolute -right-0.5 -bottom-0.5 size-2 rounded-full border-2 border-ink-2 bg-medical" />
        </div>
        <div>
          <p className="text-xs font-medium text-white">Support Assistant</p>
          <p className="font-mono text-[9px] text-faint">grounded · cited</p>
        </div>
      </div>

      <div className="mt-3 space-y-2.5">
        <div className="animate-slide-up-in flex justify-end">
          <p className="max-w-[78%] rounded-2xl rounded-br-sm bg-line/70 px-3 py-2 text-[11px] text-body">
            Can I change the name on my booking?
          </p>
        </div>

        <div className="animate-slide-up-in" style={{ animationDelay: "300ms" }}>
          <div className="max-w-[88%] rounded-2xl rounded-bl-sm border border-ai/25 bg-ai/8 px-3 py-2.5">
            <p className="text-[11px] leading-relaxed text-body">
              Yes — name changes are free up to 24 hours after booking. After that a fee applies.
            </p>
            <div className="mt-2 flex items-center gap-1.5 border-t border-ai/20 pt-2">
              <svg viewBox="0 0 24 24" className="size-2.5 shrink-0 text-ai" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h11l5 5v11H4z" />
              </svg>
              <p className="font-mono text-[9px] text-ai/90">fare-rules.pdf · p.4</p>
            </div>
          </div>
        </div>

        <div className="animate-slide-up-in" style={{ animationDelay: "620ms" }}>
          <div className="inline-flex items-center gap-2 rounded-2xl rounded-bl-sm border border-line bg-surface/60 px-3 py-2.5">
            <span className="size-1.5 animate-blink rounded-full bg-ai" />
            <span className="size-1.5 animate-blink rounded-full bg-ai" style={{ animationDelay: "0.2s" }} />
            <span className="size-1.5 animate-blink rounded-full bg-ai" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["Change name", "Cancel", "Talk to agent"].map((chip) => (
          <span
            key={chip}
            className="truncate rounded-full border border-line bg-ink/50 px-2 py-1.5 text-center text-[9px] text-muted"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------- hero composite */

/**
 * Layered collage used in the hero: a main app window with two small cards
 * hanging off its corners. The cards are deliberately compact and anchored to
 * opposite corners so they never cover the window's own content.
 */
export function HeroCollage() {
  return (
    // Bottom padding reserves room for the card that hangs off the lower edge.
    <div className="relative mx-auto w-full max-w-md pb-20 sm:max-w-lg lg:max-w-none">
      <div className="glow -bottom-10 left-1/2 size-80 -translate-x-1/2 bg-brand" aria-hidden="true" />

      <div className="sweep relative overflow-hidden rounded-2xl">
        <BrowserChrome label="app.techvinya.com/search" className="relative">
          <BookingScreen />
        </BrowserChrome>
      </div>

      {/* bottom-right: compact assistant card */}
      <div
        className="animate-float absolute right-0 -bottom-2 w-60 sm:-right-6"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="card card-lit p-3.5 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.95)]">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-ai/15 text-ai">
              <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
              </svg>
            </span>
            <p className="text-[11px] font-medium text-white">Support Assistant</p>
          </div>
          <p className="mt-2.5 rounded-lg rounded-bl-sm border border-ai/25 bg-ai/8 px-2.5 py-2 text-[10px] leading-relaxed text-body">
            Name changes are free for 24 hours.
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="size-2.5 shrink-0 text-ai" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h11l5 5v11H4z" />
            </svg>
            <p className="font-mono text-[9px] text-ai/90">fare-rules.pdf · p.4</p>
          </div>
        </div>
      </div>

      {/* top-left: uptime stat */}
      <div className="animate-float absolute -top-6 -left-2 sm:-left-8">
        <div className="card card-lit flex items-center gap-3 px-4 py-3 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.95)]">
          <span className="relative inline-flex size-2 rounded-full bg-medical text-medical pulse-ring" />
          <div>
            <p className="font-mono text-sm font-semibold text-white">99.95%</p>
            <p className="text-[10px] whitespace-nowrap text-faint">checkout uptime</p>
          </div>
        </div>
      </div>

      {/* bottom-left: deploy pill */}
      <div
        className="animate-float absolute bottom-6 -left-2 hidden sm:-left-10 sm:block"
        style={{ animationDelay: "2.4s" }}
      >
        <div className="card flex items-center gap-2 px-3.5 py-2.5">
          <svg viewBox="0 0 24 24" className="size-3.5 text-brand" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m4.5 12.5 5 5 10-11" />
          </svg>
          <p className="font-mono text-[10px] whitespace-nowrap text-muted">deploy #248 passed</p>
        </div>
      </div>
    </div>
  );
}
