/* Declara um tipo que será usado pelas props do Componente */
type Props = {
  nome?: string; // prop opcional
  classe: string;
};

export default function Saudacao({
  // Caso nome não seja informado (opcional), Visitante será usado
  nome = "Visitante",
  classe,
}: Props) {
  return (
    <p className={`my-2 rounded text-center ${classe}`}>
      Bem-vindo(a) <b>{nome}</b>
    </p>
  );
}
