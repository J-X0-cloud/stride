import { ButtonLink } from "@/components/ui/Button";
import { Lanes } from "@/components/ui/Lanes";
import { LiveRunScreen, PlanScreen, RacePrepScreen, TodayScreen, ZonesScreen } from "@/components/screens";

export function HomeHero() {
  return (
    <section className="hero dark">
      <Lanes double />
      <div className="wrap hero-copy">
        <span className="pill">
          <b>New</b> Race-day pacing plans for every course
        </span>
        <h1>
          Training that adapts to <span className="hl">every&nbsp;run.</span>
        </h1>
        <p className="lead">
          Stride builds a running plan around your goal, your schedule and your current fitness, then rewrites it after
          every workout so you arrive at the start line ready, not wrecked.
        </p>
        <div className="cta-row centered">
          <ButtonLink href="/pricing" arrow>
            Start your free week
          </ButtonLink>
          <ButtonLink href="/plans" variant="ghost">
            Browse plans
          </ButtonLink>
        </div>
        <p className="note">7 days free &middot; Cancel anytime &middot; iOS &amp; Android</p>
      </div>
      <div className="phones">
        <ZonesScreen />
        <PlanScreen />
        <TodayScreen large />
        <LiveRunScreen />
        <RacePrepScreen />
      </div>
      <div className="hero-cut" />
    </section>
  );
}
