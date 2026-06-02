import { NextRequest, NextResponse } from "next/server";
import {
  adminCookieName,
  createAdminSessionToken,
  getAdminCookieOptions,
  isAdminConfigured
} from "../../../../src/server/admin-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { message: "Brak konfiguracji ADMIN_PASSWORD lub ADMIN_SESSION_SECRET." },
      { status: 503 }
    );
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;

  if (!body?.password || body.password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Nieprawidłowe hasło administratora." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminCookieName, createAdminSessionToken(), getAdminCookieOptions());

  return response;
}

