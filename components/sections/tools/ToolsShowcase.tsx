"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import StatCard from "@/components/ui/StatCard";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { observeOnce, prefersReducedMotion } from "@/motion/observers";
import {
  animateBar,
  drawPath,
  floatLoop,
  prepareReveal,
  revealScale,
  stopAnimation,
} from "@/motion/presets";
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

    const revealTargets = Array.from(section.querySelectorAll<HTMLElement>("[data-tools-reveal]"));
    revealTargets.forEach((target) => prepareReveal(target, "scale"));
    const bars = chart ? Array.from(chart.querySelectorAll<HTMLElement>("[data-chart-bar]")) : [];

    let orbAnimation: ReturnType<typeof floatLoop> | null = null;
    let pathAnimation: ReturnType<typeof drawPath> | null = null;
    let barAnimations: Array<ReturnType<typeof animateBar>> = [];

    const cleanup = observeOnce(section, () => {
      revealTargets.forEach((target, index) => revealScale(target, index * 90));

      if (bars.length) {
        barAnimations = bars.map((bar, index) => animateBar(bar, Number(bar.dataset.chartBar), index * 80));
      }

      if (path) {
        pathAnimation = drawPath(path, 980);
      }

      if (!prefersReducedMotion() && orb) {
        orbAnimation = floatLoop(orb, 12, 5400);
      }
    });

    return () => {
      cleanup();
      stopAnimation(orbAnimation);
      stopAnimation(pathAnimation);
      barAnimations.forEach((animation) => stopAnimation(animation));
    };
  }, []);

  const panel = content.panel;
  const summaryItems = panel?.summaryItems ?? [];
  const activityFeed = [
    ...summaryItems.map((item) => item.value),
    ...(content.showcase?.map((item) => item.title) ?? []),
  ].slice(0, 3);

  return (
    <SectionShell id="benefits" density="tight">
      <section ref={sectionRef} dir={direction}>
        <div className="showcase-grid">
          <div className="flex flex-col gap-8">
            <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} align="start" />

            {content.stats?.length ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {content.stats.map((item, index) => (
                  <div key={item.label} data-tools-reveal>
                    <StatCard item={item} variant={index === 1 ? "accent" : "glass"} />
                  </div>
                ))}
              </div>
            ) : null}

            <div className="grid gap-4">
              {content.showcase?.map((item) => (
                <div key={item.title} data-tools-reveal>
                  <SurfaceCard variant="glass" hover="lift" className="h-full p-5 sm:p-6">
                    <div className="flex flex-col gap-4">
                      <div className="space-y-2">
                        {content.showcaseLabel ? (
                          <p className="eyebrow text-[var(--color-secondary)]">{content.showcaseLabel}</p>
                        ) : null}
                        <h3 className="type-card-title text-[var(--color-foreground)]">{item.title}</h3>
                      </div>
                      <p className="type-body text-[var(--color-foreground-soft)]">{item.body}</p>
                      {item.tags?.length ? (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="player-card-pill player-card-pill--soft">
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
                    <div className="space-y-2">
                      {panel.eyebrow ? <p className="type-meta text-[var(--color-secondary)]">{panel.eyebrow}</p> : null}
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
                        <svg viewBox="0 0 480 180" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
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
                              <stop offset="0%" stopColor="rgba(92, 167, 223, 0.55)" />
                              <stop offset="100%" stopColor="var(--color-primary)" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <div ref={chartRef} className="tool-stage__chart">
                          {[32, 46, 58, 64, 74, 82, 92].map((height) => (
                            <span
                              key={height}
                              data-chart-bar={height}
                              className="tool-stage__chart-bar"
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
