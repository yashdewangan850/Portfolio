import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="shell project-page">

      <Link href="/" className="text-link back-link">
        <ArrowLeft size={18} />
        Back Home
      </Link>

      <div className="project-header">
        <p className="kicker">
          {project.number} / {project.type} / {project.year}
        </p>

        <h1>{project.title}</h1>

        <p className="large-copy">
          {project.copy}
        </p>

        <div className="project-links">

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Live Demo
              <ArrowUpRight size={18} />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          )}

        </div>
      </div>

      {project.image && (
        <div className="project-banner">
          <Image
            src={project.image}
            alt={project.title}
            className="project-image"
            width={1400}
            height={800}
            priority
          />
        </div>
      )}

      <section className="project-section">

        <h2>Tech Stack</h2>

        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

      </section>

      <section className="project-section">
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>

      {project.features && (
        <section className="project-section">

          <h2>Key Features</h2>

          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>
                <CheckCircle size={18} />
                {feature}
              </li>
            ))}
          </ul>

        </section>
      )}

      {project.challenge && (
        <section className="project-section">
          <h2>Challenges</h2>
          <p>{project.challenge}</p>
        </section>
      )}

      {project.learning && (
        <section className="project-section">
          <h2>What I Learned</h2>
          <p>{project.learning}</p>
        </section>
      )}

    </main>
  );
}