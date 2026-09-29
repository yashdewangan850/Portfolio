import { Navbar } from "@/components/sections/navbar";
import LoadingScreen from "@/components/ui/loading-screen";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/project-list";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";

import { TimelineSection } from "@/components/sections/timeline-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}