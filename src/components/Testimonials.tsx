
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "The AI automation solution transformed our customer service. Response times improved by 80% and customer satisfaction reached an all-time high.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, Global Dynamics",
      content: "Their web development expertise is unmatched. The platform they built handles millions of users seamlessly and continues to exceed our expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, InnovateCorp",
      content: "Working with this team was a game-changer. They didn't just build what we asked for – they improved our entire digital strategy.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our 
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {" "}Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
