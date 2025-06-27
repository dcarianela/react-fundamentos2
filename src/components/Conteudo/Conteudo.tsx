import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";
import ListaCursos from "./ListaCursos";
import cursos from "../../data/cursos";

export default function Conteudo() {
  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];

  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>

        <Saudacao nome="Kobeni" classe="bg-red-100" />
        <p>Este é um exemplo da aplicação React.</p>

        <ListaCursos />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
