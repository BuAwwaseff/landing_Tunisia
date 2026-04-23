import type { MarketContent } from "@/schemas/landing";

function isExternalLink(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export default function Footer({
  content,
  direction,
}: {
  content: MarketContent["footer"];
  direction: "ltr" | "rtl";
}) {
  return (
    <footer dir={direction} className="footer-shell mt-12 pb-10 pt-12">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.9fr_0.95fr]">
          <div className="footer-panel flex flex-col gap-5">
            <div className="brand-mark">
              <span className="brand-emblem" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="8.5" stroke="var(--color-primary)" strokeWidth="2" />
                  <path
                    d="M12.5 5.5a5.5 5.5 0 1 0 0 11A4.1 4.1 0 1 1 12.5 8a5.5 5.5 0 0 0 0-2.5Z"
                    fill="var(--color-primary)"
                  />
                  <path
                    d="M13.7 7.2 14.3 8.8 16 8.8 14.6 9.8 15.2 11.5 13.7 10.5 12.2 11.5 12.8 9.8 11.4 8.8 13.1 8.8Z"
                    fill="var(--color-secondary)"
                  />
                </svg>
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-foreground)]">
                {content.brand}
              </span>
            </div>
            <span className="footer-chip">Premium partner support</span>
            {content.body ? <p className="type-body max-w-md">{content.body}</p> : null}
          </div>

          <div className="footer-panel flex flex-col gap-4">
            <p className="eyebrow text-[var(--color-primary-strong)]">
              {content.navigationLabel ?? "Navigation"}
            </p>
            <div className="flex flex-col gap-3">
              {content.links?.map((link) => (
                <a key={link.href} href={link.href} className="footer-link type-body text-[var(--color-foreground-soft)]">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-panel flex flex-col gap-4">
            <p className="eyebrow text-[var(--color-primary-strong)]">
              {content.contactLabel ?? "Connect"}
            </p>
            <div className="flex flex-col gap-3">
              {content.contactLinks?.map((link) => (
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
          <div className="mt-10 border-t border-white/8 pt-5 text-sm text-[var(--color-foreground-soft)]">
            {content.legal}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
