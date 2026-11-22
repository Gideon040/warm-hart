import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/site.config";
import { paginaMeta } from "@/components/meta";
import { JuriBlok, JuriPagina } from "@/components/Juridisch";

export const metadata: Metadata = paginaMeta({
  titel: `Privacyverklaring | ${site.merkKort}`,
  beschrijving: `Hoe ${site.naam} met uw persoonsgegevens omgaat: welke gegevens, waarom, hoe lang en wat uw rechten zijn.`,
  pad: "/privacy",
});

export default function Privacy() {
  return (
    <JuriPagina
      naam="Privacyverklaring"
      pad="/privacy"
      titel="Hoe wij met uw gegevens omgaan"
      lead="Wij verwerken alleen wat nodig is om goede zorg te leveren, en delen niets zonder dat u het weet."
    >
      <JuriBlok kop="Wie verwerkt uw gegevens">
        {site.naam}, gevestigd in {site.plaats}, KvK {site.kvk}, is verantwoordelijk voor de verwerking van uw persoonsgegevens. Vragen stelt u via {site.email ? <>{site.email} of </> : null}{site.telefoonWeergave}, of via het <Link href="/contact">contactformulier</Link>.
      </JuriBlok>
      <JuriBlok kop="Welke gegevens">
        Contactgegevens, wat u invult bij een zorgvraag, de afspraken over de zorg en de rapportages daarover, en wat nodig is voor de factuur.
      </JuriBlok>
      <JuriBlok kop="Waarom">
        Om zorg te leveren, afspraken vast te leggen, te factureren en aan wettelijke verplichtingen te voldoen.
      </JuriBlok>
      <JuriBlok kop="Hoe lang">
        Wij bewaren gegevens niet langer dan de wet voorschrijft. Een zorgvraag die niet tot zorg leidt, verwijderen wij binnen zes maanden.
      </JuriBlok>
      <JuriBlok kop="Met wie wij delen">
        Alleen met uw toestemming, of wanneer het nodig is voor de zorg, zoals met de huisarts of de wijkverpleging. Een zorgvraag via deze website komt binnen via het systeem van Zorgbaar, dat de aanvraag voor ons verwerkt. Wij verkopen uw gegevens nooit.
      </JuriBlok>
      <JuriBlok kop="Websitebezoek">
        Wij meten met Google Analytics hoe de website wordt gebruikt, bijvoorbeeld via welke pagina u binnenkwam en of een zorgvraag is verstuurd. Dat gebruiken wij alleen om de website te verbeteren. Google Analytics plaatst alleen cookies als u daar in de cookiemelding toestemming voor geeft; zonder toestemming worden alleen anonieme, cookieloze meetgegevens verstuurd. Uw keuze wijzigt u via &ldquo;Cookie-instellingen&rdquo; onderaan elke pagina.
      </JuriBlok>
      <JuriBlok kop="Uw rechten">
        U mag uw gegevens inzien, laten corrigeren of laten verwijderen. Wij reageren binnen vier weken. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.
      </JuriBlok>
    </JuriPagina>
  );
}
