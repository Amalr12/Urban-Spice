import Hero from "./components/pages/home/hero";
import HomeAbout from "./components/pages/home/home-about";
import ImageSection from "./components/pages/home/img-section";
import Footer from "./components/ui/footer";

export default function Home() {
  return (
    <div className="m-20 ">
      <Hero />
      <HomeAbout />
      <ImageSection />
      <Footer />
    </div>
  );
}
