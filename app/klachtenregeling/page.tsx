import type { Metadata } from "next";
import { site } from "@/site.config";
import { paginaMeta } from "@/components/meta";
import { HartLijst } from "@/components/Blokken";
import { JuriBlok, JuriPagina } from "@/components/Juridisch";

export const metadata: Metadata = paginaMeta({
  titel: `Klachtenregeling | ${site.merkKort}`,
  beschrijving: `Niet tevreden over de zorg van ${site.naam}? Zo dient u een klacht in, volgens de Wkkgz.`,
  pad: "/klachtenregeling",
});

export default function Klachtenregeling() {
  return (
    <JuriPagina
      naam="Klachtenregeling"
      pad="/klachtenregeling"
      titel="Niet tevreden? Zeg het ons."
      lead="Daar worden wij beter van, en u wordt er sneller mee geholpen. Zolang een klacht loopt, verandert er niets aan de zorg die u krijgt."
      zijKop="Klacht indienen"
      zijTekst={<p>Vermeld uw naam, de datum en wat er is gebeurd.</p>}
    >
      <JuriBlok kop="1. Bespreek het met ons">
        De meeste klachten lossen wij samen op. Bel of mail, dan plannen wij binnen vijf werkdagen een gesprek en leggen wij vast wat er verandert.
      </JuriBlok>
      <JuriBlok kop="2. De klachtenfunctionaris">
        Komt u er met ons niet uit, dan kunt u kosteloos naar een onafhankelijke klachtenfunctionaris{site.klachtenfunctionaris ? ` (${site.klachtenfunctionaris})` : ""}. Die bemiddelt en kiest geen partij.
        {site.klachtenContact && <> U bereikt de klachtenfunctionaris {site.klachtenContact}.</>}
        {site.klachtenAansluiting && <> Vermeld daarbij dat het om {site.naam} gaat (aangesloten bij {site.klachtenAansluiting}).</>}
      </JuriBlok>
      <JuriBlok kop="3. De geschilleninstantie">
        Leidt bemiddeling niet tot een oplossing, dan legt u de klacht voor aan de geschilleninstantie waarbij wij zijn aangesloten{site.geschilleninstantie ? `: ${site.geschilleninstantie}` : ""}, zoals de Wet kwaliteit, klachten en geschillen zorg (Wkkgz) voorschrijft. De uitspraak is bindend.
      </JuriBlok>
      <div className="juri-blok">
        <h2>Wat u van ons mag verwachten</h2>
        <HartLijst items={[
          "Een ontvangstbevestiging binnen vijf werkdagen",
          "Een inhoudelijke reactie binnen zes weken",
          "Vastlegging van de klacht en van wat wij ermee doen",
        ]} />
      </div>
    </JuriPagina>
  );
}
