import type { ReactNode } from "react";
import estilos from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
};

/* Sempre que você quiser que o componente (Container neste caso) aceite conteúdo JSX dentro dele, o tipo correto para a prop children é ReactNode, que cobre qualquer coisa renderizável no JSX (elementos, texto etc) */
export default function Container({ children }: ContainerProps) {
  return <main className={estilos.container}>{children}</main>;
}
