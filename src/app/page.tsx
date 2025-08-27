import HeroSection from "../../components/sections/HeroSection";
import SkillsSection from "../../components/sections/SkillsSection";
import FeaturedProjects from "../../components/sections/FeaturedProjects";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
    </div>
  );
}
