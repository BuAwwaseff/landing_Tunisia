"use client";

import { useEffect, useRef } from "react";
import SectionShell from "@/components/layout/SectionShell";
import Button from "@/components/ui/Button";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { splitTitle } from "@/lib/format";
import type { MarketContent } from "@/schemas/landing";
import { prepareReveal, revealScale, revealUp } from "@/motion/presets";
import { observeOnce } from "@/motion/observers";

type HeroProps = {
  content: MarketContent["hero"];
  direction: "ltr" | "rtl";
};

function isExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function HeroTunisiaEditorial({ content, direction }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const copyTargets = Array.from(section.querySelectorAll<HTMLElement>("[data-hero-copy]"));
    const stageTargets = Array.from(section.querySelectorAll<HTMLElement>("[data-hero-stage]"));

    copyTargets.forEach((target) => prepareReveal(target, "up"));
    stageTargets.forEach((target) => prepareReveal(target, "scale"));

    const cleanup = observeOnce(section, () => {
      copyTargets.forEach((target, index) => revealUp(target, index * 80));
      stageTargets.forEach((target, index) => revealScale(target, 160 + index * 80));
    });

    return () => cleanup();
  }, []);

  const titleParts = splitTitle(content.title, content.highlightedWords);
  const stage = content.stage;
  const checkpoints = content.stats ?? [];

  return (
    <SectionShell id="top" density="hero" className="overflow-hidden partnership-hero-shell">
      <section ref={sectionRef} dir={direction}>
        <div className="partnership-hero">
          <span className="partnership-hero__wash partnership-hero__wash--one" aria-hidden />
          <span className="partnership-hero__wash partnership-hero__wash--two" aria-hidden />

          <div className="partnership-hero__copy">
            <div data-hero-copy className="partnership-hero__kicker">
              <div className="eyebrow section-divider w-fit text-[var(--color-primary-strong)]">
                {content.eyebrow}
              </div>
            </div>

            <h1 data-hero-copy className="partnership-hero__title text-[var(--color-foreground)]">
              {titleParts.map((part, index) => (
                <span key={`${part.text}-${index}`} className={part.highlighted ? "hero-highlighted" : undefined}>
                  {part.text}
                </span>
              ))}
            </h1>

            <p data-hero-copy className="partnership-hero__body">
              {content.body}
            </p>

            <div data-hero-copy className="partnership-hero__actions">
              <Button href={content.primaryCta.href} external={isExternalLink(content.primaryCta.href)} size="md">
                {content.primaryCta.label}
              </Button>
              {content.secondaryCta ? (
                <Button
                  href={content.secondaryCta.href}
                  intent="secondary"
                  external={isExternalLink(content.secondaryCta.href)}
                  size="md"
                >
                  {content.secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>

          <div className="partnership-hero__stage">
            <SurfaceCard variant="stage" hover="lift" className="partnership-hero__panel">
              <div data-hero-stage className="partnership-hero__panel-head">
                <div className="partnership-hero__panel-copy">
                  {stage?.eyebrow ? (
                    <span className="eyebrow text-[var(--color-secondary)]">{stage.eyebrow}</span>
                  ) : null}
                  {stage?.title ? (
                    <h2 className="partnership-hero__panel-title text-[var(--color-foreground)]">{stage.title}</h2>
                  ) : null}
                </div>
              </div>

              {checkpoints.length ? (
                <div className="partnership-hero__route-grid">
                  {checkpoints.map((item, index) => (
                    <div key={item.label} data-hero-stage className="partnership-hero__route-card">
                      <span className="partnership-hero__route-index">0{index + 1}</span>

                      <div className="partnership-hero__route-copy">
                        <span className="partnership-hero__route-label">{item.label}</span>
                        {item.note ? (
                          <span className="partnership-hero__route-note">{item.note}</span>
                        ) : null}
                      </div>

                      <span dir="ltr" className="partnership-hero__route-value">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
            </SurfaceCard>
          </div>
        </div>
      </section>
    </SectionShell>
  );
}
