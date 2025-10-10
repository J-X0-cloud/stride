import { coaches } from "@/lib/data/how-it-works";
import { cssVars } from "@/lib/css-vars";
import { SectionHead } from "@/components/ui/SectionHead";

export function Coaches() {
  return (
    <section className="sec" id="coaches">
      <div className="wrap">
        <SectionHead
          centered
          eyebrow="Coaching team"
          title="Designed by coaches, not just code"
          lead="Every session type, progression rule and taper in Stride was written and reviewed by certified running coaches."
        />
        <div className="coaches">
          {coaches.map((coach) => (
            <div className="coach" key={coach.name}>
              <div className="top">
                <span className="mono" style={cssVars({ "--c1": coach.gradient[0], "--c2": coach.gradient[1] })}>
                  {coach.initials}
                </span>
                <div>
                  <span className="role">{coach.role}</span>
                  <h4>{coach.name}</h4>
                </div>
              </div>
              <p>{coach.bio}</p>
              <ul>
                {coach.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
