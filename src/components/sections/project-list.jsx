"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { projects } from "@/data/portfolio";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="new-projects section shell"
    >
      {/* Header */}

      <FadeIn>
        <div className="new-projects-header">
          <div className="new-projects-index">
            <span>02</span>
            <div />
            <span>SELECTED WORK</span>
          </div>

          <div>
            <span className="new-projects-kicker">
              PROJECTS / 2024 — 2026
            </span>

            <h2>
              Things I&apos;ve
              <span> built.</span>
            </h2>

            <p>
              A selection of applications and experiments
              focused on solving real problems through software.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Projects */}

      <div className="new-projects-list">
        {projects.map((project, index) => (
          <FadeIn
            key={project.slug}
            delay={index * 0.08}
          >
            <motion.article
              className="new-project"
              whileHover="hover"
            >
              {/* Info */}

              <div className="new-project-info">
                <div className="new-project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="new-project-details">
                  <div className="new-project-status">
                    <span />
                    {project.status || "PROJECT"}
                  </div>

                  <h3>{project.title}</h3>

                  <p>
                    {project.copy}
                  </p>

                  <div className="new-project-tags">
                    {project.tags?.map((tag, tagIndex) => (
                      <span
                        key={`${project.slug}-${tag}-${tagIndex}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="new-project-links">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Project
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                        <FaGithub size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Image */}

              <motion.a
                href={project.live || project.github || "#"}
                target={
                  project.live || project.github
                    ? "_blank"
                    : undefined
                }
                rel="noopener noreferrer"
                className="new-project-image"
                variants={{
                  hover: {
                    scale: 0.985,
                  },
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className="new-project-image-img"
                />

                <motion.div
                  className="new-project-image-overlay"
                  variants={{
                    hover: {
                      opacity: 0.2,
                    },
                  }}
                />

                <motion.div
                  className="new-project-image-arrow"
                  variants={{
                    hover: {
                      scale: 1,
                      opacity: 1,
                      x: 0,
                      y: 0,
                    },
                  }}
                  initial={{
                    scale: 0.7,
                    opacity: 0,
                    x: 10,
                    y: 10,
                  }}
                >
                  <ArrowUpRight size={21} />
                </motion.div>

                <div className="new-project-image-label">
                  {String(index + 1).padStart(2, "0")} / VIEW
                </div>
              </motion.a>
            </motion.article>
          </FadeIn>
        ))}
      </div>

      {/* Footer */}

      <FadeIn>
        <div className="new-projects-footer">
          <span>
            MORE PROJECTS AVAILABLE ON GITHUB
          </span>

          <a
            href="https://github.com/yashdewangan850"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}