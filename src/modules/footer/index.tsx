import { Heart, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Link
                href="#home"
                className="bg-gradient-to-r from-blue-300 to-cyan-500 bg-clip-text text-xl font-bold text-transparent"
              >
                Portfolio
              </Link>
              <p className="text-muted-foreground mt-2">
                Creando experiencias web excepcionales
              </p>
            </div>

            <div className="flex space-x-4">
              <button className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-400 flex items-center justify-center">
                <Link href="https://github.com/lamc305" target="_blank">
                  <Image
                    src="/github.svg"
                    alt="github icon"
                    width={30}
                    height={30}
                    className="h-6 w-6"
                  />
                  <span className="sr-only">GitHub</span>
                </Link>
              </button>
              <button className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-400 flex items-center justify-center">
                <Link
                  href="https://www.linkedin.com/in/luis-medina-dev/"
                  target="_blank"
                >
                  <Linkedin className="h-6 w-6 text-black" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </button>
              <button className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-400 flex items-center justify-center">
                <Link href="mailto:lamc3005@gmail.com">
                  <Mail className="h-6 w-6 text-black" />
                  <span className="sr-only">Email</span>
                </Link>
              </button>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Hecho con <Heart className="h-4 w-4 text-red-500" /> por un
              desarrollador apasionado
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Portfolio. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
