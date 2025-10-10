import { trainingPlans } from "@/lib/data/plans";
import { SectionHead } from "@/components/ui/SectionHead";
import { PlanCard } from "./PlanCard";

export function DistanceCatalog() {
  return (
    <section className="sec" id="distances">
      <div className="wrap">
        <SectionHead
          centered
          eyebrow="Choose your distance"
          title="Eight plans. Endless variations."
          lead="Each plan scales to beginner, intermediate or advanced, and to anywhere from two to six running days."
        />
        <div className="plans">
          {trainingPlans.map((plan) => (
            <PlanCard key={plan.slug} plan={plan} variant="detail" />
          ))}
        </div>
      </div>
    </section>
  );
}
