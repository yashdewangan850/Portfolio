"use client";

import { skillGroups } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";

export function SkillsSection() {
  return (
    <section className="shell skills section" id="skills">
      <FadeIn>
        <div className="section-top">
          <span className="kicker">03 / Technical Expertise</span>

          <motion.h2
            className="display"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Technologies I use to build modern web experiences.
          </motion.h2>

          {/* <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My development workflow spans frontend engineering,
            backend architecture, databases, cloud deployment,
            and modern developer tools.
          </motion.p> */}
        </div>
      </FadeIn>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.title}>
            <motion.div
              className="skill-card"
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <div className="skill-card-header">
                <span className="skill-icon">
                  {group.icon}
                </span>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-pill"
                    whileHover={{
                      scale: 1.06,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="skill-footer">
                <span>
                  {group.skills.length} Technologies
                </span>

                <span className="skill-number">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}