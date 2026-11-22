import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import { dienstSchema } from "@/lib/schema";
import { paginaMeta } from "@/components/meta";
import {
  BelBlok, BelKnop, DuoCta, Faq, FotoBoog, Hart, HartLijst, Hero, JsonLd, Stappen, STAPPEN, ZorgvraagKnop,
} from "@/components/Blokken";
import { FOTO, type Foto } from "@/components/fotos";
import { zorgvormen } from "../../zorgvormen";
import { steden } from "../steden";

type Props = { params: Promise<{ plaats: string }> };

export const dynamicParams = false;

// Alleen steden uit site.config met een uitgewerkte lokale laag.
export function generateStaticParams() {
  return site.steden.filter((s) => steden[s.slug]).map((s) => ({ plaats: s.slug }));
}

function zoek(slug: string) {
  const stad = site.steden.find((s) => s.slug === slug);
  const t = stad && steden[stad.slug];
  return stad && t ? { stad, t } : null;
}

// Wisselende beelden, zodat niet elke stadspagina met dezelfde foto opent.
const HERO: Foto[] = [FOTO.wandelen, FOTO.deur, FOTO.koffie, FOTO.rollator, FOTO.bank, FOTO.straat, FOTO.verzorging, FOTO.koken];

export async function generateMetadata({ params }: Props) {
  const gevonden = zoek((await params).plaats);
  if (!gevonden) return {};
  const { stad, t } = gevonden;
  const i = site.steden.findIndex((s) => s.slug === stad.slug);
  return paginaMeta({
    titel: `Particuliere thuiszorg in ${stad.naam} | ${site.merkKort}`,
    beschrijving: t.opening,
    pad: `/zorg/particuliere-thuiszorg/${stad.slug}`,
    foto: HERO[i % HERO.length],
  });
}

// Stadspagina (schrijfwijzer §3), in de vorm van het ontwerp van deze site.
export default async function StadPagina({ params }: Props) {
  const gevonden = zoek((await params).plaats);
  if (!gevonden) notFound();
  const { stad, t } = gevonden;
  const pad = `/zorg/particuliere-thuiszorg/${stad.slug}`;
  const i = site.steden.findIndex((s) => s.slug === stad.slug);
  const foto = HERO[i % HERO.length];
  const andere = site.steden.filter((s) => s.slug !== stad.slug && steden[s.slug]);

  const stappen = STAPPEN.map((s, n) =>
    n === 1 ? { kop: s.kop, tekst: `We komen bij u thuis in ${stad.naam} en bespreken uw wensen en gewoontes, in alle rust.` } : s
  );

  const faq = [
    ...t.faq,
    {
      vraag: `Wat kost particuliere thuiszorg in ${stad.naam}?`,
      antwoord: [
        `Het tarief hangt af van de zorg, de tijden en de omvang. U hoort het vooraf, na de kennismaking bij u thuis in ${stad.naam}. U betaalt particulier of vanuit een pgb.`,
        `Dat verschilt per situatie: welke zorg, hoe vaak en op welke tijden. Na de kennismaking in ${stad.naam} krijgt u het tarief op papier. Betalen kan particulier of met een pgb.`,
        `Er is geen vast bedrag, omdat geen zorgvraag hetzelfde is. Na een vrijblijvend gesprek bij u thuis in ${stad.naam} hoort u wat de zorg kost. U betaalt zelf of vanuit een pgb.`,
      ][i % 3],
    },
  ];

  return (
    <main>
      <JsonLd data={{ ...dienstSchema({ naam: `Particuliere thuiszorg in ${stad.naam}`, beschrijving: t.opening, pad, plaats: stad.naam }), serviceType: "Particuliere thuiszorg", image: `${site.url}${foto.src}` }} />

      {/* Hero + kruimelpad */}
      <Hero
        kruimels={[{ naam: "Particuliere thuiszorg", pad: "/zorg/particuliere-thuiszorg" }, { naam: stad.naam, pad }]}
        eb={`${stad.naam} · ${stad.provincie}`}
        titel={`Particuliere thuiszorg in ${stad.naam}`}
        lead={t.opening}
        acties={<><ZorgvraagKnop>Zorg aanvragen in {stad.naam}</ZorgvraagKnop><BelKnop /></>}
        plek={`Er is op dit moment plek voor nieuwe cliënten in ${stad.naam}`}
        foto={foto}
        badge={["ook in", stad.naam]}
      />

      {/* Wat het is, kort + zorgvormen */}
      <section className="sec">
        <div className="wrap duo boven">
          <div className="col g18" style={{ flexBasis: 460 }}>
            <h2 className="h2" id="zorg-thuis">Zorg thuis in {stad.naam}, met een vast gezicht</h2>
            <p className="tekst">{t.ligging} {[
              `U krijgt zorg van ${site.gezicht.naam}, ${site.gezicht.functie} met ${site.gezicht.jarenErvaring} jaar ervaring, en niet elke week iemand anders.`,
              `Aan de deur staat ${site.gezicht.voornaam}: ${site.gezicht.functie}, ${site.gezicht.jarenErvaring} jaar in de zorg, en elke keer dezelfde.`,
              `De zorg komt van ${site.gezicht.naam}, al ${site.gezicht.jarenErvaring} jaar verzorgende IG, en u ziet steeds hetzelfde vertrouwde gezicht.`,
            ][i % 3]}</p>
            <p className="tekst">{[
              <>Wat particuliere thuiszorg precies is en voor wie het past, leest u op onze pagina over <Link href="/zorg/particuliere-thuiszorg">particuliere thuiszorg</Link>. Hieronder staat wat er in {stad.naam} speelt.</>,
              <>De algemene uitleg staat op onze pagina over <Link href="/zorg/particuliere-thuiszorg">particuliere thuiszorg</Link>. Op deze pagina leest u wat er specifiek in {stad.naam} geldt.</>,
              <>Hoe particuliere thuiszorg werkt, leest u op de pagina <Link href="/zorg/particuliere-thuiszorg">particuliere thuiszorg</Link>. Hier vindt u wat u in {stad.naam} moet weten.</>,
            ][(i + 1) % 3]}</p>
          </div>
          <div className="citaat-kaart" style={{ flexBasis: 380 }}>
            <h3 className="h3">Onze zorg in {stad.naam}</h3>
            <div className="pills">
              {site.diensten.map((d) => <Link key={d.slug} className="pill" href={`/zorg/${d.slug}`} style={{ background: "var(--wit)" }}>{d.kort}</Link>)}
              {zorgvormen.map((z) => <Link key={z.slug} className="pill" href={`/zorg/${z.slug}`} style={{ background: "var(--wit)" }}>{z.kort}</Link>)}
            </div>
          </div>
        </div>
      </section>

      {/* De lokale laag */}
      <section className="sec ruim licht">
        <div className="wrap duo boven">
          <div className="col g18" style={{ flexBasis: 480 }}>
            <span className="hand">wat wij van {stad.naam} weten</span>
            <h2 className="h2" id="lokaal">{t.hoekKop}</h2>
            {t.hoek.map((p) => <p key={p} className="tekst">{p}</p>)}
          </div>
          <div className="col g16" style={{ flexBasis: 360 }}>
            <div className="route" style={{ borderRadius: "36px 8px 36px 8px" }}>
              <h3 className="h3" id="praktisch">Praktisch in {stad.naam}</h3>
              <dl>
                <dt>Wmo en pgb</dt><dd>{t.wmo}</dd>
                <dt>Ziekenhuis</dt><dd>{t.ziekenhuis}</dd>
                <dt>Wij komen in</dt><dd>{t.kernen.join(", ")}</dd>
              </dl>
            </div>
            <p className="sm" style={{ fontSize: 13.5 }}>Bronnen: {t.bronnen.join("; ")}.</p>
          </div>
        </div>
      </section>

      {/* Waarom mensen ons bellen */}
      <section className="sec ruim">
        <div className="wrap duo">
          <div style={{ flexBasis: 380 }}><FotoBoog foto={FOTO.handen} /></div>
          <div className="col g18" style={{ flexBasis: 440 }}>
            <h2 className="h2" id="waarom-wij">Waarom mensen in {stad.naam} ons bellen</h2>
            <HartLijst vet items={[
              `Een vast gezicht in ${stad.naam}, ook in het weekend`,
              "Echte tijd per bezoek, vanaf 3 uur",
              `Ervaring met complexere zorg: ${site.gezicht.specialisaties.slice(0, 3).join(", ").toLowerCase()}`,
              ...(site.directPlek ? ["Er is nu plek, u hoeft niet op een wachtlijst"] : []),
            ]} />
            <h3 className="h3" id="voorbereiden" style={{ marginTop: 8 }}>Zo bereidt u zich voor</h3>
            <p className="tekst">{t.voorbereiding}</p>
          </div>
        </div>
      </section>

      <Stappen kop={`Zo start de zorg in ${stad.naam}`} stappen={stappen} />

      <BelBlok
        kop={`Particulier of met een pgb in ${stad.naam}`}
        tekst="U betaalt de zorg zelf of vanuit een persoonsgebonden budget. Het tarief hangt af van de zorg en de tijden, en u hoort het vooraf."
        knop={<Link className="knop wit" href="/tarieven-en-vergoeding">Tarieven &amp; vergoeding</Link>}
      />

      <Faq kop={`Vragen over thuiszorg in ${stad.naam}`} vragen={faq} />

      {/* Interne links */}
      <section className="sec licht">
        <div className="wrap col g22">
          <h2 className="h2" style={{ textAlign: "center" }}>Ook in de buurt van {stad.naam}</h2>
          <div className="pills wit" style={{ justifyContent: "center" }}>
            <Link className="pill" href="/werkgebied"><Hart maat={15} />{site.plaats}</Link>
            {andere.map((s) => <Link key={s.slug} className="pill" href={`/zorg/particuliere-thuiszorg/${s.slug}`}>{s.naam}</Link>)}
          </div>
          <p className="sm" style={{ textAlign: "center" }}><Link href="/zorg/particuliere-thuiszorg">Alles over particuliere thuiszorg</Link></p>
        </div>
      </section>

      <DuoCta kop={`Zorg nodig in ${stad.naam}?`} />
    </main>
  );
}
