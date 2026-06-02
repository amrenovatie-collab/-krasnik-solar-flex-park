import { NextRequest, NextResponse } from "next/server";
import { trackVisit } from "../../../../src/server/analytics-store";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as {
    eventType?: "page_view" | "section_view";
    language?: string;
    path?: string;
    referrer?: string;
    visitorId?: string;
  } | null;

  if (!body) {
    return new NextResponse(null, { status: 204 });
  }

  await trackVisit({
    eventType: body.eventType === "section_view" ? "section_view" : "page_view",
    language: body.language,
    path: body.path,
    referrer: body.referrer,
    userAgent: request.headers.get("user-agent") || undefined,
    visitorId: body.visitorId
  }).catch(() => null);

  return new NextResponse(null, { status: 204 });
}

