import { raceFeatures } from "@/lib/data/how-it-works";
import { FeatureList } from "@/components/ui/FeatureList";
import { RacePrepScreen, ZonesScreen } from "@/components/screens";

export function RacePrepSection() {
  return (
    <section className="sec" id="race">
      <div className="wrap split rev">
        <div>
          <span className="eyebrow">Race prep</span>
          <h2 className="h-gap">Race day, planned to the mile.</h2>
          <p className="lead lead-gap">
            Three weeks out, Stride switches to race mode: a taper tuned to your training load, a predicted finish range
            and a pacing strategy shaped by the course.
          </p>
          <FeatureList items={raceFeatures} />
        </div>
        <div className="stage">
          <RacePrepScreen />
          <ZonesScreen />
        </div>
      </div>
    </section>
  );
}
