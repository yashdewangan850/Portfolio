import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  return <main className="shell project-page"><Link className="text-link" href="/">← Back home</Link><p className="kicker">{project.number} / {project.type} / {project.year}</p><h1>{project.title}</h1><p className="large-copy">{project.copy}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><section><br /><h2 className="font-bold text-lg">Project overview</h2><br /><p>{project.overview}</p></section></main>;
}
