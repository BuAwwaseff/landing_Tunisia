import { baseThemeScales, createThemeVars } from "@/themes/base";
import type { ThemeTokens } from "@/schemas/landing";

export const tunisiaTheme: ThemeTokens = {
  color: {
    bg: "#05080d",
    bgTop: "#0b1118",
    foreground: "#f6f1e8",
    foregroundSoft: "rgba(246, 241, 232, 0.72)",
    primary: "#c61d2f",
    primarySoft: "rgba(198, 29, 47, 0.14)",
    primaryStrong: "#ef4256",
    secondary: "#5ca7df",
    surface: "rgba(12, 16, 22, 0.9)",
    surfaceStrong: "rgba(7, 10, 15, 0.96)",
    surfaceAccent: "rgba(26, 11, 14, 0.96)",
    borderSoft: "rgba(246, 241, 232, 0.08)",
    borderStrong: "rgba(198, 29, 47, 0.26)",
    gridLine: "rgba(92, 167, 223, 0.045)",
    glow: "rgba(198, 29, 47, 0.16)",
    success: "#70d1a5",
    danger: "#ff7e8d",
  },
  type: baseThemeScales.type,
  radius: {
    ...baseThemeScales.radius,
    lg: "24px",
    xl: "32px",
  },
  space: {
    ...baseThemeScales.space,
    sectionY: "clamp(2.7rem, 5.4vw, 4.2rem)",
    sectionYMobile: "2.5rem",
    cardPadding: "clamp(0.95rem, 1.6vw, 1.28rem)",
    gridGap: "clamp(0.82rem, 1.5vw, 1.25rem)",
  },
  shadow: {
    soft: "0 14px 42px rgba(0, 0, 0, 0.24)",
    card: "0 24px 60px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.03)",
    hero: "0 28px 78px rgba(0, 0, 0, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.035)",
    glow: "0 0 52px rgba(198, 29, 47, 0.12)",
  },
  motion: baseThemeScales.motion,
};

export const tunisiaThemeVars = createThemeVars(tunisiaTheme);
