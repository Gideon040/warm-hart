import Link from "next/link";
import { site } from "@/site.config";
import { Logo } from "./Kop";
import { telLink, ZorgvraagKnop } from "./Blokken";

// Footer (structuurspec 4.1 blok 11): diensten | werkgebied | contact |
// juridisch, KvK/AGB-regel en "Website door Zorgbaar".
export default function Voet() {
  return (
    <>
      <footer className="voet">
        <div className="wrap">
          <div className="voet-kolommen">
            <div className="voet-merk">
              <Logo />
              <p>Particuliere zorg thuis in {site.plaats} en omgeving. Persoonlijke verzorging, nachtzorg, palliatieve zorg, respijtzorg en dagbesteding.</p>
            </div>
            <div className="voet-kolom">
              <h2>Zorg</h2>
              <ul>
                {site.diensten.map((d) => <li key={d.slug}><Link href={`/zorg/${d.slug}`}>{d.naam}</Link></li>)}
                <li><Link href="/zorg/particuliere-thuiszorg">Particuliere thuiszorg</Link></li>
                <li><Link href="/zorg/uurzorg">Zorg per uur</Link></li>
                <li><Link href="/zorg/blokzorg">Blokzorg</Link></li>
                <li><Link href="/zorg/24-uurszorg">24-uurszorg</Link></li>
                <li><Link href="/tarieven-en-vergoeding">Tarieven &amp; vergoeding</Link></li>
              </ul>
            </div>
            <div className="voet-kolom">
              <h2>Werkgebied</h2>
              <ul>
                {site.werkgebied.map((p) => (
                  <li key={p.slug}><Link href={`/zorg/${site.hoofddienst}/${p.slug}`}>Thuiszorg in {p.naam}</Link></li>
                ))}
                {site.steden.map((s) => (
                  <li key={s.slug}><Link href={`/zorg/particuliere-thuiszorg/${s.slug}`}>{s.naam}</Link></li>
                ))}
                <li><Link href="/werkgebied">Bekijk ons werkgebied</Link></li>
              </ul>
            </div>
            <div className="voet-kolom">
              <h2>Contact</h2>
              <ul>
                <li><a href={telLink()}>{site.telefoonWeergave}</a></li>
                <li><a href={`mailto:${site.email}`} style={{ overflowWrap: "anywhere" }}>{site.email}</a></li>
                <li>{site.plaats}</li>
                <li>ma t/m vr 10:00 tot 17:00</li>
                <li>Weekend: alleen spoedaanvragen</li>
                <li><Link href="/zorgvraag">Zorgvraag stellen</Link></li>
              </ul>
            </div>
            <div className="voet-kolom">
              <h2>Gegevens</h2>
              <ul>
                <li>KvK {site.kvk}</li>
                <li>AGB-code {site.agb}</li>
                <li><Link href="/over">Over ons</Link></li>
                <li><Link href="/veelgestelde-vragen">Veelgestelde vragen</Link></li>
                <li><Link href="/klachtenregeling">Klachtenregeling</Link></li>
                <li><Link href="/privacy">Privacyverklaring</Link></li>
                <li><Link href="/algemene-voorwaarden">Algemene voorwaarden</Link></li>
              </ul>
            </div>
          </div>
          <div className="voet-onder">
            <span>© {new Date().getFullYear()} {site.naam}</span>
            <span>Website door Zorgbaar</span>
          </div>
        </div>
      </footer>
      <div className="actiebalk" aria-label="Snel contact">
        <a className="knop rand" href={telLink()}>Bellen</a>
        <ZorgvraagKnop>Zorg aanvragen</ZorgvraagKnop>
      </div>
    </>
  );
}
