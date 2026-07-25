import { skills } from "@/data/portfolio";
import { FadeIn } from "@/components/motion/fade-in";

export function SkillsSection() {
  return (
    <section className="shell capabilities section">
      <FadeIn>
        <div className="section-top">
          <span className="kicker">03 / Technical Expertise</span>

          <h2 className="display">
            Technologies powering every stage of development.
          </h2>

          {/* <p>
            I leverage a modern technology stack to design, develop, and deploy
            scalable web applications. From intuitive frontend interfaces with
            React and Next.js to robust backend services using Node.js,
            Express.js, and MongoDB, I focus on building secure,
            high-performance, and maintainable software solutions.
          </p> */}
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