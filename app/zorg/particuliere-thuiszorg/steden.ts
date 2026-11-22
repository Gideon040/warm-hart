// Lokale laag per stad (schrijfwijzer locatiepagina's, §4 en §5).
// Alleen feiten uit het lokale onderzoek, met bron. Geen verzonnen cijfers,
// geen reistijden in minuten, geen tarieven. Elke stad heeft een eigen
// openingszin, invalshoek, voorbereiding en FAQ: geen twee pagina's mogen
// hetzelfde zeggen met alleen de plaatsnaam verwisseld.
import type { Vraag } from "@/components/Blokken";
import { site } from "@/site.config";

const MIN = site.buitenAlmere.minimum;

export interface StadInhoud {
  kernen: string[];
  opening: string;
  ligging: string;
  hoekKop: string;
  hoek: string[];
  wmo: string;
  ziekenhuis: string;
  voorbereiding: string;
  faq: Vraag[];
  bronnen: string[];
}

export const steden: Record<string, StadInhoud> = {
  huizen: {
    kernen: ["Oude Dorp", "Huizermaat", "Bovenmaten", "Hogemaat", "Zenderwijk", "Westereng", "Havengebied", "Valkeveen", "Bikbergen", "Huizerhoogt"],
    opening: "Particuliere thuiszorg in Huizen betekent bij ons: een vast gezicht aan de deur, ook in het weekend, in een gemeente waar relatief veel mensen ouder worden in hun eigen huis.",
    ligging: "Huizen ligt aan de overkant van het Gooimeer, tegenover Almere Haven. Via de Hollandse Brug komen wij vanuit Almere naar u toe.",
    hoekKop: "Huizen vergrijst het snelst van het Gooi",
    hoek: [
      "Ruim een kwart van de inwoners van Huizen is 65 jaar of ouder, en meer dan een derde van de huishoudens bestaat uit één persoon. Dat zijn de cijfers van het CBS per 1 januari 2026. Achter die getallen zitten veel mensen die alleen wonen en het liefst blijven waar ze zijn, in het Oude Dorp of aan de rand van Bikbergen.",
      "Voor het ziekenhuis gaat u vanuit Huizen naar Tergooi MC in Hilversum. Wie daar wordt ontslagen, komt vaak sneller thuis dan de familie had gedacht. Dan is het fijn als de zorg thuis meteen klaarstaat.",
      "Voor de laatste levensfase is er in Huizen een kleinschalig hospice. Wie liever thuis blijft, kan bij ons terecht voor palliatieve zorg en nachtzorg aan huis.",
    ],
    wmo: "De Wmo regelt u in Huizen via Maatschappelijke Zaken HBEL, dat de Wmo uitvoert voor Huizen, Blaricum, Eemnes en Laren.",
    ziekenhuis: "Tergooi MC in Hilversum",
    voorbereiding: "Woont uw vader of moeder alleen in Huizen? Schrijf dan eens op op welke momenten van de dag u zich het meest zorgen maakt. Is het de ochtend, het douchen, of juist de stilte in de avond? Met dat lijstje beginnen we het gesprek.",
    faq: [
      { vraag: "Komen jullie ook in Bikbergen en Valkeveen?", antwoord: "Ja. Wij komen in heel Huizen, ook in de buurtschappen Bikbergen, Valkeveen en Huizerhoogt. Woont u op een plek waarvan u twijfelt, bel ons gerust even." },
      { vraag: "Mijn moeder komt uit het ziekenhuis in Hilversum. Kunnen jullie dan snel starten?", antwoord: "Er is op dit moment plek. Bel ons zodra de ontslagdatum bekend is, dan plannen we de kennismaking bij u thuis in Huizen en spreken we samen een startdatum af." },
      { vraag: "Kan ik in Huizen naast de Wmo ook particuliere zorg krijgen?", antwoord: "Ja. Particuliere zorg kan naast wat u via HBEL of de wijkverpleging krijgt, bijvoorbeeld voor de momenten waarop die zorg niet komt. Heeft u een pgb, dan kunt u ons daar ook uit betalen." },
    ],
    bronnen: ["CBS via AlleCijfers.nl, peildatum 1-1-2026", "Maatschappelijke Zaken HBEL", "Tergooi MC"],
  },

  naarden: {
    kernen: ["Naarden-Vesting", "Naarderbos", "Hakkelaarsbrug", "Crailo"],
    opening: "Wie particuliere thuiszorg in Naarden zoekt, komt vaak net uit een revalidatie en wil nu weer gewoon thuis zijn. Daar helpen wij bij, met een vast gezicht en rustig aan.",
    ligging: "Naarden hoort bij de gemeente Gooise Meren en ligt net over de Hollandse Brug, vanuit Almere dichtbij.",
    hoekKop: "Na de revalidatie weer thuis in Naarden",
    hoek: [
      "In Naarden zit een revalidatiecentrum midden in het dorp. Veel mensen gaan na een ziekenhuisopname eerst daarheen en komen pas daarna naar huis. Juist dat moment, de eerste weken thuis, is kwetsbaar: wat in de revalidatie lukte met hulp in de buurt, moet nu in uw eigen huis.",
      "De Wmo loopt voor Naarden via de gemeente Gooise Meren. Het gemeentehuis staat in Bussum, dus ook als u in de Vesting woont, gaat de aanvraag via Bussum. Dat is goed om te weten als u een pgb wilt aanvragen.",
      "Veel mensen zoeken op Naarden en Bussum tegelijk. Wij komen in beide plaatsen.",
    ],
    wmo: "De Wmo regelt u in Naarden via de gemeente Gooise Meren, met het gemeentehuis aan de Brinklaan in Bussum.",
    ziekenhuis: "Tergooi MC in Hilversum",
    voorbereiding: "Komt u of uw naaste thuis na een revalidatie? Vraag dan het overdrachtsverslag op en kijk wat er in de laatste week nog met hulp ging. Dat is precies waar wij thuis in Naarden mee verder kunnen.",
    faq: [
      { vraag: "Kunnen jullie de zorg overnemen na een revalidatie in Naarden?", antwoord: "Ja. Wij kunnen starten zodra u thuiskomt. Bel ons als de ontslagdatum bekend is, dan maken we kennis bij u thuis en spreken we af welke zorg er de eerste weken nodig is." },
      { vraag: "Komen jullie ook in de Vesting?", antwoord: "Ja. Wij komen in Naarden-Vesting, Naarderbos en de rest van Naarden, en ook in Bussum." },
      { vraag: "Waar vraag ik in Naarden een pgb voor de Wmo aan?", antwoord: "Bij de gemeente Gooise Meren, waar Naarden onder valt. Het gemeentehuis staat in Bussum. Wij leggen u graag uit hoe een pgb werkt en hoe u ons daaruit betaalt." },
    ],
    bronnen: ["Gemeente Gooise Meren", "CBS via AlleCijfers.nl, peildatum 1-1-2026"],
  },

  bussum: {
    kernen: ["Centrum", "Brediuskwartier", "Eng", "Spiegel"],
    opening: "Particuliere thuiszorg in Bussum is vaak zorg voor iemand die alleen woont. Wij komen bij u thuis, met een vast gezicht en zonder haast.",
    ligging: "Bussum hoort bij de gemeente Gooise Meren. Vanuit Almere zijn wij via de Hollandse Brug snel in het Gooi.",
    hoekKop: "In Bussum woont relatief veel mensen alleen",
    hoek: [
      "Bussum heeft het hoogste aandeel eenpersoonshuishoudens van het Gooi: ruim vier op de tien, volgens het CBS per 1 januari 2026. Ouder worden en alleen wonen gaat goed, tot het ineens niet meer gaat. Dan is er niemand die het merkt als iemand de ochtend moeilijk doorkomt.",
      "Particuliere zorg vult precies dat gat. Een vast moment in de ochtend of avond, iemand die opmerkt hoe het gaat en die het met de familie deelt als er iets verandert.",
      "Het Wmo-loket van de gemeente Gooise Meren zit in het gemeentehuis aan de Brinklaan, in Bussum zelf.",
    ],
    wmo: "De Wmo regelt u bij de gemeente Gooise Meren, in het gemeentehuis aan de Brinklaan in Bussum.",
    ziekenhuis: "Tergooi MC in Hilversum",
    voorbereiding: "Woont uw naaste alleen in Bussum en woont u zelf verder weg? Spreek dan af wie van de familie het eerste aanspreekpunt is. Dan weten wij wie we bellen als er iets opvalt, en houdt u het overzicht.",
    faq: [
      { vraag: "Mijn vader woont alleen in Bussum. Houden jullie de familie op de hoogte?", antwoord: "Ja. Wij spreken bij de start af wie het aanspreekpunt is en hoe u op de hoogte blijft. Valt ons iets op, dan bellen wij u." },
      { vraag: "In welke wijken van Bussum komen jullie?", antwoord: "In heel Bussum: het Centrum, het Brediuskwartier, de Eng, de Spiegel en de rest van de plaats. Ook in Naarden komen wij." },
      { vraag: "Kan ik in Bussum ook alleen in het weekend zorg krijgen?", antwoord: "Ja. Zorg is ook alleen op zaterdag en zondag mogelijk, bijvoorbeeld als de familie doordeweeks bijspringt maar in het weekend niet kan." },
    ],
    bronnen: ["CBS via AlleCijfers.nl, peildatum 1-1-2026", "Gemeente Gooise Meren"],
  },

  eemnes: {
    kernen: ["Eemnes-Dorp", "Eembrugge", "Noordbuurt", "Zuidbuurt", "Wakkerendijk", "Heidehoek"],
    opening: "Particuliere thuiszorg in Eemnes regelt u bij ons met één telefoontje. Dat is prettig, want de rest van de zorg in Eemnes loopt via meer loketten dan u zou verwachten.",
    ligging: "Eemnes ligt in de provincie Utrecht, aan de rand van het Gooi en bij de Eem. Vanuit Almere komen wij via de Hollandse Brug.",
    hoekKop: "Eemnes: Utrecht, maar het loket zit in het Gooi",
    hoek: [
      "Eemnes hoort bij de provincie Utrecht, maar werkt samen met Blaricum en Laren in de BEL Combinatie. De Wmo wordt uitgevoerd door Maatschappelijke Zaken HBEL in Huizen, in Noord-Holland. Een inwoner van Eemnes regelt zijn Wmo dus via een loket over de provinciegrens.",
      "Dat maakt het voor families soms onoverzichtelijk. Bij particuliere zorg heeft u daar geen last van: u belt ons, wij maken kennis en spreken samen af wat er nodig is. Heeft u al een pgb via HBEL, dan kunt u ons daaruit betalen.",
    ],
    wmo: "De Wmo regelt u in Eemnes via Maatschappelijke Zaken HBEL in Huizen, dat werkt voor Huizen, Blaricum, Eemnes en Laren.",
    ziekenhuis: "Tergooi MC in Hilversum",
    voorbereiding: "Twijfelt u in Eemnes bij welk loket u moet zijn? Begin dan niet bij het loket, maar bij de vraag wat er thuis niet meer lukt. Dat bespreken we samen, en daarna kijken we welke route past.",
    faq: [
      { vraag: "Komen jullie ook in Eembrugge en de buitengebieden van Eemnes?", antwoord: "Ja. Wij komen in Eemnes-Dorp, Eembrugge, de Noord- en Zuidbuurt en de buitengebieden. Bel ons als u twijfelt, dan kijken we samen naar de tijden." },
      { vraag: "Ik heb een Wmo-pgb via HBEL. Kan ik jullie daaruit betalen?", antwoord: "Ja. Met een pgb kiest u zelf uw zorgverlener. Wij helpen u graag met de zorgovereenkomst die daarbij hoort." },
      { vraag: "Moet ik eerst een indicatie hebben voordat jullie in Eemnes kunnen komen?", antwoord: "Nee. Voor particuliere zorg heeft u geen indicatie nodig. Alleen voor een pgb is een indicatie of beschikking nodig." },
    ],
    bronnen: ["Maatschappelijke Zaken HBEL", "BEL Combinatie", "CBS via AlleCijfers.nl, peildatum 1-1-2026"],
  },

  weesp: {
    kernen: ["Binnenstad", "Weesp-Zuid", "Weesp-Noordwest", "Aetsveld", "Oostelijke Vechtoever", "Bloemendalerpolder"],
    opening: "Particuliere thuiszorg in Weesp is overzichtelijk, ook nu de gemeente bij Amsterdam hoort en de zorg in de regio over twee kanten verdeeld is.",
    ligging: "Weesp ligt aan de Vecht, tussen Almere en Amsterdam. Wij komen vanuit Almere naar u toe.",
    hoekKop: "Weesp: het loket in Amsterdam, de zorg richting het Gooi",
    hoek: [
      "Sinds 2022 hoort Weesp bij Amsterdam. De Wmo en de jeugdzorg gingen per 1 januari 2022 al over naar de gemeente Amsterdam. Voor een Wmo-aanvraag gaat u in Weesp naar het Sociaal Loket Weesp.",
      "De medische zorg wijst juist de andere kant op. In Weesp zit een locatie van Tergooi MC voor onder meer bloedprikken en röntgenfoto's, maar dat is geen ziekenhuis met spoedeisende hulp. Voor de huisartsenspoedpost in de avond, de nacht en het weekend gaat u naar Hilversum.",
      "Die tweedeling maakt het voor families lastig om te weten bij wie ze moeten zijn. Wij zijn één vast aanspreekpunt bij u thuis, wat er ook speelt.",
    ],
    wmo: "De Wmo regelt u in Weesp via het Sociaal Loket Weesp, sinds 2022 onderdeel van de gemeente Amsterdam.",
    ziekenhuis: "Tergooi MC (locatie Weesp voor onderzoek, ziekenhuis in Hilversum)",
    voorbereiding: "Houd in Weesp twee lijstjes bij: wie er al betrokken is vanuit Amsterdam, zoals de Wmo, en wie vanuit de medische kant, zoals de huisarts of het ziekenhuis in Hilversum. Dan weten wij met wie we afstemmen.",
    faq: [
      { vraag: "Moet ik in Weesp voor zorg nu naar Amsterdam?", antwoord: "Voor de Wmo wel: die loopt sinds 2022 via de gemeente Amsterdam, met het Sociaal Loket Weesp. Voor particuliere zorg niet. U belt ons en wij komen gewoon bij u thuis in Weesp." },
      { vraag: "Komen jullie ook in de Bloemendalerpolder?", antwoord: "Ja. Wij komen in heel Weesp, van de Binnenstad tot Aetsveld, de Oostelijke Vechtoever en de nieuwe Bloemendalerpolder." },
      { vraag: "Kunnen jullie 's nachts in Weesp komen?", antwoord: "Ja. Wij bieden nachtzorg als waakdienst of slaapdienst, ook in het weekend." },
    ],
    bronnen: ["Gemeente Amsterdam, Sociaal Loket Weesp", "Tergooi MC", "CBS via AlleCijfers.nl, peildatum 1-1-2026"],
  },

  diemen: {
    kernen: ["Diemen-Noord", "Centrum", "Plantage de Sniep", "Diemen-Zuid", "Holland Park", "Bergwijkpark"],
    opening: "Particuliere thuiszorg in Diemen is vaak zorg voor iemand die er alleen voor staat. Wij komen bij u thuis, met een vast gezicht, ook in het weekend.",
    ligging: "Diemen ligt tussen Amsterdam en Weesp, aan de kant van Almere. Wij komen vanuit Almere naar u toe.",
    hoekKop: "Bijna de helft van Diemen woont alleen",
    hoek: [
      "In Diemen bestaat bijna de helft van de huishoudens uit één persoon, volgens het CBS per 1 januari 2026. Wie alleen woont en zorg nodig heeft, mist vaak de vanzelfsprekende hulp van een partner in huis.",
      "Diemen is een eigen gemeente met een eigen Team Wmo en Jeugd. Na een melding volgt een huisbezoek van een consulent. De gemeente noemt in haar maatwerk onder meer begeleiding, dagbesteding en logeeropvang voor respijtzorg, en een pgb is mogelijk.",
      "Voor het ziekenhuis bent u in Diemen snel bij OLVG, op de locaties IJburg en Oost, of bij het AMC.",
    ],
    wmo: "De Wmo regelt u in Diemen bij het Team Wmo en Jeugd van de gemeente Diemen.",
    ziekenhuis: "OLVG (IJburg en Oost) of het AMC in Amsterdam",
    voorbereiding: "Woont u alleen in Diemen? Bedenk dan wie er nu af en toe bij u langskomt: een buurvrouw, een kind, een vriend. Die mensen nemen we graag mee in de afspraken, zodat iedereen weet wie wanneer komt.",
    faq: [
      { vraag: "Kan ik in Diemen een pgb gebruiken voor jullie zorg?", antwoord: "Ja. De gemeente Diemen biedt de Wmo ook als pgb. Met een pgb kiest u zelf uw zorgverlener en kunt u ons daaruit betalen." },
      { vraag: "In welke wijken van Diemen komen jullie?", antwoord: "In heel Diemen: Diemen-Noord, het Centrum, Plantage de Sniep, Diemen-Zuid, Holland Park en Bergwijkpark." },
      { vraag: "Ik woon alleen. Kunnen jullie ook alleen 's avonds komen?", antwoord: `Ja. Zorg kan vanaf ${MIN}, ook alleen in de avond, bijvoorbeeld om samen de dag af te sluiten en te helpen bij het naar bed gaan.` },
    ],
    bronnen: ["CBS via AlleCijfers.nl, peildatum 1-1-2026", "Gemeente Diemen, Team Wmo en Jeugd", "OLVG"],
  },

  zeewolde: {
    kernen: ["Zeewolde-dorp", "buitengebied"],
    opening: "Particuliere thuiszorg in Zeewolde is zorg in een jonge gemeente met weinig zorgadressen. Wij komen vanuit Almere bij u thuis, met een vast gezicht.",
    ligging: "Zeewolde ligt net als Almere in Flevoland, aan de oostkant. Voor ons is het dichtbij.",
    hoekKop: "Een jonge gemeente, en dus weinig zorg om de hoek",
    hoek: [
      "Zeewolde is een relatief jonge gemeente: ongeveer één op de zes inwoners is 65-plus, volgens het CBS per 1 januari 2026. Dat betekent ook dat het aanbod aan ouderenzorg in het dorp beperkt is. Er is één woonzorgcentrum.",
      "Voor onderzoek hoeft u niet ver: in het gezondheidscentrum aan de Horsterweg zit een polikliniek van ziekenhuis St Jansdal, met onder meer bloedafname en röntgen. Voor een opname gaat u naar een ziekenhuis buiten Zeewolde.",
      "De Wmo regelt u bij het zorgloket van de gemeente Zeewolde. U kiest daarna tussen zorg in natura en een pgb.",
    ],
    wmo: "De Wmo regelt u bij het zorgloket van de gemeente Zeewolde, met de keuze tussen zorg in natura en een pgb.",
    ziekenhuis: "St Jansdal (polikliniek in Zeewolde, ziekenhuis in Harderwijk of Lelystad)",
    voorbereiding: "Woont u in het buitengebied van Zeewolde? Vertel ons dan bij het eerste gesprek hoe uw huis bereikbaar is en waar we kunnen parkeren. Kleine dingen, maar ze maken de planning voor ons en voor u een stuk rustiger.",
    faq: [
      { vraag: "Komen jullie ook in het buitengebied van Zeewolde?", antwoord: "Ja. Wij komen in het dorp en in het buitengebied. Bel ons gerust, dan bespreken we samen de tijden die passen." },
      { vraag: "Er is in Zeewolde maar één woonzorgcentrum. Kan zorg thuis een alternatief zijn?", antwoord: "Voor veel mensen wel. Van een paar uur zorg tot 24-uurszorg is mogelijk, zodat u thuis kunt blijven. Voor de zwaarste zorgvraag bespreken wij eerlijk wat thuis kan en wat niet." },
      { vraag: "Kan ik de zorg in Zeewolde betalen met een pgb?", antwoord: "Ja. De gemeente Zeewolde biedt de keuze tussen zorg in natura en een pgb. Met een pgb kunt u ons betalen." },
    ],
    bronnen: ["CBS via AlleCijfers.nl, peildatum 1-1-2026", "Gemeente Zeewolde, zorgloket", "St Jansdal"],
  },

  nijkerk: {
    kernen: ["Nijkerk", "Hoevelaken", "Nijkerkerveen"],
    opening: "Particuliere thuiszorg in Nijkerk, Hoevelaken en Nijkerkerveen: wij komen in alle drie, met een vast gezicht en ook in het weekend.",
    ligging: "Nijkerk ligt aan de overkant van het Nijkerkernauw, tegenover Zeewolde. Wij komen vanuit Almere naar u toe.",
    hoekKop: "Drie woonplaatsen, één gemeente",
    hoek: [
      "De gemeente Nijkerk bestaat uit drie woonplaatsen: Nijkerk zelf, Hoevelaken en Nijkerkerveen. Wie in Hoevelaken of Nijkerkerveen woont, zoekt vaak op de eigen plaatsnaam en vindt dan weinig. Wij komen in alle drie.",
      "De Wmo is in Nijkerk georganiseerd in vier gebiedsteams, ingedeeld per postcodegebied. In Hoevelaken is er een eigen loket.",
      "Voor specialistische zorg hoeft u niet ver: Meander Medisch Centrum heeft een locatie in Nijkerk, in gezondheidscentrum De Nije Veste, met onder meer interne geneeskunde, neurologie en orthopedie.",
    ],
    wmo: "De Wmo regelt u in Nijkerk via een van de vier gebiedsteams van de gemeente; in Hoevelaken is een eigen loket.",
    ziekenhuis: "Meander MC (locatie Nijkerk en Amersfoort)",
    voorbereiding: "Gaat uw naaste in Nijkerk al naar de polikliniek van Meander? Neem dan bij de kennismaking het overzicht van afspraken en medicijnen mee. Dan stemmen we de zorg thuis daar meteen op af.",
    faq: [
      { vraag: "Komen jullie ook in Hoevelaken en Nijkerkerveen?", antwoord: "Ja. Wij komen in alle drie de woonplaatsen van de gemeente Nijkerk: Nijkerk, Hoevelaken en Nijkerkerveen." },
      { vraag: "Bij welk Wmo-team hoor ik in Nijkerk?", antwoord: "Dat hangt af van uw postcode: de gemeente werkt met vier gebiedsteams. Voor particuliere zorg bij ons maakt dat niet uit; u belt ons gewoon direct." },
      { vraag: "Kunnen jullie de zorg rond een afspraak bij Meander regelen?", antwoord: "Ja. Wij kunnen bijvoorbeeld helpen met opstaan en aankleden op de ochtend van een afspraak. Wat er precies nodig is, spreken we samen af." },
    ],
    bronnen: ["Gemeente Nijkerk", "Meander Medisch Centrum", "CBS via AlleCijfers.nl, peildatum 1-1-2026"],
  },

  spakenburg: {
    kernen: ["Bunschoten", "Spakenburg", "Eemdijk", "Zevenhuizen"],
    opening: "Particuliere thuiszorg in Spakenburg, Bunschoten en Eemdijk: zorg thuis met een vast gezicht, met respect voor hoe u leeft.",
    ligging: "Bunschoten-Spakenburg ligt aan het Eemmeer, tegenover de Flevolandse kust. Wij komen vanuit Almere naar u toe.",
    hoekKop: "Spakenburg, Bunschoten of Eemdijk: het is één gemeente",
    hoek: [
      "Officieel heet de woonplaats Bunschoten-Spakenburg, met daarnaast Eemdijk. Spakenburg is geen aparte woonplaats, maar iedereen noemt het zo. Wij komen in de hele gemeente Bunschoten, ook in Eemdijk en de buurtschappen.",
      "Voor beeldvorming moet u sinds 2025 naar Amersfoort: de röntgenafdeling in Bunschoten is gesloten, de prikpost is gebleven. Het ziekenhuis is Meander Medisch Centrum in Amersfoort.",
      "Mantelzorgers in de gemeente kunnen terecht bij het Steunpunt Mantelzorg van Stichting De Boei. Wij ondersteunen met respijtzorg aan huis, zodat u als mantelzorger even op adem kunt komen.",
    ],
    wmo: "De Wmo regelt u bij het Zorgloket van de gemeente Bunschoten.",
    ziekenhuis: "Meander MC in Amersfoort",
    voorbereiding: "Zijn er in uw familie in Spakenburg meerdere mensen die meehelpen? Maak dan samen een weekoverzicht van wie wanneer komt. Dan zien we waar de gaten zitten en vullen wij precies die momenten in.",
    faq: [
      { vraag: "Komen jullie ook in Eemdijk?", antwoord: "Ja. Wij komen in de hele gemeente Bunschoten: Bunschoten, Spakenburg, Eemdijk en de buurtschappen." },
      { vraag: "Kunnen jullie de mantelzorg in Spakenburg ontlasten?", antwoord: "Ja. Met respijtzorg nemen wij de zorg een paar uur, een dagdeel of een nacht over, zodat u als mantelzorger even vrij bent." },
      { vraag: "Houden jullie rekening met geloof en gewoontes?", antwoord: "Ja. In de kennismaking vragen wij wat voor u belangrijk is in de dag en in de week, zoals rustmomenten, maaltijden en de zondag. Daar passen we de zorg op aan." },
    ],
    bronnen: ["Gemeente Bunschoten, Zorgloket", "Meander Medisch Centrum", "Stichting De Boei"],
  },

  lelystad: {
    kernen: ["Stadshart", "Kustwijk", "Zuiderzeewijk", "Atolwijk", "Bolder", "Boswijk", "Havendiep", "Lelystad-Haven", "Waterwijk-Landerijen", "Warande", "buitengebied"],
    opening: "Particuliere thuiszorg in Lelystad: zorg bij u thuis met een vast gezicht, ook in de avond en het weekend, juist nu de spoedzorg in de stad minder uren open is.",
    ligging: "Lelystad ligt net als Almere in Flevoland. Wij komen vanuit Almere via de A6 naar u toe.",
    hoekKop: "Minder spoedzorg in de avond, meer reden voor zorg thuis",
    hoek: [
      "Sinds juni 2024 is de spoedpoli van St Jansdal in Lelystad 's avonds en in het weekend gesloten. Voor spoedeisende hulp dag en nacht gaat u naar het ziekenhuis in Harderwijk. Voor veel families in Lelystad voelt de avond daardoor kwetsbaarder dan vroeger.",
      "Zorg thuis lost dat niet op, maar helpt wel. Iemand die op vaste momenten bij u is, ziet het eerder als het minder goed gaat, en kan op tijd de huisarts of de huisartsenspoedpost inschakelen. Die spoedpost zit in Lelystad aan de Ziekenhuisweg en werkt op afspraak: eerst bellen.",
      "Lelystad heeft een hospice van Coloriet. Kiest uw naaste ervoor om de laatste periode thuis te blijven, dan kunnen wij overdag en in de nacht bij u zijn.",
    ],
    wmo: "Heeft u nog geen Wmo-hulp, dan gaat u in Lelystad eerst naar het Sociaal Wijkteam van de gemeente. De gemeente noemt het pgb als manier van betalen.",
    ziekenhuis: "St Jansdal Lelystad (spoedeisende hulp dag en nacht in Harderwijk)",
    voorbereiding: "Maakt u zich vooral zorgen over de avonden in Lelystad? Schrijf dan een week lang op wanneer het misgaat: na het eten, bij het naar bed gaan, of midden in de nacht. Dan weten we waar de zorg het meest nodig is.",
    faq: [
      { vraag: "Komen jullie ook in Lelystad-Haven en het buitengebied?", antwoord: "Ja. Wij komen in heel Lelystad, van het Stadshart en de Bolder tot Lelystad-Haven, de Warande en het buitengebied." },
      { vraag: "De spoedpoli is 's avonds dicht. Kunnen jullie dan 's avonds of 's nachts komen?", antwoord: "Ja. Wij bieden zorg in de avond en nachtzorg als waakdienst of slaapdienst, ook in het weekend. Bij een medisch spoedgeval belt u natuurlijk altijd 112 of de huisartsenspoedpost." },
      { vraag: "Moet ik in Lelystad eerst naar het wijkteam?", antwoord: "Alleen als u Wmo-hulp of een Wmo-pgb wilt. Voor particuliere zorg bij ons belt u ons direct; daar is geen indicatie voor nodig." },
    ],
    bronnen: ["CBS via AlleCijfers.nl, peildatum 1-1-2026", "Gemeente Lelystad, Wmo (2026)", "St Jansdal (2026)", "Hart van Nederland, sluiting spoedpoli Lelystad (2024)", "Huisartsenspoedpost Lelystad (2026)"],
  },

  dronten: {
    kernen: ["Dronten", "Biddinghuizen", "Swifterbant", "buitengebied"],
    opening: "Particuliere thuiszorg in Dronten, Biddinghuizen en Swifterbant: een vast gezicht bij u thuis, ook in de dorpen en het buitengebied.",
    ligging: "Dronten ligt in Flevoland, voorbij Lelystad. Wij komen vanuit Almere naar u toe.",
    hoekKop: "Drie dorpen, ieder met een eigen wijknetwerk",
    hoek: [
      "De gemeente Dronten bestaat uit drie woonplaatsen: Dronten, Biddinghuizen en Swifterbant. De Wmo is er georganiseerd in wijknetwerken, met inloopspreekuren in Biddinghuizen en Swifterbant zelf. De gemeente noemt die aanpak de Dronter Koers.",
      "Wie 's avonds of in het weekend de huisarts nodig heeft, belt de huisartsenspoedpost Dronten. Die werkt op afspraak en verwijst 's nachts door naar Lelystad. Voor spoedeisende hulp dag en nacht is het ziekenhuis St Jansdal in Harderwijk.",
      "Hospice Dronten ondersteunt ook mantelzorgers thuis. Wij kunnen daarnaast zorg aan huis bieden, overdag en in de nacht.",
    ],
    wmo: "De Wmo regelt u bij de gemeente Dronten, via een melding of het inloopspreekuur van het wijknetwerk in Biddinghuizen of Swifterbant. Zorg in natura en een pgb zijn allebei mogelijk.",
    ziekenhuis: "St Jansdal (locatie Dronten; spoedeisende hulp dag en nacht in Harderwijk)",
    voorbereiding: "Woont u in Biddinghuizen, Swifterbant of het buitengebied? Vertel ons dan hoe uw huis het best bereikbaar is en of er een vaste parkeerplek is. Zo plannen we de zorg rustig en zonder gedoe.",
    faq: [
      { vraag: "Komen jullie ook in Biddinghuizen en Swifterbant?", antwoord: "Ja. Wij komen in alle drie de woonplaatsen van de gemeente Dronten en ook in het buitengebied." },
      { vraag: "Kan ik in Dronten kiezen voor een pgb?", antwoord: "Ja. Na de Wmo-aanvraag mag u in Dronten zelf kiezen: zorg in natura via een gecontracteerde aanbieder, of een pgb waarmee u zelf uw zorgverlener inhuurt, zoals ons." },
      { vraag: "Kunnen jullie 's nachts in Dronten zijn?", antwoord: "Ja. Bij een waakdienst blijven wij de hele nacht wakker, bij een slaapdienst slapen wij in huis en staan wij op als het nodig is. Dat kan ook in het weekend." },
    ],
    bronnen: ["CBS via AlleCijfers.nl, peildatum 1-1-2026", "Gemeente Dronten, Wmo (2026)", "Huisartsenspoedpost Dronten (2026)", "Hospice Dronten (2026)"],
  },

  blaricum: {
    kernen: ["Blaricum-Dorp", "Bijvanck", "Blaricummermeent", "Blaricummer Heide", "Crailo", "De Kampen", "Stichtsebrug", "Warandepark-De Eng"],
    opening: "Particuliere thuiszorg in Blaricum, nu het ziekenhuis niet meer in het dorp zit. Wij komen bij u thuis, met een vast gezicht en echte tijd.",
    ligging: "Blaricum ligt in het Gooi, aan de rand van het Gooimeer. Vanuit Almere zijn wij via de Hollandse Brug dichtbij.",
    hoekKop: "Het ziekenhuis vertrok, de zorg thuis werd belangrijker",
    hoek: [
      "In mei 2023 verhuisde Tergooi MC alle patiënten uit Blaricum naar de nieuwbouw in Hilversum. In Blaricum zelf zijn geen spoedeisende hulp en geen opnames meer. Wie in het ziekenhuis ligt, ligt nu in Hilversum, en komt van daaruit weer naar huis.",
      "Voor de huisarts in de avond, de nacht en het weekend gaat u naar de Huisartsen Spoedpost Hilversum. Juist nu die zorg verder weg is, is het fijn als de zorg thuis dichtbij en vertrouwd is.",
      "Blaricum werkt samen met Eemnes en Laren in de BEL Combinatie, met het gemeentehuis in Eemnes. De Wmo loopt via Maatschappelijke Zaken in Huizen.",
    ],
    wmo: "De Wmo regelt u in Blaricum via Maatschappelijke Zaken in Huizen, dat de Wmo uitvoert voor Huizen, Blaricum, Eemnes en Laren.",
    ziekenhuis: "Tergooi MC in Hilversum",
    voorbereiding: "Ligt uw naaste in Tergooi in Hilversum en komt die binnenkort terug naar Blaricum? Vraag op de afdeling wat er thuis anders moet dan voorheen. Met dat antwoord kunnen wij de eerste dagen thuis goed voorbereiden.",
    faq: [
      { vraag: "Komen jullie ook in de Blaricummermeent en Crailo?", antwoord: "Ja. Wij komen in heel Blaricum, van het Dorp en de Bijvanck tot de Blaricummermeent, Crailo en de Blaricummer Heide." },
      { vraag: "Kunnen jullie starten zodra mijn moeder uit Tergooi in Hilversum komt?", antwoord: "Er is op dit moment plek. Bel ons zodra de ontslagdatum bekend is, dan maken we kennis bij u thuis en spreken we samen een startdatum af." },
      { vraag: "Waar vraag ik in Blaricum de Wmo aan?", antwoord: "Bij Maatschappelijke Zaken in Huizen, dat de Wmo voor Blaricum uitvoert. Voor particuliere zorg bij ons heeft u geen indicatie nodig." },
    ],
    bronnen: ["CBS via AlleCijfers.nl, peildatum 1-1-2026", "Maatschappelijke Zaken HBEL (2026)", "NH Nieuws, verhuizing Tergooi (2023)", "Huisartsen Spoedpost Hilversum (2026)", "Gemeente Blaricum (2026)"],
  },

  laren: {
    kernen: ["Laren-Centrum", "Omloop", "Oostereng", "Postiljon", "Rijksweg-Noord", "Rijksweg-Zuid", "Steenbergen", "Zevenend", "Zwarte Berg"],
    opening: "Particuliere thuiszorg in Laren is zorg in een van de oudste gemeenten van het Gooi. Bij ons krijgt u daar een vertrouwd gezicht voor terug, dat de tijd neemt.",
    ligging: "Laren ligt midden in het Gooi, tussen Blaricum en Hilversum. Over de Hollandse Brug zijn wij vanuit Almere zo in het Gooi.",
    hoekKop: "In Laren is bijna een op de drie inwoners 65-plus",
    hoek: [
      "Volgens het CBS was op 1 januari 2026 bijna een op de drie inwoners van Laren 65 jaar of ouder, en bestaat ruim een derde van de huishoudens uit één persoon. Veel Laarders wonen al tientallen jaren in hetzelfde huis, en willen daar ook blijven.",
      "Laren heeft een bijzondere geschiedenis met ouder worden: het Rosa Spier Huis is er sinds 1963 een thuis voor oudere kunstenaars. Wie liever in het eigen huis blijft, kan bij ons terecht voor zorg aan huis.",
      "De Wmo loopt in Laren via Maatschappelijke Zaken in Huizen. Het gemeentehuis van de BEL Combinatie staat in Eemnes.",
    ],
    wmo: "De Wmo regelt u in Laren via Maatschappelijke Zaken in Huizen, dat de Wmo uitvoert voor Huizen, Blaricum, Eemnes en Laren.",
    ziekenhuis: "Tergooi MC in Hilversum",
    voorbereiding: "Woont uw vader of moeder al lang in hetzelfde huis in Laren? Loop dan samen eens door het huis en kijk waar het lastig wordt: de trap, de douche, de drempel naar de tuin. Dat lijstje is een goed begin van ons eerste gesprek.",
    faq: [
      { vraag: "In welke buurten van Laren komen jullie?", antwoord: "In heel Laren: het Centrum, de Omloop, Oostereng, het Postiljon, Zevenend, de Zwarte Berg en de rest van het dorp." },
      { vraag: "Kunnen jullie helpen zodat mijn ouder thuis kan blijven wonen?", antwoord: "Dat is precies waar wij voor zijn. Van een paar uur zorg per dag tot 24-uurszorg, met een vast gezicht. Wat thuis kan en wat niet, bespreken wij eerlijk." },
      { vraag: "Moet ik in Laren eerst langs het Wmo-loket?", antwoord: "Alleen als u Wmo-ondersteuning of een Wmo-pgb wilt; dat loopt via Maatschappelijke Zaken in Huizen. Particuliere zorg bij ons kunt u direct regelen, zonder indicatie." },
    ],
    bronnen: ["CBS via AlleCijfers.nl, peildatum 1-1-2026", "Maatschappelijke Zaken HBEL (2026)", "Gemeente Laren (2026)", "Rosa Spier Huis, Wikipedia (2026)"],
  },

  muiden: {
    kernen: ["Vesting Muiden", "Krijgsman", "Mariahoeve", "Pampusweg", "IJmeer"],
    opening: "Particuliere thuiszorg in Muiden: in de oude Vesting en in de nieuwe wijk Krijgsman. Overal krijgt u dezelfde vertrouwde zorgverlener, doordeweeks en in het weekend.",
    ligging: "Muiden ligt aan het IJmeer, tussen Almere en Amsterdam. Voor ons is het dichtbij.",
    hoekKop: "Muiden hoort bij Gooise Meren, en het loket zit in Bussum",
    hoek: [
      "Sinds 2016 vormt Muiden samen met Bussum en Naarden de gemeente Gooise Meren. Voor de Wmo vraagt u een gesprek aan bij de gemeente, met het gemeentehuis aan de Brinklaan in Bussum. De gemeente noemt het pgb als mogelijkheid: met een pgb regelt u zelf uw zorg.",
      "Muiden heeft twee gezichten. De historische Vesting, waar mensen al lang wonen, en de nieuwe wijk Krijgsman, waar gezinnen wonen die soms ook voor een ouder zorgen. Voor allebei geldt: zorg thuis moet in het dagritme passen.",
    ],
    wmo: "De Wmo regelt u bij de gemeente Gooise Meren: u vraagt een gesprek aan, het gemeentehuis staat aan de Brinklaan in Bussum. Een pgb is mogelijk.",
    ziekenhuis: "Tergooi MC",
    voorbereiding: "Zorgt u in Krijgsman voor een ouder, naast werk en gezin? Kijk dan welke vaste momenten in de week u het meest zou helpen als iemand ze overneemt. Precies die momenten kunnen wij invullen.",
    faq: [
      { vraag: "Komen jullie ook in Krijgsman?", antwoord: "Ja. Wij komen in heel Muiden: de Vesting, Krijgsman, Mariahoeve en de Pampusweg." },
      { vraag: "Muiden hoort bij Gooise Meren. Waar vraag ik de Wmo aan?", antwoord: "Bij de gemeente Gooise Meren, met het gemeentehuis in Bussum. Voor particuliere zorg bij ons is geen indicatie nodig; u belt ons direct." },
      { vraag: "Kunnen jullie een vast moment in de week overnemen?", antwoord: `Ja. Zorg kan vanaf ${MIN}, bijvoorbeeld zodat u als mantelzorger een middag vrij bent.` },
    ],
    bronnen: ["CBS via AlleCijfers.nl, peildatum 1-1-2026", "Gemeente Gooise Meren, zorg en ondersteuning (2026)"],
  },

  hilversum: {
    kernen: ["Centrum", "Noordoost", "Noordwest", "Oost", "Zuid", "Zuidoost", "Zuidwest", "Hilversumse Meent", "Landelijk Gebied"],
    opening: "Particuliere thuiszorg in Hilversum: zorg aan huis met een vast gezicht, in een stad waar ruim vier op de tien huishoudens uit één persoon bestaan.",
    ligging: "Hilversum ligt in het Gooi. Vanuit Almere komen wij via de A27 naar u toe.",
    hoekKop: "Veel Hilversummers wonen alleen",
    hoek: [
      "In Hilversum bestaat 43 procent van de huishoudens uit één persoon, volgens het CBS per 1 januari 2026. Ouder worden in je eentje gaat lang goed, maar als het minder gaat, is er niemand in huis die het merkt. Een vast gezicht dat regelmatig langskomt, maakt dan het verschil.",
      "Sinds mei 2023 staat het nieuwe ziekenhuis van Tergooi MC in Hilversum. Voor de huisarts in de avond, de nacht en het weekend is er de Huisartsen Spoedpost Hilversum aan de Laan van Tergooi.",
      "In Hilversum staat Hospice Kajan. Voor wie de laatste weken liever in het eigen huis doorbrengt, bieden wij palliatieve zorg en waken wij in de nacht.",
    ],
    wmo: "Voor hulp bij u thuis via de Wmo begint u in Hilversum met een kort telefoongesprek met de gemeente; de informatie staat bij het Sociaal Plein.",
    ziekenhuis: "Tergooi MC in Hilversum",
    voorbereiding: "Woont uw naaste alleen in Hilversum? Spreek dan met de buren of een vriend af dat zij u bellen als er iets opvalt. Samen met onze vaste momenten ontstaat zo een vangnet om uw naaste heen.",
    faq: [
      { vraag: "In welke delen van Hilversum komen jullie?", antwoord: "In heel Hilversum: het Centrum, Noord, Oost, Zuid, de Hilversumse Meent en het landelijk gebied." },
      { vraag: "Mijn vader woont alleen. Kunnen jullie elke dag komen?", antwoord: `Ja. Zorg kan elke dag als dat nodig is, ook in het weekend, vanaf ${MIN}. Wij houden u op de hoogte als ons iets opvalt.` },
      { vraag: "Werken jullie samen met de huisarts in Hilversum?", antwoord: "Ja. Wij stemmen graag af met de huisarts en met andere zorgverleners die al betrokken zijn." },
    ],
    bronnen: ["CBS via AlleCijfers.nl, peildatum 1-1-2026", "Gemeente Hilversum, Hulp bij u thuis (2026)", "NH Nieuws, nieuwbouw Tergooi (2023)", "Huisartsen Spoedpost Hilversum (2026)", "ZorgkaartNederland, Hospice Kajan (2026)"],
  },
};
