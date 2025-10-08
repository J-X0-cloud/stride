import type { Feature } from "@/types/content";
import type { Phase, PlanCategory, SampleDay, TrainingPlan } from "@/types/training";

export const planCategories: { id: PlanCategory; label: string }[] = [
  { id: "popular", label: "Popular" },
  { id: "get-started", label: "Get started" },
  { id: "trail-ultra", label: "Trail & ultra" },
  { id: "return", label: "Return to run" },
];

export const trainingPlans: TrainingPlan[] = [
  {
    slug: "5k",
    name: "5K",
    weeks: "6–12 weeks",
    runsPerWeek: "3–5 runs/wk",
    badge: { label: "5K", tag: "Speed", from: "#43D7FF", to: "#0B2A4A" },
    highlights: ["Run/walk start for beginners", "Short intervals & strides", "Time-trial checkpoints"],
    categories: ["popular", "get-started"],
  },
  {
    slug: "10k",
    name: "10K",
    weeks: "8–14 weeks",
    runsPerWeek: "3–5 runs/wk",
    badge: { label: "10K", tag: "Strength", from: "#3E7BFF", to: "#0B1A3A" },
    highlights: ["Threshold & tempo focus", "Progressive long runs", "Race-pace rehearsals"],
    categories: ["popular", "get-started"],
  },
  {
    slug: "half-marathon",
    name: "Half marathon",
    weeks: "10–18 weeks",
    runsPerWeek: "3–6 runs/wk",
    badge: { label: "13.1", tag: "Endurance", from: "#7A5CFF", to: "#150F3A" },
    highlights: ["Long runs up to 12 mi", "Fueling practice built in", "Course-aware pacing"],
    categories: ["popular"],
  },
  {
    slug: "marathon",
    name: "Marathon",
    weeks: "14–24 weeks",
    runsPerWeek: "4–6 runs/wk",
    badge: { label: "26.2", tag: "Distance", from: "#FF7A45", to: "#2A0F12" },
    highlights: ["Peak weeks sized to you", "Marathon-pace long runs", "Three-week taper"],
    categories: ["popular", "trail-ultra"],
  },
  {
    slug: "trail-ultra",
    name: "Trail & ultra",
    weeks: "16–26 weeks",
    runsPerWeek: "4–6 runs/wk",
    badge: { label: "50K", tag: "Ultra", from: "#FF5A5F", to: "#2A0A18" },
    highlights: ["Time-on-feet long runs", "Vert & hiking blocks", "Back-to-back weekends"],
    categories: ["trail-ultra"],
  },
  {
    slug: "base-building",
    name: "Base building",
    weeks: "Ongoing",
    runsPerWeek: "3–6 runs/wk",
    badge: { label: "BASE", tag: "Foundation", from: "#8FD3FF", to: "#0B2436" },
    highlights: ["Aerobic mileage, no race", "One quality day a week", "Great between goals"],
    categories: ["get-started", "return", "trail-ultra"],
  },
  {
    slug: "return-to-run",
    name: "Return to run",
    weeks: "4–10 weeks",
    runsPerWeek: "2–4 runs/wk",
    badge: { label: "BACK", tag: "Rebuild", from: "#B9E61F", to: "#16240A" },
    highlights: ["Pain-check after each run", "Gradual run/walk ramp", "Extra mobility sessions"],
    categories: ["return", "get-started"],
  },
  {
    slug: "mile-3k",
    name: "Mile & 3K",
    weeks: "6–10 weeks",
    runsPerWeek: "4–6 runs/wk",
    badge: { label: "1 MI", tag: "Speed", from: "#FFB23F", to: "#2A1A06" },
    highlights: ["Track-style sessions", "Form & cadence drills", "Great for experienced runners"],
    categories: ["return"],
  },
];

/** Decorative badges on the custom-plan card: [badge, inline position]. */
export const customStack = [
  { badge: { label: "50K", tag: "Ultra", from: "#FF7A45", to: "#2A0F12" }, style: { left: 0, top: 40, transform: "rotate(-10deg)" } },
  { badge: { label: "15K", tag: "Custom", from: "#43D7FF", to: "#0B2A4A" }, style: { right: 0, top: 40, transform: "rotate(10deg)" } },
  {
    badge: { label: "5M", tag: "Custom", from: "#3E7BFF", to: "#0B1A3A" },
    style: { left: "50%", top: 0, marginLeft: -59, zIndex: 2, transform: "scale(1.12)" },
  },
];

export const sampleWeek: SampleDay[] = [
  { weekday: "Mon", title: "Rest + mobility", detail: "15 min flow", tone: "rest", rest: true },
  { weekday: "Tue", title: "Tempo intervals", detail: "4 × 1 mi @ Z4", tone: "z4" },
  { weekday: "Wed", title: "Easy run", detail: "4 mi @ Z2", tone: "z2" },
  { weekday: "Thu", title: "Hill repeats", detail: "8 × 60 sec @ Z5", tone: "z5" },
  { weekday: "Fri", title: "Strength", detail: "25 min, hips & core", tone: "strength" },
  { weekday: "Sat", title: "Long run", detail: "9 mi, last 2 @ Z3", tone: "z3" },
  { weekday: "Sun", title: "Recovery jog", detail: "3 mi @ Z1", tone: "z1" },
];

export const weekLegend = [
  { tone: "z1", label: "Z1 Recovery" },
  { tone: "z2", label: "Z2 Easy" },
  { tone: "z3", label: "Z3 Steady" },
  { tone: "z4", label: "Z4 Threshold" },
  { tone: "z5", label: "Z5 Interval" },
  { tone: "strength", label: "Strength" },
] as const;

export const phases: Phase[] = [
  {
    weeks: "Weeks 1–4",
    name: "Base",
    body: "Build aerobic volume with mostly easy running and short strides.",
    volume: [{ height: 40 }, { height: 46 }, { height: 52 }, { height: 38 }],
  },
  {
    weeks: "Weeks 5–9",
    name: "Build",
    body: "Add threshold work and hills. Long runs grow by about a mile a week.",
    volume: [{ height: 55 }, { height: 62 }, { height: 70, key: true }, { height: 50 }, { height: 72, key: true }],
  },
  {
    weeks: "Weeks 10–13",
    name: "Peak",
    body: "Race-specific sessions at goal pace and the biggest long runs of the block.",
    volume: [{ height: 80 }, { height: 90, key: true }, { height: 70 }, { height: 96, key: true }],
  },
  {
    weeks: "Weeks 14–16",
    name: "Taper",
    body: "Volume drops, intensity stays. Arrive rested, sharp and confident.",
    volume: [{ height: 70 }, { height: 50 }, { height: 30, key: true }],
  },
];

export const customFeatures: Feature[] = [
  { icon: "flag", title: "Any distance, 3 mi to 50K", body: "Road, track or trail, with elevation-aware long runs for hilly courses." },
  { icon: "calendar", title: "6 to 26 weeks", body: "Short on time? Stride compresses the build safely and tells you what’s realistic." },
  { icon: "refresh", title: "Change goals mid-plan", body: "Switch races or push the date back and your remaining weeks rebuild automatically." },
];
