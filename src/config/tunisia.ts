import type { MarketPageConfig } from "@/schemas/landing";

export const tunisiaConfig: MarketPageConfig = {
  market: "Tunisia",
  slug: "tunisia",
  locale: "mixed",
  direction: "ltr",
  themeFamily: "editorial-premium",
  backgroundVariant: "bg-premium-minimal",
  sections: {
    hero: "hero-editorial",
    benefits: "benefits-light-shell",
    steps: "steps-three-col",
    paths: "paths-choice-cards",
    tools: "tools-showcase",
    finalCta: "final-cta-dual-card",
    footer: "footer-full",
  },
  flags: {
    showLanguageSwitch: true,
    enableCountUp: true,
  },
};
