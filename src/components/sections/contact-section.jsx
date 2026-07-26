"use client";

import {
  Mail,
  MapPin,
  Download,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";

const contactInfo = [
  {
    icon: <Mail size={22} />,
    title: "Email",
    value: "yashdewangan850@gmail.com",
    href: "mailto:yashdewangan850@gmail.com",
  },
  {
    icon: <FaGithub size={22} />,
    title: "GitHub",
    value: "github.com/yashdewangan850",
    href: "https://github.com/yashdewangan850",
  },
  {
    icon: <FaLinkedin size={22} />,
    title: "LinkedIn",
    value: "linkedin.com/in/yash-kumar-dewangan",
    href: "https://linkedin.com/in/yash-kumar-dewangan",
  },
  {
    icon: <MapPin size={22} />,
    title: "Location",
    value: "India",
    href: "#",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="contact section shell"
    >
      <div className="section-heading">

        <span className="section-tag">
          05 / CONTACT
        </span>

        <h2>
          Let's build something
          <span> amazing together.</span>
        </h2>

        <p className="section-intro">
          I'm currently open to Full-Time Software
          Development opportunities. Whether you have
          an exciting project or an opportunity,
          I'd love to hear from you.
        </p>

      </div>

      <div className="contact-grid">

        <FadeIn>

          <div className="contact-left">

            <h3>
              Get In Touch
            </h3>

            <p>
              Feel free to reach out for Software
              Engineering, MERN Stack Development,
              Frontend Development or collaboration
              opportunities.
            </p>

            <div className="contact-list">

              {contactInfo.map((item) => (

                <motion.a
                  key={item.title}
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                      ? "_blank"
                      : "_self"
                  }
                  rel="noreferrer"
                  whileHover={{
                    y: -5,
                  }}
                  className="contact-card"
                >

                  <div className="contact-icon">
                    {item.icon}
                  </div>

                  <div>

                    <span>
                      {item.title}
                    </span>

                    <h4>
                      {item.value}
                    </h4>

                  </div>

                </motion.a>

              ))}

            </div>

          </div>

        </FadeIn>

        <FadeIn delay={0.08}>

          <div className="contact-right">

            <div className="contact-box">

              <span className="contact-tag">
                Available for Work
              </span>

              <h3>
                Ready to create impactful software.
              </h3>

              <p>
                I'm actively looking for
                Full Stack Developer,
                Software Engineer and
                MERN Stack Developer roles.
                Let's connect and discuss
                how I can contribute to your team.
              </p>

              <div className="contact-actions">

                <motion.a
                  href="mailto:yashdewangan850@gmail.com"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: .96,
                  }}
                  className="contact-btn"
                >
                  Send Email

                  <ArrowUpRight size={18} />

                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: .96,
                  }}
                  className="contact-btn secondary"
                >
                  <Download size={18} />

                  Download Resume

                </motion.a>

              </div>

            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}