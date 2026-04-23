import type { ThemeCssVariables, ThemeTokens } from "@/schemas/landing";

const typeScale = {
  display: "clamp(2.8rem, 7vw, 6rem)",
  heading: "clamp(2rem, 4vw, 3.5rem)",
  subheading: "clamp(1.05rem, 1.9vw, 1.3rem)",
  cardTitle: "clamp(1.15rem, 1.9vw, 1.55rem)",
  bodyLg: "clamp(1rem, 1.28vw, 1.12rem)",
  body: "0.98rem",
  label: "0.78rem",
  meta: "0.72rem",
  metric: "clamp(1.7rem, 3vw, 2.8rem)",
  metricSecondary: "0.92rem",
  stat: "0.95rem",
} as const;

const radii = {
  sm: "12px",
  md: "18px",
  lg: "26px",
  xl: "34px",
  pill: "999px",
} as const;

const spacing = {
  sectionY: "clamp(3.1rem, 6vw, 4.8rem)",
  sectionYMobile: "2.8rem",
  containerX: "clamp(16px, 4vw, 40px)",
  cardPadding: "clamp(1rem, 1.8vw, 1.35rem)",
  gridGap: "clamp(0.9rem, 1.8vw, 1.4rem)",
} as const;

const motion = {
  durationFast: 220,
  durationBase: 460,
  durationSlow: 760,
  durationLoop: 5200,
  easingStandard: "easeOutCubic",
  easingEntrance: "cubicBezier(0.22, 1, 0.36, 1)",
  easingEmphasis: "easeOutExpo",
} as const;

export const baseThemeScales = {
  type: typeScale,
  radius: radii,
  space: spacing,
  motion,
};

function toKebabCase(value: string) {
  return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

type ThemeLeaf = string | number | undefined;

interface ThemeMap {
  [key: string]: ThemeLeaf | ThemeMap;
}

function flattenTheme(prefix: string, value: ThemeMap, output: Record<string, string>) {
  for (const [key, entry] of Object.entries(value)) {
    if (entry === undefined) continue;
    const nextKey = prefix ? `${prefix}-${toKebabCase(key)}` : toKebabCase(key);

    if (entry && typeof entry === "object") {
      flattenTheme(nextKey, entry, output);
      continue;
    }

    output[`--${nextKey}`] = String(entry);
  }
}

export function createThemeVars(theme: ThemeTokens): ThemeCssVariables {
  const output: Record<string, string> = {};
  flattenTheme("", theme as unknown as ThemeMap, output);
  return output as ThemeCssVariables;
}
