import { Award } from "lucide-react";
import { GlassCard } from "../../ui/GlassCard/GlassCard";
import type { Certification } from "../../../data/misc";
import styles from "./Certifications.module.scss";

export function CertCard({ cert }: { cert: Certification }) {
  const card = (
    <GlassCard glow className={styles.card}>
      <div className={styles.imageWrap}>
        {cert.image ? (
          <img src={cert.image} alt={cert.title} loading="lazy" />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <Award size={40} />
          </div>
        )}
      </div>
      <div className={styles.body}>
        <Award size={16} className={styles.icon} />
        <h3>{cert.title}</h3>
        <p>
          {cert.issuer} · {cert.date}
        </p>
        {cert.credentialId && <p className={styles.credId}>ID: {cert.credentialId}</p>}
      </div>
    </GlassCard>
  );
  return cert.url ? (
    <a href={cert.url} target="_blank" rel="noopener noreferrer">
      {card}
    </a>
  ) : (
    card
  );
}
