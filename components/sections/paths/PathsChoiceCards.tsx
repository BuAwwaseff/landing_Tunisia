"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import Button from "@/components/ui/Button";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { observeOnce } from "@/motion/observers";
import { prepareReveal, revealScale } from "@/motion/presets";
import type { MarketContent } from "@/schemas/landing";

type PathsProps = {
  content: NonNullable<MarketContent["paths"]>;
  direction: "ltr" | "rtl";
};

function isExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function PathsChoiceCards({ content, direction }: PathsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const visibleItems = content.items.slice(0, 2);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const shells = Array.from(section.querySelectorAll<HTMLElement>("[data-path-shell]"));
    shells.forEach((shell) => prepareReveal(shell, "scale"));

    const cleanup = observeOnce(section, () => {
      shells.forEach((shell, index) => revealScale(shell, index * 110));
    });

    return () => cleanup();
  }, []);

  return (
    <SectionShell id="paths" density="tight">
      <section ref={sectionRef} dir={direction}>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} align="start" />

        <SurfaceCard variant="stage" hover="lift" className="paths-shell mt-8 p-6 sm:p-7" data-path-shell>
          <div className="paths-shell__grid">
            {visibleItems.map((item, index) => (
              <SurfaceCard key={item.title} variant="glass" className="paths-shell__card h-full p-6 sm:p-7">
                <div className="flex h-full flex-col gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      {item.eyebrow ? <span className="path-card__type">{item.eyebrow}</span> : <span />}
                      <span className="player-card-pill">0{index + 1}</span>
                    </div>
                    <h3 className="type-heading text-[var(--color-foreground)]">{item.title}</h3>
                    <p className="type-body text-[var(--color-foreground-soft)]">{item.body}</p>
                  </div>

                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="path-card__bullet" aria-hidden />
                        <span className="type-body text-[var(--color-foreground-soft)]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SurfaceCard>
            ))}
          </div>

          {content.footerPrimaryCta || content.footerSecondaryCta ? (
            <div className="paths-shell__footer">
              {content.footerPrimaryCta ? (
                <Button
                  href={content.footerPrimaryCta.href}
                  external={isExternalLink(content.footerPrimaryCta.href)}
                  className="paths-shell__button"
                >
                  {content.footerPrimaryCta.label}
                </Button>
              ) : null}
              {content.footerSecondaryCta ? (
                <Button
                  href={content.footerSecondaryCta.href}
                  intent="secondary"
                  size="md"
                  external={isExternalLink(content.footerSecondaryCta.href)}
                  className="paths-shell__button"
                >
                  {content.footerSecondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </SurfaceCard>
      </section>
    </SectionShell>
  );
}
