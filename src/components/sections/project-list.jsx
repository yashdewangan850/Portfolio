"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { projects } from "@/data/portfolio";

function ProjectCard({ project, index }) {
  const rotateX = useSpring(0, {
    stiffness: 220,
    damping: 20,
  });

  const rotateY = useSpring(0, {
    stiffness: 220,
    damping: 20,
  });

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowX.set(x);
    glowY.set(y);

    rotateX.set(((rect.height / 2 - y) / rect.height) * 10);
    rotateY.set(((x - rect.width / 2) / rect.width) * 10);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <FadeIn delay={index * 0.08}>
      <motion.article
        className={`project-card ${
          project.featured ? "featured" : ""
        }`}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
          "--x": glowX,
          "--y": glowY,
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={{ y: -10 }}
      >
        {/* Header */}
        <div className="project-header">

          <span className="project-number">
            {project.number}
          </span>

          <span className={`status ${project.status}`}>
            {project.status}
          </span>

        </div>

        {/* Image */}
        <div className="project-image">

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="image"
          />

        </div>

        {/* Body */}
        <div className="project-body">

          <div className="project-meta">
            {project.type}
            <span> • </span>
            {project.year}
          </div>

          <h2>{project.title}</h2>

          <p>{project.copy}</p>

          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-buttons">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FaGithub size={16} />
              Code
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>

          </div>

        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="project-arrow"
        >
          <ArrowUpRight />
        </Link>
      </motion.article>
    </FadeIn>
  );
}

export function ProjectList() {
  return (
    <section
      id="work"
      className="projects section shell"
    >
      <FadeIn>

        <div className="section-top">

          <span className="kicker">
            01 / Selected Work
          </span>

          <h2>
            Featured Projects
          </h2>

          <p>
            A collection of full-stack applications,
            AI products, and modern web experiences
            built with performance, accessibility,
            and clean design in mind.
          </p>

        </div>

      </FadeIn>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}

      </div>
    </section>
  );
}