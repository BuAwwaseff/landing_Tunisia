"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, remove, stagger, type JSAnimation } from "animejs";
import { cn, splitTitle } from "@/lib/format";
import SectionShell from "@/components/layout/SectionShell";
import Button from "@/components/ui/Button";
import StatCard from "@/components/ui/StatCard";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { observeOnce, prefersReducedMotion } from "@/motion/observers";
import type { MarketContent } from "@/schemas/landing";

type HeroProps = {
  content: MarketContent["hero"];
  direction: "ltr" | "rtl";
};

function isExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function HeroTunisiaEditorial({ content, direction }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ticker = tickerRef.current;
    const glow = glowRef.current;
    if (!section) return;

    const reducedMotion = prefersReducedMotion();
    const copyTargets = Array.from(section.querySelectorAll<HTMLElement>("[data-hero-copy]"));
    const statTargets = Array.from(section.querySelectorAll<HTMLElement>("[data-hero-stat]"));
    const cardTargets = Array.from(section.querySelectorAll<HTMLElement>("[data-stage-card]"));
    const laneTargets = Array.from(section.querySelectorAll<HTMLElement>("[data-stage-lane]"));
    const tickerTargets = Array.from(section.querySelectorAll<HTMLElement>("[data-stage-ticker]"));

    const timeline = createTimeline({
      autoplay: false,
      defaults: {
        ease: "cubicBezier(0.22, 1, 0.36, 1)",
      },
    });

    timeline
      .add(
        copyTargets,
        {
          opacity: [0, 1],
          y: [36, 0],
          filter: ["blur(16px)", "blur(0px)"],
          duration: 760,
          delay: stagger(90),
        },
        0,
      )
      .add(
        cardTargets,
        {
          opacity: [0, 1],
          y: (_target: unknown, index: number) => [48 + index * 10, 0],
          x: (_target: unknown, index: number) => [index % 2 === 0 ? -28 : 22, 0],
          rotateZ: (_target: unknown, index: number) => [index % 2 === 0 ? -5 : 6, 0],
          scale: [0.92, 1],
          duration: 920,
          delay: stagger(120, { from: "center" }),
        },
        160,
      )
      .add(
        statTargets,
        {
          opacity: [0, 1],
          y: [28, 0],
          scale: [0.94, 1],
          duration: 680,
          delay: stagger(100),
        },
        320,
      )
      .add(
        laneTargets,
        {
          opacity: [0, 1],
          x: [-24, 0],
          duration: 620,
          delay: stagger(110),
        },
        420,
      )
      .add(
        tickerTargets,
        {
          opacity: [0, 1],
          y: [18, 0],
          duration: 520,
          delay: stagger(70),
        },
        540,
      );

    let tickerAnimation: JSAnimation | null = null;
    let glowAnimation: JSAnimation | null = null;

    const cleanup = observeOnce(section, () => {
      timeline.play();

      if (!reducedMotion && ticker) {
        tickerAnimation = animate(ticker, {
          x: ["0%", "-50%"],
          duration: 18000,
          ease: "linear",
          loop: true,
        });
      }

      if (!reducedMotion && glow) {
        glowAnimation = animate(glow, {
          scale: [0.96, 1.08],
          opacity: [0.3, 0.55],
          duration: 4200,
          ease: "inOutSine",
          alternate: true,
          loop: true,
        });
      }
    });

    return () => {
      cleanup();
      timeline.pause();
      timeline.revert();
      tickerAnimation?.pause();
      glowAnimation?.pause();
      if (ticker) remove(ticker);
      if (glow) remove(glow);
    };
  }, []);

  const titleParts = splitTitle(content.title, content.highlightedWords);
  const stage = content.stage;
  const chips = stage?.metrics?.slice(0, 3).map((item) => item.label) ?? content.stats?.map((item) => item.label) ?? [];
  const tickerItems = [
    ...(content.stats?.map((item) => item.note ?? item.label) ?? []),
    ...(stage?.lanes?.map((lane) => lane.label) ?? []),
    ...(stage?.metrics?.map((item) => item.label) ?? []),
  ].slice(0, 10);

  return (
    <SectionShell id="top" density="hero" className="overflow-hidden">
      <section ref={sectionRef} dir={direction}>
        <div className="hero-grid hero-grid--editorial">
          <div className="hero-copy flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div data-hero-copy className="hero-kicker-row">
                <div className="eyebrow section-divider w-fit text-[var(--color-primary-strong)]">
                  {content.eyebrow}
                </div>
                <span className="hero-live-pill">{stage?.badge ?? "Premium route"}</span>
              </div>

              {chips.length ? (
                <div data-hero-copy className="hero-signal-strip">
                  {chips.map((signal) => (
                    <span key={signal} className="hero-signal-pill">
                      {signal}
                    </span>
                  ))}
                </div>
              ) : null}

              <h1 data-hero-copy className="type-display max-w-4xl text-[var(--color-foreground)]">
                {titleParts.map((part, index) => (
                  <span
                    key={`${part.text}-${index}`}
                    className={cn(part.highlighted && "hero-highlighted")}
                  >
                    {part.text}
                  </span>
                ))}
              </h1>

              <p data-hero-copy className="type-body-lg hero-copy__body max-w-2xl">
                {content.body}
              </p>
            </div>

            <div data-hero-copy className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={content.primaryCta.href} external={isExternalLink(content.primaryCta.href)}>
                {content.primaryCta.label}
              </Button>
              {content.secondaryCta ? (
                <Button
                  href={content.secondaryCta.href}
                  intent="secondary"
                  external={isExternalLink(content.secondaryCta.href)}
                >
                  {content.secondaryCta.label}
                </Button>
              ) : null}
            </div>

            {content.stats?.length ? (
              <div className="hero-stats-grid">
                {content.stats.map((item, index) => (
                  <div
                    key={item.label}
                    data-hero-stat
                    className={cn(index === 0 && "lg:col-span-2")}
                  >
                    <StatCard
                      item={item}
                      variant={index === 0 ? "accent" : "glass"}
                      className="hero-stat-card min-h-[168px]"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="hero-stage">
            <span ref={glowRef} className="hero-stage__halo" aria-hidden />
            <span className="hero-stage__wash hero-stage__wash--one" aria-hidden />
            <span className="hero-stage__wash hero-stage__wash--two" aria-hidden />

            <SurfaceCard
              variant="stage"
              hover="tilt"
              className="hero-stage__shell hero-stage__panel-grid p-6 sm:p-7 lg:p-8"
            >
              <span className="hero-stage__orbit" aria-hidden />
              <span className="hero-stage__orbit hero-stage__orbit--inner" aria-hidden />

              {stage ? (
                <>
                  <div data-stage-card className="hero-stage__header">
                    <div className="space-y-3">
                      {stage.eyebrow ? (
                        <span className="eyebrow text-[var(--color-secondary)]">{stage.eyebrow}</span>
                      ) : null}
                      <h2 className="type-card-title hero-stage__title text-[var(--color-foreground)]">
                        {stage.title}
                      </h2>
                    </div>
                    {stage.badge ? <span className="hero-stage__badge">{stage.badge}</span> : null}
                  </div>

                  {stage.metrics?.length ? (
                    <div className="hero-stage__metrics-grid">
                      {stage.metrics.map((item, index) => (
                        <div key={item.label} data-stage-card>
                          <StatCard
                            item={item}
                            variant={index === 0 ? "accent" : "glass"}
                            className="hero-stage__metric-card"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="hero-stage__lower-grid">
                    {stage.lanes?.length ? (
                      <div data-stage-card className="hero-stage__lane-board p-5 sm:p-6">
                        <div className="space-y-5">
                          {stage.lanes.map((lane) => (
                            <div key={lane.label} data-stage-lane className="space-y-3">
                              <div className="flex items-center justify-between gap-3 text-sm">
                                <span className="font-semibold text-[var(--color-foreground)]">
                                  {lane.label}
                                </span>
                                <span dir="ltr" className="text-[var(--color-secondary)]">
                                  {lane.value}%
                                </span>
                              </div>
                              <div className="hero-stage__track">
                                <span style={{ width: `${lane.value}%` }} />
                              </div>
                              {lane.note ? (
                                <p className="type-metric-secondary text-[var(--color-foreground-soft)]">
                                  {lane.note}
                                </p>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {stage.insight ? (
                      <div data-stage-card className="hero-stage__insight-wrap">
                        <SurfaceCard variant="glass" className="hero-stage__insight-card p-5">
                          <div className="flex flex-col gap-3">
                            {stage.insight.eyebrow ? (
                              <span className="type-meta text-[var(--color-secondary)]">
                                {stage.insight.eyebrow}
                              </span>
                            ) : null}
                            <span className="type-card-title text-white">{stage.insight.title}</span>
                            <p className="type-body text-white/76">{stage.insight.body}</p>
                          </div>
                        </SurfaceCard>
                      </div>
                    ) : null}
                  </div>

                  {stage.note ? (
                    <p data-stage-card className="hero-stage__note type-body text-[var(--color-foreground-soft)]">
                      {stage.note}
                    </p>
                  ) : null}

                  {tickerItems.length ? (
                    <div data-stage-card className="hero-stage__ticker">
                      <div className="hero-stage__ticker-fade" />
                      <div ref={tickerRef} className="hero-stage__ticker-track">
                        {[...tickerItems, ...tickerItems].map((item, index) => (
                          <span key={`${item}-${index}`} data-stage-ticker className="hero-stage__ticker-pill">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </>
              ) : null}
            </SurfaceCard>
          </div>
        </div>
      </section>
    </SectionShell>
  );
}
