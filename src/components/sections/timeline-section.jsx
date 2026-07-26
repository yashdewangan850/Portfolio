"use client";

import {
  GraduationCap,
  Briefcase,
  Code2,
  Rocket,
} from "lucide-react";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";

const timeline = [
  {
    year: "2020",
    icon: <GraduationCap size={22} />,
    title: "Started B.Tech in Computer Science",
    company: "Government Engineering College",
    description:
      "Began my Computer Science journey while building a strong foundation in programming, data structures, algorithms and software engineering.",
  },
  {
    year: "2024",
    icon: <Code2 size={22} />,
    title: "Full Stack Web Development Training",
    company: "Logixhunt, Bhilai",
    description:
      "Completed practical training in HTML, CSS, JavaScript, React.js and responsive web development while working on real-world applications.",
  },
  {
    year: "2025",
    icon: <Briefcase size={22} />,
    title: "Built Full Stack Projects",
    company: "Personal Projects",
    description:
      "Developed AI Mock Interview Platform, GPS Attendance System, macOS Clone and several MERN Stack applications using modern development practices.",
  },
  {
    year: "2026",
    icon: <Rocket size={22} />,
    title: "B.Tech Graduate",
    company: "Open to Full-Time Opportunities",
    description:
      "Graduated in Computer Science & Engineering and actively seeking Software Engineer, Full Stack Developer and MERN Developer roles.",
  },
];

export function TimelineSection() {
  return (
    <section id="journey" className="timeline section shell">

      <div className="section-heading">

        <span className="section-tag">
          03 / JOURNEY
        </span>

        <h2>
          My learning &
          <span> development journey.</span>
        </h2>

        <p className="section-intro">
          Every milestone reflects continuous learning,
          hands-on development and the passion to build
          scalable software solutions.
        </p>

      </div>

      <div className="timeline-wrapper">

        <div className="timeline-line" />

        {timeline.map((item, index) => (

          <FadeIn
            key={item.year}
            delay={index * 0.08}
          >

            <motion.article
              whileHover={{
                y: -8,
              }}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >

              <div className="timeline-dot">

                {item.icon}

              </div>

              <div className="timeline-card">

                <span className="timeline-year">

                  {item.year}

                </span>

                <h3>

                  {item.title}

                </h3>

                <h4>

                  {item.company}

                </h4>

                <p>

                  {item.description}

                </p>

              </div>

            </motion.article>

          </FadeIn>

        ))}

      </div>

    </section>
  );
}