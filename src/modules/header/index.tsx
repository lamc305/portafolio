"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const list = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-5 flex justify-between">
        <p className="bg-gradient-to-r from-blue-300 to-cyan-500 bg-clip-text text-xl font-bold text-transparent">
          Portafolio
        </p>
        <div>
          <ul className="flex gap-10 text-gray-300 text-base">
            {list.map((item) => (
              <Link key={item.name} href={item.href}>
                <li className="hover:text-white transition duration-150 cursor-pointer">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
