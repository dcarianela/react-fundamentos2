// Ajuda a detectar uso de recursos obsoletos (APIS, funções, padrões etc)
import { StrictMode } from "react";

// Usado para criar a 'raiz' da aplicação React a partir de um elemento HTML
import { createRoot } from "react-dom/client";

// Importa componente principal da aplicação.
// O componente App é o ponto de entrada da aplicação React
import App from "./App.tsx";

// Importando a folha de estilos CSS global
import "./global.css";

import { BrowserRouter } from "react-router-dom";

/* O BrowserRouter deve envolver toda a aplicação, habilitando assim a navegação por rotas. */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
