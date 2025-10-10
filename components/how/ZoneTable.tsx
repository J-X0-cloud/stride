import { formatZoneRange, parseDuration, ZONES, zonesFrom5k } from "@/lib/pace";
import { cssVars } from "@/lib/css-vars";

/** Zone reference table computed from an example 5K result. */
export function ZoneTable({ fiveK }: { fiveK: string }) {
  const ranges = zonesFrom5k(parseDuration(fiveK));
  return (
    <div>
      <div className="ztable" role="table" aria-label="Pace zones">
        <div className="zrow h" role="row">
          <span role="columnheader">Zone</span>
          <span role="columnheader">Purpose</span>
          <span role="columnheader">Example pace</span>
          <span role="columnheader">How it feels</span>
        </div>
        {ZONES.map((zone, i) => {
          const range = ranges[i];
          return (
            <div className="zrow" role="row" key={zone.id}>
              <span className="z" role="cell" style={cssVars({ "--c": `var(--${zone.id})` })}>
                {zone.label}
              </span>
              <b role="cell">{zone.name}</b>
              <em role="cell">{range ? formatZoneRange(range) : null}</em>
              <span role="cell">{zone.feel}</span>
            </div>
          );
        })}
      </div>
      <p className="note zone-note">Example zones for a runner with a recent {fiveK} 5K.</p>
    </div>
  );
}
