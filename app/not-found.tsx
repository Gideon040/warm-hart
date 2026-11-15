import Link from "next/link";
import type { Metadata } from "next";
import { BelKnop } from "@/components/Blokken";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: `Pagina niet gevonden | ${site.naam}`,
  robots: { index: false, follow: true },
};

export default function NietGevonden() {
  return (
    <main className="zb-bedankt">
      <h1>Deze pagina bestaat niet (meer)</h1>
      <p>Misschien is de link verouderd. Kijk bij onze zorg, of bel ons direct.</p>
      <div className="rij" style={{ justifyContent: "center" }}>
        <Link className="knop" href="/">Naar de homepage</Link>
        <BelKnop />
      </div>
    </main>
  );
}
