import { formatNumber } from "@/lib/format";

export default function Metric({
  label,
  value,
  note,
  prefix,
  suffix,
}: {
  label: string;
  value: number | string;
  note?: string;
  prefix?: string;
  suffix?: string;
}) {
  const display = typeof value === "number" ? formatNumber(value) : value;

  return (
    <div className="metric">
      <span className="type-label text-[var(--color-foreground-soft)]">{label}</span>
      <span className="type-metric metric__value text-[var(--color-foreground)]">
        {prefix ?? ""}
        {display}
        {suffix ?? ""}
      </span>
      {note ? <span className="type-metric-secondary text-[var(--color-foreground-soft)]">{note}</span> : null}
    </div>
  );
}

