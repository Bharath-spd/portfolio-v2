import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard/GlassCard";
import { blogPosts } from "../data/misc";
import styles from "./BlogPage.module.scss";

export function BlogPage() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Writing</span>
        <h1>From the blog</h1>
        <p>Notes on frontend engineering, design systems, and building with AI.</p>
      </div>

      <div className={styles.grid}>
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              <GlassCard glow className={styles.card}>
                <div className={styles.imageWrap}>
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className={styles.category}>{post.category}</span>
                </div>
                <div className={styles.body}>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className={styles.meta}>
                    <span>
                      {post.date}{post.readTime ? ` · ${post.readTime}` : ""}
                    </span>
                    <span className={styles.readMore}>
                      Read more <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </GlassCard>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
