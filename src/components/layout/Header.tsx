"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import { cn } from "@/lib/format";
import type { LanguageOption } from "@/lib/locale";
import type { BrandInfo, LinkItem } from "@/schemas/landing";

type HeaderProps = {
  nav: {
    brand: BrandInfo;
    items: LinkItem[];
    primaryCta: LinkItem;
  };
  direction: "ltr" | "rtl";
  languageOptions?: LanguageOption[];
};

function normalizeItemPath(href: string) {
  const [withoutHash] = href.split("#");
  const [withoutQuery] = withoutHash.split("?");
  return withoutQuery || "/";
}

function BrandMark({ brand }: { brand: BrandInfo }) {
  const label = brand.logoAlt ?? `${brand.eyebrow} ${brand.title}`;

  return (
    <Link href={brand.href ?? "/"} className="brand-mark shrink-0" aria-label={label}>
      {brand.logoSrc ? (
        <>
          <img src={brand.logoSrc} alt={label} className="brand-logo" />
          <span className="sr-only">{label}</span>
        </>
      ) : (
        <>
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
          <span className="brand-copy flex flex-col leading-none">
            <span className="type-meta text-[var(--color-foreground-soft)]">{brand.eyebrow}</span>
            <span className="text-sm font-bold tracking-[0.16em] uppercase text-[var(--color-foreground)]">
              {brand.title}
            </span>
          </span>
        </>
      )}
    </Link>
  );
}

function isItemActive(item: LinkItem, pathname: string) {
  const itemPath = normalizeItemPath(item.href);

  if (itemPath === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(itemPath);
}

function hasActiveChild(item: LinkItem, pathname: string) {
  return item.children?.some((child) => pathname.startsWith(normalizeItemPath(child.href))) ?? false;
}

export default function Header({
  nav,
  direction,
  languageOptions,
}: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false);
      setMobileSubmenu(null);
    };

    window.addEventListener("hashchange", closeMenu);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("hashchange", closeMenu);
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4" dir={direction}>
      <div className="container-main">
        <div className="header-shell">
          <div className="relative flex min-h-[74px] items-center gap-4 px-4 py-3 sm:px-5 lg:px-6">
            <BrandMark brand={nav.brand} />
            <span className="header-live-chip hidden xl:inline-flex">Partnership line</span>

            <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
              {nav.items.map((item) => {
                const active = isItemActive(item, pathname) || hasActiveChild(item, pathname);

                if (!item.children?.length) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn("nav-link eyebrow nav-link--top", active && "nav-link--active")}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.href} className="nav-item-group">
                    <Link
                      href={item.href}
                      className={cn("nav-link eyebrow nav-link--top", active && "nav-link--active")}
                    >
                      <span className="nav-link__content">
                        <span>{item.label}</span>
                        <span className="nav-caret" aria-hidden />
                      </span>
                    </Link>

                    <div className="nav-dropdown">
                      <div className="nav-dropdown__panel">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} className="nav-dropdown-link">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            <div className="ml-auto hidden items-center gap-3 lg:flex">
              <span className="header-status-chip hidden 2xl:inline-flex">24h review</span>
              {languageOptions?.length ? <LanguageSwitch options={languageOptions} /> : null}
              <Button href={nav.primaryCta.href} external size="md">
                {nav.primaryCta.label}
              </Button>
            </div>

            <div className="ml-auto flex items-center gap-2 lg:hidden">
              <a
                href={nav.primaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-[16px] border border-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-foreground)] sm:inline-flex"
              >
                {nav.primaryCta.label}
              </a>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[16px] border border-white/10 bg-white/5"
                onClick={() => setMenuOpen((current) => !current)}
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
              >
                <span className="relative block h-4 w-4">
                  <span
                    className={cn(
                      "absolute left-0 top-[2px] h-px w-full bg-white",
                      menuOpen && "translate-y-[6px] rotate-45",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white",
                      menuOpen && "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-[2px] left-0 h-px w-full bg-white",
                      menuOpen && "-translate-y-[6px] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {menuOpen ? (
          <div className="relative lg:hidden">
            <div className="header-menu p-4">
              <nav className="flex flex-col gap-2">
                {nav.items.map((item) => {
                  const itemOpen = mobileSubmenu === item.href;

                  if (!item.children?.length) {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-[18px] border border-white/6 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-[var(--color-foreground-soft)] transition-colors hover:text-[var(--color-foreground)]"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={item.href} className="header-mobile-group">
                      <div className="flex items-center gap-2">
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="min-w-0 flex-1 rounded-[18px] border border-white/6 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-[var(--color-foreground-soft)] transition-colors hover:text-[var(--color-foreground)]"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          className={cn("header-mobile-toggle", itemOpen && "header-mobile-toggle--open")}
                          aria-expanded={itemOpen}
                          aria-label={`Toggle ${item.label} sections`}
                          onClick={() =>
                            setMobileSubmenu((current) => (current === item.href ? null : item.href))
                          }
                        >
                          <span className="nav-caret" aria-hidden />
                        </button>
                      </div>

                      {itemOpen ? (
                        <div className="header-mobile-submenu">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="header-mobile-submenu__link"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </nav>

              <div className="mt-4 flex flex-col gap-3">
                {languageOptions?.length ? <LanguageSwitch options={languageOptions} /> : null}
                <Button href={nav.primaryCta.href} external>
                  {nav.primaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
