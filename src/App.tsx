import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { Footer } from "./components/layout/Footer/Footer";
import { AuroraBackground } from "./components/layout/AuroraBackground/AuroraBackground";
import { CursorSpotlight } from "./components/layout/CursorSpotlight/CursorSpotlight";
import { ScrollProgress } from "./components/layout/ScrollProgress/ScrollProgress";
import { PageLoader } from "./components/layout/PageLoader/PageLoader";
import { CommandPalette } from "./components/layout/CommandPalette/CommandPalette";
import { BackToTop } from "./components/layout/BackToTop/BackToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HomePage } from "./pages/HomePage";
const BlogPage = lazy(() => import("./pages/BlogPage").then((m) => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage").then((m) => ({ default: m.BlogPostPage })));
const CertificationsPage = lazy(() => import("./pages/CertificationsPage").then((m) => ({ default: m.CertificationsPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skipLink">Skip to main content</a>
      <PageLoader />
      <AuroraBackground />
      <CursorSpotlight />
      <ScrollProgress />
      <CommandPalette />
      <Navbar />
      <ScrollToTop />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/certificates" element={<CertificationsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
