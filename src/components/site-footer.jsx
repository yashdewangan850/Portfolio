"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import "./styles/footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="new-footer">
      <div className="new-footer-inner shell">
        <div className="new-footer-top">
          <motion.a
            href="#home"
            className="new-footer-brand"
            whileHover={{ y: -2 }}
          >
            YASH<span>.</span>
          </motion.a>

          <span className="new-footer-status">
            <i />
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        <div className="new-footer-main">
          <div className="new-footer-heading">
            <span>SOFTWARE DEVELOPER</span>

            <h2>
              Build.
              <br />
              <em>Ship. Learn.</em>
            </h2>
          </div>

          <div className="new-footer-links">
            <div>
              <span className="new-footer-label">
                NAVIGATION
              </span>

              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#journey">Journey</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <span className="new-footer-label">
                CONNECT
              </span>

              <a
                href="https://github.com/yashdewangan850"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://www.linkedin.com/in/yash-kumar-dewangan-5b0607266/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={13} />
              </a>

              <a href="mailto:yashdewangan850@gmail.com">
                Email
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className="new-footer-bottom">
          <span>
            © {currentYear} YASH KUMAR DEWANGAN
          </span>

          <span>
            HYDERABAD · INDIA
          </span>

          <a href="#home" className="new-footer-top-link">
            BACK TO TOP
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}