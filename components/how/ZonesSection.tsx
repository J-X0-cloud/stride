import { exampleRunner5k, zoneFeatures } from "@/lib/data/how-it-works";
import { FeatureList } from "@/components/ui/FeatureList";
import { ZoneTable } from "./ZoneTable";

export function ZonesSection() {
  return (
    <section className="sec dark" id="zones">
      <div className="wrap">
        <div className="split top">
          <div>
            <span className="eyebrow">Pace zones</span>
            <h2 className="h-gap">Five zones, calculated for you.</h2>
            <p className="lead lead-gap">
              Most runners train too hard on easy days and too easy on hard days. Stride sets personal zones from your
              recent races and runs, then updates them as you get fitter.
            </p>
            <FeatureList items={zoneFeatures} />
          </div>
          <ZoneTable fiveK={exampleRunner5k} />
        </div>
      </div>
    </section>
  );
}
