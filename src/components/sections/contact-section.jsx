"use client";

import { ArrowUpRight, Mail, MapPin, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import "../styles/contact.css";

export function ContactSection() {
  return (
    <section id="contact" className="new-contact section shell">
      <FadeIn>
        <div className="new-contact-top">
          <div className="new-contact-index">
            <span>06</span>
            <div />
            <span>CONTACT</span>
          </div>

          <span className="new-contact-kicker">
            LET&apos;S BUILD SOMETHING
          </span>
        </div>
      </FadeIn>

      <div className="new-contact-main">
        <FadeIn>
          <div className="new-contact-heading">
            <span>HAVE A PROJECT OR OPPORTUNITY?</span>

            <h2>
              Let&apos;s talk
              <br />
              <em>about it.</em>
            </h2>

            <p>
              I&apos;m currently open to software development opportunities,
              internships and projects where I can contribute and continue
              growing as a developer.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="new-contact-details">
            <a
              href="mailto:yashdewangan850@gmail.com"
              className="new-contact-email"
            >
              <span className="new-contact-detail-label">
                EMAIL
              </span>

              <strong>
                yashdewangan850@gmail.com
              </strong>

              <ArrowUpRight size={18} />
            </a>

            <div className="new-contact-info">
              <div>
                <MapPin size={17} strokeWidth={1.5} />

                <span>
                  Hyderabad, India
                </span>
              </div>

              <div>
                <Mail size={17} strokeWidth={1.5} />

                <span>
                  Open to opportunities
                </span>
              </div>
            </div>

            <div className="new-contact-socials">
              <a
                href="https://github.com/yashdewangan850"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={17} />
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/yash-kumar-dewangan-5b0607266/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={17} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>

            <motion.a
              href="/Yash_Kumar_Dewangan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="new-contact-resume"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="new-contact-bottom">
          <span>YASH KUMAR DEWANGAN</span>

          <span>
            SOFTWARE DEVELOPER · 2026
          </span>
        </div>
      </FadeIn>
    </section>
  );
}