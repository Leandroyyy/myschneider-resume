import ElipseDown from '../../assets/elipse-down.svg';
import ElipseUp from '../../assets/elipse-up.svg';
import { Footer } from './components/footer';
import { Introduction } from "./components/introduction";
import { Members } from './components/members';
import { Qualities } from './components/qualities';
import { VideoIntroduction } from "./components/video-introduction";


export function Home() {
  return (
    <main className="flex flex-col gap-20 items-center">
      <Introduction/>
      <Qualities/>
      <img src={ElipseUp} alt="" />
      <VideoIntroduction/>
      <img src={ElipseDown} alt="" />
      <Members/>
      <Footer/>
    </main>
  );
}
