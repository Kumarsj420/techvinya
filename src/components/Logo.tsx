import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tv-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="55%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#tv-mark)" opacity="0.14" />
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="11"
        fill="none"
        stroke="url(#tv-mark)"
        strokeWidth="1.4"
        opacity="0.55"
      />
      {/* T stem + V chevron, drawn as one continuous mark */}
      <path
        d="M11 13h18M20 13v6"
        stroke="url(#tv-mark)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="m14 19 6 9 6-9"
        stroke="url(#tv-mark)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} — home`}
    >
      <LogoMark className="size-9 transition-transform duration-300 group-hover:scale-105" />
      <span className="text-lg font-semibold tracking-tight text-white">
        Tech<span className="text-brand">Vinya</span>
      </span>
    </Link>
  );
}
