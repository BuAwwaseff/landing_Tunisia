"use client";

import Image from "next/image";
import { cn } from "@/lib/format";
import type { PlayerIcon, PlayerVisual as PlayerVisualType } from "@/schemas/landing";

function IconGlyph({ icon }: { icon: PlayerIcon }) {
  switch (icon) {
    case "aviator":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M11 40l18-4 20-17c2-2 5-2 7 0s2 5 0 7L39 46l-4 18-5-10-8-3-11 2 3-13z" />
          <path d="M28 37l-9-9" />
        </svg>
      );
    case "crash":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M12 48h40" />
          <path d="M16 42l10-10 8 6 14-18" />
          <path d="M40 20h8v8" />
        </svg>
      );
    case "slots":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect x="12" y="14" width="40" height="36" rx="10" />
          <path d="M24 22h0M32 22h0M40 22h0" />
          <path d="M20 31h24" />
          <path d="M24 40l4-4 4 4 4-4 4 4" />
        </svg>
      );
    case "live-casino":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect x="13" y="18" width="20" height="28" rx="5" />
          <circle cx="47" cy="35" r="11" />
          <path d="M23 24l4 4-4 4-4-4 4-4z" />
          <path d="M47 28v14M40 35h14" />
        </svg>
      );
    case "football":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="18" />
          <path d="M32 20l6 5-2 7h-8l-2-7 6-5z" />
          <path d="M24 32l-6 4M40 32l6 4M28 39l-4 7M36 39l4 7" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="19" />
          <path d="M13 32h38" />
          <path d="M32 13c6 6 9 12 9 19s-3 13-9 19" />
          <path d="M32 13c-6 6-9 12-9 19s3 13 9 19" />
          <path d="M18 22c4 2 9 3 14 3s10-1 14-3M18 42c4-2 9-3 14-3s10 1 14 3" />
        </svg>
      );
    case "basketball":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="18" />
          <path d="M32 14c7 6 11 12 11 18s-4 12-11 18" />
          <path d="M32 14C25 20 21 26 21 32s4 12 11 18" />
          <path d="M14 32h36" />
        </svg>
      );
    case "tennis":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 19c8-8 19-8 27 0s8 19 0 27c-8 8-19 8-27 0s-8-19 0-27z" />
          <path d="M23 24c5-5 13-5 18 0" />
          <path d="M18 46l12-12" />
          <path d="M17 47l-5 5" />
        </svg>
      );
    case "esports":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 28h28a9 9 0 0 1 8 6l4 12a6 6 0 0 1-10 6l-6-6H22l-6 6a6 6 0 0 1-10-6l4-12a9 9 0 0 1 8-6z" />
          <path d="M23 35v10M18 40h10" />
          <path d="M42 37h0M49 43h0" />
          <path d="M26 28v-6h12v6" />
        </svg>
      );
    case "bonus":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M22 16l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1 4-8z" />
          <path d="M41 18l5 5M46 18l-5 5" />
          <path d="M43 31c-3 3-3 8 0 11s8 3 11 0 3-8 0-11-8-3-11 0z" />
        </svg>
      );
    case "wallet":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M14 22c0-4 3-7 7-7h25l6 7v25c0 4-3 7-7 7H21c-4 0-7-3-7-7V22z" />
          <path d="M14 25h38" />
          <circle cx="44" cy="39" r="3" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 10 48 16v13c0 12-7 20-16 25C23 49 16 41 16 29V16l16-6z" />
          <path d="M26 32l4 4 8-10" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 30a14 14 0 1 1 28 0" />
          <path d="M20 35v7a4 4 0 0 0 4 4h3V31h-3a4 4 0 0 0-4 4Zm24-4h-3v15h3a4 4 0 0 0 4-4v-7a4 4 0 0 0-4-4Z" />
          <path d="M29 47h6" />
        </svg>
      );
    case "signal":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 44a4 4 0 100 8 4 4 0 000-8z" />
          <path d="M23 36a13 13 0 0118 0" />
          <path d="M16 28a23 23 0 0132 0" />
          <path d="M10 20a31 31 0 0144 0" />
        </svg>
      );
  }
}

export default function PlayerVisual({
  visual,
  className,
  imageClassName,
  imageSizes,
}: {
  visual: PlayerVisualType;
  className?: string;
  imageClassName?: string;
  imageSizes?: string;
}) {
  const isImage = visual.kind === "image";

  return (
    <div
      className={cn(
        "player-visual",
        isImage && "player-visual--image",
        visual.theme && `player-visual--${visual.theme}`,
        className,
      )}
    >
      <span className="player-visual__orb" aria-hidden />
      {isImage ? (
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes={imageSizes ?? "(max-width: 640px) 50vw, 260px"}
          className={cn("player-visual__image", imageClassName)}
        />
      ) : (
        <span className="player-visual__icon" aria-hidden>
          <IconGlyph icon={visual.icon} />
        </span>
      )}
      {visual.label ? <span className="player-visual__label">{visual.label}</span> : null}
    </div>
  );
}
