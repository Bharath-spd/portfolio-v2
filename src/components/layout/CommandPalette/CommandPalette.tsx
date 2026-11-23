import { useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Moon, Search, Sun } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../../icons/SocialIcons";
import { profile } from "../../../data/profile";
import { useTheme } from "../../../context/ThemeContext";
import styles from "./CommandPalette.module.scss";

type Command = {
  id: string;
  label: string;
  hint: string;
  icon: React.ReactNode;
  action: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const { toggleTheme, theme } = useTheme();
  const uid = useId();
  const listId = `${uid}-list`;
  const returnFocusTo = useRef<HTMLElement | null>(null);
  const openRef = useRef(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        // Remember the trigger before the autofocused input takes focus.
        if (!openRef.current) returnFocusTo.current = document.activeElement as HTMLElement | null;
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    openRef.current = open;
    if (open) {
      setQuery("");
      setActive(0);
    } else {
      returnFocusTo.current?.focus?.();
    }
  }, [open]);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  const commands: Command[] = useMemo(
    () => [
      { id: "about", label: "Go to About", hint: "Section", icon: <ArrowRight size={16} />, action: () => goTo("about") },
      { id: "skills", label: "Go to Skills", hint: "Section", icon: <ArrowRight size={16} />, action: () => goTo("skills") },
      { id: "experience", label: "Go to Experience", hint: "Section", icon: <ArrowRight size={16} />, action: () => goTo("experience") },
      { id: "projects", label: "Go to Projects", hint: "Section", icon: <ArrowRight size={16} />, action: () => goTo("projects") },
      { id: "contact", label: "Go to Contact", hint: "Section", icon: <ArrowRight size={16} />, action: () => goTo("contact") },
      {
        id: "theme",
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        hint: "Toggle",
        icon: theme === "dark" ? <Sun size={16} /> : <Moon size={16} />,
        action: () => {
          toggleTheme();
          setOpen(false);
        },
      },
      { id: "github", label: "Open GitHub", hint: "Link", icon: <GithubIcon size={16} />, action: () => window.open(profile.githubUrl, "_blank", "noopener") },
      { id: "linkedin", label: "Open LinkedIn", hint: "Link", icon: <LinkedinIcon size={16} />, action: () => window.open(profile.linkedinUrl, "_blank", "noopener") },
      { id: "whatsapp", label: "Chat on WhatsApp", hint: "Link", icon: <WhatsappIcon size={16} />, action: () => window.open(profile.whatsappUrl, "_blank", "noopener") },
    ],
    [theme, toggleTheme]
  );

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));
  const activeIndex = Math.min(active, Math.max(filtered.length - 1, 0));
  const optionId = (i: number) => `${uid}-opt-${i}`;

  function onInputKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(filtered.length ? (activeIndex + 1) % filtered.length : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(filtered.length ? (activeIndex - 1 + filtered.length) % filtered.length : 0);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(Math.max(filtered.length - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIndex]?.action();
    }
  }

  // The combobox input is the dialog's only tab stop, so Tab simply stays put.
  function onDialogKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Tab") e.preventDefault();
  }

  useEffect(() => {
    if (open) document.getElementById(optionId(activeIndex))?.scrollIntoView({ block: "nearest" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className={styles.palette}
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onKeyDown={onDialogKeyDown}
          >
            <div className={styles.searchRow}>
              <Search size={16} />
              <input
                autoFocus
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKeyDown}
                role="combobox"
                aria-label="Search commands"
                aria-expanded="true"
                aria-controls={listId}
                aria-autocomplete="list"
                aria-activedescendant={filtered.length ? optionId(activeIndex) : undefined}
              />
              <kbd aria-hidden="true">Esc</kbd>
            </div>
            <div className={styles.srOnly} role="status" aria-live="polite">
              {filtered.length === 0 ? "No matches" : `${filtered.length} results`}
            </div>
            <ul className={styles.list} id={listId} role="listbox" aria-label="Commands">
              {filtered.length === 0 && <li className={styles.empty}>No matches</li>}
              {filtered.map((cmd, i) => (
                <li key={cmd.id} role="presentation">
                  <button
                    id={optionId(i)}
                    role="option"
                    aria-selected={i === activeIndex}
                    tabIndex={-1}
                    data-active={i === activeIndex || undefined}
                    onMouseMove={() => setActive(i)}
                    onClick={cmd.action}
                  >
                    <span className={styles.cmdIcon}>{cmd.icon}</span>
                    <span>{cmd.label}</span>
                    <span className={styles.hint}>{cmd.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
