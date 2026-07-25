import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

export function AboutSection() {
  return (
    <section id="about" className="shell split section">
      <FadeIn>
        <span className="kicker">02 / The approach</span>
      </FadeIn>
      <FadeIn delay={0.08}>
        <div>
          <h2 className="display">Building modern web applications with purpose.</h2>

          <p className="large-copy">
            I develop scalable web applications with React, Next.js, Node.js,
            Express, and MongoDB, focusing on clean architecture, performance,
            and user-centered experiences.
          </p>
          <a className="text-link" href="mailto:yashdewangan850@gmail.com">
            Let’s Build Together <ArrowUpRight size={17} />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
