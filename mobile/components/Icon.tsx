import type { ReactElement } from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

export type IconName = "home" | "calendar" | "bars" | "chat" | "runner" | "dumbbell" | "refresh" | "flag" | "pause" | "play" | "close";

function glyph(name: IconName, color: string): ReactElement {
  switch (name) {
    case "home":
      return <Path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1z" />;
    case "calendar":
      return (
        <>
          <Rect x="3" y="4.5" width="18" height="16.5" rx="3" />
          <Path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
        </>
      );
    case "bars":
      return <Path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />;
    case "chat":
      return <Path d="M21 12a8 8 0 01-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1121 12z" />;
    case "runner":
      return (
        <>
          <Circle cx="14.5" cy="4.5" r="2" />
          <Path d="M8 21l3-6 3 2 1 5M6 11l3-3 4 1 2 4 3 1M11 15l-1-5" />
        </>
      );
    case "dumbbell":
      return <Path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />;
    case "refresh":
      return <Path d="M20 11a8 8 0 00-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0014.3 4.9L20 16M20 20v-4h-4" />;
    case "flag":
      return <Path d="M5 21V4M5 4h11l-2 4 2 4H5" />;
    case "pause":
      return <Path d="M9 5v14M15 5v14" />;
    case "play":
      return <Path d="M7 4.5v15l12-7.5z" fill={color} />;
    case "close":
      return <Path d="M6 6l12 12M18 6L6 18" />;
  }
}

export function Icon({ name, color, size = 20, strokeWidth = 2 }: { name: IconName; color: string; size?: number; strokeWidth?: number }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {glyph(name, color)}
    </Svg>
  );
}
