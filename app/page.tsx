import HeroSection from "@/app/components/HeroSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import ProjectSection from "@/app/components/ProjectSection";
import AboutSection from "@/app/components/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <AboutSection />
    </main>
  );
}
