import type { Metadata } from "next";
import { site } from "@/site.config";
import type { Foto } from "./fotos";

// Eén plek voor de metadata van elke pagina: titel, description (max. 160
// tekens), canonical, Open Graph en Twitter. Pagina's uit het startpakket
// (kennisbank) zetten hun eigen metadata.

// Kort af op een zinsgrens of woordgrens, zodat Google niets halverwege afknipt.
export function kortAf(tekst: string, max = 160) {
  if (tekst.length <= max) return tekst;
  const stuk = tekst.slice(0, max);
  const zin = stuk.lastIndexOf(". ");
  if (zin > max * 0.55) return stuk.slice(0, zin + 1);
  return `${stuk.slice(0, stuk.lastIndexOf(" ")).replace(/[,:;]$/, "")}…`;
}

export function paginaMeta({ titel, beschrijving, pad, foto, noindex = false }: {
  titel: string;
  beschrijving: string;
  pad: string; // "" = homepage
  foto?: Foto;
  noindex?: boolean;
}): Metadata {
  const url = `${site.url}${pad}`;
  const description = kortAf(beschrijving);
  // Staande foto's zijn ongeschikt als deelafbeelding: dan geldt
  // app/opengraph-image.jpg (liggend, 1200x630).
  const images = foto && foto.w > foto.h
    ? [{ url: foto.src, width: foto.w, height: foto.h, alt: foto.alt }]
    : [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Oudere mevrouw in haar stoel met een zorgverlener naast haar" }];
  return {
    title: titel,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: titel,
      description,
      url,
      siteName: site.naam,
      locale: "nl_NL",
      type: "website",
      images,
    },
    twitter: { card: "summary_large_image", title: titel, description, images: images.map((i) => i.url) },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
