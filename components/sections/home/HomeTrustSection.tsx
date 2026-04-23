"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { observeOnce } from "@/motion/observers";
import { prepareReveal, revealScale } from "@/motion/presets";
import type { HomeTrustSectionContent } from "@/schemas/landing";

function TrustIcon({
  icon,
}: {
  icon: HomeTrustSectionContent["items"][number]["icon"];
}) {
  if (icon === "shield") {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M12 3l7 2.8V11c0 5-2.9 8.9-7 10-4.1-1.1-7-5-7-10V5.8L12 3Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m9.4 11.8 1.8 1.8 3.7-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "support") {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M4 12a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 14v3a2 2 0 0 1-2 2H4v-5a2 2 0 0 1 2-2h1Zm10 0h1a2 2 0 0 1 2 2v5h-1a2 2 0 0 1-2-2v-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "wallet") {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M3 8c0-1.7 1.3-3 3-3h10l4 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16.5" cy="14.5" r="1.4" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M12 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" fill="currentColor" />
      <path d="M7.4 13.4a6.5 6.5 0 0 1 9.2 0M4.7 10.7a10.3 10.3 0 0 1 14.6 0M2 8a14 14 0 0 1 20 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function HomeTrustSection({
  content,
  direction,
}: {
  content: HomeTrustSectionContent;
  direction: "ltr" | "rtl";
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-trust-card]"));
    cards.forEach((card) => prepareReveal(card, "scale"));

    const cleanup = observeOnce(section, () => {
      cards.forEach((card, index) => revealScale(card, index * 90));
    });

    return () => cleanup();
  }, []);

  return (
    <SectionShell id="trust" density="tight">
      <section ref={sectionRef} dir={direction}>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} align="start" />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {content.items.map((item, index) => (
            <div key={item.title} data-trust-card>
              <SurfaceCard variant={index === 0 ? "accent" : "glass"} hover="lift" className="h-full p-5 sm:p-6">
                <div className="flex h-full flex-col gap-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="benefit-icon">
                      <TrustIcon icon={item.icon} />
                    </span>
                    {item.metric ? (
                      <span className="player-card-pill">{item.metric}</span>
                    ) : null}
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
