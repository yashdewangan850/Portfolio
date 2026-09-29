"use client";

import {
  GraduationCap,
  Code2,
  Briefcase,
  Rocket,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import "../styles/timeline.css";

const timeline = [
  {
    year: "2022",
    icon: GraduationCap,
    title: "Started B.Tech in Computer Science",
    organization: "Government Engineering College, Ambikapur",
    description:
      "Started my Computer Science & Engineering journey with a focus on programming, software development and computer science fundamentals.",
  },
  {
    year: "2024",
    icon: Code2,
    title: "Frontend Web Development Training",
    organization: "Logixhunt, Bhilai",
    description:
      "Completed practical web development training and worked with HTML, CSS, JavaScript and Bootstrap to build responsive web interfaces.",
  },
  {
    year: "2025",
    icon: Briefcase,
    title: "Full Stack Development",
    organization: "Projects & Development",
    description:
      "Started building full-stack applications using React, Node.js, Express, MongoDB and REST APIs.",
  },
  {
    year: "2026",
    icon: Rocket,
    title: "AI-Powered Applications",
    organization: "Independent Development",
    description:
      "Built projects combining modern web technologies with AI APIs, including an AI-powered mock interview platform.",
  },
  {
    year: "Present",
    icon: Target,
    title: "Open to Software Opportunities",
    organization: "Full Stack Developer",
    description:
      "Looking for an opportunity to contribute to real-world software products while continuing to grow as a professional developer.",
  },
];

export function TimelineSection() {
  return (
    <section id="journey" className="new-timeline section shell">
      <FadeIn>
        <div className="new-timeline-top">
          <div className="new-timeline-index">
            <span>05</span>
            <div />
            <span>MY JOURNEY</span>
          </div>

          <span className="new-timeline-kicker">
            EDUCATION / DEVELOPMENT / FUTURE
          </span>
        </div>
      </FadeIn>

      <div className="new-timeline-heading">
        <FadeIn>
          <h2>
            From learning
            <br />
            to <span>building.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p>
            A timeline of the experiences, projects and milestones that have
            shaped my journey as a software developer.
          </p>
        </FadeIn>
      </div>

      <div className="new-timeline-list">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <FadeIn
              key={`${item.year}-${item.title}`}
              delay={index * 0.07}
            >
              <motion.article
                className="new-timeline-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="new-timeline-year">
                  {item.year}
                </div>

                <div className="new-timeline-marker">
                  <Icon size={18} strokeWidth={1.5} />
                </div>

                <div className="new-timeline-content">
                  <span>{item.organization}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </motion.article>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn>
        <div className="new-timeline-bottom">
          <span>2022 — PRESENT</span>

          <strong>
            Learning. Building. Improving.
          </strong>
        </div>
      </FadeIn>
    </section>
  );
}