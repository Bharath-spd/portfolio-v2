import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { GlassCard } from "../../ui/GlassCard/GlassCard";
import { Badge } from "../../ui/Badge/Badge";
import { experience, education } from "../../../data/experience";
import styles from "./Experience.module.scss";

export function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <SectionHeading eyebrow="Path" title="Where I've" highlight="been" />

      <div className={styles.timeline}>
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            className={styles.row}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className={styles.markerCol}>
              <span className={styles.marker} />
              {i !== experience.length - 1 && <span className={styles.line} />}
            </div>
            <GlassCard glow className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <div className={styles.meta}>
                  <span>{exp.period}</span>
                  <span className={styles.location}>
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>
              </div>
              <ul className={styles.points}>
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {exp.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.educationBlock}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GraduationCap size={20} />
        {education.map((edu) => (
          <span key={edu.id}>
            {edu.degree} — {edu.school} <span className={styles.eduPeriod}>({edu.period})</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
