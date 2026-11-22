import type { Metadata } from "next";
import { site } from "@/site.config";
import { paginaMeta } from "@/components/meta";
import { DuoCta, FaqLijst, JsonLd, Kruimelpad, type Vraag } from "@/components/Blokken";
import { faqSchema } from "@/lib/schema";
import { inhoud } from "../zorg/inhoud";

export const metadata: Metadata = paginaMeta({
  titel: `Veelgestelde vragen over thuiszorg | ${site.merkKort}`,
  beschrijving: `Antwoorden over kosten, pgb, werkwijze en bereikbaarheid van ${site.naam}, particuliere thuiszorg in ${site.plaats}.`,
  pad: "/veelgestelde-vragen",
});

// FAQ gegroepeerd per thema (structuurspec 4.8), met FAQ-schema.
const GROEPEN: { kop: string; vragen: Vraag[] }[] = [
  {
    kop: "Kosten en vergoeding",
    vragen: [
      { vraag: "Kan ik de zorg betalen met een pgb?", antwoord: "Ja. U kunt de zorg particulier betalen of vanuit een persoonsgebonden budget." },
      { vraag: "Wat kost een uur zorg?", antwoord: "Het tarief hangt af van de zorg en de tijden. U hoort het vooraf, zodat u niet voor verrassingen komt te staan." },
      { vraag: "Heb ik een indicatie nodig?", antwoord: "Voor particuliere zorg niet. Voor een pgb wel: die indicatie komt van de gemeente, het CIZ of een wijkverpleegkundige, afhankelijk van de route." },
      { vraag: "Wat is de minimale afname?", antwoord: "Zorg is mogelijk vanaf 3 uur per keer. Een korter bezoek, bijvoorbeeld 1 uur, is op aanvraag mogelijk." },
      { vraag: `Komen jullie ook buiten ${site.plaats}?`, antwoord: `Ja, in de steden rond ${site.plaats}, vanaf ${site.buitenAlmere.minimum}. Voor kortere bezoeken is de reistijd te lang om een vast gezicht te bieden. In ${site.plaats} maken wij kennis bij u thuis; daarbuiten eerst ${site.buitenAlmere.kennismaking}.` },
    ],
  },
  {
    kop: "Werkwijze",
    vragen: [
      { vraag: "Komt er steeds dezelfde zorgverlener?", antwoord: "Ja. Wij werken met een vaste zorgverlener, zodat u steeds een vertrouwd gezicht ziet." },
      { vraag: "Wie verleent de zorg?", antwoord: `De zorg wordt verleend door een verzorgende IG (niveau 3) met ${site.gezicht.jarenErvaring} jaar ervaring${site.vog ? ", met een VOG" : ""}.` },
      { vraag: "Welke talen spreekt u?", antwoord: "Wij spreken Nederlands, Engels en Surinaams (Sranantongo)." },
      inhoud.nachtzorg.faq[0],
      inhoud["palliatieve-zorg"].faq[2],
    ],
  },
  {
    kop: "Praktisch",
    vragen: [
      { vraag: "Hoe snel kan de zorg starten?", antwoord: "Er is op dit moment plek. Na de kennismaking spreken we samen een startdatum af." },
      { vraag: "Kan ik ook in het weekend zorg krijgen?", antwoord: "Ja, alle zorg is ook op zaterdag en zondag mogelijk." },
      { vraag: "Wanneer bent u bereikbaar?", antwoord: "Op maandag tot en met vrijdag van 10:00 tot 17:00 uur. In het weekend alleen voor spoedaanvragen." },
      { vraag: `In welke delen van ${site.plaats} biedt u zorg?`, antwoord: `In heel ${site.plaats}: Stad, Buiten, Haven, Poort en Hout.` },
      { vraag: `Komen jullie ook buiten ${site.plaats}?`, antwoord: `Ja. Wij komen ook in ${site.steden.map((s) => s.naam).join(", ")}.` },
      { vraag: "Kan ik ook bellen namens een familielid?", antwoord: "Ja, dat kan. Vertel ons gerust voor wie u belt en wat er nodig is." },
      { vraag: "Zit ik ergens aan vast als ik contact opneem?", antwoord: "Nee. Een eerste gesprek is vrijblijvend." },
    ],
  },
];

export default function VeelgesteldeVragen() {
  return (
    <main>
      <JsonLd data={faqSchema(GROEPEN.flatMap((g) => g.vragen))} />
      <section className="kop-licht">
        <div className="wrap col g18" style={{ maxWidth: 860 }}>
          <Kruimelpad items={[{ naam: "Veelgestelde vragen", pad: "/veelgestelde-vragen" }]} />
          <h1 className="h1">Veelgestelde vragen</h1>
          <p className="lead">Over kosten, onze werkwijze en de praktische kant. Staat uw vraag er niet bij? Bel gerust {site.telefoonWeergave}.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 860 }}>
          {GROEPEN.map((g) => (
            <div key={g.kop} className="faq-groep">
              <h2 className="h2" style={{ fontSize: 26 }}>{g.kop}</h2>
              <FaqLijst vragen={g.vragen} />
            </div>
          ))}
        </div>
      </section>
      <DuoCta />
    </main>
  );
}
