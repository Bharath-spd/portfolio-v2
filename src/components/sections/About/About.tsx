import { motion } from "framer-motion";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { AnimatedCounter } from "../../ui/AnimatedCounter/AnimatedCounter";
import { GlassCard } from "../../ui/GlassCard/GlassCard";
import { CountUp } from "../../ui/CountUp/CountUp";
import { profile, stats } from "../../../data/profile";
import styles from "./About.module.scss";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeading eyebrow="About" title="A little about" highlight="how I work" />

      <div className={styles.grid}>
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.photoFrame}>
            <img
              src="/about-photo.webp"
              alt="Portrait"
              loading="lazy"
            />
          </div>
          <div className={styles.badgeFloat}>
            <span className={styles.dot} /> Open to work
          </div>
        </motion.div>

        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>{profile.bio}</p>
          <p>
            I care most about the seams — the API contract between two teams, the migration that
            has to run without downtime, the error message that tells someone what actually went
            wrong. Good software is mostly good judgment about those seams.
          </p>

          <div className={styles.statsRow}>
            {stats.map((s) => (
              <AnimatedCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className={styles.factsGrid}>
        {profile.funFacts.map((fact, i) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <GlassCard glow className={styles.factCard}>
              <span className={styles.factEmoji}>{fact.emoji}</span>
              <span className={styles.factValue}><CountUp
                  value={parseInt(fact.value, 10) || 0}
                  suffix={fact.value.replace(/^[\d,]+/, "")}
                /></span>
              <span className={styles.factLabel}>{fact.label}</span>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
