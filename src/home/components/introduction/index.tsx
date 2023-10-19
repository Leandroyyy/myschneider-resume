import MySchneiderCellphone from "../../../assets/my-schneider-cellphone.svg";

export function Introduction() {
  return (
    <div className="flex flex-col items-center justify-evenly py-4 md:flex-row gap-5">
      <div className="flex flex-col gap-10 w-1/3 items-center md:items-start">
        <span
          className="
            flex
            flex-col
            gap-2
            justify-center
            "
        >
          <h1 className="text-3xl font-semibold">Somos a</h1>
          <h1
            className="
            text-white 
            bg-schneiderGreen 
            text-3xl
            font-bold
            pl-4
            py-1
            pb-2
            w-60
            md:w-80
            shadow-xl
          "
          >
            mySchneider
          </h1>
        </span>
        <p className="text-3xl">
          Transformando a<strong> Sustentabilidade </strong>
          em compromisso!
        </p>
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
