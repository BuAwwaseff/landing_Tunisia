import type { ThemeCssVariables, ThemeTokens } from "@/schemas/landing";

const typeScale = {
  display: "clamp(3rem, 7vw, 6.45rem)",
  heading: "clamp(2rem, 4vw, 3.6rem)",
  subheading: "clamp(1.15rem, 2vw, 1.45rem)",
  cardTitle: "clamp(1.125rem, 1.7vw, 1.5rem)",
  bodyLg: "clamp(1rem, 1.35vw, 1.15rem)",
  body: "0.98rem",
  label: "0.78rem",
  meta: "0.72rem",
  metric: "clamp(1.75rem, 3vw, 2.8rem)",
  metricSecondary: "0.92rem",
  stat: "0.95rem",
} as const;

const radii = {
  sm: "14px",
  md: "20px",
  lg: "28px",
  xl: "38px",
  pill: "999px",
} as const;

const spacing = {
  sectionY: "clamp(4.5rem, 9vw, 7rem)",
  sectionYMobile: "4rem",
  containerX: "clamp(18px, 4vw, 42px)",
  cardPadding: "clamp(1.1rem, 2vw, 1.5rem)",
  gridGap: "clamp(1rem, 1.8vw, 1.5rem)",
} as const;

const motion = {
  durationFast: 220,
  durationBase: 460,
  durationSlow: 780,
  durationLoop: 5600,
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

function flattenTheme(
  prefix: string,
  value: ThemeMap,
  output: Record<string, string>,
) {
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
