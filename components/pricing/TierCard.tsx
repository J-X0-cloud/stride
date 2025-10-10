import { cn } from "@/lib/cn";
import type { Tier } from "@/types/content";
import { ButtonLink } from "@/components/ui/Button";

export function TierCard({ tier }: { tier: Tier }) {
  return (
    <div className={cn("tier", tier.featured && "best")}>
      {tier.tag ? <span className="tag">{tier.tag}</span> : null}
      <h3>{tier.name}</h3>
      <p className="sub">{tier.subtitle}</p>
      <div className="amt">
        {tier.amount}
        <small>{tier.unit}</small>
      </div>
      <p className="per">{tier.billing}</p>
      <ul>
        {tier.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <ButtonLink href={tier.cta.href} variant={tier.featured ? "volt" : "line"}>
        {tier.cta.label}
      </ButtonLink>
    </div>
  );
}
