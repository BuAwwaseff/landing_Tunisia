"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, stagger } from "animejs";
import SectionShell from "@/components/layout/SectionShell";
import Button from "@/components/ui/Button";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { cn } from "@/lib/format";
import { observeOnce, prefersReducedMotion } from "@/motion/observers";
import type { MarketContent } from "@/schemas/landing";

type FinalCtaProps = {
  content: MarketContent["finalCta"];
  direction: "ltr" | "rtl";
};

function isExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function FinalCtaDualCard({ content, direction }: FinalCtaProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ring = ringRef.current;
    if (!section) return;

    const reducedMotion = prefersReducedMotion();
    const targets = Array.from(section.querySelectorAll<HTMLElement>("[data-cta-reveal]"));
    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-cta-card]"));

    const timeline = createTimeline({
      autoplay: false,
      defaults: {
        ease: "cubicBezier(0.22, 1, 0.36, 1)",
      },
    })
      .add(
        targets,
        {
          opacity: [0, 1],
          y: [30, 0],
          duration: 720,
          delay: stagger(90),
        },
        0,
      )
      .add(
        cards,
        {
          opacity: [0, 1],
          x: (_target: unknown, index: number) => (index === 0 ? [-40, 0] : [40, 0]),
          rotateZ: (_target: unknown, index: number) => (index === 0 ? [-4, 0] : [4, 0]),
          scale: [0.94, 1],
          duration: 760,
          delay: stagger(120),
        },
        180,
      );

    const cleanup = observeOnce(section, () => {
      timeline.play();

      if (!reducedMotion && ring) {
        animate(ring, {
          rotate: ["0deg", "360deg"],
          duration: 22000,
          ease: "linear",
          loop: true,
        });
      }
    });

    return () => {
      cleanup();
      timeline.pause();
      timeline.revert();
    };
  }, []);

  const supportingPills = [
    content.primary.label,
    content.secondary?.label,
    ...(content.cards?.map((card) => card.title) ?? []),
  ].filter(Boolean) as string[];

  return (
    <SectionShell id="final-cta" density="tight">
      <section ref={sectionRef} dir={direction}>
        <SurfaceCard variant="stage" className="final-cta-shell p-6 sm:p-8 lg:p-10">
          <div className="final-cta-shell__aurora" aria-hidden />

          <div className="final-cta-shell__grid">
            <div className="flex flex-col gap-8">
              <div className="max-w-3xl space-y-4">
                <div data-cta-reveal className="eyebrow section-divider w-fit text-[var(--color-secondary)]">
                  {content.eyebrow}
                </div>

                {supportingPills.length ? (
                  <div data-cta-reveal className="hero-signal-strip">
                    {supportingPills.slice(0, 3).map((signal) => (
                      <span key={signal} className="hero-signal-pill">
                        {signal}
                      </span>
                    ))}
                  </div>
                ) : null}

                <h2 data-cta-reveal className="type-heading text-[var(--color-foreground)]">
                  {content.title}
                </h2>
                <p data-cta-reveal className="type-body-lg">
                  {content.body}
                </p>
                <div data-cta-reveal className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href={content.primary.href} external={isExternalLink(content.primary.href)}>
                    {content.primary.label}
                  </Button>
                  {content.secondary ? (
                    <Button
                      href={content.secondary.href}
                      external={isExternalLink(content.secondary.href)}
                      intent="secondary"
                    >
                      {content.secondary.label}
                    </Button>
                  ) : null}
                </div>
              </div>

              {content.cards?.length ? (
                <div className="cta-grid cta-grid--fancy">
                  {content.cards.map((card, index) => (
                    <div key={card.title} data-cta-card>
                      <SurfaceCard
                        variant={index === 0 ? "glass" : "accent"}
                        hover="tilt"
                        className={cn("final-cta-card h-full p-6 sm:p-7", index === 1 && "final-cta-card--accent")}
                      >
                        <div className="flex h-full flex-col gap-5">
                          <div className="space-y-3">
                            <p className="eyebrow text-[var(--color-secondary)]">
                              {card.eyebrow ?? (index === 0 ? "Launch fast" : "Talk directly")}
                            </p>
                            <h3 className="type-card-title text-[var(--color-foreground)]">{card.title}</h3>
                            <p className="type-body text-[var(--color-foreground-soft)]">{card.body}</p>
                          </div>
                          <div className="mt-auto">
                            <Button
                              href={card.cta.href}
                              external={isExternalLink(card.cta.href)}
                              intent={index === 0 ? "primary" : "secondary"}
                            >
                              {card.cta.label}
                            </Button>
                          </div>
                        </div>
                      </SurfaceCard>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div data-cta-reveal className="final-cta-aside">
              <div ref={ringRef} className="final-cta-aside__ring" aria-hidden />
              <div className="final-cta-aside__content">
                <span className="type-meta text-[var(--color-secondary)]">{content.primary.label}</span>
                <p className="type-card-title text-[var(--color-foreground)]">
                  The first contact should feel polished, direct, and easy to trust.
                </p>
                <p className="type-body text-[var(--color-foreground-soft)]">
                  Reach out through the channel that suits you best and the desk will help route you into the right partnership path quickly.
                </p>
              </div>
            </div>
          </div>
        </SurfaceCard>
      </section>
    </SectionShell>
  );
}
