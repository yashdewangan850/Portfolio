import { skills } from "@/data/portfolio";
import { FadeIn } from "@/components/motion/fade-in";

export function SkillsSection() {
  return (
    <section className="shell capabilities section">
      <FadeIn>
        <div className="section-top">
          <span className="kicker">03 / Tech Stack</span>
          <p>
          Built with a modern full-stack ecosystem, combining React, Next.js, Node.js, Express, MongoDB, and AI technologies to create scalable, maintainable, and user-centric applications.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="skill-cloud">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={index === 1 || index === 2 ? "featured" : ""}
            >
              {skill}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
