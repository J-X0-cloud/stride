import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  centered?: boolean;
}

export function SectionHead({ eyebrow, title, lead, centered = false }: SectionHeadProps) {
  return (
    <div className={cn("sec-head", centered && "center")}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}
