import Artigo from "./Artigo/Artigo";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      {/* Para combinar classes, use template string */}
      <section
        className={`${estilos.principal} ${estilos.arredondada} ${estilos.sombra}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>

        <Saudacao classe="bg-emerald-100" />
        <Saudacao nome="Kobeni" classe="bg-red-100" />
        <p>Este é um exemplo da aplicação React.</p>

        <Artigo titulo="Front-End" numero={1} data={new Date()}>
          <p>Front-End</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            impedit, aperiam consequatur laborum eaque voluptatibus temporibus
            obcaecati asperiores? Ducimus necessitatibus tempore laudantium
            corporis est? Vel dolorum et optio vero facere.
          </p>
        </Artigo>

        <Artigo titulo="Back-End" numero={2}>
          <ul className="*:list-disc *:ml-7">
            <li>PHP</li>
            <li>SQL</li>
            <li>Orientação a Objetos</li>
          </ul>
          <p>E muitos mais!</p>
        </Artigo>
        <Artigo titulo="Mobile" numero={3}>
          <details>
            <summary>Conheça as tecnologias mais usadas</summary>
            <ol className="*:list-decimal *:ml-7">
              <li>JavaScript/Typescript</li>
              <li>Libs e Frameworks</li>
            </ol>
          </details>
        </Artigo>
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
