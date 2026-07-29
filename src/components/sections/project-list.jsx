"use client";

import Image from "next/image";
import Link from "next/link";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { FadeIn } from "@/components/motion/fade-in";
import { projects } from "@/data/portfolio";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="projects section shell"
    >
      <FadeIn>
        <div className="section-top">
          <span className="kicker">
            01 / SELECTED WORK
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A collection of AI-powered products,
            full-stack applications and modern web
            experiences.
          </p>
        </div>
      </FadeIn>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const mouseX = useMotionValue(0);
          const mouseY = useMotionValue(0);

          const rotateX = useSpring(0, {
            stiffness: 220,
            damping: 22,
          });

          const rotateY = useSpring(0, {
            stiffness: 220,
            damping: 22,
          });

          const glowX = useTransform(
            mouseX,
            (v) => `${v}px`
          );

          const glowY = useTransform(
            mouseY,
            (v) => `${v}px`
          );

          function handleMove(e) {
            const rect =
              e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            mouseX.set(x);
            mouseY.set(y);

            rotateX.set(
              ((rect.height / 2 - y) /
                rect.height) *
              10
            );

            rotateY.set(
              ((x - rect.width / 2) /
                rect.width) *
              10
            );
          }

          function handleLeave() {
            rotateX.set(0);
            rotateY.set(0);
          }

          return (
            <FadeIn
              key={project.slug}
              delay={index * 0.08}
            >
              <motion.article
                className={[
                  "project-card",
                  project.tint,
                  project.featured &&
                  "featured",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  rotateX,
                  rotateY,
                  transformPerspective: 1400,
                  "--x": glowX,
                  "--y": glowY,
                }}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                whileHover={{
                  y: -10,
                }}
              >
                <span className="spotlight" />

                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={project.featured}
                  />
                </div>

                <div className="project-content">

                  <div className="project-top">
                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className={`status ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.copy}
                  </p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}

                    {/* <Link
                      href={`/projects/${project.slug}`}
                      className="project-view"
                    >
                      View Project
                      <ArrowUpRight size={18} />
                    </Link> */}

                  </div>

                </div>

              </motion.article>

            </FadeIn>

          );
        })}

      </div>

    </section>

  );

}