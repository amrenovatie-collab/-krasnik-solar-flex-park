import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://krasniksolarflexpark.pl"),
  title: "Kraśnik Solar Flex Park | PV + BESS",
  description: "Etapowy projekt fotowoltaiki i magazynu energii w regionie Kraśnika.",
  openGraph: {
    title: "Kraśnik Solar Flex Park | PV + BESS",
    description: "Etapowy projekt fotowoltaiki i magazynu energii w regionie Kraśnika.",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/krasnik-solar-flex-park-hero.png",
        width: 1536,
        height: 864,
        alt: "Park fotowoltaiczny z magazynem energii"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
