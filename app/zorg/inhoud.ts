// Teksten per dienst. Persoonlijke verzorging komt letterlijk uit het ontwerp
// (persoonlijke-verzorging.html); de andere diensten volgen hetzelfde sjabloon
// (structuurspec 4.2 en 4.3). Alleen wat uit de intake vaststaat: geen
// verzonnen cijfers, reviews of beloftes.
import { FOTO, type Foto } from "@/components/fotos";
import type { Vraag } from "@/components/Blokken";

export interface DienstInhoud {
  heroFoto: Foto;
  waaromFoto: Foto;
  badge: [string, string];
  h1: string;
  lead: string;
  watKop: string;
  watTekst: string[];
  helpenKop: string;
  helpen: string[];
  voorWie: string;
  situaties: { kop: string; tekst: string }[];
  tariefKop: string;
  tariefTekst: string;
  faq: Vraag[];
  // Dienst×plaats: eigen zin in de intro en een kortere uitleg.
  plaatsZin: string;
  plaatsWat: string;
}

const PGB: Vraag = {
  vraag: "Kan ik de zorg betalen met een pgb?",
  antwoord: "Ja. U kunt de zorg particulier betalen of vanuit een persoonsgebonden budget.",
};
const VAST: Vraag = {
  vraag: "Komt er steeds dezelfde zorgverlener?",
  antwoord: "Ja. Wij werken met een vaste zorgverlener, zodat u steeds een vertrouwd gezicht ziet.",
};
const START: Vraag = {
  vraag: "Hoe snel kan de zorg starten?",
  antwoord: "Er is op dit moment plek. Na de intake spreken we samen een startdatum af.",
};

export const inhoud: Record<string, DienstInhoud> = {
  "persoonlijke-verzorging": {
    heroFoto: FOTO.haar,
    waaromFoto: FOTO.verzorging,
    badge: ["in uw", "tempo"],
    h1: "Persoonlijke verzorging aan huis",
    lead: "Hulp bij wassen, aankleden en de dagelijkse verzorging, op uw manier en in uw tempo. Wij komen bij u thuis, doordeweeks en in het weekend.",
    watKop: "Wat is persoonlijke verzorging?",
    watTekst: [
      "Soms lukt het niet meer om uzelf helemaal te verzorgen. Dan is het fijn als iemand u helpt die de tijd neemt en deskundig is. U houdt zelf de regie: u bepaalt wat u zelf doet en waar u hulp bij wilt.",
    ],
    helpenKop: "Wij kunnen u onder andere helpen bij:",
    helpen: [
      "Wassen en douchen",
      "Aan- en uitkleden",
      "Haar-, huid- en mondverzorging",
      "Naar het toilet gaan",
      "In en uit bed komen",
      "Medicatie, in overleg",
    ],
    voorWie: "Voor iedereen in Almere die thuis wil blijven wonen en daar hulp bij kan gebruiken. Tijdelijk, bijvoorbeeld na een ziekenhuisopname, of voor langere tijd.",
    situaties: [
      { kop: "Na een ziekenhuisopname", tekst: "U mag naar huis, maar douchen en aankleden lukken nog niet alleen." },
      { kop: "Als het zwaarder wordt", tekst: "Wassen en aankleden kosten steeds meer moeite. Met hulp blijft u langer thuis wonen." },
      { kop: "Zorg die meer vraagt", tekst: "Ook wondzorg, stoma- en katheterzorg en medicatiebeheer zijn bij ons in vertrouwde handen." },
      { kop: "Mantelzorger overbelast", tekst: "Verzorgen is zwaar werk. Een deel uit handen geven maakt het vol te houden." },
    ],
    tariefKop: "Wat kost persoonlijke verzorging?",
    tariefTekst: "U betaalt de zorg particulier of vanuit een pgb. Het tarief hangt af van de zorg en de tijden. U hoort het vooraf, zodat u niet voor verrassingen komt te staan.",
    faq: [
      VAST,
      { vraag: "Kan ik ook in het weekend zorg krijgen?", antwoord: "Ja, persoonlijke verzorging is ook op zaterdag en zondag mogelijk." },
      PGB,
      START,
      { vraag: "Wat is de minimale afname?", antwoord: "Zorg is mogelijk vanaf 3 uur per keer. Een korter bezoek, bijvoorbeeld 1 uur, is op aanvraag mogelijk." },
    ],
    plaatsZin: "Bijvoorbeeld elke ochtend hulp bij het opstaan, wassen en aankleden, of een paar keer per week hulp bij het douchen.",
    plaatsWat: "Hulp bij wassen, aankleden en de dagelijkse verzorging, op uw manier en in uw tempo. U houdt zelf de regie: u bepaalt wat u zelf doet en waar u hulp bij wilt.",
  },

  nachtzorg: {
    heroFoto: FOTO.nacht,
    waaromFoto: FOTO.instoppen,
    badge: ["rustig de", "nacht door"],
    h1: "Nachtzorg aan huis",
    lead: "Aanwezigheid en zorg in de nacht, zodat u of uw naaste veilig thuis kan blijven en de familie weer kan slapen. Wij komen bij u thuis, doordeweeks en in het weekend.",
    watKop: "Wat is nachtzorg?",
    watTekst: [
      "'s Nachts is het stil in huis, maar juist dan kan er veel spelen: onrust, pijn, verwardheid of de angst om te vallen. Met nachtzorg is er iemand in huis die het overzicht houdt en helpt waar dat nodig is.",
      "Er zijn twee vormen: een waakdienst en een slaapdienst. Welke het beste past, bespreken we samen tijdens de intake.",
    ],
    helpenKop: "Wij kunnen u in de nacht onder andere helpen bij:",
    helpen: [
      "Toezicht en geruststelling bij onrust",
      "Naar het toilet gaan en verschonen",
      "Draaien en anders gaan liggen in bed",
      "Medicatie, in overleg",
      "Zorg en nabijheid in de laatste levensfase",
    ],
    voorWie: "Voor mensen in Almere die 's nachts niet alleen kunnen of willen zijn, en voor de familie die even niet meer kan waken. Tijdelijk of voor langere tijd.",
    situaties: [
      { kop: "Onrustige nachten", tekst: "Uw naaste is 's nachts verward of onrustig en loopt door het huis." },
      { kop: "De eerste nachten thuis", tekst: "Na een ziekenhuisopname zijn de nachten spannend. Iemand in huis geeft rust." },
      { kop: "In de laatste levensfase", tekst: "Waken bij iemand die gaat sterven, zodat de familie zelf kan rusten." },
      { kop: "Mantelzorger uitgeput", tekst: "Wie elke nacht opstaat, raakt op. Een paar nachten overnemen maakt veel verschil." },
    ],
    tariefKop: "Wat kost nachtzorg?",
    tariefTekst: "Nachtzorg rekenen wij per nacht. Het tarief hangt af van de vorm, een waakdienst of een slaapdienst, en van de tijden. U hoort het vooraf, zodat u niet voor verrassingen komt te staan.",
    faq: [
      {
        vraag: "Wat is het verschil tussen een waakdienst en een slaapdienst?",
        antwoord: "Bij een waakdienst blijft de zorgverlener de hele nacht wakker en is direct bij u als er iets is. Bij een slaapdienst slaapt de zorgverlener bij u in huis en staat op wanneer dat nodig is.",
      },
      VAST,
      { vraag: "Is nachtzorg ook in het weekend mogelijk?", antwoord: "Ja, nachtzorg is ook in de nachten van het weekend mogelijk." },
      PGB,
      START,
    ],
    plaatsZin: "Bijvoorbeeld een paar nachten per week, zodat de mantelzorger kan doorslapen, of elke nacht in een periode waarin het thuis spannend is.",
    plaatsWat: "Aanwezigheid en zorg in de nacht, als waakdienst of als slaapdienst. Zo kan uw naaste veilig thuis blijven en kan de familie weer slapen.",
  },

  "palliatieve-zorg": {
    heroFoto: FOTO.familie,
    waaromFoto: FOTO.handen,
    badge: ["tot het einde", "dichtbij"],
    h1: "Palliatieve en terminale zorg aan huis",
    lead: "Zorg en nabijheid in de laatste levensfase, bij u thuis. Met rust, aandacht en deskundigheid, zodat er ruimte is voor wat er echt toe doet.",
    watKop: "Wat is palliatieve en terminale zorg?",
    watTekst: [
      "Palliatieve zorg is zorg voor mensen die niet meer beter worden. Het doel is niet genezen, maar zo goed mogelijk leven in de tijd die er is: met zo min mogelijk pijn en ongemak, en met aandacht voor wat iemand belangrijk vindt. Terminale zorg is de zorg in de laatste weken of dagen van het leven.",
      "Veel mensen willen die laatste periode thuis zijn, in hun eigen omgeving en dicht bij hun naasten. Wij helpen dat mogelijk te maken. Terminale en palliatieve zorg is een van onze specialisaties.",
    ],
    helpenKop: "Wij kunnen u en uw naasten onder andere helpen bij:",
    helpen: [
      "Persoonlijke verzorging en comfort",
      "Aanwezigheid en waken, ook in de nacht",
      "Medicatie, in overleg",
      "Mond- en huidverzorging",
      "Rust en een luisterend oor voor de familie",
    ],
    voorWie: "Voor mensen in Almere in de laatste levensfase die thuis willen blijven, en voor hun naasten. Wij stemmen graag af met de huisarts en de andere zorgverleners die al betrokken zijn.",
    situaties: [
      { kop: "Thuis willen blijven", tekst: "Uw naaste wil de laatste periode thuis zijn, in de eigen vertrouwde omgeving." },
      { kop: "Familie die moet rusten", tekst: "U wilt erbij zijn, maar dag en nacht waken houdt niemand vol." },
      { kop: "Zorg die zwaarder wordt", tekst: "De zorg vraagt steeds meer. Dan is deskundigheid in huis een geruststelling." },
      { kop: "Na slecht nieuws", tekst: "Genezing is niet meer mogelijk. Samen kijken we wat er thuis nodig is." },
    ],
    tariefKop: "Wat kost palliatieve en terminale zorg?",
    tariefTekst: "U betaalt de zorg particulier of vanuit een pgb. Het tarief hangt af van de zorg en de tijden, overdag of in de nacht. U hoort het vooraf, zodat u niet voor verrassingen komt te staan.",
    faq: [
      { vraag: "Kunt u ook 's nachts bij ons waken?", antwoord: "Ja. Wij bieden ook nachtzorg, zodat er in de nacht iemand bij uw naaste is en de familie kan rusten." },
      VAST,
      { vraag: "Werkt u samen met de huisarts?", antwoord: "Ja. Wij stemmen graag af met de huisarts en met andere zorgverleners die al bij u betrokken zijn." },
      PGB,
      { vraag: "Hoe snel kan de zorg starten?", antwoord: "Er is op dit moment plek. Bel ons gerust; in het weekend zijn wij bereikbaar voor spoedaanvragen." },
    ],
    plaatsZin: "In de laatste levensfase telt elke dag. Omdat wij zelf in Almere gevestigd zijn, kunnen wij snel schakelen als de zorg zwaarder wordt.",
    plaatsWat: "Zorg en nabijheid in de laatste levensfase, thuis in uw eigen omgeving. Met zo min mogelijk pijn en ongemak, en met aandacht voor wat u en uw naasten belangrijk vinden.",
  },

  respijtzorg: {
    heroFoto: FOTO.bank,
    waaromFoto: FOTO.respijt,
    badge: ["even op", "adem"],
    h1: "Respijtzorg en mantelzorgondersteuning aan huis",
    lead: "Even vrij voor de mantelzorger. Wij nemen de zorg een paar uur, een dagdeel of een nacht van u over, zodat u op adem kunt komen terwijl uw naaste thuis goed verzorgd is.",
    watKop: "Wat is respijtzorg?",
    watTekst: [
      "Voor iemand zorgen die u lief is, doet u met liefde. Maar het is ook zwaar, en vaak houdt het nooit op. Respijtzorg betekent dat iemand anders de zorg tijdelijk van u overneemt, zodat u even tijd heeft voor uzelf.",
      "Dat kan een vast moment in de week zijn, een dagdeel, een nacht of een langere periode, bijvoorbeeld als u een weekend weg wilt.",
    ],
    helpenKop: "Terwijl u even vrij bent, zorgen wij onder andere voor:",
    helpen: [
      "Gezelschap en toezicht",
      "Persoonlijke verzorging",
      "Nachtzorg, zodat u kunt doorslapen",
      "Zorg als u een weekend of langer weg bent",
      "Een luisterend oor en meedenken met u als mantelzorger",
    ],
    voorWie: "Voor mantelzorgers in Almere die zorgen voor een partner, ouder of ander familielid en merken dat het te veel wordt. Of die gewoon even een middag voor zichzelf willen.",
    situaties: [
      { kop: "U slaapt slecht door de zorg", tekst: "Elke nacht opstaan put u uit. Een paar nachten overdragen geeft lucht." },
      { kop: "U wilt even weg", tekst: "Een weekend of een vakantie, zonder zorgen over hoe het thuis gaat." },
      { kop: "U werkt naast de zorg", tekst: "Werk, gezin en zorg samen zijn veel. Wij nemen vaste momenten over." },
      { kop: "Uw geduld raakt op", tekst: "Dat is een signaal, geen falen. Tijd voor uzelf maakt de zorg weer lichter." },
    ],
    tariefKop: "Wat kost respijtzorg?",
    tariefTekst: "U betaalt de zorg particulier of vanuit een pgb. Het tarief hangt af van de zorg en de tijden, overdag of in de nacht. U hoort het vooraf, zodat u niet voor verrassingen komt te staan.",
    faq: [
      {
        vraag: "Wat is het verschil tussen respijtzorg en gewone thuiszorg?",
        antwoord: "De zorg zelf is hetzelfde. Het verschil zit in het doel: bij respijtzorg nemen wij de zorg tijdelijk over, zodat u als mantelzorger op adem kunt komen.",
      },
      { vraag: "Kan respijtzorg ook voor een langere periode?", antwoord: "Ja. Zorg is mogelijk van 3 uur per keer tot 24-uurszorg, dus ook als u een paar dagen weg bent." },
      VAST,
      PGB,
    ],
    plaatsZin: "Bijvoorbeeld een vaste middag per week of een paar nachten, zodat u als mantelzorger op adem kunt komen.",
    plaatsWat: "Even vrij voor de mantelzorger. Wij nemen de zorg tijdelijk van u over: een paar uur, een dagdeel, een nacht of langer.",
  },

  dagbesteding: {
    heroFoto: FOTO.koken,
    waaromFoto: FOTO.rollator,
    badge: ["samen", "bezig zijn"],
    h1: "Dagbesteding en activering aan huis",
    lead: "Een zinvolle dag, thuis en in de buurt. Samen koken, een puzzel maken of een wandeling langs het water, afgestemd op wat u leuk vindt en wat u nog kunt.",
    watKop: "Wat is dagbesteding en activering?",
    watTekst: [
      "Dagbesteding betekent dat uw dag een prettig ritme en een fijne invulling heeft. Bij ons gebeurt dat persoonlijk: één op één, bij u thuis en in uw eigen omgeving.",
      "Activering helpt om in beweging te blijven en dingen zelf te blijven doen. Dat houdt lichaam en hoofd actief, en het is gewoon gezellig.",
    ],
    helpenKop: "Samen kunnen we onder andere:",
    helpen: [
      "Koken en boodschappen doen",
      "Wandelen, ook met rollator",
      "Puzzels, spelletjes en creatief bezig zijn",
      "Een kop koffie en een goed gesprek",
      "Structuur en ritme in de dag brengen",
    ],
    voorWie: "Voor mensen in Almere die thuis wonen en wat meer invulling, gezelschap of ritme in hun dag kunnen gebruiken. Bijvoorbeeld bij beginnende vergeetachtigheid, eenzaamheid of psychische kwetsbaarheid.",
    situaties: [
      { kop: "Lange, lege dagen", tekst: "De dagen duren lang en er is weinig om naar uit te kijken." },
      { kop: "Beginnende vergeetachtigheid", tekst: "Een vast ritme met een bekend gezicht geeft houvast." },
      { kop: "Na het verlies van een partner", tekst: "Het huis is stil geworden. Gezelschap en samen iets doen helpen." },
      { kop: "Weer in beweging komen", tekst: "Na een periode van ziekte of somberheid stap voor stap weer actief worden." },
    ],
    tariefKop: "Wat kost dagbesteding en activering?",
    tariefTekst: "U betaalt de zorg particulier of vanuit een pgb. Het tarief hangt af van de invulling en de tijden. U hoort het vooraf, zodat u niet voor verrassingen komt te staan.",
    faq: [
      { vraag: "Is de dagbesteding in een groep?", antwoord: "Nee. Wij bieden dagbesteding persoonlijk, één op één, bij u thuis en in uw eigen omgeving." },
      { vraag: "Kan dagbesteding samen met andere zorg?", antwoord: "Ja. Bijvoorbeeld persoonlijke verzorging in de ochtend en daarna samen iets ondernemen." },
      VAST,
      PGB,
    ],
    plaatsZin: "Bijvoorbeeld samen een rondje lopen langs het water, boodschappen doen in de buurt of samen koken aan uw eigen keukentafel.",
    plaatsWat: "Een zinvolle dag met ritme en gezelschap, één op één bij u thuis en in uw eigen omgeving. Samen koken, wandelen of een puzzel maken.",
  },
};

// Nachtzorg: één pagina met H2 waakdienst en H2 slaapdienst (regel 6.2).
export const WAAK_SLAAP = [
  {
    kop: "Waakdienst",
    tekst: "Bij een waakdienst blijft de zorgverlener de hele nacht wakker. Wij zijn er direct bij als er iets is: bij onrust, pijn, verschonen of medicatie. Dit past als er 's nachts regelmatig zorg nodig is, bijvoorbeeld in de laatste levensfase.",
  },
  {
    kop: "Slaapdienst",
    tekst: "Bij een slaapdienst slaapt de zorgverlener bij u in huis en staat op wanneer dat nodig is. Dit past als er 's nachts af en toe iets is, of als het vooral gaat om de geruststelling dat er iemand is. Voor een slaapdienst is een eigen slaapplek nodig.",
  },
];
