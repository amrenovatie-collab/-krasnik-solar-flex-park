export type VisitEventInput = {
  eventType: "page_view" | "section_view";
  language?: string;
  path?: string;
  referrer?: string;
  userAgent?: string;
  visitorId?: string;
};

export type VisitReport = {
  configured: boolean;
  pageViews: number;
  sectionViews: number;
  uniqueToday: number;
  daily: Array<{ date: string; views: number; unique: number }>;
  paths: Array<{ path: string; views: number }>;
  devices: Array<{ device: string; views: number }>;
  recent: Array<{
    device: string;
    eventType: "page_view" | "section_view";
    language: string;
    path: string;
    referrerHost: string;
    timestamp: string;
  }>;
};

type UpstashResult<T> = {
  result: T;
};

const totalPageViewsKey = "ksfp:visits:page_views";
const totalSectionViewsKey = "ksfp:visits:section_views";
const byDayKey = "ksfp:visits:by_day";
const byPathKey = "ksfp:visits:by_path";
const byDeviceKey = "ksfp:visits:by_device";
const recentKey = "ksfp:visits:recent";

function getRedisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  return { token, url };
}

export function isAnalyticsConfigured() {
  const { token, url } = getRedisConfig();

  return Boolean(token && url);
}

async function redisCommand<T>(args: Array<number | string>): Promise<T> {
  const { token, url } = getRedisConfig();

  if (!token || !url) {
    throw new Error("Analytics storage is not configured.");
  }

  const endpoint = `${url.replace(/\/$/, "")}/${args.map((arg) => encodeURIComponent(String(arg))).join("/")}`;
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Analytics storage returned ${response.status}.`);
  }

  const payload = (await response.json()) as UpstashResult<T>;

  return payload.result;
}

function normalizePath(path?: string) {
  if (!path || !path.startsWith("/")) {
    return "/";
  }

  return path.slice(0, 120);
}

function normalizeLanguage(language?: string) {
  return language === "en" ? "en" : "pl";
}

function getReferrerHost(referrer?: string) {
  if (!referrer) {
    return "bez referera";
  }

  try {
    return new URL(referrer).hostname.replace(/^www\./, "") || "bez referera";
  } catch {
    return "bez referera";
  }
}

function detectDevice(userAgent?: string) {
  const source = userAgent?.toLowerCase() || "";

  if (!source) {
    return "unknown";
  }

  if (/bot|crawler|spider|preview|slurp/.test(source)) {
    return "bot";
  }

  if (/ipad|tablet/.test(source)) {
    return "tablet";
  }

  if (/mobile|iphone|android/.test(source)) {
    return "mobile";
  }

  return "desktop";
}

function parseNumber(value: unknown) {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

function parseHashMap(value: unknown) {
  if (!value) {
    return {} as Record<string, number>;
  }

  if (Array.isArray(value)) {
    const entries: Record<string, number> = {};

    for (let index = 0; index < value.length; index += 2) {
      entries[String(value[index])] = parseNumber(value[index + 1]);
    }

    return entries;
  }

  if (typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, parseNumber(item)])
    );
  }

  return {};
}

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function getRecentDays(count: number) {
  return Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return formatDate(date);
  }).reverse();
}

function sortRows(record: Record<string, number>, limit: number) {
  return Object.entries(record)
    .map(([key, views]) => ({ key, views }))
    .sort((first, second) => second.views - first.views)
    .slice(0, limit);
}

export async function trackVisit(input: VisitEventInput) {
  if (!isAnalyticsConfigured()) {
    return { configured: false };
  }

  const timestamp = new Date();
  const date = formatDate(timestamp);
  const path = normalizePath(input.path);
  const language = normalizeLanguage(input.language);
  const device = detectDevice(input.userAgent);
  const referrerHost = getReferrerHost(input.referrer);
  const eventType = input.eventType === "section_view" ? "section_view" : "page_view";
  const counterKey = eventType === "section_view" ? totalSectionViewsKey : totalPageViewsKey;
  const eventPayload = JSON.stringify({
    device,
    eventType,
    language,
    path,
    referrerHost,
    timestamp: timestamp.toISOString()
  });

  const commands: Array<Promise<unknown>> = [
    redisCommand(["INCR", counterKey]),
    redisCommand(["HINCRBY", byDayKey, date, 1]),
    redisCommand(["HINCRBY", byPathKey, path, 1]),
    redisCommand(["HINCRBY", byDeviceKey, device, 1]),
    redisCommand(["LPUSH", recentKey, eventPayload]),
    redisCommand(["LTRIM", recentKey, 0, 49])
  ];

  if (input.visitorId) {
    commands.push(redisCommand(["SADD", `ksfp:visits:unique:${date}`, input.visitorId.slice(0, 80)]));
  }

  await Promise.all(commands);

  return { configured: true };
}

export async function getVisitReport(): Promise<VisitReport> {
  if (!isAnalyticsConfigured()) {
    return {
      configured: false,
      daily: [],
      devices: [],
      pageViews: 0,
      paths: [],
      recent: [],
      sectionViews: 0,
      uniqueToday: 0
    };
  }

  const days = getRecentDays(14);
  const today = formatDate(new Date());
  const [pageViews, sectionViews, byDayRaw, byPathRaw, byDeviceRaw, recentRaw, ...uniqueCounts] =
    await Promise.all([
      redisCommand<string | number | null>(["GET", totalPageViewsKey]),
      redisCommand<string | number | null>(["GET", totalSectionViewsKey]),
      redisCommand<unknown>(["HGETALL", byDayKey]),
      redisCommand<unknown>(["HGETALL", byPathKey]),
      redisCommand<unknown>(["HGETALL", byDeviceKey]),
      redisCommand<string[]>(["LRANGE", recentKey, 0, 24]),
      ...days.map((day) => redisCommand<string | number>(["SCARD", `ksfp:visits:unique:${day}`]))
    ]);

  const dailyMap = parseHashMap(byDayRaw);
  const paths = sortRows(parseHashMap(byPathRaw), 8).map((item) => ({
    path: item.key,
    views: item.views
  }));
  const devices = sortRows(parseHashMap(byDeviceRaw), 6).map((item) => ({
    device: item.key,
    views: item.views
  }));
  const daily = days.map((date, index) => ({
    date,
    unique: parseNumber(uniqueCounts[index]),
    views: dailyMap[date] || 0
  }));

  const recent = (recentRaw || [])
    .map((item) => {
      try {
        return JSON.parse(item) as VisitReport["recent"][number];
      } catch {
        return null;
      }
    })
    .filter((item): item is VisitReport["recent"][number] => Boolean(item));

  return {
    configured: true,
    daily,
    devices,
    pageViews: parseNumber(pageViews),
    paths,
    recent,
    sectionViews: parseNumber(sectionViews),
    uniqueToday: daily.find((item) => item.date === today)?.unique || 0
  };
}

