
import { CheckCircle, Zap, Users, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance with cutting-edge technologies."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned professionals with deep expertise in modern development."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Scalable solutions built for worldwide accessibility and compliance."
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Us for Your 
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {" "}Digital Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We combine technical excellence with strategic insight to deliver solutions 
              that not only meet your current needs but scale with your future growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">100% Custom Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">Agile Development Process</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">Ongoing Support & Maintenance</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group p-6 rounded-2xl bg-card border hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
