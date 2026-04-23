"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, remove, stagger, type JSAnimation } from "animejs";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import StatCard from "@/components/ui/StatCard";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { observeOnce, prefersReducedMotion } from "@/motion/observers";
import type { MarketContent } from "@/schemas/landing";

type ToolsProps = {
  content: NonNullable<MarketContent["tools"]>;
  direction: "ltr" | "rtl";
};

export default function ToolsShowcase({ content, direction }: ToolsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const chart = chartRef.current;
    const orb = orbRef.current;
    const path = pathRef.current;
    if (!section) return;

    const reducedMotion = prefersReducedMotion();
    const revealTargets = Array.from(section.querySelectorAll<HTMLElement>("[data-tools-reveal]"));
    const bars = chart ? Array.from(chart.querySelectorAll<HTMLElement>("[data-chart-bar]")) : [];

    const timeline = createTimeline({
      autoplay: false,
      defaults: {
        ease: "cubicBezier(0.22, 1, 0.36, 1)",
      },
    }).add(
      revealTargets,
      {
        opacity: [0, 1],
        y: [38, 0],
        scale: [0.96, 1],
        duration: 720,
        delay: stagger(110),
      },
      0,
    );

    let orbAnimation: JSAnimation | null = null;
    let pathAnimation: JSAnimation | null = null;
    let barsAnimation: JSAnimation | null = null;

    const cleanup = observeOnce(section, () => {
      timeline.play();

      if (bars.length) {
        barsAnimation = animate(bars, {
          scaleY: [0, 1],
          opacity: [0.24, 1],
          duration: 540,
          delay: stagger(90),
          ease: "out(4)",
        });
      }

      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;

        pathAnimation = animate(path, {
          strokeDashoffset: [length, 0],
          opacity: [0.25, 1],
          duration: 980,
          ease: "out(3)",
        });
      }

      if (!reducedMotion && orb) {
        orbAnimation = animate(orb, {
          y: [0, -16, 0],
          x: [0, 10, 0],
          scale: [0.96, 1.04, 0.96],
          duration: 5400,
          ease: "inOutSine",
          loop: true,
        });
      }
    });

    return () => {
      cleanup();
      timeline.pause();
      timeline.revert();
      orbAnimation?.pause();
      pathAnimation?.pause();
      barsAnimation?.pause();
      if (orb) remove(orb);
    };
  }, []);

  const panel = content.panel;
  const summaryItems = panel?.summaryItems ?? [];
  const activityFeed = [
    ...(summaryItems.map((item) => item.value) ?? []),
    ...(content.showcase?.map((item) => item.title) ?? []),
  ].slice(0, 3);

  return (
    <SectionShell id="tools">
      <section ref={sectionRef} dir={direction}>
        <div className="showcase-grid tools-grid">
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow={content.eyebrow}
              title={content.title}
              body={content.body}
              align="start"
            />

            {content.stats?.length ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {content.stats.map((item, index) => (
                  <div key={item.label} data-tools-reveal>
                    <StatCard item={item} variant={index === 1 ? "accent" : "glass"} />
                  </div>
                ))}
              </div>
            ) : null}

            <div className="tools-feature-rail grid gap-4">
              {content.showcase?.map((item, index) => (
                <div key={item.title} data-tools-reveal>
                  <SurfaceCard
                    variant={index === 1 ? "accent" : "glass"}
                    hover="lift"
                    className="tools-feature-card p-5 sm:p-6"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="tools-feature-card__header">
                        <div className="space-y-2">
                          {content.showcaseLabel ? (
                            <p className="eyebrow text-[var(--color-secondary)]">{content.showcaseLabel}</p>
                          ) : null}
                          <h3 className="type-card-title text-[var(--color-foreground)]">{item.title}</h3>
                        </div>
                        <span className="tools-feature-card__index">0{index + 1}</span>
                      </div>
                      <p className="type-body text-[var(--color-foreground-soft)]">{item.body}</p>
                      {item.tags?.length ? (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="tools-feature-card__tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </SurfaceCard>
                </div>
              ))}
            </div>
          </div>

          <div data-tools-reveal className="relative">
            <span ref={orbRef} className="tool-stage__orb" aria-hidden />

            <SurfaceCard variant="stage" hover="tilt" className="tool-stage__shell p-6 sm:p-7 lg:p-8">
              <div className="space-y-5">
                {panel ? (
                  <div className="tool-stage__header">
                    <div>
                      {panel.eyebrow ? (
                        <p className="type-meta text-[var(--color-secondary)]">{panel.eyebrow}</p>
                      ) : null}
                      <p className="type-card-title text-[var(--color-foreground)]">{panel.title}</p>
                    </div>
                    {panel.badge ? <span className="tool-stage__badge">{panel.badge}</span> : null}
                  </div>
                ) : null}

                <div className="tool-stage__screen p-5 sm:p-6">
                  {panel?.timeframeLabel ? (
                    <div className="flex justify-end">
                      <span className="tool-stage__timeframe">{panel.timeframeLabel}</span>
                    </div>
                  ) : null}

                  <div className="tool-stage__screen-grid">
                    <div className="tool-stage__chart-shell">
                      <div className="tool-stage__line" />

                      <div className="relative mt-8">
                        <svg
                          viewBox="0 0 480 180"
                          className="pointer-events-none absolute inset-0 h-full w-full"
                          aria-hidden
                        >
                          <path
                            ref={pathRef}
                            d="M8 138 C60 120, 84 118, 126 106 S204 90, 250 94 S332 54, 372 62 S432 30, 472 38"
                            stroke="url(#tool-gradient)"
                            strokeWidth="3"
                            fill="none"
                            opacity="0.95"
                          />
                          <defs>
                            <linearGradient id="tool-gradient" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="rgba(83, 212, 195, 0.52)" />
                              <stop offset="100%" stopColor="var(--color-primary)" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <div ref={chartRef} className="tool-stage__chart">
                          {[32, 44, 56, 62, 70, 80, 92].map((height) => (
                            <span
                              key={height}
                              data-chart-bar={height}
                              className="tool-stage__chart-bar"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="tool-stage__feed">
                      {activityFeed.map((item) => (
                        <div key={item} className="tool-stage__feed-item">
                          <span className="tool-stage__feed-dot" aria-hidden />
                          <p className="type-body text-[var(--color-foreground-soft)]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {summaryItems.length ? (
                    <div className="tool-stage__summary-grid">
                      {summaryItems.map((item) => (
                        <div key={item.label} className="tool-stage__summary-card">
                          <p className="type-meta text-[var(--color-secondary)]">{item.label}</p>
                          <p className="mt-2 text-sm font-semibold text-[var(--color-foreground)]">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </section>
    </SectionShell>
  );
}
