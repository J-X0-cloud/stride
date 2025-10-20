import { DISTANCES_M, parseDuration } from "./pace";
import type { RaceGoal, RunSample, TrainingBlock, UpcomingSession, WeekDay, Workout } from "./types";

/** Seed state for the signed-in runner until the first sync completes. */

export const runner = {
  firstName: "Maya",
  initials: "MR",
  recent5k: "22:40",
  zonesUpdated: "Sunday",
  thresholdGainSec: 6,
};

export const todayLabel = "Tue, Oct 14 · Week 6 of 16";

export const week: WeekDay[] = [
  { letter: "M", date: 13, state: "done" },
  { letter: "T", date: 14, state: "now" },
  { letter: "W", date: 15, state: "upcoming" },
  { letter: "T", date: 16, state: "upcoming" },
  { letter: "F", date: 17, state: "upcoming" },
  { letter: "S", date: 18, state: "upcoming" },
  { letter: "S", date: 19, state: "upcoming" },
];

export const todaysWorkout: Workout = {
  id: "w6-tue-tempo",
  zone: "z4",
  chip: "Threshold · Z4",
  title: "Tempo intervals",
  detail: "4 × 1 mi @ 7:05–7:15 /mi, 2 min jog",
  distanceMi: 6.2,
  durationMin: 52,
  targetPace: "7:10",
  blocks: [
    { height: 30, tone: "z2" },
    { height: 34, tone: "z2" },
    { height: 88, tone: "z4" },
    { height: 26, tone: "z1" },
    { height: 92, tone: "z4" },
    { height: 26, tone: "z1" },
    { height: 90, tone: "z4" },
    { height: 26, tone: "z1" },
    { height: 96, tone: "z5" },
    { height: 34, tone: "z2" },
    { height: 30, tone: "z2" },
  ],
};

export const upcoming: UpcomingSession[] = [
  { id: "thu-easy", icon: "runner", tone: "z2", title: "Thu · Easy run", detail: "4 mi · 8:50–9:30 /mi" },
  { id: "fri-strength", icon: "dumbbell", tone: "volt", title: "Fri · Strength 25 min", detail: "Hips, calves & core" },
];

export const trainingBlock: TrainingBlock = {
  race: "Harbor Half Marathon",
  week: 6,
  totalWeeks: 16,
  phase: "Build",
  weeklyMiles: 31.2,
  days: [
    { weekday: "Mon", date: 13, title: "Rest & mobility", amount: "15 min", tone: "rest" },
    { weekday: "Tue", date: 14, title: "Tempo intervals", amount: "6.2 mi", tone: "z4" },
    { weekday: "Wed", date: 15, title: "Easy run", amount: "4.0 mi", tone: "z2" },
    { weekday: "Thu", date: 16, title: "Hill repeats", amount: "5.0 mi", tone: "z5" },
    { weekday: "Fri", date: 17, title: "Strength", amount: "25 min", tone: "volt" },
    { weekday: "Sat", date: 18, title: "Long run", amount: "9.0 mi", tone: "z3" },
    { weekday: "Sun", date: 19, title: "Recovery jog", amount: "3.0 mi", tone: "z1" },
  ],
};

/** Share of the last four weeks spent in each zone, 0–100, drawn as bar widths. */
export const timeInZone = { z1: 30, z2: 78, z3: 46, z4: 28, z5: 14 } as const;

export const raceGoal: RaceGoal = {
  name: "Harbor Half Marathon",
  dateLabel: "Sun, Nov 9",
  daysOut: 23,
  distanceMeters: DISTANCES_M.half,
  predictedSeconds: parseDuration("1:41:50"),
  rangeSeconds: [parseDuration("1:40:30"), parseDuration("1:43:10")],
  elevation: [
    [0, 34],
    [20, 30],
    [38, 32],
    [55, 20],
    [70, 24],
    [92, 12],
    [110, 18],
    [130, 26],
    [150, 22],
    [170, 30],
    [200, 28],
  ],
  landmarks: ["Start", "Mile 6 climb", "Finish"],
  checklist: [
    { id: "long-run", label: "Last long run · 11 mi", done: true },
    { id: "rehearsal", label: "Race-pace rehearsal", done: true },
    { id: "volume", label: "Volume down 30%", done: false },
    { id: "gels", label: "Plan gels at mi 4 & 8", done: false },
  ],
};

/** Average grade per mile along the Harbor course, in percent. */
export const harborGrades = [0.4, -0.2, 0.3, 1.1, -0.6, 2.4, -1.2, -1.4, 0.6, -0.9, 0.2, -0.3, 0.1];

/** Snapshot the live-run screen resumes from: interval 3 of 4 of today's tempo. */
export const liveRunSnapshot: RunSample & { interval: number; intervals: number; remainingMi: number } = {
  distanceMi: 5.42,
  elapsedSec: parseDuration("38:41"),
  heartRate: 164,
  elevationGainFt: 112,
  currentPaceSec: parseDuration("7:08"),
  interval: 3,
  intervals: 4,
  remainingMi: 0.41,
};
