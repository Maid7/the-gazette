// -import section pages
import Hero from "../sections/Hero";
import News from "../sections/News";
import NewAlbum from "../sections/NewAlbum";
import SubscribeSection from "../sections/SubscribeSection";

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <NewAlbum />
      <SubscribeSection />
    </>
  );
}
