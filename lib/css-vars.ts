import type { CSSProperties } from "react";

/** Builds an inline style object from CSS custom properties, e.g. `{ "--c1": "#43D7FF" }`. */
export function cssVars(vars: Record<`--${string}`, string | number>): CSSProperties {
  return vars as CSSProperties;
}

/** CSS colour expression for a session tone, backed by the zone custom properties. */
export function toneColor(tone: string): string {
  switch (tone) {
    case "rest":
      return "#3A5277";
    case "strength":
      return "var(--blue)";
    case "volt":
      return "var(--volt)";
    default:
      return `var(--${tone})`;
  }
}
