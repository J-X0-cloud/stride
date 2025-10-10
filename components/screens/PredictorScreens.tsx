import { predictorFitness, predictorGoal, predictorResult, runner } from "@/lib/data/app-screens";
import { parseDuration, predictRace } from "@/lib/pace";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Phone } from "@/components/phone/Phone";
import { ScreenHeader } from "@/components/phone/ScreenHeader";

function Question({ children }: { children: string }) {
  return (
    <div className="q">
      <i />
      {children}
    </div>
  );
}

function Options({ options, selected }: { options: readonly string[]; selected: string }) {
  return (
    <div className="opts">
      {options.map((option) => (
        <span key={option} className={cn(option === selected && "sel")}>
          {option}
        </span>
      ))}
    </div>
  );
}

export function PredictorGoalScreen() {
  return (
    <Phone>
      <ScreenHeader kicker="Step 1 of 3" title="Tell us about you" avatar={false} />
      {predictorGoal.map((q) => (
        <div className="card" key={q.question}>
          <Question>{q.question}</Question>
          <Options options={q.options} selected={q.selected} />
        </div>
      ))}
      <div className="px cta-foot">
        <div className="sbtn">Continue</div>
      </div>
    </Phone>
  );
}

export function PredictorFitnessScreen() {
  const { recent5k, daysOptions, days, lengths, length } = predictorFitness;
  const [first, second, third] = recent5k;
  return (
    <Phone>
      <ScreenHeader kicker="Step 2 of 3" title="Your current fitness" avatar={false} />
      <div className="card">
        <Question>Most recent 5K time</Question>
        <div className="inputs">
          <span>{first}</span>:<span>{second}</span>:<span>{third}</span>
        </div>
      </div>
      <div className="card">
        <Question>Days a week you can run</Question>
        <div className="slider">
          <i />
        </div>
        <div className="ticks">
          {daysOptions.map((d) => (
            <span key={d} className={cn(d === days && "on")}>
              {d}
            </span>
          ))}
        </div>
      </div>
      <div className="card">
        <Question>Plan length</Question>
        <Options options={lengths} selected={length} />
      </div>
      <div className="px cta-foot">
        <div className="sbtn">Predict my time</div>
      </div>
    </Phone>
  );
}

export function PredictorResultScreen() {
  const prediction = predictRace({
    fiveKSeconds: parseDuration(runner.recent5k),
    race: "half",
    daysPerWeek: predictorFitness.days,
    weeks: 12,
  });
  return (
    <Phone>
      <div className="result">
        <div className="ring">
          <span>
            <Icon name="flag" color="#D4FF3F" />
          </span>
        </div>
        <div className="result-label">{predictorResult.label}</div>
        <div className="big">{prediction.label}</div>
        <div className="result-note">{predictorResult.note}</div>
        <div className="sbtn">Build my plan</div>
      </div>
    </Phone>
  );
}
