import type { NavLink } from "@/types/content";

export const site = {
  name: "Stride",
  url: "https://stride.com",
  email: "hello@stride.com",
  themeColor: "#0B1622",
  description:
    "Stride is an adaptive running coach for iOS and Android: personalized plans for 5K to marathon, live pace zones and race-day strategy that adjust after every run.",
  tagline: "Adaptive running plans that respond to how you actually ran — built by coaches, tuned every week.",
  copyright: "© 2026 Stride Running Co. All rights reserved.",
} as const;

export const mainNav: NavLink[] = [
  { href: "/plans", label: "Training plans" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#journal", label: "Journal" },
];

export const mobileNav: NavLink[] = [{ href: "/", label: "Home" }, ...mainNav];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Train",
    links: [
      { href: "/plans", label: "5K & 10K plans" },
      { href: "/plans#distances", label: "Half marathon" },
      { href: "/plans#distances", label: "Marathon" },
      { href: "/plans#custom", label: "Custom plan" },
    ],
  },
  {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/how-it-works#zones", label: "Pace zones" },
      { href: "/how-it-works#race", label: "Race prep" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/how-it-works#coaches", label: "Our coaches" },
      { href: "/#journal", label: "Journal" },
      { href: "mailto:hello@stride.com", label: "hello@stride.com" },
      { href: "/pricing#faq", label: "Help & FAQ" },
    ],
  },
];

export const socialLinks = [
  { href: "#", label: "Instagram", icon: "instagram" },
  { href: "#", label: "YouTube", icon: "youtube" },
  { href: "#", label: "TikTok", icon: "tiktok" },
  { href: "mailto:hello@stride.com", label: "Email", icon: "mail" },
] as const;

export const legalLinks: NavLink[] = [
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "#", label: "Accessibility" },
];
