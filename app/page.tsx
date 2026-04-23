import type { Metadata } from "next";
import HeroTunisiaHome from "@/components/sections/hero/HeroTunisiaHome";
import HomeTrendingGamesCarousel from "@/components/sections/home/HomeTrendingGamesCarousel";
import HomePromoSection from "@/components/sections/home/HomePromoSection";
import HomeSportsSection from "@/components/sections/home/HomeSportsSection";
import { getTunisiaHomeContent } from "@/content/markets/tunisia";
import { getTunisiaDirection, resolveTunisiaLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const defaultContent = getTunisiaHomeContent("fr");

export const metadata: Metadata = {
  title: defaultContent.seo.title,
  description: defaultContent.seo.description,
};

export default async function HomePage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const locale = resolveTunisiaLocale(resolvedSearchParams);
  const direction = getTunisiaDirection(locale);
  const content = getTunisiaHomeContent(locale);

  return (
    <div className="tunisia-home-page">
      <HeroTunisiaHome content={content.hero} direction={direction} />
      <HomeTrendingGamesCarousel games={content.games} direction={direction} />
      <HomeSportsSection content={content.sports} direction={direction} />
      <HomePromoSection content={content.promos} direction={direction} />
    </div>
  );
}
