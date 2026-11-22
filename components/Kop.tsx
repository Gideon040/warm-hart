import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/site.config";
import { haalArtikelen } from "@/lib/kennisbank";
import { zorgvormen } from "@/app/zorg/zorgvormen";
import { Hart, telLink } from "./Blokken";

export function Logo() {
  return (
    <span className="logo">
      <Hart maat={28} />
      <span className="logo-tekst">
        <b>Particuliere Thuiszorg</b>
        <span>Almere</span>
      </span>
    </span>
  );
}

type L = { naam: string; pad: string };

const ZORG: { kop: string; links: L[] }[] = [
  { kop: "Onze zorg", links: site.diensten.map((d) => ({ naam: d.naam, pad: `/zorg/${d.slug}` })) },
  {
    kop: "Hoeveel zorg",
    links: [
      ...zorgvormen.map((z) => ({ naam: z.kort, pad: `/zorg/${z.slug}` })),
      { naam: "Particuliere thuiszorg", pad: "/zorg/particuliere-thuiszorg" },
    ],
  },
];

const WERKGEBIED: L[] = [
  { naam: site.plaats, pad: "/werkgebied" },
  ...site.steden.map((s) => ({ naam: s.naam, pad: `/zorg/particuliere-thuiszorg/${s.slug}` })),
];

// Menu-item met uitklappaneel: op desktop bij hover en toetsenbordfocus
// (focus-within), zonder JavaScript. De hoofdlink blijft gewoon klikbaar.
function Uitklap({ naam, pad, children, breed = false }: { naam: string; pad: string; children: ReactNode; breed?: boolean }) {
  return (
    <div className="uitklap">
      <Link href={pad} className="uitklap-kop">{naam}<svg aria-hidden="true" className="pijltje" width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="#E0603F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
      <div className={breed ? "uitklap-paneel breed" : "uitklap-paneel"}>{children}</div>
    </div>
  );
}

// Topbalk + hoofdmenu (structuurspec 4.1 blok 1). Kennisbank pas in het menu
// zodra er een gepubliceerd artikel is.
export default async function Kop() {
  const artikelen = await haalArtikelen();
  const los: L[] = [
    { naam: "Over ons", pad: "/over" },
    { naam: "Tarieven & vergoeding", pad: "/tarieven-en-vergoeding" },
    ...(artikelen.length > 0 ? [{ naam: "Kennisbank", pad: "/kennisbank" }] : []),
    { naam: "Contact", pad: "/contact" },
  ];
  return (
    <>
      <a className="skip" href="#inhoud">Naar de inhoud</a>
      <div className="topbalk">
        <div className="wrap">
          <span><b>Zorg nodig in {site.plaats} of omgeving? Bel <a href={telLink()}>{site.telefoonWeergave}</a></b></span>
          <span>{site.bereikbaarheid}</span>
        </div>
      </div>
      <header className="nav-zone">
        <div className="wrap">
          <nav aria-label="Hoofdmenu" className="nav">
            <Link href="/" aria-label={`${site.naam}, naar de homepage`} style={{ textDecoration: "none" }}><Logo /></Link>

            <div className="nav-links nav-breed">
              <Uitklap naam="Zorg & diensten" pad="/zorg/particuliere-thuiszorg">
                {ZORG.map((g) => (
                  <div key={g.kop} className="uitklap-groep">
                    <b>{g.kop}</b>
                    {g.links.map((l) => <Link key={l.pad} href={l.pad}>{l.naam}</Link>)}
                  </div>
                ))}
              </Uitklap>
              <Uitklap naam="Werkgebied" pad="/werkgebied" breed>
                <div className="uitklap-groep">
                  <b>Thuiszorg in {site.plaats} en omgeving</b>
                  <div className="uitklap-raster">
                    {WERKGEBIED.map((l) => <Link key={l.pad} href={l.pad}>{l.naam}</Link>)}
                  </div>
                </div>
              </Uitklap>
              {los.map((l) => <Link key={l.pad} href={l.pad}>{l.naam}</Link>)}
              <Link className="knop" href="/zorgvraag">Zorgvraag stellen</Link>
            </div>

            {/* Mobiel: uitklapmenu zonder JavaScript. */}
            <details className="nav-uit">
              <summary className="menu-knop">Menu</summary>
              <div className="nav-links">
                <Link href="/">Home</Link>
                <details className="sub">
                  <summary>Zorg &amp; diensten</summary>
                  {ZORG.flatMap((g) => g.links).map((l) => <Link key={l.pad} href={l.pad}>{l.naam}</Link>)}
                </details>
                <details className="sub">
                  <summary>Werkgebied</summary>
                  {WERKGEBIED.map((l) => <Link key={l.pad} href={l.pad}>{l.naam}</Link>)}
                </details>
                {los.map((l) => <Link key={l.pad} href={l.pad}>{l.naam}</Link>)}
                <Link className="knop" href="/zorgvraag">Zorgvraag stellen</Link>
              </div>
            </details>
          </nav>
        </div>
      </header>
    </>
  );
}
