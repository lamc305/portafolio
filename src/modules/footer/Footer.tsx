"use client";

import { useLanguage } from "../../hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-linear-to-b from-transparent to-background/50">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-4 text-center">
        <p className="font-mono text-xs text-muted-foreground glow">
          {t["footer.built"]}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-primary font-mono glow">{"<dev />"}</span>
          <span>—</span>
          <span>{t["footer.rights"]}</span>
        </div>
        <div className="h-px w-24 bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
    </footer>
  );
}
