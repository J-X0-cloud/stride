import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";

interface BandProps {
  title: string;
  price: ReactNode;
  cta: { label: string; href: string };
  note?: string;
}

export function Band({ title, price, cta, note }: BandProps) {
  return (
    <section className="band center">
      <div className="wrap">
        <h2>{title}</h2>
        <p className="price">{price}</p>
        <ButtonLink href={cta.href} variant="blue">
          {cta.label}
        </ButtonLink>
        {note ? <p className="note">{note}</p> : null}
      </div>
    </section>
  );
}
