import Link from "next/link";
import { site } from "@/site.config";
import { haalArtikelen } from "@/lib/kennisbank";
import { Hart, telLink } from "./Blokken";

export function Logo() {
  return (
    <span className="logo">
      <Hart maat={28} />
      <span className="logo-tekst">
        <b>Professioneel in Zorg</b>
        <span>met een warm Hart</span>
      </span>
    </span>
  );
}

// Topbalk + hoofdmenu (structuurspec 4.1 blok 1). Kennisbank pas in het menu
// zodra er een gepubliceerd artikel is.
export default async function Kop() {
  const artikelen = await haalArtikelen();
  const links = [
    { naam: "Zorg & diensten", pad: "/#zorg" },
    { naam: "Over ons", pad: "/over" },
    { naam: "Tarieven & vergoeding", pad: "/tarieven-en-vergoeding" },
    { naam: "Werkgebied", pad: "/werkgebied" },
    ...(artikelen.length > 0 ? [{ naam: "Kennisbank", pad: "/kennisbank" }] : []),
    { naam: "Contact", pad: "/contact" },
  ];
  const lijst = (
    <>
      {links.map((l) => <Link key={l.pad} href={l.pad}>{l.naam}</Link>)}
      <Link className="knop" href="/zorgvraag">Zorgvraag stellen</Link>
    </>
  );
  return (
    <>
      <a className="skip" href="#inhoud">Naar de inhoud</a>
      <div className="topbalk">
        <div className="wrap">
          <span><b>Zorg nodig in {site.plaats}? Bel <a href={telLink()}>{site.telefoonWeergave}</a></b></span>
          <span>{site.bereikbaarheid}</span>
        </div>
      </div>
      <header className="nav-zone">
        <div className="wrap">
          <nav aria-label="Hoofdmenu" className="nav">
            <Link href="/" aria-label={`${site.naam}, naar de homepage`} style={{ textDecoration: "none" }}><Logo /></Link>
            <div className="nav-links nav-breed">{lijst}</div>
            {/* Mobiel: uitklapmenu zonder JavaScript. */}
            <details className="nav-uit">
              <summary className="menu-knop">Menu</summary>
              <div className="nav-links">{lijst}</div>
            </details>
          </nav>
        </div>
      </header>
    </>
  );
}
