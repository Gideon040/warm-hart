// Per klant invullen. slug MOET gelijk zijn aan organisaties.slug in het portaal.
export const site = {
  slug: "praktijk-janneke",
  naam: "Zorgpraktijk Janneke",
  plaats: "Hengelo",
  segment: "thuiszorg",
  telefoon: "+31612345678",
  email: "info@zorgpraktijkjanneke.nl",
  // Productie-URL zonder slash aan het einde. Gebruikt voor sitemap,
  // robots, canonicals en schema.org.
  url: "https://zorgpraktijkjanneke.nl",
  ga4Id: "G-XXXXXXX",
  // Extra paden van deze site (bijv. "/diensten/huishoudelijke-hulp-hengelo")
  // zodat ze in de sitemap komen zonder de basisbestanden aan te passen.
  extraPaginas: [] as readonly string[],
  // Lokaal ontwikkelen: post naar het lokale portaal i.p.v. productie.
  apiUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/api/leads"
      : "https://app.zorgbaar.nl/api/leads",
} as const;
