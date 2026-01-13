import AboutMe from "@/modules/about-me";
import Contact from "@/modules/contact";
import Footer from "@/modules/footer";
import Header from "@/modules/header";
import Hero from "@/modules/hero";
import Projects from "@/modules/projects";
import Skills from "@/modules/skills";

export default function Portfolio() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br to-blue-400 from-blue-950">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
