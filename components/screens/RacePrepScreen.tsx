import { racePrep } from "@/lib/data/app-screens";
import { cn } from "@/lib/cn";
import { ElevationProfile } from "@/components/phone/ElevationProfile";
import { Phone } from "@/components/phone/Phone";
import { ScreenHeader } from "@/components/phone/ScreenHeader";
import { TabBar } from "@/components/phone/TabBar";

export function RacePrepScreen() {
  return (
    <Phone>
      <ScreenHeader kicker={racePrep.kicker} title="Race prep" />
      <div className="card">
        <span className="chip v">Predicted finish</span>
        <div className="big finish">{racePrep.predicted}</div>
        <p>{racePrep.range}</p>
        <ElevationProfile points={racePrep.elevation} />
        <div className="row elev-axis">
          {racePrep.elevationAxis.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
      <div className="card">
        <b className="card-title">Taper checklist</b>
        <div className="check">
          {racePrep.checklist.map((item) => (
            <div key={item.label} className={cn(item.done && "ok")}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <TabBar active="plan" />
    </Phone>
  );
}
