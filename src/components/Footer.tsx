import { Link } from "react-router-dom";
import { Beaker, Mail, Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground flex items-center justify-center">
                <Beaker className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold">STEMforChange</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-md">
              Empowering every student to explore, discover, and innovate through 
              accessible science fair resources. No matter where you are, science 
              should be within reach.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/setup-guide" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Setup Guide</Link></li>
              <li><Link to="/state-resources" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">State Resources</Link></li>
              <li><Link to="/research-guide" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Research Guide</Link></li>
              <li><a href="https://www.societyforscience.org" target="_blank" rel="noopener" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Society for Science</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Partner With Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Donate</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 STEMforChange. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
