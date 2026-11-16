import type { Metadata, Viewport } from "next";
import { Caveat, Montserrat, Nunito_Sans } from "next/font/google";
import Script from "next/script";
import Kop from "@/components/Kop";
import Voet from "@/components/Voet";
import Meten from "@/components/Meten";
import { localBusiness } from "@/lib/schema";
import { site } from "@/site.config";
import "./globals.css";

// Lettertypen uit het ontwerp: Montserrat (koppen, knoppen), Nunito Sans
// (tekst), Caveat (handgeschreven accenten).
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["500", "600", "700"] });
const nunito = Nunito_Sans({ variable: "--font-nunito", subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["600", "700"] });

const BESCHRIJVING =
  "Particuliere thuiszorg in Almere: persoonlijke verzorging, nachtzorg, palliatieve en terminale zorg, respijtzorg en dagbesteding bij u thuis. Een vast gezicht, ook in het weekend, betaald particulier of uit een pgb.";

// Standaardwaarden. Elke pagina zet zelf titel, description en canonical
// (components/meta.ts); hier bewust geen canonical, anders erven 404 en
// /bedankt de canonical van de homepage.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // Geen title.template: de pagina's uit het startpakket zetten de merknaam
  // zelf al in de titel.
  title: `Particuliere thuiszorg in ${site.plaats} | ${site.naam}`,
  description: `Particuliere zorg thuis in ${site.plaats}, met een vast gezicht. Persoonlijke verzorging, nachtzorg, palliatieve zorg, respijtzorg en dagbesteding.`,
  applicationName: site.naam,
  formatDetection: { telephone: false },
  openGraph: { siteName: site.naam, locale: "nl_NL", type: "website" },
  twitter: { card: "summary_large_image" },
  verification: site.gscVerificatie ? { google: site.gscVerificatie } : undefined,
};

export const viewport: Viewport = { themeColor: "#1F4E79" };

// Basis uit het startpakket, aangevuld met de gegevens uit de intake.
const organisatieSchema = {
  ...localBusiness(BESCHRIJVING),
  "@type": ["LocalBusiness", "MedicalBusiness"],
  founder: { "@type": "Person", name: site.gezicht.naam, jobTitle: site.gezicht.functie },
  address: { "@type": "PostalAddress", addressLocality: site.plaats, addressRegion: "Flevoland", addressCountry: "NL" },
  areaServed: [
    ...site.werkgebied.flatMap((p): { "@type": string; name: string }[] => [
      { "@type": "City", name: p.naam },
      ...p.kernen.map((k) => ({ "@type": "Place", name: k })),
    ]),
    ...site.steden.map((s) => ({ "@type": "City", name: s.naam })),
  ],
  knowsLanguage: ["nl", "en", "srn"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  identifier: [
    { "@type": "PropertyValue", name: "AGB-code", value: site.agb },
    { "@type": "PropertyValue", name: "KvK-nummer", value: site.kvk },
  ],
  image: `${site.url}/images/01-mevrouw-met-zorgverlener.webp`,
  logo: `${site.url}/icon.svg`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Zorg aan huis",
    itemListElement: site.diensten.map((d) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: d.naam, url: `${site.url}/zorg/${d.slug}` },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.naam,
  url: site.url,
  inLanguage: "nl-NL",
  publisher: { "@id": `${site.url}/#organisatie` },
};

const ga4Actief = /^G-[A-Z0-9]{6,}$/.test(site.ga4Id) && site.ga4Id !== "G-XXXXXXX";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${montserrat.variable} ${nunito.variable} ${caveat.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organisatieSchema, websiteSchema]) }} />
      </head>
      <body>
        <Kop />
        <div id="inhoud">{children}</div>
        <Voet />
        <Meten />
        {ga4Actief && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());gtag('config','${site.ga4Id}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
