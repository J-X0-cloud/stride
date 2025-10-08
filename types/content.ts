import type { IconName } from "@/components/ui/Icon";

export interface NavLink {
  href: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
  icon: IconName;
  title: string;
  body: string;
}

export interface Testimonial {
  initials: string;
  name: string;
  context: string;
  quote: string;
  gradient?: [string, string];
}

export interface Coach {
  initials: string;
  name: string;
  role: string;
  bio: string;
  focus: string[];
  gradient: [string, string];
}

export interface JournalPost {
  category: string;
  title: string;
  image: { src: string; alt: string };
}

export interface Tier {
  id: "monthly" | "annual" | "clubs";
  name: string;
  subtitle: string;
  amount: string;
  unit: string;
  billing: string;
  features: string[];
  cta: { label: string; href: string };
  tag?: string;
  featured?: boolean;
}

export interface CompareRow {
  feature: string;
  monthly: boolean;
  annual: boolean;
  clubs: boolean;
}
