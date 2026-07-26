"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const signals = [
  {
    label: "GITHUB",
    title: (
      <>
        Open Source
        <br />
        & Projects.
      </>
    ),
    copy: "Browse my GitHub repositories featuring full-stack MERN applications, AI-powered projects, REST APIs, and modern web development solutions that demonstrate my technical expertise and continuous learning.",
    href: "https://github.com/yashdewangan850",
    cta: "Explore GitHub",
    external: true,
  },
  {
    label: "RÉSUMÉ",
    title: (
      <>
        Experience
        <br />
        at a glance.
      </>
    ),
    copy: "Download my résumé to learn more about my technical skills, professional experience, featured projects, education, certifications, and software engineering journey.",
    href: "/Yash_Kumar_Dewangan_Resume.pdf",
    cta: "Download Résumé",
    download: true,
  },
  {
    label: "LINKEDIN",
    title: (
      <>
        Professional
        <br />
        Network.
      </>
    ),
    copy: "Connect with me on LinkedIn to explore my professional profile, career milestones, technical achievements, certifications, and the latest updates from my software development journey.",
    href: "https://www.linkedin.com/in/yash-kumar-dewangan-5b0607266/",
    cta: "View LinkedIn",
    external: true,
  },
];

export function SignalsSection() {
  return (
    <section className="shell proof section">
      <FadeIn>
        <div className="section-top">
          <span className="kicker">05 / Professional Presence</span>
          <p>
            Explore my work, technical expertise, and professional journey
            through open-source contributions, project portfolio, and career
            profile.
          </p>
        </div>
      </FadeIn>

      <motion.div
        className="proof-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {signals.map((signal, index) => (
          <FadeIn key={signal.label} delay={index * 0.06}>
            <motion.article
              className="signal-card"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
              }}
            >
              <span>{signal.label}</span>
              <strong>{signal.title}</strong>
              <p>{signal.copy}</p>

              {signal.external ? (
                <motion.a
                  href={signal.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    x: 6,
                  }}
                >
                  {signal.cta} <ArrowUpRight size={15} />
                </motion.a>
              ) : signal.download ? (
                <motion.a
                  href={signal.href}
                  download
                  whileHover={{
                    x: 6,
                  }}
                >
                  {signal.cta} <ArrowDownRight size={15} />
                </motion.a>
              ) : (
                <Link href={signal.href}>
                  {signal.cta} <ArrowUpRight size={15} />
                </Link>
              )}
            </motion.article>
          </FadeIn>
        ))}
      </motion.div>
    </section>
  );
}