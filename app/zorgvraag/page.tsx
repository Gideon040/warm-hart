import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/site.config";
import { paginaMeta } from "@/components/meta";
import { HartLijst, Kruimelpad, telLink } from "@/components/Blokken";
import ZorgvraagWizard from "@/components/ZorgvraagWizard";

export const metadata: Metadata = paginaMeta({
  titel: `Zorgvraag stellen | ${site.merkKort}`,
  beschrijving: `Stel uw zorgvraag in vijf korte stappen. ${site.naam} neemt zo snel mogelijk contact met u op. Vrijblijvend, zonder medische gegevens.`,
  pad: "/zorgvraag",
});

// Zorgvraag-wizard (structuurspec 4.6).
export default function Zorgvraag() {
  return (
    <main>
      <section className="hero-zone">
        <div className="wrap duo boven" style={{ gap: "40px 56px" }}>
          <div className="col g22" style={{ flexBasis: 380 }}>
            <Kruimelpad items={[{ naam: "Zorgvraag stellen", pad: "/zorgvraag" }]} />
            <span className="hand">vertel het ons gerust</span>
            <h1 className="h1" style={{ fontSize: "clamp(32px,3.6vw,46px)" }}>Zorgvraag stellen</h1>
            <p className="lead">Vijf korte stappen. U hoeft geen medische gegevens in te vullen. Wij nemen zo snel mogelijk contact met u op, {site.bereikbaarKort}.</p>
            <HartLijst vet items={[
              "Vrijblijvend, u zit nergens aan vast",
              "Kennismaken bij u thuis",
              `Uw gegevens gaan alleen naar ${site.naam}`,
            ]} />
            <a className="belkaart niet-mobiel" href={telLink()} style={{ background: "var(--wit)" }}>
              <span>Liever bellen?</span>
              <b>{site.telefoonWeergave}</b>
            </a>
          </div>
          <div style={{ flexBasis: 520 }}>
            <Suspense>
              <ZorgvraagWizard />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
