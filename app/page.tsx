import Hero from "./components/pages/home/hero";
import HomeAbout from "./components/pages/home/home-about";
import ImageSection from "./components/pages/home/img-section";

export default function Home() {
  return (
    <div className="m-20 ">
      <Hero />
      <HomeAbout />
      <ImageSection />
    </div>
  );
}
