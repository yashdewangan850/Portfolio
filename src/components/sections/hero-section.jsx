import { ArrowDownRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

export function HeroSection() {
  return (
    <section id="top" className="hero shell">
      <div className="eyebrow">
        <span className="pulse" /> Available for meaningful work
      </div>
      <FadeIn>
        <h1>
          Code with
          <br />
          <em>intention.</em>
        </h1>
      </FadeIn>
      <FadeIn delay={0.1} className="hero-bottom">
        <p>
          I’m <strong>Yash Kumar Dewangan</strong> — a Full-Stack Software
          Developer specializing in the MERN stack, building scalable web
          applications, AI-powered solutions, and intuitive digital experiences
          with a focus on performance, usability, and clean code.
        </p>
        <a
          href="#work"
          className="circle-link"
          aria-label="Explore selected work"
        >
          <ArrowDownRight size={28} />
        </a>
      </FadeIn>
      <div className="hero-orbit" aria-hidden="true">
        <span>FULL-STACK</span>
        <span>◆</span>
        <span>MERN STACK DEVELOPER</span>
      </div>
    </section>
  );
}
