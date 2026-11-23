import { describe, expect, it } from "vitest";
import { projects, allTechTags } from "./projects";
import { skillCategories } from "./skills";
import { experience } from "./experience";
import { profile } from "./profile";

describe("content data integrity", () => {
  it("has unique project ids and required fields", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of projects) {
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.tech.length).toBeGreaterThan(0);
      expect(p.features.length).toBeGreaterThan(0);
    }
  });

  it("uses absolute URLs or '#' for project links", () => {
    for (const p of projects) {
      expect(p.demo === "#" || /^https:\/\//.test(p.demo)).toBe(true);
      if (p.github) expect(p.github).toMatch(/^https:\/\//);
    }
  });

  it("derives sorted, de-duplicated tech tags", () => {
    expect(allTechTags).toEqual([...new Set(allTechTags)].sort());
    expect(allTechTags).toContain("Next.js");
  });

  it("keeps skill levels within 0-100", () => {
    for (const cat of skillCategories) {
      for (const s of cat.skills) {
        expect(s.level).toBeGreaterThanOrEqual(0);
        expect(s.level).toBeLessThanOrEqual(100);
      }
    }
  });

  it("has experience entries and a valid profile", () => {
    expect(experience.length).toBeGreaterThan(0);
    expect(profile.email).toMatch(/^\S+@\S+\.\S+$/);
    expect(profile.socials.length).toBeGreaterThan(0);
  });
});
