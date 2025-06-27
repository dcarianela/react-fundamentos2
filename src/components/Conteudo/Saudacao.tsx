/* Declara um tipo que será usado pelas props do Componente */
type SaudacaoProps = {
  nome?: string; // prop opcional
  classe: string;
};

export default function Saudacao({
  nome = "Visitante",
  classe,
}: SaudacaoProps) {
  // callback chamada pelo evento
  const exemploEvento = () => {
    alert("Evento com chamada de callback externa");
  };

  return (
    <p className={`my-2 rounded text-center ${classe}`}>
      Bem-vindo(a) <b onClick={exemploEvento}>{nome}</b>
    </p>
  );
}
