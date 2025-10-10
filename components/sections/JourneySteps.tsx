import { journeySteps } from "@/lib/data/home";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHead } from "@/components/ui/SectionHead";

export function JourneySteps() {
  return (
    <section className="sec tight-top">
      <div className="wrap">
        <SectionHead
          centered
          eyebrow="How it works"
          title="From download to start line"
          lead="Simple enough for a first 5K, detailed enough for a marathon PR."
        />
        <div className="steps">
          {journeySteps.map((step) => (
            <div className="step" key={step.title}>
              <span className="ic">
                <Icon name={step.icon} />
              </span>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
        <div className="center cta-gap">
          <ButtonLink href="/how-it-works" variant="line" arrow>
            See how the engine works
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
