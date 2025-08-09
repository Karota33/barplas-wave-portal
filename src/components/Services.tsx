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
    title: "Business Analytics",
    description: "Comprehensive reporting and analytics to drive data-driven decisions for your business growth.",
    features: ["Real-time dashboards", "Custom reports", "Predictive analytics"]
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Streamlined document workflows with secure storage, version control, and collaboration tools.",
    features: ["Version control", "Digital signatures", "Automated workflows"]
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enhanced team productivity with integrated communication and project management tools.",
    features: ["Team messaging", "Project tracking", "Resource planning"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security measures ensuring your business data remains protected and compliant.",
    features: ["Data encryption", "Audit trails", "Compliance reporting"]
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamless integration with existing systems and third-party applications for unified operations.",
    features: ["API connectivity", "Data synchronization", "Legacy system support"]
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Access your business portal from anywhere with our cloud-based infrastructure and mobile support.",
    features: ["Cloud hosting", "Mobile apps", "Offline capabilities"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm text-accent mb-6">
            <TrendingUp className="w-4 h-4" />
            Our Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Business{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our suite of integrated business tools designed to streamline 
            operations and accelerate your company's growth.
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
                    Learn More
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