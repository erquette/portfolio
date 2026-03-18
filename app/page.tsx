import HeroSection from "@/app/components/HeroSection";
import ExperienceSection from "@/app/components/ExperienceSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="section-divider" />
      <ExperienceSection />
    </main>
  );
}
