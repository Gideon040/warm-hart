import Link from "next/link";
import { site } from "@/site.config";
import { dienstSchema } from "@/lib/schema";
import { paginaMeta } from "@/components/meta";
import {
  BelBlok, BelKnop, DuoCta, Faq, FotoBoog, Hart, HartLijst, Hero, JsonLd, Stappen, ZorgKaarten, ZorgvraagKnop,
} from "@/components/Blokken";
import { FOTO } from "@/components/fotos";
import { zorgvormen } from "../zorgvormen";

const PAD = "/zorg/particuliere-thuiszorg";
const LEAD = `Particuliere thuiszorg is zorg bij u thuis die u zelf regelt en betaalt, particulier of met een pgb. Zonder wachtlijst en met een vast gezicht. Wij bieden het in ${site.plaats} en de steden eromheen.`;

export const metadata = paginaMeta({
  titel: `Particuliere thuiszorg in ${site.plaats} en omgeving | ${site.merkKort}`,
  beschrijving: LEAD,
  pad: PAD,
  foto: FOTO.verzorging,
});

// Pillar (schrijfwijzer §5): de brede uitleg. De stadspagina's eronder
// herhalen dit niet, maar voegen de lokale laag toe.
export default function ParticuliereThuiszorg() {
  return (
    <main>
      <JsonLd data={{ ...dienstSchema({ naam: "Particuliere thuiszorg", beschrijving: LEAD, pad: PAD }), serviceType: "Particuliere thuiszorg", areaServed: [site.plaats, ...site.steden.map((s) => s.naam)].map((n) => ({ "@type": "City", name: n })) }} />

      <Hero
        kruimels={[{ naam: "Particuliere thuiszorg", pad: PAD }]}
        titel={`Particuliere thuiszorg in ${site.plaats} en omgeving`}
        lead={LEAD}
        acties={<><ZorgvraagKnop /><BelKnop /></>}
        foto={FOTO.verzorging}
        badge={["een vast", "gezicht"]}
      />

      <section className="sec">
        <div className="wrap duo boven">
          <div className="col g18" style={{ flexBasis: 460 }}>
            <h2 className="h2" id="wat-is-particuliere-thuiszorg">Wat is particuliere thuiszorg?</h2>
            <p className="tekst">Particuliere thuiszorg is zorg aan huis die u rechtstreeks met een zorgaanbieder afspreekt, zonder dat de gemeente of het zorgkantoor eerst een indicatie hoeft te geven. U betaalt het zelf of vanuit een persoonsgebonden budget.</p>
            <p className="tekst">Het grote verschil met de reguliere thuiszorg zit in de tijd en de gezichten. Geen tien minuten per bezoek en elke dag iemand anders, maar echte tijd en een vertrouwd persoon die u kent. Bij ons is dat {site.gezicht.naam}, {site.gezicht.functie} met {site.gezicht.jarenErvaring} jaar ervaring.</p>
            <p className="tekst">Particuliere zorg kan op zichzelf staan, maar ook naast de wijkverpleging of de Wmo, voor de momenten waarop die zorg niet komt.</p>
          </div>
          <div className="citaat-kaart" style={{ flexBasis: 380 }}>
            <h3 className="h3">Zoveel zorg als u nodig heeft</h3>
            <div className="col g12">
              {zorgvormen.map((z) => (
                <Link key={z.slug} className="pill" href={`/zorg/${z.slug}`} style={{ background: "var(--wit)", justifyContent: "flex-start" }}><Hart maat={15} />{z.kort}</Link>
              ))}
            </div>
            <div className="plek"><Hart />Ook in het weekend</div>
          </div>
        </div>
      </section>

      <section className="sec licht">
        <div className="wrap col g32">
          <div className="kopregel">
            <h2 className="h2" id="zorgvormen">Welke zorg wij thuis bieden</h2>
            <span className="hand schuin">waarmee wij u graag helpen</span>
          </div>
          <ZorgKaarten metVraag />
        </div>
      </section>

      <section className="sec ruim">
        <div className="wrap duo">
          <div style={{ flexBasis: 380 }}><FotoBoog foto={FOTO.familie} kant="r" /></div>
          <div className="col g18" style={{ flexBasis: 440 }}>
            <h2 className="h2" id="wanneer-past-het">Wanneer past particuliere thuiszorg?</h2>
            <p className="tekst">Particuliere thuiszorg past bijna altijd waar iemand thuis wil blijven en daar hulp bij nodig heeft. Van lichte ondersteuning tot zorg die meer vraagt, zoals wondzorg of zorg in de laatste levensfase.</p>
            <HartLijst items={[
              "als aanvulling op de wijkverpleging of de Wmo",
              "als overbrugging, bijvoorbeeld na een ziekenhuisopname",
              "als er een wachtlijst is en u niet kunt wachten",
              "als u een vast gezicht wilt in plaats van wisselende zorgverleners",
            ]} />
            <p className="tekst">Voor veel mensen is zorg thuis een volwaardig alternatief voor een verpleeghuis. Voor de zwaarste doorlopende zorgvraag is het soms eerder een aanvulling of een overbrugging. Dat bespreken wij eerlijk met u.</p>
          </div>
        </div>
      </section>

      <Stappen />

      <BelBlok
        kop="Particulier of met een pgb"
        tekst="U betaalt de zorg zelf of vanuit een persoonsgebonden budget uit de Wmo, de Wlz of de Zorgverzekeringswet. Het tarief hangt af van de zorg en de tijden, en u hoort het vooraf."
        knop={<Link className="knop wit" href="/tarieven-en-vergoeding">Tarieven &amp; vergoeding</Link>}
      />

      <section className="sec licht" id="werkgebied">
        <div className="wrap col g28">
          <div className="col g12 midden" style={{ textAlign: "center" }}>
            <h2 className="h2" id="steden">Particuliere thuiszorg in uw stad</h2>
            <p className="tekst" style={{ maxWidth: 640 }}>Wij zijn gevestigd in {site.plaats} en komen in de steden en dorpen eromheen. Per stad leest u wat er lokaal speelt en hoe de zorg daar geregeld is.</p>
          </div>
          <div className="pills wit" style={{ justifyContent: "center" }}>
            <Link className="pill" href="/werkgebied"><Hart maat={15} />{site.plaats}</Link>
            {site.steden.map((s) => (
              <Link key={s.slug} className="pill" href={`${PAD}/${s.slug}`}><Hart maat={15} />{s.naam}</Link>
            ))}
          </div>
          <p className="sm" style={{ textAlign: "center" }}>Staat uw plaats er niet bij? Bel gerust, dan kijken we samen wat er mogelijk is.</p>
        </div>
      </section>

      <Faq
        kop="Veelgestelde vragen over particuliere thuiszorg"
        vragen={[
          { vraag: "Wat is particuliere thuiszorg?", antwoord: "Zorg bij u thuis die u rechtstreeks met een zorgaanbieder afspreekt en zelf betaalt, particulier of vanuit een pgb. U heeft er geen indicatie voor nodig en er is geen wachtlijst." },
          { vraag: "Heb ik een indicatie nodig?", antwoord: "Voor particuliere zorg niet. Wilt u betalen met een pgb, dan is er wel een indicatie of beschikking nodig, van de gemeente, het CIZ of een wijkverpleegkundige." },
          { vraag: "Wat is het verschil met de wijkverpleging?", antwoord: "De wijkverpleging wordt vergoed uit de zorgverzekering en werkt met korte bezoeken en wisselende teams. Bij particuliere zorg spreekt u zelf af hoeveel tijd er is en wie er komt. Het kan ook naast elkaar." },
          { vraag: "Hoeveel zorg kan ik krijgen?", antwoord: "Van 3 uur per keer tot 24-uurszorg, met blokken van 4 of 12 uur daartussen. Ook in het weekend. Een korter bezoek is op aanvraag mogelijk." },
          { vraag: "Hoe snel kan de zorg starten?", antwoord: "Er is op dit moment plek. Na de kennismaking bij u thuis spreken we samen een startdatum af." },
        ]}
      />

      <DuoCta />
    </main>
  );
}
