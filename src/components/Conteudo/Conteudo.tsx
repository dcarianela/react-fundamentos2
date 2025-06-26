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

        <Saudacao nome="Hayakawa" classe="bg-emerald-100" />
        <Saudacao nome="Kobeni" classe="bg-red-100" />
        <p>Este é um exemplo da aplicação React.</p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
