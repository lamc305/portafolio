"use client";
import { useLanguage } from "@/hooks/useLanguage";
import { useNavigation } from "@/hooks/useNavegation";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactView() {
  const { t } = useLanguage();
  const { scrollToSection } = useNavigation();

  const contactInfo = [
    {
      icon: Mail,
      title: "contactInfo.email",
      value: "lamc3005@gmail.com",
      href: "mailto:lamc3005@gmail.com",
    },
    {
      icon: Phone,
      title: "contactInfo.phone",
      value: "+58 (412) 6541455",
      href: "tel:+584126541455",
    },
    {
      icon: MapPin,
      title: "contactInfo.location",
      value: "Ciudad Ojeda, Venezuela",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-primary text-sm">03.</span>
          <h2 className="text-2xl font-semibold text-foreground">
            {t["contact.title"]}
          </h2>
          <div className="flex-1 h-px bg-border ml-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t["contactInfo.title"]}
              </h3>
              <p className="text-muted-foreground">
                {t["contactInfo.description"]}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-card border border-border/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-lg">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {t[info.title as keyof typeof t]}
                    </h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={info.href}
                      onClick={(e) => {
                        // Si el enlace no es un correo o teléfono, prevenir el comportamiento por defecto
                        // y desplazarse a la sección de contacto
                        if (
                          !info.href.startsWith("mailto:") &&
                          !info.href.startsWith("tel:")
                        ) {
                          e.preventDefault();
                          scrollToSection("contact");
                        }
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
