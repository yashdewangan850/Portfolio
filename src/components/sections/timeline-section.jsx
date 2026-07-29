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

const timeline = [
  {
    year: "2022",
    icon: <GraduationCap size={22} />,
    title: "Started B.Tech in Computer Science",
    company: "Government Engineering College, Ambikapur",
    description:
      "Started my Computer Science & Engineering journey while building a strong foundation in programming, data structures, algorithms, databases, and software engineering.",
  },
  {
    year: "2024",
    icon: <Code2 size={22} />,
    title: "Web Development Training",
    company: "Logixhunt, Bhilai",
    description:
      "Completed professional training in HTML, CSS, JavaScript, React.js, Bootstrap, Git, and responsive web development while building real-world projects.",
  },
  // {
  //   year: "2025",
  //   icon: <Briefcase size={22} />,
  //   title: "Full Stack MERN Development",
  //   company: "Personal & Academic Projects",
  //   description:
  //     "Built full-stack web applications using React.js, Node.js, Express.js, MongoDB, REST APIs, authentication, and responsive UI/UX design.",
  // },
  {
    year: "2026",
    icon: <Rocket size={22} />,
    title: "AI-Powered Projects",
    company: "Independent Development",
    description:
      "Developed AI Mock Interview Platform, GPS Attendance System, and macOS Portfolio Clone by integrating Gemini AI and modern web technologies.",
  },
  {
    year: "Present",
    icon: <Target size={22} />,
    title: "Open to Software Opportunities",
    company: "Software Engineer • MERN Stack Developer",
    description:
      "Actively seeking Software Engineer, Full Stack Developer, Frontend Developer, and MERN Stack Developer roles while continuously learning and building impactful products.",
  },
];

export function TimelineSection() {
  return (
    <section id="journey" className="timeline section shell">
      <div className="section-heading">
        <span className="section-tag">
          04 / JOURNEY
        </span>

        <h2>
          My <span>Professional Journey</span>
        </h2>

        <p className="section-intro">
          From learning programming fundamentals to building AI-powered
          full-stack applications, every milestone represents continuous
          growth, practical experience, and a passion for creating impactful
          software.
        </p>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line" />

        {timeline.map((item, index) => (
          <FadeIn key={item.year} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
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

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>
              </div>
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}