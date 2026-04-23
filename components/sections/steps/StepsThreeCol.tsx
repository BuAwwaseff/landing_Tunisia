"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { observeOnce } from "@/motion/observers";
import { prepareReveal, revealScale } from "@/motion/presets";
import type { MarketContent } from "@/schemas/landing";

type StepsProps = {
  content: NonNullable<MarketContent["steps"]>;
  direction: "ltr" | "rtl";
};

export default function StepsThreeCol({ content, direction }: StepsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  function isExternalLink(href: string) {
    return /^(https?:|mailto:|tel:)/.test(href);
  }

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-step-card]"));
    cards.forEach((card) => prepareReveal(card, "scale"));

    const cleanup = observeOnce(section, () => {
      cards.forEach((card, index) => revealScale(card, index * 110));
    });

    return () => cleanup();
  }, []);

  return (
    <SectionShell id="steps" density="tight">
      <section ref={sectionRef} dir={direction}>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} align="center" className="items-center" />

        <div className="steps-grid mt-8">
          {content.items.map((item) => (
            <div key={item.step} data-step-card className="step-card-wrap">
              <SurfaceCard variant="glass" hover="lift" className="step-card h-full p-6 sm:p-7">
                <div className="step-card__body">
                  <div className="step-card__media">
                    {item.imageSrc ? (
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt ?? ""}
                        fill
                        sizes="(max-width: 959px) 100vw, 33vw"
                        className="step-card__image"
                      />
                    ) : <span className="step-card__media-empty" aria-hidden="true" />}
                  </div>

                  <div className="step-card__header">
                    <span className="step-card__index">{item.step}</span>
                    <span className="player-card-pill">{item.title}</span>
                  </div>

                  <div className="step-card__copy">
                    <h3 className="type-card-title text-[var(--color-foreground)]">{item.title}</h3>
                    <p className="type-body text-[var(--color-foreground-soft)]">{item.body}</p>
                  </div>

                  <div className="step-card__footer">
                    {item.primaryCta ? (
                      <a
                        href={item.primaryCta.href}
                        target={isExternalLink(item.primaryCta.href) ? "_blank" : undefined}
                        rel={isExternalLink(item.primaryCta.href) ? "noreferrer" : undefined}
                        className="step-card__link"
                      >
                        {item.primaryCta.label}
                      </a>
                    ) : (
                      <span className="step-card__footer-placeholder" aria-hidden="true" />
                    )}
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
