import Image from "next/image";
import type { FooterContent } from "@/schemas/landing";

function isExternalLink(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export default function Footer({
  content,
  direction,
}: {
  content: FooterContent;
  direction: "ltr" | "rtl";
}) {
  return (
    <footer dir={direction} className="footer-shell mt-10 pb-10 pt-10">
      <div className="container-main">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.85fr_0.85fr_0.9fr]">
          <div className="footer-panel flex flex-col gap-4">
            <div className="brand-mark">
              <Image src="/logo.svg" alt={content.brand} className="brand-logo" width={168} height={30} />
            </div>
            {content.body ? <p className="type-body text-[var(--color-foreground-soft)]">{content.body}</p> : null}
          </div>

          <div className="footer-panel flex flex-col gap-4">
            <p className="eyebrow text-[var(--color-primary-strong)]">{content.homeLabel}</p>
            <div className="flex flex-col gap-3">
              {content.homeLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer-link type-body text-[var(--color-foreground-soft)]">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-panel flex flex-col gap-4">
            <p className="eyebrow text-[var(--color-primary-strong)]">{content.partnershipLabel}</p>
            <div className="flex flex-col gap-3">
              {content.partnershipLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer-link type-body text-[var(--color-foreground-soft)]">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-panel flex flex-col gap-4">
            <p className="eyebrow text-[var(--color-primary-strong)]">{content.contactLabel}</p>
            <div className="flex flex-col gap-3">
              {content.contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={isExternalLink(link.href) ? "_blank" : undefined}
                  rel={isExternalLink(link.href) ? "noreferrer" : undefined}
                  className="footer-link type-body text-[var(--color-foreground-soft)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {content.legal ? (
          <div className="mt-8 border-t border-white/8 pt-5 text-sm text-[var(--color-foreground-soft)]">
            {content.legal}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
