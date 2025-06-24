import Artigo from "./Artigo";

export default function Conteudo() {
  return (
    <main>
      <section>
        <h2>Seja bem-vindo(a) aos Fundamentos de React</h2>
        <p>Este é um exemplo da aplicação React.</p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
}
