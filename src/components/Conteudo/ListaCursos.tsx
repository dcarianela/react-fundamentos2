import cursos from "../../data/cursos";
import estilos from "./ListaCursos.module.css";
import Artigo from "./Artigo/Artigo";

type ListaCursosProps = {
  categoria: null | string;
};

export default function ListaCursos({ categoria }: ListaCursosProps) {
  const cursosPorCategoria = categoria
    ? cursos.filter((curso) => curso.categoria === categoria)
    : cursos;

  return (
    <>
      <p>
        Quantidade: <b>{cursosPorCategoria.length}</b>
      </p>
      <div className={estilos.artigos}>
        {cursosPorCategoria.map((curso) => (
          <Artigo dados={curso} key={curso.id} />
        ))}
      </div>
    </>
  );
}
