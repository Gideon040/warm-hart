import ZorgvormPagina, { zorgvormMeta } from "../ZorgvormPagina";

export const metadata = zorgvormMeta("uurzorg");

export default function Pagina() {
  return <ZorgvormPagina slug="uurzorg" />;
}
