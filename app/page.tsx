import Image from "next/image";

const navItems = [
  { label: "Projekt", href: "#projekt" },
  { label: "Region", href: "#region" },
  { label: "Rozwój", href: "#rozwoj" },
  { label: "Współpraca", href: "#wspolpraca" },
  { label: "Kontakt", href: "#kontakt" }
];

const highlights = [
  {
    value: "PV + BESS",
    label: "Koncepcja łącząca generację słoneczną z magazynowaniem energii"
  },
  {
    value: "Pre-development",
    label: "Weryfikacja lokalizacji, parametrów technicznych i ścieżki regulacyjnej"
  },
  {
    value: "SPV",
    label: "Struktura projektowa pozostaje w organizacji"
  }
];

const regionPoints = [
  "Potencjał terenów dla energetyki odnawialnej poza najbardziej nasyconymi rynkami.",
  "Położenie między rolnictwem, przemysłem lokalnym i rosnącym zapotrzebowaniem na elastyczność systemu.",
  "Korytarze infrastrukturalne, które wymagają dalszej analizy technicznej, środowiskowej i przyłączeniowej."
];

const developmentSteps = [
  {
    step: "01",
    title: "Selekcja lokalizacji",
    text: "Analiza gruntów, sąsiedztwa infrastruktury, ograniczeń planistycznych i profilu produkcji."
  },
  {
    step: "02",
    title: "Strukturyzacja SPV",
    text: "Porządkowanie modelu właścicielskiego, dokumentacji i zasad prowadzenia projektu."
  },
  {
    step: "03",
    title: "Ścieżka techniczna",
    text: "Weryfikacja koncepcji PV, BESS, parametrów operacyjnych oraz ryzyk formalnych."
  },
  {
    step: "04",
    title: "Partnerstwo",
    text: "Rozmowy z partnerami branżowymi i kapitałowymi na adekwatnym etapie dojrzałości."
  }
];

const cooperationAreas = [
  "właściciele gruntów i doradcy lokalizacyjni",
  "partnerzy techniczni PV, BESS i grid advisory",
  "inwestorzy infrastrukturalni zainteresowani etapem development"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-carbon text-mineral">
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="text-sm font-semibold uppercase text-white">
            Kraśnik Solar Flex Park
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/76 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-copper"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-[84svh] items-end overflow-hidden border-b border-white/10"
      >
        <Image
          src="/images/krasnik-solar-flex-park-hero.png"
          alt="Fotowoltaika i magazyn energii w krajobrazie regionu lubelskiego"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,17,16,0.96)_0%,rgba(13,17,16,0.74)_42%,rgba(13,17,16,0.24)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,17,16,0.16)_0%,rgba(13,17,16,0.38)_68%,rgba(13,17,16,0.92)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 lg:pb-16">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-md border border-copper/50 bg-carbon/50 px-3 py-2 text-xs font-semibold uppercase text-copper backdrop-blur">
              PV + BESS | Pre-development | SPV w organizacji
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Kraśnik Solar Flex Park
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Koncepcja parku fotowoltaicznego z bateryjnym magazynem energii w
              regionie Kraśnika, budowana z myślą o elastyczności systemu,
              jakości procesu development i transparentnej współpracy.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projekt"
                className="inline-flex h-12 items-center justify-center rounded-md bg-copper px-6 text-sm font-bold text-carbon transition hover:bg-[#d9aa69] focus:outline-none focus:ring-2 focus:ring-white"
              >
                Poznaj projekt
              </a>
              <a
                href="#kontakt"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/28 px-6 text-sm font-bold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-copper"
              >
                Rozpocznij rozmowę
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.value}
                className="rounded-md border border-white/12 bg-carbon/66 p-5 shadow-soft backdrop-blur"
              >
                <p className="text-lg font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projekt" className="bg-carbon px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">O projekcie</p>
            <h2 className="section-title">
              Infrastruktura odnawialna projektowana z myślą o elastyczności.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-mineral/78">
            <p>
              Kraśnik Solar Flex Park to koncepcja inwestycyjna obejmująca
              źródło fotowoltaiczne oraz bateryjny magazyn energii. Projekt jest
              prowadzony na etapie pre-development, w którym najważniejsze są
              rzetelne analizy lokalizacyjne, techniczne, środowiskowe i
              komercyjne.
            </p>
            <p>
              Obecny zakres prac nie zakłada komunikowania gotowego
              finansowania, uzyskanych pozwoleń, przyłącza ani rozpoczętej
              budowy. Priorytetem jest uporządkowanie założeń, struktury SPV i
              warunków, które pozwolą prowadzić dalsze rozmowy inwestorskie w
              sposób odpowiedzialny.
            </p>
          </div>
        </div>
      </section>

      <section id="region" className="border-y border-white/10 bg-graphite px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="section-kicker">Dlaczego województwo lubelskie?</p>
            <h2 className="section-title">
              Region Kraśnika łączy przestrzeń, produkcję i potrzebę stabilnej
              energii.
            </h2>
            <p className="mt-6 text-lg leading-8 text-mineral/76">
              Lubelskie jest interesującym obszarem dla projektów łączących OZE
              z magazynowaniem, bo pozwala analizować energetykę nie tylko przez
              pryzmat mocy wytwórczej, ale też lokalnej elastyczności i
              odporności systemu.
            </p>
          </div>
          <div className="grid gap-4">
            {regionPoints.map((point) => (
              <div
                key={point}
                className="rounded-md border border-white/10 bg-carbon/70 p-6"
              >
                <p className="text-base leading-7 text-mineral/82">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rozwoj" className="bg-carbon px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">Model rozwoju</p>
            <h2 className="section-title">
              Kolejne decyzje mają wynikać z danych, a nie z deklaracji.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {developmentSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-md border border-white/10 bg-graphite p-6"
              >
                <p className="text-sm font-bold text-copper">{item.step}</p>
                <h3 className="mt-8 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-mineral/72">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="wspolpraca" className="border-y border-white/10 bg-[#101513] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Współpraca</p>
            <h2 className="section-title">
              Szukamy rozmów, które pomagają dojrzewać projektowi.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-mineral/78">
              Na tym etapie cenna jest współpraca z podmiotami, które rozumieją
              proces development projektów energetycznych i potrafią pracować na
              założeniach, ryzykach oraz wariantach technicznych.
            </p>
            <div className="mt-8 grid gap-3">
              {cooperationAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-4 rounded-md border border-white/10 bg-carbon/78 p-5"
                >
                  <span className="h-2 w-2 rounded-full bg-field" />
                  <p className="text-base text-mineral/84">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-carbon px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-t border-white/12 pt-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="section-kicker">Kontakt</p>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Porozmawiajmy o potencjale projektu w regionie Kraśnika.
              </h2>
            </div>
            <div className="rounded-md border border-copper/30 bg-graphite p-6">
              <p className="text-sm uppercase text-copper">Kraśnik / Lubelskie</p>
              <a
                href="mailto:kontakt@krasniksolarflexpark.pl"
                className="mt-4 block break-words text-2xl font-semibold text-white transition hover:text-copper focus:outline-none focus:ring-2 focus:ring-copper"
              >
                kontakt@krasniksolarflexpark.pl
              </a>
              <p className="mt-5 text-sm leading-6 text-mineral/70">
                Zapraszamy do rozmów dotyczących gruntów, analiz technicznych,
                struktury SPV i potencjalnej współpracy inwestorskiej.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
