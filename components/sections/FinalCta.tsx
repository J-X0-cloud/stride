import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";

interface FinalCtaProps {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  note?: string;
  /** Phone mockups shown beside the copy. */
  stage: ReactNode;
  stageFirst?: boolean;
  flat?: boolean;
}

export function FinalCta({ eyebrow, title, lead, primary, secondary, note, stage, stageFirst = false, flat = false }: FinalCtaProps) {
  const copy = (
    <div>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p className="lead">{lead}</p>
      <div className="cta-row">
        <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
        <ButtonLink href={secondary.href} variant="ghost">
          {secondary.label}
        </ButtonLink>
      </div>
      {note ? <p className="note">{note}</p> : null}
    </div>
  );
  const phones = <div className="stage dk">{stage}</div>;
  return (
    <section className={cn("final dark", flat && "flat")}>
      <div className="wrap final-grid">
        {stageFirst ? phones : copy}
        {stageFirst ? copy : phones}
      </div>
    </section>
  );
}
