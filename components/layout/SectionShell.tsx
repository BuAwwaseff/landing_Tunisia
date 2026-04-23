import type { ReactNode } from "react";
import { cn } from "@/lib/format";

export default function SectionShell({
  id,
  children,
  className,
  containerClassName,
  density = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  density?: "default" | "tight" | "hero";
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-shell",
        density === "hero" && "section-shell--hero",
        density === "tight" && "section-shell--tight",
        className,
      )}
    >
      <div className={cn("container-main", containerClassName)}>{children}</div>
    </section>
  );
}
