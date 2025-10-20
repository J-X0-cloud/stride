export type ZoneId = "z1" | "z2" | "z3" | "z4" | "z5";

export type SessionTone = ZoneId | "rest" | "volt";

export interface ZoneDefinition {
  id: ZoneId;
  label: string;
  name: string;
  feel: string;
  /** Multipliers of current 5K pace; `max` omitted for open-ended Z1. */
  factor: { min: number; max?: number };
}

export interface ZoneRange {
  id: ZoneId;
  label: string;
  name: string;
  /** Seconds per mile at the fast end. */
  fastest: number;
  /** Seconds per mile at the slow end; `null` means "and slower". */
  slowest: number | null;
}

export interface WeekDay {
  letter: string;
  date: number;
  state: "done" | "now" | "upcoming";
}

export interface WorkoutBlock {
  /** Relative effort, 0–100, drawn as bar height. */
  height: number;
  tone: ZoneId;
}

export interface Workout {
  id: string;
  zone: ZoneId;
  chip: string;
  title: string;
  detail: string;
  distanceMi: number;
  durationMin: number;
  targetPace: string;
  blocks: WorkoutBlock[];
}

export interface UpcomingSession {
  id: string;
  icon: "runner" | "dumbbell";
  tone: SessionTone;
  title: string;
  detail: string;
}

export interface PlanDay {
  weekday: string;
  date: number;
  title: string;
  amount: string;
  tone: SessionTone;
}

export interface TrainingBlock {
  race: string;
  week: number;
  totalWeeks: number;
  phase: "Base" | "Build" | "Peak" | "Taper";
  weeklyMiles: number;
  days: PlanDay[];
}

export interface ChecklistItem {
  id: string;
  label: string;
  done: boolean;
}

export interface RaceGoal {
  name: string;
  dateLabel: string;
  daysOut: number;
  distanceMeters: number;
  predictedSeconds: number;
  rangeSeconds: [number, number];
  /** [x, y] elevation samples in a 200×42 box, y growing downward. */
  elevation: [number, number][];
  landmarks: string[];
  checklist: ChecklistItem[];
}

export interface RunSample {
  distanceMi: number;
  elapsedSec: number;
  heartRate: number;
  elevationGainFt: number;
  currentPaceSec: number;
}
