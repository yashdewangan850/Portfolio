import { FadeIn } from "@/components/motion/fade-in";

const entries = [
  {
    label: "NOW",
    title: "Full-Stack Developer",
    copy: "Building responsive web applications and AI-powered solutions using the MERN stack while continuously improving my software engineering skills.",
  },
  {
    label: "FOCUS",
    title: "Modern Web Development",
    copy: "Creating scalable React interfaces, robust backend APIs, and intuitive user experiences with a focus on performance and clean architecture.",
  },
  {
    label: "FOUNDATION",
    title: "MERN Stack",
    copy: "Developing end-to-end applications with MongoDB, Express.js, React, and Node.js using clean, maintainable, and scalable code.",
  },
];

export function TimelineSection() {
  return (
    <section className="shell timeline section">
      <FadeIn>
        <div className="section-top">
          <span className="kicker">04 / Current Focus</span>
          <p>Dedicated to continuous learning, practical development, and creating user-focused digital experiences.</p>
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
