import { motion } from "framer-motion";
import { LayoutTemplate, Server, Cloud, Database, GitBranch, Palette, Sparkles } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { GlassCard } from "../../ui/GlassCard/GlassCard";
import { skillCategories } from "../../../data/skills";
import styles from "./Skills.module.scss";

const iconMap = { LayoutTemplate, Server, Cloud, Database, GitBranch, Palette, Sparkles };

export function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <SectionHeading
        eyebrow="Parts list"
        title="What I build"
        highlight="with"
        description="A working set, not an exhaustive one — the tools that show up in most weeks."
      />

      <div className={styles.grid}>
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <GlassCard glow className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.iconWrap}>
                    <Icon size={20} />
                  </span>
                  <h3>{cat.label}</h3>
                </div>
                <ul className={styles.skillList}>
                  {cat.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className={styles.skillLabel}>
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className={styles.barTrack}>
                        <motion.div
                          className={styles.barFill}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
