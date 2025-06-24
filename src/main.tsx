// Ajuda a detectar uso de recursos obsoletos (APIS, funções, padrões etc)
import { StrictMode } from "react";

// Usado para criar a 'raiz' da aplicação React a partir de um elemento HTML
import { createRoot } from "react-dom/client";

// Importa componente principal da aplicação.
// O componente App é o ponto de entrada da aplicação React
import App from "./App.tsx";

// Importando a folha de estilos CSS global
import "./global.css";

// Seleciona o elemento HTML root, cria a raiz da aplicação e renderiza o componete App.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
