import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional business environment" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary mb-8 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            Soluciones Empresariales de Confianza
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Bienvenido al{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Portal Barplas
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Tu portal empresarial integral para operaciones optimizadas, 
            mayor productividad y colaboración fluida.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Comenzar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 backdrop-blur-sm bg-background/50 border-primary/30">
              <Play className="w-5 h-5 mr-2" />
              Ver Demo
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-elegant transition-smooth">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Súper Rápido</h3>
              <p className="text-muted-foreground text-sm">Rendimiento optimizado para operaciones empresariales ágiles</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-elegant transition-smooth">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Seguro y Confiable</h3>
              <p className="text-muted-foreground text-sm">Seguridad de nivel empresarial para tus datos de negocio</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-elegant transition-smooth">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Colaboración en Equipo</h3>
              <p className="text-muted-foreground text-sm">Flujos de trabajo fluidos para mayor productividad del equipo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};