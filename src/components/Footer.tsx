
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                WebDev & AI Solutions
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative web development and intelligent automation solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@webdevai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-16 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 WebDev & AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
