import logo from "../../assets/logo.png";
import Menu from "./Menu/Menu";
import estilos from "./Cabecalho.module.css";
import { useState } from "react";

export default function Cabecalho() {
  /* Aqui definimos a chamada de uma função especial do React: useState. Esta e outras funções iniciadas com
  o prefixo 'use' são conhecidas como React Hooks.
  
  No caso do useState, usando desestruturação, criamos uma constante que representa o valor do state (titulo) e uma função responsável por atualizar o state (setTitulo)*/
  const [titulo, setTitulo] = useState("Olá React!");

  const alternarTitulo = () => {
    setTitulo((texto) => {
      return texto === "Olá React!" ? "Experimentando States!" : "Olá React!";
    });
  };

  return (
    <header className={estilos.topoSite}>
      <h1 onClick={alternarTitulo} className={estilos.titulo}>
        <img className={estilos.logo} src={logo} alt="" />
        {titulo}😺
      </h1>
      <hr />
      <Menu />
    </header>
  );
}
