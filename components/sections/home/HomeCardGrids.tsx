"use client";

import SurfaceCard from "@/components/ui/SurfaceCard";
import { cn } from "@/lib/format";
import type { HomeCategoryCard, HomeFeaturedCard } from "@/schemas/landing";
import { dirClass } from "@/lib/rtl";
import PlayerStarRating from "./PlayerStarRating";
import PlayerVisual from "./PlayerVisual";

function isExternalLink(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

function CardLinkShell({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return <div className={className}>{children}</div>;
  }

  return (
    <a
      href={href}
      className={cn("block", className)}
      target={isExternalLink(href) ? "_blank" : undefined}
      rel={isExternalLink(href) ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export function FeaturedGrid({
  items,
}: {
  items: HomeFeaturedCard[];
}) {
  return (
    <div className="player-featured-grid">
      {items.map((item, index) => (
        <CardLinkShell key={item.id} href={item.href} className="player-featured-grid__item">
          <SurfaceCard
            variant={index === 0 ? "stage" : "glass"}
            hover="lift"
            className={cn(
              "player-featured-card h-full p-5 sm:p-6",
              index === 0 && "player-featured-card--lead",
            )}
          >
            <div className="player-featured-card__copy">
              <div className="player-featured-card__top">
                <div className="space-y-2">
                  {item.eyebrow ? (
                    <span className="player-featured-card__eyebrow">{item.eyebrow}</span>
                  ) : null}
                  {item.badge ? <span className="player-card-pill">{item.badge}</span> : null}
                </div>

                <div className="player-featured-card__icon-wrap">
                  <PlayerVisual visual={item.visual} className="player-featured-card__icon" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="type-card-title text-[var(--color-foreground)]">{item.title}</h3>
                <p className="type-body text-[var(--color-foreground-soft)]">{item.description}</p>
              </div>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {item.rating && item.metric ? (
                    <PlayerStarRating rating={item.rating} label={item.metric} compact />
                  ) : null}
                  {item.stats?.[0] ? (
                    <span className="player-card-pill player-card-pill--soft">{item.stats[0]}</span>
                  ) : null}
                </div>

                {item.ctaLabel ? <span className="player-featured-card__cta">{item.ctaLabel}</span> : null}
              </div>
            </div>
          </SurfaceCard>
        </CardLinkShell>
      ))}
    </div>
  );
}

export function CategoryGrid({
  items,
}: {
  items: HomeCategoryCard[];
}) {
  return (
    <div className="player-category-grid">
      {items.map((item) => (
        <CardLinkShell key={item.id} href={item.href} className="player-category-grid__item">
          <SurfaceCard variant="glass" hover="tilt" className="player-category-card h-full p-5 sm:p-6">
            <div className="player-category-card__header">
              <div className="space-y-2">
                {item.eyebrow ? <p className="player-featured-card__eyebrow">{item.eyebrow}</p> : null}
                <h3 className="type-card-title text-[var(--color-foreground)]">{item.title}</h3>
              </div>
              {item.badge ? <span className="player-card-pill">{item.badge}</span> : null}
            </div>

            <p className="type-body text-[var(--color-foreground-soft)]">{item.description}</p>

            <div className="player-category-card__visual-wrap">
              <PlayerVisual visual={item.visual} className="player-category-card__visual" />
            </div>

            <div className="player-card-pill-row">
              {item.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="player-card-pill player-card-pill--soft">
                  {tag}
                </span>
              ))}
            </div>
          </SurfaceCard>
        </CardLinkShell>
      ))}
    </div>
  );
}

export function SportGrid({
  items,
  direction,
}: {
  items: HomeCategoryCard[];
  direction: "ltr" | "rtl";
}) {
  return (
    <div dir={direction} className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <CardLinkShell key={item.id} href={item.href} className="block h-full">
          <SurfaceCard
            variant="stage"
            hover="lift"
            className="group relative h-full min-h-[340px] overflow-hidden p-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,66,86,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(92,167,223,0.16),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,13,0.18),rgba(5,8,13,0.88))]" />

            <div className="relative z-[1] flex h-full flex-col justify-between p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                {item.eyebrow ? (
                  <span className="player-featured-card__eyebrow">{item.eyebrow}</span>
                ) : <span />}
                {item.badge ? (
                  <span className="player-card-pill player-card-pill--soft">{item.badge}</span>
                ) : null}
              </div>

              <div className="sport-card__visual-shell">
                <PlayerVisual visual={item.visual} className="sport-card__visual" />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-[clamp(1.5rem,2vw,2rem)] font-black leading-[0.95] tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="type-body text-white/78">{item.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="player-card-pill player-card-pill--soft">
                      {tag}
                    </span>
                  ))}
                </div>

                {item.href ? (
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-primary-strong)]">
                    <span className={cn("inline-flex h-4 w-4", dirClass(direction, "", "rotate-180"))} aria-hidden>
                      <svg viewBox="0 0 20 20" fill="none" className="h-full w-full">
                        <path
                          d="M6 10h8M11 5l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </SurfaceCard>
        </CardLinkShell>
      ))}
    </div>
  );
}
