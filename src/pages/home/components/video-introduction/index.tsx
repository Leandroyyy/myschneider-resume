export function VideoIntroduction() {
  return (
    <div className="flex flex-col items-center gap-10">
      <span className="bg-schneiderGreen flex items-center justify-center w-96 p-4 shadow-xl rounded">
        <h1 className="text-white text-3xl font-bold">Conheça nossa solução</h1>
      </span>

      <iframe
        className="w-[70vw] h-[30vh] md:h-[70vh]"
        src="https://www.youtube.com/embed/T9B9ysMakFo?si=IiuVDZrz5bc7KvWW"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <a
        href="https://myschneider-website.vercel.app/"
        target="_blank"
        className="text-xl text-center font-bold text-schneiderGreen underline hover:text-lime-800 duration-300"
      >
        Experimente nossa solução em sua versão demo clicando aqui!
      </a>
    </div>
  );
}
