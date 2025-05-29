export default function Sobre() {
  return (
    <section className="px-4 py-12 mx-auto max-w-5xl flex justify-between gap-6 items-center pb-10">
      <div>
        <h1 className="font-display mb-8 max-w-xl text-5xl font-black">
          o que você procura{" "}
          <span className="text-blue-400">nós temos</span>
        </h1>
        <div className="space-y-6 text-lg text-gray-600">
          <p className="max-w-xl">
            Seja você um candidato em busca do seu próximo
            desafio ou uma empresa que busca novos talentos,
            o CodanteVaga facilita a conexão entre os candidatos
            e empregadores, promovendo o crescimento e inovações
            em diversos setores.
          </p>

          <p className="max-w-xl">
            Com uma interface intuitiva e facil de usar nosso board
            de vagas conecta profissionais de diferenter setores
            com as melhores empresas do mercado.
          </p>

          <p className='max-w-xl'>
            Se você um canditado em busca de seu proximo desafio
            ou uma empresa de novos talentos.O CodanteVags facilita
            a conexão entre os candidatos e empregadores,promovenddo
            o crescimento e inovações em diversos setores.
          </p>

        </div>
      </div>

      <img src="./grupo.png" className="h-full w-auto max-w-md object-contain" alt="Grupo" />
    </section>
  );
}