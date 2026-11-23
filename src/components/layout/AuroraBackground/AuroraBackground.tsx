import styles from "./AuroraBackground.module.scss";

export function AuroraBackground() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <div className={styles.grain} />
    </div>
  );
}
