import { motion } from "framer-motion";
import styles from "./SectionHeading.module.scss";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, highlight, description, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      className={styles.heading}
      data-align={align}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.title}>
        {title} {highlight && <span className={styles.highlight}>{highlight}</span>}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  );
}
