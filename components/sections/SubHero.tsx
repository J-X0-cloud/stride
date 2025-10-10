import type { ReactNode } from "react";
import { Lanes } from "@/components/ui/Lanes";
import { ButtonLink } from "@/components/ui/Button";

interface SubHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  stage: ReactNode;
}

export function SubHero({ eyebrow, title, lead, primary, secondary, stage }: SubHeroProps) {
  return (
    <section className="phero dark">
      <Lanes />
      <div className="wrap phero-grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
          <div className="cta-row">
            <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
            <ButtonLink href={secondary.href} variant="ghost">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
        <div className="stage">{stage}</div>
      </div>
    </section>
  );
}
