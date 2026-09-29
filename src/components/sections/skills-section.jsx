"use client";

import { ArrowUpRight, Database, Globe, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import "../styles/skills.css";

const skillGroups = [
  {
    number: "01",
    icon: Globe,
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    number: "02",
    icon: Server,
    title: "Backend",
    description: "Developing APIs and server-side applications.",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "Authentication",
      "Mongoose",
    ],
  },
  {
    number: "03",
    icon: Database,
    title: "Database",
    description: "Working with structured and NoSQL data systems.",
    skills: [
      "MongoDB",
      "MySQL",
      "SQLite",
      "Database Design",
    ],
  },
  {
    number: "04",
    icon: Wrench,
    title: "Tools & Others",
    description: "Tools and technologies I use throughout development.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "AWS",
      "Gemini API",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="new-skills section shell">
      <FadeIn>
        <div className="new-skills-top">
          <div className="new-skills-index">
            <span>04</span>
            <div />
            <span>TECHNICAL SKILLS</span>
          </div>

          <span className="new-skills-kicker">
            TOOLS / TECHNOLOGIES / STACK
          </span>
        </div>
      </FadeIn>

      <div className="new-skills-heading">
        <FadeIn>
          <h2>
            Tools I use
            <br />
            to <span>build things.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p>
            A practical stack built around modern JavaScript development,
            full-stack applications and AI-powered features.
          </p>
        </FadeIn>
      </div>

      <div className="new-skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <FadeIn key={group.number} delay={index * 0.08}>
              <motion.article
                className="new-skill-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="new-skill-card-top">
                  <span>{group.number}</span>
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <div className="new-skill-card-content">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>

                <div className="new-skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn>
        <div className="new-skills-bottom">
          <div>
            <span className="new-skills-bottom-label">
              CURRENT FOCUS
            </span>

            <strong>
              Full Stack Development + AI
            </strong>
          </div>

          <a href="#projects">
            Explore my projects
            <ArrowUpRight size={16} />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}