"use client";
import { useEffect } from "react";
import { bewaarHerkomst } from "./utm";
import { event, EVENTS } from "../lib/analytics";

// Draait op elke pagina: legt de herkomst vast zodra iemand binnenkomt (ook
// als die pas later bij het formulier uitkomt) en meet bel- en mailklikken.
export default function Meten() {
  useEffect(() => {
    bewaarHerkomst();

    function bijKlik(e: MouseEvent) {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      // De bedankpagina uit het startpakket meet haar eigen bellink al.
      if (!href || link?.closest(".zb-bedankt")) return;
      if (href.startsWith("tel:")) event(EVENTS.bel);
      else if (href.startsWith("mailto:")) event(EVENTS.mail);
    }

    document.addEventListener("click", bijKlik);
    return () => document.removeEventListener("click", bijKlik);
  }, []);

  return null;
}
