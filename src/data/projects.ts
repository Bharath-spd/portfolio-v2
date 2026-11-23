//import { profile } from "./profile";
export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  /** Omit for closed-source work. */
  github?: string;
  demo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "proj-spd-webparts",
    title: "SharePoint Designs Web Parts",
    description:
      "Recent work for the SharePoint Designs store: contributed one web part in each category of its catalogue, from banners and quick links to news, calendar and org charts.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    tech: ["SharePoint", "SPFx", "TypeScript", "React"],
    features: [
      "One web part contributed per store category",
      "Banners, Quick Links, News, Calendar, Weather and more",
      "Built for Microsoft SharePoint intranets",
    ],
    demo: "https://www.sharepointdesigns.com/category/banners",
    featured: true,
  },
  {
    id: "proj-myaster",
    title: "myAster Patient App",
    description:
      "Patient-facing side of myAster, Aster DM Healthcare's UAE platform for booking video consultations and in-clinic appointments with GPs and specialists.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "React.js", "Redux Toolkit", "MoEngage"],
    features: [
      "Revamped Packages, Rx-Preorder, Appointments and Records, lifting booking completion from 20% to 80%",
      "MoEngage analytics integration",
      "Saudi Arabia launch with bilingual English / Arabic (RTL) support",
    ],
    demo: "https://www.myaster.com/en/doctor-consultation",
    featured: true,
  },
  {
    id: "proj-myaster-doctor",
    title: "myAster Doctor App",
    description:
      "Practitioner-facing companion to the myAster patient app, with healthcare-focused features that help doctors track their patients' health metrics.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Next.js", "Redux Toolkit"],
    features: [
      "Health Profile for doctors to monitor patient wellness",
      "Blood pressure, glucose and risk indicators at a glance",
      "Companion to the myAster patient app",
    ],
    demo: "https://teleconsult-practitioner.myaster.com/",
    featured: true,
  },
  {
    id: "proj-snufflewind",
    title: "Snufflewind",
    description:
      "Hackathon entry: a multi-page storefront for a wind-up foraging station that keeps dogs busy for about three hours, with a mechanical carousel, no batteries and no app.",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    features: [
      "Product, cart, checkout and confirmation flow",
      "Interactive product page with FAQ and contact pages",
      "Built for the Happy While Away hackathon",
    ],
    github: "https://github.com/Bharath-spd/19l107-hwa-hackathon",
    demo: "https://19l107-hwa-hackathon.vercel.app/",
    featured: true,
  },
  // {
  //   id: "proj-1",
  //   title: "Ledger",
  //   description:
  //     "A reconciliation engine that matches transactions across payment providers and flags mismatches before they hit finance.",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  //   tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  //   features: ["Real-time reconciliation", "Anomaly detection", "Audit trail export"],
  //   github: profile.githubUrl,
  //   demo: "#",
  //   featured: true,
  // },
  // {
  //   id: "proj-2",
  //   title: "Fieldnotes",
  //   description:
  //     "Offline-first notebook for research teams that syncs opportunistically with a visible, simple merge model.",
  //   image:
  //     "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
  //   tech: ["React", "SQLite", "TypeScript"],
  //   features: ["Offline sync", "Conflict resolution UI", "Full-text search"],
  //   github: profile.githubUrl,
  //   demo: "#",
  //   featured: true,
  // },
  // {
  //   id: "proj-3",
  //   title: "Waypoint",
  //   description:
  //     "Internal deploy dashboard that turned a 40-minute release ritual into a two-click one, with rollback from day one.",
  //   image:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  //   tech: ["Next.js", "GraphQL", "AWS"],
  //   features: ["One-click rollback", "Release health checks", "Slack notifications"],
  //   github: profile.githubUrl,
  //   demo: "#",
  //   featured: true,
  // },
  // {
  //   id: "proj-4",
  //   title: "Groundwork",
  //   description:
  //     "Component library and design tokens shared across four product teams, with visual regression baked into CI.",
  //   image:
  //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  //   tech: ["React", "Storybook", "TypeScript"],
  //   features: ["Design tokens", "Visual regression", "Docs site"],
  //   github: profile.githubUrl,
  //   demo: "#",
  // },
  // {
  //   id: "proj-5",
  //   title: "Nightshift",
  //   description:
  //     "A queue-based background job runner with real-time progress streaming to the client over websockets.",
  //   image:
  //     "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  //   tech: ["Node.js", "Redis", "React"],
  //   features: ["Live progress streaming", "Retry policies", "Job prioritization"],
  //   github: profile.githubUrl,
  //   demo: "#",
  // },
  // {
  //   id: "proj-6",
  //   title: "Compass",
  //   description:
  //     "An AI-assisted onboarding flow that adapts its steps based on the signup source and account type.",
  //   image:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  //   tech: ["Next.js", "OpenAI API", "TypeScript"],
  //   features: ["Adaptive flow logic", "LLM-generated copy", "A/B test harness"],
  //   github: profile.githubUrl,
  //   demo: "#",
  // },
];

export const allTechTags = Array.from(new Set(projects.flatMap((p) => p.tech))).sort();
