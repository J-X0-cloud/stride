import type { Feature } from "@/types/content";
import { Icon } from "./Icon";

export function FeatureList({ items }: { items: Feature[] }) {
  return (
    <div className="feats">
      {items.map((item) => (
        <div className="feat" key={item.title}>
          <span className="ic">
            <Icon name={item.icon} />
          </span>
          <div>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
