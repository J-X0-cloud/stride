export type ZoneId = "z1" | "z2" | "z3" | "z4" | "z5";

/** Colour keys used for workout bars and legends. `rest` and `strength` sit outside the pace zones. */
export type SessionTone = ZoneId | "rest" | "strength" | "volt";

export interface ZoneDefinition {
  id: ZoneId;
  label: string;
  name: string;
  feel: string;
  /** Pace multipliers relative to current 5K pace. `max` is omitted for open-ended Z1. */
  factor: { min: number; max?: number };
}

export interface ZoneRange {
  id: ZoneId;
  name: string;
  /** Seconds per mile, fastest end. */
  fastest: number;
  /** Seconds per mile, slowest end; `null` means "and slower". */
  slowest: number | null;
}

export interface CalendarDay {
  weekday: string;
  date: number;
  title: string;
  amount: string;
  tone: SessionTone;
}

export interface SampleDay {
  weekday: string;
  title: string;
  detail: string;
  tone: SessionTone;
  rest?: boolean;
}

export type PlanCategory = "popular" | "get-started" | "trail-ultra" | "return";

export interface DistanceBadge {
  label: string;
  tag: string;
  from: string;
  to: string;
}

export interface TrainingPlan {
  slug: string;
  name: string;
  weeks: string;
  runsPerWeek: string;
  badge: DistanceBadge;
  highlights: string[];
  categories: PlanCategory[];
}

export interface Phase {
  weeks: string;
  name: string;
  body: string;
  volume: { height: number; key?: boolean }[];
}

export interface WorkoutBlock {
  height: number;
  tone: ZoneId;
}
