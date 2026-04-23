"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import SectionShell from "@/components/layout/SectionShell";
import SurfaceCard from "@/components/ui/SurfaceCard";
import { observeOnce } from "@/motion/observers";
import { prepareReveal, revealScale } from "@/motion/presets";
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
  const buttons = [
    {
      href: content.primary.href,
      label: content.primary.label,
      icon: "/whatsapp.png",
      iconAlt: "WhatsApp",
    },
    content.secondary
      ? {
          href: content.secondary.href,
          label: content.secondary.label,
          icon: "/telegram.png",
          iconAlt: "Telegram",
        }
      : null,
  ].filter(Boolean) as Array<{ href: string; label: string; icon: string; iconAlt: string }>;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = Array.from(section.querySelectorAll<HTMLElement>("[data-cta-reveal]"));
    targets.forEach((target) => prepareReveal(target, "scale"));

    const cleanup = observeOnce(section, () => {
      targets.forEach((target, index) => revealScale(target, index * 90));
    });

    return () => cleanup();
  }, []);

  return (
    <SectionShell id="final-cta" density="tight">
      <section ref={sectionRef} dir={direction}>
        <SurfaceCard variant="stage" className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8">
            <div className="max-w-3xl space-y-4">
              {content.eyebrow ? (
                <div data-cta-reveal className="eyebrow section-divider w-fit text-[var(--color-primary-strong)]">
                  {content.eyebrow}
                </div>
              ) : null}
              <h2 data-cta-reveal className="type-heading text-[var(--color-foreground)]">
                {content.title}
              </h2>
              <p data-cta-reveal className="type-body-lg">
                {content.body}
              </p>
            </div>

            <div data-cta-reveal className="flex flex-col gap-4">
              {content.helperText ? <p className="type-body text-[var(--color-foreground-soft)]">{content.helperText}</p> : null}

              <div className="grid gap-3 sm:grid-cols-2">
                {buttons.map((item) => (
                  <a
                    key={`${item.icon}-${item.label}`}
                    href={item.href}
                    target={isExternalLink(item.href) ? "_blank" : undefined}
                    rel={isExternalLink(item.href) ? "noreferrer" : undefined}
                    className="cta-unfold-button"
                  >
                    <span className="cta-unfold-button__inner">
                      <Image src={item.icon} alt={item.iconAlt} width={18} height={18} className="cta-unfold-button__icon" />
                      <span className="cta-unfold-button__label">{item.label}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SurfaceCard>
      </section>
    </SectionShell>
  );
}
