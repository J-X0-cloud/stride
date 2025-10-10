import { planView } from "@/lib/data/app-screens";
import { toneColor } from "@/lib/css-vars";
import { Phone } from "@/components/phone/Phone";
import { ScreenHeader } from "@/components/phone/ScreenHeader";
import { TabBar } from "@/components/phone/TabBar";

export function PlanScreen() {
  return (
    <Phone>
      <ScreenHeader kicker={planView.race} title="Your plan" />
      <div className="px plan-progress">
        <div className="row">
          <span>{planView.phaseLabel}</span>
          <span>{planView.weeklyMiles}</span>
        </div>
        <div className="prog">
          <i style={{ width: `${planView.progress}%` }} />
        </div>
      </div>
      <div className="px cal">
        {planView.days.map((day) => (
          <div className="d" key={day.weekday}>
            <span className="bar" style={{ background: toneColor(day.tone) }} />
            <div>
              <small>
                {day.weekday} {day.date}
              </small>
              <b>{day.title}</b>
            </div>
            <em>{day.amount}</em>
          </div>
        ))}
      </div>
      <TabBar active="plan" />
    </Phone>
  );
}
