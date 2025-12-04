import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Map, FlaskConical, Users, Target, Lightbulb, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { StatCard } from "@/components/StatCard";
import heroBg from "@/assets/hero-bg.jpg";
const Index = () => {
  const features = [{
    icon: BookOpen,
    title: "Complete Setup Guides",
    description: "Step-by-step instructions for organizing science fairs at any school, from planning to execution."
  }, {
    icon: Map,
    title: "State-by-State Resources",
    description: "Comprehensive database of science fair opportunities, requirements, and contacts for all 50 states."
  }, {
    icon: FlaskConical,
    title: "Research Project Help",
    description: "Learn how to develop winning research projects, from ideation to presentation."
  }, {
    icon: Users,
    title: "Mentor Network",
    description: "Connect with scientists, teachers, and past winners who can guide your journey."
  }, {
    icon: Target,
    title: "Competition Pathways",
    description: "Navigate the path from local fairs to Regeneron ISEF and other prestigious competitions."
  }, {
    icon: GraduationCap,
    title: "Teacher Resources",
    description: "Curriculum materials, judging guides, and training for educators supporting young scientists."
  }];
  const steps = [{
    number: "01",
    title: "Explore Resources",
    description: "Browse our comprehensive guides tailored to your needs—whether you're a student, teacher, or administrator."
  }, {
    number: "02",
    title: "Connect & Learn",
    description: "Join our community, find mentors, and access workshops designed to build your research skills."
  }, {
    number: "03",
    title: "Launch Your Project",
    description: "Use our templates, timelines, and expert advice to start your science fair journey with confidence."
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
        backgroundImage: `url(${heroBg})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent mb-6 animate-fade-up">
              <span className="text-accent-foreground font-medium text-sm">
                Empowering Future Scientists
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-up leading-tight">
              Science Fairs
              <br />
              <span className="text-primary">Without Barriers</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up max-w-2xl" style={{
            animationDelay: "100ms"
          }}>
              Every student deserves the opportunity to explore science. We provide free resources, 
              guidance, and connections to bring world-class science fair experiences to underserved communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{
            animationDelay: "200ms"
          }}>
              <Button size="lg" asChild className="group">
                <Link to="/setup-guide">
                  Start a Science Fair
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/research-guide">
                  Begin Your Research
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 flex items-start justify-center pt-2 border-accent">
            <div className="w-1 h-3 animate-bounce border-accent-foreground bg-accent-foreground" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="50" label="States Covered" delay={0} />
            <StatCard number="1000+" label="Schools Supported" delay={100} />
            <StatCard number="25K+" label="Students Reached" delay={200} />
            <StatCard number="100%" label="Free Resources" delay={300} />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Bridging the
                <br />
                <span className="text-primary">Opportunity Gap</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Many schools lack the resources, knowledge, or connections to participate in science fairs. 
                Students in underserved areas miss out on transformative experiences that could shape their futures.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                STEMforChange provides everything needed to launch and sustain science fair programs—
                from initial planning guides to competition preparation, all completely free.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-accent-foreground" />
                  <span className="font-medium">Inspire Discovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-foreground" />
                  <span className="font-medium">Celebrate Achievement</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary p-8 h-48 flex items-end">
                <span className="text-primary-foreground font-semibold text-lg">Research Skills</span>
              </div>
              <div className="bg-accent p-8 h-48 flex items-end mt-8">
                <span className="text-accent-foreground font-semibold text-lg">Critical Thinking</span>
              </div>
              <div className="bg-secondary p-8 h-48 flex items-end -mt-8">
                <span className="text-secondary-foreground font-semibold text-lg">Presentation</span>
              </div>
              <div className="bg-muted p-8 h-48 flex items-end">
                <span className="text-muted-foreground font-semibold text-lg">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive resources designed to support students, teachers, and schools 
              at every step of the science fair journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} delay={index * 100} />)}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to get started
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => <div key={step.number} className="relative">
                <div className="text-8xl font-bold text-primary/10 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground -mt-12">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && <div className="hidden md:block absolute top-12 right-0 w-16 border-t-2 border-dashed border-border translate-x-1/2" />}
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you're a student ready to start your first project, a teacher looking to 
            inspire your classroom, or a school administrator wanting to launch a program—we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/setup-guide">
                Explore Resources
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;