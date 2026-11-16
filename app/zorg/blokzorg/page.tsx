import ZorgvormPagina, { zorgvormMeta } from "../ZorgvormPagina";

export const metadata = zorgvormMeta("blokzorg");

export default function Pagina() {
  return <ZorgvormPagina slug="blokzorg" />;
}
