import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import PlayerVisual from "@/components/sections/home/PlayerVisual";
import { cn } from "@/lib/format";
import type { HomeDiscoverySectionContent, PlayerVisual as PlayerVisualType } from "@/schemas/landing";

type ShowcaseLocale = "en" | "fr" | "ar";
type ComboArtwork = {
  kind: "combo";
  primary: {
    src: string;
    alt: string;
  };
  secondary: {
    src: string;
    alt: string;
  };
};
type SingleArtwork = {
  kind: "single";
  visual: PlayerVisualType;
};
type TrendingGameArtwork = ComboArtwork | SingleArtwork;

type TrendingGameItem = {
  id: string;
  title: string;
  badge?: string;
  description: string;
  detail?: string;
  href?: string;
  artwork: TrendingGameArtwork;
};

type ShowcaseGameDefinition = Omit<TrendingGameItem, "href">;

const SHOWCASE_GAMES: Record<ShowcaseLocale, ShowcaseGameDefinition[]> = {
  en: [
    {
      id: "game-aviator",
      title: "Aviator",
      badge: "Fast game",
      detail: "quick cashout",
      description:
        "Fast rounds built around timing, early exit choices, and repeat play during short mobile sessions.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/aviatoricon.png",
          alt: "Aviator game artwork",
          theme: "red",
          label: "Aviator",
        },
      },
    },
    {
      id: "game-bass",
      title: "Big Bass",
      badge: "Bonus slot",
      detail: "reel chase",
      description:
        "A lighter slot route with clearer symbols, bonus-chase moments, and steady reel rhythm on mobile.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/bass.png",
          alt: "Big Bass game artwork",
          theme: "blue",
          label: "Bass",
        },
      },
    },
    {
      id: "game-blackjack-live",
      title: "Blackjack Live",
      badge: "Live table",
      detail: "real dealer",
      description:
        "A live-table option for players who want readable action, real-dealer flow, and classic table energy.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/blackjacklive.png",
          alt: "Blackjack Live artwork",
          theme: "light",
          label: "Blackjack",
        },
      },
    },
    {
      id: "game-crystal",
      title: "Crystal",
      badge: "Bright slot",
      detail: "gem bonus",
      description:
        "A brighter slot preview with jewel-led visuals, quick scanning, and simple bonus moments.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/crystal.png",
          alt: "Crystal game artwork",
          theme: "light",
          label: "Crystal",
        },
      },
    },
    {
      id: "game-gates",
      title: "Gates",
      badge: "Multiplier slot",
      detail: "high volatility",
      description:
        "A higher-swing slot choice built around bigger multiplier moments and faster momentum shifts.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/gates.png",
          alt: "Gates game artwork",
          theme: "red",
          label: "Gates",
        },
      },
    },
    {
      id: "game-classics",
      title: "Western",
      badge: "Classic picks",
      detail: "two quick opens",
      description:
        "A combined classics route for western-themed reels and solitaire-style card play inside one lighter entry point.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/western.png",
          alt: "Gates game artwork",
          theme: "red",
          label: "Gates",
        },
      },
    },
  ],
  fr: [
    {
      id: "game-aviator",
      title: "Aviator",
      badge: "Jeu rapide",
      detail: "cashout rapide",
      description:
        "Des manches rapides basées sur le timing, la sortie anticipée et la répétition sur mobile.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/aviatoricon.png",
          alt: "Visuel du jeu Aviator",
          theme: "red",
          label: "Aviator",
        },
      },
    },
    {
      id: "game-bass",
      title: "Big Bass",
      badge: "Slot bonus",
      detail: "course bonus",
      description:
        "Une route slot plus légère avec des symboles plus clairs, des bonus lisibles et un bon rythme mobile.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/bass.png",
          alt: "Visuel du jeu Big Bass",
          theme: "blue",
          label: "Bass",
        },
      },
    },
    {
      id: "game-blackjack-live",
      title: "Blackjack Live",
      badge: "Table live",
      detail: "vrai croupier",
      description:
        "Une table live pour les joueurs qui veulent une action plus lisible et une vraie sensation de casino.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/blackjacklive.png",
          alt: "Visuel Blackjack Live",
          theme: "light",
          label: "Blackjack",
        },
      },
    },
    {
      id: "game-crystal",
      title: "Crystal",
      badge: "Slot lumineux",
      detail: "bonus gemmes",
      description:
        "Un aperçu plus lumineux avec lecture rapide, visuels cristaux et bonus plus simples à suivre.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/crystal.png",
          alt: "Visuel du jeu Crystal",
          theme: "light",
          label: "Crystal",
        },
      },
    },
    {
      id: "game-gates",
      title: "Gates",
      badge: "Slot multiplicateurs",
      detail: "haute volatilité",
      description:
        "Un slot plus nerveux construit autour des multiplicateurs et des changements de rythme plus forts.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/gates.png",
          alt: "Visuel du jeu Gates",
          theme: "red",
          label: "Gates",
        },
      },
    },
    {
      id: "game-classics",
      title: "Western",
      badge: "Classiques",
      detail: "accès direct",
      description:
        "Ambiance western, reels rapides, accès direct.",
      artwork: {
        kind: "single",
        visual: {
          kind: "image",
          src: "/games/western.png",
          alt: "Visuel du jeu Western",
          theme: "red",
          label: "Western",
        }
      },
    },  
  ],
ar: [
  {
    id: "game-aviator",
    title: "أفياتور",
    badge: "لعبة سريعة",
    detail: "سحب سريع",
    description:
      "جولات سريعة تعتمد على التوقيت والخروج المبكر وتكرار اللعب داخل الجلسات القصيرة على الجوال.",
    artwork: {
      kind: "single",
      visual: {
        kind: "image",
        src: "/games/aviatoricon.png",
        alt: "صورة لعبة أفياتور",
        theme: "red",
        label: "Aviator",
      },
    },
  },
  {
    id: "game-bass",
    title: "بيغ باس",
    badge: "سلوت بونص",
    detail: "مطاردة البونص",
    description:
      "مسار سلوت أخف مع رموز أوضح ولحظات بونص سهلة القراءة وإيقاع مناسب للموبايل.",
    artwork: {
      kind: "single",
      visual: {
        kind: "image",
        src: "/games/bass.png",
        alt: "صورة لعبة بيغ باس",
        theme: "blue",
        label: "Bass",
      },
    },
  },
  {
    id: "game-blackjack-live",
    title: "بلاك جاك مباشر",
    badge: "طاولة مباشرة",
    detail: "موزع حقيقي",
    description:
      "خيار طاولة مباشرة لمن يريد حركة أوضح وإيقاعاً قريباً من تجربة الكازينو الكلاسيكية.",
    artwork: {
      kind: "single",
      visual: {
        kind: "image",
        src: "/games/blackjacklive.png",
        alt: "صورة لعبة بلاك جاك مباشر",
        theme: "light",
        label: "Blackjack",
      },
    },
  },
  {
    id: "game-crystal",
    title: "كريستال",
    badge: "سلوت لامع",
    detail: "بونص الجواهر",
    description:
      "معاينة سلوت أكثر إشراقاً مع رموز جواهر واضحة وحركة سهلة القراءة ولحظات بونص أبسط.",
    artwork: {
      kind: "single",
      visual: {
        kind: "image",
        src: "/games/crystal.png",
        alt: "صورة لعبة كريستال",
        theme: "light",
        label: "Crystal",
      },
    },
  },
  {
    id: "game-gates",
    title: "جيتس",
    badge: "سلوت مضاعفات",
    detail: "تقلب مرتفع",
    description:
      "خيار سلوت أعلى حركة مبني حول المضاعفات الأكبر وتبدل الوتيرة بشكل أسرع.",
    artwork: {
      kind: "single",
      visual: {
        kind: "image",
        src: "/games/gates.png",
        alt: "صورة لعبة جيتس",
        theme: "red",
        label: "Gates",
      },
    },
  },
  {
    id: "game-classics",
    title: "ويسترن",
    badge: "كلاسيكيات",
    detail: "ريلز سريعة",
    description:
      "ريلز بطابع ويسترن مع دخول سريع وإيقاع واضح على الجوال.",
    artwork: {
      kind: "single",
      visual: {
        kind: "image",
        src: "/games/western.png",
        alt: "صورة لعبة ويسترن",
        theme: "red",
        label: "Western",
      },
    },
  },
],
};

function isExternalLink(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

function resolveShowcaseLocale(
  games: HomeDiscoverySectionContent,
  direction: "ltr" | "rtl",
): ShowcaseLocale {
  if (direction === "rtl") return "ar";

  const sample = `${games.eyebrow ?? ""} ${games.title} ${games.body ?? ""}`.toLowerCase();
  if (sample.includes("jeux") || sample.includes("joueurs") || sample.includes("aperçu") || sample.includes("apercu")) {
    return "fr";
  }

  return "en";
}

function buildTrendingGames(
  games: HomeDiscoverySectionContent,
  direction: "ltr" | "rtl",
): TrendingGameItem[] {
  const locale = resolveShowcaseLocale(games, direction);
  const linkSources = [...games.featured, ...(games.secondaryFeatured ?? [])];
  const fallbackHref = linkSources.find((item) => item.href)?.href ?? "#";

  return SHOWCASE_GAMES[locale].map((item, index) => ({
    ...item,
    href: linkSources[index]?.href ?? fallbackHref,
  }));
}

function TrendingGameArtwork({ artwork, title }: { artwork: TrendingGameArtwork; title: string }) {
  if (artwork.kind === "single") {
    return (
      <PlayerVisual
        visual={artwork.visual}
        className="home-trending-games__icon"
        imageClassName="home-trending-games__image"
        imageSizes="(max-width: 768px) 192px, 264px"
      />
    );
  }

  return (
    <span className="home-trending-games__icon home-trending-games__icon--combo" aria-hidden="true">
      <span className="home-trending-games__combo-main">
        <Image
          src={artwork.primary.src}
          alt=""
          fill
          sizes="(max-width: 768px) 192px, 264px"
          className="home-trending-games__combo-image home-trending-games__combo-image--main"
        />
      </span>
      <span className="home-trending-games__combo-secondary">
        <Image
          src={artwork.secondary.src}
          alt=""
          fill
          sizes="(max-width: 768px) 80px, 112px"
          className="home-trending-games__combo-image"
        />
      </span>
      <span className="sr-only">{title}</span>
    </span>
  );
}

export default function HomeTrendingGamesCarousel({
  games,
  direction,
}: {
  games: HomeDiscoverySectionContent;
  direction: "ltr" | "rtl";
}) {
  const items = buildTrendingGames(games, direction);

  if (!items.length) {
    return null;
  }

  const tagLabel = games.eyebrow ?? items[0]?.badge;

  return (
    <SectionShell id="games" density="tight">
      <section dir={direction} className="home-trending-games">
        <div className="home-trending-games__intro">
          <div className="home-trending-games__copy">
            {tagLabel ? <span className="home-trending-games__tag player-card-pill">{tagLabel}</span> : null}

            <div className="home-trending-games__headline">
              <h2 className="type-heading home-trending-games__title text-[var(--color-foreground)]">
                {games.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="home-trending-games__stage">
          <span className="home-trending-games__stage-glow home-trending-games__stage-glow--one" aria-hidden />
          <span className="home-trending-games__stage-glow home-trending-games__stage-glow--two" aria-hidden />

          <div className="home-trending-games__viewport">
            <div
              className={cn(
                "home-trending-games__track",
                direction === "rtl" && "home-trending-games__track--rtl",
              )}
            >
              {items.map((item) => {
                const itemHref = item.href ?? "#";
                const external = isExternalLink(itemHref);

                return (
                  <div key={item.id} className="home-trending-games__item">
                    <a
                      href={itemHref}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="home-trending-games__trigger"
                      aria-label={item.title}
                    >
                      <span className="home-trending-games__icon-wrap">
                        <TrendingGameArtwork artwork={item.artwork} title={item.title} />
                      </span>
                      <span className="home-trending-games__name">{item.title}</span>
                    </a>

                    <div className="home-trending-games__popover">
                      <div className="home-trending-games__panel">
                        <a
                          href={itemHref}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                          className="home-trending-games__card-link"
                        >
                          <span className="home-trending-games__card-top">
                            {item.badge ? (
                              <span className="player-card-pill player-card-pill--soft">{item.badge}</span>
                            ) : (
                              <span />
                            )}
                            {item.detail ? (
                              <span className="home-trending-games__card-detail">{item.detail}</span>
                            ) : null}
                          </span>
                          <strong className="home-trending-games__card-title">{item.title}</strong>
                          <span className="home-trending-games__card-body">{item.description}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </SectionShell>
  );
}
