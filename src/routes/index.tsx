import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Achievements,
  Contact,
  Education,
  Footer,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";
import { useRevealOnScroll } from "@/hooks/use-scroll-fx";

const TITLE = "Arghya Kamal Dey — CSE (Data Science) Student & Developer";
const DESC =
  "Portfolio of Arghya Kamal Dey, Computer Science & Engineering (Data Science) student at Kazi Nazrul University, batch 2024–2028. Machine learning, analytics and full-stack projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useRevealOnScroll();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent">
      <Background />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
