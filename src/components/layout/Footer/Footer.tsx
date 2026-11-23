import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon, WhatsappIcon } from "../../icons/SocialIcons";
import { profile } from "../../../data/profile";
import styles from "./Footer.module.scss";

const iconMap = { Github: GithubIcon, Linkedin: LinkedinIcon, Twitter: TwitterIcon, Dribbble: DribbbleIcon, Whatsapp: WhatsappIcon };

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>{profile.name}</span>
          <p>{profile.roles[0]}, based in {profile.location}.</p>
        </div>

        <div className={styles.links}>
          <div>
            <h3>Quick links</h3>
            <a href="#about">About</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Elsewhere</h3>
            {profile.socials.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Icon size={14} /> {s.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Built with React, TypeScript &amp; Framer Motion.</span>
      </div>
    </footer>
  );
}
