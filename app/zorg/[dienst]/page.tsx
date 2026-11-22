import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import { dienstSchema } from "@/lib/schema";
import { paginaMeta } from "@/components/meta";
import {
  BelBlok, DuoCta, Faq, FotoBoog, Hart, HartLijst, Hero, JsonLd, Labels, Omvang, Stappen, ZorgKaarten, ZorgvraagKnop, BelKnop,
} from "@/components/Blokken";
import { inhoud, WAAK_SLAAP } from "../inhoud";

type Props = { params: Promise<{ dienst: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return site.diensten.map((d) => ({ dienst: d.slug }));
}

function zoek(slug: string) {
  const dienst = site.diensten.find((d) => d.slug === slug);
  return dienst ? { dienst, t: inhoud[dienst.slug] } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const gevonden = zoek((await params).dienst);
  if (!gevonden) return {};
  const { dienst, t } = gevonden;
  return paginaMeta({
    titel: `${dienst.naam} aan huis | ${site.merkKort}`,
    beschrijving: t.lead,
    pad: `/zorg/${dienst.slug}`,
    foto: t.heroFoto,
  });
}

// Dienst-hoofdpagina (structuurspec 4.2), vorm uit persoonlijke-verzorging.html.
export default async function DienstPagina({ params }: Props) {
  const gevonden = zoek((await params).dienst);
  if (!gevonden) notFound();
  const { dienst, t } = gevonden;
  const pad = `/zorg/${dienst.slug}`;
  const isNacht = dienst.slug === "nachtzorg";
  const plaatsen = site.werkgebied.filter((p) => (p.diensten as readonly string[]).includes(dienst.slug));

  return (
    <main>
      <JsonLd data={{ ...dienstSchema({ naam: dienst.naam, beschrijving: t.lead, pad }), serviceType: dienst.naam, image: `${site.url}${t.heroFoto.src}` }} />

      {/* [1-2] Kruimelpad + hero */}
      <Hero
        kruimels={[{ naam: dienst.naam, pad }]}
        titel={t.h1}
        lead={t.lead}
        acties={<><ZorgvraagKnop zorg={dienst.slug} /><BelKnop /></>}
        foto={t.heroFoto}
        badge={t.badge}
      />

      {/* [3] Wat is het + [4] voor wie */}
      <section className="sec">
        <div className="wrap duo boven">
          <div className="col g18" style={{ flexBasis: 460 }}>
            <h2 className="h2">{t.watKop}</h2>
            {t.watTekst.map((p) => <p key={p} className="tekst">{p}</p>)}
            <p className="tekst">{t.helpenKop}</p>
            <HartLijst items={t.helpen} />
          </div>
          <div className="citaat-kaart" style={{ flexBasis: 380 }}>
            <h3 className="h3">Voor wie?</h3>
            <p className="tekst">{t.voorWie}</p>
            <h3 className="h3" style={{ marginTop: 6 }}>Van 3 uur tot de hele dag</h3>
            <div className="pills">{site.omvang.map((o) => <span key={o} className="pill" style={{ background: "var(--wit)" }}>{o}</span>)}</div>
            <div className="plek"><Hart />Ook in het weekend</div>
          </div>
        </div>
        {isNacht && (
          <div className="wrap" style={{ marginTop: 48 }}>
            <div className="nacht">
              {WAAK_SLAAP.map((w) => (
                <div key={w.kop}>
                  <h2>{w.kop}</h2>
                  <p className="tekst">{w.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="wrap col g22" style={{ marginTop: 64 }}>
          <h2 className="h2">Herkent u een van deze situaties?</h2>
          <div className="situaties">
            {t.situaties.map((s) => (
              <div key={s.kop} className="situatie">
                <h3><Hart maat={15} />{s.kop}</h3>
                <p>{s.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [5] Zo werkt het */}
      <Stappen />

      {/* Waarom wij */}
      <section className="sec ruim">
        <div className="wrap duo">
          <div style={{ flexBasis: 380 }}><FotoBoog foto={t.waaromFoto} kant="r" /></div>
          <div className="col g18" style={{ flexBasis: 440 }}>
            <span className="hand">waarom wij</span>
            <h2 className="h2">Een vast gezicht, met {site.gezicht.jarenErvaring} jaar ervaring</h2>
            <p className="tekst">U krijgt geen wisselende zorgverleners over de vloer. Onze zorg wordt verleend door een verzorgende IG (niveau 3) met {site.gezicht.jarenErvaring} jaar ervaring. Cliënten ervaren onze warme, zorgzame houding en onze deskundigheid als iets wat rust en vertrouwen brengt.</p>
            <HartLijst vet items={[
              "Warm en betrokken, rustig en geduldig",
              "Betrouwbaar en punctueel",
              "Ervaring met wondzorg, medicatiebeheer en stoma- en katheterzorg",
              ...(site.vog ? ["VOG aanwezig"] : []),
            ]} />
            <div><Link className="knop" href="/over">Maak kennis met ons</Link></div>
          </div>
        </div>
      </section>

      {/* [6] Tarief */}
      <BelBlok
        kop={t.tariefKop}
        tekst={t.tariefTekst}
        knop={<Link className="knop wit" href="/tarieven-en-vergoeding">Tarieven &amp; vergoeding</Link>}
      />

      {/* [7] Plaatsen */}
      {plaatsen.length > 0 && (
        <section className="sec licht">
          <div className="wrap col g22">
            <h2 className="h2">{dienst.naam} in uw plaats</h2>
            {plaatsen.map((p) => (
              <div key={p.slug} className="col g16">
                <div className="pills wit">
                  <Link className="pill" href={`${pad}/${p.slug}`}><Hart maat={15} />{dienst.kort} in {p.naam}</Link>
                </div>
                <p className="sm">Wij komen in heel {p.naam}:</p>
                <Labels items={p.kernen} />
              </div>
            ))}
            <Omvang label="Mogelijk vanaf:" />
          </div>
        </section>
      )}

      {/* [8] FAQ */}
      <Faq kop={`Veelgestelde vragen over ${dienst.naam.toLowerCase()}`} vragen={t.faq} />

      {/* Andere zorg */}
      <section className="sec licht">
        <div className="wrap col g32">
          <h2 className="h2" style={{ textAlign: "center" }}>Andere zorg die wij bieden</h2>
          <ZorgKaarten uitzondering={dienst.slug} />
        </div>
      </section>

      {/* [9] CTA */}
      <DuoCta zorg={dienst.slug} />
    </main>
  );
}
