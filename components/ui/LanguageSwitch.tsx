import Link from "next/link";
import { cn } from "@/lib/format";
import type { LanguageOption } from "@/lib/locale";

export default function LanguageSwitch({
  options,
}: {
  options: LanguageOption[];
}) {
  return (
    <div className="inline-flex items-center rounded-[16px] border border-white/10 bg-white/5 p-1">
      {options.map((option) => (
        <Link
          key={option.code}
          href={option.href}
          className={cn(
            "rounded-[12px] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors",
            option.active
              ? "bg-[var(--color-primary)] text-white"
              : "text-[var(--color-foreground-soft)]",
          )}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
}
