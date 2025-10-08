import type { Coach, Feature } from "@/types/content";

export const adaptiveLoop: Feature[] = [
  { icon: "calendar", title: "Plan", body: "Your goal, schedule and fitness shape a periodized block with the right mix of easy, quality and long runs." },
  { icon: "runner", title: "Run", body: "Guided workouts on your phone or watch, with audio cues and live pace and zone feedback." },
  { icon: "bars", title: "Learn", body: "Pace, heart rate, splits and your effort rating are compared against the target for each rep." },
  { icon: "refresh", title: "Adjust", body: "Upcoming paces, volume and session types are tuned, and you get a plain-English note on why." },
];

export const zoneFeatures: Feature[] = [
  { icon: "target", title: "Pace or heart rate", body: "Train by pace on the road, by heart rate on hills and in heat. Stride converts between them." },
  { icon: "mountain", title: "Terrain and heat aware", body: "Targets relax on climbs and hot days so effort stays honest." },
];

export const raceFeatures: Feature[] = [
  { icon: "map", title: "Course-aware splits", body: "Upload the course and get mile-by-mile targets that account for every climb and descent." },
  { icon: "leaf", title: "Fueling & hydration plan", body: "Know when to take gels and fluids, and practice it on your long runs first." },
  { icon: "shield", title: "Race-week checklist", body: "Sleep, shakeout runs, kit and logistics, so nothing surprises you on the morning." },
];

export const beyondTheRun: Feature[] = [
  { icon: "watch", title: "Watch & app sync", body: "Workouts push to your GPS watch and completed runs flow back automatically, from whichever device you record on." },
  { icon: "dumbbell", title: "Strength & mobility", body: "Follow-along sessions of 10 to 30 minutes, placed on easy days and scaled to the gear you have at home." },
  { icon: "chat", title: "Ask a coach", body: "Message the coaching team about niggles, schedule changes or race choices. Real people reply within a day." },
];

export const coaches: Coach[] = [
  {
    initials: "EH",
    name: "Elena H.",
    role: "Head coach",
    bio: "Former collegiate 10K runner who has coached road runners of every level for over a decade.",
    focus: ["Leads plan design & periodization", "Specialist in half & full marathon"],
    gradient: ["#2F6BFF", "#0B1622"],
  },
  {
    initials: "MT",
    name: "Marcus T.",
    role: "Trail & ultra",
    bio: "Mountain ultrarunner who writes the vert, hiking and back-to-back blocks in our trail plans.",
    focus: ["Builds ultra & trail programs", "Heat & altitude guidance"],
    gradient: ["#FF7A45", "#2A0F12"],
  },
  {
    initials: "AN",
    name: "Aisha N.",
    role: "Physical therapist",
    bio: "Sports physical therapist behind our strength library and return-to-run progressions.",
    focus: ["Strength & mobility sessions", "Injury-aware plan adjustments"],
    gradient: ["#43D7FF", "#0B2A4A"],
  },
];

/** The example runner whose zones are shown in the zone table. */
export const exampleRunner5k = "22:40";
