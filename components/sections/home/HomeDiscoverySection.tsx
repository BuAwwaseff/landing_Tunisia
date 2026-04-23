"use client";

import { useEffect, useRef } from "react";
import SectionShell from "@/components/layout/SectionShell";
import { observeOnce } from "@/motion/observers";
import { prepareReveal, revealScale } from "@/motion/presets";
import type { HomeDiscoverySectionContent } from "@/schemas/landing";
import { CategoryGrid, FeaturedGrid } from "./HomeCardGrids";

export default function HomeDiscoverySection({
  id,
  content,
  direction,
}: {
  id: string;
  content: HomeDiscoverySectionContent;
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

  return (
    <SectionShell id={id} density="tight">
      <section ref={sectionRef} dir={direction} className="player-section-stack player-section-stack--compact">
        <div data-player-block className="player-section-inlinehead">
          {content.eyebrow ? (
            <span className="eyebrow text-[var(--color-primary-strong)]">{content.eyebrow}</span>
          ) : null}
          <p className="player-section-inlinehead__title">{content.title}</p>
          {content.body ? <p className="player-section-inlinehead__body">{content.body}</p> : null}
        </div>

        <div data-player-block>
          <FeaturedGrid items={content.featured} />
        </div>

        {content.secondaryFeatured?.length ? (
          <div data-player-block>
            <FeaturedGrid items={content.secondaryFeatured} />
          </div>
        ) : content.categories?.length ? (
          <div data-player-block>
            <CategoryGrid items={content.categories} />
          </div>
        ) : null}
      </section>
    </SectionShell>
  );
}
