import { predictorSteps } from "@/lib/data/home";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { PredictorFitnessScreen, PredictorGoalScreen, PredictorResultScreen } from "@/components/screens";

const SCREENS = [PredictorGoalScreen, PredictorFitnessScreen, PredictorResultScreen];

export function PredictorSection() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead
          centered
          eyebrow="Race-time predictor"
          title={<>What could you run in 12&nbsp;weeks?</>}
          lead="Answer three quick questions and Stride estimates your finish time before you commit to a plan. No account needed."
        />
        <div className="trio">
          {predictorSteps.map((step, i) => {
            const Screen = SCREENS[i] ?? PredictorGoalScreen;
            return (
              <figure key={step.title}>
                <Screen />
                <figcaption>
                  <span className="num">{i + 1}</span>
                  <b>{step.title}</b>
                  {step.body}
                </figcaption>
              </figure>
            );
          })}
        </div>
        <div className="center cta-gap-lg">
          <ButtonLink href="/plans" variant="blue">
            Predict my race time
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
