"use client";

import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";

const capabilities = [
  {
    number: "01",
    title: "Frontend Development",
    text: "Building responsive and accessible interfaces with React, Next.js and modern CSS.",
  },
  {
    number: "02",
    title: "Backend Development",
    text: "Creating REST APIs and server-side applications using Node.js, Express and MongoDB.",
  },
  {
    number: "03",
    title: "AI-Powered Applications",
    text: "Exploring practical AI integrations and building applications around real user problems.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="new-about section shell">
      <FadeIn>
        <div className="new-about-top">
          <div className="new-about-index">
            <span>03</span>
            <div />
            <span>ABOUT ME</span>
          </div>

          <span className="new-about-kicker">
            DEVELOPER / BUILDER / LEARNER
          </span>
        </div>
      </FadeIn>

      <div className="new-about-main">
        <FadeIn>
          <div className="new-about-heading">
            <h2>
              I turn ideas
              <br />
              into <span>working software.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="new-about-copy">
            <p className="new-about-lead">
              I&apos;m Yash Kumar Dewangan, a Computer Science graduate and
              Full Stack Developer focused on building modern web
              applications.
            </p>

            <p>
              I enjoy working across the frontend and backend—from designing
              clean user interfaces to developing APIs, database systems and
              practical AI-powered features.
            </p>

            <p>
              My current focus is improving my engineering fundamentals,
              shipping real projects and growing into a professional software
              engineering role.
            </p>

            <a href="#contact" className="new-about-link">
              Let&apos;s work together
              <ArrowUpRight size={16} />
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.15}>
        <div className="new-about-editor">
          <div className="new-about-editor-top">
            <div className="new-about-editor-dots">
              <span />
              <span />
              <span />
            </div>

            <span>developer.js</span>

            <span>01 — 12</span>
          </div>

          <div className="new-about-code">
            <div className="new-about-line">
              <span>01</span>
              <code>
                <b>const</b> developer = {"{"}
              </code>
            </div>

            <div className="new-about-line">
              <span>02</span>
              <code>
                <em>name:</em> <strong>&quot;Yash Dewangan&quot;</strong>,
              </code>
            </div>

            <div className="new-about-line">
              <span>03</span>
              <code>
                <em>role:</em> <strong>&quot;Full Stack Developer&quot;</strong>,
              </code>
            </div>

            <div className="new-about-line">
              <span>04</span>
              <code>
                <em>stack:</em> <strong>&quot;MERN + Next.js&quot;</strong>,
              </code>
            </div>

            <div className="new-about-line">
              <span>05</span>
              <code>
                <em>focus:</em> <strong>&quot;Building useful products&quot;</strong>,
              </code>
            </div>

            <div className="new-about-line">
              <span>06</span>
              <code>
                <em>status:</em> <strong>&quot;Open to opportunities&quot;</strong>,
              </code>
            </div>

            <div className="new-about-line">
              <span>07</span>
              <code>{"};"}</code>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="new-about-capabilities">
        {capabilities.map((item, index) => (
          <FadeIn key={item.number} delay={index * 0.08}>
            <motion.div
              className="new-about-capability"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="new-about-capability-top">
                <span>{item.number}</span>

                {index === 0 && <Code2 size={20} />}
                {index === 1 && <Layers3 size={20} />}
                {index === 2 && <Sparkles size={20} />}
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="new-about-tech">
          <span>TECH I WORK WITH</span>

          <div className="new-about-tech-list">
            <span>React</span>
            <span>Next.js</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Git</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}