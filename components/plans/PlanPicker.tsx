"use client";

import { useMemo, useState } from "react";
import { planCategories, trainingPlans } from "@/lib/data/plans";
import type { PlanCategory } from "@/types/training";
import { PlanCard } from "./PlanCard";

const CARDS_PER_TAB = 4;

/** Home-page plan browser: a category tab row over four plan cards. */
export function PlanPicker() {
  const [category, setCategory] = useState<PlanCategory>("popular");
  const plans = useMemo(
    () => trainingPlans.filter((p) => p.categories.includes(category)).slice(0, CARDS_PER_TAB),
    [category],
  );

  return (
    <>
      <div className="center">
        <div className="tabs" role="tablist" aria-label="Plan categories">
          {planCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={c.id === category}
              aria-controls="plan-grid"
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
      <div className="plans" id="plan-grid" role="tabpanel">
        {plans.map((plan) => (
          <PlanCard key={plan.slug} plan={plan} />
        ))}
      </div>
    </>
  );
}
