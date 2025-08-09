import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Target, Users2, ArrowRight } from "lucide-react";

const stats = [
  { icon: Users2, value: "500+", label: "Active Clients" },
  { icon: Clock, value: "99.9%", label: "Uptime" },
  { icon: Target, value: "15+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Industry Awards" }
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
              About Barplas
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Empowering Businesses with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over 15 years, Barplas has been at the forefront of business technology solutions, 
              helping companies transform their operations through innovative portal solutions and 
              integrated business platforms.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive portal solutions are designed to streamline workflows, enhance 
              collaboration, and provide the insights needed to make informed business decisions. 
              We pride ourselves on delivering reliable, secure, and scalable solutions that grow 
              with your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="professional" size="lg">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
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
                  <div className="text-primary-foreground/80">Years of Excellence</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-accent text-accent-foreground shadow-elegant hover:shadow-glow transition-smooth mt-8">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-accent-foreground/80">Support Available</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border shadow-card hover:shadow-elegant transition-smooth -mt-8">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">ISO</div>
                  <div className="text-muted-foreground">Certified Quality</div>
                </CardContent>
              </Card>
              
              <Card className="bg-muted shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
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