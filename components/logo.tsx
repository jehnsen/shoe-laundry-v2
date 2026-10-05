import { useId } from "react";
import { site } from "@/lib/site";

/** Three soap bubbles in the studio's signature green. Keep in sync with app/icon.svg. */
export function LogoMark({ className = "size-10" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={`shrink-0 ${className}`}>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#365d43" />
          <stop offset="1" stopColor="#234432" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill={`url(#${id}-bg)`} />
      <circle cx="27" cy="37" r="14" fill="#fff" fillOpacity=".95" />
      <circle cx="44" cy="22" r="8.5" fill="#fff" fillOpacity=".85" />
      <circle cx="47" cy="44" r="5" fill="#fff" fillOpacity=".7" />
      <path d="M19.5 33.5a8.5 8.5 0 0 1 6-6" stroke="#365d43" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M40 19.5a4.5 4.5 0 0 1 3-2.6" stroke="#234432" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <a href="#top" aria-label={`${site.name} home`} className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[25px] font-semibold tracking-[-0.03em] ${light ? "text-white" : "text-ink"}`}>{site.logo.primary}</span>
        <span
          className={`mt-1 text-[8px] font-medium tracking-[0.18em] uppercase ${light ? "text-brand-light" : "text-brand"}`}
        >
          {site.logo.secondary}
        </span>
      </span>
    </a>
  );
}
