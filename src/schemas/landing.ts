export type ThemeTokens = {
  color: {
    bg: string;
    bgTop: string;
    foreground: string;
    foregroundSoft: string;
    primary: string;
    primarySoft: string;
    primaryStrong: string;
    secondary?: string;
    surface: string;
    surfaceStrong: string;
    surfaceAccent: string;
    borderSoft: string;
    borderStrong: string;
    gridLine: string;
    glow: string;
    success?: string;
    danger?: string;
  };
  type: {
    display: string;
    heading: string;
    subheading: string;
    cardTitle: string;
    bodyLg: string;
    body: string;
    label: string;
    meta: string;
    metric: string;
    metricSecondary: string;
    stat: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    pill: string;
  };
  space: {
    sectionY: string;
    sectionYMobile: string;
    containerX: string;
    cardPadding: string;
    gridGap: string;
  };
  shadow: {
    soft: string;
    card: string;
    hero: string;
    glow: string;
  };
  motion: {
    durationFast: number;
    durationBase: number;
    durationSlow: number;
    durationLoop: number;
    easingStandard: string;
    easingEntrance: string;
    easingEmphasis: string;
  };
};

export type ThemeCssVariables = Record<`--${string}`, string>;

export type LinkItem = {
  label: string;
  href: string;
  children?: LinkItem[];
};

export type BrandInfo = {
  eyebrow: string;
  title: string;
  href?: string;
  logoSrc?: string;
  logoAlt?: string;
};

export type StatItem = {
  label: string;
  value: string;
  note?: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
};

export type HeroStageContent = {
  eyebrow?: string;
  title: string;
  badge?: string;
  metrics?: StatItem[];
  lanes?: Array<{
    label: string;
    value: number;
    note?: string;
  }>;
  note?: string;
  insight?: {
    eyebrow?: string;
    title: string;
    body: string;
  };
};

export type CalculatorInput = {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  prefix?: string;
  suffix?: string;
};

export type CalculatorOutput = {
  key: string;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export type ToolPanelContent = {
  eyebrow?: string;
  title: string;
  badge?: string;
  timeframeLabel?: string;
  summaryItems?: Array<{
    label: string;
    value: string;
  }>;
};

export type MarketContent = {
  seo: {
    title: string;
    description: string;
  };
  nav: {
    brand: BrandInfo;
    items: LinkItem[];
    primaryCta: LinkItem;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlightedWords?: string[];
    body: string;
    primaryCta: LinkItem;
    secondaryCta?: LinkItem;
    stats?: StatItem[];
    stage?: HeroStageContent;
  };
  benefits: {
    eyebrow?: string;
    title: string;
    body?: string;
    items: Array<{ title: string; body: string; icon?: string }>;
  };
  steps?: {
    eyebrow?: string;
    title: string;
    body?: string;
    items: Array<{ step: string; title: string; body: string }>;
  };
  paths?: {
    eyebrow?: string;
    title: string;
    body?: string;
    items: Array<{
      type: "agent" | "partner" | "custom";
      eyebrow?: string;
      title: string;
      body: string;
      bullets: string[];
      primaryCta?: LinkItem;
      secondaryCta?: LinkItem;
    }>;
  };
  tools?: {
    eyebrow?: string;
    title: string;
    body?: string;
    stats?: StatItem[];
    showcaseLabel?: string;
    panel?: ToolPanelContent;
    calculator?: {
      roleOptions: string[];
      inputs: CalculatorInput[];
      outputs: CalculatorOutput[];
      note?: string;
      helperItems?: string[];
    };
    showcase?: Array<{
      title: string;
      body: string;
      image?: string;
      tags?: string[];
    }>;
  };
  finalCta: {
    eyebrow?: string;
    title: string;
    body: string;
    primary: LinkItem;
    secondary?: LinkItem;
    cards?: Array<{
      eyebrow?: string;
      title: string;
      body: string;
      cta: LinkItem;
    }>;
  };
  footer: {
    brand: string;
    body?: string;
    navigationLabel?: string;
    contactLabel?: string;
    links?: LinkItem[];
    legal?: string;
    contactLinks?: LinkItem[];
  };
};

export type MarketPageConfig = {
  market: string;
  slug: string;
  locale: "en" | "ar" | "fr" | "mixed";
  direction: "ltr" | "rtl";
  themeFamily:
    | "gold-classic"
    | "green-depth"
    | "editorial-premium"
    | "saudi-premium"
    | "red-green-national";
  backgroundVariant:
    | "bg-spotlight"
    | "bg-depth"
    | "bg-grid-minimal"
    | "bg-premium-minimal";
  sections: {
    hero: "hero-split" | "hero-centered" | "hero-typographic" | "hero-editorial";
    benefits:
      | "benefits-glass-grid"
      | "benefits-dashboard"
      | "benefits-light-shell";
    steps?: "steps-three-col" | "steps-timeline";
    paths?: "paths-dual-card" | "paths-choice-cards";
    tools?: "tools-calculator" | "tools-carousel" | "tools-showcase";
    finalCta:
      | "final-cta-panel"
      | "final-cta-expand"
      | "final-cta-dual-card";
    footer: "footer-minimal" | "footer-full";
  };
  flags?: {
    showLanguageSwitch?: boolean;
    enableCountUp?: boolean;
  };
};
