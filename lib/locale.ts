import { getTranslations, type Language } from "@/lib/translations";
import type { HomePageContent, LinkItem, MarketContent } from "@/schemas/landing";

export const tunisiaLocales = ["fr", "en", "ar"] as const;

export type LanguageOption = {
  code: Language;
  label: string;
  href: string;
  active: boolean;
};

type SearchParamsRecord = Record<string, string | string[] | undefined>;

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export function resolveTunisiaLocale(searchParams?: SearchParamsRecord): Language {
  const candidate = firstValue(searchParams?.lang);
  return tunisiaLocales.includes(candidate as Language) ? (candidate as Language) : "fr";
}

export function getTunisiaDirection(locale: Language) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localizeHref(href: string, locale: Language, fallback: Language = "fr") {
  if (/^(https?:|mailto:|tel:)/.test(href)) return href;

  const [pathWithQuery, hash] = href.split("#");
  const [path, queryString] = pathWithQuery.split("?");
  const params = new URLSearchParams(queryString ?? "");

  if (locale === fallback) {
    params.delete("lang");
  } else {
    params.set("lang", locale);
  }

  const query = params.toString();
  return `${path}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}

function localizeLink<T extends LinkItem>(item: T, locale: Language): T {
  return {
    ...item,
    href: localizeHref(item.href, locale),
    children: item.children?.map((child) => localizeLink(child, locale)),
  } as T;
}

export function localizeHomeContentLinks(content: HomePageContent, locale: Language): HomePageContent {
  return {
    ...content,
    nav: {
      ...content.nav,
      brand: {
        ...content.nav.brand,
        href: content.nav.brand.href ? localizeHref(content.nav.brand.href, locale) : undefined,
      },
      items: content.nav.items.map((item) => localizeLink(item, locale)),
      primaryCta: localizeLink(content.nav.primaryCta, locale),
    },
    hero: {
      ...content.hero,
      primaryCta: localizeLink(content.hero.primaryCta, locale),
      secondaryCta: content.hero.secondaryCta ? localizeLink(content.hero.secondaryCta, locale) : undefined,
      stage: {
        ...content.hero.stage,
        carousel: content.hero.stage.carousel.map((item) => ({
          ...item,
          href: localizeHref(item.href, locale),
        })),
      },
    },
    games: {
      ...content.games,
      featured: content.games.featured.map((item) => ({
        ...item,
        href: item.href ? localizeHref(item.href, locale) : undefined,
      })),
      secondaryFeatured: content.games.secondaryFeatured?.map((item) => ({
        ...item,
        href: item.href ? localizeHref(item.href, locale) : undefined,
      })),
      categories: content.games.categories?.map((item) => ({
        ...item,
        href: item.href ? localizeHref(item.href, locale) : undefined,
      })),
    },
    sports: {
      ...content.sports,
      categories: content.sports.categories.map((item) => ({
        ...item,
        href: item.href ? localizeHref(item.href, locale) : undefined,
      })),
    },
    promos: {
      ...content.promos,
      cards: content.promos.cards.map((item) => ({
        ...item,
        href: item.href ? localizeHref(item.href, locale) : undefined,
        linkHref: item.linkHref ? localizeHref(item.linkHref, locale) : undefined,
        inlineCta: item.inlineCta ? localizeLink(item.inlineCta, locale) : undefined,
      })),
    },
    finalCta: {
      ...content.finalCta,
      primary: localizeLink(content.finalCta.primary, locale),
      secondary: content.finalCta.secondary ? localizeLink(content.finalCta.secondary, locale) : undefined,
    },
    footer: {
      ...content.footer,
      homeLinks: content.footer.homeLinks.map((item) => localizeLink(item, locale)),
      partnershipLinks: content.footer.partnershipLinks.map((item) => localizeLink(item, locale)),
      contactLinks: content.footer.contactLinks.map((item) => localizeLink(item, locale)),
    },
  };
}

export function localizePartnershipContentLinks(content: MarketContent, locale: Language): MarketContent {
  return {
    ...content,
    nav: {
      ...content.nav,
      brand: {
        ...content.nav.brand,
        href: content.nav.brand.href ? localizeHref(content.nav.brand.href, locale) : undefined,
      },
      items: content.nav.items.map((item) => localizeLink(item, locale)),
      primaryCta: localizeLink(content.nav.primaryCta, locale),
    },
    hero: {
      ...content.hero,
      primaryCta: localizeLink(content.hero.primaryCta, locale),
      secondaryCta: content.hero.secondaryCta ? localizeLink(content.hero.secondaryCta, locale) : undefined,
    },
    steps: content.steps
      ? {
          ...content.steps,
          items: content.steps.items.map((item) => ({
            ...item,
            primaryCta: item.primaryCta ? localizeLink(item.primaryCta, locale) : undefined,
          })),
        }
      : undefined,
    paths: content.paths
      ? {
          ...content.paths,
          footerPrimaryCta: content.paths.footerPrimaryCta
            ? localizeLink(content.paths.footerPrimaryCta, locale)
            : undefined,
          footerSecondaryCta: content.paths.footerSecondaryCta
            ? localizeLink(content.paths.footerSecondaryCta, locale)
            : undefined,
          items: content.paths.items.map((item) => ({
            ...item,
            primaryCta: item.primaryCta ? localizeLink(item.primaryCta, locale) : undefined,
            secondaryCta: item.secondaryCta ? localizeLink(item.secondaryCta, locale) : undefined,
          })),
        }
      : undefined,
    finalCta: {
      ...content.finalCta,
      primary: localizeLink(content.finalCta.primary, locale),
      secondary: content.finalCta.secondary ? localizeLink(content.finalCta.secondary, locale) : undefined,
    },
    footer: {
      ...content.footer,
      homeLinks: content.footer.homeLinks.map((item) => localizeLink(item, locale)),
      partnershipLinks: content.footer.partnershipLinks.map((item) => localizeLink(item, locale)),
      contactLinks: content.footer.contactLinks.map((item) => localizeLink(item, locale)),
    },
  };
}

export function buildTunisiaLanguageOptions(pathname: string, locale: Language): LanguageOption[] {
  const labels = getTranslations(locale).languageSwitch;

  return tunisiaLocales.map((code) => ({
    code,
    label: labels[code],
    href: localizeHref(pathname, code),
    active: code === locale,
  }));
}
