import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "lamc3005@gmail.com",
      href: "mailto:lamc3005@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+58 (412) 6541455",
      href: "tel:+584126541455",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Ciudad Ojeda, Venezuela",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="bg-transparent container mx-auto py-20">
      <h4 className="text-white text-center text-3xl font-semibold">
        Contacto
      </h4>
      <p className="text-gray-300 text-xl mt-3 text-center">
        Tienes un proyecto en mente? Hablemos!
      </p>
      <div className="grid grid-cols-2 gap-10 max-w-4xl mx-auto mt-10">
        <div className="p-6">
          <p className="text-white mb-4 text-xl font-semibold">
            Informacion de contacto
          </p>
          <p className="text-gray-300">
            Estoy disponible para nuevos proyectos y oportunidades de
            colaboracion. No dudes en contactarme a tráves de cualquiera de
            estos medios.
          </p>
          <div className="space-y-6 mt-5">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-400 flex items-center justify-center">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{info.title}</h4>
                  <a
                    target="_blank"
                    href={info.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-gray-300"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
