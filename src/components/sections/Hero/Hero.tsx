import { motion, type Variants } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon, WhatsappIcon } from "../../icons/SocialIcons";
import { LinkButton } from "../../ui/Button/Button";
import { MagneticButton } from "../../ui/MagneticButton/MagneticButton";
import { useTypewriter } from "../../../hooks/useTypewriter";
import { profile } from "../../../data/profile";
import styles from "./Hero.module.scss";

const iconMap = { Github: GithubIcon, Linkedin: LinkedinIcon, Twitter: TwitterIcon, Dribbble: DribbbleIcon, Whatsapp: WhatsappIcon };

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="top" className={styles.hero}>
      <motion.div className={styles.content} variants={container} initial="hidden" animate="show">
        <motion.span className={styles.eyebrow} variants={item}>
          Available
        </motion.span>

        <motion.h1 className={styles.heading} variants={item}>
          Hi, I'm <span className={styles.gradient}>{profile.name.split(" ")[0]}</span>
          <br />
          <span className={styles.typed}>
            {typed}
            <span className={styles.cursor}>|</span>
          </span>
        </motion.h1>

        <motion.p className={styles.bio} variants={item}>
          {profile.bio}
        </motion.p>

        <motion.div className={styles.ctas} variants={item}>
          <MagneticButton>
            <LinkButton
              href={profile.resumeUrl}
              variant="gradient"
              icon={<FileText size={16} />}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </LinkButton>
          </MagneticButton>
          <MagneticButton>
            <LinkButton href="#projects" variant="glass" icon={<ArrowRight size={16} />}>
              View Projects
            </LinkButton>
          </MagneticButton>
        </motion.div>

        <motion.div className={styles.socials} variants={item}>
          {profile.socials.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={styles.socialIcon}>
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.orbitWrap}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className={styles.orbitCore}>
          <span>{"</>"}</span>
        </div>
        <div className={`${styles.ring} ${styles.ring1}`} />
        <div className={`${styles.ring} ${styles.ring2}`} />
        <div className={`${styles.ring} ${styles.ring3}`} />
        {["React", "TS", "Node", "AWS"].map((label, i) => (
          <div key={label} className={styles.orbitTag} data-index={i}>
            {label}
          </div>
        ))}
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
