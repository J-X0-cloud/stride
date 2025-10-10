import { CustomPlanCard } from "@/components/plans/CustomPlanCard";
import { PlanPicker } from "@/components/plans/PlanPicker";
import { SectionHead } from "@/components/ui/SectionHead";

export function PlansSection() {
  return (
    <section className="sec" id="plans">
      <div className="wrap">
        <SectionHead
          centered
          eyebrow="Training plans"
          title={
            <>
              Pick a distance. <span className="hl">We&rsquo;ll build the rest.</span>
            </>
          }
          lead="Every plan is tailored to your level and schedule, from a first 5K to a sub-three marathon block."
        />
        <PlanPicker />
        <CustomPlanCard />
      </div>
    </section>
  );
}
