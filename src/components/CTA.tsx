
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform 
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {" "}Your Business?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help you leverage the power of modern web development 
            and AI automation to achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group text-lg px-8 py-6 hover-scale">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-scale">
              Get a Free Quote
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Free consultation • No commitment required • Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
