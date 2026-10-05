"use client";

import { useState } from "react";
import { SneakerArt } from "@/components/sneaker-art";

const label = "absolute top-2.5 z-[2] pointer-events-none rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[0.06em] text-white uppercase backdrop-blur-sm sm:top-4 sm:text-xs";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <div className="reveal">
      <div className="relative aspect-[400/260] touch-pan-y overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgb(0_0_0/0.55)] select-none has-[input:focus-visible]:outline-3 has-[input:focus-visible]:outline-offset-4 has-[input:focus-visible]:outline-brand-light">
        <SneakerArt variant="clean" role="img" aria-label="Sneaker after cleaning" className="absolute inset-0 size-full" />
        <SneakerArt
          variant="dirty"
          role="img"
          aria-label="Sneaker before cleaning"
          className="absolute inset-0 size-full"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        <span className={`${label} left-2.5 bg-ink/70 sm:left-4`}>Before</span>
        <span className={`${label} right-2.5 bg-brand/90 sm:right-4`}>After</span>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-[2] -ml-[1.5px] w-[3px] bg-white shadow-[0_0_12px_rgb(0_0_0/0.25)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2.5 rounded-full bg-white text-ink shadow-[0_6px_16px_rgb(0_0_0/0.25)]">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Before and after comparison slider"
          className="absolute inset-0 z-[3] m-0 size-full cursor-ew-resize appearance-none opacity-0"
        />
      </div>
      <p className="mt-4 text-center text-sm text-haze-500">White leather sneakers · Deep clean + sole unyellowing · 48 hours</p>
    </div>
  );
}
