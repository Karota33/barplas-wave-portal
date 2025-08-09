import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Target, Users2, ArrowRight } from "lucide-react";

const stats = [
  { icon: Users2, value: "500+", label: "Clientes Activos" },
  { icon: Clock, value: "99.9%", label: "Tiempo Activo" },
  { icon: Target, value: "15+", label: "Años de Experiencia" },
  { icon: Award, value: "50+", label: "Premios de la Industria" }
];

export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary mb-6">
              <Target className="w-4 h-4" />
              Acerca de Barplas
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Empoderando Empresas con{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Innovación
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Durante más de 15 años, Barplas ha estado a la vanguardia de las soluciones tecnológicas empresariales, 
              ayudando a las empresas a transformar sus operaciones a través de soluciones de portal innovadoras y 
              plataformas empresariales integradas.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nuestras soluciones de portal integrales están diseñadas para optimizar flujos de trabajo, mejorar 
              la colaboración y proporcionar las insights necesarias para tomar decisiones empresariales informadas. 
              Nos enorgullecemos de ofrecer soluciones confiables, seguras y escalables que crecen 
              con tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="professional" size="lg">
                Conoce Más Sobre Nosotros
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Casos de Estudio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-primary-foreground/80">Años de Excelencia</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-accent text-accent-foreground shadow-elegant hover:shadow-glow transition-smooth mt-8">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-accent-foreground/80">Soporte Disponible</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth -mt-8">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">ISO</div>
                  <div className="text-muted-foreground">Calidad Certificada</div>
                </CardContent>
              </Card>
              
              <Card className="bg-muted shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                  <div className="text-muted-foreground">Satisfacción del Cliente</div>
                </CardContent>
              </Card>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};