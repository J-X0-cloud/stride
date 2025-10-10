import { customStack } from "@/lib/data/plans";
import { ButtonLink } from "@/components/ui/Button";
import { DistanceBadge } from "@/components/ui/DistanceBadge";

export function CustomPlanCard() {
  return (
    <div className="custom dark">
      <div className="stack">
        {customStack.map((item) => (
          <DistanceBadge key={item.badge.label} badge={item.badge} style={item.style} />
        ))}
      </div>
      <div>
        <span className="eyebrow">Custom plan</span>
        <h3 className="h-gap">Odd distance? Fixed date? Build your own block.</h3>
        <p>
          Choose any distance from 3 miles to 50K, any length from 6 to 26 weeks, and the days you can train. Stride
          periodizes the block and adapts it the same way as every other plan.
        </p>
        <ButtonLink href="/plans#custom">Build a custom plan</ButtonLink>
      </div>
    </div>
  );
}
