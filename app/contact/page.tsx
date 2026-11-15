import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import { paginaMeta } from "@/components/meta";
import ZorgvraagFormulier from "@/components/ZorgvraagFormulier";
import { BelBlok, Faq, Hart, HartLijst, Kruimelpad, Plek, telLink } from "@/components/Blokken";
import { FOTO } from "@/components/fotos";

export const metadata: Metadata = paginaMeta({
  titel: `Contact en zorg aanvragen | ${site.merkKort}`,
  beschrijving: `Bel ${site.telefoonWeergave}, mail of vul het formulier in. Wij denken graag met u mee over zorg thuis in ${site.plaats}, zonder verplichtingen.`,
  pad: "/contact",
  foto: FOTO.bellen,
});

// Contact (structuurspec 4.8), vorm uit contact.html. Het formulier is het
// startpakketformulier; de uitgebreide wizard staat op /zorgvraag.
export default function Contact() {
  return (
    <main>
      <section className="hero-zone">
        <div className="wrap col g32">
          <div className="col g18" style={{ maxWidth: 720 }}>
            <Kruimelpad items={[{ naam: "Contact", pad: "/contact" }]} />
            <span className="hand">wij horen graag van u</span>
            <h1 className="h1">Contact opnemen of zorg aanvragen</h1>
            <p className="lead" style={{ maxWidth: 640 }}>Heeft u een zorgvraag of wilt u eerst even overleggen? Bel, mail of vul het formulier in. Wij denken graag met u mee, zonder verplichtingen.</p>
          </div>
          <div className="contactkaarten">
            <div className="contactkaart">
              <h2><Hart />Bellen</h2>
              <a href={telLink()}>{site.telefoonWeergave}</a>
              <span>ma t/m vr 10:00 tot 17:00</span>
            </div>
            <div className="contactkaart">
              <h2><Hart />Mailen</h2>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>Wij reageren zo snel mogelijk</span>
            </div>
            <div className="contactkaart">
              <h2><Hart />Spoed in het weekend</h2>
              <strong>Bel gerust</strong>
              <span>In het weekend zijn wij telefonisch bereikbaar voor spoedaanvragen</span>
            </div>
            <div className="contactkaart">
              <h2><Hart />Werkgebied</h2>
              <strong>{site.plaats}</strong>
              <span>Wij komen bij u thuis, in heel {site.plaats}. <Link href="/werkgebied">Bekijk ons werkgebied</Link></span>
            </div>
          </div>
        </div>
      </section>

      <section id="formulier" className="sec ruim">
        <div className="wrap duo boven" style={{ gap: "40px 48px" }}>
          <div className="formkaart" style={{ flexBasis: 460 }}>
            <h2 className="h2" style={{ fontSize: 26 }}>Stuur een bericht</h2>
            <ZorgvraagFormulier />
            <p className="sm">Wij nemen zo snel mogelijk contact met u op. Liever stap voor stap? <Link href="/zorgvraag">Stel uw zorgvraag in vijf korte stappen</Link>.</p>
          </div>
          <div className="col g22" style={{ flexBasis: 380 }}>
            <Image className="foto boog-l" style={{ height: 300 }} src={FOTO.bellen.src} alt={FOTO.bellen.alt} width={FOTO.bellen.w} height={FOTO.bellen.h} sizes="(max-width: 900px) 92vw, 460px" />
            <h2 className="h2" style={{ fontSize: 24 }}>Wat gebeurt er daarna?</h2>
            <HartLijst items={[
              "Wij bellen of mailen u terug om uw vraag te bespreken",
              "We plannen een kennismaking bij u thuis",
              "Samen maken we afspraken over de zorg en de tijden",
            ]} />
            <Plek />
            <p className="sm">KvK {site.kvk} · AGB-code {site.agb}</p>
          </div>
        </div>
      </section>

      <BelBlok
        kop="Liever direct iemand spreken?"
        tekst="Bel gerust op werkdagen tussen 10:00 en 17:00 uur. In het weekend zijn wij bereikbaar voor spoedaanvragen."
        knop={<Link className="knop wit" href="/zorgvraag">Zorgvraag stellen</Link>}
      />

      <Faq
        kop="Veelgestelde vragen"
        vragen={[
          { vraag: "Zit ik ergens aan vast als ik contact opneem?", antwoord: "Nee. Een eerste gesprek is vrijblijvend." },
          { vraag: "Kan ik de zorg betalen met een pgb?", antwoord: "Ja. U kunt de zorg particulier betalen of vanuit een persoonsgebonden budget." },
          { vraag: "Kan ik ook bellen namens een familielid?", antwoord: "Ja, dat kan. Vertel ons gerust voor wie u belt en wat er nodig is." },
        ]}
      />
    </main>
  );
}
