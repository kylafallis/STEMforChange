import { useState } from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Search, FlaskConical, FileText, Presentation, ArrowRight, CheckCircle2, BookOpen, Users, Globe, Microscope } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResearchGuide = () => {
  const steps = [
    {
      id: "ideation",
      icon: Lightbulb,
      title: "Finding Your Idea",
      description: "Discover topics that excite you and have research potential",
      content: {
        overview: "The best science fair projects start with genuine curiosity. Look for problems in your daily life, environmental issues, or questions that make you wonder 'why?'",
        tips: [
          "Keep a curiosity journal—write down questions that pop into your head",
          "Read science news and look for gaps in current research",
          "Consider problems in your community that science could solve",
          "Think about hobbies or interests that could have scientific angles",
          "Look at past winning projects for inspiration (but don't copy!)"
        ],
        resources: [
          { title: "Science News for Students", url: "https://www.sciencenewsforstudents.org" },
          { title: "Popular Science", url: "https://www.popsci.com" },
          { title: "MIT Technology Review", url: "https://www.technologyreview.com" }
        ]
      }
    },
    {
      id: "research",
      icon: Search,
      title: "Background Research",
      description: "Build a strong foundation of knowledge",
      content: {
        overview: "Before you experiment, you need to understand what's already known about your topic. This helps you form a better hypothesis and avoid repeating others' work.",
        tips: [
          "Start with Google Scholar for peer-reviewed articles",
          "Use your school or public library databases",
          "Read both recent papers and foundational research",
          "Take organized notes with proper citations",
          "Identify gaps in existing research—this is where you can contribute"
        ],
        resources: [
          { title: "Google Scholar", url: "https://scholar.google.com" },
          { title: "PubMed (Medical/Bio)", url: "https://pubmed.ncbi.nlm.nih.gov" },
          { title: "arXiv (Physics/Math/CS)", url: "https://arxiv.org" }
        ]
      }
    },
    {
      id: "experiment",
      icon: FlaskConical,
      title: "Designing Your Experiment",
      description: "Create a rigorous, testable methodology",
      content: {
        overview: "A good experiment isolates variables, uses proper controls, and can be replicated by others. Plan every detail before you begin.",
        tips: [
          "Write a clear hypothesis (If... then... because...)",
          "Identify your independent and dependent variables",
          "Design proper controls to validate your results",
          "Plan for multiple trials (minimum 3-5)",
          "Consider sample size and statistical significance",
          "Create detailed procedures others could follow"
        ],
        resources: [
          { title: "Scientific Method Guide", url: "#" },
          { title: "Statistics for Students", url: "#" },
          { title: "Lab Safety Guidelines", url: "#" }
        ]
      }
    },
    {
      id: "documentation",
      icon: FileText,
      title: "Documentation & Analysis",
      description: "Record everything and analyze your data",
      content: {
        overview: "Thorough documentation separates good science from great science. Keep detailed records and use appropriate statistical methods to analyze your results.",
        tips: [
          "Maintain a detailed lab notebook (date every entry)",
          "Photograph or video your procedures when possible",
          "Use tables and graphs to organize data",
          "Apply appropriate statistical tests",
          "Be honest about unexpected results—they're often the most interesting",
          "Document what didn't work too"
        ],
        resources: [
          { title: "Data Analysis Tools", url: "#" },
          { title: "Graphing Best Practices", url: "#" },
          { title: "Statistical Calculators", url: "#" }
        ]
      }
    },
    {
      id: "presentation",
      icon: Presentation,
      title: "Presentation & Communication",
      description: "Share your findings effectively",
      content: {
        overview: "Great research needs great communication. Your display board and oral presentation should clearly convey your process and findings to judges.",
        tips: [
          "Follow display board guidelines (usually 36\" x 48\")",
          "Use clear headings and logical flow",
          "Include visuals: graphs, photos, diagrams",
          "Practice your 5-minute presentation",
          "Prepare for judge questions (know your topic deeply)",
          "Be enthusiastic—your passion shows!"
        ],
        resources: [
          { title: "Display Board Templates", url: "#" },
          { title: "Presentation Tips Video", url: "#" },
          { title: "Common Judge Questions", url: "#" }
        ]
      }
    }
  ];

  const mentorTypes = [
    {
      icon: Microscope,
      title: "Research Scientists",
      description: "Connect with professionals at universities and research institutions",
      action: "Find Scientists"
    },
    {
      icon: BookOpen,
      title: "Teachers & Professors",
      description: "Your science teachers and local college professors can provide guidance",
      action: "Request Help"
    },
    {
      icon: Users,
      title: "Past Winners",
      description: "Learn from students who've succeeded at regional, state, and national levels",
      action: "Join Network"
    },
    {
      icon: Globe,
      title: "Online Communities",
      description: "Forums and groups where young researchers share advice and support",
      action: "Explore"
    }
  ];

  const competitionLevels = [
    {
      level: "Regional",
      description: "School and district fairs—your first competitive experience",
      awards: "Certificates, small prizes, advancement to state",
      tips: "Focus on a clear methodology and enthusiastic presentation"
    },
    {
      level: "State",
      description: "Compete against top students from your entire state",
      awards: "Scholarships, cash prizes, ISEF qualification",
      tips: "Stronger statistical analysis and deeper background research"
    },
    {
      level: "National/ISEF",
      description: "The pinnacle of pre-college science competition",
      awards: "Up to $75,000 top prize, millions in total awards",
      tips: "Novel research, publishable-quality work, expert mentorship"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Research
              <br />
              <span className="text-primary">Project Guide</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From your first "what if?" question to standing before judges at ISEF—
              this guide walks you through every step of creating a winning research project.
            </p>
          </div>
        </div>
      </section>

      {/* Research Process Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              The Research Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these five stages to develop a strong, competition-ready research project
            </p>
          </div>

          <Tabs defaultValue="ideation" className="max-w-5xl mx-auto">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-8">
              {steps.map((step) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-muted"
                >
                  <step.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{step.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {steps.map((step) => (
              <TabsContent key={step.id} value={step.id} className="animate-fade-in">
                <div className="bg-card border border-border p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {step.content.overview}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-foreground">Key Tips</h4>
                      <ul className="space-y-3">
                        {step.content.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-foreground">Helpful Resources</h4>
                      <div className="space-y-3">
                        {step.content.resources.map((resource, i) => (
                          <a
                            key={i}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-muted hover:bg-muted/80 transition-colors group"
                          >
                            <span className="font-medium text-foreground">{resource.title}</span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Finding Mentors */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Finding Mentors & Connections
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The best research projects often involve guidance from experienced scientists. 
              Here's how to find support for your work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mentorTypes.map((type) => (
              <div key={type.title} className="bg-card border border-border p-6 group hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <type.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{type.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  {type.action} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Levels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Competition Levels
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understand what's expected at each level of competition
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {competitionLevels.map((comp, index) => (
              <div key={comp.level} className="bg-card border border-border p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <div className="ml-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl font-bold text-primary/20">{index + 1}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">{comp.level}</h3>
                      <p className="text-muted-foreground">{comp.description}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Potential Awards</h4>
                      <p className="text-muted-foreground">{comp.awards}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Success Tips</h4>
                      <p className="text-muted-foreground">{comp.tips}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Start Your Research?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Download our complete research project workbook with templates, 
            checklists, and examples to guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Download Workbook
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/state-resources">Find Your State Fair</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResearchGuide;
