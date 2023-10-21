import { useInView } from "react-intersection-observer";
import ElipseDown from "../../assets/elipse-down.svg";
import ElipseUp from "../../assets/elipse-up.svg";
import { Footer } from "./components/footer";
import { Introduction } from "./components/introduction";
import { Members } from "./components/members";
import { Qualities } from "./components/qualities";
import { VideoIntroduction } from "./components/video-introduction";

export function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <main
      ref={ref}
      className={`flex flex-col gap-20 items-center transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <Introduction />
      <Qualities />
      <img src={ElipseUp} alt="" />
      <VideoIntroduction />
      <img src={ElipseDown} alt="" />
      <Members />
      <Footer />
    </main>
  );
}
