import type { ReactNode } from "react";
import estilos from "./Artigo.module.css";

type ArtigoProps = {
  titulo: string;
  numero: number;
  children: ReactNode;
  data?: Date;
};
export default function Artigo({ titulo, numero, children }: ArtigoProps) {
  return (
    <article className={estilos.artigo}>
      <h3>
        Artigo {numero}: {titulo}
      </h3>
      {children}
    </article>
  );
}
