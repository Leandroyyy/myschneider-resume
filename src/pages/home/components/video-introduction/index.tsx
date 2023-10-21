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
    </div>
  );
}
