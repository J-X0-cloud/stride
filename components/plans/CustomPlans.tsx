import { customFeatures } from "@/lib/data/plans";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureList } from "@/components/ui/FeatureList";
import { PredictorFitnessScreen, PredictorGoalScreen } from "@/components/screens";

export function CustomPlans() {
  return (
    <section className="sec dark" id="custom">
      <div className="wrap split">
        <div>
          <span className="eyebrow">Custom plans</span>
          <h2 className="h-gap">Your race, your rules.</h2>
          <p className="lead lead-gap">
            A 15K on a Tuesday night? A trail 30K in eleven weeks? Set the distance, date and training days and Stride
            periodizes the whole block for you.
          </p>
          <FeatureList items={customFeatures} />
          <div className="cta-row spaced">
            <ButtonLink href="/pricing">Build my custom plan</ButtonLink>
          </div>
        </div>
        <div className="stage dk">
          <PredictorGoalScreen />
          <PredictorFitnessScreen />
        </div>
      </div>
    </section>
  );
}
