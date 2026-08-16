import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      {/* Inset to 80% of the artboard: mask-cropped icon slots (iOS squircle,
          circular avatars) clip anything that reaches the frame edge. */}
      <g transform="translate(45 44.7) scale(0.82466)">
      <path className="fill-current" d="M8.5 46.9235C8.5 34.5393 18.5393 24.5 30.9235 24.5H344.852C357.237 24.5 367.276 34.5393 367.276 46.9235V91.7705C367.276 104.155 357.237 114.194 344.852 114.194H30.9235C18.5393 114.194 8.5 104.155 8.5 91.7705V46.9235Z" />
      <path className="fill-current" d="M232.735 114.194V465.495C232.735 477.88 222.695 487.919 210.311 487.919H165.464C153.08 487.919 143.041 477.88 143.041 465.495V114.194H232.735Z" />
      <path className="fill-brand" d="M344.852 159.041C357.237 159.041 367.276 169.08 367.276 181.464V443.072H277.582V181.464C277.582 169.08 287.621 159.041 300.005 159.041H344.852Z" />
      <path className="fill-brand" d="M352.327 441.577V462.505C352.327 474.89 342.288 484.929 329.904 484.929H300.006C287.621 484.929 277.582 474.89 277.582 462.505V441.577H352.327Z" />
      <path className="fill-brand" d="M491.953 257.733C501.644 265.443 503.249 279.55 495.538 289.241L347.768 474.951L277.582 419.104L425.352 233.394C433.063 223.703 447.17 222.098 456.86 229.809L491.953 257.733Z" />
      </g>
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
      <LogoMark className="size-9 text-white transition-transform duration-300 group-hover:scale-105" />
      {/* Wordmark uses the display face so the logo matches the site's headings
          rather than its body text. `display` supplies weight 600 and the -3.5%
          tracking; leading-none keeps the box tight against the mark. */}
      <span className="display text-xl leading-none text-white">
        Tech <span className="text-brand">Vinya</span>
      </span>
    </Link>
  );
}
