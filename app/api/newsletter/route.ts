import { NextResponse } from "next/server";
import { z } from "zod";
import { getNewsletterService } from "@/lib/newsletter";

const bodySchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  source: z.string().max(64).default("site"),
});

export async function POST(request: Request) {
  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  try {
    const result = await getNewsletterService().subscribe(parsed.data);
    return NextResponse.json(result, { status: result.status === "subscribed" ? 201 : 200 });
  } catch (error) {
    console.error("[newsletter] subscribe failed", error);
    return NextResponse.json({ error: "provider_unavailable" }, { status: 502 });
  }
}
