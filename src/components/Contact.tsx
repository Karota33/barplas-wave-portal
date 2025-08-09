import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Headphones
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Soporte Telefónico",
    description: "Habla directamente con nuestro equipo experto",
    contact: "+1 (555) 123-4567",
    availability: "Lun-Vie, 9AM-6PM EST"
  },
  {
    icon: Mail,
    title: "Soporte por Email",
    description: "Obtén asistencia detallada por correo electrónico",
    contact: "soporte@barplas.com",
    availability: "Respuesta 24/7"
  },
  {
    icon: MessageSquare,
    title: "Chat en Vivo",
    description: "Soporte de chat instantáneo disponible",
    contact: "Disponible en el portal",
    availability: "Lun-Vie, 8AM-8PM EST"
  }
];

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary mb-6">
            <Headphones className="w-4 h-4" />
            Contáctanos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Listo para Transformar tu{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Negocio?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contacta a nuestro equipo hoy para conocer cómo Portal Barplas puede optimizar 
            tus operaciones y acelerar tu crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="text-center hover:shadow-elegant transition-smooth bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="font-semibold text-foreground mb-2">{method.contact}</p>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {method.availability}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Send className="w-6 h-6 mr-3 text-accent" />
                Envíanos un Mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre
                    </label>
                    <Input placeholder="Juan" className="border-border/50 bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Apellido
                    </label>
                    <Input placeholder="Pérez" className="border-border/50 bg-background/50" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Correo Electrónico
                  </label>
                  <Input 
                    type="email" 
                    placeholder="juan.perez@empresa.com" 
                    className="border-border/50 bg-background/50" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Empresa
                  </label>
                  <Input placeholder="Nombre de tu Empresa" className="border-border/50 bg-background/50" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    rows={5}
                    className="border-border/50 bg-background/50 resize-none"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Enviar Mensaje
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Company Information */}
          <div className="space-y-8">
            <Card className="shadow-card bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-accent" />
                  Nuestra Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Visita nuestra sede central para consultas y reuniones presenciales.
                </p>
                <div className="space-y-2 text-foreground">
                  <p className="font-semibold">Sede Central Barplas</p>
                  <p>123 Avenida Distrito Empresarial</p>
                  <p>Suite 500, Torre Tech</p>
                  <p>Nueva York, NY 10001</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  Únete a Nuestro Equipo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90 mb-4">
                  Siempre estamos buscando personas talentosas para unirse a nuestro equipo en crecimiento.
                </p>
                <Button variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Ver Posiciones Abiertas
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Horarios de Atención</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunes - Viernes:</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado:</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo:</span>
                    <span className="text-foreground">Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};