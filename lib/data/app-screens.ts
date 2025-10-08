import type { CalendarDay, WorkoutBlock } from "@/types/training";

/** Mock data for the phone mockups: one runner, Maya, in week 6 of a 16-week half-marathon block. */

export const runner = { initials: "MR", firstName: "Maya", recent5k: "22:40" };

export const todayView = {
  kicker: "Tue, Oct 14 · Week 6 of 16",
  greeting: "Morning, Maya",
  week: [
    { letter: "M", date: 13, state: "done" },
    { letter: "T", date: 14, state: "now" },
    { letter: "W", date: 15, state: "upcoming" },
    { letter: "T", date: 16, state: "upcoming" },
    { letter: "F", date: 17, state: "upcoming" },
    { letter: "S", date: 18, state: "upcoming" },
    { letter: "S", date: 19, state: "upcoming" },
  ] as const,
  workout: {
    chip: "Threshold · Z4",
    title: "Tempo intervals",
    detail: "4 × 1 mi @ 7:05–7:15 /mi, 2 min jog",
    stats: [
      { value: "6.2", label: "miles" },
      { value: "52", label: "min" },
      { value: "7:10", label: "target" },
    ],
  },
  upNext: [
    { icon: "runner", tone: "z2", title: "Thu · Easy run", detail: "4 mi · 8:50–9:30 /mi" },
    { icon: "dumbbell", tone: "volt", title: "Fri · Strength 25 min", detail: "Hips, calves & core" },
  ] as const,
};

/** Warm-up, four threshold reps with jog recoveries, a fast finish and cool-down. */
export const tempoStructure: WorkoutBlock[] = [
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
];

export const planView = {
  race: "Harbor Half Marathon",
  phaseLabel: "Week 6 of 16 · Build",
  weeklyMiles: "31.2 mi",
  progress: 38,
  days: [
    { weekday: "Mon", date: 13, title: "Rest & mobility", amount: "15 min", tone: "rest" },
    { weekday: "Tue", date: 14, title: "Tempo intervals", amount: "6.2 mi", tone: "z4" },
    { weekday: "Wed", date: 15, title: "Easy run", amount: "4.0 mi", tone: "z2" },
    { weekday: "Thu", date: 16, title: "Hill repeats", amount: "5.0 mi", tone: "z5" },
    { weekday: "Fri", date: 17, title: "Strength", amount: "25 min", tone: "volt" },
    { weekday: "Sat", date: 18, title: "Long run", amount: "9.0 mi", tone: "z3" },
    { weekday: "Sun", date: 19, title: "Recovery jog", amount: "3.0 mi", tone: "z1" },
  ] satisfies CalendarDay[],
};

/** Share of the last four weeks spent in each zone, as bar widths. */
export const timeInZone = { z1: 30, z2: 78, z3: 46, z4: 28, z5: 14 } as const;

export const zoneUpdate = { title: "Zones updated Sunday", detail: "Threshold pace improved 6 sec/mi" };

export const liveRun = {
  interval: "Interval 3 of 4",
  remaining: "0.41 mi left",
  pace: "7:08",
  metrics: [
    { value: "5.42", label: "miles" },
    { value: "38:41", label: "time" },
    { value: "164", label: "bpm" },
    { value: "+112", label: "ft gain" },
  ],
  /** Position of the current pace on the Z1–Z5 scale, 0–100. */
  zonePosition: 74,
};

export const racePrep = {
  kicker: "Sun, Nov 9 · 23 days",
  predicted: "1:41:50",
  range: "Likely range 1:40:30 – 1:43:10 · 7:46 /mi",
  elevationAxis: ["Start", "Mile 6 climb", "Finish"],
  /** Normalised elevation samples along the course, 0 (low) to 42 (high). */
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
  ] as [number, number][],
  checklist: [
    { label: "Last long run · 11 mi", done: true },
    { label: "Race-pace rehearsal", done: true },
    { label: "Volume down 30%", done: false },
    { label: "Plan gels at mi 4 & 8", done: false },
  ],
};

export const predictorGoal = [
  { question: "How would you describe your running?", options: ["Just starting", "Regular", "Competitive"], selected: "Regular" },
  { question: "What are you training for?", options: ["5K", "10K", "Half marathon", "Marathon", "Ultra"], selected: "Half marathon" },
  { question: "Do you have a race date?", options: ["Yes · Nov 9", "Not yet"], selected: "Yes · Nov 9" },
];

export const predictorFitness = {
  recent5k: ["0 h", "22 m", "40 s"],
  daysOptions: [2, 3, 4, 5, 6],
  days: 5,
  lengths: ["8 wks", "12 wks", "16 wks"],
  length: "12 wks",
};

export const predictorResult = {
  label: "Estimated half marathon in 12 weeks",
  note: "Based on your 5K, weekly availability and training history",
};
