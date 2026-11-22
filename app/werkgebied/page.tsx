import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import { paginaMeta } from "@/components/meta";
import { BelBlok, DuoCta, Faq, Hart, Hero, Omvang, ZorgKaarten } from "@/components/Blokken";
import { FOTO } from "@/components/fotos";

export const metadata: Metadata = paginaMeta({
  titel: `Werkgebied: thuiszorg in ${site.plaats} en omgeving | ${site.merkKort}`,
  beschrijving: `Wij bieden particuliere thuiszorg in heel ${site.plaats} en in ${site.steden.length} steden eromheen, van Lelystad tot Hilversum. Een vast gezicht, ook in het weekend.`,
  pad: "/werkgebied",
  foto: FOTO.straat,
});

// Werkgebied (structuurspec 4.8), vorm uit thuiszorg-almere.html.
export default function Werkgebied() {
  const plaats = site.werkgebied[0];
  return (
    <main>
      <Hero
        kruimels={[{ naam: "Werkgebied", pad: "/werkgebied" }]}
        titel={`Ons werkgebied: ${site.plaats} en omgeving`}
        lead={`Zoekt u zorg thuis in ${site.plaats}? Wij zijn een particuliere thuiszorgorganisatie met ${site.gezicht.jarenErvaring} jaar ervaring in de zorg. Wij bieden persoonlijke verzorging, nachtzorg, palliatieve zorg, respijtzorg en dagbesteding bij u thuis, in Almere en de steden eromheen.`}
        plek={`Er is op dit moment plek voor nieuwe cliënten in ${site.plaats}`}
        foto={FOTO.straat}
        badge={["dichtbij", `in ${site.plaats}`]}
      />

      <section className="sec">
        <div className="wrap duo" style={{ gap: "40px 64px" }}>
          <div className="col g18">
            <h2 className="h2">Zorg thuis in heel {site.plaats}</h2>
            <p className="tekst">Thuis, in uw eigen huis, de zorg die bij u past. Dat is waar wij voor staan. Omdat wij in {site.plaats} gevestigd zijn, zijn wij dichtbij en zijn de lijnen kort.</p>
            <p className="tekst">{plaats.ligging}</p>
            <p className="tekst">Twijfelt u of u binnen ons werkgebied woont? Neem gerust contact op.</p>
            <div><Link className="knop" href="/contact">Contact opnemen</Link></div>
          </div>
          <div className="col g18">
            <span className="hand schuin" style={{ alignSelf: "flex-start" }}>wij komen graag bij u langs</span>
            <div className="pills wit">
              {plaats.kernen.map((k) => <span key={k} className="pill" style={{ background: "var(--licht)" }}><Hart maat={15} />{k}</span>)}
            </div>
            <p className="sm">Staat uw wijk of plaats er niet bij? Bel gerust, dan kijken we samen wat er mogelijk is.</p>
          </div>
        </div>
      </section>

      <section className="sec ruim" id="steden">
        <div className="wrap col g32">
          <div className="kopregel">
            <h2 className="h2">Ook in de steden rond {site.plaats}</h2>
            <span className="hand schuin">wij komen naar u toe</span>
          </div>
          <p className="tekst" style={{ maxWidth: 720 }}>
            In {site.plaats} komt alle zorg vanaf 3 uur per keer en doen wij de intake bij u thuis. In de steden rond {site.plaats} komen wij vanaf {site.buitenAlmere.minimum}, omdat de reistijd voor kortere bezoeken te lang is. De intake doen wij daar eerst {site.buitenAlmere.kennismaking}.
          </p>
          <div className="steden">
            {["Flevoland", "Noord-Holland", "Utrecht", "Gelderland"].map((prov) => {
              const lijst = site.steden.filter((st) => st.provincie === prov);
              return lijst.length ? (
                <div key={prov} className="col g12">
                  <b style={{ fontFamily: "var(--kop)", color: "var(--blauw)" }}>{prov}</b>
                  <div className="pills">
                    {lijst.map((st) => (
                      <Link key={st.slug} className="pill" href={`/zorg/particuliere-thuiszorg/${st.slug}`}><Hart maat={15} />{st.naam}</Link>
                    ))}
                  </div>
                </div>
              ) : null;
            })}
          </div>
          <p className="sm">Per stad leest u wat er lokaal speelt: waar u de Wmo regelt, welk ziekenhuis het dichtst bij is en in welke wijken wij komen. Staat uw plaats er niet bij? Bel gerust.</p>
        </div>
      </section>

      <section className="sec licht">
        <div className="wrap col g32">
          <div className="kopregel">
            <h2 className="h2">Onze zorg in {site.plaats}</h2>
            <span className="hand schuin">waarmee wij u graag helpen</span>
          </div>
          <div className="paneel">
            <ZorgKaarten plaats={plaats} />
            <Omvang />
          </div>
        </div>
      </section>

      <section className="sec ruim">
        <div className="wrap col g40 midden">
          <h2 className="h2">Waarom onze zorg in {site.plaats}?</h2>
          <div className="waarden" style={{ textAlign: "left" }}>
            {[
              { kop: "Dichtbij", tekst: `Wij zijn gevestigd in ${site.plaats} en kennen de stad.` },
              { kop: "Een vast gezicht", tekst: "U ziet een vertrouwd gezicht, geen wisselende zorgverleners." },
              { kop: "Ook in het weekend", tekst: "Alle zorg is ook op zaterdag en zondag mogelijk." },
              ...(site.directPlek ? [{ kop: "Er is nu plek", tekst: "U hoeft niet op een wachtlijst." }] : []),
            ].map((w) => (
              <div key={w.kop} className="waarde">
                <div className="waarde-kop"><Hart maat={22} /><h3>{w.kop}</h3></div>
                <p>{w.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BelBlok kop={`Zorg nodig in ${site.plaats}?`} tekst="Bel of mail gerust. Wij denken met u mee over wat er thuis nodig is, zonder verplichtingen." />

      <Faq
        kop={`Veelgestelde vragen over thuiszorg in ${site.plaats}`}
        vragen={[
          { vraag: `In welke delen van ${site.plaats} biedt u zorg?`, antwoord: `In heel ${site.plaats}: Stad, Buiten, Haven, Poort en Hout.` },
          { vraag: `Biedt u ook zorg buiten ${site.plaats}?`, antwoord: `Ja. Wij komen ook in ${site.steden.map((s) => s.naam).join(", ")}. Buiten ${site.plaats} komen wij vanaf ${site.buitenAlmere.minimum}, en de kennismaking doen wij eerst ${site.buitenAlmere.kennismaking}. Woont u net daarbuiten, bel dan gerust, dan kijken we samen wat er mogelijk is.` },
          { vraag: "Kan ik de zorg betalen met een pgb?", antwoord: "Ja. U kunt de zorg particulier betalen of vanuit een persoonsgebonden budget." },
          { vraag: "Wanneer bent u bereikbaar?", antwoord: "Op maandag tot en met vrijdag van 10:00 tot 17:00 uur. In het weekend alleen voor spoedaanvragen." },
        ]}
      />

      <DuoCta />
    </main>
  );
}
