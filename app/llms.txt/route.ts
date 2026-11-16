import { site } from "@/site.config";
import { inhoud } from "../zorg/inhoud";
import { zorgvormen } from "../zorg/zorgvormen";

// llms.txt: korte, feitelijke samenvatting van de site voor AI-zoekmachines
// (structuurspec 4.8: "Bron voor AI-zoekmachines"). Alles komt uit
// site.config en de dienstteksten, dus het loopt nooit uit de pas met de site.
export const dynamic = "force-static";

export function GET() {
  const g = site.gezicht;
  const plaats = site.werkgebied[0];
  const regels = [
    `# ${site.naam}`,
    "",
    `> Particuliere thuiszorgorganisatie in ${site.plaats}, opgericht door ${g.naam} (${g.niveau}, ${g.jarenErvaring} jaar ervaring). Zorg bij mensen thuis, met een vast gezicht, ook in het weekend. Betaling particulier of vanuit een pgb.`,
    "",
    "## Gegevens",
    `- Telefoon: ${site.telefoonWeergave} (${site.bereikbaarheid})`,
    `- E-mail: ${site.email}`,
    `- Werkgebied: ${plaats.naam} (${plaats.kernen.join(", ")}) en ${site.steden.map((st) => st.naam).join(", ")}`,
    `- KvK: ${site.kvk}, AGB-code: ${site.agb}${site.vog ? ", VOG aanwezig" : ""}`,
    `- Talen: ${g.talen.join(", ")}`,
    `- Omvang: ${site.omvang.join(", ")}`,
    `- Specialisaties: ${g.specialisaties.join(", ")}`,
    "",
    "## Zorg",
    ...site.diensten.map((d) => `- [${d.naam}](${site.url}/zorg/${d.slug}): ${inhoud[d.slug].lead}`),
    "",
    "## Hoeveel zorg",
    ...zorgvormen.map((z) => `- [${z.naam}](${site.url}/zorg/${z.slug}): ${z.lead}`),
    `- [Particuliere thuiszorg](${site.url}/zorg/particuliere-thuiszorg)`,
    "",
    `## Zorg in ${plaats.naam}`,
    ...site.diensten.map((d) => `- [${d.naam} in ${plaats.naam}](${site.url}/zorg/${d.slug}/${plaats.slug})`),
    "",
    `## Steden rond ${plaats.naam}`,
    ...site.steden.map((st) => `- [Particuliere thuiszorg in ${st.naam}](${site.url}/zorg/particuliere-thuiszorg/${st.slug})`),
    "",
    "## Informatie",
    `- [Tarieven en vergoeding](${site.url}/tarieven-en-vergoeding): tarieven op aanvraag, vooraf schriftelijk; particulier of pgb.`,
    `- [Veelgestelde vragen](${site.url}/veelgestelde-vragen)`,
    `- [Over ons](${site.url}/over)`,
    `- [Werkgebied](${site.url}/werkgebied)`,
    `- [Zorgvraag stellen](${site.url}/zorgvraag)`,
    `- [Contact](${site.url}/contact)`,
    "",
  ];
  return new Response(regels.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
