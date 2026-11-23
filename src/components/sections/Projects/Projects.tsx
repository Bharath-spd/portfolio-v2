import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import { GithubIcon } from "../../icons/SocialIcons";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { Badge } from "../../ui/Badge/Badge";
import { projects, allTechTags } from "../../../data/projects";
import styles from "./Projects.module.scss";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -8, ry: px * 8 });
  }

  function reset() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <motion.div
      className={styles.cardWrap}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
    >
      <div className={styles.card}>
        <div className={styles.imageWrap}>
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className={styles.imageOverlay} />
        </div>
        <div className={styles.body}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className={styles.features}>
            {project.features.slice(0, 2).map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className={styles.tags}>
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <div className={styles.links}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
                <GithubIcon size={16} /> Code
              </a>
            )}
            {project.demo && project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site`}>
                <ExternalLink size={16} /> Live site
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !activeTag || p.tech.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <section id="projects" className={styles.section}>
      <SectionHeading
        eyebrow="Work"
        title="Selected"
        highlight="projects"
        description="A handful of the builds I'm proudest of — the rest live on GitHub."
      />

      <div className={styles.controls}>
        <div className={styles.search}>
          <Search size={16} />
          <input
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search projects"
          />
        </div>
        <div className={styles.filters}>
          <Badge active={activeTag === null} onClick={() => setActiveTag(null)}>
            All
          </Badge>
          {allTechTags.map((tag) => (
            <Badge key={tag} active={activeTag === tag} onClick={() => setActiveTag(tag)}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
        {filtered.length === 0 && <p className={styles.empty}>No projects match that search.</p>}
      </div>
    </section>
  );
}
