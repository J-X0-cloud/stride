import type { ZoneDefinition, ZoneId, ZoneRange } from "./types";

/**
 * Pace-zone math shared by every screen. Zones are anchored to current 5K pace and
 * refreshed each Sunday from the runner's recent races and hard efforts.
 */

export const METERS_PER_MILE = 1609.344;

export const DISTANCES_M = {
  "5k": 5000,
  "10k": 10000,
  half: 21097.5,
  marathon: 42195,
} as const;

export type RaceKey = keyof typeof DISTANCES_M;

export const ZONES: ZoneDefinition[] = [
  { id: "z1", label: "Z1", name: "Recovery", feel: "Very easy, full conversation", factor: { min: 1.335 } },
  { id: "z2", label: "Z2", name: "Easy", feel: "Comfortable, could talk in sentences", factor: { min: 1.21, max: 1.325 } },
  { id: "z3", label: "Z3", name: "Steady", feel: "Controlled, a few words at a time", factor: { min: 1.105, max: 1.2 } },
  { id: "z4", label: "Z4", name: "Threshold", feel: "Comfortably hard, 45–60 min effort", factor: { min: 1.005, max: 1.085 } },
  { id: "z5", label: "Z5", name: "Interval", feel: "Hard, 3–8 min repeats", factor: { min: 0.925, max: 0.995 } },
];

const RIEGEL_EXPONENT = 1.06;

const roundTo = (value: number, step: number) => Math.round(value / step) * step;

export function parseDuration(input: string): number {
  const parts = input.trim().split(":").map(Number);
  if (parts.length < 2 || parts.some((n) => !Number.isFinite(n) || n < 0)) {
    throw new Error(`Invalid duration "${input}"`);
  }
  return parts.reduce((acc, n) => acc * 60 + n, 0);
}

export function formatDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = String(s % 60).padStart(2, "0");
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${sec}` : `${m}:${sec}`;
}

/** 425 → "7:05" */
export function formatPace(secondsPerMile: number): string {
  return formatDuration(secondsPerMile);
}

export function pacePerMile(timeSeconds: number, distanceMeters: number): number {
  return timeSeconds / (distanceMeters / METERS_PER_MILE);
}

export function predictTime(knownSeconds: number, knownMeters: number, targetMeters: number): number {
  return knownSeconds * Math.pow(targetMeters / knownMeters, RIEGEL_EXPONENT);
}

/** Personal zones from a 5K result, rounded to 5 s/mi so targets stay readable on the wrist. */
export function zonesFrom5k(fiveKSeconds: number): ZoneRange[] {
  const base = pacePerMile(fiveKSeconds, DISTANCES_M["5k"]);
  return ZONES.map((z) => ({
    id: z.id,
    label: z.label,
    name: z.name,
    fastest: roundTo(base * z.factor.min, 5),
    slowest: z.factor.max === undefined ? null : roundTo(base * z.factor.max, 5),
  }));
}

export function formatZoneRange(zone: ZoneRange): string {
  if (zone.slowest === null) return `${formatPace(zone.fastest)}+ /mi`;
  const lo = Math.min(zone.fastest, zone.slowest);
  const hi = Math.max(zone.fastest, zone.slowest);
  return `${formatPace(lo)}–${formatPace(hi)} /mi`;
}

/** Which zone a live pace falls in. Paces between zones snap to the nearer boundary. */
export function zoneForPace(zones: ZoneRange[], secondsPerMile: number): ZoneId {
  let best: { id: ZoneId; distance: number } = { id: "z1", distance: Number.POSITIVE_INFINITY };
  for (const zone of zones) {
    const lo = Math.min(zone.fastest, zone.slowest ?? Number.POSITIVE_INFINITY);
    const hi = Math.max(zone.fastest, zone.slowest ?? Number.POSITIVE_INFINITY);
    if (secondsPerMile >= lo && secondsPerMile <= hi) return zone.id;
    const distance = Math.min(Math.abs(secondsPerMile - lo), Math.abs(secondsPerMile - hi));
    if (distance < best.distance) best = { id: zone.id, distance };
  }
  return best.id;
}

/**
 * Position of a pace on the Z1→Z5 gradient bar, 0–100. Each zone owns an equal fifth of
 * the bar and the pace is interpolated inside its zone (slower = further left).
 */
export function zoneScalePosition(zones: ZoneRange[], secondsPerMile: number): number {
  const id = zoneForPace(zones, secondsPerMile);
  const index = zones.findIndex((z) => z.id === id);
  const zone = zones[index];
  if (!zone) return 0;
  const slow = zone.slowest ?? zone.fastest + 60;
  const span = Math.abs(slow - zone.fastest) || 1;
  const within = Math.min(Math.max((slow - secondsPerMile) / span, 0), 1);
  return Math.round(((index + within) / zones.length) * 100);
}

export interface PredictionInput {
  fiveKSeconds: number;
  race: RaceKey;
  daysPerWeek: number;
  weeks: number;
}

/** Finish range for the race-time predictor: Riegel today, nudged by a capped training effect. */
export function predictRange({ fiveKSeconds, race, daysPerWeek, weeks }: PredictionInput): [number, number] {
  const today = predictTime(fiveKSeconds, DISTANCES_M["5k"], DISTANCES_M[race]);
  const frequency = Math.min(Math.max(daysPerWeek, 2), 6) / 5;
  const gain = Math.min(0.0005 * weeks * frequency, 0.02);
  return [Math.round(today * (1 - gain)), Math.round(today * 1.035)];
}

/** Even-effort mile splits: climbs cost time, descents give a little back. */
export function courseSplits(goalSeconds: number, distanceMeters: number, gradePerMile: number[]): number[] {
  const miles = distanceMeters / METERS_PER_MILE;
  const basePace = goalSeconds / miles;
  const raw = gradePerMile.map((grade) => basePace * (1 + (grade > 0 ? 0.033 : 0.018) * grade));
  const scale = (basePace * gradePerMile.length) / raw.reduce((a, b) => a + b, 0);
  return raw.map((pace) => Math.round(pace * scale));
}
