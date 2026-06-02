import { NextRequest, NextResponse } from "next/server";
import { adminCookieName, verifyAdminSessionToken } from "../../../../src/server/admin-auth";
import { getVisitReport } from "../../../../src/server/analytics-store";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(adminCookieName)?.value;

  if (!verifyAdminSessionToken(token)) {
    return NextResponse.json({ message: "Wymagane logowanie administratora." }, { status: 401 });
  }

  const report = await getVisitReport();

  return NextResponse.json(report);
}

