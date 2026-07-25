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

      <div className="proof-grid">
        {signals.map((signal, index) => (
          <FadeIn key={signal.label} delay={index * 0.06}>
            <article>
              <span>{signal.label}</span>
              <strong>{signal.title}</strong>
              <p>{signal.copy}</p>

              {signal.external ? (
                <a href={signal.href} target="_blank" rel="noreferrer">
                  {signal.cta} <ArrowUpRight size={15} />
                </a>
              ) : signal.download ? (
                <a href={signal.href} download>
                  {signal.cta} <ArrowDownRight size={15} />
                </a>
              ) : (
                <Link href={signal.href}>
                  {signal.cta} <ArrowUpRight size={15} />
                </Link>
              )}
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}