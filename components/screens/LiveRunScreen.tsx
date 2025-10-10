import { liveRun } from "@/lib/data/app-screens";
import { Phone } from "@/components/phone/Phone";
import { RouteMap } from "@/components/phone/RouteMap";

export function LiveRunScreen() {
  return (
    <Phone>
      <RouteMap />
      <div className="sheet">
        <div className="row">
          <span className="chip">{liveRun.interval}</span>
          <span className="sheet-meta">{liveRun.remaining}</span>
        </div>
        <div className="pace-label">Current pace</div>
        <div className="big">
          {liveRun.pace}
          <span className="unit"> /mi</span>
        </div>
        <div className="metric-grid">
          {liveRun.metrics.map((m) => (
            <div key={m.label}>
              <b>{m.value}</b>
              {m.label}
            </div>
          ))}
        </div>
        <div className="zone-scale">
          <i style={{ left: `${liveRun.zonePosition}%` }} />
        </div>
        <div className="sbtn white">&#10074;&#10074;&nbsp; Pause</div>
      </div>
    </Phone>
  );
}
