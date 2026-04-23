import { baseThemeScales, createThemeVars } from "@/themes/base";
import type { ThemeTokens } from "@/schemas/landing";

export const tunisiaTheme: ThemeTokens = {
  color: {
    bg: "#08131f",
    bgTop: "#11273a",
    foreground: "#f7f0e5",
    foregroundSoft: "rgba(247, 240, 229, 0.74)",
    primary: "#ff845d",
    primarySoft: "rgba(255, 132, 93, 0.16)",
    primaryStrong: "#ffc48c",
    secondary: "#53d4c3",
    surface: "rgba(10, 24, 38, 0.84)",
    surfaceStrong: "rgba(8, 18, 29, 0.94)",
    surfaceAccent: "rgba(42, 20, 19, 0.94)",
    borderSoft: "rgba(247, 240, 229, 0.1)",
    borderStrong: "rgba(255, 132, 93, 0.28)",
    gridLine: "rgba(83, 212, 195, 0.04)",
    glow: "rgba(83, 212, 195, 0.16)",
    success: "#69d6a1",
    danger: "#ff8065",
  },
  type: baseThemeScales.type,
  radius: baseThemeScales.radius,
  space: baseThemeScales.space,
  shadow: {
    soft: "0 22px 58px rgba(0, 0, 0, 0.24)",
    card: "0 30px 84px rgba(2, 8, 14, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    hero: "0 42px 120px rgba(2, 8, 14, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    glow: "0 0 84px rgba(83, 212, 195, 0.2)",
  },
  motion: baseThemeScales.motion,
};

export const tunisiaThemeVars = createThemeVars(tunisiaTheme);
