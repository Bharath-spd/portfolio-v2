import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import styles from "./ThemeToggle.module.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Sun size={16} className={theme === "light" ? styles.activeIcon : styles.icon} />
      <Moon size={16} className={theme === "dark" ? styles.activeIcon : styles.icon} />
      <span className={styles.thumb} data-theme={theme} />
    </button>
  );
}
