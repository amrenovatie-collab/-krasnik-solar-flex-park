import { createHmac, timingSafeEqual } from "node:crypto";

export const adminCookieName = "ksfp_admin_session";

const sessionDurationMs = 1000 * 60 * 60 * 8;

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

function signPayload(payload: string) {
  const secret = getSessionSecret();

  if (!secret) {
    return "";
  }

  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function isAdminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && getSessionSecret());
}

export function createAdminSessionToken() {
  const expiresAt = Date.now() + sessionDurationMs;
  const nonce = crypto.randomUUID();
  const payload = `${expiresAt}.${nonce}`;
  const signature = signPayload(payload);

  return `${payload}.${signature}`;
}

export function verifyAdminSessionToken(token?: string) {
  if (!token || !isAdminConfigured()) {
    return false;
  }

  const parts = token.split(".");

  if (parts.length !== 3) {
    return false;
  }

  const [expiresAt, nonce, signature] = parts;
  const expiry = Number(expiresAt);

  if (!Number.isFinite(expiry) || Date.now() > expiry || !nonce || !signature) {
    return false;
  }

  const expectedSignature = signPayload(`${expiresAt}.${nonce}`);
  const expectedBuffer = Buffer.from(expectedSignature);
  const receivedBuffer = Buffer.from(signature);

  if (expectedBuffer.length !== receivedBuffer.length) {
    return false;
  }

  return timingSafeEqual(expectedBuffer, receivedBuffer);
}

export function getAdminCookieOptions() {
  return {
    httpOnly: true,
    maxAge: sessionDurationMs / 1000,
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production"
  };
}

