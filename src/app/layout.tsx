import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morada do Militar | Residência Premium em Manaus",
  description:
    "Residência premium para militares em Manaus — conforto, localização e comunidade em um só lugar. Apartamentos disponíveis no Japiim.",
  robots: { index: true, follow: true },
  authors: [{ name: "Morada do Militar" }],
  alternates: {
    canonical: "https://moradadomilitar.com",
  },
  openGraph: {
    title: "Morada do Militar | Residência Premium em Manaus",
    description:
      "Residência premium para militares em Manaus — conforto, localização e comunidade em um só lugar.",
    type: "website",
    url: "https://moradadomilitar.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Morada do Militar",
  description:
    "Residência premium para militares em Manaus — conforto, localização e comunidade em um só lugar.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  url: "https://moradadomilitar.com",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        style={{
          fontFamily: "var(--font-sans), DM Sans, sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {children}
      </body>
    </html>
  );
}
