import type { Feature } from "@/types/content";
import { Icon } from "./Icon";

export function PerkGrid({ items }: { items: Feature[] }) {
  return (
    <div className="perks">
      {items.map((perk) => (
        <div className="perk on-mist" key={perk.title}>
          <span className="ic">
            <Icon name={perk.icon} />
          </span>
          <h4>{perk.title}</h4>
          <p>{perk.body}</p>
        </div>
      ))}
    </div>
  );
}
