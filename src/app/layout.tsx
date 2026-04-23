import type { CSSProperties } from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import InteractiveBackdrop from "@/components/layout/InteractiveBackdrop";
import { tunisiaContent } from "@/content/markets/tunisia";
import { tunisiaConfig } from "@/config/tunisia";
import { tunisiaThemeVars } from "@/themes/tunisia";

export const metadata: Metadata = {
  title: tunisiaContent.seo.title,
  description: tunisiaContent.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body
        dir={tunisiaConfig.direction}
        style={tunisiaThemeVars as CSSProperties}
        className="min-h-full"
      >
        <InteractiveBackdrop />
        {children}
      </body>
    </html>
  );
}
