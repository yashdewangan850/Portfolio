import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

export function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="shell">
        <FadeIn>
          <span className="kicker">06 / Let’s connect</span>
          <h2>
            Have a good
            <br />
            <em>idea?</em>
          </h2>
          <a className="email" href="mailto:yashdewangan850@gmail.com">
            yashdewangan850@gmail.com <ArrowUpRight />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
