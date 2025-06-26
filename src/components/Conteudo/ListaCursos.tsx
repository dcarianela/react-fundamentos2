import cursos from "../../data/cursos";
import estilos from "./ListaCursos.module.css";
import Artigo from "./Artigo/Artigo";

export default function ListaCursos() {
  return (
    <div className={estilos.artigos}>
      {cursos.map((curso) => (
        <Artigo dados={curso} key={curso.id} />
      ))}
    </div>
  );
}
