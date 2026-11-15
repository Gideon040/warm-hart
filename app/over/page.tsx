import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import { paginaMeta } from "@/components/meta";
import { JsonLd, BelBlok, DuoCta, FotoBoog, GoedOmTeWeten, Hart, HartLijst, Hero, Waarden, ZorgKaarten } from "@/components/Blokken";
import { FOTO } from "@/components/fotos";

export const metadata: Metadata = paginaMeta({
  titel: `Over ons: ${site.gezicht.naam} | ${site.merkKort}`,
  beschrijving: `${site.naam} is opgericht door ${site.gezicht.naam}, verzorgende IG met ${site.gezicht.jarenErvaring} jaar ervaring. Particuliere zorg thuis in ${site.plaats}, met een vast gezicht.`,
  pad: "/over",
  foto: FOTO.deur,
});

const EIGENSCHAPPEN = [
  "Warm en betrokken", "Rustig en geduldig", "Betrouwbaar en punctueel", "Goed in luisteren",
  "Duidelijke communicatie", "Ervaren en deskundig", "Doortastend", "Flexibel", "Humor en luchtigheid",
];

// Over (structuurspec 4.5), vorm uit over-ons.html.
export default function Over() {
  const g = site.gezicht;
  const persoon = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/over#${g.voornaam.toLowerCase()}`,
    name: g.naam,
    jobTitle: g.functie,
    hasCredential: { "@type": "EducationalOccupationalCredential", name: g.niveau },
    knowsLanguage: ["nl", "en", "srn"],
    knowsAbout: g.specialisaties,
    worksFor: { "@id": `${site.url}/#organisatie` },
    url: `${site.url}/over`,
  };
  return (
    <main>
      <JsonLd data={persoon} />
      <Hero
        kruimels={[{ naam: "Over ons", pad: "/over" }]}
        titel="Zorgen is onze tweede natuur"
        lead={`Wij houden van mensen. Als particuliere thuiszorgorganisatie bieden wij zorg thuis in ${site.plaats}, met aandacht voor wie u bent.`}
        plek="Een vast gezicht, geen wisselende zorgverleners"
        foto={FOTO.deur}
        badge={["met een", "warm hart"]}
      />

      {/* [1] Verhaal + [2] gezicht */}
      <section className="sec ruim">
        <div className="wrap duo">
          <div className="col g18" style={{ flexBasis: 460 }}>
            <span className="hand">ons verhaal</span>
            <h2 className="h2">Iedereen is uniek, en zo zorgen wij ook</h2>
            <p className="tekst">{site.naam} is opgericht door {g.naam}, {g.functie} met {g.jarenErvaring} jaar ervaring in de zorg. De best mogelijke zorg bieden op individueel niveau, dat is wat ons drijft. Geen dag en geen mens is hetzelfde, en juist dat maakt ons werk zo mooi.</p>
            <p className="tekst">Cliënten ervaren onze warme, zorgzame houding en onze deskundigheid als iets wat <strong>rust en vertrouwen</strong> brengt. Met humor waar het kan en doortastend waar het moet.</p>
          </div>
          <figure className="citaat-kaart" style={{ margin: 0, flexBasis: 380 }}>
            <h3 className="h3">In de woorden van {g.voornaam}</h3>
            <blockquote>&ldquo;Ik houd van mensen en zorgen is mijn tweede natuur. De best mogelijke zorg bieden op individueel niveau geeft mij energie.&rdquo;</blockquote>
            <figcaption className="wie"><Hart maat={18} />{g.naam}, {g.functie}</figcaption>
          </figure>
        </div>
      </section>

      <section className="sec krap" style={{ paddingTop: 0 }}>
        <div className="wrap cijfers">
          <div className="cijfer"><b>{g.jarenErvaring} jaar</b><span>ervaring in de zorg</span></div>
          <div className="cijfer"><b>Niveau 3</b><span>verzorgende IG</span></div>
          <div className="cijfer"><b>{g.talen.length} talen</b><span>Nederlands, Engels en Sranantongo</span></div>
          {site.vog && <div className="cijfer"><b>VOG</b><span>aanwezig</span></div>}
        </div>
      </section>

      {/* [3] Werkwijze */}
      <section className="sec licht">
        <div className="wrap col g40 midden">
          <div className="kopregel">
            <h2 className="h2">Zo kennen cliënten ons</h2>
            <span className="hand schuin">en zo werken wij ook</span>
          </div>
          <div className="eigenschappen pills wit">
            {EIGENSCHAPPEN.map((e) => <span key={e} className="pill"><Hart maat={15} />{e}</span>)}
          </div>
          <div style={{ textAlign: "left", width: "100%" }}><Waarden /></div>
        </div>
      </section>

      {/* [2/4] Opleiding, ervaring en registraties */}
      <section className="sec ruim">
        <div className="wrap duo">
          <div style={{ flexBasis: 380 }}><FotoBoog foto={FOTO.medicatie} kant="r" /></div>
          <div className="col g20" style={{ flexBasis: 440 }}>
            <h2 className="h2">Opleiding en ervaring</h2>
            <p className="tekst">Onze zorg wordt verleend door een verzorgende IG (niveau 3) met {g.jarenErvaring} jaar ervaring. Daardoor zijn wij ook vertrouwd met zorg die meer vraagt dan een helpende hand. Onze specialisaties:</p>
            <HartLijst items={g.specialisaties} vet twee />
            <h3 className="h3" style={{ fontSize: 16, marginTop: 8 }}>Goed om te weten</h3>
            <GoedOmTeWeten />
            <p className="sm">Niet tevreden? Lees onze <Link href="/klachtenregeling">klachtenregeling</Link>.</p>
          </div>
        </div>
      </section>

      <BelBlok kop="Kennismaken?" tekst="Bel of mail gerust. Dan kijken we samen, zonder verplichtingen, wat wij voor u kunnen betekenen." />

      {/* [5] Werkgebied kort */}
      <section className="sec">
        <div className="wrap col g32">
          <div className="col g12 midden" style={{ textAlign: "center" }}>
            <h2 className="h2">Waar wij u mee kunnen helpen</h2>
            <p className="tekst">In heel {site.plaats}: {site.werkgebied[0].kernen.join(", ")}. <Link href="/werkgebied">Bekijk ons werkgebied</Link>.</p>
          </div>
          <ZorgKaarten />
        </div>
      </section>

      <DuoCta />
    </main>
  );
}
