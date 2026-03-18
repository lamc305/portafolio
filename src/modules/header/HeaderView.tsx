"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useNavigation } from "@/hooks/useNavegation";

export default function HeaderView() {
  const { language, setLanguage, t } = useLanguage();
  const { scrollToSection } = useNavigation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-lg shadow-primary/5">
      <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <button
          className="font-mono text-sm text-primary font-medium glow"
          onClick={() => scrollToSection("hero")}
        >
          {"<dev />"}
        </button>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection("work")}
              className="text-muted-foreground hover:text-primary transition-colors link-hover"
            >
              <span className="text-primary font-mono">01.</span>{" "}
              {t["nav.work"]}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors link-hover"
            >
              <span className="text-primary font-mono">02.</span>{" "}
              {t["nav.about"]}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors link-hover"
            >
              <span className="text-primary font-mono">03.</span>{" "}
              {t["nav.contact"]}
            </button>
          </div>

          <div className="flex items-center gap-0.5 text-xs border border-border rounded-md overflow-hidden bg-card/50">
            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1.5 transition-all ${
                language === "es"
                  ? "bg-primary text-primary-foreground pulse-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 transition-all ${
                language === "en"
                  ? "bg-primary text-primary-foreground pulse-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
