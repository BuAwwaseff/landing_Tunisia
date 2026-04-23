"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/format";
import { hoverLift, hoverTilt } from "@/motion/presets";
import { prefersReducedMotion } from "@/motion/observers";

export default function SurfaceCard({
  children,
  className,
  variant = "glass",
  hover = "none",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "glass" | "accent" | "light" | "stage";
  hover?: "none" | "lift" | "tilt";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion() || hover === "none") return;

    return hover === "tilt" ? hoverTilt(element) : hoverLift(element);
  }, [hover]);

  return (
    <div
      ref={ref}
      className={cn(
        "surface",
        variant === "glass" && "surface--glass",
        variant === "accent" && "surface--accent",
        variant === "light" && "surface--light",
        variant === "stage" && "surface--stage",
        className,
      )}
    >
      {children}
    </div>
  );
}
