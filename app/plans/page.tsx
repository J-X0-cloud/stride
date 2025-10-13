import type { Metadata } from "next";
import { CustomPlans } from "@/components/plans/CustomPlans";
import { DistanceCatalog } from "@/components/plans/DistanceCatalog";
import { Phases } from "@/components/plans/Phases";
import { SampleWeek } from "@/components/plans/SampleWeek";
import { Band } from "@/components/sections/Band";
import { SubHero } from "@/components/sections/SubHero";
import { PlanScreen, PredictorResultScreen } from "@/components/screens";

export const metadata: Metadata = {
  title: "Training plans | Stride running coach",
  description:
    "Adaptive 5K, 10K, half marathon, marathon and ultra training plans from Stride, built around your fitness and schedule and adjusted after every run.",
};

export default function PlansPage() {
  return (
    <>
      <SubHero
        eyebrow="Training plans"
        title={
          <>
            A plan for every <span className="hl">start line.</span>
          </>
        }
        lead="Whether it’s your first 5K or your fifth marathon, every Stride plan is built from your current fitness and the days you can actually train — then adapted week by week."
        primary={{ label: "Explore plans", href: "#distances" }}
        secondary={{ label: "Build a custom plan", href: "#custom" }}
        stage={
          <>
            <PlanScreen />
            <PredictorResultScreen />
          </>
        }
      />
      <DistanceCatalog />
      <SampleWeek />
      <Phases />
      <CustomPlans />
      <Band
        title="Not sure which plan fits?"
        price="Take the two-minute race-time predictor and we’ll recommend a starting point."
        cta={{ label: "Find my plan", href: "/pricing" }}
        note="Free for 7 days. Switch plans anytime."
      />
    </>
  );
}
