import type { MarketContent } from "@/schemas/landing";

const channels = {
  join: { label: "Open the partnership chat", href: "https://t.me/tunisia_partner_desk" },
  whatsapp: { label: "Talk with the desk", href: "https://wa.me/21655011223" },
  email: { label: "Email the partnership team", href: "mailto:partners@tunisiadesk.com" },
};

export const tunisiaContent: MarketContent = {
  seo: {
    title: "Tunisia Partnership Desk | Premium Affiliate & Agent Network",
    description:
      "Recruit traffic, activate agents, and grow faster with a premium Tunisia-focused partner desk built for reporting, payouts, and serious scale.",
  },
  nav: {
    brand: {
      eyebrow: "Tunisia",
      title: "Partnership Desk",
      href: "/",
      logoAlt: "Tunisia Partnership Desk",
    },
    items: [
      { label: "Why Us", href: "#benefits" },
      { label: "How It Works", href: "#steps" },
      { label: "Models", href: "#paths" },
      { label: "Tools", href: "#tools" },
      { label: "Contact", href: "#final-cta" },
    ],
    primaryCta: channels.join,
  },
  hero: {
    eyebrow: "Tunisia Partnership Desk",
    title: "Grow Tunisia with a partner desk that feels premium from day one.",
    highlightedWords: ["feels premium from day one"],
    body:
      "Built for affiliates, agents, media buyers, and regional operators who want fast onboarding, clean reporting, responsive support, and a commercial setup designed for lasting growth.",
    primaryCta: channels.join,
    secondaryCta: { label: "Explore partner models", href: "#paths" },
    stats: [
      {
        label: "review window",
        value: "24h",
        numericValue: 24,
        suffix: "h",
        note: "for qualified partner profiles",
      },
      {
        label: "payout rhythm",
        value: "7d",
        numericValue: 7,
        suffix: "d",
        note: "clear weekly follow-up and reporting",
      },
      {
        label: "partner routes",
        value: "3",
        numericValue: 3,
        note: "affiliate, agent, and master partner paths",
      },
    ],
    stage: {
      eyebrow: "Inside the desk",
      title: "A launch experience built for clarity, speed, and stronger follow-through.",
      badge: "Live support",
      metrics: [
        {
          label: "response pace",
          value: "18m",
          numericValue: 18,
          suffix: "m",
          note: "median partner support response",
        },
        {
          label: "campaign lanes",
          value: "12",
          numericValue: 12,
          note: "active sources visible in one place",
        },
        {
          label: "launch pace",
          value: "24h",
          numericValue: 24,
          suffix: "h",
          note: "fast start for approved partners",
        },
        {
          label: "creative refreshes",
          value: "5",
          numericValue: 5,
          note: "new hooks and assets each week",
        },
      ],
      lanes: [
        {
          label: "Onboarding clarity",
          value: 91,
          note: "You know the next step, the contact point, and what is needed to go live.",
        },
        {
          label: "Reporting visibility",
          value: 86,
          note: "Performance, payout status, and source quality stay easy to read.",
        },
        {
          label: "Regional support",
          value: 94,
          note: "Partner managers understand the market realities behind the numbers.",
        },
      ],
      note:
        "The Tunisia desk is meant to feel polished and dependable: less friction, fewer blind spots, and better communication throughout the cycle.",
      insight: {
        eyebrow: "Partner promise",
        title: "Clear structure beats noisy dashboards every time.",
        body: "The goal is simple: make it easier to launch, easier to manage, and easier to keep growing without second-guessing what comes next.",
      },
    },
  },
  benefits: {
    eyebrow: "Why Tunisia partners choose us",
    title: "A partner desk that makes serious growth feel easier to manage.",
    body:
      "The Tunisia build is designed to feel premium without becoming complicated: easy to trust, easy to navigate, and built around visibility, follow-through, and regional growth.",
    items: [
      {
        title: "Premium reporting surfaces",
        body: "Track volume, conversion quality, and payout status in a cleaner operating view that supports real decisions.",
        icon: "reporting",
      },
      {
        title: "Structured payouts",
        body: "Keep payout cycles, role-based commissions, and cleared versus pending status visible without chasing updates.",
        icon: "payouts",
      },
      {
        title: "Regional onboarding support",
        body: "Launch faster with partner managers who understand North Africa traffic patterns, activation flows, and agent realities.",
        icon: "support",
      },
      {
        title: "Assets built to convert",
        body: "Receive market-ready creatives, campaign hooks, and landing guidance designed to help strong traffic perform better.",
        icon: "creative",
      },
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "From first message to live activity in three simple steps.",
    body:
      "The process stays intentionally lean so strong partners can move quickly without losing visibility or structure.",
    items: [
      {
        step: "01",
        title: "Apply and qualify",
        body: "Tell us how you work, where your traffic comes from, and what partner route fits you best so we can place you quickly.",
      },
      {
        step: "02",
        title: "Launch with assets and tracking",
        body: "Get your links, creative direction, offer mix, and reporting access without unnecessary setup friction.",
      },
      {
        step: "03",
        title: "Scale with the desk",
        body: "Once results are proven, grow into deeper commission structures, closer support, and stronger campaign planning.",
      },
    ],
  },
  paths: {
    eyebrow: "Partnership models",
    title: "Choose the Tunisia path that matches how you actually operate.",
    body:
      "Each route is designed for a different growth style, from solo performance affiliates to street-level agent networks and full business partners.",
    items: [
      {
        type: "agent",
        eyebrow: "Performance-led",
        title: "Affiliate desk",
        body: "Best for publishers, tipster communities, media buyers, and creators who want direct tracking and a clean operating rhythm.",
        bullets: [
          "Dedicated tracking links and source segmentation",
          "Creative refreshes shaped around campaign performance",
          "Weekly reporting rhythm and partner manager support",
        ],
        primaryCta: channels.join,
        secondaryCta: { label: "See tools", href: "#tools" },
      },
      {
        type: "partner",
        eyebrow: "Relationship-led",
        title: "Regional agent route",
        body: "For operators building local acquisition through relationships, direct outreach, and trust-led community activation.",
        bullets: [
          "Agent-focused onboarding and role-based commission mapping",
          "Faster escalation path for support and payout questions",
          "Designed for retention, reactivation, and account growth",
        ],
        primaryCta: channels.whatsapp,
        secondaryCta: { label: "Talk to the desk", href: "#final-cta" },
      },
      {
        type: "custom",
        eyebrow: "Portfolio scale",
        title: "Master partner model",
        body: "For serious teams that need a cleaner framework for portfolio scale, partner sub-structures, and commercial visibility.",
        bullets: [
          "Multi-source reporting for partner portfolios",
          "Strategic review with performance and growth recommendations",
          "Commercial flexibility once scale and quality are proven",
        ],
        primaryCta: channels.email,
        secondaryCta: { label: "Request review", href: "#final-cta" },
      },
    ],
  },
  tools: {
    eyebrow: "Operator toolkit",
    title: "The tooling is built to keep decisions simple, visible, and close at hand.",
    body:
      "Tunisia partners need to move from traffic to decisions quickly. The showcase below emphasizes clarity, payout confidence, and day-to-day control.",
    stats: [
      {
        label: "live sources",
        value: "12",
        numericValue: 12,
        note: "tracked in one operating view",
      },
      {
        label: "quality score",
        value: "91%",
        numericValue: 91,
        suffix: "%",
        note: "campaign hygiene benchmark",
      },
      {
        label: "desk response",
        value: "18m",
        numericValue: 18,
        suffix: "m",
        note: "partner support median",
      },
    ],
    showcaseLabel: "Desk feature",
    panel: {
      eyebrow: "Partner workspace",
      title: "A cleaner view of performance, payouts, and next moves.",
      badge: "Live preview",
      timeframeLabel: "Last 7 days",
      summaryItems: [
        { label: "Top source", value: "High-intent traffic lane holding steady" },
        { label: "Payout status", value: "Weekly cycle visible at a glance" },
        { label: "Next action", value: "Creative refresh queued for active lanes" },
      ],
    },
    showcase: [
      {
        title: "Acquisition view",
        body: "Monitor live source quality, regional volume spikes, and performance by traffic lane without hunting through cluttered dashboards.",
        tags: ["Traffic segmentation", "Live quality", "North Africa routing"],
      },
      {
        title: "Payout clarity",
        body: "Keep approved, pending, and upcoming payout states readable so finance questions do not slow down your next decision.",
        tags: ["Approval status", "Weekly cycles", "Partner-level visibility"],
      },
      {
        title: "Creative command",
        body: "Launch refreshed hooks, offers, and partner kits from one place with less lag between insight and campaign execution.",
        tags: ["Creative drops", "Offer swaps", "Campaign response"],
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to open the Tunisia lane?",
    title: "Pick the route that fits how you work best.",
    body:
      "Whether you are launching as an affiliate, growing an agent route, or structuring a larger partner portfolio, the first move should feel direct, premium, and easy to act on.",
    primary: channels.join,
    secondary: channels.whatsapp,
    cards: [
      {
        title: "Join the affiliate desk",
        body: "Best for immediate launch, traffic validation, and campaign onboarding.",
        cta: channels.join,
      },
      {
        title: "Speak with a regional manager",
        body: "Best for agent teams, business operators, and higher-touch commercial discussions.",
        cta: channels.whatsapp,
      },
    ],
  },
  footer: {
    brand: "Tunisia Partnership Desk",
    body:
      "A Tunisia-focused partnership build for affiliates, agents, and regional partner teams who value clean communication, structured payouts, and sustainable scale.",
    links: [
      { label: "Why Us", href: "#benefits" },
      { label: "How It Works", href: "#steps" },
      { label: "Models", href: "#paths" },
      { label: "Tools", href: "#tools" },
      { label: "Contact", href: "#final-cta" },
    ],
    navigationLabel: "Navigation",
    contactLabel: "Open Channels",
    legal: "Copyright 2026 Tunisia Partnership Desk. All rights reserved.",
    contactLinks: [channels.join, channels.whatsapp, channels.email],
  },
};
