import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectList } from "@/components/sections/project-list";
import { SignalsSection } from "@/components/sections/signals-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <ProjectList />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <SignalsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
