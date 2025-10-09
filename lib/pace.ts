import type { ZoneDefinition, ZoneId, ZoneRange } from "@/types/training";

export const METERS_PER_MILE = 1609.344;

export const RACE_DISTANCES_M = {
  "5k": 5000,
  "10k": 10000,
  half: 21097.5,
  marathon: 42195,
} as const;

export type RaceKey = keyof typeof RACE_DISTANCES_M;

/**
 * Personal zones expressed as multiples of current 5K pace. Calibrated so a 22:40 5K
 * (7:18 /mi) lands on the zones shown in the app: Z4 7:20–7:55, Z2 8:50–9:40 and so on.
 */
export const ZONES: ZoneDefinition[] = [
  { id: "z1", label: "Z1", name: "Recovery", feel: "Very easy, full conversation", factor: { min: 1.335 } },
  { id: "z2", label: "Z2", name: "Easy", feel: "Comfortable, could talk in sentences", factor: { min: 1.21, max: 1.325 } },
  { id: "z3", label: "Z3", name: "Steady", feel: "Controlled, a few words at a time", factor: { min: 1.105, max: 1.2 } },
  { id: "z4", label: "Z4", name: "Threshold", feel: "Comfortably hard, 45–60 min effort", factor: { min: 1.005, max: 1.085 } },
  { id: "z5", label: "Z5", name: "Interval", feel: "Hard, 3–8 min repeats", factor: { min: 0.925, max: 0.995 } },
];

/** Riegel's endurance exponent. */
const FATIGUE_EXPONENT = 1.06;

const roundTo = (value: number, step: number) => Math.round(value / step) * step;

/** Parses "22:40" or "1:41:50" into seconds. */
export function parseDuration(input: string): number {
  const parts = input.trim().split(":").map(Number);
  if (parts.some((n) => !Number.isFinite(n) || n < 0)) throw new Error(`Invalid duration: ${input}`);
  return parts.reduce((total, n) => total * 60 + n, 0);
}

/** Formats seconds as m:ss, or h:mm:ss for an hour and over. */
export function formatDuration(totalSeconds: number): string {
  const s = Math.round(totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = String(s % 60).padStart(2, "0");
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${sec}` : `${m}:${sec}`;
}

/** Formats a pace in seconds per mile as "7:05". */
export function formatPace(secondsPerMile: number): string {
  return formatDuration(roundTo(secondsPerMile, 1));
}

export function pacePerMile(timeSeconds: number, distanceMeters: number): number {
  return timeSeconds / (distanceMeters / METERS_PER_MILE);
}

/** Predicts a finish time for a new distance from a recent result (Riegel). */
export function predictTime(knownSeconds: number, knownMeters: number, targetMeters: number): number {
  return knownSeconds * Math.pow(targetMeters / knownMeters, FATIGUE_EXPONENT);
}

export function zonesFrom5k(fiveKSeconds: number): ZoneRange[] {
  const base = pacePerMile(fiveKSeconds, RACE_DISTANCES_M["5k"]);
  return ZONES.map((zone) => ({
    id: zone.id,
    name: zone.name,
    fastest: roundTo(base * zone.factor.min, 5),
    slowest: zone.factor.max === undefined ? null : roundTo(base * zone.factor.max, 5),
  }));
}

export function formatZoneRange(zone: ZoneRange): string {
  if (zone.slowest === null) return `${formatPace(zone.fastest)}+ /mi`;
  const [a, b] = [zone.fastest, zone.slowest].sort((x, y) => x - y) as [number, number];
  return `${formatPace(a)}–${formatPace(b)} /mi`;
}

export function zoneById(zones: ZoneRange[], id: ZoneId): ZoneRange | undefined {
  return zones.find((z) => z.id === id);
}

export interface PredictionInput {
  fiveKSeconds: number;
  race: RaceKey;
  daysPerWeek: number;
  weeks: number;
}

export interface Prediction {
  race: RaceKey;
  weeks: number;
  /** Optimistic and conservative finish times in seconds. */
  range: [number, number];
  label: string;
}

/** Rounds race times to the minute over an hour and to 5 s below, then formats them. */
function formatFinish(seconds: number): string {
  if (seconds >= 3600) return formatDuration(roundTo(seconds, 60)).replace(/:00$/, "");
  return formatDuration(roundTo(seconds, 5));
}

/**
 * Estimates what a plan of `weeks` length could produce. Today's equivalent performance
 * (Riegel) is nudged by a small, capped training effect that scales with how often the
 * runner can train; the slow end allows for course, weather and an off day.
 */
export function predictRace({ fiveKSeconds, race, daysPerWeek, weeks }: PredictionInput): Prediction {
  const today = predictTime(fiveKSeconds, RACE_DISTANCES_M["5k"], RACE_DISTANCES_M[race]);
  const frequency = Math.min(Math.max(daysPerWeek, 2), 6) / 5;
  const gain = Math.min(0.0005 * weeks * frequency, 0.02);
  const optimistic = today * (1 - gain);
  const conservative = today * 1.035;
  return {
    race,
    weeks,
    range: [Math.round(optimistic), Math.round(conservative)],
    label: `${formatFinish(optimistic)}–${formatFinish(conservative)}`,
  };
}
