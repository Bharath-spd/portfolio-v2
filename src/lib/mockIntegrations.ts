// ---------------------------------------------------------------------------
// These simulate data that would normally come from live APIs. Each export
// notes exactly which real endpoint would replace it, and how, so wiring
// these up later is a drop-in swap rather than a rewrite.
// ---------------------------------------------------------------------------

// Replace with: GitHub GraphQL API `contributionsCollection` query
// (requires a personal access token, so should be fetched server-side).
export function getMockGithubContributions(): number[][] {
  // 52 weeks x 7 days, values 0-4 (contribution intensity)
  const weeks = 52;
  const days = 7;
  const grid: number[][] = [];
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const r = rand();
      week.push(r > 0.55 ? Math.ceil(r * 4) : 0);
    }
    grid.push(week);
  }
  return grid;
}

export const mockGithubStats = {
  totalContributions: 1842,
  publicRepos: 47,
  followers: 612,
  topLanguages: ["TypeScript", "JavaScript", "Python", "Go"],
};

// Replace with: Spotify Web API `/me/player/currently-playing`
// (needs OAuth + refresh token, fetched via a serverless function).
export const mockSpotifyNowPlaying = {
  isPlaying: true,
  track: "Nightcall",
  artist: "London Grammar",
  albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop",
  progressMs: 94000,
  durationMs: 210000,
};

// Replace with: LeetCode's unofficial GraphQL endpoint, or a wrapper API.
export const mockLeetCodeStats = {
  username: "aaravmehta",
  totalSolved: 486,
  easy: 190,
  medium: 232,
  hard: 64,
  ranking: 84213,
};

// Replace with: Codeforces public API `user.rating` endpoint.
export const mockCodeforcesStats = {
  handle: "aarav_m",
  rating: 1642,
  rank: "Specialist",
  maxRating: 1701,
};

// Replace with: a weather provider like Open-Meteo or OpenWeatherMap.
export const mockWeather = {
  city: "Chennai",
  tempC: 31,
  condition: "Hot and humid",
};
