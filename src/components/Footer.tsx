import { Building2, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerSections = [
  {
    title: "Soluciones",
    links: [
      "Análisis Empresarial",
      "Gestión de Documentos", 
      "Colaboración en Equipo",
      "Seguridad y Cumplimiento"
    ]
  },
  {
    title: "Empresa",
    links: [
      "Nosotros",
      "Carreras",
      "Noticias y Actualizaciones",
      "Casos de Estudio"
    ]
  },
  {
    title: "Soporte",
    links: [
      "Centro de Ayuda",
      "Documentación",
      "Referencia API",
      "Estado del Sistema"
    ]
  },
  {
    title: "Legal",
    links: [
      "Política de Privacidad",
      "Términos de Servicio",
      "Política de Seguridad",
      "Política de Cookies"
    ]
  }
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" }
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-3xl font-bold">Barplas</span>
            </div>
            
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Empoderando empresas con soluciones de portal innovadoras y 
              plataformas integradas que impulsan el crecimiento, la eficiencia y el éxito.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-5 h-5" />
                <span>soporte@barplas.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span>123 Avenida Distrito Empresarial, NY 10001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <IconComponent className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a 
                          href="#" 
                          className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 Barplas. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                Privacidad
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                Términos
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};