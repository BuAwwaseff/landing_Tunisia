import type { Metadata } from "next";
import FinalCtaDualCard from "@/components/sections/final-cta/FinalCtaDualCard";
import HeroTunisiaEditorial from "@/components/sections/hero/HeroTunisiaEditorial";
import PathsChoiceCards from "@/components/sections/paths/PathsChoiceCards";
import StepsThreeCol from "@/components/sections/steps/StepsThreeCol";
import ToolsShowcase from "@/components/sections/tools/ToolsShowcase";
import { getTunisiaPartnershipContent } from "@/content/markets/tunisia";
import { getTunisiaDirection, resolveTunisiaLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const defaultContent = getTunisiaPartnershipContent("fr");

export const metadata: Metadata = {
  title: defaultContent.seo.title,
  description: defaultContent.seo.description,
};

export default async function PartnershipPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const locale = resolveTunisiaLocale(resolvedSearchParams);
  const direction = getTunisiaDirection(locale);
  const content = getTunisiaPartnershipContent(locale);

  return (
    <>
      <HeroTunisiaEditorial content={content.hero} direction={direction} />
      {content.steps ? <StepsThreeCol content={content.steps} direction={direction} /> : null}
      {content.paths ? <PathsChoiceCards content={content.paths} direction={direction} /> : null}
      {content.tools ? <ToolsShowcase content={content.tools} direction={direction} /> : null}
      <FinalCtaDualCard content={content.finalCta} direction={direction} />
    </>
  );
}
