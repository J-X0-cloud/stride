import { whyFeatures } from "@/lib/data/home";
import { FeatureList } from "@/components/ui/FeatureList";
import { LiveRunScreen, TodayScreen } from "@/components/screens";

export function WhySwitch() {
  return (
    <section className="sec">
      <div className="wrap split">
        <div className="stage">
          <LiveRunScreen />
          <TodayScreen />
        </div>
        <div>
          <span className="eyebrow">Why runners switch</span>
          <h2 className="h-gap">A coach in your pocket that actually listens.</h2>
          <FeatureList items={whyFeatures} />
        </div>
      </div>
    </section>
  );
}
