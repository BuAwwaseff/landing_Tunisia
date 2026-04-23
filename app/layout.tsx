import { Suspense, type CSSProperties } from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import InteractiveBackdrop from "@/components/layout/InteractiveBackdrop";
import MarketPageShell from "@/components/layout/MarketPageShell";
import { getTunisiaHomeContent } from "@/content/markets/tunisia";
import { tunisiaConfig } from "@/config/tunisia";
import { tunisiaThemeVars } from "@/themes/tunisia";

const defaultContent = getTunisiaHomeContent("ar");

export const metadata: Metadata = {
  title: defaultContent.seo.title,
  description: defaultContent.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full">
      <body
        dir={tunisiaConfig.direction}
        style={tunisiaThemeVars as CSSProperties}
        className="min-h-full"
      >
        <div className="app-root">
          <InteractiveBackdrop />
          <Suspense
            fallback={(
              <div className="page-shell">
                <main className="page-main">{children}</main>
              </div>
            )}
          >
            <MarketPageShell>{children}</MarketPageShell>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
