import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { certifications } from "../../../data/misc";
import { CertCard } from "./CertCard";
import styles from "./Certifications.module.scss";

export function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <SectionHeading eyebrow="Credentials" title="Certifications" />

      <div className={styles.grid}>
        {certifications.slice(0, 3).map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <CertCard cert={cert} />
          </motion.div>
        ))}
      </div>

      <div className={styles.more}>
        <Link to="/certificates" className={styles.viewAll}>
          View all certificates <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
