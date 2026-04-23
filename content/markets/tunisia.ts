import { getTranslations, type Language } from "@/lib/translations";
import { localizeHomeContentLinks, localizePartnershipContentLinks } from "@/lib/locale";

export function getTunisiaHomeContent(locale: Language) {
  return localizeHomeContentLinks(getTranslations(locale).home, locale);
}

export function getTunisiaPartnershipContent(locale: Language) {
  return localizePartnershipContentLinks(getTranslations(locale).partnership, locale);
}
