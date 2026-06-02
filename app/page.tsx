"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  Building2,
  Factory,
  LandPlot,
  Leaf,
  Mail,
  Menu,
  Network,
  Phone,
  PlugZap,
  ShieldCheck,
  SunMedium,
  TrendingUp,
  X
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  defaultLanguage,
  languages,
  translations
} from "../src/i18n/translations";
import type { Language } from "../src/i18n/translations";

const storageKey = "ksfp-language";
const contactEmail = "adrian@krasniksolarflexpark.pl";

const images = {
  hero: "/images/hero-pv-bess.png",
  solar: "/images/solar-landscape.png",
  bess: "/images/bess-containers.png",
  grid: "/images/grid-bess.png",
  development: "/images/development-model.png",
  developmentEn: "/images/development-model-en.png"
};

const featureIcons = [SunMedium, BatteryCharging, Network, TrendingUp] as const;

const projectCardVisuals = [
  {
    image: images.solar,
    icon: SunMedium
  },
  {
    image: images.bess,
    icon: BatteryCharging
  },
  {
    image: images.grid,
    icon: PlugZap
  }
] as const;

const regionIcons = [Factory, BatteryCharging, Network, ShieldCheck] as const;

const cooperationCardVisuals = [
  {
    image: images.solar,
    icon: LandPlot
  },
  {
    image: images.hero,
    icon: TrendingUp
  },
  {
    image: images.bess,
    icon: Factory
  },
  {
    image: images.grid,
    icon: Network
  }
] as const;

const contactIcons = [Mail, Phone, Network, Building2] as const;

function isLanguage(value: string | null): value is Language {
  return languages.some((language) => language.code === value);
}

function IconBadge({ icon: Icon, compact = false }: { icon: LucideIcon; compact?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border border-rose-200/[0.26] bg-[linear-gradient(135deg,rgba(34,197,94,0.12),rgba(244,114,182,0.13))] text-rose-100 shadow-glow ${
        compact ? "h-10 w-10" : "h-12 w-12"
      }`}
    >
      <Icon size={compact ? 18 : 22} strokeWidth={1.8} aria-hidden="true" />
    </span>
  );
}

function LanguageSwitcher({
  activeLanguage,
  ariaLabel,
  onChange
}: {
  activeLanguage: Language;
  ariaLabel: string;
  onChange: (language: Language) => void;
}) {
  return (
    <div
      aria-label={ariaLabel}
      className="flex shrink-0 items-center rounded-lg border border-white/10 bg-white/[0.04] p-1"
      role="group"
    >
      {languages.map((language) => {
        const isActive = activeLanguage === language.code;

        return (
          <button
            key={language.code}
            type="button"
            aria-label={language.ariaLabel}
            aria-pressed={isActive}
            onClick={() => onChange(language.code)}
            className={`h-9 w-10 rounded-md text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-emerald-300 ${
              isActive
                ? "bg-gradient-to-r from-emerald-200 via-rose-200 to-sky-200 text-slate-950 shadow-glow"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}

function SectionHeader({
  label,
  title,
  text,
  className = ""
}: {
  label: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="section-label">{label}</p>
      <h2 className="section-heading">{title}</h2>
      {text ? <p className="section-lead">{text}</p> : null}
    </div>
  );
}

function HeroImagePanel({
  alt,
  metrics
}: {
  alt: string;
  metrics: Array<{ title: string; caption: string }>;
}) {
  return (
    <div className="hero-photo-panel">
      <Image
        src={images.hero}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 52vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.16),rgba(2,6,23,0.18)_40%,rgba(2,6,23,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(244,114,182,0.22),transparent_30%),radial-gradient(circle_at_42%_18%,rgba(74,222,128,0.16),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.72)_84%)]" />

      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-3">
        {metrics.map((item) => (
          <div key={item.title} className="rounded-lg border border-white/[0.12] bg-slate-950/[0.65] p-3 backdrop-blur-xl sm:p-4">
            <p className="text-base font-semibold text-white sm:text-lg">{item.title}</p>
            <p className="mt-1 hidden text-xs uppercase tracking-[0.18em] text-rose-100/80 min-[390px]:block">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageProjectCard({
  alt,
  icon,
  image,
  text,
  title
}: {
  alt: string;
  icon: LucideIcon;
  image: string;
  text: string;
  title: string;
}) {
  return (
    <article className="image-card group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 24vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.84))]" />
        <div className="absolute bottom-4 left-4">
          <IconBadge icon={icon} compact />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
      </div>
    </article>
  );
}

function BackgroundCard({
  icon,
  image,
  text,
  title
}: {
  icon: LucideIcon;
  image: string;
  text: string;
  title: string;
}) {
  return (
    <article className="image-card min-h-[280px]">
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 25vw, 100vw"
        className="object-cover opacity-[0.48]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.24),rgba(2,6,23,0.96))]" />
      <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-6">
        <IconBadge icon={icon} compact />
        <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
      </div>
    </article>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];
  const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent(t.contact.mailSubject)}`;

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(storageKey);

    if (isLanguage(storedLanguage)) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
    document.title = t.seo.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');

    if (description) {
      description.content = t.seo.description;
    }
  }, [language, t.seo.description, t.seo.title]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="min-h-screen overflow-hidden bg-night text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_9%,rgba(34,197,94,0.12),transparent_28%),radial-gradient(circle_at_72%_12%,rgba(244,114,182,0.13),transparent_28%),radial-gradient(circle_at_90%_28%,rgba(56,189,248,0.1),transparent_32%),linear-gradient(180deg,#020617_0%,#030712_48%,#07111f_100%)]" />
      <div className="fixed inset-0 -z-10 energy-grid opacity-30" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/[0.82] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 lg:px-8">
          <a href="#top" onClick={closeMenu} className="flex min-w-0 items-center gap-3" aria-label={t.brand}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-rose-200/[0.26] bg-[linear-gradient(135deg,rgba(34,197,94,0.12),rgba(244,114,182,0.13))] text-rose-100 shadow-glow sm:h-10 sm:w-10">
              <Leaf size={20} aria-hidden="true" />
            </span>
            <span className="max-w-[12rem] truncate text-sm font-semibold tracking-wide text-white min-[390px]:max-w-[14rem] sm:max-w-none sm:text-base">
              {t.brand}
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            {t.nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher
                activeLanguage={language}
                ariaLabel={t.languageLabel}
                onChange={handleLanguageChange}
              />
            </div>
            <a href={contactHref} className="hidden rounded-lg border border-rose-200/45 px-5 py-2.5 text-sm font-bold text-rose-100 transition hover:bg-gradient-to-r hover:from-emerald-200 hover:via-rose-200 hover:to-sky-200 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-rose-200 lg:inline-flex">
              {t.cta.contact}
            </a>
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-100 transition hover:border-rose-200/45 hover:bg-rose-200/10 focus:outline-none focus:ring-2 focus:ring-rose-200 lg:hidden"
            >
              {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`max-h-[calc(100svh-64px)] overflow-y-auto lg:hidden ${
            menuOpen ? "block" : "hidden"
          } border-t border-white/10 bg-slate-950/[0.96] px-4 pb-5 pt-4 shadow-2xl sm:px-5`}
        >
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-base font-semibold text-slate-100 transition hover:border-rose-200/35 hover:bg-rose-200/10"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
            <LanguageSwitcher
              activeLanguage={language}
              ariaLabel={t.languageLabel}
              onChange={handleLanguageChange}
            />
            <a href={contactHref} onClick={closeMenu} className="primary-button w-full sm:w-auto">
              {t.cta.contact}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020617_0%,rgba(2,6,23,0.94)_46%,rgba(2,6,23,0.62)_100%)] lg:w-[58%]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 md:gap-10 md:px-8 lg:min-h-[calc(100svh-73px)] lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-20">
          <div className="relative z-10">
            <h1 className="text-[3.05rem] font-semibold leading-[1] tracking-normal text-rose-100 min-[390px]:text-[3.35rem] sm:text-7xl md:text-[5rem] lg:text-8xl">
              {t.hero.titleLineOne}
              <span className="mt-2 block bg-gradient-to-r from-pink-200 via-rose-300 to-fuchsia-200 bg-clip-text text-transparent">
                {t.hero.titleLineTwo}
              </span>
            </h1>

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-200 sm:mt-6 sm:gap-4">
              {t.hero.meta.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full border border-rose-200 bg-gradient-to-br from-emerald-300/45 to-rose-300/45" />
                  {item}
                </span>
              ))}
            </div>

            <h2 className="mt-7 max-w-3xl text-2xl font-semibold leading-tight text-slate-100 sm:text-3xl md:text-4xl lg:mt-8">
              {t.hero.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mt-6">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-9">
              <a href={contactHref} className="primary-button w-full sm:w-auto">
                {t.cta.contact}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#o-projekcie" className="secondary-button w-full sm:w-auto">
                {t.cta.learnMore}
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <HeroImagePanel alt={t.hero.imageAlt} metrics={[...t.hero.metrics]} />

          <div className="relative z-10 grid gap-3 min-[430px]:grid-cols-2 sm:gap-4 lg:col-span-2 lg:grid-cols-4">
            {t.features.map((item, index) => (
              <article key={item.title} className="feature-card">
                <IconBadge icon={featureIcons[index]} compact />
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="o-projekcie" className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-8 md:gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              label={t.project.label}
              title={t.project.title}
              text={t.project.description}
            />
            <div className="mt-7 rounded-lg border border-rose-200/15 bg-[linear-gradient(135deg,rgba(34,197,94,0.06),rgba(244,114,182,0.08))] p-4 text-sm leading-7 text-slate-300 sm:p-5 lg:mt-9">
              {t.project.note}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {t.project.cards.map((card, index) => (
              <ImageProjectCard
                key={card.title}
                alt={card.alt}
                icon={projectCardVisuals[index].icon}
                image={projectCardVisuals[index].image}
                text={card.text}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="region" className="section-shell overflow-hidden bg-slate-950/[0.42]">
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <Image
            src={images.grid}
            alt={t.region.backgroundAlt}
            fill
            sizes="46vw"
            className="object-cover opacity-[0.38]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#020617_0%,rgba(2,6,23,0.82)_34%,rgba(2,6,23,0.94)_100%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-8 md:gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12">
          <SectionHeader
            label={t.region.label}
            title={t.region.title}
            text={t.region.lead}
          />

          <div>
            <div className="mb-6 overflow-hidden rounded-lg border border-sky-300/15 lg:hidden">
              <Image
                src={images.grid}
                alt={t.region.mobileImageAlt}
                width={1448}
                height={1086}
                className="h-64 w-full object-cover"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.region.cards.map((card, index) => (
                <article key={card.title} className="premium-card">
                  <IconBadge icon={regionIcons[index]} compact />
                  <h3 className="mt-6 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
                </article>
              ))}
            </div>

            <p className="mt-5 rounded-lg border border-sky-300/20 bg-sky-300/[0.06] p-4 text-sm leading-6 text-slate-300">
              {t.region.disclaimer}
            </p>
          </div>
        </div>
      </section>

      <section id="model-rozwoju" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeader
              label={t.model.label}
              title={t.model.title}
              text={t.model.description}
            />

            <div className="relative">
              <Image
                src={language === "en" ? images.developmentEn : images.development}
                alt={t.model.imageAlt}
                width={1672}
                height={941}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-rose-200/[0.16] bg-[linear-gradient(135deg,rgba(15,23,42,0.72),rgba(244,114,182,0.08))] p-4 shadow-glow backdrop-blur-xl sm:p-5 lg:mt-10">
            <p className="text-sm uppercase tracking-[0.22em] text-rose-100">
              {t.model.stagedLabel}
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {t.model.stagedSteps.map((step) => (
                <div key={step} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-emerald-300 to-rose-300" />
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            <div className="absolute left-8 right-8 top-8 hidden h-px bg-gradient-to-r from-emerald-400/0 via-rose-200/[0.58] to-sky-300/0 lg:block" />
            {t.model.timeline.map((item) => (
              <article key={item.number} className="timeline-card">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-rose-200/[0.35] bg-slate-950 text-xl font-semibold text-rose-100 shadow-glow">
                  {item.number}
                </div>
                <h3 className="mt-7 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="wspolpraca" className="section-shell bg-slate-950/[0.42]">
        <div className="mx-auto grid max-w-7xl gap-8 md:gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <SectionHeader
            label={t.cooperation.label}
            title={t.cooperation.title}
            text={t.cooperation.description}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {t.cooperation.cards.map((card, index) => (
              <BackgroundCard
                key={card.title}
                icon={cooperationCardVisuals[index].icon}
                image={cooperationCardVisuals[index].image}
                text={card.text}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="border-t border-white/10 bg-slate-950/[0.62]">
        <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-2 lg:grid-cols-[0.85fr_1fr_0.86fr]">
          <div className="relative min-h-[260px] overflow-hidden sm:min-h-[320px] md:min-h-[520px] lg:min-h-[430px]">
            <Image
              src={images.solar}
              alt={t.contact.imageAlt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.08),rgba(2,6,23,0.78)),linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.78))]" />
          </div>

          <div className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
            <SectionHeader
              label={t.contact.label}
              title={t.contact.title}
              text={t.contact.description}
            />
            <a href={contactHref} className="primary-button mt-8 w-full sm:w-auto">
              {t.cta.write}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <aside className="m-4 self-center rounded-lg border border-rose-200/[0.18] bg-[linear-gradient(135deg,rgba(15,23,42,0.78),rgba(244,114,182,0.08))] p-5 shadow-glow backdrop-blur-xl sm:m-6 sm:p-7 md:col-span-2 lg:col-span-1 lg:m-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-100">
              {t.contact.cardLabel}
            </p>
            <h3 className="mt-5 text-2xl font-semibold text-white">{t.contact.name}</h3>
            <p className="mt-1 text-slate-400">{t.contact.role}</p>

            <div className="mt-7 space-y-4">
              {t.contact.items.map((item, index) => {
                const Icon = contactIcons[index];

                return (
                  <div key={item.label} className="flex gap-3">
                    <Icon className="mt-0.5 shrink-0 text-rose-100" size={18} aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                      <p className="mt-1 break-words text-sm text-slate-200">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-7 sm:px-5 sm:py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{t.footer.copyright}</p>
          <p className="max-w-2xl">{t.footer.disclaimer}</p>
        </div>
      </footer>
    </main>
  );
}
