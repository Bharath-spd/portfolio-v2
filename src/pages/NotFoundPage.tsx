import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export function NotFoundPage() {
  return (
    <section className={styles.section}>
      <span className={styles.code}>404</span>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist, or moved.</p>
      <Link to="/">Back home</Link>
    </section>
  );
}
