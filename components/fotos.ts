// De twintig beelden uit het ontwerp, omgezet naar WebP (max. 1800px breed).
// Alt-teksten letterlijk uit de README van het ontwerp.
const L = { w: 1800, h: 1195 };
const S = { w: 1792, h: 2240 };

export const FOTO = {
  mevrouw: { src: "/images/01-mevrouw-met-zorgverlener.webp", alt: "Oudere mevrouw in haar stoel met een zorgverlener naast haar", ...S },
  verzorging: { src: "/images/02-persoonlijke-verzorging.webp", alt: "Zorgverlener helpt een oudere meneer met het dichtknopen van zijn vest", ...L },
  haar: { src: "/images/03-haarverzorging.webp", alt: "Zorgverlener kamt het haar van een oudere mevrouw", ...L },
  nacht: { src: "/images/04-nachtzorg.webp", alt: "Zorgverlener waakt in de nacht bij een slapende mevrouw", ...L },
  instoppen: { src: "/images/05-nachtzorg-instoppen.webp", alt: "Zorgverlener stopt een cliënt in bij het licht van een nachtlampje", ...L },
  handen: { src: "/images/06-palliatieve-zorg-handen.webp", alt: "Handen van een zorgverlener om de hand van een oudere cliënt", ...L },
  familie: { src: "/images/07-palliatieve-zorg-familie.webp", alt: "Oudere meneer in bed met zijn dochter naast hem", ...L },
  respijt: { src: "/images/08-respijtzorg.webp", alt: "Dochter omhelst haar moeder in de hal", ...L },
  bank: { src: "/images/09-echtpaar-op-de-bank.webp", alt: "Ouder echtpaar drinkt lachend thee op de bank", ...L },
  puzzel: { src: "/images/10-dagbesteding-puzzel.webp", alt: "Oudere mevrouw en zorgverlener maken samen een puzzel", ...L },
  rollator: { src: "/images/11-wandelen-met-rollator.webp", alt: "Oudere meneer wandelt met rollator en zorgverlener langs het water", ...L },
  koken: { src: "/images/12-samen-koken.webp", alt: "Oudere mevrouw kookt samen met een zorgverlener", ...L },
  medicatie: { src: "/images/13-medicatie.webp", alt: "Zorgverlener vult een weekdoos met medicatie", ...S },
  wondzorg: { src: "/images/14-wondzorg.webp", alt: "Zorgverlener legt een verband aan om een onderarm", ...S },
  koffie: { src: "/images/15-koffie-aan-tafel.webp", alt: "Oudere meneer lacht aan de keukentafel met een zorgverlener", ...L },
  deur: { src: "/images/16-welkom-aan-de-deur.webp", alt: "Oudere meneer doet de voordeur open voor de zorgverlener", ...S },
  badkamer: { src: "/images/17-badkamer-handdoeken.webp", alt: "Zorgverlener legt schone handdoeken klaar in de badkamer", ...L },
  straat: { src: "/images/18-straat-met-water.webp", alt: "Moderne woonstraat langs het water", ...L },
  wandelen: { src: "/images/19-wandelend-echtpaar.webp", alt: "Ouder echtpaar wandelt gearmd langs het water", ...L },
  bellen: { src: "/images/20-bellen.webp", alt: "Handen van een oudere persoon met een telefoon aan tafel", ...L },
} as const;

export type Foto = (typeof FOTO)[keyof typeof FOTO];
