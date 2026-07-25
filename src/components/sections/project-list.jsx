import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/motion/fade-in";
import { ArrowUpRight, ExternalLink  } from "lucide-react";

export function ProjectList() {
  return (
    <section id="work" className="shell projects section">
      <FadeIn>
        <div className="section-top">
          <span className="kicker">01 / Selected work</span>
          <p>
            From a curious prompt to a polished interface, I build products
            people want to keep using.
          </p>
        </div>
      </FadeIn>
      <div className="project-list">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.06}>
            <article className={`project ${project.tint}`}>
              <div className="project-count">{project.number}</div>
              <div className="project-main">
                <p className="project-meta">
                  {project.type} <span>·</span> {project.year}
                </p>
                <h2>{project.title}</h2>
                <p className="project-copy">{project.copy}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">


                  
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>


                </div>


              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="project-arrow"
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight />
              </Link>
              <div className="project-art" aria-hidden="true">
                <i />
                <b />
                <u />
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
