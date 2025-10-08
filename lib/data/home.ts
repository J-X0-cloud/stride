import type { Feature, JournalPost, Testimonial } from "@/types/content";
import type { IconName } from "@/components/ui/Icon";

export const integrations: { icon: IconName; label: string }[] = [
  { icon: "watch", label: "GPS watches" },
  { icon: "heart", label: "Heart-rate straps" },
  { icon: "bars", label: "Health apps" },
  { icon: "calendar", label: "Calendar sync" },
  { icon: "phone", label: "Phone GPS" },
];

export const predictorSteps = [
  { title: "Tell us your goal", body: "Your experience, target distance and race date, if you have one." },
  { title: "Share your fitness", body: "A recent race or time trial, plus how many days a week you can realistically run." },
  { title: "See your target", body: "A realistic finish range, then a plan built to get you there." },
];

export const whyFeatures: Feature[] = [
  {
    icon: "refresh",
    title: "Plans that rewrite themselves",
    body: "Crushed your tempo? Missed Thursday? Stride adjusts the next sessions, not just the next week, so progress stays steady.",
  },
  {
    icon: "target",
    title: "Pace zones from real data",
    body: "Five personal zones recalculated from your recent runs, so easy days stay easy and hard days hit the right effort.",
  },
  {
    icon: "watch",
    title: "Workouts on your wrist",
    body: "Structured intervals sync to your watch with pace alerts and lap cues. Leave the phone at home if you like.",
  },
  {
    icon: "dumbbell",
    title: "Strength & mobility built in",
    body: "Short, runner-specific sessions placed on the right days to keep calves, hips and knees resilient.",
  },
];

export const mosaic = {
  photos: [
    { src: "/images/golden-hour-road.webp", alt: "Runner silhouetted against a low evening sun on an open road", caption: "Easy miles at golden hour" },
    { src: "/images/track-club.webp", alt: "Running club group on a track session", caption: "Track Tuesdays" },
    { src: "/images/green-hills.webp", alt: "Rolling green hills at dawn", caption: "Hill blocks" },
  ],
  stats: [
    { title: "Built for the long game", body: "Plans progress in careful blocks so fitness compounds without the injury setbacks." },
    { title: "Every run counts", body: "Slow day, fast day, missed day — each one shapes what comes next." },
  ],
};

export const journeySteps: Feature[] = [
  { icon: "phone", title: "Download Stride", body: "Create your account on iOS or Android and connect your watch in under a minute." },
  { icon: "flag", title: "Set your goal", body: "Pick a distance and date. Stride builds a periodized plan around your week." },
  { icon: "runner", title: "Run the workouts", body: "Follow guided sessions with audio cues, pace targets and live zone feedback." },
  { icon: "trophy", title: "Race with a plan", body: "Get a course-aware pacing strategy, taper and race-week checklist." },
];

export const testimonials: Testimonial[] = [
  {
    initials: "MR",
    name: "Maya R.",
    context: "First half marathon",
    quote:
      "I’d tried three free plans and always got hurt around week eight. Stride dialed my mileage back after two rough runs and I made it to race day feeling fresh.",
  },
  {
    initials: "DK",
    name: "Daniel K.",
    context: "Marathon, 16-week plan",
    quote:
      "The pace zones changed everything. My easy runs were way too fast. Slowing down made my workouts better within a month.",
    gradient: ["#FF7A45", "#FF5A5F"],
  },
  {
    initials: "PS",
    name: "Priya S.",
    context: "10K, returning runner",
    quote:
      "I work shifts, so my week is never the same. Dragging a long run to Tuesday and watching the plan rebalance is honestly magic.",
    gradient: ["#43D7FF", "#2F6BFF"],
  },
];

export const journalPosts: JournalPost[] = [
  { category: "Training", title: "Why your easy runs should feel almost too easy", image: { src: "/images/golden-hour-road.webp", alt: "Runner on a road at sunrise" } },
  { category: "Race prep", title: "How to pace a hilly course without blowing up", image: { src: "/images/green-hills.webp", alt: "Green hills under morning haze" } },
  { category: "Recovery", title: "Running with a cold: the above-the-neck rule", image: { src: "/images/sunset-runner.webp", alt: "Silhouette of a runner catching their breath at sunset" } },
  { category: "Strength", title: "Should you lift during taper week?", image: { src: "/images/barbell.webp", alt: "Loaded barbell on a gym floor" } },
];
