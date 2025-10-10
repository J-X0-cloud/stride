import { runner, timeInZone, zoneUpdate } from "@/lib/data/app-screens";
import { formatZoneRange, parseDuration, ZONES, zonesFrom5k } from "@/lib/pace";
import { MiniCard } from "@/components/phone/MiniCard";
import { Phone } from "@/components/phone/Phone";
import { ScreenHeader } from "@/components/phone/ScreenHeader";
import { TabBar } from "@/components/phone/TabBar";

export function ZonesScreen() {
  const zones = zonesFrom5k(parseDuration(runner.recent5k));
  return (
    <Phone>
      <ScreenHeader kicker={`From your ${runner.recent5k} 5K`} title="Pace zones" />
      <div className="px s-note">Time in zone, last 4 weeks</div>
      <div className="px zones">
        {zones.map((zone, i) => (
          <div className="zone" key={zone.id}>
            <div className="row">
              <b>
                {ZONES[i]?.label} {zone.name}
              </b>
              <em>{formatZoneRange(zone)}</em>
            </div>
            <div className="zb">
              <i style={{ width: `${timeInZone[zone.id]}%`, background: `var(--${zone.id})` }} />
            </div>
          </div>
        ))}
      </div>
      <MiniCard icon="refresh" tone="volt" title={zoneUpdate.title} detail={zoneUpdate.detail} spaced />
      <TabBar active="progress" />
    </Phone>
  );
}
