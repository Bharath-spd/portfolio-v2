import { lazy, Suspense, useEffect } from "react";
import { Hero } from "../components/sections/Hero/Hero";
import { About } from "../components/sections/About/About";

// Below-the-fold sections are split into their own chunks so the initial
// bundle only has to deliver what's visible on first paint.
const loaders = {
  Skills: () => import("../components/sections/Skills/Skills").then((m) => ({ default: m.Skills })),
  Experience: () => import("../components/sections/Experience/Experience").then((m) => ({ default: m.Experience })),
  Projects: () => import("../components/sections/Projects/Projects").then((m) => ({ default: m.Projects })),
  Services: () => import("../components/sections/Services/Services").then((m) => ({ default: m.Services })),
  LiveWidgets: () => import("../components/sections/LiveWidgets/LiveWidgets").then((m) => ({ default: m.LiveWidgets })),
  Certifications: () => import("../components/sections/Certifications/Certifications").then((m) => ({ default: m.Certifications })),
  BlogPreview: () => import("../components/sections/BlogPreview/BlogPreview").then((m) => ({ default: m.BlogPreview })),
  Contact: () => import("../components/sections/Contact/Contact").then((m) => ({ default: m.Contact })),
};

const Skills = lazy(loaders.Skills);
const Experience = lazy(loaders.Experience);
const Projects = lazy(loaders.Projects);
const Services = lazy(loaders.Services);
const LiveWidgets = lazy(loaders.LiveWidgets);
const Certifications = lazy(loaders.Certifications);
const BlogPreview = lazy(loaders.BlogPreview);
const Contact = lazy(loaders.Contact);

export function HomePage() {
  // Once the browser is idle, warm every chunk so in-page navigation
  // (navbar / command palette scrolling) never waits on the network.
  useEffect(() => {
    const warm = () => Object.values(loaders).forEach((load) => void load());
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(warm, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(warm, 1200);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={null}>
        <Projects />
        <Experience />
        <Certifications />
        <BlogPreview />
        <Skills />
        <Services />
        <LiveWidgets />
        <Contact />
      </Suspense>
    </>
  );
}
