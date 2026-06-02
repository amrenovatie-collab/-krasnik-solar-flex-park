"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { ArrowRight, BarChart3, Lock, LogOut, RefreshCw, ShieldCheck } from "lucide-react";

type VisitReport = {
  configured: boolean;
  daily: Array<{ date: string; unique: number; views: number }>;
  devices: Array<{ device: string; views: number }>;
  pageViews: number;
  paths: Array<{ path: string; views: number }>;
  recent: Array<{
    device: string;
    eventType: "page_view" | "section_view";
    language: string;
    path: string;
    referrerHost: string;
    timestamp: string;
  }>;
  sectionViews: number;
  uniqueToday: number;
};

function formatNumber(value: number) {
  return new Intl.NumberFormat("pl-PL").format(value);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "short"
  }).format(new Date(value));
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    month: "short"
  }).format(new Date(value));
}

function deviceLabel(device: string) {
  const labels: Record<string, string> = {
    bot: "bot",
    desktop: "desktop",
    mobile: "mobile",
    tablet: "tablet",
    unknown: "nieznane"
  };

  return labels[device] || device;
}

export function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [report, setReport] = useState<VisitReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const maxDailyViews = useMemo(
    () => Math.max(...(report?.daily.map((item) => item.views) || [0]), 1),
    [report]
  );

  async function loadReport() {
    setIsLoading(true);
    setError("");

    const response = await fetch("/api/admin/visits", {
      cache: "no-store"
    });

    if (response.status === 401) {
      setReport(null);
      setIsLoading(false);
      return;
    }

    if (!response.ok) {
      setError("Nie udało się pobrać raportu odwiedzin.");
      setIsLoading(false);
      return;
    }

    setReport((await response.json()) as VisitReport);
    setIsLoading(false);
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      body: JSON.stringify({ password }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { message?: string } | null;
      setError(body?.message || "Logowanie nie powiodło się.");
      setIsSubmitting(false);
      return;
    }

    setPassword("");
    setIsSubmitting(false);
    await loadReport();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setReport(null);
  }

  useEffect(() => {
    loadReport();
  }, []);

  return (
    <main className="min-h-screen bg-night px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_9%,rgba(34,197,94,0.12),transparent_28%),radial-gradient(circle_at_72%_12%,rgba(244,114,182,0.13),transparent_28%),radial-gradient(circle_at_90%_28%,rgba(56,189,248,0.1),transparent_32%),linear-gradient(180deg,#020617_0%,#030712_48%,#07111f_100%)]" />
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-rose-100">
              <ArrowRight className="rotate-180" size={16} aria-hidden="true" />
              Wróć do strony
            </a>
            <p className="section-label mt-6">PANEL ADMINISTRATORA</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
              Raport odwiedzin Kraśnik Solar Flex Park
            </h1>
          </div>

          {report ? (
            <div className="flex gap-3">
              <button type="button" onClick={loadReport} className="secondary-button">
                <RefreshCw size={17} aria-hidden="true" />
                Odśwież
              </button>
              <button type="button" onClick={handleLogout} className="secondary-button">
                <LogOut size={17} aria-hidden="true" />
                Wyloguj
              </button>
            </div>
          ) : null}
        </header>

        {isLoading ? (
          <section className="mt-10 rounded-lg border border-white/10 bg-slate-950/70 p-6 text-slate-300">
            Ładowanie panelu...
          </section>
        ) : null}

        {!isLoading && !report ? (
          <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <form onSubmit={handleLogin} className="premium-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-rose-200/25 bg-rose-200/10 p-3 text-rose-100">
                  <Lock size={22} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-white">Logowanie administratora</h2>
                  <p className="mt-1 text-sm text-slate-400">Dostęp tylko dla właściciela projektu.</p>
                </div>
              </div>

              <label className="mt-8 block text-sm font-semibold text-slate-200" htmlFor="admin-password">
                Hasło administratora
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-3 h-12 w-full rounded-lg border border-white/10 bg-slate-950/80 px-4 text-white outline-none transition focus:border-rose-200/50 focus:ring-2 focus:ring-rose-200/20"
                autoComplete="current-password"
                required
              />

              {error ? <p className="mt-4 text-sm text-rose-200">{error}</p> : null}

              <button type="submit" disabled={isSubmitting} className="primary-button mt-6 w-full">
                {isSubmitting ? "Logowanie..." : "Zaloguj się"}
                <ShieldCheck size={18} aria-hidden="true" />
              </button>
            </form>

            <aside className="rounded-lg border border-sky-300/15 bg-sky-300/[0.06] p-6 text-sm leading-7 text-slate-300 sm:p-8">
              <h2 className="text-xl font-semibold text-white">Konfiguracja na Vercel</h2>
              <p className="mt-4">
                Panel wymaga zmiennych środowiskowych. Hasło logowania nie jest zapisane w kodzie.
              </p>
              <div className="mt-5 space-y-2 rounded-lg border border-white/10 bg-slate-950/60 p-4 font-mono text-xs text-slate-200">
                <p>ADMIN_PASSWORD</p>
                <p>ADMIN_SESSION_SECRET</p>
                <p>UPSTASH_REDIS_REST_URL</p>
                <p>UPSTASH_REDIS_REST_TOKEN</p>
              </div>
            </aside>
          </section>
        ) : null}

        {report ? (
          <section className="mt-10 space-y-8">
            {!report.configured ? (
              <div className="rounded-lg border border-rose-200/20 bg-rose-200/[0.07] p-5 text-sm leading-7 text-slate-200">
                Raport jest gotowy, ale storage odwiedzin nie jest jeszcze skonfigurowany. Dodaj na Vercel zmienne
                `UPSTASH_REDIS_REST_URL` i `UPSTASH_REDIS_REST_TOKEN`, a statystyki zaczną się zapisywać.
              </div>
            ) : null}

            <div className="grid gap-4 md:grid-cols-4">
              {[
                { label: "Odsłony strony", value: report.pageViews },
                { label: "Wejścia w sekcje", value: report.sectionViews },
                { label: "Unikalni dzisiaj", value: report.uniqueToday },
                { label: "Ostatnie zdarzenia", value: report.recent.length }
              ].map((item) => (
                <article key={item.label} className="premium-card p-5">
                  <BarChart3 className="text-rose-100" size={20} aria-hidden="true" />
                  <p className="mt-5 text-3xl font-semibold text-white">{formatNumber(item.value)}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="premium-card p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-white">Odwiedziny z ostatnich 14 dni</h2>
                <div className="mt-6 space-y-3">
                  {report.daily.map((item) => (
                    <div key={item.date} className="grid grid-cols-[5rem_1fr_4rem] items-center gap-3 text-sm">
                      <span className="text-slate-400">{formatDate(item.date)}</span>
                      <div className="h-3 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-200 via-rose-200 to-sky-200"
                          style={{ width: `${Math.max((item.views / maxDailyViews) * 100, item.views ? 8 : 0)}%` }}
                        />
                      </div>
                      <span className="text-right text-slate-200">{formatNumber(item.views)}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="premium-card p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-white">Urządzenia</h2>
                <div className="mt-6 space-y-4">
                  {report.devices.length ? (
                    report.devices.map((item) => (
                      <div key={item.device} className="flex items-center justify-between gap-4 text-sm">
                        <span className="capitalize text-slate-300">{deviceLabel(item.device)}</span>
                        <span className="font-semibold text-white">{formatNumber(item.views)}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400">Brak danych.</p>
                  )}
                </div>
              </article>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="premium-card p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-white">Najczęściej oglądane ścieżki</h2>
                <div className="mt-6 space-y-4">
                  {report.paths.length ? (
                    report.paths.map((item) => (
                      <div key={item.path} className="flex items-center justify-between gap-4 text-sm">
                        <span className="break-all text-slate-300">{item.path}</span>
                        <span className="font-semibold text-white">{formatNumber(item.views)}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400">Brak danych.</p>
                  )}
                </div>
              </article>

              <article className="premium-card p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-white">Ostatnie zdarzenia</h2>
                <div className="mt-6 space-y-4">
                  {report.recent.length ? (
                    report.recent.map((item) => (
                      <div key={`${item.timestamp}-${item.path}`} className="border-b border-white/10 pb-3 text-sm last:border-0">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-semibold text-white">{item.path}</span>
                          <span className="text-xs text-slate-500">{formatDateTime(item.timestamp)}</span>
                        </div>
                        <p className="mt-1 text-slate-400">
                          {item.eventType === "page_view" ? "odsłona" : "sekcja"} · {deviceLabel(item.device)} ·{" "}
                          {item.language.toUpperCase()} · {item.referrerHost}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400">Brak danych.</p>
                  )}
                </div>
              </article>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}

