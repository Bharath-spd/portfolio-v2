import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Music2 } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { GlassCard } from "../../ui/GlassCard/GlassCard";
import { profile } from "../../../data/profile";
import {
  mockCodeforcesStats,
  mockLeetCodeStats,
  mockSpotifyNowPlaying,
  mockWeather,
} from "../../../lib/mockIntegrations";
import { useGithubData } from "../../../lib/github";
import styles from "./LiveWidgets.module.scss";

function useClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function LiveWidgets() {
  const { data: gh, error: ghError } = useGithubData();
  const contributions = gh?.weeks ?? [];
  const clock = useClock();
  const progressPct = Math.round((mockSpotifyNowPlaying.progressMs / mockSpotifyNowPlaying.durationMs) * 100);

  return (
    <section id="stats" className={styles.section}>
      <SectionHeading
        eyebrow="Live"
        title="Right now"
        description="A few live signals from where I actually spend my time. (GitHub is live; the other widgets are sample data.)"
      />

      <div className={styles.grid}>
        <GlassCard glow className={styles.githubCard}>
          <div className={styles.cardHeader}>
            <h3>
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub activity</a>
            </h3>
            <span className={styles.badge}>{gh ? `${gh.totalContributions.toLocaleString()} contributions` : ghError ? "unavailable" : "loading…"}</span>
          </div>
          <div className={styles.heatmap}>
            {contributions.map((week, wi) => (
              <div key={wi} className={styles.week}>
                {week.map((level, di) => (
                  <span key={di} className={styles.cell} data-level={level} />
                ))}
              </div>
            ))}
          </div>
          <div className={styles.githubFooter}>
            <span>{gh?.publicRepos ?? "–"} repos</span>
            <span>{gh?.followers ?? "–"} followers</span>
            {gh && gh.topLanguages.length > 0 && <span>{gh.topLanguages.slice(0, 2).join(", ")}</span>}
          </div>
        </GlassCard>

        <GlassCard glow className={styles.smallCard}>
          <div className={styles.spotifyHeader}>
            <Music2 size={16} />
            <span>{mockSpotifyNowPlaying.isPlaying ? "Now playing" : "Last played"}</span>
          </div>
          <div className={styles.spotifyBody}>
            <img src={mockSpotifyNowPlaying.albumArt} alt="" className={styles.albumArt} />
            <div>
              <p className={styles.trackName}>{mockSpotifyNowPlaying.track}</p>
              <p className={styles.artistName}>{mockSpotifyNowPlaying.artist}</p>
            </div>
          </div>
          <div className={styles.progressTrack}>
            <motion.div
              className={styles.progressFill}
              initial={{ width: 0 }}
              whileInView={{ width: `${progressPct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
        </GlassCard>

        <GlassCard glow className={styles.smallCard}>
          <div className={styles.cardHeader}>
            <h3>Coding stats</h3>
          </div>
          <div className={styles.statPair}>
            <div>
              <p className={styles.statValue}>{mockLeetCodeStats.totalSolved}</p>
              <p className={styles.statLabel}>LeetCode solved</p>
            </div>
            <div>
              <p className={styles.statValue}>{mockCodeforcesStats.rating}</p>
              <p className={styles.statLabel}>Codeforces ({mockCodeforcesStats.rank})</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard glow className={styles.smallCard}>
          <div className={styles.cardHeader}>
            <h3>{clock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h3>
          </div>
          <div className={styles.weatherRow}>
            <Cloud size={22} />
            <div>
              <p className={styles.statValue}>{mockWeather.tempC}°C</p>
              <p className={styles.statLabel}>
                {mockWeather.city} · {mockWeather.condition}
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
