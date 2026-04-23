"use client";

import { cn } from "@/lib/format";

function StarIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("player-rating__star", active && "player-rating__star--active")}
    >
      <path d="M12 2.8l2.85 5.77 6.37.93-4.61 4.49 1.09 6.35L12 17.36 6.3 20.34l1.09-6.35L2.78 9.5l6.37-.93L12 2.8z" />
    </svg>
  );
}

export default function PlayerStarRating({
  rating,
  label,
  compact = false,
}: {
  rating: number;
  label: string;
  compact?: boolean;
}) {
  const rounded = Math.round(rating);

  return (
    <div className={cn("player-rating", compact && "player-rating--compact")}>
      <div className="player-rating__stars" aria-hidden>
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} active={index < rounded} />
        ))}
      </div>
      <div className="player-rating__copy" dir="ltr">
        <span className="player-rating__value">{rating.toFixed(1)}</span>
        <span className="player-rating__label">{label}</span>
      </div>
    </div>
  );
}
