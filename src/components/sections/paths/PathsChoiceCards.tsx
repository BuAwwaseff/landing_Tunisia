"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, stagger } from "animejs";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import Button from "@/components/ui/Button";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { observeOnce } from "@/motion/observers";
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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-path-card]"));
    const bullets = Array.from(section.querySelectorAll<HTMLElement>("[data-path-bullet]"));

    const timeline = createTimeline({
      autoplay: false,
      defaults: {
        ease: "cubicBezier(0.22, 1, 0.36, 1)",
      },
    }).add(
      cards,
      {
        opacity: [0, 1],
        y: (_target: unknown, index: number) => [72 - index * 10, 0],
        rotateZ: (_target: unknown, index: number) => [(index - 1) * 6, 0],
        scale: [0.9, 1],
        duration: 860,
        delay: stagger(140),
      },
      0,
    );

    const cleanup = observeOnce(section, () => {
      timeline.play();

      if (bullets.length) {
        animate(bullets, {
          scale: [0.5, 1],
          opacity: [0, 1],
          duration: 520,
          delay: stagger(70),
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
    <SectionShell id="paths">
      <section ref={sectionRef} dir={direction}>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} />

        <div className="paths-grid mt-12">
          {content.items.map((item, index) => (
            <div key={item.title} data-path-card>
              <SurfaceCard
                variant={index === 1 ? "accent" : index === 2 ? "stage" : "glass"}
                hover="tilt"
                className="path-card h-full p-6 sm:p-7"
              >
                <div className="flex h-full flex-col gap-6">
                  <div className="path-card__topline">
                    {item.eyebrow ? (
                      <p className="eyebrow text-[var(--color-secondary)]">{item.eyebrow}</p>
                    ) : (
                      <span />
                    )}
                    <span className="path-card__type">{item.type.replace("-", " ")}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="path-card__marker">
                      <span className="text-lg font-black text-[var(--color-foreground)]">
                        {index + 1}
                      </span>
                    </span>
                    <div className="space-y-2">
                      <h3 className="type-card-title text-[var(--color-foreground)]">{item.title}</h3>
                      <p className="type-body text-[var(--color-foreground-soft)]">{item.body}</p>
                    </div>
                  </div>

                  <ul className="path-card__list space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span data-path-bullet className="path-card__bullet" />
                        <span className="type-body text-[var(--color-foreground-soft)]">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-3 pt-2">
                    {item.primaryCta ? (
                      <Button
                        href={item.primaryCta.href}
                        external={isExternalLink(item.primaryCta.href)}
                        intent="primary"
                      >
                        {item.primaryCta.label}
                      </Button>
                    ) : null}
                    {item.secondaryCta ? (
                      <Button
                        href={item.secondaryCta.href}
                        external={isExternalLink(item.secondaryCta.href)}
                        intent="secondary"
                        size="md"
                      >
                        {item.secondaryCta.label}
                      </Button>
                    ) : null}
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
