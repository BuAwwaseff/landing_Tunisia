export type ThemeTokens = {
  color: {
    bg: string;
    bgTop: string;
    foreground: string;
    foregroundSoft: string;
    primary: string;
    primarySoft: string;
    primaryStrong: string;
    secondary: string;
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

export type PlayerVisualTheme = "red" | "blue" | "light" | "ink";

export type PlayerIcon =
  | "aviator"
  | "crash"
  | "slots"
  | "live-casino"
  | "football"
  | "globe"
  | "basketball"
  | "tennis"
  | "esports"
  | "bonus"
  | "wallet"
  | "shield"
  | "support"
  | "signal";

export type PlayerVisual =
  | {
      kind: "icon";
      icon: PlayerIcon;
      theme?: PlayerVisualTheme;
      label?: string;
    }
  | {
      kind: "image";
      src: string;
      alt: string;
      theme?: PlayerVisualTheme;
      label?: string;
    };

export type HomeHeroSlide = {
  id: string;
  title: string;
  badge?: string;
  description: string;
  highlights?: string[];
  rating: number;
  reviewLabel: string;
  details: Array<{
    label: string;
    value: string;
  }>;
  href: string;
  ctaLabel: string;
  visual: PlayerVisual;
};

export type HomeHeroContent = {
  eyebrow: string;
  title: string;
  highlightedWords?: string[];
  body: string;
  primaryCta: LinkItem;
  secondaryCta?: LinkItem;
  stats?: StatItem[];
  highlights?: string[];
  stage: {
    eyebrow?: string;
    title: string;
    body: string;
    carousel: HomeHeroSlide[];
  };
};

export type HomeFeaturedCard = {
  id: string;
  eyebrow?: string;
  title: string;
  badge?: string;
  description: string;
  rating?: number;
  stats?: string[];
  metric?: string;
  href?: string;
  ctaLabel?: string;
  visual: PlayerVisual;
};

export type HomeCategoryCard = {
  id: string;
  eyebrow?: string;
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  href?: string;
  visual: PlayerVisual;
};

export type HomeDiscoverySectionContent = {
  eyebrow?: string;
  title: string;
  body?: string;
  featured: HomeFeaturedCard[];
  secondaryFeatured?: HomeFeaturedCard[];
  categories?: HomeCategoryCard[];
};

export type HomeSportsSectionContent = {
  eyebrow?: string;
  title: string;
  body?: string;
  categories: HomeCategoryCard[];
};

export type HomeTrustSectionContent = {
  eyebrow?: string;
  title: string;
  body?: string;
  items: Array<{
    title: string;
    body: string;
    metric?: string;
    icon: "shield" | "support" | "signal" | "wallet";
  }>;
};

export type HomePromoSectionContent = {
  eyebrow?: string;
  title: string;
  body?: string;
  cards: Array<{
    id: string;
    eyebrow?: string;
    badge?: string;
    title: string;
    description: string;
    bullets: string[];
    href?: string;
    ctaLabel?: string;
    linkText?: string;
    linkHref?: string;
    inlineCta?: LinkItem;
    visual: PlayerVisual;
  }>;
};

export type HomeFinalCtaContent = {
  eyebrow?: string;
  title: string;
  body: string;
  primary: LinkItem;
  secondary?: LinkItem;
};

export type FooterContent = {
  brand: string;
  body?: string;
  homeLabel: string;
  homeLinks: LinkItem[];
  partnershipLabel: string;
  partnershipLinks: LinkItem[];
  contactLabel: string;
  legal?: string;
  contactLinks: LinkItem[];
};

export type HomePageContent = {
  seo: {
    title: string;
    description: string;
  };
  nav: {
    brand: BrandInfo;
    items: LinkItem[];
    primaryCta: LinkItem;
  };
  hero: HomeHeroContent;
  games: HomeDiscoverySectionContent;
  sports: HomeSportsSectionContent;
  trust: HomeTrustSectionContent;
  promos: HomePromoSectionContent;
  finalCta: HomeFinalCtaContent;
  footer: FooterContent;
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
    items: Array<{
      title: string;
      body: string;
      icon?: "support" | "payouts" | "reporting" | "creative";
    }>;
  };
  steps?: {
    eyebrow?: string;
    title: string;
    body?: string;
    items: Array<{
      step: string;
      title: string;
      body: string;
      imageSrc?: string;
      imageAlt?: string;
      primaryCta?: LinkItem;
    }>;
  };
  paths?: {
    eyebrow?: string;
    title: string;
    body?: string;
    footerPrimaryCta?: LinkItem;
    footerSecondaryCta?: LinkItem;
    items: Array<{
      type: "partner" | "agent" | "custom";
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
    panel?: {
      eyebrow?: string;
      title: string;
      badge?: string;
      timeframeLabel?: string;
      summaryItems?: Array<{
        label: string;
        value: string;
      }>;
    };
    showcase?: Array<{
      title: string;
      body: string;
      tags?: string[];
    }>;
  };
  finalCta: {
    eyebrow?: string;
    title: string;
    body: string;
    helperText?: string;
    primary: LinkItem;
    secondary?: LinkItem;
  };
  footer: FooterContent;
};

export type MarketPageConfig = {
  market: string;
  slug: string;
  direction: "ltr" | "rtl";
  themeFamily: "coastal-premium";
  backgroundVariant: "bg-premium-minimal";
  flags?: {
    showLanguageSwitch?: boolean;
    enableCountUp?: boolean;
  };
};
