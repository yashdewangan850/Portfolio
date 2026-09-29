"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="new-hero">
      <div className="new-hero-inner">

        {/* Left */}
        <div className="new-hero-content">

          <motion.div
            className="new-hero-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="new-hero-dot" />
            SOFTWARE DEVELOPER
            <span className="new-hero-year">2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            YASH
            <span>DEWANGAN.</span>
          </motion.h1>

          <motion.div
            className="new-hero-role"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            <span />
            Full Stack Developer
          </motion.div>

          <motion.p
            className="new-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            I build modern web applications and AI-powered
            products with a focus on clean interfaces,
            reliable systems and meaningful user experiences.
          </motion.p>

          <motion.div
            className="new-hero-stack"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            <span>React</span>
            <i>·</i>
            <span>Next.js</span>
            <i>·</i>
            <span>Node.js</span>
            <i>·</i>
            <span>MongoDB</span>
          </motion.div>

          <motion.div
            className="new-hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="new-hero-primary"
            >
              View Projects
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/Yash_Kumar_Dewangan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="new-hero-secondary"
            >
              Resume
              <Download size={15} />
            </a>
          </motion.div>

          <motion.div
            className="new-hero-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            <div className="new-hero-socials">
              <a
                href="https://github.com/yashdewangan850"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/yash-kumar-dewangan-5b0607266/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={17} />
              </a>

              <span />
              
              <small>
                INDIA · OPEN TO OPPORTUNITIES
              </small>
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          className="new-hero-visual"
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="new-hero-image-frame">

            <div className="new-hero-image-number">
              01 / 01
            </div>

            <motion.div
              className="new-hero-image"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/profile.png"
                alt="Yash Kumar Dewangan"
                fill
                priority
                sizes="(max-width: 900px) 70vw, 470px"
              />
            </motion.div>

            <div className="new-hero-image-caption">
              <span>YASH KUMAR DEWANGAN</span>
              <span>FULL STACK / AI</span>
            </div>
          </div>

          <motion.div
            className="new-hero-side-label"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            SCROLL
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        className="new-hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <span>SCROLL TO EXPLORE</span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}