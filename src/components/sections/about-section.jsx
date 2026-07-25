import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

export function AboutSection() {
  return (
    <section id="about" className="shell split section">
     <FadeIn>
  <aside className="about-side">
    <span className="kicker">02 / About</span>

    <div className="about-meta">
      <div className="meta-item">
        <span>ROLE</span>
        <h4>Full Stack MERN Developer</h4>
      </div>

      <div className="meta-item">
        <span>EXPERTISE</span>
        <h4>React • Next.js • Node.js</h4>
      </div>

      <div className="meta-item">
        <span>CORE FOCUS</span>
        <h4>
          Building scalable, performant, and user-centric web applications.
        </h4>
      </div>

      <div className="meta-item">
        <span>CURRENTLY</span>
        <h4>Seeking Full-Time Software Engineering Opportunities</h4>
      </div>

      <div className="meta-item">
        <span>LOCATION</span>
        <h4>India</h4>
      </div>

      <div className="meta-item">
        <span>TECH STACK</span>
        <h4>
          React · Next.js · Node.js · Express · MongoDB · TypeScript
        </h4>
      </div>
    </div>
  </aside>
</FadeIn>

      <FadeIn delay={0.08}>
        <div className="about-content">
          <h2 className="display">
            Building products that combine thoughtful design with reliable
            engineering.
          </h2>

          <p className="large-copy">
            I'm <strong>Yash Kumar Dewangan</strong>, a Full Stack MERN
            Developer focused on creating fast, scalable, and user-centered web
            applications. I enjoy transforming ideas into production-ready
            digital products that are intuitive, maintainable, and built to
            scale.
          </p>

          <p className="large-copy">
            My work spans the complete development lifecycle—from designing
            responsive interfaces in React and Next.js to building secure
            backend services with Node.js, Express, and MongoDB. I prioritize
            clean architecture, performance optimization, accessibility, and
            long-term maintainability in every project.
          </p>

          <p className="large-copy">
            Beyond writing code, I'm passionate about solving real-world
            problems, continuously learning modern technologies, and
            collaborating with teams to deliver software that creates measurable
            value for users and businesses.
          </p>

          <div className="about-tech">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Tailwind CSS</span>
            <span>REST APIs</span>
            <span>Git & GitHub</span>
          </div>

          <a href="#contact" className="text-link">
            Let's Build Together
            <ArrowUpRight size={18} />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}