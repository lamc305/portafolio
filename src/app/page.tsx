import { LanguageProvider } from "@/hooks/useLanguage";
import AboutMeView from "@/modules/about-me/AboutMeView";
import ContactView from "@/modules/contact/ContactView";
import FooterView from "@/modules/footer/FooterView";
import HeaderView from "@/modules/header/HeaderView";
import HeroView from "@/modules/hero/HeroView";
import ProjectsView from "@/modules/projects/ProjectsView";

export default function Home() {
  return (
    <LanguageProvider>
      <HeaderView />
      <main>
        <HeroView />
        <ProjectsView />
        <AboutMeView />
        <ContactView />
      </main>
      <FooterView />
    </LanguageProvider>
  );
}
