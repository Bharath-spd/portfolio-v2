export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Web Development",
    description:
      "End-to-end product builds — from architecture to a polished, production-ready frontend.",
    icon: "Code2",
  },
  {
    id: "svc-2",
    title: "SharePoint Development",
    description:
      "Custom SharePoint solutions, SPFx web parts, and workflow automation for enterprise teams.",
    icon: "Layers",
  },
  {
    id: "svc-3",
    title: "UI/UX Design",
    description:
      "Interface design and design systems that hold up as a product grows past its first version.",
    icon: "PenTool",
  },
  {
    id: "svc-4",
    title: "API Integration",
    description:
      "Clean integrations with payment, auth, analytics, and third-party data providers.",
    icon: "Plug",
  },
  {
    id: "svc-5",
    title: "AI Solutions",
    description:
      "LLM-powered features — from RAG search to adaptive UI — shipped with real guardrails.",
    icon: "Sparkles",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Priya Nair",
    role: "VP Engineering",
    company: "Nimbus Labs",
    quote:
      "Aarav rebuilt our design system without slowing the product team down for a single sprint. Rare combination of speed and care.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    id: "test-2",
    name: "David Chen",
    role: "Founder",
    company: "Fieldstone",
    quote:
      "The dashboard he shipped is still the fastest-loading part of our product, two years later. That's a durable kind of good.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: "test-3",
    name: "Meera Iyer",
    role: "Design Lead",
    company: "Studio Loop",
    quote:
      "One of the few engineers I've worked with who treats motion as a design decision, not a garnish.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  credentialId?: string;
  /** Credential / verification link (e.g. LinkedIn or issuer page). */
  url?: string;
};

// Newest first — the home page shows the first three, /certificates shows all.
// Add the rest of your LinkedIn certifications here.
export const certifications: Certification[] = [
  {
    id: "cert-sp-skills",
    title: "SharePoint Skills - Microsoft 365 & Power Platform Community 2026",
    issuer: "Microsoft 365 & Power Platform Community",
    date: "Nov 2026",
    credentialId: "cbc7754d-7fbe-4172-9717-7af080b13230",
    url: "https://www.credly.com/earner/earned/badge/cbc7754d-7fbe-4172-9717-7af080b13230",
    image:
      "https://images.credly.com/size/680x680/images/1712e3ac-bdde-45f9-bbf0-45701800666f/blob",
  },
  {
    id: "cert-hacktoberfest",
    title:
      "Hacktoberfest Contributor 2026 - Microsoft 365 & Power Platform Community",
    issuer: "Microsoft 365 & Power Platform Community",
    date: "Oct 2026",
    credentialId: "2825e083-8b1f-4feb-a5ce-4a2902984d3e",
    url: "https://www.credly.com/earner/earned/badge/2825e083-8b1f-4feb-a5ce-4a2902984d3e",
    image:
      "https://images.credly.com/size/680x680/images/8bfe2d12-80db-49aa-8a29-27bd9dc05efc/blob",
  },
  {
    id: "cert-community-contributor",
    title:
      "Community Contributor – Microsoft 365 & Power Platform Community 2026",
    issuer: "Microsoft 365 & Power Platform Community",
    date: "Oct 2026",
    credentialId: "0a6ca111-a5ab-46b4-b408-6989a531586c",
    url: "https://www.credly.com/earner/earned/badge/0a6ca111-a5ab-46b4-b408-6989a531586c",
    image:
      "https://images.credly.com/size/680x680/images/76dbe4bd-e45c-4c7a-a079-f5b6e7a893bd/blob",
  },
  {
    id: "cert-sharpoint-hack",
    title:
      "SharePoint Hackathon 2026 - Microsoft 365 & Power Platform Community",
    issuer: "Microsoft 365 & Power Platform Community",
    date: "Mar 2026",
    credentialId: "0b8da360-b36d-46b0-987e-46abb4693d61",
    url: "https://www.credly.com/earner/earned/badge/0b8da360-b36d-46b0-987e-46abb4693d61",
    image:
      "https://images.credly.com/size/680x680/images/a8ae427a-512c-45a5-bd1c-b068d8a49dbc/blob",
  },
  {
    id: "cert-prompt-engineering",
    title: "Prompt Engineering",
    issuer: "Sololearn",
    date: "Apr 2025",
    credentialId: "CC-A08YC6MQ",
    url: "https://www.sololearn.com/en/certificates/CC-A08YC6MQ",
  },
  {
    id: "cert-seo-with-ai",
    title: "SEO with AI",
    issuer: "Sololearn",
    date: "Apr 2025",
    credentialId: "CC-6WOVVCHI",
    url: "https://www.sololearn.com/en/certificates/CC-6WOVVCHI",
  },
  {
    id: "cert-javascript-basic",
    title: "Javascript (Basic)",
    issuer: "HackerRank",
    date: "Mar 2025",
    credentialId: "251223BF4DF6",
    url: "https://www.hackerrank.com/certificates/251223bf4df6",
  },
  {
    id: "cert-javascript-beginners",
    title: "JavaScript For Beginners",
    issuer: "Simplilearn",
    date: "Mar 2025",
    credentialId: "8097521",
    url: "https://drive.google.com/file/d/1owPtYgrIBfmlbueNg0WraRrORx_itYHq/view",
  },
  {
    id: "cert-flutter-intro",
    title: "Introduction To Flutter Course",
    issuer: "Simplilearn",
    date: "Mar 2025",
    credentialId: "8087878",
    url: "https://drive.google.com/file/d/1VVFedbdbQJFjhnOY10hV-jVp-iEQqI_i/view",
  },
  {
    id: "cert-css-basic",
    title: "CSS Basic",
    issuer: "HackerRank",
    date: "Mar 2025",
    credentialId: "674F6F28566A",
    url: "https://www.hackerrank.com/certificates/674f6f28566a",
  },
  {
    id: "cert-1",
    title: "Figma for Developers",
    issuer: "Masai",
    date: "Jun 2023",
    credentialId: "64906c6bc162b47f6466b86a",
    url: "https://drive.google.com/file/d/1XiGcsG2-GxYeXyR8t3vTxz0Z5MuLAaZ_/view",
  },
];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime?: string;
  image: string;
  /** Full article lives on the SharePoint Designs site. */
  url: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "how-to-create-sharepoint-brand-theme-from-logo",
    title:
      "How to Create a SharePoint Brand Theme from Your Logo — No Hex Codes Needed",
    excerpt:
      "How our setup wizard simplifies SharePoint branding: upload your logo and get a ready-to-use brand theme.",
    category: "Intranet Branding",
    date: "Sep 4, 2026",
    image:
      "https://cdn.prod.website-files.com/6253cef7a585722ec10279ee/6acc6e72509e29f34e244c07_SharePoint%20Brand%20Theme.webp",
    url: "https://www.sharepointdesigns.com/blog/how-to-create-sharepoint-brand-theme-from-logo",
    content: [],
  },
  {
    id: "post-2",
    slug: "spdesigns-propertypane-controls-spfx-color-image-picker",
    title:
      "@spdesigns/propertypane-controls: Reusable Color & Image Picker for SPFx WebParts",
    excerpt:
      "A shared, plug-and-play toolkit for color pickers and image pickers in SharePoint Framework (SPFx) web parts.",
    category: "SPFx Development",
    date: "Sep 3, 2026",
    image:
      "https://cdn.prod.website-files.com/6253cef7a585722ec10279ee/6acc6e95ee76a28b317d7990_Stop%20Copy-Pasting%20Your%20Property%20Pane%20Code.webp",
    url: "https://www.sharepointdesigns.com/blog/spdesigns-propertypane-controls-spfx-color-image-picker",
    content: [],
  },
];
