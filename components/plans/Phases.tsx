import { phases } from "@/lib/data/plans";
import { cn } from "@/lib/cn";
import { SectionHead } from "@/components/ui/SectionHead";

export function Phases() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead
          eyebrow="Periodization"
          title="Four phases, one clear build"
          lead="Every plan moves through the same proven arc. Stride sizes each phase to your timeline and shifts the boundaries if life gets in the way."
        />
        <div className="phases">
          {phases.map((phase) => (
            <div className="phase" key={phase.name}>
              <span className="wks">{phase.weeks}</span>
              <h4>{phase.name}</h4>
              <p>{phase.body}</p>
              <div className="vol" aria-hidden="true">
                {phase.volume.map((week, i) => (
                  <i key={i} className={cn(week.key && "hi")} style={{ height: `${week.height}%` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
