import type { Metadata } from "next";
import { CompareTable } from "@/components/pricing/CompareTable";
import { TierCard } from "@/components/pricing/TierCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { RacePrepScreen, TodayScreen } from "@/components/screens";
import { Faq } from "@/components/ui/Faq";
import { Lanes } from "@/components/ui/Lanes";
import { PerkGrid } from "@/components/ui/PerkGrid";
import { billingFaq } from "@/lib/data/faq";
import { pricingPerks, tiers } from "@/lib/data/pricing";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Pricing | Stride running coach",
  description:
    "Stride pricing: start with a free week, then $14.99 a month or $99.99 a year for every adaptive plan, pace zone and race-prep feature.",
};

export default function PricingPage() {
  return (
    <>
      <section className="phero dark pricing-hero">
        <Lanes />
        <div className="wrap center">
          <span className="eyebrow">Pricing</span>
          <h1>
            One app. Every plan.
            <br />
            <span className="hl">First week free.</span>
          </h1>
          <p className="lead">
            Try everything for seven days. Keep going for less than the cost of a single pair of running socks a month.
          </p>
        </div>
      </section>

      <section className="tiers-sec">
        <div className="wrap">
          <div className="tiers">
            {tiers.map((tier) => (
              <TierCard key={tier.id} tier={tier} />
            ))}
          </div>
          <p className="note center tiers-note">
            Prices in USD. Taxes may apply. Cancel anytime from the app or your account settings.
          </p>
        </div>
      </section>

      <CompareTable />

      <section className="sec-sm bg-mist">
        <div className="wrap">
          <PerkGrid items={pricingPerks} />
        </div>
      </section>

      <Faq
        id="faq"
        eyebrow="Billing FAQ"
        title="Good questions, straight answers"
        note={
          <>
            Anything else? Write to{" "}
            <a href={`mailto:${site.email}`} className="hl">
              {site.email}
            </a>
            .
          </>
        }
        items={billingFaq}
      />

      <FinalCta
        flat
        eyebrow="Ready when you are"
        title={
          <>
            Your first workout is <span className="hl">already waiting.</span>
          </>
        }
        lead="Download Stride, set your goal and get a plan built for you in under two minutes."
        primary={{ label: "Start your free week", href: `mailto:${site.email}` }}
        secondary={{ label: "Browse plans", href: "/plans" }}
        stage={
          <>
            <TodayScreen />
            <RacePrepScreen />
          </>
        }
      />
    </>
  );
}
