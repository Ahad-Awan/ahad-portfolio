import NavBarMain from "./components/navbar/NavBarMain";
import HeroMain from "./components/heroSection/heroMain";
import HeroGradient from "./components/heroSection/heroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";

function App() {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
    </main>
  );
}

export default App;
