import { FadeIn } from "@/components/motion/fade-in";

const entries = [
  {
    label: "CURRENT",
    title: "Full-Stack MERN Developer",
    copy: "Developing modern, responsive, and scalable web applications using React, Next.js, Node.js, Express.js, and MongoDB. Passionate about building high-quality software with clean architecture, performance optimization, and exceptional user experiences.",
  },
  {
    label: "SPECIALIZATION",
    title: "Modern Web Engineering",
    copy: "Focused on designing intuitive user interfaces, developing secure RESTful APIs, integrating databases, and delivering production-ready applications using industry best practices and scalable development workflows.",
  },
  {
    label: "GOAL",
    title: "Software Engineer",
    copy: "Continuously expanding my expertise in full-stack development, cloud technologies, and AI-powered applications while seeking opportunities to contribute to impactful products and grow as a software engineer.",
  },
];

export function TimelineSection() {
  return (
    <section className="shell timeline section">
      <FadeIn>
        <div className="section-top">
          <span className="kicker">04 / Professional Journey</span>
          <p>
            Driven by continuous learning, hands-on development, and a passion
            for building scalable, user-centric software solutions with modern
            technologies.
          </p>
        </div>
      </FadeIn>

      <div className="timeline-items">
        {entries.map((entry, index) => (
          <FadeIn key={entry.label} delay={index * 0.08}>
            <div>
              <span>{entry.label}</span>
              <h3>{entry.title}</h3>
              <p>{entry.copy}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}