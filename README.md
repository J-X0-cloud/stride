# Stride

Adaptive running coach for iOS and Android: personal plans from 5K to 50K that rewrite themselves after every run.

**Live demo:** https://www.freelancerportfoliohub.com/jameslee/projects/stridecoach/index.html

![Preview](docs/preview.webp)

## Overview

This repository contains the Stride marketing site and the Stride mobile app.

- **Web** (repo root) is a Next.js App Router site with four routes: the home page (race-time predictor
  walkthrough, plan browser, testimonials, journal, newsletter), Training plans (distance catalog, sample week,
  periodization, custom plans), How it works (adaptive loop, pace zones, race prep, coaching team) and Pricing
  (tiers, comparison table, billing FAQ). Every phone on the site is a React rendering of a real app screen.
- **Mobile** (`mobile/`) is an Expo Router app with Today, Plan, Pace zones and Race prep tabs plus a full-screen
  Live run view.

Pace zones, finish predictions and course splits all come from one small module (`lib/pace.ts` on the web,
`mobile/lib/pace.ts` in the app), so the numbers on the site and in the app always agree.

## Features

- **Race-time predictor**: a finish range from a recent 5K, weekly availability and plan length (`POST /api/predict`).
- **Five personal pace zones** derived from 5K pace and refreshed as fitness changes.
- **Plan browser** with category tabs, eight distance plans and a custom-plan builder.
- **Sample week and periodization** views that explain how a block is built.
- **Live run** with current pace, zone position, interval progress and a running clock.
- **Race prep** with predicted finish, elevation profile, taper checklist and grade-adjusted mile splits.
- **Newsletter sign-up** backed by a provider-agnostic service (`POST /api/newsletter`).

## Tech stack

| Layer   | Tools                                                                     |
| ------- | ------------------------------------------------------------------------- |
| Web     | Next.js 15 (App Router), React 19, TypeScript (strict), next/image        |
| API     | Next.js route handlers, zod                                               |
| Mobile  | Expo SDK 54, Expo Router, React Native, react-native-svg, expo-haptics    |
| Tooling | ESLint (flat config), Prettier, pnpm                                      |

## Getting started

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

Mobile app:

```bash
cd mobile
pnpm install
pnpm start          # press i for iOS Simulator or a for Android
```

### Environment variables

Copy `.env.example` to `.env.local`. Without them, newsletter sign-ups are logged to the console.

| Variable             | Purpose                                   |
| -------------------- | ----------------------------------------- |
| `NEWSLETTER_API_URL` | Subscribe endpoint of the email provider  |
| `NEWSLETTER_API_KEY` | Bearer token for that endpoint            |

## Project structure

```
.
├── app/                 # routes: /, /plans, /how-it-works, /pricing, /api/predict, /api/newsletter
├── components/
│   ├── layout/          # Header (client), Footer
│   ├── phone/           # Phone frame, tab bar, route map, elevation profile, workout bars
│   ├── screens/         # Today, Plan, Pace zones, Live run, Race prep, predictor steps
│   ├── sections/        # home and shared page sections, NewsletterForm (client)
│   ├── plans/           # PlanPicker (client), catalog, sample week, phases, custom plans
│   ├── how/ pricing/    # page-specific sections
│   └── ui/              # Icon, Logo, Button, SectionHead, Faq, badges
├── lib/
│   ├── data/            # typed copy, plans, pricing, FAQs, app mock data
│   ├── pace.ts          # zones, Riegel predictions, pace formatting
│   └── newsletter.ts    # NewsletterService interface + HTTP/console implementations
├── types/               # training and content types
├── public/              # fonts, images, favicon
└── mobile/
    ├── app/             # _layout, (tabs)/{index,plan,zones,race}, run (live run modal)
    ├── components/      # native UI components
    ├── constants/       # theme tokens
    └── lib/             # pace math, types, seed data, run timer hook
```

## Scripts

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `pnpm dev`       | Start the Next.js dev server   |
| `pnpm build`     | Production build               |
| `pnpm start`     | Serve the production build     |
| `pnpm lint`      | Lint with ESLint               |
| `pnpm typecheck` | Type-check with `tsc --noEmit` |
| `pnpm format`    | Format with Prettier           |

In `mobile/`: `pnpm start`, `pnpm ios`, `pnpm android`, `pnpm lint`, `pnpm typecheck`.
