# Professioneel In Zorg met een warm Hart

Klantsite van Zorgbaar, gebouwd volgens `zorgbaarportaal-structuur-wireframes.md`
met het ontwerp uit `D:\zorgbaar-portaal\warmhart-website` als schil.

```
npm run dev     # lokaal, post naar localhost:3001 (portaal)
npm run build   # productie, post naar app.zorgbaar.nl
```

## Opbouw
- `site.config.ts`: alle klantgegevens, diensten, werkgebied, extraPaginas.
- `app/zorg/inhoud.ts`: teksten per dienst (persoonlijke verzorging letterlijk uit het ontwerp).
- `components/Blokken.tsx`: bouwstenen van het ontwerp (hero, kaarten, stappen, FAQ met schema, CTA's).
- `components/ZorgvraagWizard.tsx`: 5-stapswizard op /zorgvraag (spec 4.6).
- Startpakket ongewijzigd: `components/utm.ts`, `components/ZorgvraagFormulier.tsx`, `lib/*`,
  `app/bedankt`, `app/kennisbank`, `app/sitemap.ts`, `app/robots.ts`.
- Afbeeldingen: de 20 ontwerpbeelden als WebP (max. 1800px) in `public/images`.

## Pagina's (46 + bedankt/404)
Home, 5 dienstpagina's, 5 dienst×Almere-pagina's, 3 zorgvorm-pagina's (uurzorg, blokzorg,
24-uurszorg), pillar /zorg/particuliere-thuiszorg met 15 stadspagina's, tarieven-en-vergoeding, over, zorgvraag,
contact, werkgebied, veelgestelde-vragen, privacy, klachtenregeling, algemene-voorwaarden,
kennisbank (+ artikelen uit het portaal), bedankt, 404.

## SEO-techniek
- Metadata per pagina via `components/meta.ts`: titel (keyword vooraan, korte merknaam
  `merkKort`), description max. 160 tekens, canonical, Open Graph + Twitter-kaart.
  Staande foto's vallen terug op `app/opengraph-image.jpg` (1200x630).
- Geen canonical in de layout: 404 (noindex) en /bedankt erven niet die van de homepage.
- Schema: LocalBusiness/MedicalBusiness + dienstencatalogus + WebSite (layout), Service met
  beeld (dienst- en plaatspagina's), Person voor Anushka (/over), FAQPage, BreadcrumbList
  op alles onder de home; Article via het startpakket.
- Favicon, SVG-icoon en Apple-icoon (hart), themakleur.
- `/llms.txt`: samenvatting voor AI-zoekmachines, gegenereerd uit site.config.
- `gscVerificatie` in site.config: invullen bij oplevering (GSC, HTML-tag).
- Gecontroleerd met een crawl: alle pagina's 200, één H1, geen ontbrekende alt-teksten,
  geen kapotte interne links, sitemap compleet.

## Stadspagina's
Volgens `D:\het-reinhart-huis\schrijfwijzer-locatiepaginas.md`: pillar + per stad één pagina
`/zorg/particuliere-thuiszorg/[stad]` met een lokale laag (Wmo-loket, ziekenhuis, wijken,
eigen invalshoek, voorbereiding, lokale FAQ) en bronvermelding. Steden in `site.config.ts`
(`steden`), teksten in `app/zorg/particuliere-thuiszorg/steden.ts`. Bronnen: lokaal onderzoek
van Het Reinhart Huis (9 steden) en nieuw onderzoek (Lelystad, Dronten, Blaricum, Laren,
Muiden, Hilversum). Overlaptest gedaan: alleen de vaste blokken (stappen, pgb, CTA) herhalen.
Let op: Het Reinhart Huis (ook Zorgbaar) bedient deels dezelfde steden.

## Beslissingen
- Almere: homepage + dienst×Almere-pagina's; de vijf stadsdelen zijn kernen, geen losse pagina's
  (doorway-risico). Steden rond Almere: zie Stadspagina's.
- Geen verpleging-pagina: geen BIG-registratie bekend (regel 6.6).
- Nachtzorg is één pagina met H2 Waakdienst en H2 Slaapdienst (regel 6.2).
- Alleen particulier en pgb als vergoedingsroutes (dat noemt het ontwerp).
- Tarieven "Op aanvraag" (niet aangeleverd, regel 6.8).
- Reviews-pagina niet gebouwd, kennisbank-blok op home pas bij >= 3 artikelen, Kennisbank in
  het menu pas bij >= 1 artikel.
- "[TERMIJN INVULLEN]" uit het ontwerp vervangen door "Na de kennismaking spreken we samen een
  startdatum af." Contact-FAQ "Vertel me gerust" -> "Vertel ons gerust" (wij-vorm).

## Open punten (klant/Gideon)
1. Organisatie aanmaken in het portaal met slug `warm-hart` (bestaat nog niet).
2. Domein (nu placeholder `https://www.warmhartzorg.nl`), GA4 Measurement ID en GSC-verificatiecode.
3. Wkkgz: geschilleninstantie en klachtenfunctionaris (klachtenregeling noemt ze nu zonder naam).
4. Wtza-status, beroepsaansprakelijkheid.
5. Bevestigen: worden zowel waakdienst als slaapdienst aangeboden?
6. Bevestigen: dagbesteding is één op één bij de cliënt thuis (niet in een groep)?
7. Bevestigen: de Zorgbaar-standaardvoorwaarden (o.a. afzeggen tot 24 uur, maandfactuur).
8. Eigen zin van Anushka over Almere (`werkgebied[0].eigenZin`) en eventueel een portretfoto.
9. Tarieven per dienst, als ze die wil tonen.
10. 4 startartikelen kennisbank aanmaken in het portaal.
11. Bevestigen: komt Anushka echt in alle 15 steden? Zo niet, de stad uit `steden` halen.
12. Bevestigen: hoe wordt 24-uurszorg bemand (alleen, met collega's, inwonend)?
13. Per stad een eigen zin van Anushka zou de pagina's nog sterker maken.
