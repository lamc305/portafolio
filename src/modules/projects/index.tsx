import apps from "@/apps.json";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full mx-auto bg-gray-800 pb-7"
    >
      <div className="max-w-6xl pt-32 mx-auto">
        <h4 className="text-white text-center text-3xl font-semibold">
          Proyectos Destacados
        </h4>

        <p className="text-gray-300 text-xl mt-3 text-center">
          Una selección de mis trabajos más recientes y significativos
        </p>
        <div className="grid grid-cols-3 gap-12 mt-10 !max-w-5xl mx-auto">
          {apps.map((project, idx) => (
            <div
              key={idx}
              className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 min-h-[350px] rounded-2xl bg-gray-900 flex flex-col grow"
            >
              <Image
                src={project.img}
                alt={project.name}
                width={300}
                height={200}
                className="w-full h-36"
              />
              <div className="p-3 px-5 grow h-full flex flex-col">
                <p className="text-white text-lg text-center">{project.name}</p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {project.tecnologies.map((res) => (
                    <span
                      className="text-gray-300 border border-white py-1 px-2 rounded-2xl text-xs"
                      key={res}
                    >
                      {res}
                    </span>
                  ))}
                </div>
                <div className="mt-8 grow flex items-end justify-start gap-3">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-white cursor-pointer font-semibold hover:bg-cyan-600 transition-all duration-200 flex gap-1 items-center text-sm"
                  >
                    <ExternalLink className="h-[18px] w-[18px]" />
                    Demo
                  </Link>
                  <Link
                    target="_blank"
                    href={project.repositorio}
                    className="px-4 py-2 rounded-lg bg-gray-500  text-white cursor-pointer font-semibold hover:bg-gray-400 transition-all duration-200 items-center flex gap-1 text-sm"
                  >
                    <Image src="/github.svg" alt="" width={18} height={18} />
                    Código
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
