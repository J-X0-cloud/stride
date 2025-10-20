/**
 * Stride design tokens, shared with the marketing site's CSS custom properties.
 * The app is dark-first: screens sit on `screen`, cards on `card`.
 */

export const colors = {
  ink: "#0B1622",
  ink2: "#122033",
  ink3: "#1B2D44",
  ink4: "#27405F",
  screen: "#0D1826",
  card: "#152538",
  cardAlt: "#132236",
  track: "#1E3350",
  tabBar: "#0B1522",
  border: "#2A4062",
  blue: "#2F6BFF",
  blueLight: "#6E9BFF",
  volt: "#D4FF3F",
  text: "#E8EFF8",
  textStrong: "#FFFFFF",
  textMuted: "#8FA3BC",
  textFaint: "#7F92AB",
  tabInactive: "#6A7E98",
  rest: "#3A5277",
  z1: "#8FD3FF",
  z2: "#3FA2FF",
  z3: "#D4FF3F",
  z4: "#FFB23F",
  z5: "#FF5A5F",
} as const;

export type ZoneColorKey = "z1" | "z2" | "z3" | "z4" | "z5";

export const fonts = {
  display: "Manrope_700Bold",
  body: "Inter_400Regular",
  medium: "Inter_500Medium",
  semibold: "Inter_600SemiBold",
} as const;

export const radii = {
  sm: 9,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
} as const;

export const text = {
  kicker: { fontFamily: fonts.medium, fontSize: 12.5, color: "#8195AF" },
  title: { fontFamily: fonts.display, fontSize: 22, letterSpacing: -0.4, color: colors.textStrong },
  cardTitle: { fontFamily: fonts.display, fontSize: 20, letterSpacing: -0.4, color: colors.textStrong },
  body: { fontFamily: fonts.body, fontSize: 14, color: colors.text },
  bodyStrong: { fontFamily: fonts.semibold, fontSize: 14, color: colors.text },
  caption: { fontFamily: fonts.body, fontSize: 12.5, color: colors.textMuted },
  micro: { fontFamily: fonts.medium, fontSize: 11, color: colors.textFaint },
  big: { fontFamily: fonts.display, fontSize: 48, letterSpacing: -2, lineHeight: 50, color: colors.textStrong },
} as const;
