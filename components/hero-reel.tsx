"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/icon";

/**
 * Sample clips from Mixkit (free licence) — trimmed, cropped and audio-stripped into /public/videos.
 * Swap in the shop's own footage by replacing these files (keep them short, muted and under ~1.5 MB).
 */
const clips = [
  { src: "/videos/hero-wash.mp4", poster: "/videos/hero-wash.webp", label: "Wash", caption: "Freshly washed" },
  { src: "/videos/hero-care.mp4", poster: "/videos/hero-care.webp", label: "Care", caption: "Expertly finished" },
  { src: "/videos/hero-shoes.mp4", poster: "/videos/hero-shoes.webp", label: "Shoes", caption: "Shoes, renewed" },
];

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (onChange: () => void) => {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

/** Three clips that autoplay in turn and cross-fade, with segment controls and a pause button. */
export function HeroReel() {
  const [active, setActive] = useState(0);
  const [userChoice, setUserChoice] = useState<"play" | "pause" | null>(null);
  const [inView, setInView] = useState(true);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false
  );

  const frameRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Motion-sensitive visitors see still posters unless they press play themselves.
  const playing = userChoice ? userChoice === "play" : !reducedMotion;

  // Only spend bandwidth and CPU while the hero is on screen.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    io.observe(frame);
    return () => io.disconnect();
  }, []);

  // Play the active clip from the start; keep the others paused and rewound.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i !== active) {
        video.pause();
        video.currentTime = 0;
      }
    });
    barRefs.current.forEach((bar, i) => {
      if (bar) bar.style.scale = `${i < active ? 1 : 0} 1`;
    });
  }, [active]);

  useEffect(() => {
    const video = videoRefs.current[active];
    if (!video) return;
    if (!playing || !inView) {
      video.pause();
      return;
    }
    video.muted = true; // required for autoplay; set as a property since SSR omits the attribute
    video.play().catch(() => {
      /* Autoplay blocked (e.g. low-power mode) — the poster stays visible. */
    });

    // Drive the active segment's progress bar.
    let frame = 0;
    const tick = () => {
      const bar = barRefs.current[active];
      if (bar && video.duration) bar.style.scale = `${video.currentTime / video.duration} 1`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, playing, inView]);

  const next = () => setActive((a) => (a + 1) % clips.length);

  return (
    <div ref={frameRef} className="hero-image-frame">
      {clips.map((clip, i) => (
        <video
          key={clip.src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          src={clip.src}
          poster={clip.poster}
          muted
          playsInline
          disablePictureInPicture
          preload={i === active || i === (active + 1) % clips.length ? "auto" : "metadata"}
          onEnded={next}
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute inset-0 size-full object-cover saturate-[0.8] transition-opacity duration-700 ease-soft ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 z-[1] bg-linear-to-b from-transparent via-[#233d3166] to-[#233d31d9] px-6 pt-16 pb-5 text-white max-sm:px-4">
        <div className="mb-3.5 flex items-center justify-between gap-3">
          <p key={active} className="animate-fade-up text-[9px] tracking-[0.19em] uppercase" aria-live="polite">
            {clips[active].caption}
          </p>
          <button
            type="button"
            onClick={() => setUserChoice(playing ? "pause" : "play")}
            aria-label={playing ? "Pause videos" : "Play videos"}
            className="grid size-8 shrink-0 place-items-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            <Icon name={playing ? "pause" : "play"} className="size-3.5" filled={!playing} strokeWidth={2.5} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {clips.map((clip, i) => (
            <button
              key={clip.label}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${clip.label.toLowerCase()} clip`}
              aria-pressed={i === active}
              className="group/seg flex flex-col gap-2 py-1 text-left"
            >
              <span className="relative h-[3px] overflow-hidden rounded-full bg-white/25">
                <span
                  ref={(el) => {
                    barRefs.current[i] = el;
                  }}
                  className="absolute inset-0 origin-left scale-x-0 rounded-full bg-white"
                />
              </span>
              <span
                className={`text-[10px] font-semibold tracking-[0.14em] uppercase transition-opacity ${
                  i === active ? "opacity-100" : "opacity-60 group-hover/seg:opacity-90"
                }`}
              >
                0{i + 1} {clip.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
