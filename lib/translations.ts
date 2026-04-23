import type { HomePageContent, MarketContent } from "@/schemas/landing";

export type Language = "fr" | "en" | "ar";

type TunisiaTranslations = {
  languageSwitch: Record<Language, string>;
  home: HomePageContent;
  partnership: MarketContent;
};

const routes = {
  home: "/",
  top: "/#top",
  games: "/#games",
  sports: "/#sports",
  trust: "/#trust",
  offers: "/#offers",
  play: "/#play",
  agent: "/agent",
  partnership: "/partnership",
  partnershipTop: "/partnership#top",
  benefits: "/partnership#benefits",
  steps: "/partnership#steps",
  paths: "/partnership#paths",
  tools: "/partnership#tools",
  finalCta: "/partnership#final-cta",
} as const;

const channels = {
  whatsapp: "https://wa.me/21655011223",
  telegram: "https://t.me/tunisia_partner_desk",
  email: "mailto:partners@tunisiadesk.com",
} as const;

export const translations = {
  en: {
    languageSwitch: {
      fr: "FR",
      en: "EN",
      ar: "AR",
    },
    home: {
      seo: {
        title: "Tunisia | Play Top Games, Live Sports, and Casino Favorites",
        description:
          "Discover fast games, live sports, casino favorites, and a smoother mobile-first way to start playing in Tunisia.",
      },
      nav: {
        brand: {
          eyebrow: "Tunisia",
          title: "Market",
          href: routes.home,
          logoSrc: "/logo.svg",
          logoAlt: "Tunisia Market",
        },
        items: [
          {
            label: "Home",
            href: routes.home,
            children: [
              { label: "Overview", href: routes.top },
              { label: "Games", href: routes.games },
              { label: "Sports", href: routes.sports },
              { label: "Offers", href: routes.offers },
              { label: "Play now", href: routes.play },
            ],
          },
          {
            label: "Partnership",
            href: routes.partnership,
            children: [
              { label: "Overview", href: routes.partnershipTop },
              { label: "Steps", href: routes.steps },
              { label: "Models", href: routes.paths },
              { label: "Benefits", href: routes.benefits },
              { label: "Contact", href: routes.finalCta },
            ],
          },
        ],
        primaryCta: {
          label: "Play now",
          href: routes.play,
        },
      },
      hero: {
        eyebrow: "Ready to play?",
        title: "Play the best games in Tunisia.",
        highlightedWords: ["best games"],
        body:
          "Jump into fast games, live sports, and casino favorites in seconds. Everything is built to help you find what you want and start playing fast.",
        primaryCta: {
          label: "Start playing",
          href: routes.play,
        },
        secondaryCta: {
          label: "Browse games",
          href: routes.games,
        },
        stats: [
          {
            label: "fast picks",
            value: "18",
            note: "games and sports previews kept close to the top",
            numericValue: 18,
          },
          {
            label: "live focus",
            value: "4",
            note: "sports blocks built for quick scanning",
            numericValue: 4,
          },
          {
            label: "access channels",
            value: "2",
            note: "player route kept simple",
            numericValue: 2,
          },
        ],
        highlights: [
          "mobile-first discovery",
          "clean Arabic and French support",
          "faster route to access",
        ],
        stage: {
          eyebrow: "Trending now",
          title: "Start with the hottest picks.",
          body:
            "Choose between fast games, live football, and live tables without digging through a crowded home screen.",
          carousel: [
            {
              id: "crash",
              title: "Crash",
              badge: "Hot game",
              description:
                "Jump into short, high-speed rounds, watch the multiplier rise, and cash out when the timing feels right.",
              highlights: ["short rounds", "quick cashout", "mobile ready"],
              rating: 4.9,
              reviewLabel: "player score",
              details: [
                { label: "format", value: "fast game" },
                { label: "pace", value: "high" },
                { label: "best use", value: "quick sessions" },
              ],
              href: routes.play,
              ctaLabel: "Play Crash",
              visual: {
                kind: "image",
                src: "/hero/tunisia-crash-preview.png",
                alt: "Crash game preview",
                theme: "red",
                label: "Fast",
              },
            },
            {
              id: "football-live",
              title: "Live football",
              badge: "Live now",
              description:
                "Follow the biggest matches, ride the momentum, and get to live football without wasting taps.",
              highlights: ["top leagues", "live focus", "matchday peaks"],
              rating: 4.8,
              reviewLabel: "player score",
              details: [
                { label: "format", value: "live sport" },
                { label: "pace", value: "high" },
                { label: "best use", value: "match nights" },
              ],
              href: routes.sports,
              ctaLabel: "See live sports",
              visual: {
                kind: "image",
                src: "/hero/tunisia-football-preview.png",
                alt: "Live football preview",
                theme: "blue",
                label: "Live",
              },
            },
            {
              id: "live-casino",
              title: "Live casino",
              badge: "Live tables",
              description:
                "Settle into real-dealer action with a premium live-table feel and an easier way to choose your next table.",
              highlights: ["clean tables", "steady rhythm", "premium feel"],
              rating: 4.7,
              reviewLabel: "player score",
              details: [
                { label: "format", value: "live table" },
                { label: "pace", value: "steady" },
                { label: "best use", value: "late play" },
              ],
              href: routes.games,
              ctaLabel: "Open live tables",
              visual: {
                kind: "image",
                src: "/hero/tunisia-live-casino-preview.png",
                alt: "Live casino preview",
                theme: "light",
                label: "Table",
              },
            },
          ],
        },
      },
      games: {
        eyebrow: "Top games",
        title: "Choose your next game in seconds.",
        body:
          "From fast rounds to live tables and popular slots, everything is laid out to help you jump straight into the action.",
        featured: [
          {
            id: "game-crash",
            eyebrow: "Fast game",
            title: "Crash",
            badge: "Top pick",
            description:
              "Fast-entry rounds with clear timing and strong repeat play during short sessions.",
            rating: 4.9,
            stats: ["quick cashout"],
            metric: "player score",
            href: routes.play,
            ctaLabel: "Get access",
            visual: {
              kind: "icon",
              icon: "crash",
              theme: "red",
              label: "Crash",
            },
          },
          {
            id: "game-slots",
            eyebrow: "Slots",
            title: "Turbo slots",
            badge: "Mobile fit",
            description:
              "Shorter slot sessions that work well on mobile and stay easy to explore from the home page.",
            rating: 4.7,
            stats: ["quick spins"],
            metric: "player score",
            href: routes.games,
            ctaLabel: "See games",
            visual: {
              kind: "icon",
              icon: "slots",
              theme: "blue",
              label: "Slots",
            },
          },
          {
            id: "game-live",
            eyebrow: "Tables",
            title: "Live tables",
            badge: "Trusted",
            description:
              "A calmer live-table route for players who want steadier rhythm and clearer table choice.",
            rating: 4.6,
            stats: ["live rooms"],
            metric: "player score",
            href: routes.play,
            ctaLabel: "Open access",
            visual: {
              kind: "icon",
              icon: "live-casino",
              theme: "light",
              label: "Live",
            },
          },
        ],
        secondaryFeatured: [
          {
            id: "game-football-instant",
            eyebrow: "Instant play",
            title: "Quick football games",
            badge: "Short sessions",
            description:
              "Simple football-style picks that support quicker play and lighter entry on mobile.",
            rating: 4.5,
            stats: ["easy entry"],
            metric: "player score",
            href: routes.games,
            ctaLabel: "See games",
            visual: {
              kind: "icon",
              icon: "football",
              theme: "red",
              label: "Quick",
            },
          },
          {
            id: "game-wallet",
            eyebrow: "Access",
            title: "Simple deposits",
            badge: "Clear route",
            description:
              "The player route keeps deposit and access cues simple so the next step feels easy to follow.",
            rating: 4.8,
            stats: ["clear flow"],
            metric: "player score",
            href: routes.play,
            ctaLabel: "Get access",
            visual: {
              kind: "icon",
              icon: "wallet",
              theme: "blue",
              label: "Access",
            },
          },
          {
            id: "game-signal",
            eyebrow: "Discovery",
            title: "Live picks",
            badge: "Fast board",
            description:
              "A tighter home route for moving quickly between top game categories without losing context.",
            rating: 4.7,
            stats: ["quick preview"],
            metric: "player score",
            href: routes.top,
            ctaLabel: "Back to top",
            visual: {
              kind: "icon",
              icon: "signal",
              theme: "ink",
              label: "Board",
            },
          },
        ],
      },
      sports: {
        eyebrow: "Sports",
        title: "Be a part of the game, be a part of the team.",
        body:
          "Back football first, then keep the night going with live action, esports energy, and fast games that keep everything feeling active on mobile.",
        categories: [
          {
            id: "sport-football",
            eyebrow: "Live sport",
            title: "Live football",
            badge: "Matchday rush",
            description:
              "Back the biggest matches, chase the big moments, and stay close to the action all night.",
            tags: ["live football", "big leagues", "matchday rush"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "football",
              theme: "blue",
              label: "Football",
            },
          },
          {
            id: "sport-basketball",
            eyebrow: "Basketball",
            title: "Basketball action",
            badge: "Fast breaks",
            description:
              "Follow fast breaks, quarter swings, and quick live movement built for mobile match nights.",
            tags: ["fast breaks", "quarter lines", "live pace"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "basketball",
              theme: "red",
              label: "Basketball",
            },
          },
          {
            id: "sport-live-markets",
            eyebrow: "Ice hockey",
            title: "Hockey nights",
            badge: "Fast ice",
            description:
              "Follow quick shifts, pressure plays, and fast live movement on the ice.",
            tags: ["power plays", "fast shifts", "live ice"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "signal",
              theme: "light",
              label: "Hockey",
            },
          },
          {
            id: "sport-esports",
            eyebrow: "Video games",
            title: "Esports arena",
            badge: "Live matches",
            description:
              "Follow competitive games, live maps, team fights, and momentum shifts from the arena.",
            tags: ["live maps", "team fights", "gaming arena"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "esports",
              theme: "ink",
              label: "Esports",
            },
          },
        ],
      },
      trust: {
        eyebrow: "Why you'll love it",
        title: "Clearer choices, smoother play, less clutter.",
        body:
          "Everything is built to help you find a game fast, move with confidence, and enjoy the experience without the noise.",
        items: [
          {
            title: "Jump in faster",
            body:
              "Go from the home page to games, sports, or support without second-guessing the next step.",
            metric: "quick start",
            icon: "wallet",
          },
          {
            title: "Play in your language",
            body:
              "French, Arabic, and English stay clean and easy to use from the first tap.",
            metric: "3 languages",
            icon: "support",
          },
          {
            title: "See the good stuff first",
            body:
              "The page puts top games, live action, and useful offers up front instead of burying them under banners.",
            metric: "clean layout",
            icon: "shield",
          },
        ],
      },
      promos: {
        eyebrow: "Offers",
        title: "Bonuses and offers that actually feel worth it.",
        body:
          "Welcome rewards, matchday boosts, and clear support give you more reasons to play without hesitation.",
        cards: [
          {
            id: "promo-welcome",
            eyebrow: "Offer 01",
            badge: "First deposit",
            title: "200% on your first deposit",
            description: "100 free spins",
            bullets: [
              "bigger welcome value",
              "extra spins included",
              "fast mobile start",
            ],
            href: routes.play,
            ctaLabel: "Claim the offer",
            visual: {
              kind: "image",
              src: "/offers/gifts.png",
              alt: "Welcome bonus gifts artwork",
              theme: "red",
              label: "Bonus",
            },
          },
          {
            id: "promo-matchday",
            eyebrow: "Offer 02",
            badge: "Live betting",
            title: "Live betting",
            description: "All types of sport",
            bullets: [
              "football and match nights",
              "live action on demand",
              "more sports in one place",
            ],
            href: routes.sports,
            ctaLabel: "See sports",
            linkText: "Need help getting started?",
            linkHref: routes.play,
            visual: {
              kind: "image",
              src: "/offers/ball.png",
              alt: "Live betting football artwork",
              theme: "blue",
              label: "Sport",
            },
          },
          {
            id: "promo-cashier",
            eyebrow: "Offer 03",
            badge: "Local agents",
            title: "Local agents",
            description: "Clear and safe system",
            bullets: [
              "trusted local support",
              "clear payment help",
              "safe access flow",
            ],
            inlineCta: {
              label: "Become an agent",
              href: routes.agent,
            },
            href: routes.play,
            ctaLabel: "Start now",
            visual: {
              kind: "image",
              src: "/offers/cashier.png",
              alt: "Cashier and local agent artwork",
              theme: "light",
              label: "Agent",
            },
          },
        ],
      },
      finalCta: {
        eyebrow: "Ready when you are",
        title: "Start playing whenever you're ready.",
        body:
          "Message us, get set up, and jump back into the games, sports, and offers you want most.",
        primary: {
          label: "Start on WhatsApp",
          href: channels.whatsapp,
        },
        secondary: {
          label: "See the games",
          href: routes.games,
        },
      },
      footer: {
        brand: "Tunisia Market",
        body:
          "Your place for top games, live sports, player offers, and a faster mobile-first way to play in Tunisia.",
        homeLabel: "Home",
        homeLinks: [
          { label: "Overview", href: routes.top },
          { label: "Games", href: routes.games },
          { label: "Sports", href: routes.sports },
          { label: "Offers", href: routes.offers },
          { label: "Play now", href: routes.play },
        ],
        partnershipLabel: "Partnership",
        partnershipLinks: [
          { label: "Overview", href: routes.partnershipTop },
          { label: "Steps", href: routes.steps },
          { label: "Models", href: routes.paths },
          { label: "Benefits", href: routes.benefits },
          { label: "Contact", href: routes.finalCta },
        ],
        contactLabel: "Contact",
        legal: "Copyright 2026 Tunisia Market. All rights reserved.",
        contactLinks: [
          { label: "WhatsApp", href: channels.whatsapp },
          { label: "Telegram", href: channels.telegram },
          { label: "Email", href: channels.email },
        ],
      },
    },
    partnership: {
      seo: {
        title: "Tunisia Partnerships | Partners, Agents, Growth Tools",
        description:
          "A business-facing Tunisia partnership page for partners and agents who need clear onboarding, cleaner reporting, and direct support.",
      },
      nav: {
        brand: {
          eyebrow: "Tunisia",
          title: "Market",
          href: routes.home,
          logoSrc: "/logo.svg",
          logoAlt: "Tunisia Market",
        },
        items: [
          {
            label: "Home",
            href: routes.home,
            children: [
              { label: "Overview", href: routes.top },
              { label: "Games", href: routes.games },
              { label: "Sports", href: routes.sports },
              { label: "Offers", href: routes.offers },
              { label: "Access", href: routes.play },
            ],
          },
          {
            label: "Partnership",
            href: routes.partnership,
            children: [
              { label: "Overview", href: routes.partnershipTop },
              { label: "Steps", href: routes.steps },
              { label: "Models", href: routes.paths },
              { label: "Benefits", href: routes.benefits },
              { label: "Contact", href: routes.finalCta },
            ],
          },
        ],
        primaryCta: {
          label: "Apply for partnership",
          href: routes.finalCta,
        },
      },
      hero: {
        eyebrow: "Tunisia partnership",
        title: "A clean Tunisia partnership route for partners and agents.",
        highlightedWords: ["partnership route"],
        body:
          "This page is built for business-side qualification, launch planning, reporting clarity, and direct support once a partner or agent is approved.",
        primaryCta: {
          label: "Apply for partnership",
          href: routes.finalCta,
        },
        secondaryCta: {
          label: "Review partnership models",
          href: routes.paths,
        },
        stats: [
          {
            label: "review window",
            value: "24h",
            note: "for qualified submissions",
            numericValue: 24,
            suffix: "h",
          },
          {
            label: "reporting cycle",
            value: "7d",
            note: "structured weekly follow-up",
            numericValue: 7,
            suffix: "d",
          },
          {
            label: "commercial paths",
            value: "2",
            note: "partner and agent routes",
            numericValue: 2,
          },
        ],
        stage: {
          eyebrow: "Operating view",
          title: "A partnership setup built for launch control, follow-through, and clearer decisions.",
          badge: "Business route",
          metrics: [
            {
              label: "launch readiness",
              value: "92%",
              note: "approval and setup benchmark",
              numericValue: 92,
              suffix: "%",
            },
            {
              label: "desk response",
              value: "18m",
              note: "support median",
              numericValue: 18,
              suffix: "m",
            },
            {
              label: "active lanes",
              value: "12",
              note: "sources tracked in one view",
              numericValue: 12,
            },
          ],
          lanes: [
            {
              label: "partner onboarding",
              value: 89,
              note: "commercial review, reporting setup, and go-live steps stay aligned",
            },
            {
              label: "agent activation",
              value: 82,
              note: "network-led launch with faster escalation and support contact",
            },
            {
              label: "weekly follow-up",
              value: 77,
              note: "a cleaner review rhythm once the route is live",
            },
          ],
          note:
            "The business page is intentionally separate from the player home page, so partner intent stays clear from the first screen to the final contact step.",
        },
      },
      benefits: {
        eyebrow: "Why this route",
        title: "A tighter Tunisia partnership setup for partners and agents.",
        body:
          "The commercial route is designed to be easier to qualify, easier to track, and easier to manage once activity starts moving.",
        items: [
          {
            title: "Cleaner reporting",
            body:
              "Review volume, source quality, and payout visibility without forcing every decision through a noisy dashboard.",
            icon: "reporting",
          },
          {
            title: "Faster launch support",
            body:
              "Qualification, setup, and next steps stay in one route so approved partners can move with less delay.",
            icon: "support",
          },
          {
            title: "Structured payout rhythm",
            body:
              "Keep approval status and weekly payout follow-up readable enough for real operating work.",
            icon: "payouts",
          },
          {
            title: "Market-ready assets",
            body:
              "Use practical materials, clearer hooks, and support that fit the Tunisia route without adding noise.",
            icon: "creative",
          },
        ],
      },
      steps: {
        eyebrow: "How it works",
        title: "3 simple steps",
        items: [
          {
            step: "01",
            title: "Sign up",
            body: "Sign up directly by contacting us.",
            imageSrc: "/how/join.png",
            imageAlt: "Join step artwork",
            primaryCta: {
              label: "Join us",
              href: routes.finalCta,
            },
          },
          {
            step: "02",
            title: "Start attracting players",
            body: "Start attracting players using ready marketing kits.",
            imageSrc: "/how/marketing.png",
            imageAlt: "Marketing step artwork",
          },
          {
            step: "03",
            title: "Repeat and scale",
            body: "Repeat and scale.",
            imageSrc: "/how/scale.png",
            imageAlt: "Scale step artwork",
          },
        ],
      },
      paths: {
        eyebrow: "Partnership models",
        title: "Pick the business route that matches how you actually operate.",
        body:
          "The page separates partner and agent needs so the commercial model is clearer before launch.",
        footerPrimaryCta: {
          label: "Contact us",
          href: routes.finalCta,
        },
        footerSecondaryCta: {
          label: "Benefits",
          href: routes.benefits,
        },
        items: [
          {
            type: "partner",
            eyebrow: "Performance route",
            title: "Affiliate partner",
            body:
              "For publishers, media buyers, tipster communities, and introducers who need clear tracking and a cleaner review rhythm.",
            bullets: [
              "source-level visibility and reporting structure",
              "support tied to launch and weekly follow-up",
              "built for performance-led growth",
            ],
          },
          {
            type: "agent",
            eyebrow: "Relationship route",
            title: "Local agent network",
            body:
              "For operators working through direct relationships, local activation, and network-led acquisition.",
            bullets: [
              "agent-first onboarding and support flow",
              "faster escalation for day-to-day questions",
              "built for retention and repeat activity",
            ],
          },
        ],
      },
      tools: {
        eyebrow: "Benefits",
        title: "What you gain from the partnership.",
        stats: [
          {
            label: "active players",
            value: "128",
            note: "kept inside a weekly earning cycle",
            numericValue: 128,
          },
          {
            label: "rev share",
            value: "35%",
            note: "recurring share on retained activity",
            numericValue: 35,
            suffix: "%",
          },
          {
            label: "CPA",
            value: "$25",
            note: "paid on qualified first deposits",
            numericValue: 25,
            prefix: "$",
          },
        ],
        panel: {
          eyebrow: "Affiliate dashboard",
          title: "Cash agent dashboard with live money movement.",
          badge: "Today",
          timeframeLabel: "Today",
          summaryItems: [
            { label: "prepayment", value: "4,800 TND ready for cash float" },
            { label: "deposited", value: "12,650 TND confirmed today" },
            { label: "withdrawn", value: "7,140 TND settled today" },
            { label: "commission", value: "1,920 TND closing this cycle" },
          ],
        },
        showcase: [
          {
            title: "Weekly passive income and a lifetime client base",
            body:
              "The partnership is built to keep earning from repeat deposits, retained players, and direct relationships that stay valuable over time.",
            tags: ["weekly passive income", "lifetime client base", "repeat deposits"],
          },
        ],
      },
      finalCta: {
        eyebrow: "Join us",
        title: "Join us and start your Tunisia partnership route.",
        body:
          "Message us on WhatsApp or Telegram and we will help you choose the setup that fits your traffic, players, or local network.",
        helperText:
          "If you are ready to grow with us, the first step is simple and friendly.",
        primary: {
          label: "Join on WhatsApp",
          href: channels.whatsapp,
        },
        secondary: {
          label: "Join on Telegram",
          href: channels.telegram,
        },
      },
      footer: {
        brand: "Tunisia Market",
        body:
          "A Tunisia player and partnership landing built around faster discovery, cleaner support, and a tighter mobile-first route.",
        homeLabel: "Home",
        homeLinks: [
          { label: "Overview", href: routes.top },
          { label: "Games", href: routes.games },
          { label: "Sports", href: routes.sports },
          { label: "Offers", href: routes.offers },
          { label: "Access", href: routes.play },
        ],
        partnershipLabel: "Partnership",
        partnershipLinks: [
          { label: "Overview", href: routes.partnershipTop },
          { label: "Steps", href: routes.steps },
          { label: "Models", href: routes.paths },
          { label: "Benefits", href: routes.benefits },
          { label: "Contact", href: routes.finalCta },
        ],
        contactLabel: "Contact",
        legal: "Copyright 2026 Tunisia Market. All rights reserved.",
        contactLinks: [
          { label: "WhatsApp", href: channels.whatsapp },
          { label: "Telegram", href: channels.telegram },
          { label: "Email", href: channels.email },
        ],
      },
    },
  },
  fr: {
    languageSwitch: {
      fr: "FR",
      en: "EN",
      ar: "AR",
    },
    home: {
      seo: {
        title: "Tunisie | Joue aux meilleurs jeux et sports en direct",
        description:
          "Retrouve les jeux rapides, le sport en direct, les favoris casino et une facon plus simple de commencer a jouer sur mobile en Tunisie.",
      },
      nav: {
        brand: {
          eyebrow: "Tunisie",
          title: "Marché",
          href: routes.home,
          logoSrc: "/logo.svg",
          logoAlt: "Marché Tunisie",
        },
        items: [
          {
            label: "Accueil",
            href: routes.home,
            children: [
              { label: "Jouer", href: routes.top },
              { label: "Jeux", href: routes.games },
              { label: "Sports", href: routes.sports },
              { label: "Offres", href: routes.offers },
              { label: "Accès", href: routes.play },
            ],
          },
          {
            label: "Partenariat",
            href: routes.partnership,
            children: [
              { label: "Vue d'ensemble", href: routes.partnershipTop },
              { label: "Étapes", href: routes.steps },
              { label: "Modèles", href: routes.paths },
              { label: "Avantages", href: routes.benefits },
              { label: "Contact", href: routes.finalCta },
            ],
          },
        ],
        primaryCta: {
          label: "Jouer maintenant",
          href: routes.play,
        },
      },
      hero: {
        eyebrow: "Pret a jouer ?",
        title: "Joue aux meilleurs jeux en Tunisie.",
        highlightedWords: ["meilleurs jeux"],
        body: "Entre en quelques secondes dans les jeux rapides, le sport en direct et les favoris casino. Tout est pense pour t'aider a trouver ton jeu vite et commencer a jouer.",
        primaryCta: {
          label: "Commencer",
          href: routes.play,
        },
        secondaryCta: {
          label: "Voir les jeux",
          href: routes.games,
        },
        stats: [
          {
            label: "choix rapides",
            value: "18",
            note: "jeux et sports visibles dès le haut de page",
            numericValue: 18,
          },
          {
            label: "focus direct",
            value: "4",
            note: "blocs sport pensés pour une lecture rapide",
            numericValue: 4,
          },
          {
            label: "canaux d'accès",
            value: "2",
            note: "parcours joueur gardé simple",
            numericValue: 2,
          },
        ],
        highlights: [
          "découverte mobile d'abord",
          "français et arabe bien gérés",
          "accès plus direct",
        ],
        stage: {
          eyebrow: "En ce moment",
          title: "Commence par les plus chauds.",
          body:
            "Choisis entre jeux rapides, football live et tables live sans passer par un accueil surcharge.",
          carousel: [
            {
              id: "crash",
              title: "Crash",
              description:
                "Des manches courtes, des décisions rapides, et le rythme que les joueurs ouvrent d'abord sur mobile.",
              highlights: ["manches courtes", "cashout rapide", "mobile ready"],
              rating: 4.9,
              reviewLabel: "note joueur",
              badge: "Jeu rapide",
              details: [
                { label: "format", value: "jeu rapide" },
                { label: "rythme", value: "élevé" },
                { label: "idéal pour", value: "sessions courtes" },
              ],
              href: routes.play,
              ctaLabel: "Obtenir l'accès",
              visual: {
                kind: "image",
                src: "/hero/tunisia-crash-preview.png",
                alt: "Crash game preview",
                theme: "red",
                label: "Rapide",
              },
            },
            {
              id: "football-live",
              title: "Football en direct",
              description:
                "Un aperçu football plus fort pour les joueurs qui veulent plus de direct et de mouvement sur les plus gros matchs.",
              highlights: ["grands championnats", "focus live", "soirées match"],
              rating: 4.8,
              reviewLabel: "note joueur",
              badge: "Sport live",
              details: [
                { label: "format", value: "sport live" },
                { label: "rythme", value: "élevé" },
                { label: "idéal pour", value: "soirées match" },
              ],
              href: routes.sports,
              ctaLabel: "Voir les sports",
              visual: {
                kind: "image",
                src: "/hero/tunisia-football-preview.png",
                alt: "Live football preview",
                theme: "blue",
                label: "Live",
              },
            },
            {
              id: "live-casino",
              title: "Casino live",
              description:
                "Une voie plus stable pour les joueurs qui veulent une ambiance premium après les jeux plus rapides.",
              highlights: ["tables propres", "rythme stable", "feeling premium"],
              rating: 4.7,
              reviewLabel: "note joueur",
              badge: "Tables live",
              details: [
                { label: "format", value: "table live" },
                { label: "rythme", value: "stable" },
                { label: "idéal pour", value: "jeu tardif" },
              ],
              href: routes.games,
              ctaLabel: "Voir les jeux",
              visual: {
                kind: "image",
                src: "/hero/tunisia-live-casino-preview.png",
                alt: "Live casino preview",
                theme: "light",
                label: "Table",
              },
            },
          ],
        },
      },
      games: {
        eyebrow: "Top jeux",
        title: "Trouve ton jeu vite.",
        body:
          "Jeux rapides, tables live, slots populaires : tout est organise pour t'emmener droit vers l'action.",
        featured: [
          {
            id: "game-crash",
            eyebrow: "Jeu rapide",
            title: "Crash",
            badge: "Choix fort",
            description:
              "Des manches courtes avec un timing clair et un fort retour pendant les sessions mobiles.",
            rating: 4.9,
            stats: ["cashout rapide"],
            metric: "note joueur",
            href: routes.play,
            ctaLabel: "Obtenir l'accès",
            visual: {
              kind: "icon",
              icon: "crash",
              theme: "red",
              label: "Crash",
            },
          },
          {
            id: "game-slots",
            eyebrow: "Slots",
            title: "Slots turbo",
            badge: "Mobile",
            description:
              "Des sessions plus courtes qui s'intègrent bien au mobile et restent faciles à parcourir depuis l'accueil.",
            rating: 4.7,
            stats: ["spins rapides"],
            metric: "note joueur",
            href: routes.games,
            ctaLabel: "Voir les jeux",
            visual: {
              kind: "icon",
              icon: "slots",
              theme: "blue",
              label: "Slots",
            },
          },
          {
            id: "game-live",
            eyebrow: "Tables",
            title: "Tables live",
            badge: "Fiable",
            description:
              "Une route plus calme pour les joueurs qui veulent un choix plus lisible et un rythme plus stable.",
            rating: 4.6,
            stats: ["salles live"],
            metric: "note joueur",
            href: routes.play,
            ctaLabel: "Ouvrir l'accès",
            visual: {
              kind: "icon",
              icon: "live-casino",
              theme: "light",
              label: "Live",
            },
          },
        ],
        secondaryFeatured: [
          {
            id: "game-football-instant",
            eyebrow: "Jeu instantané",
            title: "Jeux foot rapides",
            badge: "Sessions courtes",
            description:
              "Des formats football simples qui aident à entrer plus vite dans le jeu sur mobile.",
            rating: 4.5,
            stats: ["entrée simple"],
            metric: "note joueur",
            href: routes.games,
            ctaLabel: "Voir les jeux",
            visual: {
              kind: "icon",
              icon: "football",
              theme: "red",
              label: "Rapide",
            },
          },
          {
            id: "game-wallet",
            eyebrow: "Accès",
            title: "Dépôts plus simples",
            badge: "Parcours clair",
            description:
              "Le parcours joueur garde les repères dépôt et accès simples avant le passage à l'action.",
            rating: 4.8,
            stats: ["flux clair"],
            metric: "note joueur",
            href: routes.play,
            ctaLabel: "Obtenir l'accès",
            visual: {
              kind: "icon",
              icon: "wallet",
              theme: "blue",
              label: "Accès",
            },
          },
          {
            id: "game-signal",
            eyebrow: "Découverte",
            title: "Picks live",
            badge: "Board rapide",
            description:
              "Une route d'accueil plus serrée pour passer vite entre les bonnes catégories sans perdre le fil.",
            rating: 4.7,
            stats: ["aperçu rapide"],
            metric: "note joueur",
            href: routes.top,
            ctaLabel: "Retour en haut",
            visual: {
              kind: "icon",
              icon: "signal",
              theme: "ink",
              label: "Board",
            },
          },
        ],
      },
      sports: {
        eyebrow: "Sports",
        title: "Fais partie du jeu, fais partie de l'equipe.",
        body:
          "Commence par le football, puis profite du live, de l'esport et des jeux rapides pour garder la session active sur mobile.",
        categories: [
          {
            id: "sport-football",
            eyebrow: "Sport live",
            title: "Football",
            badge: "Marché fort",
            description:
              "Soirées de championnat, combinés, et pics live autour des plus gros matchs.",
            tags: ["football live", "grands championnats", "soir de match"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "football",
              theme: "blue",
              label: "Football",
            },
          },
          {
            id: "sport-basketball",
            eyebrow: "Sport live",
            title: "Basketball",
            badge: "Lignes rapides",
            description:
              "Fenêtres plus courtes, mouvements plus rapides, et meilleur rythme en direct.",
            tags: ["lignes rapides", "rythme live", "updates rapides"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "basketball",
              theme: "red",
              label: "Basket",
            },
          },
          {
            id: "sport-live-markets",
            eyebrow: "Hockey",
            title: "Hockey",
            badge: "Glace rapide",
            description:
              "Actions rapides, pression sur la glace et rythme live facile a suivre.",
            tags: ["glace rapide", "power plays", "live"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "signal",
              theme: "light",
              label: "Hockey",
            },
          },
          {
            id: "sport-weekend",
            eyebrow: "Soirées event",
            title: "Combats du week-end",
            badge: "Peak cards",
            description:
              "Des cartes événementielles qui donnent plus de relief à l'accueil sans le surcharger.",
            tags: ["headline cards", "pics week-end", "focus événement"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "signal",
              theme: "ink",
              label: "Event",
            },
          },
        ],
      },
      trust: {
        eyebrow: "Pourquoi tu vas aimer",
        title: "Des choix plus clairs, un jeu plus fluide, moins de bruit.",
        body:
          "Tout est pense pour t'aider a trouver vite un jeu, avancer avec confiance et profiter de l'experience sans confusion.",
        items: [
          {
            title: "Entre plus vite",
            body:
              "Passe de l'accueil aux jeux, au sport ou au support sans hesiter sur la prochaine etape.",
            metric: "demarrage rapide",
            icon: "wallet",
          },
          {
            title: "Joue dans ta langue",
            body:
              "Le francais, l'arabe et l'anglais restent fluides et faciles a utiliser des le premier clic.",
            metric: "3 langues",
            icon: "support",
          },
          {
            title: "Vois le meilleur en premier",
            body:
              "La page met en avant les meilleurs jeux, le live et les vraies offres au lieu de noyer l'ecran sous les bannieres.",
            metric: "layout propre",
            icon: "shield",
          },
        ],
      },
      promos: {
        eyebrow: "Offres",
        title: "Des bonus et des offres qui donnent envie de cliquer.",
        body:
          "Bonus de bienvenue, boosts matchday et aide claire te donnent plus de raisons de jouer sans hésiter.",
        cards: [
          {
            id: "promo-welcome",
            eyebrow: "Offre 01",
            badge: "Premier depot",
            title: "200% sur ton premier depot",
            description: "100 free spins",
            bullets: [
              "bonus de bienvenue plus fort",
              "free spins inclus",
              "depart rapide sur mobile",
            ],
            href: routes.play,
            ctaLabel: "Voir l'offre",
            visual: {
              kind: "image",
              src: "/offers/gifts.png",
              alt: "Visuel cadeau de bienvenue",
              theme: "red",
              label: "Bonus",
            },
          },
          {
            id: "promo-matchday",
            eyebrow: "Offre 02",
            badge: "Paris en direct",
            title: "Paris en direct",
            description: "Tous les types de sport",
            bullets: [
              "football et grosses affiches",
              "action live a suivre",
              "plus de sports au meme endroit",
            ],
            href: routes.sports,
            ctaLabel: "Voir les sports",
            linkText: "Besoin d'aide pour commencer ?",
            linkHref: routes.play,
            visual: {
              kind: "image",
              src: "/offers/ball.png",
              alt: "Visuel football paris en direct",
              theme: "blue",
              label: "Sport",
            },
          },
          {
            id: "promo-cashier",
            eyebrow: "Offre 03",
            badge: "Agents locaux",
            title: "Agents locaux",
            description: "Systeme clair et sur",
            bullets: [
              "support local de confiance",
              "aide paiement plus claire",
              "parcours securise",
            ],
            inlineCta: {
              label: "Devenir agent",
              href: routes.agent,
            },
            href: routes.play,
            ctaLabel: "Commencer",
            visual: {
              kind: "image",
              src: "/offers/cashier.png",
              alt: "Visuel caisse et agent local",
              theme: "light",
              label: "Agent",
            },
          },
        ],
      },
      finalCta: {
        eyebrow: "Quand tu veux",
        title: "Commence a jouer des que tu es pret.",
        body:
          "Ecris-nous, lance ton compte, puis reviens direct vers les jeux, les sports et les offres qui t'attirent le plus.",
        primary: {
          label: "Commencer sur WhatsApp",
          href: channels.whatsapp,
        },
        secondary: {
          label: "Voir les jeux",
          href: routes.games,
        },
      },
      footer: {
        brand: "Marché Tunisie",
        body:
          "Ton point d'entree pour les meilleurs jeux, le sport en direct, les offres joueur et une facon plus rapide de jouer en Tunisie sur mobile.",
        homeLabel: "Accueil",
        homeLinks: [
          { label: "Vue d'ensemble", href: routes.top },
          { label: "Jeux", href: routes.games },
          { label: "Sports", href: routes.sports },
          { label: "Offres", href: routes.offers },
          { label: "Jouer", href: routes.play },
        ],
        partnershipLabel: "Partenariat",
        partnershipLinks: [
          { label: "Vue d'ensemble", href: routes.partnershipTop },
          { label: "Étapes", href: routes.steps },
          { label: "Modèles", href: routes.paths },
          { label: "Avantages", href: routes.benefits },
          { label: "Contact", href: routes.finalCta },
        ],
        contactLabel: "Contact",
        legal: "Copyright 2026 Marché Tunisie. Tous droits réservés.",
        contactLinks: [
          { label: "WhatsApp", href: channels.whatsapp },
          { label: "Telegram", href: channels.telegram },
          { label: "Email", href: channels.email },
        ],
      },
    },
    partnership: {
      seo: {
        title: "Partenariats Tunisie | Partenaires, Agents, Outils de Croissance",
        description:
          "Une page Tunisie business pour les partenaires et agents qui ont besoin d'un onboarding clair, d'un reporting plus propre et d'un support direct.",
      },
      nav: {
        brand: {
          eyebrow: "Tunisie",
          title: "Marché",
          href: routes.home,
          logoSrc: "/logo.svg",
          logoAlt: "Marché Tunisie",
        },
        items: [
          {
            label: "Accueil",
            href: routes.home,
            children: [
              { label: "Vue d'ensemble", href: routes.top },
              { label: "Jeux", href: routes.games },
              { label: "Sports", href: routes.sports },
              { label: "Offres", href: routes.offers },
              { label: "Accès", href: routes.play },
            ],
          },
          {
            label: "Partenariat",
            href: routes.partnership,
            children: [
              { label: "Vue d'ensemble", href: routes.partnershipTop },
              { label: "Étapes", href: routes.steps },
              { label: "Modèles", href: routes.paths },
              { label: "Avantages", href: routes.benefits },
              { label: "Contact", href: routes.finalCta },
            ],
          },
        ],
        primaryCta: {
          label: "Postuler au partenariat",
          href: routes.finalCta,
        },
      },
      hero: {
        eyebrow: "Partenariat Tunisie",
        title: "Une route partenariat Tunisie plus claire pour partenaires et agents.",
        highlightedWords: ["route partenariat"],
        body:
          "Cette page est faite pour l'intention business : qualification, préparation du lancement, visibilité du reporting, et support direct après validation.",
        primaryCta: {
          label: "Postuler au partenariat",
          href: routes.finalCta,
        },
        secondaryCta: {
          label: "Voir les modèles",
          href: routes.paths,
        },
        stats: [
          {
            label: "fenêtre de revue",
            value: "24h",
            note: "pour les demandes qualifiées",
            numericValue: 24,
            suffix: "h",
          },
          {
            label: "cycle reporting",
            value: "7d",
            note: "suivi hebdomadaire structuré",
            numericValue: 7,
            suffix: "d",
          },
          {
            label: "routes commerciales",
            value: "2",
            note: "partenaire et agent",
            numericValue: 2,
          },
        ],
        stage: {
          eyebrow: "Vue opératoire",
          title: "Un setup pensé pour le contrôle du lancement, le suivi et de meilleures décisions.",
          badge: "Route business",
          metrics: [
            {
              label: "préparation lancement",
              value: "92%",
              note: "benchmark validation et setup",
              numericValue: 92,
              suffix: "%",
            },
            {
              label: "réponse desk",
              value: "18m",
              note: "médiane support",
              numericValue: 18,
              suffix: "m",
            },
            {
              label: "lignes actives",
              value: "12",
              note: "sources suivies dans une seule vue",
              numericValue: 12,
            },
          ],
          lanes: [
            {
              label: "onboarding partenaire",
              value: 89,
              note: "revue commerciale, setup du reporting et étapes go-live alignés",
            },
            {
              label: "activation agent",
              value: 82,
              note: "lancement réseau avec escalade plus rapide et support plus direct",
            },
            {
              label: "suivi hebdomadaire",
              value: 77,
              note: "un rythme de revue plus propre une fois la route lancée",
            },
          ],
          note:
            "La page business reste séparée de la page joueur afin que l'intention partenaire reste claire du premier écran jusqu'au contact final.",
        },
      },
      benefits: {
        eyebrow: "Pourquoi cette route",
        title: "Un setup Tunisie plus serré pour partenaires et agents.",
        body:
          "La route commerciale est conçue pour être plus simple à qualifier, plus simple à suivre, et plus simple à gérer quand l'activité démarre.",
        items: [
          {
            title: "Reporting plus propre",
            body:
              "Relisez volume, qualité de source et visibilité payout sans pousser chaque décision dans un dashboard trop bruyant.",
            icon: "reporting",
          },
          {
            title: "Support lancement plus rapide",
            body:
              "Qualification, setup et prochaines étapes restent dans une seule route pour éviter les délais inutiles.",
            icon: "support",
          },
          {
            title: "Rythme payout structuré",
            body:
              "Gardez le statut d'approbation et le suivi hebdomadaire lisibles pour le vrai travail opératoire.",
            icon: "payouts",
          },
          {
            title: "Assets prêts marché",
            body:
              "Utilisez des hooks et des supports plus pratiques, adaptés à la route Tunisie sans bruit marketing inutile.",
            icon: "creative",
          },
        ],
      },
      steps: {
        eyebrow: "Fonctionnement",
        title: "3 étapes simples",
        items: [
          {
            step: "01",
            title: "Inscription",
            body: "Inscrivez-vous directement en nous contactant.",
            imageSrc: "/how/join.png",
            imageAlt: "Visuel étape inscription",
            primaryCta: {
              label: "Rejoignez-nous",
              href: routes.finalCta,
            },
          },
          {
            step: "02",
            title: "Attirer des joueurs",
            body: "Commencez à attirer des joueurs avec des kits marketing prêts à l'emploi.",
            imageSrc: "/how/marketing.png",
            imageAlt: "Visuel étape marketing",
          },
          {
            step: "03",
            title: "Répéter et scaler",
            body: "Répétez et scalez.",
            imageSrc: "/how/scale.png",
            imageAlt: "Visuel étape scale",
          },
        ],
      },
      paths: {
        eyebrow: "Modèles partenariat",
        title: "Choisissez la route business qui correspond à votre manière d'opérer.",
        body:
          "La page sépare les besoins partenaire et agent pour rendre le modèle commercial plus clair avant lancement.",
        footerPrimaryCta: {
          label: "Contactez-nous",
          href: routes.finalCta,
        },
        footerSecondaryCta: {
          label: "Avantages",
          href: routes.benefits,
        },
        items: [
          {
            type: "partner",
            eyebrow: "Route performance",
            title: "Partenaire affilié",
            body:
              "Pour les publishers, media buyers, communautés tipster et introducers qui veulent un tracking clair et un rythme de revue plus propre.",
            bullets: [
              "visibilité par source et structure de reporting",
              "support lié au lancement et au suivi hebdomadaire",
              "pensé pour une croissance orientée performance",
            ],
          },
          {
            type: "agent",
            eyebrow: "Route relation",
            title: "Réseau agent local",
            body:
              "Pour les opérateurs qui avancent via la relation directe, l'activation locale et l'acquisition réseau.",
            bullets: [
              "onboarding agent et flux support dédiés",
              "escalade plus rapide pour les sujets quotidiens",
              "pensé pour la rétention et la répétition",
            ],
          },
        ],
      },
      tools: {
        eyebrow: "Avantages",
        title: "Ce que vous gagnez dans le partenariat.",
        stats: [
          {
            label: "joueurs actifs",
            value: "128",
            note: "gardés dans un cycle de gain hebdomadaire",
            numericValue: 128,
          },
          {
            label: "rev share",
            value: "35%",
            note: "part récurrente sur l'activité retenue",
            numericValue: 35,
            suffix: "%",
          },
          {
            label: "CPA",
            value: "$25",
            note: "payé sur les premiers dépôts qualifiés",
            numericValue: 25,
            prefix: "$",
          },
        ],
        panel: {
          eyebrow: "Dashboard affilié",
          title: "Dashboard cash agent avec mouvement d'argent en direct.",
          badge: "Aujourd'hui",
          timeframeLabel: "Aujourd'hui",
          summaryItems: [
            { label: "prépayé", value: "4 800 TND prêts pour le float cash" },
            { label: "déposé", value: "12 650 TND confirmés aujourd'hui" },
            { label: "retiré", value: "7 140 TND réglés aujourd'hui" },
            { label: "commission", value: "1 920 TND en clôture ce cycle" },
          ],
        },
        showcase: [
          {
            title: "Revenu passif hebdomadaire et base client à vie",
            body:
              "Le partenariat est pensé pour continuer à gagner sur les dépôts répétés, les joueurs retenus, et des relations directes qui gardent de la valeur dans le temps.",
            tags: ["revenu passif hebdomadaire", "base client à vie", "dépôts répétés"],
          },
        ],
      },
      finalCta: {
        eyebrow: "Rejoignez-nous",
        title: "Rejoignez-nous et lancez votre route partenariat Tunisie.",
        body:
          "Écrivez-nous sur WhatsApp ou Telegram et nous vous aiderons à choisir le setup adapté à votre trafic, vos joueurs, ou votre réseau local.",
        helperText:
          "Si vous êtes prêt à grandir avec nous, la première étape reste simple et accueillante.",
        primary: {
          label: "Nous rejoindre sur WhatsApp",
          href: channels.whatsapp,
        },
        secondary: {
          label: "Nous rejoindre sur Telegram",
          href: channels.telegram,
        },
      },
      footer: {
        brand: "Marché Tunisie",
        body:
          "Une landing Tunisie pour les joueurs et le partenariat, pensée pour une découverte plus rapide, un support plus clair et un usage mobile plus net.",
        homeLabel: "Accueil",
        homeLinks: [
          { label: "Vue d'ensemble", href: routes.top },
          { label: "Jeux", href: routes.games },
          { label: "Sports", href: routes.sports },
          { label: "Offres", href: routes.offers },
          { label: "Accès", href: routes.play },
        ],
        partnershipLabel: "Partenariat",
        partnershipLinks: [
          { label: "Vue d'ensemble", href: routes.partnershipTop },
          { label: "Étapes", href: routes.steps },
          { label: "Modèles", href: routes.paths },
          { label: "Avantages", href: routes.benefits },
          { label: "Contact", href: routes.finalCta },
        ],
        contactLabel: "Contact",
        legal: "Copyright 2026 Marché Tunisie. Tous droits réservés.",
        contactLinks: [
          { label: "WhatsApp", href: channels.whatsapp },
          { label: "Telegram", href: channels.telegram },
          { label: "Email", href: channels.email },
        ],
      },
    },
  },
  ar: {
    languageSwitch: {
      fr: "FR",
      en: "EN",
      ar: "AR",
    },
    home: {
      seo: {
        title: "تونس | ألعاب سريعة، رياضة مباشرة، وصول بسيط",
        description:
          "اكتشف الألعاب السريعة، والرياضات المباشرة، وعروض اللاعبين، ومسار وصول أوضح ومناسب للجوال في تونس.",
      },
      nav: {
        brand: {
          eyebrow: "تونس",
          title: "السوق",
          href: routes.home,
          logoSrc: "/logo.svg",
          logoAlt: "سوق تونس",
        },
        items: [
          {
            label: "الرئيسية",
            href: routes.home,
            children: [
              { label: "نظرة عامة", href: routes.top },
              { label: "الألعاب", href: routes.games },
              { label: "الرياضات", href: routes.sports },
              { label: "العروض", href: routes.offers },
              { label: "الوصول", href: routes.play },
            ],
          },
          {
            label: "الشراكة",
            href: routes.partnership,
            children: [
              { label: "نظرة عامة", href: routes.partnershipTop },
              { label: "الخطوات", href: routes.steps },
              { label: "النماذج", href: routes.paths },
              { label: "المزايا", href: routes.benefits },
              { label: "التواصل", href: routes.finalCta },
            ],
          },
        ],
        primaryCta: {
          label: "احصل على الوصول",
          href: routes.play,
        },
      },
      hero: {
        eyebrow: "العب أسرع في تونس",
        title: "ألعاب سريعة، رياضات مباشرة، متعة لا تنتهي!",
        highlightedWords: ["رياضات مباشرة"],
        body:
          "اكتشاف أسرع، معاينة أوضح، ومسار مباشر نحو المنتجات.",
        primaryCta: {
          label: "افتح وصول اللاعبين",
          href: routes.play,
        },
        secondaryCta: {
          label: "شاهد الألعاب",
          href: routes.games,
        },
        stats: [
          {
            label: "اختيارات سريعة",
            value: "18",
            note: "الألعاب والرياضات تظهر مبكراً في الصفحة",
            numericValue: 18,
          },
          {
            label: "تركيز مباشر",
            value: "4",
            note: "أقسام رياضية جاهزة للقراءة السريعة",
            numericValue: 4,
          },
          {
            label: "قنوات الوصول",
            value: "2",
            note: "المسار المخصص للاعب بقي بسيطاً",
            numericValue: 2,
          },
        ],
        highlights: [
          "اكتشاف أسرع على الجوال",
          "دعم عربي وفرنسي نظيف",
          "وصول أوضح وأسرع",
        ],
        stage: {
          eyebrow: "اختيارات الليلة",
          title: "شاهد أفضل نقاط البداية قبل أن تتوسع داخل الصفحة.",
          body:
            "اللوحة الرئيسية واسعة عن قصد: ألعاب سريعة، طاقة مباشرة في الرياضة، ومسار أوضح لاختيار البداية المناسبة.",
          carousel: [
            {
              id: "crash",
              title: "كراش",
              badge: "دخول سريع",
              description:
                "جولات قصيرة وقرارات سريعة وإيقاع يفتحه اللاعب أولاً على الجوال.",
              highlights: ["جولات قصيرة", "سحب سريع", "جاهز للجوال"],
              rating: 4.9,
              reviewLabel: "تقييم اللاعبين",
              details: [
                { label: "النوع", value: "لعبة سريعة" },
                { label: "الإيقاع", value: "عالٍ" },
                { label: "مناسب لـ", value: "الجلسات القصيرة" },
              ],
              href: routes.play,
              ctaLabel: "احصل على الوصول",
              visual: {
                kind: "image",
                src: "/hero/tunisia-crash-preview.png",
                alt: "Crash game preview",
                theme: "red",
                label: "سريع",
              },
            },
            {
              id: "football-live",
              title: "كرة قدم مباشرة",
              badge: "يوم المباراة",
              description:
                "معاينة أقوى لكرة القدم للاعب الذي يريد حركة مباشرة أكثر حول أهم المباريات.",
              highlights: ["أهم الدوريات", "تركيز مباشر", "ليالي المباريات"],
              rating: 4.8,
              reviewLabel: "تقييم اللاعبين",
              details: [
                { label: "النوع", value: "رياضة مباشرة" },
                { label: "الإيقاع", value: "عالٍ" },
                { label: "مناسب لـ", value: "ليالي المباريات" },
              ],
              href: routes.sports,
              ctaLabel: "شاهد الرياضات",
              visual: {
                kind: "image",
                src: "/hero/tunisia-football-preview.png",
                alt: "Live football preview",
                theme: "blue",
                label: "مباشر",
              },
            },
            {
              id: "live-casino",
              title: "كازينو مباشر",
              badge: "جلسة مسائية",
              description:
                "مسار أكثر ثباتاً للاعب الذي يريد إحساساً أهدأ وأكثر جودة بعد الخيارات السريعة.",
              highlights: ["طاولات أوضح", "إيقاع ثابت", "إحساس مميز"],
              rating: 4.7,
              reviewLabel: "تقييم اللاعبين",
              details: [
                { label: "النوع", value: "طاولة مباشرة" },
                { label: "الإيقاع", value: "ثابت" },
                { label: "مناسب لـ", value: "اللعب المتأخر" },
              ],
              href: routes.games,
              ctaLabel: "شاهد الألعاب",
              visual: {
                kind: "image",
                src: "/hero/tunisia-live-casino-preview.png",
                alt: "Live casino preview",
                theme: "light",
                label: "طاولة",
              },
            },
          ],
        },
      },
      games: {
        eyebrow: "معاينة الألعاب",
        title: "الفئات التي يفتحها اللاعب أولاً.",
        body:
          "المزيج واسع وواضح وسريع القراءة من دون فوضى أو ازدحام بصري.",
        featured: [
          {
            id: "game-crash",
            eyebrow: "لعبة سريعة",
            title: "كراش",
            badge: "الخيار الأبرز",
            description:
              "جولات قصيرة بتوقيت واضح وحركة متكررة قوية داخل الجلسات السريعة.",
            rating: 4.9,
            stats: ["سحب سريع"],
            metric: "تقييم اللاعبين",
            href: routes.play,
            ctaLabel: "احصل على الوصول",
            visual: {
              kind: "icon",
              icon: "crash",
              theme: "red",
              label: "كراش",
            },
          },
          {
            id: "game-slots",
            eyebrow: "سلوتس",
            title: "سلوتس توربو",
            badge: "مناسب للجوال",
            description:
              "جلسات أقصر تناسب الجوال وتبقى سهلة التصفح من الصفحة الرئيسية.",
            rating: 4.7,
            stats: ["لفات سريعة"],
            metric: "تقييم اللاعبين",
            href: routes.games,
            ctaLabel: "شاهد الألعاب",
            visual: {
              kind: "icon",
              icon: "slots",
              theme: "blue",
              label: "سلوتس",
            },
          },
          {
            id: "game-live",
            eyebrow: "طاولات",
            title: "طاولات مباشرة",
            badge: "موثوق",
            description:
              "مسار أهدأ للاعب الذي يريد اختياراً أوضح وإيقاعاً أكثر ثباتاً.",
            rating: 4.6,
            stats: ["غرف مباشرة"],
            metric: "تقييم اللاعبين",
            href: routes.play,
            ctaLabel: "افتح الوصول",
            visual: {
              kind: "icon",
              icon: "live-casino",
              theme: "light",
              label: "مباشر",
            },
          },
        ],
        secondaryFeatured: [
          {
            id: "game-football-instant",
            eyebrow: "لعب فوري",
            title: "ألعاب كرة قدم سريعة",
            badge: "جلسات قصيرة",
            description:
              "تنسيقات كرة قدم بسيطة تساعد على دخول أسرع من الجوال.",
            rating: 4.5,
            stats: ["دخول سهل"],
            metric: "تقييم اللاعبين",
            href: routes.games,
            ctaLabel: "شاهد الألعاب",
            visual: {
              kind: "icon",
              icon: "football",
              theme: "red",
              label: "سريع",
            },
          },
          {
            id: "game-wallet",
            eyebrow: "الوصول",
            title: "إيداع أوضح",
            badge: "مسار واضح",
            description:
              "المسار الخاص باللاعب يبقي إشارات الإيداع والوصول واضحة قبل الانتقال للخطوة التالية.",
            rating: 4.8,
            stats: ["تدفق واضح"],
            metric: "تقييم اللاعبين",
            href: routes.play,
            ctaLabel: "احصل على الوصول",
            visual: {
              kind: "icon",
              icon: "wallet",
              theme: "blue",
              label: "وصول",
            },
          },
          {
            id: "game-signal",
            eyebrow: "اكتشاف",
            title: "اختيارات مباشرة",
            badge: "لوحة سريعة",
            description:
              "مسار رئيسي أكثر إحكاماً للتنقل بسرعة بين أفضل الفئات من دون فقدان السياق.",
            rating: 4.7,
            stats: ["معاينة سريعة"],
            metric: "تقييم اللاعبين",
            href: routes.top,
            ctaLabel: "العودة للأعلى",
            visual: {
              kind: "icon",
              icon: "signal",
              theme: "ink",
              label: "لوحة",
            },
          },
        ],
      },
      sports: {
        eyebrow: "معاينة الرياضات",
        title: "كن جزءا من اللعبة، كن جزءا من الفريق.",
        body:
          "كرة القدم تقود المشهد، بينما يبقي البث المباشر والرياضات الالكترونية والالعاب السريعة التجربة مفعمة بالحركة وسهلة التصفح.",
        categories: [
          {
            id: "sport-football",
            eyebrow: "رياضة مباشرة",
            title: "كرة القدم",
            badge: "السوق الأهم",
            description:
              "ليالي الدوريات، التجميعات، والذروات المباشرة حول أهم المباريات.",
            tags: ["مباريات مباشرة", "تجميعات", "أهم الدوريات"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "football",
              theme: "blue",
              label: "كرة قدم",
            },
          },
          {
            id: "sport-basketball",
            eyebrow: "رياضة مباشرة",
            title: "كرة السلة",
            badge: "خطوط سريعة",
            description:
              "نوافذ أقصر وتحولات أسرع وإيقاع أفضل أثناء اللعب المباشر.",
            tags: ["أرباع", "إيقاع مباشر", "تحديث سريع"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "basketball",
              theme: "red",
              label: "سلة",
            },
          },
          {
            id: "sport-tennis",
            eyebrow: "رياضة مباشرة",
            title: "التنس",
            badge: "أثناء اللعب",
            description:
              "حركة نقطة بنقطة للاعب الذي يريد تحولات أوضح وأسرع.",
            tags: ["مجموعات", "تحولات مباشرة", "قراءة أوضح"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "tennis",
              theme: "light",
              label: "تنس",
            },
          },
          {
            id: "sport-weekend",
            eyebrow: "ليالي الحدث",
            title: "نزالات نهاية الأسبوع",
            badge: "قمم الحدث",
            description:
              "بطاقات حدث تعطي الصفحة طاقة إضافية من دون أن تصبح مزدحمة.",
            tags: ["بطاقات رئيسية", "ذروة أسبوعية", "تركيز على الحدث"],
            href: routes.play,
            visual: {
              kind: "icon",
              icon: "signal",
              theme: "ink",
              label: "حدث",
            },
          },
        ],
      },
      trust: {
        eyebrow: "لماذا اللعب هنا",
        title: "مسار لاعب أوضح وأكثر ثباتاً.",
        body:
          "الثقة يجب أن تأتي من الإيقاع، وإشارات الوصول، ووضوح الدعم، لا من تصميم أكثر صخباً.",
        items: [
          {
            title: "مسار وصول واضح",
            body:
              "الصفحة تبقي الخطوة التالية واضحة سواء كان اللاعب يريد الوصول أو الألعاب أو الرياضة.",
            metric: "مسار واضح",
            icon: "wallet",
          },
          {
            title: "دعم جاهز للغات",
            body:
              "العربية والفرنسية والإنجليزية تبقى نظيفة من دون كسر الإيقاع أو التخطيط.",
            metric: "3 لغات",
            icon: "support",
          },
          {
            title: "إشارة أكثر وضجيج أقل",
            body:
              "الصفحة تعرض المهم أولاً وتتجنب الفوضى التي تبطئ قرار اللاعب عادة.",
            metric: "صفحات محكمة",
            icon: "shield",
          },
        ],
      },
      promos: {
        eyebrow: "العروض والاكتشاف",
        title: "طبقات منتج وعروض تخدم نية اللاعب فعلاً.",
        body:
          "العروض هنا لدعم الاكتشاف والتفعيل، وليست مجرد ملء للمساحات بين الأقسام.",
        cards: [
          {
            id: "promo-welcome",
            eyebrow: "عرض 01",
            badge: "اول ايداع",
            title: "200% على اول ايداع",
            description: "100 دورة مجانية",
            bullets: [
              "قيمة ترحيبية اكبر",
              "دورات مجانية اضافية",
              "بداية سريعة على الجوال",
            ],
            href: routes.play,
            ctaLabel: "احصل على الوصول",
            visual: {
              kind: "image",
              src: "/offers/gifts.png",
              alt: "صورة عرض الهدايا للترحيب",
              theme: "red",
              label: "بونص",
            },
          },
          {
            id: "promo-matchday",
            eyebrow: "عرض 02",
            badge: "مراهنات مباشرة",
            title: "مراهنات مباشرة",
            description: "كل انواع الرياضة",
            bullets: [
              "كرة القدم والليالي الكبيرة",
              "حركة مباشرة طوال الوقت",
              "رياضات اكثر في مكان واحد",
            ],
            href: routes.sports,
            ctaLabel: "شاهد الرياضات",
            linkText: "هل تحتاج لمسار شراكة؟",
            linkHref: routes.finalCta,
            visual: {
              kind: "image",
              src: "/offers/ball.png",
              alt: "صورة كرة لمراهنات الرياضة المباشرة",
              theme: "blue",
              label: "رياضة",
            },
          },
          {
            id: "promo-cashier",
            eyebrow: "عرض 03",
            badge: "وكلاء محليون",
            title: "وكلاء محليون",
            description: "نظام واضح وآمن",
            bullets: [
              "دعم محلي موثوق",
              "مساعدة اوضح في الدفع",
              "مسار آمن وواضح",
            ],
            inlineCta: {
              label: "كن وكيلاً",
              href: routes.agent,
            },
            href: routes.play,
            ctaLabel: "ابدأ الآن",
            visual: {
              kind: "image",
              src: "/offers/cashier.png",
              alt: "صورة الكاشير والوكلاء المحليين",
              theme: "light",
              label: "وكيل",
            },
          },
        ],
      },
      finalCta: {
        eyebrow: "وصول اللاعبين",
        title: "انتقل من المعاينة إلى الوصول عندما تكون جاهزاً.",
        body:
          "استخدم مسار اللاعبين للوصول، ثم عد إلى الألعاب والرياضات والعروض بصورة أوضح عن نقطة البداية.",
        primary: {
          label: "الوصول عبر واتساب",
          href: channels.whatsapp,
        },
        secondary: {
          label: "شاهد الألعاب أولاً",
          href: routes.games,
        },
      },
      footer: {
        brand: "سوق تونس",
        body:
          "Landing تونسية للاعبين والشراكات، مبنية على اكتشاف أسرع، ودعم أوضح، ومسار أفضل على الجوال.",
        homeLabel: "الرئيسية",
        homeLinks: [
          { label: "نظرة عامة", href: routes.top },
          { label: "الألعاب", href: routes.games },
          { label: "الرياضات", href: routes.sports },
          { label: "العروض", href: routes.offers },
          { label: "الوصول", href: routes.play },
        ],
        partnershipLabel: "الشراكة",
        partnershipLinks: [
          { label: "نظرة عامة", href: routes.partnershipTop },
          { label: "الخطوات", href: routes.steps },
          { label: "النماذج", href: routes.paths },
          { label: "المزايا", href: routes.benefits },
          { label: "التواصل", href: routes.finalCta },
        ],
        contactLabel: "التواصل",
        legal: "حقوق النشر 2026 سوق تونس. جميع الحقوق محفوظة.",
        contactLinks: [
          { label: "واتساب", href: channels.whatsapp },
          { label: "تيليجرام", href: channels.telegram },
          { label: "البريد الإلكتروني", href: channels.email },
        ],
      },
    },
    partnership: {
      seo: {
        title: "شراكات تونس | شركاء، وكلاء، وأدوات نمو",
        description:
          "صفحة تونس مخصصة للأعمال للشركاء والوكلاء الذين يحتاجون إلى تأهيل واضح، وتقارير أنظف، ودعم مباشر.",
      },
      nav: {
        brand: {
          eyebrow: "تونس",
          title: "السوق",
          href: routes.home,
          logoSrc: "/logo.svg",
          logoAlt: "سوق تونس",
        },
        items: [
          {
            label: "الرئيسية",
            href: routes.home,
            children: [
              { label: "نظرة عامة", href: routes.top },
              { label: "الألعاب", href: routes.games },
              { label: "الرياضات", href: routes.sports },
              { label: "العروض", href: routes.offers },
              { label: "الوصول", href: routes.play },
            ],
          },
          {
            label: "الشراكة",
            href: routes.partnership,
            children: [
              { label: "نظرة عامة", href: routes.partnershipTop },
              { label: "الخطوات", href: routes.steps },
              { label: "النماذج", href: routes.paths },
              { label: "المزايا", href: routes.benefits },
              { label: "التواصل", href: routes.finalCta },
            ],
          },
        ],
        primaryCta: {
          label: "قدّم للشراكة",
          href: routes.finalCta,
        },
      },
      hero: {
        eyebrow: "شراكة تونس",
        title: "مسار شراكة أوضح داخل تونس للشركاء والوكلاء.",
        highlightedWords: ["مسار شراكة"],
        body:
          "هذه الصفحة مبنية لنية الأعمال: تأهيل أوضح، وتجهيز للإطلاق، وقراءة أفضل للتقارير، ودعم مباشر بعد الموافقة.",
        primaryCta: {
          label: "قدّم للشراكة",
          href: routes.finalCta,
        },
        secondaryCta: {
          label: "راجع النماذج",
          href: routes.paths,
        },
        stats: [
          {
            label: "نافذة المراجعة",
            value: "24h",
            note: "للطلبات المؤهلة",
            numericValue: 24,
            suffix: "h",
          },
          {
            label: "دورة التقارير",
            value: "7d",
            note: "متابعة أسبوعية منظمة",
            numericValue: 7,
            suffix: "d",
          },
          {
            label: "المسارات التجارية",
            value: "2",
            note: "شريك ووكيل",
            numericValue: 2,
          },
        ],
        stage: {
          eyebrow: "واجهة تشغيلية",
          title: "إعداد مبني للتحكم في الإطلاق والمتابعة واتخاذ قرار أوضح.",
          badge: "مسار أعمال",
          metrics: [
            {
              label: "جاهزية الإطلاق",
              value: "92%",
              note: "مقياس الموافقة والإعداد",
              numericValue: 92,
              suffix: "%",
            },
            {
              label: "استجابة المكتب",
              value: "18m",
              note: "متوسط الدعم",
              numericValue: 18,
              suffix: "m",
            },
            {
              label: "المسارات النشطة",
              value: "12",
              note: "مصادر ظاهرة في واجهة واحدة",
              numericValue: 12,
            },
          ],
          lanes: [
            {
              label: "تهيئة الشريك",
              value: 89,
              note: "المراجعة التجارية وإعداد التقارير وخطوات الإطلاق تبقى متناسقة",
            },
            {
              label: "تفعيل الوكيل",
              value: 82,
              note: "إطلاق شبكي مع تصعيد أسرع وتواصل دعم أوضح",
            },
            {
              label: "متابعة أسبوعية",
              value: 77,
              note: "إيقاع مراجعة أنظف بعد انطلاق المسار",
            },
          ],
          note:
            "صفحة الأعمال منفصلة عن الصفحة الرئيسية للاعبين حتى تبقى نية الشراكة واضحة من أول شاشة حتى خطوة التواصل النهائية.",
        },
      },
      benefits: {
        eyebrow: "لماذا هذا المسار",
        title: "إعداد تونسي أكثر إحكاماً للشركاء والوكلاء.",
        body:
          "المسار التجاري مصمم ليكون أسهل في التأهيل، وأسهل في المتابعة، وأسهل في الإدارة عندما تبدأ الحركة.",
        items: [
          {
            title: "تقارير أنظف",
            body:
              "راجع الحجم وجودة المصدر ووضوح الدفع من دون أن تضيع القرارات داخل لوحة مزدحمة.",
            icon: "reporting",
          },
          {
            title: "دعم إطلاق أسرع",
            body:
              "التأهيل والإعداد والخطوات التالية تبقى ضمن مسار واحد لتقليل التأخير بعد الموافقة.",
            icon: "support",
          },
          {
            title: "إيقاع دفع منظم",
            body:
              "حافظ على حالة الموافقة والمتابعة الأسبوعية بشكل يمكن استخدامه فعلاً في التشغيل اليومي.",
            icon: "payouts",
          },
          {
            title: "مواد جاهزة للسوق",
            body:
              "استخدم مواد أوضح وخطافات عملية تلائم تونس من دون ضجيج تسويقي زائد.",
            icon: "creative",
          },
        ],
      },
      steps: {
        eyebrow: "كيف يعمل",
        title: "3 خطوات بسيطة",
        items: [
          {
            step: "01",
            title: "سجّل",
            body: "سجّل مباشرة من خلال التواصل معنا.",
            imageSrc: "/how/join.png",
            imageAlt: "صورة خطوة التسجيل",
            primaryCta: {
              label: "انضم إلينا",
              href: routes.finalCta,
            },
          },
          {
            step: "02",
            title: "ابدأ بجذب اللاعبين",
            body: "ابدأ بجذب اللاعبين باستخدام باقات تسويقية جاهزة.",
            imageSrc: "/how/marketing.png",
            imageAlt: "صورة خطوة التسويق",
          },
          {
            step: "03",
            title: "كرّر ووسّع",
            body: "كرّر ووسّع.",
            imageSrc: "/how/scale.png",
            imageAlt: "صورة خطوة التوسع",
          },
        ],
      },
      paths: {
        eyebrow: "نماذج الشراكة",
        title: "اختر المسار التجاري الذي يناسب طريقتك في العمل.",
        body:
          "الصفحة تفصل بين احتياجات الشريك والوكيل حتى يكون النموذج التجاري أوضح قبل الإطلاق.",
        footerPrimaryCta: {
          label: "تواصل معنا",
          href: routes.finalCta,
        },
        footerSecondaryCta: {
          label: "المزايا",
          href: routes.benefits,
        },
        items: [
          {
            type: "partner",
            eyebrow: "مسار الأداء",
            title: "شريك أفلييت",
            body:
              "لـ publishers وmedia buyers والمجتمعات والـ introducers الذين يريدون تتبعاً واضحاً وإيقاع مراجعة أنظف.",
            bullets: [
              "رؤية حسب المصدر وهيكل تقارير أوضح",
              "دعم مرتبط بالإطلاق والمتابعة الأسبوعية",
              "مصمم لنمو قائم على الأداء",
            ],
          },
          {
            type: "agent",
            eyebrow: "مسار العلاقة",
            title: "شبكة وكيل محلية",
            body:
              "للمشغلين الذين يعملون عبر العلاقة المباشرة والتفعيل المحلي والاستحواذ الشبكي.",
            bullets: [
              "تهيئة وكيل ومسار دعم مخصص",
              "تصعيد أسرع للأسئلة اليومية",
              "مصمم للاحتفاظ وتكرار النشاط",
            ],
          },
        ],
      },
      tools: {
        eyebrow: "المزايا",
        title: "ماذا تكسب من هذه الشراكة.",
        stats: [
          {
            label: "اللاعبون النشطون",
            value: "128",
            note: "ضمن دورة دخل أسبوعية",
            numericValue: 128,
          },
          {
            label: "حصة الأرباح",
            value: "35%",
            note: "حصة متكررة من النشاط المستمر",
            numericValue: 35,
            suffix: "%",
          },
          {
            label: "CPA",
            value: "$25",
            note: "مدفوع على أول إيداعات مؤهلة",
            numericValue: 25,
            prefix: "$",
          },
        ],
        panel: {
          eyebrow: "لوحة الأفلييت",
          title: "لوحة cash agent بحركة مالية مباشرة.",
          badge: "اليوم",
          timeframeLabel: "اليوم",
          summaryItems: [
            { label: "الدفع المسبق", value: "4,800 TND جاهزة للسيولة النقدية" },
            { label: "المودَع", value: "12,650 TND مؤكدة اليوم" },
            { label: "المسحوب", value: "7,140 TND تمت تسويتها اليوم" },
            { label: "العمولة", value: "1,920 TND تُقفل هذه الدورة" },
          ],
        },
        showcase: [
          {
            title: "دخل أسبوعي مستمر وقاعدة عملاء طويلة الأمد",
            body:
              "هذه الشراكة مبنية لتستمر في توليد الربح من الإيداعات المتكررة، واللاعبين المحتفظ بهم، والعلاقات المباشرة التي تزيد قيمتها مع الوقت.",
            tags: ["دخل أسبوعي مستمر", "قاعدة عملاء طويلة الأمد", "إيداعات متكررة"],
          },
        ],
      },
      finalCta: {
        eyebrow: "انضم إلينا",
        title: "انضم إلينا وابدأ مسار الشراكة الخاص بك في تونس.",
        body:
          "راسلنا على واتساب أو تيليجرام وسنساعدك في اختيار الترتيب الذي يناسب الترافيك أو اللاعبين أو الشبكة المحلية التي تملكها.",
        helperText:
          "إذا كنت جاهزًا للنمو معنا، فالخطوة الأولى بسيطة ومرحّبة.",
        primary: {
          label: "انضم عبر واتساب",
          href: channels.whatsapp,
        },
        secondary: {
          label: "انضم عبر تيليجرام",
          href: channels.telegram,
        },
      },
      footer: {
        brand: "سوق تونس",
        body:
          "Landing تونسية للاعبين والشراكات، مبنية على اكتشاف أسرع، ودعم أوضح، ومسار أفضل على الجوال.",
        homeLabel: "الرئيسية",
        homeLinks: [
          { label: "نظرة عامة", href: routes.top },
          { label: "الألعاب", href: routes.games },
          { label: "الرياضات", href: routes.sports },
          { label: "العروض", href: routes.offers },
          { label: "الوصول", href: routes.play },
        ],
        partnershipLabel: "الشراكة",
        partnershipLinks: [
          { label: "نظرة عامة", href: routes.partnershipTop },
          { label: "الخطوات", href: routes.steps },
          { label: "النماذج", href: routes.paths },
          { label: "المزايا", href: routes.benefits },
          { label: "التواصل", href: routes.finalCta },
        ],
        contactLabel: "التواصل",
        legal: "حقوق النشر 2026 سوق تونس. جميع الحقوق محفوظة.",
        contactLinks: [
          { label: "واتساب", href: channels.whatsapp },
          { label: "تيليجرام", href: channels.telegram },
          { label: "البريد الإلكتروني", href: channels.email },
        ],
      },
    },
  },
} satisfies Record<Language, TunisiaTranslations>;

export function getTranslations(language: Language) {
  return translations[language] ?? translations.fr;
}
