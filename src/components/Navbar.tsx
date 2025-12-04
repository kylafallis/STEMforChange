import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Beaker, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const resourceLinks = [
  { name: "Setup Guide", path: "/setup-guide", description: "Start a science fair at your school" },
  { name: "State Resources", path: "/state-resources", description: "Find opportunities in your state" },
  { name: "Research Guide", path: "/research-guide", description: "Begin your research project" },
];

const involvedLinks = [
  { name: "Volunteer", path: "/volunteer", description: "Become a mentor" },
  { name: "Donate", path: "/donate", description: "Support our mission" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isResourceActive = resourceLinks.some(link => location.pathname === link.path);
  const isInvolvedActive = involvedLinks.some(link => location.pathname === link.path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <Beaker className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground whitespace-nowrap">
              STEM<span className="text-accent-foreground">forChange</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-secondary whitespace-nowrap ${
                location.pathname === "/"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-secondary flex items-center gap-1 whitespace-nowrap ${
                    isResourceActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  Resources
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 bg-background border border-border z-50">
                {resourceLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={`flex flex-col items-start px-4 py-3 cursor-pointer ${
                        location.pathname === link.path ? "bg-secondary" : ""
                      }`}
                    >
                      <span className="font-medium">{link.name}</span>
                      <span className="text-xs text-muted-foreground">{link.description}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Get Involved Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-secondary flex items-center gap-1 whitespace-nowrap ${
                    isInvolvedActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  Get Involved
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-background border border-border z-50">
                {involvedLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={`flex flex-col items-start px-4 py-3 cursor-pointer ${
                        location.pathname === link.path ? "bg-secondary" : ""
                      }`}
                    >
                      <span className="font-medium">{link.name}</span>
                      <span className="text-xs text-muted-foreground">{link.description}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="ml-4">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-up">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-sm font-medium transition-all ${
                location.pathname === "/"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              Home
            </Link>
            
            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Resources
            </div>
            {resourceLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-3 text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="px-4 py-2 mt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Get Involved
            </div>
            {involvedLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-3 text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="px-4 pt-4">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
