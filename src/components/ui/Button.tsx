"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/format";
import { hoverLift } from "@/motion/presets";
import { prefersReducedMotion } from "@/motion/observers";

export default function Button({
  href,
  children,
  intent = "primary",
  size = "lg",
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  intent?: "primary" | "secondary" | "tertiary";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;

    return hoverLift(element);
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "button",
        intent === "primary" && "button--primary",
        intent === "secondary" && "button--secondary",
        intent === "tertiary" && "button--tertiary",
        size === "lg" && "button--lg",
        className,
      )}
    >
      <span className="button__label">{children}</span>
      <span className="button__icon" aria-hidden>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3.333 8H12.667M12.667 8 8.667 4M12.667 8 8.667 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
