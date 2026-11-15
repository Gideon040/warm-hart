import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import { paginaMeta } from "@/components/meta";
import { BelBlok, DuoCta, Faq, Hart, Hero, Omvang, ZorgKaarten } from "@/components/Blokken";
import { FOTO } from "@/components/fotos";

export const metadata: Metadata = paginaMeta({
  titel: `Thuiszorg in ${site.plaats}: ons werkgebied | ${site.merkKort}`,
  beschrijving: `Particuliere thuiszorg in heel ${site.plaats}: ${site.werkgebied[0].kernen.join(", ")}. Een vast gezicht, ook in het weekend.`,
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
        titel={`Particuliere thuiszorg in ${site.plaats}`}
        lead={`Zoekt u zorg thuis in ${site.plaats}? Wij zijn een particuliere thuiszorgorganisatie met ${site.gezicht.jarenErvaring} jaar ervaring in de zorg. Wij bieden persoonlijke verzorging, nachtzorg, palliatieve zorg, respijtzorg en dagbesteding bij u thuis.`}
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
          { vraag: `Biedt u ook zorg buiten ${site.plaats}?`, antwoord: `Ons werkgebied is ${site.plaats}. Woont u net daarbuiten, neem dan gerust contact op.` },
          { vraag: "Kan ik de zorg betalen met een pgb?", antwoord: "Ja. U kunt de zorg particulier betalen of vanuit een persoonsgebonden budget." },
          { vraag: "Wanneer bent u bereikbaar?", antwoord: "Op maandag tot en met vrijdag van 10:00 tot 17:00 uur. In het weekend alleen voor spoedaanvragen." },
        ]}
      />

      <DuoCta />
    </main>
  );
}
