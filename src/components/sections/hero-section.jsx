"use client";

import { ArrowDownRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="top" className="hero shell">
      {/* Background */}
      <div className="hero-bg">
        <div className="aurora">
          <span className="aurora-1"></span>
          <span className="aurora-2"></span>
          <span className="aurora-3"></span>
        </div>

        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="grid-bg"></div>
      </div>

      {/* Content */}
      <div className="hero-content">

        {/* Badge */}
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="pulse" />
          Open to Full Stack & AI Opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Building modern
          <br />
          <em>digital experiences.</em>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          Hi, I'm <strong>Yash Kumar Dewangan</strong>, a Full Stack Developer
          specializing in the MERN Stack. I build scalable web applications,
          AI-powered products, and modern user experiences with a strong focus
          on performance, accessibility, and clean architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
        >
          <a href="#work" className="primary-btn">
            View Projects
          </a>

          <a
            href="/Yash_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            <Download size={18} />
            Resume
          </a>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
        >
          <motion.a
            whileHover={{
              scale: 1.08,
              rotate: 45,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="#work"
            className="circle-link"
            aria-label="Scroll to projects"
          >
            <ArrowDownRight size={28} />
          </motion.a>
        </motion.div>

        {/* Orbit */}
        <motion.div
          className="hero-orbit"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          <span>FULL STACK</span>
          <span>◆</span>
          <span>MERN</span>
          {/* <span>◆</span> */}
          <span>AI</span>
        </motion.div>
      </div>
    </section>
  );
}