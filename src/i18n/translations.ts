export const languages = [
  {
    code: "pl",
    label: "PL",
    ariaLabel: "Przełącz na język polski"
  },
  {
    code: "en",
    label: "EN",
    ariaLabel: "Switch to English"
  }
] as const;

export type Language = (typeof languages)[number]["code"];

export const defaultLanguage: Language = "pl";

export const translations = {
  pl: {
    seo: {
      title: "Kraśnik Solar Flex Park | PV + BESS",
      description: "Etapowy projekt fotowoltaiki i magazynu energii w regionie Kraśnika."
    },
    brand: "Kraśnik Solar Flex Park",
    languageLabel: "Wybór języka",
    nav: [
      { label: "O projekcie", href: "#o-projekcie" },
      { label: "Region", href: "#region" },
      { label: "Model rozwoju", href: "#model-rozwoju" },
      { label: "Współpraca", href: "#wspolpraca" },
      { label: "Kontakt", href: "#kontakt" }
    ],
    cta: {
      contact: "Skontaktuj się",
      learnMore: "Dowiedz się więcej",
      write: "Napisz do nas"
    },
    hero: {
      titleLineOne: "Kraśnik",
      titleLineTwo: "Solar Flex Park",
      meta: ["Wczesny etap rozwoju", "Woj. lubelskie", "SPV w organizacji"],
      headline: "Hybrydowy projekt fotowoltaiki i magazynu energii w regionie Kraśnika.",
      description:
        "Kraśnik Solar Flex Park to etapowo rozwijany projekt infrastruktury energetycznej łączący fotowoltaikę, magazyn energii oraz elastyczność systemową. Projekt przygotowywany jest w formule dedykowanej spółki celowej SPV.",
      imageAlt: "Park fotowoltaiczny z bateryjnym magazynem energii",
      metrics: [
        { title: "PV", caption: "analiza" },
        { title: "BESS", caption: "analiza" },
        { title: "SPV", caption: "organizacja" }
      ]
    },
    features: [
      { title: "PV", label: "Fotowoltaika" },
      { title: "BESS", label: "Magazyn energii" },
      { title: "Elastyczność", label: "sieci" },
      { title: "Rozwój", label: "etapowy" }
    ],
    project: {
      label: "O PROJEKCIE",
      title: "Etapowy projekt PV + BESS skoncentrowany na elastyczności energetycznej.",
      description:
        "Projekt znajduje się obecnie na etapie analizy lokalizacji, rozmów dotyczących zabezpieczenia gruntu, weryfikacji możliwości przyłączeniowych oraz przygotowania ścieżki finansowania.",
      note:
        "Komunikacja projektu pozostaje ostrożna: obecny etap nie oznacza uzyskania finansowania, pozwoleń, przyłącza ani rozpoczęcia budowy.",
      cards: [
        {
          title: "Fotowoltaika",
          text:
            "Instalacja PV planowana etapowo — od mniejszego, bankowalnego wariantu startowego do dalszej rozbudowy po potwierdzeniu warunków technicznych i finansowych.",
          alt: "Panele fotowoltaiczne w krajobrazie rolniczym"
        },
        {
          title: "Magazyn energii",
          text:
            "Magazyn energii ma wspierać elastyczność projektu, poprawę profilu energetycznego i przyszłe możliwości rynkowe.",
          alt: "Kontenery bateryjnego magazynu energii"
        },
        {
          title: "Podejście sieciowe",
          text:
            "Strategia rozwoju projektu zakłada priorytet dla kontroli nad gruntem, wykonalności przyłącza, rozmów z operatorem oraz etapowania mocy zamiast spekulacyjnych zakupów sprzętu.",
          alt: "Infrastruktura sieci elektroenergetycznej"
        }
      ]
    },
    region: {
      label: "REGIONALNY KONTEKST",
      title:
        "Lubelskie jako rosnący region dla infrastruktury energetycznej i elastyczności systemowej.",
      lead:
        "Województwo lubelskie łączy dostępność terenów, rozwijającą się infrastrukturę energetyczną, zaplecze logistyczne oraz instrumenty wsparcia dla transformacji energetycznej. Dla projektu PV + BESS oznacza to możliwość budowania wartości nie tylko przez produkcję energii, ale także przez elastyczność, magazynowanie i lepsze wykorzystanie lokalnej infrastruktury sieciowej.",
      backgroundAlt: "Sieć elektroenergetyczna jako kontekst dla projektu PV i BESS",
      mobileImageAlt: "Infrastruktura sieciowa w regionie",
      cards: [
        {
          title: "Energetyczny kierunek regionu",
          text:
            "W okolicach Kraśnika rozwijana jest infrastruktura elektroenergetyczna. Modernizacja i rozbudowa stacji GPZ Budzyń 110/30/15 kV była związana z przyłączeniem farmy wiatrowej o mocy 24,15 MW, co potwierdza znaczenie regionu dla nowych projektów OZE."
        },
        {
          title: "Potencjał dla PV + BESS",
          text:
            "Projekt hybrydowy łączący fotowoltaikę i magazyn energii odpowiada na rosnącą potrzebę elastyczności systemowej, lepszego profilu produkcji oraz lokalnego bilansowania energii."
        },
        {
          title: "Logistyka i dostępność",
          text:
            "Region korzysta z poprawy dostępności transportowej, rozwoju infrastruktury drogowej oraz zaplecza logistycznego. Rozwój infrastruktury transportowej wzmacnia gospodarczy profil województwa."
        },
        {
          title: "Instrumenty wsparcia",
          text:
            "Województwo lubelskie posiada instrumenty finansowania związane z OZE, efektywnością energetyczną i rozwojem gospodarki niskoemisyjnej. Projekt będzie analizowany pod kątem dostępnych pożyczek, finansowania publicznego i partnerstw inwestycyjnych."
        }
      ],
      disclaimer:
        "Projekt znajduje się na wczesnym etapie rozwoju. Informacje regionalne stanowią kontekst inwestycyjny i nie oznaczają uzyskania przyłącza, finansowania ani decyzji administracyjnych."
    },
    model: {
      label: "MODEL ROZWOJU",
      title: "Projekt strukturyzowany jako SPV z jasno określonymi kamieniami milowymi.",
      description:
        "Bezpośrednim celem jest zabezpieczenie praw do gruntu, potwierdzenie zgodności planistycznej, przygotowanie ścieżki przyłączeniowej oraz zorganizowanie finansowania wczesnego etapu rozwoju.",
      imageAlt: "Model rozwoju projektu",
      stagedLabel: "Rozwój etapowy projektu",
      stagedSteps: [
        "Etap 1: lokalizacja + SPV + koncepcja",
        "Etap 2: przyłącze + finansowanie + partnerzy",
        "Etap 3: budowa / sprzedaż projektu / skalowanie"
      ],
      timeline: [
        {
          number: "01",
          title: "SPV i organizacja projektu",
          text:
            "Dedykowana spółka celowa, podstawy ładu projektowego oraz profesjonalna infrastruktura komunikacyjna."
        },
        {
          number: "02",
          title: "Kontrola nad gruntem",
          text:
            "List intencyjny, opcja zakupu albo dzierżawa warunkowa przed podjęciem decyzji o pełnym wejściu kapitałowym."
        },
        {
          number: "03",
          title: "Koncepcja techniczna i przyłączeniowa",
          text: "Model PV + BESS, warianty mocy oraz przygotowanie ścieżki przyłączeniowej."
        },
        {
          number: "04",
          title: "Finansowanie",
          text:
            "Kapitał na wczesny etap rozwoju, następnie finansowanie OZE, inwestor branżowy albo finansowanie projektowe."
        }
      ]
    },
    cooperation: {
      label: "WSPÓŁPRACA",
      title: "Aktualnie poszukujemy partnerów na wczesnym etapie rozwoju projektu.",
      description:
        "Projekt jest rozwijany w formule otwartej na rozmowy z właścicielami gruntów, inwestorami wczesnego etapu, partnerami technicznymi oraz podmiotami rynku energii.",
      cards: [
        {
          title: "Właściciele gruntów",
          text:
            "Poszukujemy właścicieli gruntów otwartych na rozmowę o opcji, dzierżawie warunkowej lub modelu współpracy projektowej."
        },
        {
          title: "Inwestorzy",
          text:
            "Szukamy inwestorów wczesnego etapu zainteresowanych wejściem w projekt infrastruktury energetycznej przed osiągnięciem pełnej dojrzałości inwestycyjnej."
        },
        {
          title: "Partnerzy techniczni",
          text:
            "EPC, integratorzy BESS, doradcy techniczni i partnerzy zdolni wesprzeć bankowalny rozwój projektu."
        },
        {
          title: "Partnerzy rynku energii",
          text:
            "Optymalizatorzy, traderzy energii, partnerzy PPA i podmioty związane z rynkiem bilansującym."
        }
      ]
    },
    contact: {
      label: "KONTAKT",
      title:
        "Porozmawiajmy o gruncie, inwestycji, współpracy technicznej lub partnerstwie energetycznym.",
      description:
        "Kraśnik Solar Flex Park znajduje się na wczesnym etapie rozwoju. Obecnie koncentrujemy się na zabezpieczeniu lokalizacji, analizie przyłącza, strukturze SPV oraz rozmowach z partnerami.",
      imageAlt: "Fotowoltaika i magazyn energii w projekcie Kraśnik Solar Flex Park",
      mailSubject: "Kraśnik Solar Flex Park - zapytanie",
      cardLabel: "Karta kontaktowa",
      name: "Adrian Mazur",
      role: "Założyciel / Sponsor projektu",
      items: [
        { label: "E-mail", value: "adrian@krasniksolarflexpark.pl" },
        { label: "Telefon", value: "+32 485 84 22 83" },
        { label: "Strona", value: "www.krasniksolarflexpark.pl" },
        { label: "Status", value: "Wczesny etap rozwoju | SPV w organizacji" }
      ]
    },
    footer: {
      copyright:
        "© 2026 Kraśnik Solar Flex Park. Projekt na wczesnym etapie rozwoju. SPV w organizacji.",
      disclaimer:
        "Informacje na stronie mają charakter informacyjny i nie stanowią oferty inwestycyjnej ani gwarancji realizacji projektu."
    }
  },
  en: {
    seo: {
      title: "Kraśnik Solar Flex Park | PV + BESS",
      description: "A phased solar and battery energy storage project in the Kraśnik region."
    },
    brand: "Kraśnik Solar Flex Park",
    languageLabel: "Language selection",
    nav: [
      { label: "Project", href: "#o-projekcie" },
      { label: "Region", href: "#region" },
      { label: "Development model", href: "#model-rozwoju" },
      { label: "Cooperation", href: "#wspolpraca" },
      { label: "Contact", href: "#kontakt" }
    ],
    cta: {
      contact: "Contact us",
      learnMore: "Learn more",
      write: "Write to us"
    },
    hero: {
      titleLineOne: "Kraśnik",
      titleLineTwo: "Solar Flex Park",
      meta: ["Pre-development stage", "Lubelskie Voivodeship", "SPV being organized"],
      headline: "A hybrid solar and battery energy storage project in the Kraśnik region.",
      description:
        "Kraśnik Solar Flex Park is a phased energy infrastructure project combining photovoltaics, battery storage and system flexibility. The project is being prepared through a dedicated SPV structure.",
      imageAlt: "Solar park with a battery energy storage system",
      metrics: [
        { title: "PV", caption: "analysis" },
        { title: "BESS", caption: "analysis" },
        { title: "SPV", caption: "structuring" }
      ]
    },
    features: [
      { title: "PV", label: "Solar generation" },
      { title: "BESS", label: "Battery storage" },
      { title: "Flexibility", label: "grid" },
      { title: "Development", label: "phased" }
    ],
    project: {
      label: "PROJECT",
      title: "A phased PV + BESS project focused on energy flexibility.",
      description:
        "The project is currently at the stage of site analysis, land control discussions, grid connection feasibility review and preparation of the pre-development financing path.",
      note:
        "Project communication remains cautious: the current stage does not imply secured financing, permits, grid connection or the start of construction.",
      cards: [
        {
          title: "Photovoltaics",
          text:
            "The PV installation is planned in phases, from a smaller bankable starting variant to further expansion once technical and financing conditions are confirmed.",
          alt: "Photovoltaic panels in a rural landscape"
        },
        {
          title: "Battery storage",
          text:
            "The battery energy storage system is intended to support project flexibility, improve the energy profile and create future market options.",
          alt: "Battery energy storage containers"
        },
        {
          title: "Grid-first approach",
          text:
            "The development strategy prioritizes land control, connection feasibility, operator discussions and staged capacity planning rather than speculative equipment purchases.",
          alt: "Electricity grid infrastructure"
        }
      ]
    },
    region: {
      label: "REGIONAL CONTEXT",
      title: "Lubelskie as a growing region for energy infrastructure and system flexibility.",
      lead:
        "Lubelskie combines land availability, developing energy infrastructure, logistics capabilities and support instruments for the energy transition. For a PV + BESS project, this creates an opportunity to build value not only through energy generation, but also through flexibility, storage and better use of local grid infrastructure.",
      backgroundAlt: "Electricity grid context for a PV and BESS project",
      mobileImageAlt: "Regional grid infrastructure",
      cards: [
        {
          title: "Energy direction of the region",
          text:
            "Power infrastructure is being developed around Kraśnik. The modernization and expansion of the Budzyń 110/30/15 kV grid substation was linked to the connection of a 24.15 MW wind farm, confirming the region’s relevance for new renewable energy projects."
        },
        {
          title: "Potential for PV + BESS",
          text:
            "A hybrid project combining photovoltaics and battery storage responds to the growing need for system flexibility, an improved production profile and local energy balancing."
        },
        {
          title: "Logistics and accessibility",
          text:
            "The region benefits from improving transport accessibility, road infrastructure and logistics capacity. Transport infrastructure development strengthens the economic profile of the voivodeship."
        },
        {
          title: "Support instruments",
          text:
            "Lubelskie has financing instruments linked to renewable energy, energy efficiency and low-emission economic development. The project will be reviewed against available loans, public financing and investment partnerships."
        }
      ],
      disclaimer:
        "The project is at the pre-development stage. Regional information is provided as investment context and does not imply secured grid connection, financing or administrative decisions."
    },
    model: {
      label: "DEVELOPMENT MODEL",
      title: "The project is being structured as an SPV with clearly defined milestones.",
      description:
        "The immediate objective is to secure land rights, confirm planning compatibility, prepare the grid connection pathway and organize pre-development financing.",
      imageAlt: "Project development model",
      stagedLabel: "Phased project development",
      stagedSteps: [
        "Stage 1: site + SPV + concept",
        "Stage 2: grid connection + financing + partners",
        "Stage 3: construction / project sale / scaling"
      ],
      timeline: [
        {
          number: "01",
          title: "SPV and project organization",
          text:
            "A dedicated special purpose vehicle, core project governance and professional communication infrastructure."
        },
        {
          number: "02",
          title: "Land control",
          text:
            "Letter of intent, purchase option or conditional lease before a full capital commitment is made."
        },
        {
          number: "03",
          title: "Technical and grid concept",
          text: "PV + BESS model, capacity variants and preparation of the grid connection pathway."
        },
        {
          number: "04",
          title: "Financing",
          text:
            "Pre-development capital, followed by renewable energy financing, an industry investor or project finance."
        }
      ]
    },
    cooperation: {
      label: "COOPERATION",
      title: "We are currently looking for partners at the early development stage.",
      description:
        "The project is being developed in a format open to discussions with landowners, pre-development investors, technical partners and energy market participants.",
      cards: [
        {
          title: "Landowners",
          text:
            "We are looking for landowners open to discussing an option, conditional lease or project cooperation model."
        },
        {
          title: "Investors",
          text:
            "We are seeking pre-development investors interested in entering an energy infrastructure project at an early stage."
        },
        {
          title: "Technical partners",
          text:
            "EPC providers, BESS integrators, technical advisers and partners able to support bankable project development."
        },
        {
          title: "Energy market partners",
          text:
            "Optimizers, energy traders, PPA partners and entities active in balancing market services."
        }
      ]
    },
    contact: {
      label: "CONTACT",
      title: "Let’s discuss land, investment, technical cooperation or energy partnerships.",
      description:
        "Kraśnik Solar Flex Park is at the pre-development stage. Current work focuses on site control, grid connection analysis, SPV structuring and partner discussions.",
      imageAlt: "Photovoltaics and energy storage in the Kraśnik Solar Flex Park project",
      mailSubject: "Kraśnik Solar Flex Park - inquiry",
      cardLabel: "Contact card",
      name: "Adrian Mazur",
      role: "Founder / Project Sponsor",
      items: [
        { label: "E-mail", value: "adrian@krasniksolarflexpark.pl" },
        { label: "Phone", value: "+32 485 84 22 83" },
        { label: "Website", value: "www.krasniksolarflexpark.pl" },
        { label: "Status", value: "Pre-development stage | SPV being organized" }
      ]
    },
    footer: {
      copyright:
        "© 2026 Kraśnik Solar Flex Park. Project at the pre-development stage. SPV being organized.",
      disclaimer:
        "The information on this website is for informational purposes only and does not constitute an investment offer or a guarantee that the project will be implemented."
    }
  }
} as const;
