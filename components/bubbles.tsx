import type { CSSProperties } from "react";

export type Bubble = {
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  tint?: "brand" | "shoe" | "light";
  /** Seconds; negative values start the drift mid-cycle so bubbles don't move in sync. */
  delay?: number;
  duration?: number;
  className?: string;
};

/** Decorative soap bubbles. Place inside a `relative` (and usually `overflow-hidden`) parent. */
export function Bubbles({ items, className = "" }: { items: Bubble[]; className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {items.map((b, i) => {
        const style: CSSProperties = {
          width: b.size,
          height: b.size,
          top: b.top,
          left: b.left,
          right: b.right,
          bottom: b.bottom,
          animationDelay: `${b.delay ?? -i * 1.7}s`,
          animationDuration: `${b.duration ?? 8 + (i % 4) * 1.5}s`,
        };
        return <span key={i} data-tint={b.tint ?? "brand"} className={`bubble animate-bubble ${b.className ?? ""}`} style={style} />;
      })}
    </div>
  );
}
