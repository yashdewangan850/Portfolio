"use client";

import {
  ArrowUp,
  Mail,
  Heart,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {

  return (

    <footer className="footer">

      <div className="shell">

        <div className="footer-top">

          <div className="footer-brand">

            <span className="footer-logo">
              YD
            </span>

            <h3>
              Yash Kumar Dewangan
            </h3>

            <p>
              Full Stack MERN Developer passionate about
              building modern, scalable and user-friendly
              web applications.
            </p>

          </div>

          <nav className="footer-nav">

            <h4>Navigation</h4>

            {links.map((link) => (

              <a
                key={link.label}
                href={link.href}
              >
                {link.label}
              </a>

            ))}

          </nav>

          <div className="footer-contact">

            <h4>Connect</h4>

            <a href="mailto:yashdewangan850@gmail.com">
              <Mail size={18} />
              Email
            </a>

            <a
              href="https://github.com/yashdewangan850"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yash-kumar-dewangan"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            © {new Date().getFullYear()} Yash Kumar Dewangan.
            Built with Next.js, React &
            Framer Motion.

          </p>

          <motion.a
            href="#hero"
            whileHover={{
              y: -4,
            }}
            className="back-top"
          >

            <ArrowUp size={18} />

          </motion.a>

        </div>

      </div>

    </footer>

  );

}