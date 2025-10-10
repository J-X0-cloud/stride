import { tempoStructure, todayView } from "@/lib/data/app-screens";
import { cn } from "@/lib/cn";
import { MiniCard } from "@/components/phone/MiniCard";
import { Phone } from "@/components/phone/Phone";
import { ScreenHeader } from "@/components/phone/ScreenHeader";
import { TabBar } from "@/components/phone/TabBar";
import { WorkoutStructure } from "@/components/phone/WorkoutStructure";

export function TodayScreen({ large = false }: { large?: boolean }) {
  const { workout } = todayView;
  return (
    <Phone large={large}>
      <ScreenHeader kicker={todayView.kicker} title={todayView.greeting} />
      <div className="wk">
        {todayView.week.map((day) => (
          <span key={`${day.letter}${day.date}`} className={cn(day.state === "done" && "done", day.state === "now" && "now")}>
            {day.letter}
            <b>{day.date}</b>
          </span>
        ))}
      </div>
      <div className="card">
        <span className="chip">{workout.chip}</span>
        <h5>{workout.title}</h5>
        <p>{workout.detail}</p>
        <div className="stats">
          {workout.stats.map((stat) => (
            <div key={stat.label}>
              <b>{stat.value}</b>
              {stat.label}
            </div>
          ))}
        </div>
        <WorkoutStructure blocks={tempoStructure} />
        <div className="sbtn">&#9654;&nbsp; Start workout</div>
      </div>
      {todayView.upNext.map((item) => (
        <MiniCard key={item.title} icon={item.icon} tone={item.tone} title={item.title} detail={item.detail} />
      ))}
      <TabBar active="today" />
    </Phone>
  );
}
