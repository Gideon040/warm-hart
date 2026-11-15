import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import { paginaMeta } from "@/components/meta";
import { BelBlok, DuoCta, Faq, Hart, HartLijst, Hero, Omvang } from "@/components/Blokken";
import { FOTO } from "@/components/fotos";

export const metadata: Metadata = paginaMeta({
  titel: `Tarieven en vergoeding thuiszorg | ${site.merkKort}`,
  beschrijving: `Wat kost particuliere thuiszorg in ${site.plaats}? Tarieven per dienst, en hoe u de zorg particulier of vanuit een pgb betaalt. Vooraf duidelijk.`,
  pad: "/tarieven-en-vergoeding",
  foto: FOTO.koffie,
});

// Alleen de routes die voor deze klant gelden: particulier en pgb (spec 4.4).
const ROUTES = [
  {
    kop: "Particulier",
    wat: "U betaalt de zorg zelf. U heeft geen indicatie nodig en u bepaalt samen met ons hoeveel zorg u krijgt en wanneer.",
    wie: "Voor iedereen die snel zorg wil, zonder aanvraag of wachttijd, of die zorg wil naast wat al vergoed wordt.",
    hoe: "Bel of stuur uw zorgvraag. Na de kennismaking legt u de afspraken en het tarief vast in een zorgovereenkomst.",
  },
  {
    kop: "Persoonsgebonden budget (pgb)",
    wat: "Met een pgb krijgt u een budget om zelf uw zorg in te kopen. Het geld wordt beheerd door de Sociale Verzekeringsbank (SVB), die ons namens u betaalt.",
    wie: "Een pgb kan komen uit de Wmo (aanvragen bij de gemeente), de Wet langdurige zorg (indicatie via het CIZ, budget via het zorgkantoor) of de Zorgverzekeringswet (aanvragen bij uw zorgverzekeraar, na een indicatie van een wijkverpleegkundige).",
    hoe: "Heeft u al een pgb, dan kunt u ons daaruit betalen. Heeft u er nog geen, dan leggen wij u graag uit welke route bij uw situatie past.",
  },
];

export default function Tarieven() {
  return (
    <main>
      <Hero
        kruimels={[{ naam: "Tarieven & vergoeding", pad: "/tarieven-en-vergoeding" }]}
        titel={`Wat kost thuiszorg bij ${site.naam}?`}
        lead="Eerlijk en vooraf duidelijk. U betaalt de zorg particulier of vanuit een persoonsgebonden budget. Het tarief hangt af van de zorg en de tijden, en u hoort het voordat de zorg start."
        acties={<><Link className="knop" href="/zorgvraag">Vraag het tarief op</Link><a className="knop rand" href={`tel:${site.telefoon}`}>Bel {site.telefoonWeergave}</a></>}
        plek={null}
        foto={FOTO.koffie}
        badge={["vooraf", "duidelijkheid"]}
        laag
      />

      {/* [2] Tarieven per dienst */}
      <section className="sec">
        <div className="wrap duo boven">
          <div className="col g18" style={{ flexBasis: 480 }}>
            <h2 className="h2">Tarieven per dienst</h2>
            <p className="tekst">Omdat iedere zorgvraag anders is, maken wij het tarief op maat. U krijgt het op papier voordat de zorg begint, zodat u niet voor verrassingen komt te staan.</p>
            <div className="tarief-rijen">
              {site.diensten.flatMap((d) =>
                d.tarieven.map((r) => (
                  <div key={r.label} className="tarief-rij">
                    <b><Link href={`/zorg/${d.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{r.label}</Link></b>
                    <span className="prijs">{r.prijs}</span>
                    <span>{r.eenheid}</span>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="citaat-kaart" style={{ flexBasis: 360 }}>
            <h3 className="h3">Zo gaan wij te werk</h3>
            <HartLijst items={[
              "Een vrijblijvend eerste gesprek",
              "Kennismaken bij u thuis",
              "Een vast gezicht",
              "Duidelijke afspraken over dagen, tijden en tarief",
            ]} />
            <h3 className="h3" style={{ marginTop: 6 }}>Omvang</h3>
            <div className="pills">{site.omvang.map((o) => <span key={o} className="pill" style={{ background: "var(--wit)" }}>{o}</span>)}</div>
          </div>
        </div>
      </section>

      {/* [3] Vergoeding */}
      <section className="sec licht">
        <div className="wrap col g32">
          <div className="kopregel">
            <h2 className="h2">Zo betaalt u de zorg</h2>
            <span className="hand schuin">particulier of met een pgb</span>
          </div>
          <div className="routes">
            {ROUTES.map((r) => (
              <div key={r.kop} className="route">
                <h3 className="h3" style={{ fontSize: 20, display: "flex", gap: 10, alignItems: "center" }}><Hart maat={20} />{r.kop}</h3>
                <dl>
                  <dt>Wat is het?</dt><dd>{r.wat}</dd>
                  <dt>Voor wie?</dt><dd>{r.wie}</dd>
                  <dt>Hoe regelt u het?</dt><dd>{r.hoe}</dd>
                </dl>
              </div>
            ))}
          </div>
          <Omvang label="Van een uur tot de hele dag:" />
        </div>
      </section>

      {/* [4] Wij helpen */}
      <BelBlok
        kop="Wij leggen het graag uit"
        tekst="Twijfelt u welke route bij u past, of hoe een pgb werkt? Bel of mail gerust. Wij denken met u mee, zonder verplichtingen."
        knop={<Link className="knop wit" href="/zorgvraag">Zorgvraag stellen</Link>}
      />

      {/* [5] Kostenvragen */}
      <Faq
        kop="Veelgestelde vragen over kosten"
        vragen={[
          { vraag: "Wat kost een uur zorg?", antwoord: "Het tarief hangt af van de zorg en de tijden, overdag, in de nacht of in het weekend. U hoort het vooraf, zodat u niet voor verrassingen komt te staan." },
          { vraag: "Wat is de minimale afname?", antwoord: "Zorg is mogelijk vanaf 1 uur per keer. Daarnaast bieden wij blokzorg, 4-uurs, 12-uurs en 24-uurszorg." },
          { vraag: "Kan ik de zorg betalen met een pgb?", antwoord: "Ja. U kunt de zorg particulier betalen of vanuit een persoonsgebonden budget." },
          { vraag: "Heb ik een indicatie nodig?", antwoord: "Voor particuliere zorg niet. Voor een pgb wel: die indicatie komt van de gemeente, het CIZ of een wijkverpleegkundige, afhankelijk van de route." },
          { vraag: "Zit ik ergens aan vast als ik contact opneem?", antwoord: "Nee. Een eerste gesprek is vrijblijvend." },
        ]}
      />

      <DuoCta />
    </main>
  );
}
