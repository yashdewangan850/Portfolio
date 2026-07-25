import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

export function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="shell">
        <FadeIn>
          <span className="kicker ">06 / Get In Touch</span>

          <h2>
            Let's build
            <br />
            <em>something exceptional.</em>
          </h2>

          <p className="contact-copy">
            I'm open to full-time opportunities, freelance projects, and
            collaborations. If you're looking for a Full-Stack MERN Developer,
            let's connect and discuss how I can contribute to your team.
          </p>

          <a className="email" href="mailto:yashdewangan850@gmail.com">
            yashdewangan850@gmail.com <ArrowUpRight />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}