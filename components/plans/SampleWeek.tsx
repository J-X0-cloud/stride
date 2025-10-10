import { sampleWeek, weekLegend } from "@/lib/data/plans";
import { cssVars, toneColor } from "@/lib/css-vars";
import { cn } from "@/lib/cn";
import { SectionHead } from "@/components/ui/SectionHead";

export function SampleWeek() {
  return (
    <section className="sec bg-mist">
      <div className="wrap">
        <SectionHead
          eyebrow="Inside a plan"
          title="A sample week from a half-marathon block"
          lead="Week 6 of 16 for a runner aiming at 1:45. Hard days are separated, the long run anchors the weekend, and strength sits where it won’t hurt your legs for key sessions."
        />
        <div className="week">
          {sampleWeek.map((day) => (
            <div className={cn("day", day.rest && "rest")} key={day.weekday}>
              <small>{day.weekday}</small>
              <b>{day.title}</b>
              <span>{day.detail}</span>
              <i style={{ background: day.rest ? "#B7C3D3" : toneColor(day.tone) }} />
            </div>
          ))}
        </div>
        <div className="legend">
          {weekLegend.map((item) => (
            <span key={item.label} style={cssVars({ "--c": toneColor(item.tone) })}>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
