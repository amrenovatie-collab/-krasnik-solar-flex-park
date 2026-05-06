import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  Building2,
  Factory,
  LandPlot,
  Leaf,
  Mail,
  MapPin,
  Network,
  Phone,
  PlugZap,
  ShieldCheck,
  SunMedium,
  TrendingUp,
  UsersRound,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const contactHref =
  "mailto:adrian@krasniksolarflexpark.pl?subject=Kraśnik Solar Flex Park - zapytanie";

const images = {
  hero: "/images/hero-pv-bess.png",
  solar: "/images/solar-landscape.png",
  bess: "/images/bess-containers.png",
  grid: "/images/grid-bess.png",
  development: "/images/development-model.png"
};

const navItems = [
  { label: "O projekcie", href: "#o-projekcie" },
  { label: "Region", href: "#region" },
  { label: "Model rozwoju", href: "#model-rozwoju" },
  { label: "Współpraca", href: "#wspolpraca" },
  { label: "Kontakt", href: "#kontakt" }
];

const featureTiles = [
  { title: "PV", label: "Fotowoltaika", icon: SunMedium },
  { title: "BESS", label: "Magazyn energii", icon: BatteryCharging },
  { title: "Elastyczność", label: "sieci", icon: Network },
  { title: "Rozwój", label: "etapowy", icon: TrendingUp }
];

const projectCards = [
  {
    title: "Fotowoltaika",
    text: "Instalacja PV planowana etapowo — od mniejszego, bankowalnego wariantu startowego do dalszej rozbudowy po potwierdzeniu warunków technicznych i finansowych.",
    image: images.solar,
    alt: "Panele fotowoltaiczne w krajobrazie rolniczym",
    icon: SunMedium
  },
  {
    title: "Magazyn energii",
    text: "Magazyn energii ma wspierać elastyczność projektu, poprawę profilu energetycznego i przyszłe możliwości rynkowe.",
    image: images.bess,
    alt: "Kontenery bateryjnego magazynu energii",
    icon: BatteryCharging
  },
  {
    title: "Podejście grid-first",
    text: "Strategia rozwoju projektu zakłada priorytet dla kontroli nad gruntem, wykonalności przyłącza, rozmów z operatorem oraz etapowania mocy zamiast spekulacyjnych zakupów sprzętu.",
    image: images.grid,
    alt: "Infrastruktura sieci elektroenergetycznej",
    icon: PlugZap
  }
];

const regionCards = [
  {
    title: "Energetyczny kierunek regionu",
    text: "W okolicach Kraśnika rozwijana jest infrastruktura elektroenergetyczna. Modernizacja i rozbudowa stacji GPZ Budzyń 110/30/15 kV była związana z przyłączeniem farmy wiatrowej o mocy 24,15 MW, co potwierdza znaczenie regionu dla nowych projektów OZE.",
    icon: Factory
  },
  {
    title: "Potencjał dla PV + BESS",
    text: "Projekt hybrydowy łączący fotowoltaikę i magazyn energii odpowiada na rosnącą potrzebę elastyczności systemowej, lepszego profilu produkcji oraz lokalnego bilansowania energii.",
    icon: BatteryCharging
  },
  {
    title: "Logistyka i dostępność",
    text: "Region korzysta z poprawy dostępności transportowej, rozwoju infrastruktury drogowej oraz zaplecza logistycznego. Rozwój infrastruktury transportowej wzmacnia gospodarczy profil województwa.",
    icon: Network
  },
  {
    title: "Instrumenty wsparcia",
    text: "Województwo lubelskie posiada instrumenty finansowania związane z OZE, efektywnością energetyczną i rozwojem gospodarki niskoemisyjnej. Projekt będzie analizowany pod kątem dostępnych pożyczek, finansowania publicznego i partnerstw inwestycyjnych.",
    icon: ShieldCheck
  }
];

const timeline = [
  {
    number: "01",
    title: "SPV i organizacja projektu",
    text: "Dedykowana spółka celowa, podstawy ładu projektowego oraz profesjonalna infrastruktura komunikacyjna."
  },
  {
    number: "02",
    title: "Kontrola nad gruntem",
    text: "List intencyjny, opcja zakupu albo dzierżawa warunkowa przed podjęciem decyzji o pełnym wejściu kapitałowym."
  },
  {
    number: "03",
    title: "Koncepcja techniczna i przyłączeniowa",
    text: "Model PV + BESS, warianty mocy oraz przygotowanie ścieżki przyłączeniowej."
  },
  {
    number: "04",
    title: "Finansowanie",
    text: "Kapitał pre-development, następnie finansowanie OZE, inwestor branżowy albo finansowanie projektowe."
  }
];

const stagedSteps = [
  "Etap 1: lokalizacja + SPV + koncepcja",
  "Etap 2: przyłącze + finansowanie + partnerzy",
  "Etap 3: budowa / sprzedaż projektu / skalowanie"
];

const cooperationCards = [
  {
    title: "Właściciele gruntów",
    text: "Poszukujemy właścicieli gruntów otwartych na rozmowę o opcji, dzierżawie warunkowej lub modelu współpracy projektowej.",
    image: images.solar,
    icon: LandPlot
  },
  {
    title: "Inwestorzy",
    text: "Szukamy inwestorów pre-development zainteresowanych wejściem w projekt infrastruktury energetycznej na wczesnym etapie.",
    image: images.development,
    icon: TrendingUp
  },
  {
    title: "Partnerzy techniczni",
    text: "EPC, integratorzy BESS, doradcy techniczni i partnerzy zdolni wesprzeć bankowalny rozwój projektu.",
    image: images.bess,
    icon: Factory
  },
  {
    title: "Partnerzy rynku energii",
    text: "Optymalizatorzy, traderzy energii, partnerzy PPA i podmioty związane z rynkiem bilansującym.",
    image: images.grid,
    icon: Network
  }
];

const contactItems = [
  { label: "E-mail", value: "adrian@krasniksolarflexpark.pl", icon: Mail },
  { label: "Telefon", value: "+48 XXX XXX XXX", icon: Phone },
  { label: "Strona", value: "www.krasniksolarflexpark.pl", icon: Network },
  { label: "Status", value: "Projekt na etapie pre-development | SPV w organizacji", icon: Building2 }
];

function IconBadge({ icon: Icon, compact = false }: { icon: LucideIcon; compact?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border border-emerald-400/[0.35] bg-emerald-400/10 text-emerald-300 shadow-glow ${
        compact ? "h-10 w-10" : "h-12 w-12"
      }`}
    >
      <Icon size={compact ? 18 : 22} strokeWidth={1.8} aria-hidden="true" />
    </span>
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

function HeroImagePanel() {
  return (
    <div className="hero-photo-panel">
      <Image
        src={images.hero}
        alt="Park fotowoltaiczny z bateryjnym magazynem energii"
        fill
        priority
        sizes="(min-width: 1024px) 52vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.16),rgba(2,6,23,0.18)_40%,rgba(2,6,23,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(74,222,128,0.26),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.72)_84%)]" />

      <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
        {["PV", "BESS", "SPV"].map((item) => (
          <div key={item} className="rounded-lg border border-white/[0.12] bg-slate-950/[0.65] p-4 backdrop-blur-xl">
            <p className="text-lg font-semibold text-white">{item}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-emerald-200/80">
              analiza
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageProjectCard({ card }: { card: (typeof projectCards)[number] }) {
  return (
    <article className="image-card group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          sizes="(min-width: 1024px) 24vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.84))]" />
        <div className="absolute bottom-4 left-4">
          <IconBadge icon={card.icon} compact />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{card.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
      </div>
    </article>
  );
}

function BackgroundCard({ card }: { card: (typeof cooperationCards)[number] }) {
  return (
    <article className="image-card min-h-[280px]">
      <Image
        src={card.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 25vw, 100vw"
        className="object-cover opacity-[0.48]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.24),rgba(2,6,23,0.96))]" />
      <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-6">
        <IconBadge icon={card.icon} compact />
        <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-night text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_9%,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(56,189,248,0.11),transparent_30%),linear-gradient(180deg,#020617_0%,#030712_48%,#07111f_100%)]" />
      <div className="fixed inset-0 -z-10 energy-grid opacity-30" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/[0.82] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Kraśnik Solar Flex Park">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/[0.35] bg-emerald-400/10 text-emerald-300 shadow-glow">
              <Leaf size={20} aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
              Kraśnik Solar Flex Park
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href={contactHref} className="hidden rounded-lg border border-emerald-400/60 px-5 py-2.5 text-sm font-bold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-200 md:inline-flex">
            Skontaktuj się
          </a>
        </div>
      </header>

      <section id="top" className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020617_0%,rgba(2,6,23,0.94)_46%,rgba(2,6,23,0.62)_100%)] lg:w-[58%]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-20">
          <div className="relative z-10">
            <h1 className="text-6xl font-semibold leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Kraśnik
              <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-emerald-400 to-sky-300 bg-clip-text text-transparent">
                Solar Flex Park
              </span>
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-200">
              {["Etap pre-development", "Woj. lubelskie", "SPV w organizacji"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full border border-emerald-300 bg-emerald-400/20" />
                  {item}
                </span>
              ))}
            </div>

            <h2 className="mt-8 max-w-3xl text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl">
              Hybrydowy projekt fotowoltaiki i magazynu energii w regionie Kraśnika.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Kraśnik Solar Flex Park to etapowo rozwijany projekt infrastruktury
              energetycznej łączący fotowoltaikę, magazyn energii oraz
              elastyczność systemową. Projekt przygotowywany jest w formule
              dedykowanej spółki celowej SPV.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={contactHref} className="primary-button">
                Skontaktuj się
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#o-projekcie" className="secondary-button">
                Dowiedz się więcej
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <HeroImagePanel />

          <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {featureTiles.map((item) => (
              <article key={item.title} className="feature-card">
                <IconBadge icon={item.icon} compact />
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              label="O PROJEKCIE"
              title="Etapowy projekt PV + BESS skoncentrowany na elastyczności energetycznej."
              text="Projekt znajduje się obecnie na etapie analizy lokalizacji, rozmów dotyczących zabezpieczenia gruntu, weryfikacji możliwości przyłączeniowych oraz przygotowania ścieżki finansowania."
            />
            <div className="mt-9 rounded-lg border border-emerald-300/15 bg-emerald-300/[0.06] p-5 text-sm leading-7 text-slate-300">
              Komunikacja projektu pozostaje ostrożna: obecny etap nie oznacza
              uzyskania finansowania, pozwoleń, przyłącza ani rozpoczęcia budowy.
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {projectCards.map((card) => (
              <ImageProjectCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section id="region" className="section-shell overflow-hidden bg-slate-950/[0.42]">
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <Image
            src={images.grid}
            alt="Sieć elektroenergetyczna jako kontekst dla projektu PV i BESS"
            fill
            sizes="46vw"
            className="object-cover opacity-[0.38]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#020617_0%,rgba(2,6,23,0.82)_34%,rgba(2,6,23,0.94)_100%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            label="REGIONALNY KONTEKST"
            title="Lubelskie jako rosnący region dla infrastruktury energetycznej i elastyczności systemowej."
            text="Województwo lubelskie łączy dostępność terenów, rozwijającą się infrastrukturę energetyczną, zaplecze logistyczne oraz instrumenty wsparcia dla transformacji energetycznej. Dla projektu PV + BESS oznacza to możliwość budowania wartości nie tylko przez produkcję energii, ale także przez elastyczność, magazynowanie i lepsze wykorzystanie lokalnej infrastruktury sieciowej."
          />

          <div>
            <div className="mb-6 overflow-hidden rounded-lg border border-sky-300/15 lg:hidden">
              <Image
                src={images.grid}
                alt="Infrastruktura sieciowa w regionie"
                width={1448}
                height={1086}
                className="h-64 w-full object-cover"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {regionCards.map((card) => (
                <article key={card.title} className="premium-card">
                  <IconBadge icon={card.icon} compact />
                  <h3 className="mt-6 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
                </article>
              ))}
            </div>

            <p className="mt-5 rounded-lg border border-sky-300/20 bg-sky-300/[0.06] p-4 text-sm leading-6 text-slate-300">
              Projekt znajduje się na etapie pre-development. Informacje
              regionalne stanowią kontekst inwestycyjny i nie oznaczają
              uzyskania przyłącza, finansowania ani decyzji administracyjnych.
            </p>
          </div>
        </div>
      </section>

      <section id="model-rozwoju" className="section-shell">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeader
              label="MODEL ROZWOJU"
              title="Projekt strukturyzowany jako SPV z jasno określonymi kamieniami milowymi."
              text="Bezpośrednim celem jest zabezpieczenie praw do gruntu, potwierdzenie zgodności planistycznej, przygotowanie ścieżki przyłączeniowej oraz zorganizowanie finansowania pre-development."
            />

            <div className="relative min-h-[310px] overflow-hidden rounded-lg border border-emerald-300/[0.18] shadow-glow">
              <Image
                src={images.development}
                alt="Wizualizacja etapowego modelu rozwoju projektu energetycznego"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.18),rgba(2,6,23,0.76)),radial-gradient(circle_at_70%_32%,rgba(74,222,128,0.24),transparent_30%)]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/[0.12] bg-slate-950/70 p-5 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.22em] text-emerald-300">
                  Rozwój etapowy projektu
                </p>
                <div className="mt-4 grid gap-3">
                  {stagedSteps.map((step) => (
                    <div key={step} className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
            <div className="absolute left-8 right-8 top-8 hidden h-px bg-gradient-to-r from-emerald-400/0 via-emerald-300/[0.55] to-sky-300/0 lg:block" />
            {timeline.map((item) => (
              <article key={item.number} className="timeline-card">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/[0.35] bg-slate-950 text-xl font-semibold text-emerald-300 shadow-glow">
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeader
            label="WSPÓŁPRACA"
            title="Aktualnie poszukujemy partnerów na wczesnym etapie rozwoju projektu."
            text="Projekt jest rozwijany w formule otwartej na rozmowy z właścicielami gruntów, inwestorami pre-development, partnerami technicznymi oraz podmiotami rynku energii."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {cooperationCards.map((card) => (
              <BackgroundCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="border-t border-white/10 bg-slate-950/[0.62]">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[0.85fr_1fr_0.86fr]">
          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[430px]">
            <Image
              src={images.hero}
              alt="Fotowoltaika i magazyn energii w projekcie Kraśnik Solar Flex Park"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.08),rgba(2,6,23,0.78)),linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.78))]" />
          </div>

          <div className="px-5 py-16 lg:px-12 lg:py-20">
            <SectionHeader
              label="KONTAKT"
              title="Porozmawiajmy o gruncie, inwestycji, współpracy technicznej lub partnerstwie energetycznym."
              text="Kraśnik Solar Flex Park znajduje się na etapie pre-development. Obecnie koncentrujemy się na zabezpieczeniu lokalizacji, analizie przyłącza, strukturze SPV oraz rozmowach z partnerami."
            />
            <a href={contactHref} className="primary-button mt-8">
              Napisz do nas
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <aside className="m-5 self-center rounded-lg border border-emerald-300/[0.18] bg-slate-950/[0.74] p-7 shadow-glow backdrop-blur-xl lg:m-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Karta kontaktowa
            </p>
            <h3 className="mt-5 text-2xl font-semibold text-white">Adrian Mazur</h3>
            <p className="mt-1 text-slate-400">Founder / Sponsor Projektu</p>

            <div className="mt-7 space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <item.icon className="mt-0.5 shrink-0 text-emerald-300" size={18} aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                    <p className="mt-1 break-words text-sm text-slate-200">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Kraśnik Solar Flex Park. Projekt na etapie pre-development. SPV w organizacji.</p>
          <p className="max-w-2xl">
            Informacje na stronie mają charakter informacyjny i nie stanowią
            oferty inwestycyjnej ani gwarancji realizacji projektu.
          </p>
        </div>
      </footer>
    </main>
  );
}
