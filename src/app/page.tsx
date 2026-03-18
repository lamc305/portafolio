import { LanguageProvider } from "@/hooks/useLanguage";
import AboutMe from "@/modules/about-me/AboutMe";
import Contact from "@/modules/contact";
import Footer from "@/modules/footer/Footer";
import Header from "@/modules/header/Header";
import Hero from "@/modules/hero/Hero";
import Projects from "@/modules/projects";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* <WorkSection /> */}
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
