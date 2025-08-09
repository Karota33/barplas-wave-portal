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
    title: "Phone Support",
    description: "Speak directly with our expert team",
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri, 9AM-6PM EST"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed assistance via email",
    contact: "support@barplas.com",
    availability: "24/7 Response"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant chat support available",
    contact: "Available on portal",
    availability: "Mon-Fri, 8AM-8PM EST"
  }
];

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary mb-6">
            <Headphones className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Business?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact our team today to learn how Barplas Portal can streamline 
            your operations and accelerate your growth.
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
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" className="border-border/50 bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="border-border/50 bg-background/50" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@company.com" 
                    className="border-border/50 bg-background/50" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Company
                  </label>
                  <Input placeholder="Your Company Name" className="border-border/50 bg-background/50" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project and how we can help..."
                    rows={5}
                    className="border-border/50 bg-background/50 resize-none"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
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
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Visit our headquarters for in-person consultations and meetings.
                </p>
                <div className="space-y-2 text-foreground">
                  <p className="font-semibold">Barplas Corporate Headquarters</p>
                  <p>123 Business District Avenue</p>
                  <p>Suite 500, Tech Tower</p>
                  <p>New York, NY 10001</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  Join Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90 mb-4">
                  We're always looking for talented individuals to join our growing team.
                </p>
                <Button variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  View Open Positions
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="text-foreground">Closed</span>
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