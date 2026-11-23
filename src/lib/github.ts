import { useEffect, useState } from "react";

export const GITHUB_USER = "Bharath-spd";

export type GithubData = {
  totalContributions: number;
  publicRepos: number;
  followers: number;
  topLanguages: string[];
  /** weeks x 7 days, intensity 0-4 (Sunday first) */
  weeks: number[][];
};

type ContribDay = { date: string; level: number };

function toWeeks(days: ContribDay[]): number[][] {
  const weeks: number[][] = [];
  let week: number[] = new Array(new Date(days[0].date + "T00:00:00").getDay()).fill(0);
  for (const d of days) {
    week.push(d.level);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push([...week, ...new Array(7 - week.length).fill(0)]);
  return weeks;
}

async function fetchGithubData(signal: AbortSignal): Promise<GithubData> {
  const [user, repos, contrib] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USER}`, { signal }).then((r) => {
      if (!r.ok) throw new Error("github user");
      return r.json();
    }),
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`, { signal })
      .then((r) => (r.ok ? r.json() : []))
      .catch(() => []),
    // GitHub's REST API has no contribution calendar; this public proxy exposes it.
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`, { signal })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null),
  ]);

  const counts: Record<string, number> = {};
  for (const r of repos as { language: string | null }[]) {
    if (r.language) counts[r.language] = (counts[r.language] ?? 0) + 1;
  }

  return {
    totalContributions: contrib?.total?.lastYear ?? 0,
    publicRepos: user.public_repos ?? 0,
    followers: user.followers ?? 0,
    topLanguages: Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([lang]) => lang),
    weeks: contrib?.contributions?.length ? toWeeks(contrib.contributions) : [],
  };
}

export function useGithubData() {
  const [data, setData] = useState<GithubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetchGithubData(controller.signal)
      .then(setData)
      .catch((e) => {
        if (e.name !== "AbortError") setError(true);
      });
    return () => controller.abort();
  }, []);

  return { data, error };
}
