import type { CSSProperties } from "react";
import { cssVars } from "@/lib/css-vars";
import type { DistanceBadge as Badge } from "@/types/training";

export function DistanceBadge({ badge, style }: { badge: Badge; style?: CSSProperties }) {
  return (
    <div className="badge" style={{ ...cssVars({ "--c1": badge.from, "--c2": badge.to }), ...style }}>
      <span>{badge.label}</span>
      <small>{badge.tag}</small>
    </div>
  );
}
