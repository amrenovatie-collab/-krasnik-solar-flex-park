import Image from "next/image";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  Factory,
  LandPlot,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Network,
  Phone,
  PlugZap,
  ShieldCheck,
  SunMedium,
  TrendingUp,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const contactHref =
  "mailto:adrian@krasniksolarflexpark.pl?subject=Kraśnik Solar Flex Park - zapytanie";

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
  { title: "Elastyczność", label: "Sieci", icon: Network },
  { title: "Rozwój", label: "Etapowy", icon: TrendingUp }
];

const projectArguments = [
  "Analiza lokalizacji i rozmowy dotyczące zabezpieczenia gruntu.",
  "Weryfikacja możliwości przyłączeniowych oraz wariantów PV + BESS.",
  "Przygotowanie ścieżki finansowania pre-development i struktury SPV.",
  "Etapowanie projektu bez deklarowania zatwierdzonych mocy."
];

const projectCards = [
  {
    title: "Fotowoltaika",
    text: "Instalacja PV planowana etapowo — od mniejszego, bankowalnego wariantu startowego do dalszej rozbudowy po potwierdzeniu warunków technicznych i finansowych.",
    icon: SunMedium
  },
  {
    title: "Magazyn energii",
    text: "Magazyn energii ma wspierać elastyczność projektu, poprawę profilu energetycznego i przyszłe możliwości rynkowe.",
    icon: BatteryCharging
  },
  {
    title: "Podejście sieciowe",
    text: "Strategia rozwoju projektu zakłada priorytet dla kontroli nad gruntem, wykonalności przyłącza, rozmów z operatorem oraz etapowania mocy zamiast spekulacyjnych zakupów sprzętu.",
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
    icon: LandPlot
  },
  {
    title: "Inwestorzy",
    text: "Szukamy inwestorów pre-development zainteresowanych wejściem w projekt infrastruktury energetycznej na wczesnym etapie.",
    icon: TrendingUp
  },
  {
    title: "Partnerzy techniczni",
    text: "EPC, integratorzy BESS, doradcy techniczni i partnerzy zdolni wesprzeć bankowalny rozwój projektu.",
    icon: Factory
  },
  {
    title: "Partnerzy rynku energii",
    text: "Optymalizatorzy, traderzy energii, partnerzy PPA i podmioty związane z rynkiem bilansującym.",
    icon: Network
  }
];

const contactItems = [
  { label: "E-mail", value: "adrian@krasniksolarflexpark.pl", icon: Mail },
  { label: "Telefon", value: "+48 XXX XXX XXX", icon: Phone },
  { label: "Lokalizacja", value: "Kraśnik, woj. lubelskie", icon: MapPin },
  { label: "Status", value: "Pre-development | SPV w organizacji", icon: Building2 }
];

function SectionHeader({
  label,
  title,
  text
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="section-label">{label}</p>
      <h2 className="section-heading">{title}</h2>
      {text ? <p className="section-lead">{text}</p> : null}
    </div>
  );
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
      <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
    </div>
  );
}

function EnergyVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-emerald-300/20 bg-slate-950/[0.78] shadow-glow ${
        compact ? "min-h-[300px]" : "min-h-[520px]"
      }`}
    >
      <Image
        src="/images/krasnik-solar-flex-park-hero.png"
        alt="Wizualizacja parku fotowoltaicznego z magazynem energii"
        fill
        priority={!compact}
        sizes={compact ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
        className="object-cover opacity-[0.74]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(34,197,94,0.25),transparent_34%),linear-gradient(145deg,rgba(2,6,23,0.34),rgba(2,6,23,0.92)_78%)]" />
      <div className="absolute inset-0 energy-grid opacity-60" />

      <div className="absolute left-5 right-5 top-5 grid grid-cols-3 gap-3 text-xs text-slate-200/[0.82]">
        {["PV", "BESS", "SIEĆ"].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/10 bg-slate-950/[0.68] px-3 py-2 backdrop-blur"
          >
            <span className="block font-semibold text-emerald-300">{item}</span>
            <span className="text-[0.68rem] uppercase tracking-[0.2em] text-slate-400">
              analiza
            </span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-sky-300/20 bg-slate-950/[0.74] p-4 backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-sky-200/[0.78]">
              panel energii
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Profil PV + magazynowanie
            </p>
          </div>
          <Zap className="text-emerald-300" size={22} aria-hidden="true" />
        </div>
        <div className="grid grid-cols-12 items-end gap-1.5">
          {[30, 44, 58, 72, 86, 78, 64, 52, 70, 84, 62, 42].map((height, index) => (
            <div
              key={`${height}-${index}`}
              className="rounded-t bg-gradient-to-t from-sky-500/50 to-emerald-300"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-night text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_8%,rgba(34,197,94,0.15),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.13),transparent_32%),linear-gradient(180deg,#020617_0%,#030712_45%,#07111f_100%)]" />
      <div className="fixed inset-0 -z-10 energy-grid opacity-30" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/[0.72] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Kraśnik Solar Flex Park">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10 text-emerald-300 shadow-glow">
              <Leaf size={20} aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
              Kraśnik Solar Flex Park
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href={contactHref} className="hidden rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 md:inline-flex">
            Skontaktuj się
          </a>
        </div>
      </header>

      <section id="top" className="relative px-5 pb-20 pt-16 sm:pt-20 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              <Zap size={14} aria-hidden="true" />
              Etap pre-development | Woj. lubelskie | SPV w organizacji
            </p>
            <h1 className="text-6xl font-semibold leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Kraśnik
              <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-emerald-400 to-sky-300 bg-clip-text text-transparent">
                Solar Flex Park
              </span>
            </h1>
            <h2 className="mt-8 max-w-3xl text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl">
              Hybrydowy projekt fotowoltaiki i magazynu energii w regionie Kraśnika.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Kraśnik Solar Flex Park to etapowo rozwijany projekt infrastruktury
              energetycznej łączący fotowoltaikę, magazyn energii oraz
              elastyczność systemową. Projekt przygotowywany jest w formule
              dedykowanej spółki celowej SPV.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={contactHref} className="primary-button">
                Skontaktuj się
                <Mail size={18} aria-hidden="true" />
              </a>
              <a href="#o-projekcie" className="secondary-button">
                Dowiedz się więcej
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <EnergyVisual />
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureTiles.map((item) => (
            <article key={item.title} className="feature-card">
              <IconBadge icon={item.icon} />
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="o-projekcie" className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              label="O PROJEKCIE"
              title="Etapowy projekt PV + BESS skoncentrowany na elastyczności energetycznej."
              text="Projekt znajduje się obecnie na etapie analizy lokalizacji, rozmów dotyczących zabezpieczenia gruntu, weryfikacji możliwości przyłączeniowych oraz przygotowania ścieżki finansowania."
            />
            <div className="mt-8 space-y-4">
              {projectArguments.map((item) => (
                <div key={item} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-300" size={18} aria-hidden="true" />
                  <p className="leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {projectCards.map((card) => (
              <article key={card.title} className="premium-card grid gap-5 sm:grid-cols-[auto_1fr]">
                <IconBadge icon={card.icon} />
                <div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="region" className="section-shell bg-slate-950/[0.38]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            label="REGIONALNY KONTEKST"
            title="Lubelskie jako rosnący region dla infrastruktury energetycznej i elastyczności systemowej."
            text="Województwo lubelskie łączy dostępność terenów, rozwijającą się infrastrukturę energetyczną, zaplecze logistyczne oraz instrumenty wsparcia dla transformacji energetycznej. Dla projektu PV + BESS oznacza to możliwość budowania wartości nie tylko przez produkcję energii, ale także przez elastyczność, magazynowanie i lepsze wykorzystanie lokalnej infrastruktury sieciowej."
          />

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {regionCards.map((card) => (
                <article key={card.title} className="premium-card">
                  <IconBadge icon={card.icon} />
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
          <SectionHeader
            label="MODEL ROZWOJU"
            title="Projekt strukturyzowany jako SPV z jasno określonymi kamieniami milowymi."
            text="Bezpośrednim celem jest zabezpieczenie praw do gruntu, potwierdzenie zgodności planistycznej, przygotowanie ścieżki przyłączeniowej oraz zorganizowanie finansowania pre-development."
          />

          <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-emerald-400/0 via-emerald-300/45 to-sky-300/0 lg:block" />
            {timeline.map((item) => (
              <article key={item.number} className="timeline-card">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-300/25 bg-slate-950 text-2xl font-semibold text-emerald-300 shadow-glow">
                  {item.number}
                </div>
                <h3 className="mt-7 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="premium-card">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Rozwój etapowy projektu
              </p>
              <div className="mt-6 space-y-4">
                {stagedSteps.map((step) => (
                  <div key={step} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <Lightbulb className="shrink-0 text-sky-300" size={19} aria-hidden="true" />
                    <p className="text-sm leading-6 text-slate-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Lokalizacja", "Przyłączenie", "Kapitał"].map((item, index) => (
                <div key={item} className="rounded-lg border border-emerald-300/15 bg-gradient-to-b from-emerald-300/10 to-slate-950/[0.64] p-5">
                  <p className="text-3xl font-semibold text-white">0{index + 1}</p>
                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    {item}
                  </p>
                  <div className="mt-4 h-2 rounded bg-slate-800">
                    <div
                      className="h-2 rounded bg-gradient-to-r from-emerald-400 to-sky-300"
                      style={{ width: `${42 + index * 18}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="wspolpraca" className="section-shell bg-slate-950/[0.38]">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="WSPÓŁPRACA"
            title="Aktualnie poszukujemy partnerów na wczesnym etapie rozwoju projektu."
            text="Projekt jest rozwijany w formule otwartej na rozmowy z właścicielami gruntów, inwestorami pre-development, partnerami technicznymi oraz podmiotami rynku energii."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {cooperationCards.map((card) => (
              <article key={card.title} className="premium-card">
                <IconBadge icon={card.icon} />
                <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr_0.9fr] lg:items-center">
          <EnergyVisual compact />

          <div>
            <SectionHeader
              label="KONTAKT"
              title="Porozmawiajmy o gruncie, inwestycji, współpracy technicznej lub partnerstwie energetycznym."
              text="Kraśnik Solar Flex Park znajduje się na etapie pre-development. Obecnie koncentrujemy się na zabezpieczeniu lokalizacji, analizie przyłącza, strukturze SPV oraz rozmowach z partnerami."
            />
            <a href={contactHref} className="primary-button mt-8">
              Napisz do nas
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>

          <aside className="premium-card">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Karta kontaktowa
            </p>
            <h3 className="mt-5 text-2xl font-semibold text-white">Adrian Mazur</h3>
            <p className="mt-1 text-slate-400">Założyciel / Sponsor projektu</p>

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

            <p className="mt-6 break-words text-sm text-sky-300">
              www.krasniksolarflexpark.pl
            </p>
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
