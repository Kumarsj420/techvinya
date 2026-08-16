"use client";

import { useRef } from "react";

/**
 * A card that lights up under the cursor. The highlight position is written to
 * CSS custom properties on the element itself, so moving the mouse never
 * triggers a React re-render.
 */
export function SpotlightCard({
  children,
  className = "",
  color = "1, 255, 246",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Highlight colour as an "r, g, b" triplet. */
  color?: string;
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    el.style.setProperty("--spot", "1");
  };

  const onLeave = () => {
    ref.current?.style.setProperty("--spot", "0");
  };

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ "--spot-color": color } as React.CSSProperties}
      className={`group/spot relative isolate overflow-hidden ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[var(--spot,0)] transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(var(--spot-color), 0.14), transparent 70%)",
        }}
      />
      {children}
    </Tag>
  );
}
