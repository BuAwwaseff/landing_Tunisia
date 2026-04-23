"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/format";
import { hoverLift } from "@/motion/presets";
import { prefersReducedMotion } from "@/motion/observers";

type PhoneMockupProps = {
  children?: ReactNode;
  className?: string;
  frameClassName?: string;
  screenClassName?: string;
  showDemoContent?: boolean;
  title?: string;
};

type DemoIconKind =
  | "bolt"
  | "cards"
  | "controller"
  | "football"
  | "crown"
  | "home"
  | "pulse"
  | "user";

const shortcutItems = [
  { label: "Fast Games", icon: "bolt" },
  { label: "Casino", icon: "cards" },
  { label: "Esports", icon: "controller" },
  { label: "Sports", icon: "football" },
  { label: "Top", icon: "crown" },
] satisfies Array<{ label: string; icon: DemoIconKind }>;

const liveSelections = [
  { label: "NXT", value: "1.84", active: true },
  { label: "RGN", value: "2.05" },
  { label: "Boost", value: "+12%" },
] as const;

const footballTags = ["Goals", "Build", "Top Pick"] as const;

const miniRailItems = [
  { label: "Ligue 1", icon: "football" },
  { label: "Crash", icon: "bolt" },
  { label: "Live", icon: "cards" },
  { label: "CS2", icon: "controller" },
] satisfies Array<{ label: string; icon: DemoIconKind }>;

const bottomNavItems = [
  { label: "Home", icon: "home" },
  { label: "Live", icon: "pulse" },
  { label: "Sports", icon: "football", active: true },
  { label: "Casino", icon: "cards" },
  { label: "Me", icon: "user" },
] satisfies Array<{ label: string; icon: DemoIconKind; active?: boolean }>;

export default function PhoneMockup({
  children,
  className = "",
  frameClassName = "",
  screenClassName = "",
  showDemoContent = true,
  title = "Arena Live",
}: PhoneMockupProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = frameRef.current;
    if (!element || prefersReducedMotion()) return;

    return hoverLift(element);
  }, []);

  const shouldRenderDemo = !children && showDemoContent;

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[20rem] shrink-0 sm:max-w-[21.5rem] lg:max-w-[22.75rem] xl:max-w-[24rem]",
        className,
      )}
    >
      <div
        ref={frameRef}
        className={cn("relative aspect-[370/760] w-full [transform-style:preserve-3d]", frameClassName)}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-[10%] bottom-[4%] h-[14%] rounded-[999px] bg-[radial-gradient(circle,rgba(0,0,0,0.5),transparent_72%)] blur-2xl"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[4%] rounded-[3.75rem] bg-[radial-gradient(circle_at_18%_16%,rgba(83,212,195,0.2),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,132,93,0.18),transparent_26%)] opacity-85 blur-3xl"
        />

        <DeviceSideButton className="left-[-3px] top-[18%] h-[9%] w-[4px]" />
        <DeviceSideButton className="left-[-3px] top-[30%] h-[11%] w-[4px]" />
        <DeviceSideButton className="right-[-3px] top-[25%] h-[14%] w-[4px]" />

        <div
          className={cn(
            "relative h-full w-full overflow-hidden rounded-[3.7rem] border border-white/10",
            "bg-[linear-gradient(180deg,rgba(248,252,255,0.24)_0%,rgba(182,193,212,0.08)_16%,rgba(15,21,31,0.28)_100%)]",
            "p-[9px] shadow-[0_44px_110px_rgba(0,0,0,0.42),0_0_0_1px_rgba(255,255,255,0.04)_inset]",
            "backdrop-blur-[10px]",
          )}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-[1px] rounded-[3.55rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.02)_14%,transparent_40%,rgba(255,255,255,0.06)_100%)] opacity-80"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute left-[9%] top-[2.4%] h-[24%] w-[40%] rounded-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.04),transparent)] opacity-35 blur-xl"
          />

          <div className="absolute left-1/2 top-[14px] z-20 h-[5px] w-[32%] -translate-x-1/2 rounded-full bg-black/45" />

          <div className="absolute left-1/2 top-[22px] z-30 flex h-[38px] w-[128px] -translate-x-1/2 items-center justify-center rounded-full border border-white/6 bg-black/88 shadow-[0_10px_22px_rgba(0,0,0,0.34)] backdrop-blur-sm">
            <span className="absolute left-[16px] h-[10px] w-[10px] rounded-full bg-black/70 ring-1 ring-white/6" />
            <span className="h-[8px] w-[54px] rounded-full bg-white/8" />
            <span className="absolute right-[16px] h-[9px] w-[9px] rounded-full bg-black/75 ring-1 ring-white/6" />
          </div>

          <div
            className={cn(
              "relative h-full w-full overflow-hidden rounded-[3.1rem] border border-white/6",
              "bg-[linear-gradient(180deg,rgba(4,10,18,0.98)_0%,rgba(6,13,23,0.96)_50%,rgba(4,8,15,0.99)_100%)]",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-12px_40px_rgba(0,0,0,0.24)]",
              screenClassName,
            )}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(83,212,195,0.16),transparent_24%),radial-gradient(circle_at_84%_14%,rgba(255,132,93,0.18),transparent_24%),linear-gradient(180deg,transparent,rgba(0,0,0,0.18))]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:92px_92px] opacity-20"
            />

            {children ? <div className="relative h-full w-full">{children}</div> : null}
            {shouldRenderDemo ? <DemoScreen title={title} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeviceSideButton({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(12,17,24,0.6)_28%,rgba(255,255,255,0.16)_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]",
        className,
      )}
    />
  );
}

function DemoScreen({ title }: { title: string }) {
  return (
    <div className="relative flex h-full flex-col px-3 pb-3 pt-12 text-[var(--color-foreground)] sm:px-4 sm:pb-4 sm:pt-[3.35rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36%] bg-[radial-gradient(circle_at_top,rgba(255,132,93,0.14),transparent_46%)]" />

      <div className="relative flex h-full flex-col rounded-[2.6rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.01)_100%)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-4">
        <StatusRow />

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)]/90">
              Matchday Hub
            </p>
            <h3 className="truncate pt-1 text-[1.02rem] font-black tracking-[-0.04em] text-[var(--color-foreground)]">
              {title}
            </h3>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 shadow-[0_8px_22px_rgba(0,0,0,0.18)]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-strong))] text-[#07111a]">
              <DemoIcon kind="pulse" className="h-3.5 w-3.5" />
            </span>
            <div className="leading-none">
              <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-white/55">
                Balance
              </span>
              <span className="block pt-1 text-[0.82rem] font-bold text-white">1.24k</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-2">
          {shortcutItems.map((item) => (
            <ShortcutChip key={item.label} label={item.label} icon={item.icon} />
          ))}
        </div>

        <div className="mt-4 flex-1 space-y-3">
          <LiveFocusCard />
          <FootballPreviewCard />
          <MiniRail />
        </div>

        <BottomNav />
      </div>
    </div>
  );
}

function StatusRow() {
  return (
    <div className="flex items-center justify-between text-[0.62rem] font-semibold tracking-[0.03em] text-white/72">
      <span>9:41</span>

      <div className="flex items-center gap-1.5">
        <span className="h-[0.38rem] w-[0.38rem] rounded-full bg-[var(--color-success)] animate-pulse" />
        <span className="h-[0.42rem] w-3.5 rounded-full bg-white/80" />
        <div className="flex items-end gap-[2px]">
          <span className="h-[5px] w-[2px] rounded-full bg-white/45" />
          <span className="h-[7px] w-[2px] rounded-full bg-white/55" />
          <span className="h-[9px] w-[2px] rounded-full bg-white/70" />
          <span className="h-[11px] w-[2px] rounded-full bg-white/90" />
        </div>
        <span className="ml-0.5 rounded-full border border-white/12 px-1.5 py-[2px] text-[0.5rem] text-white/60">
          5G
        </span>
      </div>
    </div>
  );
}

function ShortcutChip({
  label,
  icon,
}: {
  label: string;
  icon: DemoIconKind;
}) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-1.5 rounded-[1rem] border border-white/7 bg-white/[0.045] px-2 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(83,212,195,0.16),rgba(255,132,93,0.16))] text-[var(--color-primary-strong)]">
        <DemoIcon kind={icon} className="h-4 w-4" />
      </span>
      <span className="line-clamp-2 text-[0.56rem] font-semibold leading-tight text-white/72">{label}</span>
    </div>
  );
}

function LiveFocusCard() {
  return (
    <DemoCard
      className="bg-[linear-gradient(180deg,rgba(10,24,38,0.96)_0%,rgba(8,18,30,0.94)_100%),radial-gradient(circle_at_top_right,rgba(255,132,93,0.18),transparent_34%)]"
      accentClassName="bg-[radial-gradient(circle,rgba(255,132,93,0.32),transparent_68%)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/28 bg-[var(--color-primary)]/12 px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.18em] text-[var(--color-primary-strong)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Live now
          </div>

          <p className="mt-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-white/45">
            Esports final | map 3
          </p>
        </div>

        <div className="rounded-[1rem] border border-white/8 bg-black/20 px-3 py-2 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-white/45">
            Score
          </span>
          <span className="block pt-1 text-[1.15rem] font-black tracking-[-0.06em] text-white">2 : 1</span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[1fr_auto] gap-3">
        <div className="space-y-2.5">
          <TeamRow name="Neon Titans" accent="bg-[var(--color-secondary)]" />
          <TeamRow name="Rogue Grid" accent="bg-[var(--color-primary)]" />
        </div>

        <div className="flex items-end gap-1.5">
          <span className="h-8 w-1.5 rounded-full bg-[linear-gradient(180deg,rgba(83,212,195,0.22),rgba(83,212,195,0.92))]" />
          <span className="h-12 w-1.5 rounded-full bg-[linear-gradient(180deg,rgba(255,196,140,0.2),rgba(255,196,140,0.92))]" />
          <span className="h-16 w-1.5 rounded-full bg-[linear-gradient(180deg,rgba(255,132,93,0.16),rgba(255,132,93,0.96))]" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {liveSelections.map((item) => (
          <SelectionChip key={item.label} label={item.label} value={item.value} active={item.active} />
        ))}
      </div>
    </DemoCard>
  );
}

function FootballPreviewCard() {
  return (
    <DemoCard
      className="bg-[linear-gradient(180deg,rgba(7,16,27,0.98)_0%,rgba(7,15,25,0.95)_100%),radial-gradient(circle_at_18%_18%,rgba(83,212,195,0.16),transparent_28%)]"
      accentClassName="bg-[radial-gradient(circle,rgba(83,212,195,0.24),transparent_70%)]"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]/88">
            Football tonight
          </p>
          <p className="pt-1 text-[0.72rem] font-medium text-white/54">Featured match | 21:30</p>
        </div>

        <span className="rounded-full border border-white/8 bg-white/[0.045] px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-white/58">
          Matchday
        </span>
      </div>

      <div className="mt-3 rounded-[1.25rem] border border-white/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex items-center justify-between gap-2">
          <ClubBadge accent="bg-[var(--color-primary)]" label="EST" />
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.32em] text-white/38">vs</span>
          <ClubBadge accent="bg-[var(--color-secondary)]" label="CA" />
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white/48">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)]" />
          Derby focus
          <span className="h-1.5 w-1.5 rounded-full bg-white/18" />
          Fast access
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {footballTags.map((tag, index) => (
          <span
            key={tag}
            className={cn(
              "rounded-full border px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em]",
              index === 0
                ? "border-[var(--color-secondary)]/18 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]"
                : "border-white/8 bg-white/[0.045] text-white/65",
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </DemoCard>
  );
}

function MiniRail() {
  return (
    <div className="rounded-[1.45rem] border border-white/7 bg-white/[0.045] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/42">Popular now</p>
          <p className="pt-1 text-[0.8rem] font-bold tracking-[-0.03em] text-white">More inside the product</p>
        </div>

        <span className="rounded-full border border-[var(--color-primary)]/18 bg-[var(--color-primary)]/10 px-2.5 py-1 text-[0.54rem] font-bold uppercase tracking-[0.16em] text-[var(--color-primary-strong)]">
          Hot
        </span>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2">
        {miniRailItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-2 rounded-[1rem] border border-white/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-2 py-2.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-[var(--color-primary-strong)]">
              <DemoIcon kind={item.icon} className="h-4 w-4" />
            </span>
            <span className="text-[0.56rem] font-semibold leading-tight text-white/65">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="mt-3 grid grid-cols-5 gap-1 rounded-[1.35rem] border border-white/8 bg-black/20 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {bottomNavItems.map((item) => (
        <button
          key={item.label}
          type="button"
          className={cn(
            "flex flex-col items-center justify-center gap-1 rounded-[1rem] px-1 py-2 transition-colors",
            item.active ? "bg-white/[0.08] text-white" : "text-white/44",
          )}
        >
          <span
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full",
              item.active && "bg-[linear-gradient(135deg,rgba(83,212,195,0.16),rgba(255,132,93,0.16))] text-[var(--color-primary-strong)]",
            )}
          >
            <DemoIcon kind={item.icon} className="h-4 w-4" />
          </span>
          <span className="text-[0.55rem] font-semibold tracking-[0.08em]">{item.label}</span>
        </button>
      ))}
    </div>
  );
}

function DemoCard({
  children,
  className,
  accentClassName,
}: {
  children: ReactNode;
  className?: string;
  accentClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.7rem] border border-white/8 p-3.5 shadow-[0_18px_40px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.04)]",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full blur-2xl",
          accentClassName,
        )}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_26%,transparent_78%,rgba(0,0,0,0.1))]"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function TeamRow({
  name,
  accent,
}: {
  name: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/6 bg-white/[0.045] px-2.5 py-2">
      <span className={cn("h-2.5 w-2.5 rounded-full shadow-[0_0_16px_currentColor]", accent)} />
      <span className="truncate text-[0.72rem] font-semibold text-white/78">{name}</span>
    </div>
  );
}

function SelectionChip({
  label,
  value,
  active = false,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[1rem] border px-2.5 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
        active
          ? "border-[var(--color-primary)]/24 bg-[linear-gradient(180deg,rgba(255,132,93,0.16),rgba(255,132,93,0.08))]"
          : "border-white/8 bg-white/[0.045]",
      )}
    >
      <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-white/42">{label}</span>
      <span className="block pt-1 text-[0.88rem] font-black tracking-[-0.03em] text-white">{value}</span>
    </div>
  );
}

function ClubBadge({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-[1rem] border border-white/7 bg-white/[0.045] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <span className={cn("h-7 w-1.5 rounded-full", accent)} />
      <span className="text-[1.02rem] font-black tracking-[-0.05em] text-white">{label}</span>
    </div>
  );
}

function DemoIcon({
  kind,
  className,
}: {
  kind: DemoIconKind;
  className?: string;
}) {
  switch (kind) {
    case "bolt":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <path d="M11.5 1.75 4.75 10h4l-.25 8.25L15.25 9.9h-4l.25-8.15Z" fill="currentColor" />
        </svg>
      );
    case "cards":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <rect x="5.75" y="4.25" width="8.5" height="11.5" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M9 7h2M10 6v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="m8 13 2-2 2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "controller":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <path
            d="M6.5 7.5h7a3 3 0 0 1 2.9 3.8l-.75 2.7a1.8 1.8 0 0 1-3.08.73l-1.05-1.22H8.5L7.45 14.7a1.8 1.8 0 0 1-3.08-.72l-.75-2.7A3 3 0 0 1 6.5 7.5Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path d="M7 9.7v2.2M5.9 10.8h2.2M13.55 10.1h.01M14.95 11.5h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "football":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <circle cx="10" cy="10" r="6.75" stroke="currentColor" strokeWidth="1.4" />
          <path d="m10 5 2 1.7-.6 2.4H8.6L8 6.7 10 5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="m6.8 9.1-2.1 1.4M13.2 9.1l2.1 1.4M8.6 13.1l-1.2 2M11.4 13.1l1.2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "crown":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <path d="m4 14 1.2-7 4 3 2.2-5 2.3 5 4-3L16 14H4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M4 14h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <path d="m4.25 9.3 5.1-4.3a1 1 0 0 1 1.3 0l5.1 4.3V15a1 1 0 0 1-1 1h-2.7v-3.4H8V16H5.25a1 1 0 0 1-1-1V9.3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case "pulse":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <path d="M2.5 10h3.1l1.5-2.8 2.2 6.1 2-4H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
          <circle cx="10" cy="7" r="2.8" stroke="currentColor" strokeWidth="1.4" />
          <path d="M4.75 15.5a5.25 5.25 0 0 1 10.5 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
  }
}
