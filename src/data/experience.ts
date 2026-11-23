export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Sharepoint Designs",
    role: "Software Engineer",
    period: "May 2025 — Present",
    location: "Chennai, Tamil Nadu",
    points: [
      "Designed and delivered enterprise-grade Microsoft 365 and SharePoint Online solutions using SPFx, Power Platform, Fluent UI and PnP-JS: responsive, scalable and governance-focused.",
      "Developed productized SPFx solutions and custom components that extend SharePoint's capabilities, automate modern homepage provisioning and improve the user experience across multi-tenant environments.",
    ],
    tech: ["SPFx", "Power Platform", "Fluent UI", "PnP-JS", "TypeScript"],
  },
  {
    id: "exp-2",
    company: "Aster DM Healthcare",
    role: "SDE I",
    period: "Dec 2022 — Feb 2025",
    location: "Bangalore, Karnataka",
    points: [
      "Built and maintained responsive web applications with React.js, Next.js and Redux Toolkit, improving performance and user experience with cross-browser compatibility through agile collaboration and code reviews.",
      "Handled production support for critical issues and picked up DevOps experience deploying microservices with Jenkins and Facets, plus cloud operations on Azure Blob Storage.",
    ],
    tech: ["React.js", "Next.js", "Redux Toolkit", "Jenkins", "Azure Blob Storage"],
  },
];

export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    id: "edu-1",
    school: "PSG College of Technology, Coimbatore",
    degree: "B.E., Electronics and Communication (CGPA 8.67 / 10)",
    period: "Jul 2019 — Apr 2023",
  },
];
