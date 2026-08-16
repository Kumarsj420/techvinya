/** CSS-only infinite ticker. Duplicates its children once to loop seamlessly. */
export function Marquee({
  items,
  direction = "left",
  duration = 42,
  className = "",
  renderItem,
}: {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
  renderItem?: (item: string) => React.ReactNode;
}) {
  const track = direction === "left" ? "marquee-l" : "marquee-r";

  return (
    <div
      className={`marquee-pause relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] ${className}`}
      aria-hidden="true"
    >
      <div
        className={`${track} flex shrink-0 items-center gap-4 pr-4`}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[...items, ...items].map((item, i) => (
          <div key={`${item}-${i}`} className="shrink-0">
            {renderItem ? (
              renderItem(item)
            ) : (
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-5 py-2.5 font-mono text-sm whitespace-nowrap text-muted">
                {item}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
