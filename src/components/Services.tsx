
import { Code, Brain, Rocket, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Bespoke web applications built with modern technologies, optimized for performance and user experience.",
      features: ["React & Next.js", "Full-stack solutions", "Mobile-first design", "Performance optimization"]
    },
    {
      icon: Brain,
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline workflows and boost productivity across your organization.",
      features: ["Process automation", "AI chatbots", "Data analysis", "Machine learning"]
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Complete digital overhaul services to modernize your business operations and customer interactions.",
      features: ["Strategy consulting", "System integration", "Cloud migration", "Digital workflows"]
    },
    {
      icon: Shield,
      title: "Enterprise Solutions",
      description: "Scalable, secure solutions designed for enterprise-level requirements and compliance standards.",
      features: ["Security-first approach", "Scalable architecture", "24/7 support", "Compliance ready"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive solutions that transform how you do business, 
            combining cutting-edge technology with strategic thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
