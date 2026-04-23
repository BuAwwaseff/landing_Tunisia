"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { observeOnce } from "@/motion/observers";
import { prepareReveal, revealScale } from "@/motion/presets";
import type { MarketContent } from "@/schemas/landing";

type BenefitsProps = {
  content: MarketContent["benefits"];
  direction: "ltr" | "rtl";
};

function BenefitIcon({ icon }: { icon?: string }) {
  if (icon === "payouts") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 15h8M8 11h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "support") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 14v3a2 2 0 0 1-2 2H4v-5a2 2 0 0 1 2-2h1Zm10 0h1a2 2 0 0 1 2 2v5h-1a2 2 0 0 1-2-2v-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "creative") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 18 18 6M8.5 6H18v9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10.5V5h5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-benefit-card]"));
    cards.forEach((card) => prepareReveal(card, "scale"));

    const cleanup = observeOnce(section, () => {
      cards.forEach((card, index) => revealScale(card, index * 90));
    });

    return () => cleanup();
  }, []);

  return (
    <SectionShell id="benefits" density="tight">
      <section ref={sectionRef} dir={direction}>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} align="start" />

        <div className="benefits-grid mt-8">
          {content.items.map((item, index) => (
            <div key={item.title} data-benefit-card>
              <SurfaceCard variant={index === 0 ? "accent" : "stage"} hover="lift" className="h-full p-6 sm:p-7">
                <div className="flex h-full flex-col gap-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="benefit-icon">
                      <BenefitIcon icon={item.icon} />
                    </span>
                    <span className="player-card-pill">0{index + 1}</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className={index === 0 ? "type-heading text-[var(--color-foreground)]" : "type-card-title text-[var(--color-foreground)]"}>
                      {item.title}
                    </h3>
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
