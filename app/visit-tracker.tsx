"use client";

import { useEffect } from "react";
import type { Language } from "../src/i18n/translations";

const visitorStorageKey = "ksfp-visitor-id";

function getVisitorId() {
  const existingId = window.localStorage.getItem(visitorStorageKey);

  if (existingId) {
    return existingId;
  }

  const newId =
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  window.localStorage.setItem(visitorStorageKey, newId);

  return newId;
}

function sendVisit(eventType: "page_view" | "section_view", language: Language) {
  const payload = JSON.stringify({
    eventType,
    language,
    path: `${window.location.pathname}${window.location.hash}`,
    referrer: document.referrer,
    visitorId: getVisitorId()
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/analytics/track", new Blob([payload], { type: "application/json" }));
    return;
  }

  fetch("/api/analytics/track", {
    body: payload,
    headers: {
      "Content-Type": "application/json"
    },
    keepalive: true,
    method: "POST"
  }).catch(() => null);
}

export function VisitTracker({ language }: { language: Language }) {
  useEffect(() => {
    sendVisit("page_view", language);

    const handleHashChange = () => {
      sendVisit("section_view", language);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [language]);

  return null;
}

