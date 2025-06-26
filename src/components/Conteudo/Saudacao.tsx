/* Declara um tipo que será usado pelas props do Componente */
type Props = {
  nome: string;
  classe: string;
};

export default function Saudacao({ nome, classe }: Props) {
  return (
    <p className={`my-2 rounded text-center ${classe}`}>
      Bem-vindo(a) <b>{nome}</b>
    </p>
  );
}
