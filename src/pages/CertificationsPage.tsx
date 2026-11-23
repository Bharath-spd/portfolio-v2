import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { certifications } from "../data/misc";
import { profile } from "../data/profile";
import { CertCard } from "../components/sections/Certifications/CertCard";
import styles from "./CertificationsPage.module.scss";

export function CertificationsPage() {
  return (
    <section className={styles.section}>
      <Link to="/#certifications" className={styles.back}>
        <ArrowLeft size={16} /> Back to home
      </Link>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Credentials</span>
        <h1>All certificates</h1>
        <p>{certifications.length} certification{certifications.length === 1 ? "" : "s"} and counting.</p>
      </div>
      <p className={styles.linkedin}>
        Verified credentials also live on my{" "}
        <a href={`${profile.linkedinUrl}details/certifications/`} target="_blank" rel="noopener noreferrer">
          LinkedIn profile
        </a>
        .
      </p>
      <div className={styles.grid}>
        {certifications.map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
}
