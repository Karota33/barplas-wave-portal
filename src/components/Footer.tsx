import { Building2, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerSections = [
  {
    title: "Solutions",
    links: [
      "Business Analytics",
      "Document Management", 
      "Team Collaboration",
      "Security & Compliance"
    ]
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Careers",
      "News & Updates",
      "Case Studies"
    ]
  },
  {
    title: "Support",
    links: [
      "Help Center",
      "Documentation",
      "API Reference",
      "System Status"
    ]
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Security Policy",
      "Cookie Policy"
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
              Empowering businesses with innovative portal solutions and integrated 
              platforms that drive growth, efficiency, and success.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-5 h-5" />
                <span>support@barplas.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span>123 Business District Ave, NY 10001</span>
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
              © 2024 Barplas. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                Privacy
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                Terms
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