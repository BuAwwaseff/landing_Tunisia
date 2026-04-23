import type { LinkItem, MarketContent } from "@/schemas/landing";

export const tunisiaLocales = ["en", "ar", "fr"] as const;
export type TunisiaLocale = (typeof tunisiaLocales)[number];

export type LanguageOption = {
  code: TunisiaLocale;
  label: string;
  href: string;
  active: boolean;
};

const localeLabels: Record<TunisiaLocale, string> = {
  en: "EN",
  ar: "AR",
  fr: "FR",
};

type SearchParamsRecord = Record<string, string | string[] | undefined>;

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export function resolveTunisiaLocale(searchParams?: SearchParamsRecord): TunisiaLocale {
  const candidate = firstValue(searchParams?.lang);
  return tunisiaLocales.includes(candidate as TunisiaLocale)
    ? (candidate as TunisiaLocale)
    : "en";
}

export function getTunisiaDirection(locale: TunisiaLocale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localizeHref(href: string, locale: TunisiaLocale, fallback: TunisiaLocale = "en") {
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

export function localizeLink<T extends LinkItem>(item: T, locale: TunisiaLocale): T {
  return {
    ...item,
    href: localizeHref(item.href, locale),
    children: item.children?.map((child) => localizeLink(child, locale)),
  } as T;
}

export function localizeContentLinks(content: MarketContent, locale: TunisiaLocale): MarketContent {
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
      secondaryCta: content.hero.secondaryCta
        ? localizeLink(content.hero.secondaryCta, locale)
        : undefined,
    },
    paths: content.paths
      ? {
          ...content.paths,
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
      secondary: content.finalCta.secondary
        ? localizeLink(content.finalCta.secondary, locale)
        : undefined,
      cards: content.finalCta.cards?.map((card) => ({
        ...card,
        cta: localizeLink(card.cta, locale),
      })),
    },
    footer: {
      ...content.footer,
      links: content.footer.links?.map((link) => localizeLink(link, locale)),
      contactLinks: content.footer.contactLinks?.map((link) => localizeLink(link, locale)),
    },
  };
}

export function buildTunisiaLanguageOptions(
  pathname: string,
  locale: TunisiaLocale,
): LanguageOption[] {
  return tunisiaLocales.map((code) => ({
    code,
    label: localeLabels[code],
    href: localizeHref(pathname, code),
    active: code === locale,
  }));
}
