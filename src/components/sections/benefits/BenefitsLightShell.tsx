"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, stagger } from "animejs";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { cn } from "@/lib/format";
import { observeOnce, prefersReducedMotion } from "@/motion/observers";
import type { MarketContent } from "@/schemas/landing";

type BenefitsProps = {
  content: MarketContent["benefits"];
  direction: "ltr" | "rtl";
};

function BenefitIcon({ icon }: { icon?: string }) {
  if (icon === "payouts") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 7h18M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M8 15h8M8 11h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "support") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M7 14v3a2 2 0 0 1-2 2H4v-5a2 2 0 0 1 2-2h1Zm10 0h1a2 2 0 0 1 2 2v5h-1a2 2 0 0 1-2-2v-3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M9 19h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "creative") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3c4.97 0 9 2.686 9 6s-4.03 6-9 6c-.474 0-.94-.024-1.395-.072L6 21l1.213-3.213C4.635 16.745 3 14.979 3 13c0-3.314 4.03-6 9-6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="11" r="1" fill="currentColor" />
        <circle cx="12" cy="11" r="1" fill="currentColor" />
        <circle cx="15" cy="11" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 18h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function BenefitsLightShell({ content, direction }: BenefitsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = prefersReducedMotion();
    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-benefit-card]"));
    const icons = Array.from(section.querySelectorAll<HTMLElement>("[data-benefit-icon]"));

    const timeline = createTimeline({
      autoplay: false,
      defaults: {
        ease: "cubicBezier(0.22, 1, 0.36, 1)",
      },
    }).add(
      cards,
      {
        opacity: [0, 1],
        y: [64, 0],
        rotateZ: (_target: unknown, index: number) => (index % 2 === 0 ? [-5, 0] : [5, 0]),
        scale: [0.88, 1],
        duration: 860,
        delay: stagger(120, { from: "center" }),
      },
      0,
    );

    const cleanup = observeOnce(section, () => {
      timeline.play();

      if (!reducedMotion && icons.length) {
        animate(icons, {
          scale: [0.8, 1],
          rotate: ["-16deg", "0deg"],
          duration: 900,
          delay: stagger(110),
          ease: "out(4)",
        });
      }
    });

    return () => {
      cleanup();
      timeline.pause();
      timeline.revert();
    };
  }, []);

  return (
    <SectionShell id="benefits">
      <section ref={sectionRef} dir={direction}>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} />

        <div className="light-card-rail benefits-grid mt-12">
          {content.items.map((item, index) => (
            <div
              key={item.title}
              data-benefit-card
              className={cn(index % 2 === 0 && "lg:translate-y-8", index === 1 && "xl:-translate-y-4")}
            >
              <SurfaceCard
                variant={index === 1 ? "accent" : index === 3 ? "stage" : "glass"}
                hover="tilt"
                className="benefit-card h-full p-6 sm:p-7"
              >
                <div className="flex h-full flex-col gap-6">
                  <div className="benefit-card__meta">
                    <span className="benefit-card__index">0{index + 1}</span>
                    <span data-benefit-icon className="benefit-icon">
                      <BenefitIcon icon={item.icon} />
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="type-card-title text-[var(--color-foreground)]">{item.title}</h3>
                    <p className="type-body text-[var(--color-foreground-soft)]">{item.body}</p>
                  </div>
                </div>
              </SurfaceCard>
            </div>
          ))}
        </div>
      </section>
    </SectionShell>
  );
}
