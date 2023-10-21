import { PilarCard } from "./components/pilar-card";
import { Quality } from "./components/types";

export function Qualities() {
  const qualitiesList: Quality[] = [
    {
      name: "Engajamento de Funcionários",
      description:
        "Envolve os funcionários no compromisso com a sustentabilidade, promovendo a conscientização e a colaboração.",
    },
    {
      name: "Formas de um Mundo Mais Sustentável",
      description:
        "Fornecimento de recursos para educar os funcionários sobre práticas sustentáveis.",
    },
    {
      name: "Gamificação",
      description:
        "Uso de elementos de jogos para motivar os funcionários a adotar comportamentos sustentáveis de maneira divertida.",
    },
    {
      name: "Totalmente Responsivo",
      description:
        "Acesso conveniente à plataforma em vários dispositivos, facilitando a participação em iniciativas sustentáveis a qualquer momento e lugar.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <span className="bg-schneiderGreen flex items-center justify-center w-96 p-4 shadow-xl rounded">
        <h1 className="text-white text-3xl font-bold">Diferenciais</h1>
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {qualitiesList.map(({ name, description }) => {
          return <PilarCard title={name} description={description} />;
        })}
      </div>
    </div>
  );
}
