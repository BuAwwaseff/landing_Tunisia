"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { tunisiaConfig } from "@/config/tunisia";
import { getTunisiaHomeContent, getTunisiaPartnershipContent } from "@/content/markets/tunisia";
import {
  buildTunisiaLanguageOptions,
  getTunisiaDirection,
  resolveTunisiaLocale,
} from "@/lib/locale";

export default function MarketPageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const locale = resolveTunisiaLocale(Object.fromEntries(searchParams.entries()));
  const direction = getTunisiaDirection(locale);
  const isPartnershipPage = pathname.startsWith("/partnership");
  const content = isPartnershipPage
    ? getTunisiaPartnershipContent(locale)
    : getTunisiaHomeContent(locale);
  const languageOptions = tunisiaConfig.flags?.showLanguageSwitch
    ? buildTunisiaLanguageOptions(pathname, locale)
    : undefined;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [direction, locale]);

  return (
    <div className="page-shell" dir={direction} lang={locale}>
      <Header nav={content.nav} direction={direction} languageOptions={languageOptions} />
      <main className="page-main">{children}</main>
      <Footer content={content.footer} direction={direction} />
    </div>
  );
}
