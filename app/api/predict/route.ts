import { NextResponse } from "next/server";
import { z } from "zod";
import {
  formatDuration,
  formatPace,
  formatZoneRange,
  parseDuration,
  pacePerMile,
  predictRace,
  RACE_DISTANCES_M,
  zonesFrom5k,
} from "@/lib/pace";

const bodySchema = z.object({
  /** Most recent 5K as "mm:ss" or "h:mm:ss". */
  recent5k: z.string().regex(/^(\d{1,2}:)?\d{1,2}:\d{2}$/, "Use mm:ss"),
  race: z.enum(["5k", "10k", "half", "marathon"]),
  daysPerWeek: z.number().int().min(2).max(6),
  weeks: z.union([z.literal(8), z.literal(12), z.literal(16)]),
});

/**
 * POST /api/predict
 * Powers the three-step race-time predictor: returns a finish range for the chosen race
 * and plan length, plus the runner's starting pace zones.
 */
export async function POST(request: Request) {
  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_request", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const { recent5k, race, daysPerWeek, weeks } = parsed.data;
  const fiveKSeconds = parseDuration(recent5k);
  if (fiveKSeconds < 12 * 60 || fiveKSeconds > 75 * 60) {
    return NextResponse.json({ error: "out_of_range" }, { status: 422 });
  }

  const prediction = predictRace({ fiveKSeconds, race, daysPerWeek, weeks });
  const [fast, slow] = prediction.range;
  const midpoint = (fast + slow) / 2;

  return NextResponse.json({
    race,
    weeks,
    finish: { label: prediction.label, fastest: formatDuration(fast), slowest: formatDuration(slow) },
    goalPace: `${formatPace(pacePerMile(midpoint, RACE_DISTANCES_M[race]))} /mi`,
    zones: zonesFrom5k(fiveKSeconds).map((zone) => ({ id: zone.id, name: zone.name, pace: formatZoneRange(zone) })),
  });
}
