import { adaptiveLoop } from "@/lib/data/how-it-works";
import { Icon } from "@/components/ui/Icon";
import { SectionHead } from "@/components/ui/SectionHead";

export function AdaptiveLoop() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead
          centered
          eyebrow="The adaptive loop"
          title="Plan. Run. Learn. Adjust."
          lead="A loop that runs every time you finish a workout, so your plan never drifts away from the runner you are today."
        />
        <div className="loop">
          {adaptiveLoop.map((step) => (
            <div className="lp" key={step.title}>
              <div className="dot">
                <Icon name={step.icon} />
              </div>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
