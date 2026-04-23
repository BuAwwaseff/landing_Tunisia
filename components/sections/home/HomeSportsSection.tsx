"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import SectionShell from "@/components/layout/SectionShell";
import PhoneMockup from "@/components/ui/PhoneMockUp";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { cn } from "@/lib/format";
import { observeOnce } from "@/motion/observers";
import { prepareReveal, revealScale } from "@/motion/presets";
import type { HomeSportsSectionContent } from "@/schemas/landing";

type SportsCardItem = HomeSportsSectionContent["categories"][number];

function isExternalLink(href?: string) {
  return href ? /^(https?:|mailto:|tel:)/.test(href) : false;
}

function getSportsCardTitle(item: SportsCardItem) {
  if (item.id === "sport-tennis") {
    return "Hockey";
  }

  if (item.id === "sport-weekend") {
    return "Esports arena";
  }

  return item.title;
}

function getSportsCardTags(item: SportsCardItem) {
  if (item.id === "sport-tennis") {
    return ["fast ice", "live play"];
  }

  if (item.id === "sport-weekend") {
    return ["live maps", "team fights"];
  }

  return item.tags.slice(0, 2);
}

function getSportsCardImage(item: SportsCardItem, title: string) {
  if (item.visual.kind === "image") {
    return {
      src: item.visual.src,
      alt: item.visual.alt,
    };
  }

  const imageById: Record<string, string> = {
    "sport-football": "/sports/football.png",
    "sport-global-events": "/sports/football.png",
    "sport-basketball": "/sports/basketball.png",
    "sport-live-markets": "/sports/hockey.png",
    "sport-tennis": "/sports/hockey.png",
    "sport-weekend": "/sports/esports.png",
    "sport-esports": "/sports/esports.png",
  };

  return {
    src: imageById[item.id] ?? "/sports/football.png",
    alt: `${title} sports photo`,
  };
}

function resolveSportsLocale(content: HomeSportsSectionContent, direction: "ltr" | "rtl") {
  if (direction === "rtl") return "ar";

  const sample = `${content.title} ${content.body ?? ""}`.toLowerCase();
  return sample.includes("fais partie") || sample.includes("equipe") || sample.includes("mobile")
    ? "fr"
    : "en";
}

export default function HomeSportsSection({
  content,
  direction,
}: {
  content: HomeSportsSectionContent;
  direction: "ltr" | "rtl";
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = Array.from(section.querySelectorAll<HTMLElement>("[data-player-block]"));
    targets.forEach((target) => prepareReveal(target, "scale"));

    const cleanup = observeOnce(section, () => {
      targets.forEach((target, index) => revealScale(target, index * 90));
    });

    return () => cleanup();
  }, []);

  const leadCategory = content.categories[0];
  const sportsCards = content.categories.slice(0, 4);
  const featuredTags = Array.from(new Set(content.categories.flatMap((item) => item.tags))).slice(0, 4);
  const sportsLocale = resolveSportsLocale(content, direction);

  return (
    <SectionShell id="sports" density="tight">
      <section ref={sectionRef} dir={direction} className={cn("sports-section", `sports-section--${sportsLocale}`)}>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:gap-8 xl:gap-10">
          <div className="flex flex-col gap-4 lg:gap-5">
            <div data-player-block className="sports-section-head">
              {content.eyebrow ? (
                <span className="eyebrow text-[var(--color-primary-strong)]">{content.eyebrow}</span>
              ) : null}

              <h2 className="type-heading max-w-[13ch] text-[var(--color-foreground)]">{content.title}</h2>

              {content.body ? (
                <p className="type-body-lg max-w-[42rem] text-[var(--color-foreground-soft)]">{content.body}</p>
              ) : null}
            </div>

            {featuredTags.length ? (
              <div data-player-block className="flex flex-wrap gap-2.5">
                {featuredTags.map((tag) => (
                  <span key={tag} className="player-card-pill player-card-pill--soft">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {sportsCards.length ? (
              <div data-player-block className="sports-card-grid">
                {sportsCards.map((item, index) => {
                  const external = isExternalLink(item.href);
                  const title = getSportsCardTitle(item);
                  const tags = getSportsCardTags(item);
                  const image = getSportsCardImage(item, title);
                  const card = (
                    <SurfaceCard
                      variant={index === 1 ? "accent" : "glass"}
                      hover="lift"
                      className="sports-info-card h-full"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 320px"
                        className="sports-info-card__image"
                      />

                      <div className="sports-info-card__overlay">
                        <div className="sports-info-card__top-tags">
                          {item.eyebrow ? <span className="sports-info-card__eyebrow">{item.eyebrow}</span> : null}
                          {item.badge ? <span className="sports-info-card__badge">{item.badge}</span> : null}
                        </div>

                        <div className="sports-info-card__bottom-tags">
                          <span className="sports-info-card__title-tag">{title}</span>
                          {tags.map((tag) => (
                            <span key={tag} className="sports-info-card__subtag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </SurfaceCard>
                  );

                  return item.href ? (
                    <a
                      key={item.id}
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="sports-card-link"
                    >
                      {card}
                    </a>
                  ) : (
                    <div key={item.id} className="sports-card-link">
                      {card}
                    </div>
                  );
                })}
              </div>
            ) : null}

          </div>

          <div data-player-block className="flex justify-center lg:justify-end lg:self-start">
            <div className="relative w-full max-w-[25rem]">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-[12%] top-[8%] h-[82%] rounded-[999px] bg-[radial-gradient(circle,rgba(92,167,223,0.14),transparent_68%)] blur-3xl"
              />
              <PhoneMockup
                title={leadCategory?.title ?? undefined}
                className="max-w-[18.75rem] sm:max-w-[19.75rem] lg:mx-0 lg:max-w-[20.75rem] xl:max-w-[21.5rem]"
              />
            </div>
          </div>
        </div>
      </section>
    </SectionShell>
  );
}
