import Link from "next/link";
import { site } from "@/site.config";
import { haalArtikelen, artikelDatum } from "@/lib/kennisbank";
import {
  BelBlok, Belofte, DuoCta, FotoBoog, GoedOmTeWeten, Hart, HartLijst, Hero, Omvang,
  Spoed, Stappen, Waarden, ZorgKaarten,
} from "@/components/Blokken";
import { FOTO } from "@/components/fotos";
import { paginaMeta } from "@/components/meta";

export const metadata = paginaMeta({
  titel: `${site.merkKort} | Zorg thuis met een vast gezicht`,
  beschrijving: `Particuliere zorg thuis in ${site.plaats}: persoonlijke verzorging, nachtzorg, palliatieve zorg, respijtzorg en dagbesteding. Een vast gezicht, ook in het weekend.`,
  pad: "",
  foto: FOTO.mevrouw,
});

// Homepage volgens structuurspec 4.1, in de vorm van het ontwerp (index.html).
export default async function Home() {
  const artikelen = await haalArtikelen();
  const plaats = site.werkgebied[0];
  const g = site.gezicht;

  return (
    <main>
      {/* [2] Hero */}
      <Hero
        eb={`Particuliere thuiszorgorganisatie in ${site.plaats}`}
        titel={`Particuliere zorg thuis in ${site.plaats}, persoonlijk en dichtbij`}
        lead="Wij bieden persoonlijke verzorging, nachtzorg, palliatieve zorg en respijtzorg bij u thuis, doordeweeks en in het weekend. U krijgt een vast gezicht dat de tijd voor u neemt."
        foto={FOTO.mevrouw}
        badge={["zorg met", "aandacht"]}
      />

      {/* [3] Beloftes en registraties */}
      <Belofte />

      {/* Zorg zoals u het wilt + het gezicht in eigen woorden */}
      <section className="sec">
        <div className="wrap duo">
          <div className="col g20">
            <h2 className="h2">Zorg thuis zoals u het wilt</h2>
            <p className="tekst">Iedereen is uniek, en dat vraagt om zorg op individueel niveau. Samen kijken we wat u nodig heeft en op welke momenten. Denk aan:</p>
            <HartLijst items={[
              "Hulp bij wassen, aankleden en de dag beginnen",
              "Aanwezigheid en zorg in de nacht",
              "Zorg en nabijheid in de laatste levensfase",
              "Even vrij voor de mantelzorger",
            ]} />
            <div><Link className="knop" href="/over">Maak kennis met ons</Link></div>
          </div>
          <figure className="citaat-kaart" style={{ margin: 0, flexBasis: 380 }}>
            <h3 className="h3">In de woorden van {g.voornaam}</h3>
            <blockquote>&ldquo;{g.citaat}&rdquo;</blockquote>
            <figcaption className="wie"><Hart maat={18} />{g.naam}, {g.functie}</figcaption>
          </figure>
        </div>
      </section>

      {/* [4] Diensten */}
      <section id="zorg" className="sec licht" style={{ scrollMarginTop: 16 }}>
        <div className="wrap col g32">
          <div className="kopregel">
            <h2 className="h2" style={{ textAlign: "center" }}>Ons zorgaanbod</h2>
            <span className="hand schuin" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              waarmee wij u graag helpen
              <svg aria-hidden="true" width="34" height="22" viewBox="0 0 34 22" fill="none" stroke="#1F4E79" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4c9-3 21 0 27 12" /><path d="M22 15l7 2 1-7" /></svg>
            </span>
          </div>
          <div className="paneel">
            <ZorgKaarten metVraag />
            <Omvang />
            <Spoed />
          </div>
        </div>
      </section>

      {/* [5] Zo werkt het */}
      <Stappen licht={false} />

      {/* Deskundigheid */}
      <section className="sec ruim licht">
        <div className="wrap duo">
          <div style={{ flexBasis: 380 }}><FotoBoog foto={FOTO.wondzorg} kant="r" /></div>
          <div className="col g20" style={{ flexBasis: 440 }}>
            <h2 className="h2">Deskundige zorg, ook als het complexer wordt</h2>
            <p className="tekst">Onze zorg wordt verleend door een verzorgende IG (niveau 3) met {g.jarenErvaring} jaar ervaring. Daardoor zijn wij vertrouwd met zorg die meer vraagt dan een helpende hand. Onze specialisaties:</p>
            <HartLijst items={g.specialisaties} vet twee />
            <h3 className="h3" style={{ fontSize: 16, marginTop: 8 }}>Goed om te weten</h3>
            <GoedOmTeWeten />
          </div>
        </div>
      </section>

      <BelBlok
        kop="Wilt u eerst even overleggen?"
        tekst="Bel of mail gerust. Wij denken met u mee over wat er thuis nodig is, zonder verplichtingen."
      />

      {/* Waarden */}
      <section className="sec ruim" style={{ paddingBottom: 72 }}>
        <div className="wrap col g40 midden">
          <div className="col g12 midden">
            <h2 className="h2">Waar wij voor staan</h2>
            <p className="tekst" style={{ maxWidth: 560 }}>Geen haast en geen wisselende gezichten, maar zorg die past bij wie u bent.</p>
          </div>
          <div style={{ textAlign: "left", width: "100%" }}><Waarden /></div>
        </div>
      </section>

      {/* [6] Het gezicht */}
      <section id="over" className="sec" style={{ paddingTop: 48, paddingBottom: 96 }}>
        <div className="wrap duo">
          <div className="col g18" style={{ flexBasis: 440 }}>
            <span className="hand">even voorstellen</span>
            <h2 className="h2">Wie wij zijn</h2>
            <p className="tekst">{site.naam} is opgericht door {g.naam}, {g.functie} met {g.jarenErvaring} jaar ervaring. Zorgen zit in ons.</p>
            <p className="tekst">Cliënten ervaren onze warme, zorgzame houding en onze deskundigheid als iets wat <strong>rust en vertrouwen</strong> brengt. Met humor waar het kan en doortastend waar het moet.</p>
            <p className="tekst">Wij spreken Nederlands, Engels en Surinaams (Sranantongo).</p>
            <div><Link className="knop" href="/over">Lees meer over ons</Link></div>
          </div>
          <div style={{ flexBasis: 380 }}><FotoBoog foto={FOTO.koffie} /></div>
        </div>
      </section>

      {/* [8] Werkgebied */}
      <section id="werkgebied" className="sec licht">
        <div className="wrap duo" style={{ gap: "40px 64px" }}>
          <div className="col g18">
            <h2 className="h2">Zorg in {plaats.naam} en omgeving</h2>
            <p className="tekst">Wij zijn gevestigd in {plaats.naam} en dus dichtbij. Wij komen in heel {plaats.naam} en in de steden eromheen. Twijfelt u of u binnen ons werkgebied woont? Neem gerust contact op.</p>
            <div className="rij">
              <Link className="knop" href="/werkgebied">Ons werkgebied</Link>
              <Link className="knop rand" href="/contact">Contact opnemen</Link>
            </div>
          </div>
          <div className="col g18">
            <span className="hand schuin" style={{ alignSelf: "flex-start" }}>wij komen graag bij u langs</span>
            <div className="pills wit">
              {plaats.kernen.map((k) => <span key={k} className="pill"><Hart maat={15} />{k}</span>)}
            </div>
            <div className="col g12">
              <b style={{ fontFamily: "var(--kop)", fontSize: 15.5 }}>Onze zorg in {plaats.naam}:</b>
              <div className="pills wit">
                {site.diensten.map((d) => (
                  <Link key={d.slug} className="pill" href={`/zorg/${d.slug}/${plaats.slug}`}>{d.kort} in {plaats.naam}</Link>
                ))}
              </div>
            </div>
            <div className="col g12">
              <b style={{ fontFamily: "var(--kop)", fontSize: 15.5 }}>Ook in de steden rond {plaats.naam}:</b>
              <div className="pills wit">
                {site.steden.map((s) => (
                  <Link key={s.slug} className="pill" href={`/zorg/particuliere-thuiszorg/${s.slug}`}>{s.naam}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [9] Kennisbank: pas tonen bij minimaal 3 artikelen */}
      {artikelen.length >= 3 && (
        <section className="sec">
          <div className="wrap col g32">
            <div className="kopregel">
              <h2 className="h2">Uit onze kennisbank</h2>
              <span className="hand schuin">handig om te weten</span>
            </div>
            <ul className="zb-kennisbank-lijst" style={{ marginTop: 0 }}>
              {artikelen.slice(0, 3).map((a) => (
                <li key={a.slug}>
                  <Link href={`/kennisbank/${a.slug}`}>
                    <h3 style={{ fontSize: 19 }}>{a.titel}</h3>
                    {a.samenvatting && <p>{a.samenvatting}</p>}
                    <time dateTime={a.gepubliceerd_op}>{artikelDatum(a.gepubliceerd_op)}</time>
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ textAlign: "center" }}><Link className="knop rand" href="/kennisbank">Alle artikelen</Link></div>
          </div>
        </section>
      )}

      {/* [10] CTA + vergoeding */}
      <DuoCta />
    </main>
  );
}
