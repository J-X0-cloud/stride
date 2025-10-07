import type { ReactNode } from "react";
import type { FaqItem } from "@/types/content";

interface FaqProps {
  id?: string;
  eyebrow: string;
  title: string;
  note: ReactNode;
  items: FaqItem[];
}

export function Faq({ id, eyebrow, title, note, items }: FaqProps) {
  return (
    <section className="sec" id={id}>
      <div className="wrap faq">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-gap">{title}</h2>
          <p className="lead lead-gap">{note}</p>
        </div>
        <div>
          {items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
