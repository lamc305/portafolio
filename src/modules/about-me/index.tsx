import { Code, Palette, Zap } from "lucide-react";
import Image from "next/image";

const info = [
  {
    title: "Código Limpio",
    description:
      "Escribo código mantenible y escalable siguiendo las mejores prácticas",
    icon: <Code />,
  },
  {
    title: "Diseño UI/UX",
    description:
      "Creo interfaces intuitivas y atractivas centradas en el usuario",
    icon: <Palette />,
  },
  {
    title: "Performance",
    description: "Optimizo aplicaciones para máxima velocidad y eficiencia",
    icon: <Zap />,
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen w-full mx-auto bg-gray-800">
      <div className="max-w-4xl pt-32 mx-auto">
        <h2 className="text-white text-center text-3xl font-semibold">
          Sobre Mí
        </h2>
        <p className="text-gray-300 text-xl mt-3 text-center">
          Desarrollador frontend apasionado por crear experiencias digitales
          excepcionales
        </p>
        <div className="grid grid-cols-2 gap-3 justify-between mx-auto mt-10">
          <div className="text-lg text-gray-300 flex flex-col gap-5">
            <p>
              Soy un desarrollador frontend con más de 3 años de experiencia
              creando aplicaciones web modernas. Me especializo en React,
              Next.js y TypeScript, siempre buscando las mejores soluciones para
              cada proyecto.
            </p>
            <p>
              Mi enfoque se centra en escribir código limpio, crear interfaces
              intuitivas y optimizar el rendimiento para ofrecer la mejor
              experiencia de usuario posible.
            </p>
            <p>
              En mis tiempos libres, me gusta ir al gym, jugar beach tennis o
              videojuegos con amigos.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/mi-setup.jpeg"
              alt={"My setup"}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          {info.map((res) => (
            <div
              key={res.title}
              className="bg-gray-900 w-[280px] text-white min-h-[200px] rounded-lg p-5 flex flex-col gap-3 hover:animate-wiggle cursor-default"
            >
              <div className="bg-cyan-800 rounded-full size-11 mx-auto flex items-center justify-center">
                {res.icon}
              </div>
              <p className="text-center text-gray-200 text-lg">{res.title}</p>
              <p className="text-center text-gray-400">{res.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
