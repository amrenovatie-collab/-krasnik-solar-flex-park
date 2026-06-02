# Kraśnik Solar Flex Park

Produkcyjna strona one-page dla projektu **Kraśnik Solar Flex Park**: etapowego projektu PV + BESS w regionie Kraśnika, województwo lubelskie.

Projekt komunikowany jest ostrożnie jako etap pre-development: analiza lokalizacji, rozmowy dotyczące zabezpieczenia gruntu, przygotowanie ścieżki przyłączeniowej, finansowanie pre-development oraz SPV w organizacji. Treść strony nie deklaruje gotowego finansowania, pozwoleń, przyłącza, rozpoczętej budowy, finalnej decyzji inwestycyjnej ani zatwierdzonych mocy.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `next/image`
- `lucide-react`

## Uruchomienie

```bash
npm install
npm run dev
```

Adres lokalny: `http://localhost:3000`

## Build

```bash
npm run build
```

## Panel administratora i raport odwiedzin

Panel jest dostępny pod adresem:

```text
/admin
```

Do logowania wymagane są zmienne środowiskowe:

```text
ADMIN_PASSWORD
ADMIN_SESSION_SECRET
```

Raport odwiedzin zapisuje dane przez Upstash Redis REST albo Vercel KV REST. W Vercel dodaj:

```text
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

Panel nie zapisuje surowych adresów IP. Zlicza odsłony strony, wejścia w sekcje, urządzenia, ścieżki i ostatnie zdarzenia.

## Struktura

- `app/layout.tsx` - metadata, język strony i layout root
- `app/page.tsx` - kompletna strona one-page
- `app/admin/` - panel administratora i raport odwiedzin
- `app/api/` - API logowania i zapisu odwiedzin
- `app/globals.css` - style globalne, utility i motyw premium dark
- `public/images/` - lokalne obrazy używane przez `next/image`
