import Artigo from "../Artigo/Artigo";
import estilos from "./Conteudo.module.css";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      {/* Para combinar classes, use template string */}
      <section className={`${estilos.arredondada} ${estilos.sombra}`}>
        <h2>Seja bem-vindo(a) aos Fundamentos de React</h2>
        <p>Este é um exemplo da aplicação React.</p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
}
