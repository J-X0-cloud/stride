import type { CompareRow, Feature, Tier } from "@/types/content";

const trialHref = "mailto:hello@stride.com";

export const tiers: Tier[] = [
  {
    id: "monthly",
    name: "Monthly",
    subtitle: "Flexible, cancel anytime",
    amount: "$14.99",
    unit: " /mo",
    billing: "Billed monthly after your free week",
    features: ["Every plan, 5K to 50K", "Pace & heart-rate zones", "Watch & app sync", "Strength & mobility", "Race prep tools"],
    cta: { label: "Start free week", href: trialHref },
  },
  {
    id: "annual",
    name: "Annual",
    subtitle: "Train through a full season",
    amount: "$99.99",
    unit: " /yr",
    billing: "Just $8.33 a month",
    features: [
      "Everything in Monthly",
      "Message a coach anytime",
      "Pause up to 3 months",
      "Early access to new features",
      "Downloadable training log",
    ],
    cta: { label: "Start free week", href: trialHref },
    tag: "Best value · save 44%",
    featured: true,
  },
  {
    id: "clubs",
    name: "Clubs & teams",
    subtitle: "For groups of 10 or more",
    amount: "$6",
    unit: " /runner/mo",
    billing: "Billed annually per member",
    features: ["Everything in Annual", "Coach dashboard", "Group challenges", "Quarterly plan review call", "Priority support"],
    cta: { label: "Talk to us", href: trialHref },
  },
];

export const compareRows: CompareRow[] = [
  { feature: "Adaptive plans, 5K to ultra", monthly: true, annual: true, clubs: true },
  { feature: "Personal pace & heart-rate zones", monthly: true, annual: true, clubs: true },
  { feature: "Watch & app sync", monthly: true, annual: true, clubs: true },
  { feature: "Strength & mobility library", monthly: true, annual: true, clubs: true },
  { feature: "Race prep & course-aware pacing", monthly: true, annual: true, clubs: true },
  { feature: "Message a coach", monthly: false, annual: true, clubs: true },
  { feature: "Quarterly plan review call", monthly: false, annual: false, clubs: true },
  { feature: "Coach dashboard for your group", monthly: false, annual: false, clubs: true },
];

export const pricingPerks: Feature[] = [
  { icon: "shield", title: "Risk-free start", body: "Seven days of full access, with a reminder before your trial ends. No surprise charges." },
  { icon: "gift", title: "Gift a season", body: "Give a runner 3, 6 or 12 months of coaching. Delivered by email, redeemable any time." },
  { icon: "users", title: "Run with your club", body: "Group pricing, shared challenges and a coach dashboard for clubs and school teams." },
];

export const subscription = { monthly: "$14.99/month", annual: "$99.99/year" };
