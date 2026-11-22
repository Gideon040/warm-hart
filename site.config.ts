// Per klant invullen. slug MOET gelijk zijn aan organisaties.slug in het portaal.

// Diensten uit het ontwerp (intake). Volgorde = volgorde op de site en in de
// wizard; de eerste gekozen dienst gaat als zorgvraag naar het portaal.
// "zorgvraag" is de waarde uit het API-contract (zie CLAUDE.md).
// Geen verpleging: geen BIG-registratie bekend (regel 6.6 structuurspec).
// Tarieven: niet aangeleverd, dus "Op aanvraag" (regel 6.8).
const diensten = [
  {
    slug: "persoonlijke-verzorging",
    naam: "Persoonlijke verzorging",
    kort: "Persoonlijke verzorging",
    zorgvraag: "persoonlijke_verzorging",
    tarieven: [{ label: "Persoonlijke verzorging", eenheid: "per uur", prijs: "Op aanvraag" }],
  },
  {
    slug: "nachtzorg",
    naam: "Nachtzorg",
    kort: "Nachtzorg",
    zorgvraag: "nachtzorg",
    tarieven: [
      { label: "Waakdienst", eenheid: "per nacht", prijs: "Op aanvraag" },
      { label: "Slaapdienst", eenheid: "per nacht", prijs: "Op aanvraag" },
    ],
  },
  {
    slug: "palliatieve-zorg",
    naam: "Palliatieve en terminale zorg",
    kort: "Palliatieve zorg",
    zorgvraag: "palliatieve_zorg",
    tarieven: [{ label: "Palliatieve en terminale zorg", eenheid: "per uur of per nacht", prijs: "Op aanvraag" }],
  },
  {
    slug: "respijtzorg",
    naam: "Respijtzorg en mantelzorgondersteuning",
    kort: "Respijtzorg",
    zorgvraag: "respijtzorg",
    tarieven: [{ label: "Respijtzorg", eenheid: "per uur of per dagdeel", prijs: "Op aanvraag" }],
  },
  {
    slug: "dagbesteding",
    naam: "Dagbesteding en activering",
    kort: "Dagbesteding",
    zorgvraag: "dagbesteding",
    tarieven: [{ label: "Dagbesteding en activering", eenheid: "per uur of per dagdeel", prijs: "Op aanvraag" }],
  },
] as const;

// Werkgebied. In het ontwerp staat alleen Almere, met vijf stadsdelen. Die
// stadsdelen zijn geen losse plaatspagina's (te dun, doorway-risico), maar de
// kernen van één plaats. Komt er een buurplaats bij (bijv. Lelystad), voeg
// die hier toe; de dienst×plaatspagina's en de sitemap volgen vanzelf.
// - "diensten": alleen combinaties die de klant echt aanbiedt (regel 6.1).
// - "eigenZin": de ene zin van Anushka over zorg in deze plaats (intake).
//   Leeg = het blok wordt overgeslagen.
// - "context": alleen na te lopen feiten.
const alleDiensten = diensten.map((d) => d.slug);
const werkgebied = [
  {
    naam: "Almere",
    slug: "almere",
    gemeente: "Almere",
    kernen: ["Almere Stad", "Almere Buiten", "Almere Haven", "Almere Poort", "Almere Hout"],
    ligging:
      "Almere is een jonge stad in Flevoland, opgebouwd uit stadsdelen met elk een eigen karakter: van het oudste stadsdeel Almere Haven aan het Gooimeer tot Almere Poort aan de kant van Amsterdam.",
    context:
      "Het ziekenhuis van de stad is het Flevoziekenhuis in Almere Stad. Wie daar na een opname naar huis mag, heeft vaak meteen hulp nodig. Omdat wij zelf in Almere gevestigd zijn, zijn de lijnen kort.",
    dichtbij: [] as string[],
    eigenZin: "",
    diensten: alleDiensten,
  },
] as const;

// Steden rond Almere met een eigen pagina onder de pillar
// /zorg/particuliere-thuiszorg/[slug]. Lokale teksten en bronnen staan in
// app/zorg/particuliere-thuiszorg/steden.ts (zelfde slug). Almere zelf heeft
// geen stadspagina: dat is de homepage plus de dienst×Almere-pagina's.
const steden = [
  { naam: "Lelystad", slug: "lelystad", gemeente: "Lelystad", provincie: "Flevoland" },
  { naam: "Zeewolde", slug: "zeewolde", gemeente: "Zeewolde", provincie: "Flevoland" },
  { naam: "Dronten", slug: "dronten", gemeente: "Dronten", provincie: "Flevoland" },
  { naam: "Huizen", slug: "huizen", gemeente: "Huizen", provincie: "Noord-Holland" },
  { naam: "Blaricum", slug: "blaricum", gemeente: "Blaricum", provincie: "Noord-Holland" },
  { naam: "Laren", slug: "laren", gemeente: "Laren", provincie: "Noord-Holland" },
  { naam: "Eemnes", slug: "eemnes", gemeente: "Eemnes", provincie: "Utrecht" },
  { naam: "Naarden", slug: "naarden", gemeente: "Gooise Meren", provincie: "Noord-Holland" },
  { naam: "Bussum", slug: "bussum", gemeente: "Gooise Meren", provincie: "Noord-Holland" },
  { naam: "Muiden", slug: "muiden", gemeente: "Gooise Meren", provincie: "Noord-Holland" },
  { naam: "Hilversum", slug: "hilversum", gemeente: "Hilversum", provincie: "Noord-Holland" },
  { naam: "Weesp", slug: "weesp", gemeente: "Amsterdam", provincie: "Noord-Holland" },
  { naam: "Diemen", slug: "diemen", gemeente: "Diemen", provincie: "Noord-Holland" },
  { naam: "Nijkerk", slug: "nijkerk", gemeente: "Nijkerk", provincie: "Gelderland" },
  { naam: "Spakenburg", slug: "spakenburg", gemeente: "Bunschoten", provincie: "Utrecht" },
] as const;

const vastePaginas = [
  "/tarieven-en-vergoeding",
  "/over",
  "/zorgvraag",
  "/contact",
  "/veelgestelde-vragen",
  "/werkgebied",
  "/privacy",
  "/klachtenregeling",
  "/algemene-voorwaarden",
  "/zorg/particuliere-thuiszorg",
  "/zorg/uurzorg",
  "/zorg/blokzorg",
  "/zorg/24-uurszorg",
];

export const site = {
  slug: "particulierethuiszorgalmere",
  naam: "Particuliere Thuiszorg Almere",
  // Merknaam achter paginatitels; valt weg als de titel dan te lang wordt
  // (zie components/meta.ts).
  merkKort: "Particuliere Thuiszorg Almere",
  plaats: "Almere",
  segment: "thuiszorg",
  telefoon: "+31683217757",
  email: "ondernemendaandeslag@hotmail.nl",
  // Productie-URL zonder slash aan het einde. Gebruikt voor sitemap,
  // robots, canonicals en schema.org.
  url: "https://www.particulierethuiszorgalmere.nl",
  ga4Id: "G-4DFH5HZSEE",
  // TODO: Google Search Console, HTML-tag-methode: alleen de content-waarde.
  gscVerificatie: "" as string,
  // Extra paden van deze site (bijv. "/diensten/huishoudelijke-hulp-hengelo")
  // zodat ze in de sitemap komen zonder de basisbestanden aan te passen.
  extraPaginas: [
    ...vastePaginas,
    ...diensten.map((d) => `/zorg/${d.slug}`),
    ...werkgebied.flatMap((p) =>
      (p.diensten as readonly string[]).map((d) => `/zorg/${d}/${p.slug}`)
    ),
    ...steden.map((s) => `/zorg/particuliere-thuiszorg/${s.slug}`),
  ] as readonly string[],
  // Lokaal ontwikkelen: post naar het lokale portaal i.p.v. productie.
  apiUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/api/leads"
      : "https://app.zorgbaar.nl/api/leads",

  // --- Klantgegevens die in de teksten van deze site terugkomen ---
  telefoonWeergave: "06 83 21 77 57",
  bereikbaarheid: "ma t/m vr 10:00 tot 17:00, in het weekend alleen voor spoed",
  bereikbaarKort: "op werkdagen tussen 10:00 en 17:00 uur",
  regio: "Almere",
  directPlek: true,
  kvk: "76039463",
  agb: "41788355",
  vog: true,
  // Leeg = niet tonen. Invullen zodra de klant het aanlevert.
  wtza: "", // TODO: Wtza-status (melding/vergunning)
  geschilleninstantie: "", // TODO: naam geschilleninstantie (Wkkgz)
  klachtenfunctionaris: "", // TODO: naam/organisatie klachtenfunctionaris
  aansprakelijkheid: "", // TODO: verzekering beroeps- en bedrijfsaansprakelijkheid
  // Alleen wat van toepassing is: het ontwerp noemt particulier en pgb.
  financiering: ["Particulier", "Pgb"],
  // Plaats-links (home, werkgebied, footer) gaan naar deze dienst×plaats.
  hoofddienst: "persoonlijke-verzorging",
  omvang: ["Vanaf 1 uur zorg", "Blokzorg", "4-uurs zorg", "12-uurs zorg", "24-uurs zorg"],
  gezicht: {
    naam: "Anushka Young",
    voornaam: "Anushka",
    functie: "oprichter en verzorgende IG",
    niveau: "Verzorgende IG, niveau 3",
    jarenErvaring: 20,
    talen: ["Nederlands", "Engels", "Surinaams (Sranantongo)"],
    specialisaties: [
      "Terminale en palliatieve zorg",
      "Wondzorg",
      "Medicatiebeheer",
      "Stoma- en katheterzorg",
      "Ambulante begeleiding",
      "GGZ en psychiatrie",
    ],
    citaat:
      "Ik houd van mensen en zorgen is mijn tweede natuur. De best mogelijke zorg bieden op individueel niveau geeft mij energie. Iedereen is uniek en daar haal ik mijn afwisseling uit.",
  },
  // Pas tonen bij minimaal 3 echte reviews (voornaam, plaats, datum).
  reviews: [] as readonly { tekst: string; voornaam: string; plaats: string; datum: string }[],
  diensten,
  werkgebied,
  steden,
} as const;

export type Dienst = (typeof diensten)[number];
export type Plaats = (typeof werkgebied)[number];
export type Stad = (typeof steden)[number];
