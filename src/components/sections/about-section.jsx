"use client";

import {
  ArrowUpRight,
  Code2,
  Layers3,
  Rocket,
  GraduationCap,
  MapPin,
  Briefcase,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "REST API",
  "JWT",
  "Git",
  "GitHub",
  "Docker",
  "Postman",
  "Vercel",
];

const stats = [
  {
    number: "15+",
    label: "Projects Built",
  },
  {
    number: "12+",
    label: "Technologies",
  },
  {
    number: "100%",
    label: "Responsive Design",
  },
];

const services = [
  {
    icon: <Layers3 size={22} />,
    title: "Frontend Development",
    description:
      "Responsive, accessible and pixel-perfect interfaces built with React, Next.js and Tailwind CSS.",
  },
  {
    icon: <Code2 size={22} />,
    title: "Backend Development",
    description:
      "Scalable APIs, authentication, databases and secure backend architecture using Node.js and Express.",
  },
  {
    icon: <Rocket size={22} />,
    title: "Full Stack Solutions",
    description:
      "Complete web applications from UI design to deployment with performance and maintainability in mind.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="about section shell">
      <div className="section-heading">

        <span className="section-tag">
          02 / ABOUT ME
        </span>

        <h2>
          Building modern digital products with
          <span> clean code & scalable architecture.</span>
        </h2>

        <p className="section-intro">
          Passionate about crafting modern web applications with
          performance, scalability and exceptional user experiences.
        </p>

      </div>

      <div className="about-grid">

        <FadeIn>

          <aside className="about-card">

            <div className="profile-badge">
              <Sparkles size={16} />
              Full Stack Developer
            </div>

            <h3>Who I Am</h3>

            <p>
              I'm <strong>Yash Kumar Dewangan</strong>, a passionate
              Full Stack MERN Developer and recent Computer Science
              graduate who enjoys building modern web applications,
              AI-powered products and intuitive digital experiences.

              My goal is to create software that is scalable,
              maintainable and delivers real value to users.
            </p>

            <div className="about-meta">

              <div>

                <Briefcase size={18} />

                <div>

                  <span>Experience</span>

                  <h4>Fresher</h4>

                </div>

              </div>

              <div>

                <GraduationCap size={18} />

                <div>

                  <span>Education</span>

                  <h4>B.Tech (CSE)</h4>

                </div>

              </div>

              <div>

                <MapPin size={18} />

                <div>

                  <span>Location</span>

                  <h4>India</h4>

                </div>

              </div>

              <div>

                <Rocket size={18} />

                <div>

                  <span>Availability</span>

                  <h4>Open to Full-Time Roles</h4>

                </div>

              </div>

            </div>

          </aside>

        </FadeIn>

        <FadeIn delay={0.08}>

          <div className="about-main">

            <p className="about-copy">

              I specialize in developing full-stack web applications
              using the MERN stack. My focus is on writing clean,
              maintainable code while creating intuitive user
              experiences and scalable backend systems.

              I enjoy learning modern technologies, solving
              real-world problems and continuously improving my
              development workflow.

            </p>

            <div className="service-grid">

              {services.map((item) => (

                <motion.div
                  key={item.title}
                  className="service-card"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                >

                  <div className="service-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </motion.div>

              ))}

            </div>

            <div className="tech-stack">

              {technologies.map((tech) => (

                <motion.span
                  key={tech}
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: .95,
                  }}
                >
                  {tech}
                </motion.span>

              ))}

            </div>

            <div className="stats-grid">

              {stats.map((item) => (

                <motion.div
                  key={item.label}
                  className="stat-card"
                  whileHover={{
                    y: -6,
                  }}
                >

                  <h3>{item.number}</h3>

                  <p>{item.label}</p>

                </motion.div>

              ))}

            </div>

            <div className="about-actions">

              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .96,
                }}
                className="about-btn"
              >
                View Projects

                <ArrowUpRight size={18} />

              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .96,
                }}
                className="about-btn secondary"
              >
                Contact Me
              </motion.a>

            </div>

          </div>

        </FadeIn>

      </div>
    </section>
  );
}