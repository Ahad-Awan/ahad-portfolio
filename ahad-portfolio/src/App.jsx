import NavBarMain from "./components/navbar/NavBarMain";
import HeroMain from "./components/heroSection/heroMain";
import HeroGradient from "./components/heroSection/heroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";

function App() {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <HelperSection />
    </main>
  );
}

export default App;
