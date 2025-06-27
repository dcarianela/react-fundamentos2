import estilos from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";
import { useState } from "react";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  const [selecionado, setSelecionado] = useState(false);

  const alternarCor = () => {
    setSelecionado(!selecionado);
  };

  const { titulo, preco, categoria } = dados;
  return (
    <article
      className={estilos.artigo}
      onClick={alternarCor}
      style={{ backgroundColor: selecionado ? "yellow" : "#f9f9f9" }}
    >
      <h3>{titulo}</h3>
      <p>
        <b>Categoria: </b>
        {categoria}
      </p>
      <p>
        <b>Preço: </b>
        {preco}
      </p>
    </article>
  );
}
