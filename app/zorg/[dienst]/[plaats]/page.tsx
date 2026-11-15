import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, type Plaats } from "@/site.config";
import { dienstSchema } from "@/lib/schema";
import { paginaMeta } from "@/components/meta";
import {
  BelBlok, BelKnop, DuoCta, Faq, FotoBoog, Hart, HartLijst, Hero, JsonLd, Stappen, STAPPEN, ZorgKaarten, ZorgvraagKnop,
} from "@/components/Blokken";
import { FOTO } from "@/components/fotos";
import { inhoud, WAAK_SLAAP } from "../../inhoud";

type Props = { params: Promise<{ dienst: string; plaats: string }> };

export const dynamicParams = false;

// Alleen combinaties die de klant echt aanbiedt (regel 6.1 structuurspec).
export function generateStaticParams() {
  return site.werkgebied.flatMap((p) =>
    (p.diensten as readonly string[]).map((d) => ({ dienst: d, plaats: p.slug }))
  );
}

function biedtAan(p: Plaats, dienst: string) {
  return (p.diensten as readonly string[]).includes(dienst);
}

function zoek(dienstSlug: string, plaatsSlug: string) {
  const dienst = site.diensten.find((d) => d.slug === dienstSlug);
  const plaats = site.werkgebied.find((p) => p.slug === plaatsSlug);
  if (!dienst || !plaats || !biedtAan(plaats, dienst.slug)) return null;
  return { dienst, plaats, t: inhoud[dienst.slug] };
}

function opsomming(items: readonly string[]) {
  return items.length > 1 ? `${items.slice(0, -1).join(", ")} en ${items[items.length - 1]}` : items[0];
}

// Unieke intro per combinatie: dienst + plaats + kernen + eigen dienstzin
// (spec 4.3 blok 2).
function intro(dienstNaam: string, zin: string, plaats: Plaats) {
  return `${site.naam} biedt ${dienstNaam.toLowerCase()} bij mensen thuis in ${plaats.naam}, in ${opsomming(plaats.kernen)}. ${zin}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dienst: d, plaats: p } = await params;
  const gevonden = zoek(d, p);
  if (!gevonden) return {};
  const { dienst, plaats, t } = gevonden;
  return paginaMeta({
    titel: `${dienst.naam} in ${plaats.naam} | ${site.merkKort}`,
    beschrijving: `${dienst.naam} bij u thuis in ${plaats.naam}: ${opsomming(plaats.kernen)}. Een vast gezicht, ook in het weekend. Particulier of met een pgb.`,
    pad: `/zorg/${dienst.slug}/${plaats.slug}`,
    foto: t.waaromFoto,
  });
}

export default async function DienstPlaatsPagina({ params }: Props) {
  const { dienst: d, plaats: p } = await params;
  const gevonden = zoek(d, p);
  if (!gevonden) notFound();
  const { dienst, plaats, t } = gevonden;
  const pad = `/zorg/${dienst.slug}/${plaats.slug}`;
  const isNacht = dienst.slug === "nachtzorg";
  const tekst = intro(dienst.naam, t.plaatsZin, plaats);

  const buren = [
    ...plaats.dichtbij.map((s) => site.werkgebied.find((w) => w.slug === s)),
    ...site.werkgebied,
  ]
    .filter((w): w is Plaats => !!w && w.slug !== plaats.slug && biedtAan(w, dienst.slug))
    .filter((w, i, arr) => arr.findIndex((x) => x.slug === w.slug) === i)
    .slice(0, 4);

  const plaatsFaq = [
    ...t.faq.slice(0, 3),
    { vraag: `In welke delen van ${plaats.naam} biedt u ${dienst.kort.toLowerCase()}?`, antwoord: `In heel ${plaats.naam}: ${opsomming(plaats.kernen)}.` },
    { vraag: `Biedt u ook zorg buiten ${plaats.naam}?`, antwoord: `Ons werkgebied is ${site.werkgebied.map((w) => w.naam).join(", ")}. Woont u net daarbuiten, neem dan gerust contact op.` },
  ];

  const stappen = STAPPEN.map((s, i) =>
    i === 1 ? { kop: s.kop, tekst: `We komen bij u thuis in ${plaats.naam} en bespreken uw wensen en gewoontes, in alle rust.` } : s
  );

  return (
    <main>
      <JsonLd data={{ ...dienstSchema({ naam: `${dienst.naam} in ${plaats.naam}`, beschrijving: tekst, pad, plaats: plaats.naam }), serviceType: dienst.naam, image: `${site.url}${t.waaromFoto.src}` }} />

      {/* [1-2] Kruimelpad + H1 + unieke intro */}
      <Hero
        kruimels={[{ naam: dienst.naam, pad: `/zorg/${dienst.slug}` }, { naam: plaats.naam, pad }]}
        titel={`${dienst.naam} in ${plaats.naam}`}
        lead={tekst}
        acties={<><ZorgvraagKnop zorg={dienst.slug} plaats={plaats.slug} /><BelKnop /></>}
        plek={`Er is op dit moment plek voor nieuwe cliënten in ${plaats.naam}`}
        foto={t.waaromFoto}
        badge={["dichtbij", `in ${plaats.naam}`]}
      />

      {/* [3] Wat is het, ingekort */}
      <section className="sec">
        <div className="wrap duo boven">
          <div className="col g18" style={{ flexBasis: 460 }}>
            <h2 className="h2">{t.watKop}</h2>
            <p className="tekst">{t.plaatsWat}</p>
            <p className="tekst">{t.helpenKop}</p>
            <HartLijst items={t.helpen} />
            <div><Link className="tekstlink" href={`/zorg/${dienst.slug}`}>Alles over {dienst.naam.toLowerCase()}</Link></div>
          </div>
          <div className="citaat-kaart" style={{ flexBasis: 380 }}>
            <h3 className="h3">Waarom onze zorg in {plaats.naam}?</h3>
            <HartLijst vet items={[
              `Dichtbij: wij zijn gevestigd in ${site.plaats}`,
              "Een vast gezicht, geen wisselende zorgverleners",
              "Ook op zaterdag en zondag",
              ...(site.directPlek ? ["Er is nu plek, geen wachtlijst"] : []),
            ]} />
          </div>
        </div>
        {isNacht && (
          <div className="wrap" style={{ marginTop: 48 }}>
            <div className="nacht">
              {WAAK_SLAAP.map((w) => (
                <div key={w.kop}>
                  <h2>{w.kop} in {plaats.naam}</h2>
                  <p className="tekst">{w.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* [4] Zo werkt het */}
      <Stappen kop={`Zo werkt het in ${plaats.naam}`} stappen={stappen} />

      {/* [5] Plaatsblok: per plaats uniek (anti-doorway) */}
      <section className="sec ruim">
        <div className="wrap duo">
          <div className="col g18" style={{ flexBasis: 440 }}>
            <span className="hand">wij komen graag bij u langs</span>
            <h2 className="h2">Zorg thuis in heel {plaats.naam}</h2>
            {plaats.eigenZin && <p className="tekst" style={{ fontStyle: "italic" }}>&ldquo;{plaats.eigenZin}&rdquo; ({site.gezicht.voornaam})</p>}
            <p className="tekst">{plaats.ligging}</p>
            <p className="tekst">{plaats.context}</p>
            <div className="pills">
              {plaats.kernen.map((k) => <span key={k} className="pill"><Hart maat={15} />{k}</span>)}
            </div>
            <p className="sm">Twijfelt u of u binnen ons werkgebied woont? <Link href="/contact">Neem gerust contact op.</Link></p>
          </div>
          <div style={{ flexBasis: 380 }}><FotoBoog foto={isNacht || dienst.slug === "palliatieve-zorg" ? FOTO.straat : FOTO.wandelen} /></div>
        </div>
      </section>

      {/* [6] Tarief */}
      <BelBlok
        kop={`${t.tariefKop.replace("?", "")} in ${plaats.naam}?`}
        tekst={t.tariefTekst}
        knop={<Link className="knop wit" href="/tarieven-en-vergoeding">Tarieven &amp; vergoeding</Link>}
      />

      {/* [7] FAQ */}
      <Faq kop={`Veelgestelde vragen over ${dienst.kort.toLowerCase()} in ${plaats.naam}`} vragen={plaatsFaq} />

      {/* [9] Interne links: andere diensten zelfde plaats + zelfde dienst buurplaatsen */}
      <section className="sec licht">
        <div className="wrap col g32">
          <h2 className="h2" style={{ textAlign: "center" }}>Ook in {plaats.naam}</h2>
          <ZorgKaarten uitzondering={dienst.slug} plaats={plaats} />
          {buren.length > 0 && (
            <div className="col g12">
              <b style={{ fontFamily: "var(--kop)" }}>{dienst.naam} ook in:</b>
              <div className="pills wit">
                {buren.map((w) => <Link key={w.slug} className="pill" href={`/zorg/${dienst.slug}/${w.slug}`}>{w.naam}</Link>)}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* [8] CTA */}
      <DuoCta zorg={dienst.slug} plaats={plaats.slug} kop={`Zorgvraag in ${plaats.naam}?`} />
    </main>
  );
}
