import { cn } from "@/lib/format";

export default function SectionHeader({
  eyebrow,
  title,
  body,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "section-header flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-start",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "section-header__eyebrow eyebrow section-divider text-[var(--color-primary-strong)]",
            align === "center" ? "justify-center" : "justify-start",
          )}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2 className="section-header__title type-heading text-[var(--color-foreground)]">{title}</h2>
      {body ? <p className="section-header__body type-body-lg">{body}</p> : null}
    </div>
  );
}
