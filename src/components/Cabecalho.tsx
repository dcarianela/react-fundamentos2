import logo from "../assets/logo.png";
import Menu from "./Menu";

/* Importando o módulo CSS para o componente Cabecalho */
import estilos from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={estilos.topoSite}>
      <h1>
        <img src={logo} alt="" />
        Ola React! 😺
      </h1>
      <hr />
      <Menu />
    </header>
  );
}
