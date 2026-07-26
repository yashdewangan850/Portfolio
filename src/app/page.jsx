"use client";

import { useEffect, useState } from "react";

import LoadingScreen from "@/components/ui/loading-screen";

import { SiteHeader } from "@/components/site-header";
// import { SiteFooter } from "@/components/site-footer";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectList } from "@/components/sections/project-list";
import { SignalsSection } from "@/components/sections/signals-section";
import { Footer } from "@/components/site-footer";
import { SkillsSection } from "@/components/sections/skills-section";
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

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
      <Footer />
      {/* <SiteFooter /> */}
    </main>
  );
}