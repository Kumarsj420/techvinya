"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";
import { services } from "@/lib/services";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              item.href.startsWith("/") &&
              !item.href.includes("#") &&
              (pathname === item.href || pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active ? "text-brand" : "text-muted hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_24px_-8px_var(--color-brand)] transition hover:bg-brand-soft"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-lg text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="size-6"
            aria-hidden="true"
          >
            {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-ink px-5 pt-4 pb-8 md:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-line/60 py-3.5 text-base font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="mt-6 mb-2 text-xs font-semibold tracking-[0.16em] text-faint uppercase">
            Industries
          </p>
          <div className="flex flex-col">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={close}
                className="border-b border-line/40 py-3 text-sm text-muted"
              >
                {s.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={close}
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-ink"
          >
            Start a project
          </Link>
        </div>
      ) : null}
    </header>
  );
}
