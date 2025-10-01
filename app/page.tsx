import { Band } from "@/components/sections/Band";
import { FinalCta } from "@/components/sections/FinalCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { IntegrationsStrip } from "@/components/sections/IntegrationsStrip";
import { Journal } from "@/components/sections/Journal";
import { JourneySteps } from "@/components/sections/JourneySteps";
import { Mosaic } from "@/components/sections/Mosaic";
import { Newsletter } from "@/components/sections/Newsletter";
import { PlansSection } from "@/components/sections/PlansSection";
import { PredictorSection } from "@/components/sections/PredictorSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhySwitch } from "@/components/sections/WhySwitch";
import { RacePrepScreen, ZonesScreen } from "@/components/screens";
import { Faq } from "@/components/ui/Faq";
import { homeFaq } from "@/lib/data/faq";
import { subscription } from "@/lib/data/pricing";
import { site } from "@/lib/data/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <IntegrationsStrip />
      <PredictorSection />
      <PlansSection />
      <Band
        title="Stop guessing. Start training with a plan that knows you."
        price={
          <>
            All plans and features for <b>{subscription.monthly}</b> or <b>{subscription.annual}</b>.
          </>
        }
        cta={{ label: "Start your free week", href: "/pricing" }}
        note="No charge for 7 days. Cancel in two taps."
      />
      <WhySwitch />
      <Mosaic />
      <JourneySteps />
      <Testimonials />
      <Faq
        eyebrow="FAQ"
        title="Questions before your first run"
        note={
          <>
            Still unsure? Email{" "}
            <a href={`mailto:${site.email}`} className="hl">
              {site.email}
            </a>{" "}
            and a coach will reply.
          </>
        }
        items={homeFaq}
      />
      <Journal />
      <Newsletter />
      <FinalCta
        stageFirst
        eyebrow="Your next start line"
        title={
          <>
            Take your running to the <span className="hl">next level.</span>
          </>
        }
        lead="Personal plans, live pace guidance and a race-day strategy — all in one app that learns from every run."
        primary={{ label: "Start your free week", href: "/pricing" }}
        secondary={{ label: "How it works", href: "/how-it-works" }}
        note="Available on iOS and Android."
        stage={
          <>
            <RacePrepScreen />
            <ZonesScreen />
          </>
        }
      />
    </>
  );
}
