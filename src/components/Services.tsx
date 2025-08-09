import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  FileText, 
  Settings, 
  Users, 
  Shield, 
  Zap,
  TrendingUp,
  Database,
  Globe
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Análisis Empresarial",
    description: "Reportes integrales y análisis para impulsar decisiones basadas en datos para el crecimiento de tu negocio.",
    features: ["Dashboards en tiempo real", "Reportes personalizados", "Análisis predictivo"]
  },
  {
    icon: FileText,
    title: "Gestión de Documentos",
    description: "Flujos de trabajo de documentos optimizados con almacenamiento seguro, control de versiones y herramientas de colaboración.",
    features: ["Control de versiones", "Firmas digitales", "Flujos automatizados"]
  },
  {
    icon: Users,
    title: "Colaboración en Equipo",
    description: "Mayor productividad del equipo con comunicación integrada y herramientas de gestión de proyectos.",
    features: ["Mensajería de equipo", "Seguimiento de proyectos", "Planificación de recursos"]
  },
  {
    icon: Shield,
    title: "Seguridad y Cumplimiento",
    description: "Medidas de seguridad de nivel empresarial que garantizan que tus datos comerciales permanezcan protegidos y conformes.",
    features: ["Encriptación de datos", "Pistas de auditoría", "Reportes de cumplimiento"]
  },
  {
    icon: Database,
    title: "Integración de Datos",
    description: "Integración perfecta con sistemas existentes y aplicaciones de terceros para operaciones unificadas.",
    features: ["Conectividad API", "Sincronización de datos", "Soporte de sistemas legacy"]
  },
  {
    icon: Globe,
    title: "Acceso Global",
    description: "Accede a tu portal empresarial desde cualquier lugar con nuestra infraestructura basada en la nube y soporte móvil.",
    features: ["Alojamiento en la nube", "Apps móviles", "Capacidades offline"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm text-accent mb-6">
            <TrendingUp className="w-4 h-4" />
            Nuestras Soluciones
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluciones{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Empresariales
            </span>{" "}
            Integrales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra suite de herramientas empresariales integradas diseñadas para 
            optimizar operaciones y acelerar el crecimiento de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-smooth border-border/50 bg-card/80 backdrop-blur-sm hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="professional" className="w-full">
                    Saber Más
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};