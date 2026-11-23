import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../data/misc";
import styles from "./BlogPostPage.module.scss";

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className={styles.notFound}>
        <h1>Post not found</h1>
        <Link to="/blog">Back to blog</Link>
      </section>
    );
  }

  return (
    <article className={styles.article}>
      <div className={styles.hero}>
        <img src={post.image} alt={post.title} />
      </div>

      <div className={styles.body}>
        <Link to="/blog" className={styles.back}>
          <ArrowLeft size={16} /> Back to blog
        </Link>

        <span className={styles.category}>{post.category}</span>
        <h1>{post.title}</h1>
        <p className={styles.meta}>
          {post.date}{post.readTime ? ` · ${post.readTime}` : ""}
        </p>

        <div className={styles.content}>
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
