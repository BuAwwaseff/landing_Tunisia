"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/layout/SectionHeader";
import SectionShell from "@/components/layout/SectionShell";
import Button from "@/components/ui/Button";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { observeOnce } from "@/motion/observers";
import { prepareReveal, revealScale } from "@/motion/presets";
import type { HomePromoSectionContent } from "@/schemas/landing";
import PlayerVisual from "./PlayerVisual";

function isExternalLink(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export default function HomePromoSection({
  content,
  direction,
}: {
  content: HomePromoSectionContent;
  direction: "ltr" | "rtl";
}) {
  const sectionRef = useRef<HTMLElement>(null);

  function getOfferImageClassName(cardId: string) {
    switch (cardId) {
      case "promo-welcome":
        return "offers-scroll-card__image offers-scroll-card__image--welcome";
      case "promo-matchday":
        return "offers-scroll-card__image offers-scroll-card__image--matchday";
      case "promo-cashier":
        return "offers-scroll-card__image offers-scroll-card__image--cashier";
      default:
        return "offers-scroll-card__image";
    }
  }

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = Array.from(section.querySelectorAll<HTMLElement>("[data-offer-block]"));
    targets.forEach((target) => prepareReveal(target, "scale"));

    const cleanup = observeOnce(section, () => {
      targets.forEach((target, index) => revealScale(target, index * 90));
    });

    return () => cleanup();
  }, []);

  return (
    <SectionShell id="offers" density="tight">
      <section ref={sectionRef} dir={direction} className="player-section-stack">
        <div data-offer-block>
          <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} align="start" />
        </div>

        <div data-offer-block className="offers-grid">
          {content.cards.map((card) => (
            <SurfaceCard
              key={card.id}
              variant="glass"
              hover="lift"
              className={`offers-scroll-card offers-scroll-card--${card.id} h-full`}
            >
              <div className="offers-scroll-card__visual-wrap">
                <PlayerVisual
                  visual={card.visual}
                  className="offers-scroll-card__visual"
                  imageClassName={getOfferImageClassName(card.id)}
                  imageSizes="(max-width: 768px) 100vw, 380px"
                />
              </div>

              <div className="offers-scroll-card__copy">
                <div className="offers-scroll-card__meta">
                  {card.eyebrow ? (
                    <p className="eyebrow text-[var(--color-primary-strong)]">{card.eyebrow}</p>
                  ) : <span />}
                  {card.badge ? <span className="player-card-pill">{card.badge}</span> : null}
                </div>

                <div className="offers-scroll-card__summary">
                  <h3 className="type-card-title text-[var(--color-foreground)]">{card.title}</h3>
                  <p className="type-body text-[var(--color-foreground-soft)]">{card.description}</p>
                </div>

                <div className="offers-scroll-card__list">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="offers-scroll-card__list-item">
                      <span className="offers-scroll-card__dot" aria-hidden />
                      <span className="type-body text-[var(--color-foreground)]">{bullet}</span>
                    </div>
                  ))}
                </div>

                {card.linkHref && card.linkText || card.href && card.ctaLabel ? (
                  <div className="offers-scroll-card__footer">
                    {card.linkHref && card.linkText ? (
                      <a
                        href={card.linkHref}
                        className="offers-scroll-card__link"
                        target={isExternalLink(card.linkHref) ? "_blank" : undefined}
                        rel={isExternalLink(card.linkHref) ? "noreferrer" : undefined}
                      >
                        {card.linkText}
                      </a>
                    ) : card.inlineCta ? (
                      <a
                        href={card.inlineCta.href}
                        className="offers-scroll-card__link"
                        target={isExternalLink(card.inlineCta.href) ? "_blank" : undefined}
                        rel={isExternalLink(card.inlineCta.href) ? "noreferrer" : undefined}
                      >
                        {card.inlineCta.label}
                      </a>
                    ) : (
                      <span className="offers-scroll-card__link offers-scroll-card__link--placeholder" aria-hidden="true" />
                    )}

                    {card.href && card.ctaLabel ? (
                      <Button
                        href={card.href}
                        size="md"
                        external={isExternalLink(card.href)}
                        className="offers-scroll-card__cta"
                      >
                        {card.ctaLabel}
                      </Button>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </SurfaceCard>
          ))}
        </div>
      </section>
    </SectionShell>
  );
}
