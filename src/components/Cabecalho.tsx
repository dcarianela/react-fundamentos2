import logo from "../assets/logo.png";
import Menu from "./Menu";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        <img src={logo} alt="" />
        Ola React!
      </h1>
      <hr />
      <Menu />
    </header>
  );
}
