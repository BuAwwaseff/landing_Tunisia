"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, stagger } from "animejs";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { observeOnce, prefersReducedMotion } from "@/motion/observers";
import type { MarketContent } from "@/schemas/landing";

type StepsProps = {
  content: NonNullable<MarketContent["steps"]>;
  direction: "ltr" | "rtl";
};

export default function StepsThreeCol({ content, direction }: StepsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section) return;

    const reducedMotion = prefersReducedMotion();
    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-step-card]"));
    const badges = Array.from(section.querySelectorAll<HTMLElement>("[data-step-badge]"));

    const timeline = createTimeline({
      autoplay: false,
      defaults: {
        ease: "cubicBezier(0.22, 1, 0.36, 1)",
      },
    })
      .add(
        cards,
        {
          opacity: [0, 1],
          x: (_target: unknown, index: number) => (index % 2 === 0 ? [-34, 0] : [34, 0]),
          y: [42, 0],
          scale: [0.94, 1],
          duration: 760,
          delay: stagger(120),
        },
        0,
      )
      .add(
        badges,
        {
          scale: [0.72, 1],
          rotate: ["-12deg", "0deg"],
          opacity: [0, 1],
          duration: 620,
          delay: stagger(120),
        },
        120,
      );

    const cleanup = observeOnce(section, () => {
      timeline.play();

      if (line) {
        animate(line, {
          scaleX: [0, 1],
          scaleY: [0, 1],
          duration: 920,
          ease: "out(4)",
        });
      }

      if (!reducedMotion && badges.length) {
        animate(badges, {
          y: [0, -6, 0],
          duration: 2200,
          delay: stagger(200),
          ease: "inOutSine",
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

  return (
    <SectionShell id="steps">
      <section ref={sectionRef} dir={direction}>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} />

        <div className="steps-grid mt-12">
          <span ref={lineRef} className="steps-progress-line" aria-hidden />

          {content.items.map((item, index) => (
            <div key={item.step} data-step-card className="step-card-wrap">
              <SurfaceCard
                variant={index === 1 ? "accent" : "glass"}
                hover="lift"
                className="step-card h-full p-6 sm:p-7"
              >
                <div className="flex h-full flex-col gap-5">
                  <div className="step-card__header">
                    <span data-step-badge className="step-card__index">
                      {item.step}
                    </span>
                    <span className="step-card__signal">{item.title}</span>
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
