// Zorgvormen naar omvang: hoeveel zorg en hoe lang achter elkaar. Dit staat
// los van de diensten (wat voor zorg). Alleen wat uit het ontwerp vaststaat:
// vanaf 3 uur per keer (korter op aanvraag), blokzorg, 4-uurs, 12-uurs en
// 24-uurszorg, ook in het weekend.
// Geen tarieven, geen beloftes over bezetting die niet uit de intake komen.
import { FOTO, type Foto } from "@/components/fotos";
import type { Vraag } from "@/components/Blokken";

export interface Zorgvorm {
  slug: string;
  naam: string;
  kort: string;
  titel: string;
  foto: Foto;
  zijFoto: Foto;
  badge: [string, string];
  h1: string;
  lead: string;
  watKop: string;
  wat: string[];
  momentenKop: string;
  momenten: { kop: string; tekst: string }[];
  pastKop: string;
  past: string[];
  eerlijk: { kop: string; tekst: string };
  kosten: string;
  faq: Vraag[];
}

export const zorgvormen: Zorgvorm[] = [
  {
    slug: "uurzorg",
    naam: "Zorg per uur",
    kort: "Vanaf 3 uur zorg",
    titel: "Zorg per uur, vanaf 3 uur",
    foto: FOTO.koffie,
    zijFoto: FOTO.deur,
    badge: ["vanaf", "3 uur"],
    h1: "Zorg per uur, vanaf 3 uur per keer",
    lead: "Een paar uur hulp op een vast moment, zodat de dag of de avond goed verloopt. Bij ons is zorg per uur mogelijk vanaf 3 uur per keer, bij u thuis, doordeweeks en in het weekend. Een korter bezoek, bijvoorbeeld 1 uur, is op aanvraag mogelijk.",
    watKop: "Wat is zorg per uur?",
    wat: [
      "Zorg per uur betekent dat wij op vaste momenten bij u langskomen voor de hulp die u nodig heeft, en daarna weer gaan. U heeft geen hele dag zorg nodig, maar wel een vertrouwd persoon op de momenten die ertoe doen.",
      "Een bezoek duurt minimaal 3 uur. Dat geeft rust: tijd om samen te douchen en aan te kleden, te eten, een stukje te wandelen of de medicatie rustig door te nemen, zonder haast. U ziet steeds hetzelfde gezicht. Is er maar een uur hulp nodig? Dat kan op aanvraag.",
    ],
    momentenKop: "Wanneer een paar uur zorg het verschil maakt",
    momenten: [
      { kop: "De ochtend", tekst: "Opstaan, wassen, aankleden, samen ontbijten en de ochtend rustig op gang helpen. Daarna kunt u de dag zelf aan." },
      { kop: "De avond", tekst: "De avondmaaltijd, hulp bij het naar bed gaan, de medicatie en nagaan of alles in orde is voor de nacht." },
      { kop: "Een vast moment in de week", tekst: "Bijvoorbeeld een ochtend of middag samen boodschappen doen, wandelen of iets ondernemen." },
      { kop: "Even vrij voor de mantelzorger", tekst: "Een middag waarin u als partner of kind zelf iets kunt doen, terwijl wij er zijn." },
    ],
    pastKop: "Zorg per uur past vaak als",
    past: [
      "u veel nog zelf kunt, maar een paar momenten per dag of week niet",
      "u net thuis bent na een ziekenhuisopname en een tijdje hulp nodig heeft",
      "de wijkverpleging niet op het tijdstip kan komen dat u nodig heeft",
      "u als mantelzorger een vast moment wilt overdragen",
    ],
    eerlijk: {
      kop: "Wat u van een paar uur zorg mag verwachten",
      tekst: "In drie uur kunnen wij veel, maar niet alles. Is er meer nodig dan in die tijd past, dan zeggen wij dat eerlijk en kijken we samen naar een langer blok. Andersom geldt hetzelfde: wij adviseren nooit meer uren dan nodig is.",
    },
    kosten: "Zorg per uur rekenen wij per uur. Het tarief hangt af van de zorg en de tijden, en u hoort het vooraf. U betaalt particulier of vanuit een pgb.",
    faq: [
      { vraag: "Wat is het minimum aantal uren?", antwoord: "Een bezoek duurt minimaal 3 uur. Een korter bezoek, bijvoorbeeld 1 uur, is op aanvraag mogelijk. Hoe vaak wij komen, bepaalt u samen met ons: één keer per week of elke dag." },
      { vraag: "Kan zorg per uur ook in het weekend?", antwoord: "Ja. Ook op zaterdag en zondag komen wij langs voor zorg per uur." },
      { vraag: "Komt er steeds dezelfde zorgverlener?", antwoord: "Ja. Wij werken met een vast gezicht, zodat u niet steeds iemand nieuws over de vloer krijgt." },
      { vraag: "Kan ik later meer uren krijgen?", antwoord: "Ja. Verandert uw situatie, dan passen wij de afspraken aan. Van 3 uur per keer tot 24-uurszorg is mogelijk." },
    ],
  },
  {
    slug: "blokzorg",
    naam: "Blokzorg",
    kort: "Blokzorg (4 en 12 uur)",
    titel: "Blokzorg: 4 of 12 uur zorg",
    foto: FOTO.puzzel,
    zijFoto: FOTO.koken,
    badge: ["een dagdeel", "of langer"],
    h1: "Blokzorg: 4 of 12 uur zorg aan één stuk",
    lead: "Een dagdeel of een hele dag of nacht iemand in huis. Met blokzorg is er een aaneengesloten blok zorg, zodat u of uw naaste niet alleen is en de mantelzorger even vrij kan zijn.",
    watKop: "Wat is blokzorg?",
    wat: [
      "Bij blokzorg komen wij niet even langs, maar blijven wij een aaneengesloten blok van een aantal uren. Wij bieden blokken van 4 uur en van 12 uur. In die tijd doen we de zorg die nodig is en zijn we er, ook als er even niets te doen is.",
      "Dat geeft rust. Er hoeft niets tussen twee bezoeken in te worden gepropt, en er is iemand bij de hand op de momenten dat het onverwacht nodig is.",
    ],
    momentenKop: "Zo kan een blok eruitzien",
    momenten: [
      { kop: "4 uur in de ochtend", tekst: "Opstaan, verzorging, ontbijt en daarna samen iets ondernemen, tot de lunch." },
      { kop: "4 uur in de middag", tekst: "Gezelschap, een wandeling of samen koken, terwijl de mantelzorger boodschappen doet of werkt." },
      { kop: "12 uur overdag", tekst: "Een hele dag zorg en aanwezigheid, van de ochtendverzorging tot het avondeten." },
      { kop: "12 uur in de nacht", tekst: "Van de avond tot de ochtend iemand in huis, als waakdienst of slaapdienst." },
    ],
    pastKop: "Blokzorg past vaak als",
    past: [
      "uw naaste niet langere tijd alleen thuis kan zijn",
      "de mantelzorger werkt of een dagdeel per week voor zichzelf nodig heeft",
      "er overdag of 's nachts op onvoorspelbare momenten hulp nodig is",
      "losse bezoeken te kort zijn om het rustig te doen",
    ],
    eerlijk: {
      kop: "Een blok is geen wachtkamer",
      tekst: "Een blok van 4 of 12 uur is meer dan oppassen. Wij vullen de tijd met wat bij u past: verzorging, gezelschap, iets ondernemen of gewoon rust. Wat er in het blok gebeurt, spreken we vooraf samen af.",
    },
    kosten: "Blokzorg rekenen wij per blok of per uur. Het tarief hangt af van de lengte van het blok en de tijden, overdag of in de nacht. U hoort het vooraf. U betaalt particulier of vanuit een pgb.",
    faq: [
      { vraag: "Welke blokken bieden jullie aan?", antwoord: "Blokken van 4 uur en van 12 uur. Daarnaast is zorg per uur mogelijk vanaf 3 uur per keer, en als 24-uurszorg." },
      { vraag: "Kan een blok ook in de nacht?", antwoord: "Ja. Een nachtblok kan als waakdienst, waarbij wij wakker blijven, of als slaapdienst, waarbij wij in huis slapen en opstaan als het nodig is." },
      { vraag: "Kan blokzorg ook in het weekend?", antwoord: "Ja. Blokzorg is ook op zaterdag en zondag mogelijk." },
      { vraag: "Is blokzorg hetzelfde als respijtzorg?", antwoord: "Blokzorg zegt iets over de lengte van de zorg, respijtzorg over het doel: de mantelzorger ontlasten. Vaak gaan ze samen, bijvoorbeeld een vast blok van 4 uur per week zodat u even vrij bent." },
    ],
  },
  {
    slug: "24-uurszorg",
    naam: "24-uurszorg",
    kort: "24-uurszorg",
    titel: "24-uurszorg thuis",
    foto: FOTO.mevrouw,
    zijFoto: FOTO.instoppen,
    badge: ["dag en", "nacht"],
    h1: "24-uurszorg thuis",
    lead: "Dag en nacht zorg in uw eigen huis. Voor als het alleen niet meer gaat, maar thuis blijven wel het belangrijkste is. Met een vast gezicht en rust in huis.",
    watKop: "Wat is 24-uurszorg?",
    wat: [
      "Bij 24-uurszorg is er de klok rond zorg in huis. Overdag helpen wij bij de verzorging, het eten, de medicatie en de dag zelf. 's Nachts is er iemand aanwezig, zodat er hulp is als die nodig is.",
      "Veel mensen kiezen voor 24-uurszorg in de laatste levensfase, of wanneer iemand niet meer veilig alleen kan zijn maar wel thuis wil blijven. Hoe de zorg precies wordt ingevuld, met welke diensten en tijden, bespreken wij eerlijk tijdens de intake.",
    ],
    momentenKop: "Een dag en nacht met 24-uurszorg",
    momenten: [
      { kop: "De ochtend", tekst: "Rustig opstaan, wassen, aankleden en ontbijten, in uw eigen tempo." },
      { kop: "Overdag", tekst: "Gezelschap, maaltijden, medicatie in overleg en waar het kan even naar buiten." },
      { kop: "De avond", tekst: "Samen de dag afsluiten, de avondverzorging en klaarmaken voor de nacht." },
      { kop: "De nacht", tekst: "Iemand in huis, zodat er hulp is bij onrust, pijn of als u naar het toilet moet." },
    ],
    pastKop: "24-uurszorg past vaak als",
    past: [
      "iemand in de laatste levensfase thuis wil zijn",
      "uw naaste niet meer veilig alleen kan zijn, overdag én 's nachts",
      "de familie de zorg niet langer zelf kan dragen",
      "een opname nog niet kan of niet gewenst is, en er overbrugging nodig is",
    ],
    eerlijk: {
      kop: "Thuis in plaats van een verpleeghuis?",
      tekst: "Voor veel mensen is 24-uurszorg thuis een volwaardig alternatief: de eigen omgeving, de eigen spullen, dezelfde gezichten. Voor de zwaarste doorlopende zorgvraag is het soms eerder een aanvulling of een overbrugging dan een vervanging. Dat bespreken wij eerlijk met u, zodat u een keuze maakt die echt past.",
    },
    kosten: "24-uurszorg is maatwerk. Het tarief hangt af van de invulling van de dag en de nacht en van de periode. U hoort het vooraf, op papier. U betaalt particulier of vanuit een pgb.",
    faq: [
      { vraag: "Hoe snel kan 24-uurszorg starten?", antwoord: "Er is op dit moment plek. Bel ons gerust, ook in het weekend voor spoed. Na de intake spreken we samen een startdatum af." },
      { vraag: "Kan 24-uurszorg ook tijdelijk?", antwoord: "Ja. Bijvoorbeeld na een ziekenhuisopname, in de laatste levensfase of als de mantelzorger een periode weg is." },
      { vraag: "Werken jullie samen met de huisarts?", antwoord: "Ja. Wij stemmen graag af met de huisarts en met andere zorgverleners die al bij u betrokken zijn." },
      { vraag: "Kan ik 24-uurszorg betalen met een pgb?", antwoord: "Ja. U kunt de zorg particulier betalen of vanuit een persoonsgebonden budget. Wij leggen u graag uit hoe dat werkt." },
    ],
  },
];
