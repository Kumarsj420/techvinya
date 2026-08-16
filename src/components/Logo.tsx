import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      {/* Paths carry their own 12% margin, so no transform is needed here.
          fill-current lets the mark invert for light backgrounds. */}
      <path className="fill-current" d="M61 88C61 78.0588 68.9469 70 78.75 70H327.25C337.053 70 345 78.0589 345 88V124C345 133.941 337.053 142 327.25 142H78.75C68.9469 142 61 133.941 61 124V88Z" />
      <path className="fill-current" d="M238.5 142V424C238.5 433.941 230.553 442 220.75 442H185.25C175.447 442 167.5 433.941 167.5 424V142H238.5Z" />
      <path className="fill-current" d="M327.434 179C337.271 179 345.245 187.01 345.245 196.89V405.606H274V196.89C274 187.01 281.974 179 291.811 179H327.434Z" />
      <path className="fill-current" d="M333.371 404.413V421.11C333.371 430.99 325.397 439 315.56 439H291.811C281.974 439 274 430.99 274 421.11V404.413H333.371Z" />
      <path className="fill-current" d="M444.278 257.738C451.976 263.89 453.25 275.145 447.125 282.876L329.75 431.04L274 386.484L391.376 238.32C397.501 230.589 408.706 229.308 416.403 235.46L444.278 257.738Z" />
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
      <LogoMark className="size-9 text-brand transition-transform duration-300 group-hover:scale-105" />
      {/* Wordmark uses the display face so the logo matches the site's headings
          rather than its body text. `display` supplies weight 600 and the -3.5%
          tracking; leading-none keeps the box tight against the mark. */}
      <span className="display text-xl leading-none text-white">
        Tech <span className="text-brand">Vinya</span>
      </span>
    </Link>
  );
}
