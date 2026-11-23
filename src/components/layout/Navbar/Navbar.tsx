import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { profile } from "../../../data/profile";
import styles from "./Navbar.module.scss";

const links = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Work", href: "projects" },
  { label: "Services", href: "services" },
  { label: "Blog", href: "blog" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function handleNavClick(id: string) {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label={`${profile.name} — home`}>
          {profile.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {links.map((link) => (
            <button key={link.href} onClick={() => handleNavClick(link.href)}>
              {link.label}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.paletteHint} aria-label="Open command palette" aria-keyshortcuts="Control+K Meta+K" onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}>
            <Command size={13} />
            <span>K</span>
          </button>
          <ThemeToggle />
          <button
            className={styles.menuBtn}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          id="mobile-nav"
          aria-label="Mobile"
          className={styles.mobileNav}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {links.map((link) => (
            <button key={link.href} onClick={() => handleNavClick(link.href)}>
              {link.label}
            </button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
