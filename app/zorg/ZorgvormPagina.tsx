import Link from "next/link";
import { site } from "@/site.config";
import { dienstSchema } from "@/lib/schema";
import { paginaMeta } from "@/components/meta";
import {
  BelBlok, BelKnop, DuoCta, Faq, FotoBoog, Hart, HartLijst, Hero, JsonLd, Stappen, ZorgKaarten, ZorgvraagKnop,
} from "@/components/Blokken";
import { zorgvormen } from "./zorgvormen";

// Pagina per zorgvorm (omvang): /zorg/uurzorg, /zorg/blokzorg, /zorg/24-uurszorg.

export function zorgvorm(slug: string) {
  const z = zorgvormen.find((x) => x.slug === slug);
  if (!z) throw new Error(`Onbekende zorgvorm ${slug}`);
  return z;
}

export function zorgvormMeta(slug: string) {
  const z = zorgvorm(slug);
  return paginaMeta({
    titel: `${z.titel} in ${site.plaats} e.o. | ${site.merkKort}`,
    beschrijving: z.lead,
    pad: `/zorg/${z.slug}`,
    foto: z.foto,
  });
}

export default function ZorgvormPagina({ slug }: { slug: string }) {
  const z = zorgvorm(slug);
  const pad = `/zorg/${z.slug}`;
  const andere = zorgvormen.filter((x) => x.slug !== z.slug);
  return (
    <main>
      <JsonLd data={{ ...dienstSchema({ naam: z.naam, beschrijving: z.lead, pad }), serviceType: z.naam, image: `${site.url}${z.foto.src}` }} />

      <Hero
        kruimels={[{ naam: "Particuliere thuiszorg", pad: "/zorg/particuliere-thuiszorg" }, { naam: z.naam, pad }]}
        titel={z.h1}
        lead={z.lead}
        acties={<><ZorgvraagKnop /><BelKnop /></>}
        foto={z.foto}
        badge={z.badge}
      />

      <section className="sec">
        <div className="wrap duo boven">
          <div className="col g18" style={{ flexBasis: 460 }}>
            <h2 className="h2" id="wat-is-het">{z.watKop}</h2>
            {z.wat.map((p) => <p key={p} className="tekst">{p}</p>)}
          </div>
          <div className="citaat-kaart" style={{ flexBasis: 380 }}>
            <h3 className="h3">{z.pastKop}</h3>
            <HartLijst items={z.past} />
          </div>
        </div>
        <div className="wrap col g22" style={{ marginTop: 64 }}>
          <h2 className="h2" id="momenten">{z.momentenKop}</h2>
          <div className="situaties">
            {z.momenten.map((m) => (
              <div key={m.kop} className="situatie">
                <h3><Hart maat={15} />{m.kop}</h3>
                <p>{m.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec ruim licht">
        <div className="wrap duo">
          <div style={{ flexBasis: 380 }}><FotoBoog foto={z.zijFoto} kant="r" /></div>
          <div className="col g18" style={{ flexBasis: 440 }}>
            <span className="hand">eerlijk is eerlijk</span>
            <h2 className="h2" id="verwachten">{z.eerlijk.kop}</h2>
            <p className="tekst">{z.eerlijk.tekst}</p>
            <p className="tekst">Welke zorg er in die uren gebeurt, kiest u zelf uit ons aanbod:</p>
            <div className="pills">
              {site.diensten.map((d) => <Link key={d.slug} className="pill" href={`/zorg/${d.slug}`} style={{ background: "var(--wit)" }}>{d.naam}</Link>)}
            </div>
          </div>
        </div>
      </section>

      <Stappen licht={false} />

      <BelBlok
        kop={`Wat kost ${z.naam.toLowerCase()}?`}
        tekst={z.kosten}
        knop={<Link className="knop wit" href="/tarieven-en-vergoeding">Tarieven &amp; vergoeding</Link>}
      />

      <Faq kop={`Veelgestelde vragen over ${z.naam.toLowerCase()}`} vragen={z.faq} />

      <section className="sec licht">
        <div className="wrap col g22">
          <h2 className="h2" style={{ textAlign: "center" }}>Meer of minder zorg nodig?</h2>
          <div className="pills wit" style={{ justifyContent: "center" }}>
            {andere.map((x) => <Link key={x.slug} className="pill" href={`/zorg/${x.slug}`}><Hart maat={15} />{x.kort}</Link>)}
            <Link className="pill" href="/zorg/particuliere-thuiszorg">Particuliere thuiszorg</Link>
          </div>
          <div style={{ marginTop: 16 }}><ZorgKaarten /></div>
        </div>
      </section>

      <DuoCta />
    </main>
  );
}
