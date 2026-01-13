const skills = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Herramientas & Otros",
    skills: ["Git", "Github", "Vercel", "Figma", "VS Code"],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="bg-transparent container mx-auto py-20">
      <h3 className="text-white text-center text-3xl font-semibold">
        Habilidades Técnicas
      </h3>
      <p className="text-gray-300 text-xl mt-3 text-center">
        Desarrollador frontend apasionado por crear experiencias digitales
        excepcionales
      </p>
      <div className="flex justify-between mt-10 max-w-5xl mx-auto">
        {skills.map((res) => (
          <div className="max-w-[250px] min-h-[150px]" key={res.title}>
            <p className="text-gray-200 text-center text-xl">{res.title}</p>
            <div className="mt-3 flex gap-3 grow flex-wrap items-center justify-center">
              {res.skills.map((res) => (
                <span
                  className="bg-gray-600 rounded-2xl px-2 py-1 text-white hover:bg-gradient-to-tr hover:from-gray-600 hover:to-gray-700 transition-colors duration-500 min-w-[60px] text-center animate-run cursor-default shadow-2xl"
                  key={res}
                >
                  {res}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
