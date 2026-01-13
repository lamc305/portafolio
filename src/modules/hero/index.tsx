import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full pt-60 px-4 max-w-4xl mx-auto flex flex-col grow min-h-screen"
    >
      <h1 className="bg-gradient-to-r from-blue-300 to-cyan-500 bg-clip-text text-transparent text-6xl text-center mb-10 font-bold">
        Frontend Developer
      </h1>
      <p className="text-center text-2xl text-gray-300 max-w-2xl mx-auto">
        Creando experiencias web modernas y atractivas con las últimas
        tecnologías
      </p>
      <div className="flex items-center gap-3 justify-center mt-20 text-sm">
        <button className="px-4 py-3 rounded-lg min-w-[140px] bg-cyan-500 text-white cursor-pointer font-semibold hover:bg-cyan-600 transition-all duration-200 ">
          Ver Proyectos
        </button>
        <button className="px-4 py-3 rounded-lg min-w-[140px] bg-gray-800  text-white cursor-pointer font-semibold hover:bg-gray-950 transition-all duration-200 ">
          Contactar
        </button>
      </div>
      <div className="flex items-center gap-10 justify-center mt-10">
        <Link target="_blank" href={"https://github.com/lamc305"}>
          <Image src={"/github.svg"} alt="Github" width={25} height={25} />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/luis-medina-dev/"}
        >
          <Image
            className="text-white"
            src={"/linkedin.svg"}
            alt="Github"
            width={25}
            height={25}
          />
        </Link>
        <Link
          href={
            "mailto:lamc3005@gmail.com?subject=Frontend Developer&body=Hola Luis, he visto tu portafolio y estoy interesado en "
          }
          target="_blank"
        >
          <Image
            className="text-white"
            src={"/mail.svg"}
            alt="Github"
            width={25}
            height={25}
          />
        </Link>
      </div>
      <div className="flex items-center gap-10 justify-center mt-20">
        <ArrowDown className="animate-bounce" />
      </div>
    </section>
  );
}
