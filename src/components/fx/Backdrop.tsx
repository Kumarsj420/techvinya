/**
 * Decorative animated SVG backdrops. All are pure CSS-animated SVG — no JS, no
 * canvas, no libraries — and every animation is neutralised by
 * `prefers-reduced-motion` in globals.css.
 */

/** Drifting mesh blobs + orbit rings + a dashed circuit trace. The main one. */
export function AuroraBackdrop({
  className = "",
  variant = "brand",
}: {
  className?: string;
  variant?: "brand" | "violet" | "amber" | "emerald";
}) {
  const palettes = {
    brand: ["#22d3ee", "#6366f1"],
    violet: ["#a78bfa", "#22d3ee"],
    amber: ["#fbbf24", "#22d3ee"],
    emerald: ["#34d399", "#22d3ee"],
  } as const;

  const [c1, c2] = palettes[variant];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id={`blob-a-${variant}`} cx="50%" cy="50%">
            <stop offset="0%" stopColor={c1} stopOpacity="0.5" />
            <stop offset="100%" stopColor={c1} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`blob-b-${variant}`} cx="50%" cy="50%">
            <stop offset="0%" stopColor={c2} stopOpacity="0.42" />
            <stop offset="100%" stopColor={c2} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`ring-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c1} stopOpacity="0.55" />
            <stop offset="60%" stopColor={c2} stopOpacity="0.12" />
            <stop offset="100%" stopColor={c1} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Soft drifting light */}
        <circle className="drift-a" cx="230" cy="140" r="300" fill={`url(#blob-a-${variant})`} />
        <circle className="drift-b" cx="1010" cy="240" r="260" fill={`url(#blob-b-${variant})`} />

        {/* Concentric orbit rings, counter-rotating */}
        <g className="spin-slow" style={{ transformOrigin: "1000px 180px" }}>
          <circle cx="1000" cy="180" r="150" stroke={`url(#ring-${variant})`} strokeWidth="1" />
          <circle cx="1000" cy="180" r="220" stroke={`url(#ring-${variant})`} strokeWidth="1" />
          <circle cx="1150" cy="180" r="4" fill={c1} opacity="0.8" />
        </g>
        <g className="spin-reverse" style={{ transformOrigin: "180px 620px" }}>
          <circle cx="180" cy="620" r="170" stroke={`url(#ring-${variant})`} strokeWidth="1" />
          <circle cx="180" cy="450" r="3.5" fill={c2} opacity="0.7" />
        </g>

        {/* Circuit trace with marching dashes */}
        <path
          className="dash-flow"
          d="M-40 560 H240 L320 480 H560 L640 560 H900 L980 640 H1260"
          stroke={c1}
          strokeOpacity="0.28"
          strokeWidth="1.2"
          strokeDasharray="6 10"
        />
        <path
          className="dash-flow"
          style={{ animationDuration: "34s", animationDirection: "reverse" }}
          d="M-40 300 H180 L260 220 H520 L600 300 H880"
          stroke={c2}
          strokeOpacity="0.22"
          strokeWidth="1.2"
          strokeDasharray="4 12"
        />

        {/* Twinkling nodes */}
        {[
          [240, 560],
          [560, 480],
          [900, 560],
          [180, 300],
          [520, 220],
          [880, 300],
        ].map(([x, y], i) => (
          <circle
            key={`${x}-${y}`}
            className="twinkle"
            style={{ animationDelay: `${i * 0.7}s` }}
            cx={x}
            cy={y}
            r="3"
            fill={i % 2 ? c2 : c1}
          />
        ))}
      </svg>
    </div>
  );
}

/** A quieter version for mid-page section bands. */
export function SectionBackdrop({
  className = "",
  color = "#22d3ee",
}: {
  className?: string;
  color?: string;
}) {
  const id = color.replace("#", "");
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id={`sb-${id}`} cx="50%" cy="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle className="drift-b" cx="600" cy="80" r="340" fill={`url(#sb-${id})`} />
        <path
          className="dash-flow"
          d="M-40 420 H320 L400 340 H820 L900 420 H1240"
          stroke={color}
          strokeOpacity="0.16"
          strokeWidth="1"
          strokeDasharray="5 11"
        />
      </svg>
    </div>
  );
}

/** Animated conic "beam" that sits behind the big closing CTA. */
export function BeamBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="beam-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Fanned light beams from a point above the section */}
        <g className="drift-a" style={{ transformOrigin: "600px 0px" }}>
          {[-34, -17, 0, 17, 34].map((angle) => (
            <polygon
              key={angle}
              points="600,-60 560,520 640,520"
              fill="url(#beam-g)"
              transform={`rotate(${angle} 600 -60)`}
              opacity={angle === 0 ? 0.9 : 0.5}
            />
          ))}
        </g>

      </svg>
    </div>
  );
}
