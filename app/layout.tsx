import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://krasniksolarflexpark.pl"),
  title: "Kraśnik Solar Flex Park",
  description:
    "One-page inwestorski dla koncepcji PV + BESS w regionie Kraśnika, na etapie pre-development i organizacji SPV.",
  openGraph: {
    title: "Kraśnik Solar Flex Park",
    description:
      "Projekt PV + BESS w województwie lubelskim na etapie pre-development.",
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
