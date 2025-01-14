import NavBarMain from "./components/navbar/NavBarMain";
import HeroMain from "./components/heroSection/heroMain";
import HeroGradient from "./components/heroSection/heroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/skillSection/SkillsMain";
import SubSkills from "./components/skillSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";

function App() {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <HelperSection />
    </main>
  );
}

export default App;
