import { useRouter } from "next/navigation";

export type SectionId =
  | "hero"
  | "about"
  | "work"
  | "projects"
  | "skills"
  | "contact";

export interface NavigationItem {
  id: SectionId;
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { id: "hero", label: "header.home", href: "#hero" },
  { id: "about", label: "header.about", href: "#about" },
  { id: "work", label: "nav.work", href: "#work" },
  { id: "projects", label: "header.projects", href: "#projects" },
  { id: "skills", label: "header.skills", href: "#skills" },
  { id: "contact", label: "header.contact", href: "#contact" },
];

export function useNavigation() {
  const router = useRouter();

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Si el elemento no existe, navega a la URL con el hash
      router.push(`#${sectionId}`);
    }
  };

  const getNavigationItem = (id: SectionId): NavigationItem | undefined => {
    return navigationItems.find((item) => item.id === id);
  };

  const getHref = (id: SectionId): string => {
    const item = getNavigationItem(id);
    return item?.href || `#${id}`;
  };

  return {
    scrollToSection,
    getNavigationItem,
    getHref,
    navigationItems,
  };
}
