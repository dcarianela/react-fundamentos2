export default function AvisoImportante() {
  return (
    <section className="bg-yellow-200 border-1-4 border-yellow-600 p-4">
      <h3 className="font-bold text-2xl text-orange-400">Aviso Importante:</h3>
      <p>Alguns alunos e alunas estão perigando reprovação nesta UC.</p>

      <div className="flex justify-between my-3 bg-white">
        <div className="bg-green-200">UM</div>
        <div className="bg-blue-300">DOIS</div>
        <div className="bg-red-300">TRÊS</div>
      </div>
    </section>
  );
}
