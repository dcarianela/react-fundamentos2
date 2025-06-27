import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";
import ListaCursos from "./ListaCursos";
import cursos from "../../data/cursos";
import { useState } from "react";

export default function Conteudo() {
  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];

  /* Definindo o state para categoria ativa/selecionada, podendo ser null (valor padrão, inicial) ou string (quando uma categoria for selecionada) */
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>(null);

  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>

        <Saudacao nome="Kobeni" classe="bg-red-100" />
        <p>Este é um exemplo da aplicação React.</p>

        {categorias.map((categoria) => {
          return (
            <button
              onClick={() => setCategoriaAtiva(categoria)}
              className="rounded py-1 px-2 mr-1 my-1 bg-amber-200 hover:bg-blue-400"
            >
              {categoria}
            </button>
          );
        })}

        {categoriaAtiva && (
          <>
            <button
              onClick={() => setCategoriaAtiva(null)}
              className="px-2 py-1 rounded bg-red-300"
            >
              Limpar
            </button>
          </>
        )}

        <ListaCursos categoria={categoriaAtiva} />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
