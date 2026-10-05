import type { SVGProps } from "react";

type Palette = {
  bg: string;
  sole: string;
  soleStroke: string;
  soleLine: string;
  upper: string;
  stroke: string;
  toe: string;
  heel: string;
  collar: string;
  stripe: string;
  lace: string;
};

const palettes: Record<"clean" | "dirty", Palette> = {
  clean: {
    bg: "#edf1e7", sole: "#ffffff", soleStroke: "#cfd8e3", soleLine: "#54735b", upper: "#ffffff", stroke: "#cbd2c3",
    toe: "#f3f3eb", heel: "#f3f3eb", collar: "#dfe4d5", stripe: "#8e9b7e", lace: "#9aa8b8",
  },
  dirty: {
    bg: "#e8e4dc", sole: "#e3cf9a", soleStroke: "#b9a777", soleLine: "#8a7d5f", upper: "#d9d3c7", stroke: "#a89f8e",
    toe: "#cfc6b6", heel: "#cdc5b6", collar: "#b3a995", stripe: "#5f6f6b", lace: "#7a705f",
  },
};

const cleanBubbles = [
  { cx: 322, cy: 52, r: 20, tint: "#54735b" },
  { cx: 358, cy: 30, r: 11, tint: "#8e9b7e" },
  { cx: 362, cy: 80, r: 8, tint: "#54735b" },
  { cx: 56, cy: 52, r: 13, tint: "#8e9b7e" },
  { cx: 86, cy: 30, r: 6, tint: "#54735b" },
];

/** Side-view sneaker illustration used by the before/after slider. */
export function SneakerArt({ variant, ...props }: SVGProps<SVGSVGElement> & { variant: "clean" | "dirty" }) {
  const c = palettes[variant];
  return (
    <svg viewBox="0 0 400 260" {...props}>
      <rect width="400" height="260" fill={c.bg} />
      <ellipse cx="210" cy="214" rx="172" ry="11" fill="#0f1b34" opacity={variant === "dirty" ? 0.16 : 0.13} />
      <path d="M38 176q0-10 12-10h302q26 2 28 20 0 16-16 16H54q-16 0-16-14Z" fill={c.sole} stroke={c.soleStroke} strokeWidth="2" />
      <path d="M46 186h326" stroke={c.soleLine} strokeWidth="3.5" strokeLinecap="round" />
      <path
        d="M50 168l4-50q2-20 22-22l46 6q20 2 30-10l20-22q8-8 18-2l26 20q36 28 88 36l34 6q32 8 36 38Z"
        fill={c.upper}
        stroke={c.stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M76 96l46 6q20 2 30-10l4 6q-12 14-36 12l-40-6Z" fill={c.collar} />
      <path d="M50 168l4-50q2-20 22-22l6 4q4 40 22 68Z" fill={c.heel} stroke={c.stroke} strokeWidth="2" strokeLinejoin="round" />
      <path d="M302 124l36 6q32 8 36 38h-82q-2-28 10-44Z" fill={c.toe} stroke={c.stroke} strokeWidth="2" strokeLinejoin="round" />
      <path d="M300 134q-10 14-8 28" stroke={c.stroke} strokeWidth="1.5" strokeDasharray="3 4" fill="none" />
      <path d="M110 156q66-4 120-50" stroke={c.stripe} strokeWidth="8" strokeLinecap="round" fill="none" />
      <g stroke={c.lace} strokeWidth="3.5" strokeLinecap="round">
        <path d="M172 92l10-16" />
        <path d="M188 101l10-16" />
        <path d="M204 110l10-16" />
        <path d="M220 118l10-15" />
      </g>

      {variant === "clean" ? (
        <>
          {cleanBubbles.map(({ cx, cy, r, tint }) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r={r} fill="#fff" fillOpacity=".55" stroke={tint} strokeOpacity=".35" strokeWidth="1.5" />
              {/* highlight */}
              <path
                d={`M${cx - r * 0.55} ${cy - r * 0.1}a${r * 0.6} ${r * 0.6} 0 0 1 ${r * 0.45}-${r * 0.45}`}
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          ))}
        </>
      ) : (
        <>
          <g fill="#7b5a3a">
            <ellipse cx="120" cy="132" rx="16" ry="8" opacity=".35" />
            <ellipse cx="262" cy="140" rx="24" ry="8" opacity=".3" />
            <ellipse cx="336" cy="150" rx="14" ry="6" opacity=".4" />
            <ellipse cx="150" cy="190" rx="44" ry="6" opacity=".35" />
            <ellipse cx="300" cy="192" rx="36" ry="5" opacity=".4" />
            <circle cx="92" cy="122" r="5" opacity=".35" />
            <circle cx="212" cy="132" r="4" opacity=".4" />
            <circle cx="360" cy="180" r="6" opacity=".4" />
          </g>
          <path d="M70 176q30 5 60 0M214 178q36 5 70-2" stroke="#6b5136" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".35" />
        </>
      )}
    </svg>
  );
}
