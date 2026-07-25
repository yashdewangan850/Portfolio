import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const signals = [
  {
    label: "GITHUB",
    title: (
      <>
        Open-source
        <br />
        in progress.
      </>
    ),
    copy: "Explore my GitHub for MERN Stack projects, AI-powered applications, frontend experiments, and open-source code that reflects my software development journey.",
    href: "https://github.com/yashdewangan850",
    cta: "Visit GitHub",
    external: true,
  },
  {
    label: "LEARNING",
    title: (
      <>
        Always
        <br />
        compounding.
      </>
    ),
    copy: "A concise summary of my experience, full-stack development projects, technical expertise, education, and professional achievements.",
    href: "/Yash_Kumar_Dewangan_Resume.pdf",
    cta: "Download résumé",
    download: true,
  },
  {
    label: "LINKEDIN",
    title: (
      <>
        What I’m
        <br />
        thinking about.
      </>
    ),
    copy: "Explore my professional profile, software development journey, MERN Stack projects, technical achievements, certifications, and career updates on LinkedIn.",
    href: "https://www.linkedin.com/in/yash-kumar-dewangan-5b0607266/",
    cta: "Visit LinkedIn",
    external: true,
  },
];

export function SignalsSection() {
  return (
    <section className="shell proof section">
      <FadeIn>
        <div className="section-top">
          <span className="kicker">05 / Presence</span>
          <p>
            Proof of a practice built on consistency, curiosity, and clean
            delivery.
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
