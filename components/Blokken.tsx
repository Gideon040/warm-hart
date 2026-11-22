import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/site.config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { Foto } from "./fotos";
import { FOTO } from "./fotos";

// Bouwstenen van het ontwerp. Elke pagina is opgebouwd uit deze
// blokken, in de volgorde van de structuurspec.

const HART_PAD =
  "M12 21s-7.5-4.7-9.6-9.3C.9 8.3 2.9 4.5 6.6 4.5c2.1 0 3.9 1.1 5.4 3 1.5-1.9 3.3-3 5.4-3 3.7 0 5.7 3.8 4.2 7.2C19.5 16.3 12 21 12 21z";

export function Hart({ maat = 16 }: { maat?: number }) {
  return (
    <svg aria-hidden="true" className="hartje" width={maat} height={maat} viewBox="0 0 24 24">
      <path fill="#E0603F" d={HART_PAD} />
    </svg>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function telLink() {
  return `tel:${site.telefoon}`;
}

export function BelKnop({ wit = false, children }: { wit?: boolean; children?: ReactNode }) {
  return (
    <a className={wit ? "knop wit-rand" : "knop rand"} href={telLink()}>
      {children ?? `Bel ${site.telefoonWeergave}`}
    </a>
  );
}

export function ZorgvraagKnop({ zorg, plaats, wit = false, children = "Zorg aanvragen" }: {
  zorg?: string;
  plaats?: string;
  wit?: boolean;
  children?: ReactNode;
}) {
  const q = new URLSearchParams();
  if (zorg) q.set("zorg", zorg);
  if (plaats) q.set("plaats", plaats);
  const pad = q.size ? `/zorgvraag?${q}` : "/zorgvraag";
  return <Link className={wit ? "knop wit" : "knop"} href={pad}>{children}</Link>;
}

// Kruimelpad + BreadcrumbList-schema (alles onder de home).
export function Kruimelpad({ items }: { items: readonly { naam: string; pad: string }[] }) {
  const alles = [{ naam: "Home", pad: "" }, ...items];
  return (
    <nav aria-label="Kruimelpad" className="kruimels">
      <JsonLd data={breadcrumbSchema(alles)} />
      <ol>
        {alles.map((it, i) => (
          <li key={it.pad || "home"}>
            {i < alles.length - 1 ? <Link href={it.pad || "/"}>{it.naam}</Link> : <span aria-current="page">{it.naam}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Plek({ children }: { children?: ReactNode }) {
  if (!site.directPlek) return null;
  return (
    <div className="plek">
      <Hart />
      <span>{children ?? "Er is op dit moment plek voor nieuwe cliënten"}</span>
    </div>
  );
}

// Lichtblauwe kopzone met tekst links en boogfoto + hartbadge rechts.
export function Hero({ kruimels, eb, titel, lead, acties, plek, foto, badge, laag = false }: {
  kruimels?: readonly { naam: string; pad: string }[];
  eb?: ReactNode;
  titel: ReactNode;
  lead: ReactNode;
  acties?: ReactNode;
  plek?: ReactNode;
  foto: Foto;
  badge: [string, string];
  laag?: boolean;
}) {
  return (
    <section className="hero-zone">
      <div className="wrap hero">
        <div className="hero-tekst">
          {kruimels && <Kruimelpad items={kruimels} />}
          {eb && <span className="eb">{eb}</span>}
          <h1 className="h1">{titel}</h1>
          <p className="lead">{lead}</p>
          <div className="rij">
            {acties ?? (<><ZorgvraagKnop /><BelKnop /></>)}
          </div>
          {plek !== null && <Plek>{plek}</Plek>}
        </div>
        <div className={laag ? "hero-beeld laag" : "hero-beeld"}>
          <Image src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} priority sizes="(max-width: 900px) 92vw, 520px" />
          <div className="hart-badge" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="#E0603F" d={HART_PAD} /></svg>
            <span>{badge[0]}<br />{badge[1]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Belofte() {
  const punten = [
    "Een vast gezicht",
    "Ook in het weekend",
    "Vanaf 3 uur tot 24-uurszorg",
    "Particulier en pgb",
    ...(site.vog ? ["VOG aanwezig"] : []),
  ];
  return (
    <section className="belofte" aria-label="Onze beloftes">
      <div className="wrap">
        <div className="belofte-kop"><p>Thuis, in uw eigen huis, de zorg die bij u past</p></div>
        <div className="belofte-punten">
          {punten.map((p) => <span key={p}><Hart maat={17} />{p}</span>)}
        </div>
      </div>
    </section>
  );
}

export function HartLijst({ items, vet = false, twee = false }: { items: readonly string[]; vet?: boolean; twee?: boolean }) {
  return (
    <ul className={["hartlijst", vet && "vet", twee && "twee"].filter(Boolean).join(" ")}>
      {items.map((t) => <li key={t}><Hart maat={15} /><span>{t}</span></li>)}
    </ul>
  );
}

export function FotoBoog({ foto, kant = "l", sizes = "(max-width: 900px) 92vw, 500px" }: { foto: Foto; kant?: "l" | "r"; sizes?: string }) {
  return <Image className={`foto boog-${kant}`} src={foto.src} alt={foto.alt} width={foto.w} height={foto.h} sizes={sizes} />;
}

// Kaartfoto per dienst (home, andere zorg, plaatsoverzicht).
export const KAARTFOTO: Record<string, Foto> = {
  "persoonlijke-verzorging": FOTO.verzorging,
  nachtzorg: FOTO.nacht,
  "palliatieve-zorg": FOTO.handen,
  respijtzorg: FOTO.respijt,
  dagbesteding: FOTO.puzzel,
};

export function ZorgKaarten({ uitzondering, plaats, metVraag = false }: { uitzondering?: string; plaats?: { slug: string; naam: string }; metVraag?: boolean }) {
  const lijst = site.diensten.filter((d) => d.slug !== uitzondering);
  return (
    <div className="kaarten">
      {lijst.map((d) => (
        <Link key={d.slug} className="zorgkaart" href={plaats ? `/zorg/${d.slug}/${plaats.slug}` : `/zorg/${d.slug}`}>
          <Image src={KAARTFOTO[d.slug].src} alt="" width={KAARTFOTO[d.slug].w} height={KAARTFOTO[d.slug].h} sizes="(max-width: 700px) 92vw, 360px" />
          <b>{plaats ? `${d.kort} in ${plaats.naam}` : d.naam}</b>
          <span>Bekijk deze zorg</span>
        </Link>
      ))}
      {metVraag && (
        <div className="zorgkaart leeg">
          <Hart maat={26} />
          <b>Staat uw zorgvraag er niet bij?</b>
          <span>Bel of mail gerust. Samen kijken we wat er mogelijk is.</span>
        </div>
      )}
    </div>
  );
}

export function Omvang({ label = "Van 3 uur tot de hele dag:" }: { label?: string }) {
  return (
    <div className="omvang">
      <b>{label}</b>
      <div className="pills">{site.omvang.map((o) => <span key={o} className="pill">{o}</span>)}</div>
    </div>
  );
}

export function Spoed({ kop = "Direct zorg nodig? Er is nu plek." }: { kop?: string }) {
  return (
    <div className="spoed">
      <h3>{site.directPlek ? kop : "Direct zorg nodig?"}</h3>
      <p>Bel op werkdagen tussen 10:00 en 17:00 uur. In het weekend zijn wij telefonisch bereikbaar voor spoedaanvragen.</p>
      <div className="rij"><ZorgvraagKnop wit /><BelKnop wit /></div>
    </div>
  );
}

// Donkerblauwe band met de grote belkaart rechts.
export function BelBlok({ kop, tekst, knop }: { kop: ReactNode; tekst: ReactNode; knop?: ReactNode }) {
  return (
    <section className="sec krap blauw">
      <div className="wrap duo" style={{ gap: "36px 64px" }}>
        <div className="col g16 op-donker">
          <h2 className="h2">{kop}</h2>
          <p style={{ maxWidth: 460 }}>{tekst}</p>
          <div>{knop ?? <Link className="knop wit" href="/contact">Contact opnemen</Link>}</div>
        </div>
        <div className="col g12" style={{ alignItems: "center", flexBasis: 360 }}>
          <a className="belkaart" href={telLink()}>
            <span>Bel ons op</span>
            <b>{site.telefoonWeergave}</b>
          </a>
          <span className="belkaart-onder" style={{ color: "var(--wit)" }}>{site.bereikbaarheid}</span>
        </div>
      </div>
    </section>
  );
}

export const WAARDEN = [
  { kop: "Warm en betrokken", tekst: "Wij nemen de tijd om u te leren kennen en te horen wat voor u belangrijk is." },
  { kop: "Rustig en geduldig", tekst: "Alles gebeurt in uw tempo. Dat geeft rust en vertrouwen." },
  { kop: "Betrouwbaar en punctueel", tekst: "Afspraak is afspraak. U weet wie er komt en wanneer." },
  { kop: "Duidelijke communicatie", tekst: "Korte lijnen met u en uw familie, zodat iedereen weet waar hij aan toe is." },
];

export function Waarden() {
  return (
    <div className="waarden">
      {WAARDEN.map((w) => (
        <div key={w.kop} className="waarde">
          <div className="waarde-kop"><Hart maat={22} /><h3>{w.kop}</h3></div>
          <p>{w.tekst}</p>
        </div>
      ))}
    </div>
  );
}

// Buiten Almere: eerlijk vooraf wat er kan (minimale omvang, kennismaking op
// afstand), met de reden erbij. Instelling: site.buitenAlmere.
export function BuitenAlmere({ plaats }: { plaats: string }) {
  const b = site.buitenAlmere;
  return (
    <section className="sec">
      <div className="wrap">
        <div className="citaat-kaart buiten-almere" id="zo-werkt-het">
          <h2 className="h3">Zo werkt het in {plaats}</h2>
          <p className="tekst">
            Wij komen in {plaats} vanaf <b>{b.minimum}</b>. Voor kortere bezoeken is de reistijd vanuit {site.plaats} te
            lang om u een vast gezicht te kunnen bieden. De intake doen wij eerst {b.kennismaking}. Start de zorg, dan komen wij bij u thuis.
          </p>
          <p className="sm">Twijfelt u of uw zorgvraag past? Bel of stuur uw vraag gewoon in, dan kijken we samen wat er kan.</p>
        </div>
      </div>
    </section>
  );
}

export const STAPPEN = [
  { kop: "U belt of mailt", tekst: "Vertel kort wat er speelt. Wij denken direct met u mee." },
  { kop: "Intake bij u thuis", tekst: "We bespreken uw wensen en gewoontes, in alle rust. De kosten van de intake hoort u vooraf." },
  { kop: "Afspraken op maat", tekst: "Welke dagen, welke tijden en welke zorg. U weet vooraf waar u aan toe bent." },
  { kop: "Start van de zorg", tekst: "Wij komen bij u langs, met een vast gezicht." },
];

export function Stappen({ kop = "Zo werkt het", sub = "in vier rustige stappen", stappen = STAPPEN, licht = true }: {
  kop?: ReactNode;
  sub?: string;
  stappen?: readonly { kop: string; tekst: string }[];
  licht?: boolean;
}) {
  return (
    <section className={licht ? "sec licht" : "sec"}>
      <div className="wrap col g32">
        <div className="kopregel">
          <h2 className="h2" style={{ textAlign: "center" }}>{kop}</h2>
          <span className="hand schuin">{sub}</span>
        </div>
        <ol className="stappen" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {stappen.map((s, i) => (
            <li key={s.kop} className="stap">
              <span className="stap-nr" aria-hidden="true">{i + 1}</span>
              <h3>{s.kop}</h3>
              <p>{s.tekst}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export type Vraag = { vraag: string; antwoord: string };

// FAQ met FAQPage-schema. "metSchema" uit als dezelfde vragen al elders op
// de pagina in het schema staan.
export function Faq({ kop, vragen, licht = false, metSchema = true }: { kop: ReactNode; vragen: readonly Vraag[]; licht?: boolean; metSchema?: boolean }) {
  return (
    <section className={licht ? "sec licht" : "sec"}>
      {metSchema && <JsonLd data={faqSchema(vragen)} />}
      <div className="wrap" style={{ maxWidth: 860 }}>
        <div className="col g28">
          <h2 className="h2" style={{ textAlign: "center" }}>{kop}</h2>
          <FaqLijst vragen={vragen} />
        </div>
      </div>
    </section>
  );
}

export function FaqLijst({ vragen }: { vragen: readonly Vraag[] }) {
  return (
    <div className="faq">
      {vragen.map((v) => (
        <details key={v.vraag}>
          <summary>{v.vraag}</summary>
          <div><p>{v.antwoord}</p></div>
        </details>
      ))}
    </div>
  );
}

// Slotblok van elke pagina: aanvragen links, vergoeding rechts.
export function DuoCta({ zorg, plaats, kop = "Zorg aanvragen of kennismaken?" }: { zorg?: string; plaats?: string; kop?: string }) {
  return (
    <section id="aanvraag" className="sec ruim">
      <div className="wrap duo-cta">
        <div className="links">
          <h2>{kop}</h2>
          <p>Vertel kort wat er nodig is. Wij nemen zo snel mogelijk contact met u op.</p>
          <div className="tussen">
            <ZorgvraagKnop wit zorg={zorg} plaats={plaats} />
            <Hart maat={44} />
          </div>
        </div>
        <div className="rechts">
          <h2>Particulier of met een pgb</h2>
          <p>U kunt de zorg zelf betalen of vanuit een persoonsgebonden budget. Wij leggen u graag uit hoe dat werkt.</p>
          <div className="rij" style={{ gap: "12px 18px" }}>
            <Link className="knop" href="/tarieven-en-vergoeding">Tarieven &amp; vergoeding</Link>
            <span className="hand schuin">vooraf duidelijkheid</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Labels({ items }: { items: readonly string[] }) {
  return <div className="pills">{items.map((t) => <span key={t} className="label">{t}</span>)}</div>;
}

// "Goed om te weten": vaste registraties uit site.config.
export function GoedOmTeWeten() {
  const items = [
    site.gezicht.niveau,
    `${site.gezicht.jarenErvaring} jaar ervaring`,
    ...(site.vog ? ["VOG aanwezig"] : []),
    `AGB ${site.agb}`,
    `KvK ${site.kvk}`,
    ...(site.wtza ? [`Wtza: ${site.wtza}`] : []),
    ...(site.klachtenAansluiting ? ["Wkkgz-klachtenregeling via SoloPartners"] : []),
  ];
  return <Labels items={items} />;
}
