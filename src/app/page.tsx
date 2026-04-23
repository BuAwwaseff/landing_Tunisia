import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BenefitsLightShell from "@/components/sections/benefits/BenefitsLightShell";
import FinalCtaDualCard from "@/components/sections/final-cta/FinalCtaDualCard";
import HeroTunisiaEditorial from "@/components/sections/hero/HeroTunisiaEditorial";
import PathsChoiceCards from "@/components/sections/paths/PathsChoiceCards";
import StepsThreeCol from "@/components/sections/steps/StepsThreeCol";
import ToolsShowcase from "@/components/sections/tools/ToolsShowcase";
import { tunisiaConfig } from "@/config/tunisia";
import { tunisiaContent } from "@/content/markets/tunisia";
import {
  buildTunisiaLanguageOptions,
  getTunisiaDirection,
  localizeContentLinks,
  resolveTunisiaLocale,
} from "@/lib/locale";

export default async function HomePage({ searchParams }: PageProps<"/">) {
  const locale = resolveTunisiaLocale(await searchParams);
  const content = localizeContentLinks(tunisiaContent, locale);
  const direction = getTunisiaDirection(locale);
  const languageOptions = tunisiaConfig.flags?.showLanguageSwitch
    ? buildTunisiaLanguageOptions("/", locale)
    : undefined;

  return (
    <div className="page-shell">
      <Header
        nav={content.nav}
        direction={direction}
        languageOptions={languageOptions}
      />

      <main>
        <HeroTunisiaEditorial
          content={content.hero}
          direction={direction}
        />
        <BenefitsLightShell
          content={content.benefits}
          direction={direction}
        />
        {content.steps ? (
          <StepsThreeCol
            content={content.steps}
            direction={direction}
          />
        ) : null}
        {content.paths ? (
          <PathsChoiceCards
            content={content.paths}
            direction={direction}
          />
        ) : null}
        {content.tools ? (
          <ToolsShowcase
            content={content.tools}
            direction={direction}
          />
        ) : null}
        <FinalCtaDualCard
          content={content.finalCta}
          direction={direction}
        />
      </main>

      <Footer
        content={content.footer}
        direction={direction}
      />
    </div>
  );
}
