import type { Metadata } from "next";
import { AdaptiveLoop } from "@/components/how/AdaptiveLoop";
import { Coaches } from "@/components/how/Coaches";
import { RacePrepSection } from "@/components/how/RacePrepSection";
import { ZonesSection } from "@/components/how/ZonesSection";
import { Band } from "@/components/sections/Band";
import { SubHero } from "@/components/sections/SubHero";
import { LiveRunScreen, TodayScreen } from "@/components/screens";
import { PerkGrid } from "@/components/ui/PerkGrid";
import { SectionHead } from "@/components/ui/SectionHead";
import { beyondTheRun } from "@/lib/data/how-it-works";

export const metadata: Metadata = {
  title: "How it works | Stride adaptive running coach",
  description:
    "See how Stride's adaptive engine turns every run into a smarter plan: personal pace zones, watch sync, strength sessions and race-day strategy.",
};

export default function HowItWorksPage() {
  return (
    <>
      <SubHero
        eyebrow="How it works"
        title={
          <>
            The coach that <span className="hl">learns from every run.</span>
          </>
        }
        lead="Stride reads each workout you finish, compares it with what was planned, and quietly adjusts what comes next. Here’s what’s happening behind the scenes."
        primary={{ label: "Try it free for 7 days", href: "/pricing" }}
        secondary={{ label: "Pace zones", href: "#zones" }}
        stage={
          <>
            <TodayScreen />
            <LiveRunScreen />
          </>
        }
      />
      <AdaptiveLoop />
      <ZonesSection />
      <RacePrepSection />
      <section className="sec bg-mist">
        <div className="wrap">
          <SectionHead centered eyebrow="Beyond the run" title="Everything a good coach would cover" />
          <PerkGrid items={beyondTheRun} />
        </div>
      </section>
      <Coaches />
      <Band
        title="See your plan adapt after your very first run."
        price={
          <>
            Full access, every feature, <b>free for 7 days</b>.
          </>
        }
        cta={{ label: "Start your free week", href: "/pricing" }}
      />
    </>
  );
}
