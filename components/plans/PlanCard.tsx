import Link from "next/link";
import type { TrainingPlan } from "@/types/training";
import { DistanceBadge } from "@/components/ui/DistanceBadge";

interface PlanCardProps {
  plan: TrainingPlan;
  /** `summary` is the home-page card; `detail` adds highlights and a start CTA. */
  variant?: "summary" | "detail";
}

export function PlanCard({ plan, variant = "summary" }: PlanCardProps) {
  const detail = variant === "detail";
  return (
    <Link href={detail ? "/pricing" : "/plans#distances"} className="plan">
      <h3>{plan.name}</h3>
      <p className="meta">{detail ? plan.weeks : `${plan.weeks} · ${plan.runsPerWeek}`}</p>
      <DistanceBadge badge={plan.badge} />
      {detail ? (
        <ul>
          {plan.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}
      <span className="btn btn-ink">{detail ? "Start this plan" : "View plan"}</span>
    </Link>
  );
}
