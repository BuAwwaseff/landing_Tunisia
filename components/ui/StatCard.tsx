"use client";

import { useEffect, useRef } from "react";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { cn } from "@/lib/format";
import type { StatItem } from "@/schemas/landing";
import { observeOnce, prefersReducedMotion } from "@/motion/observers";
import { countMetric, stopAnimation } from "@/motion/presets";

export default function StatCard({
  item,
  variant = "glass",
  className,
}: {
  item: StatItem;
  variant?: "glass" | "accent" | "light" | "stage";
  className?: string;
}) {
  const valueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = valueRef.current;
    if (!element || item.numericValue === undefined || prefersReducedMotion()) return;

    element.textContent = `${item.prefix ?? ""}0${item.suffix ?? ""}`;
    let animation: ReturnType<typeof countMetric> | null = null;

    const cleanup = observeOnce(element, () => {
      animation = countMetric(element, 0, item.numericValue ?? 0, 1400, {
        prefix: item.prefix,
        suffix: item.suffix,
      });
    });

    return () => {
      stopAnimation(animation);
      cleanup();
    };
  }, [item.numericValue, item.prefix, item.suffix]);

  return (
    <SurfaceCard variant={variant} hover="lift" className={cn("stat-card", className)}>
      <div className="stat-card__body flex h-full flex-col gap-3 p-5">
        <span className="stat-card__label type-label text-[var(--color-foreground-soft)]">
          {item.label}
        </span>
        <span ref={valueRef} dir="ltr" className="type-metric text-[var(--color-foreground)]">
          {item.value}
        </span>
        {item.note ? (
          <span className="type-metric-secondary text-[var(--color-foreground-soft)]">
            {item.note}
          </span>
        ) : null}
      </div>
    </SurfaceCard>
  );
}
