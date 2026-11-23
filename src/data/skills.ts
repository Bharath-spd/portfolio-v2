export type Skill = {
  name: string;
  level: number; // 0-100
};

export type SkillCategory = {
  id: string;
  label: string;
  icon: string; // lucide-react icon name
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "LayoutTemplate",
    skills: [
      { name: "React", level: 96 },
      { name: "TypeScript", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 84 },
      { name: "Express", level: 80 },
      { name: "GraphQL", level: 76 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: "Cloud",
    skills: [
      { name: "AWS", level: 78 },
      { name: "Vercel", level: 90 },
      { name: "Cloudflare", level: 72 },
      { name: "Docker", level: 74 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Redis", level: 70 },
      { name: "Supabase", level: 80 },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: "GitBranch",
    skills: [
      { name: "GitHub Actions", level: 80 },
      { name: "CI/CD", level: 78 },
      { name: "Terraform", level: 60 },
      { name: "Monitoring", level: 68 },
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: "Palette",
    skills: [
      { name: "Figma", level: 88 },
      { name: "Design Systems", level: 90 },
      { name: "Motion Design", level: 82 },
      { name: "Prototyping", level: 84 },
    ],
  },
  {
    id: "ai",
    label: "AI",
    icon: "Sparkles",
    skills: [
      { name: "LLM APIs", level: 82 },
      { name: "RAG pipelines", level: 70 },
      { name: "Prompt design", level: 86 },
      { name: "Vector DBs", level: 65 },
    ],
  },
];
