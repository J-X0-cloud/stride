import { integrations } from "@/lib/data/home";
import { Icon } from "@/components/ui/Icon";

export function IntegrationsStrip() {
  return (
    <section className="strip">
      <div className="wrap">
        <p>Plugs into the gear and apps you already train with.</p>
        <div className="devs">
          {integrations.map((item) => (
            <span className="dev" key={item.label}>
              <Icon name={item.icon} />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
