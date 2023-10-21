import MySchneiderCellphone from "../../../../assets/my-schneider-cellphone.svg";
import MySchneiderLogo from "../../../../assets/my-schneider-logo.svg";

export function Introduction() {
  const benefitsList = [
    "Engajamento de Funcionarios",
    "Formas de um mundo mais sustentavel",
    "Gamificação",
    "Totalmente Responsivo",
  ];

  return (
    <div className="flex flex-col items-center justify-evenly py-4 md:flex-row gap-10 md:gap-44">
      <div className="flex flex-col gap-10 w-1/3 items-center md:items-start">
        <div className="flex flex-col w-40 items-center md:flex-row gap-10">
          <img src={MySchneiderLogo} alt="logo myschneider" />
          <span className="flex flex-col gap-2 justify-center">
            <h1 className="text-3xl font-semibold">Somos a</h1>
            <h1 className="text-white bg-schneiderGreen text-3xl font-bold pl-4 py-1 w-60 md:w-80 shadow-xl rounded">
              mySchneider
            </h1>
            <p className="text-3xl">
              Transformando a<strong> Sustentabilidade </strong>
              em compromisso!
            </p>
          </span>
        </div>
        <div>
          <ul>
            {benefitsList.map((benefit) => {
              return <li className="list-disc text-xl">{benefit}</li>;
            })}
          </ul>
        </div>
      </div>
      <div>
        <img
          src={MySchneiderCellphone}
          alt="Demonstração plataforma mySchneider"
        />
      </div>
    </div>
  );
}
