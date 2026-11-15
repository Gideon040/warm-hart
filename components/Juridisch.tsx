import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/site.config";
import { Kruimelpad, telLink } from "./Blokken";

const PAGINAS = [
  { naam: "Privacyverklaring", pad: "/privacy" },
  { naam: "Klachtenregeling", pad: "/klachtenregeling" },
  { naam: "Algemene voorwaarden", pad: "/algemene-voorwaarden" },
];

// Sjabloon voor privacy, klachtenregeling en voorwaarden: standaardteksten
// van Zorgbaar, ingevuld met de gegevens van de klant.
export function JuriPagina({ naam, pad, titel, lead, zijKop = "Vragen hierover?", zijTekst, children }: {
  naam: string;
  pad: string;
  titel: string;
  lead: string;
  zijKop?: string;
  zijTekst?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main>
      <section className="kop-licht">
        <div className="wrap col g18">
          <Kruimelpad items={[{ naam, pad }]} />
          <h1 className="h1">{titel}</h1>
          <p className="lead" style={{ maxWidth: 640 }}>{lead}</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap juri">
          <div>{children}</div>
          <aside className="juri-zij">
            <div className="donker">
              <h2>{zijKop}</h2>
              {zijTekst}
              <a href={telLink()}>{site.telefoonWeergave}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="zacht">
              <b style={{ fontFamily: "var(--kop)" }}>Ook juridisch</b>
              {PAGINAS.filter((p) => p.pad !== pad).map((p) => <Link key={p.pad} href={p.pad}>{p.naam}</Link>)}
              <span className="sm">{site.naam} · KvK {site.kvk} · AGB-code {site.agb}</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export function JuriBlok({ kop, children }: { kop: string; children: ReactNode }) {
  return (
    <div className="juri-blok">
      <h2>{kop}</h2>
      <p>{children}</p>
    </div>
  );
}
