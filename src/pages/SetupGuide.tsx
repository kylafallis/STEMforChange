import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, CheckCircle2, Clock, Users, FileText, Award, Calendar, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SetupGuide = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "Planning Phase",
      timeline: "6-8 months before",
      icon: Calendar,
      steps: [
        {
          title: "Form a Science Fair Committee",
          description: "Recruit teachers, administrators, parent volunteers, and community members to help organize the event.",
          checklist: [
            "Identify a lead coordinator",
            "Recruit 5-10 committee members",
            "Assign roles: logistics, judging, registration, prizes",
            "Set up regular meeting schedule"
          ]
        },
        {
          title: "Set Goals and Scope",
          description: "Determine the size, grade levels, and categories for your science fair.",
          checklist: [
            "Define participating grade levels",
            "Decide on individual vs. team projects",
            "Choose science categories to include",
            "Set maximum project capacity"
          ]
        },
        {
          title: "Secure Venue and Date",
          description: "Book a location with enough space for displays, judging, and visitors.",
          checklist: [
            "Calculate space needed (8-10 sq ft per project)",
            "Reserve gymnasium, cafeteria, or auditorium",
            "Choose date avoiding conflicts",
            "Plan for setup and breakdown time"
          ]
        },
        {
          title: "Create Budget",
          description: "Outline costs for materials, prizes, refreshments, and promotion.",
          checklist: [
            "Display materials and boards",
            "Prizes and certificates",
            "Refreshments for judges",
            "Printing and promotional materials"
          ]
        }
      ]
    },
    {
      title: "Preparation Phase",
      timeline: "3-5 months before",
      icon: FileText,
      steps: [
        {
          title: "Develop Registration Process",
          description: "Create forms and systems for students to register their projects.",
          checklist: [
            "Design registration forms",
            "Set up online submission system",
            "Create project proposal templates",
            "Establish registration deadline"
          ]
        },
        {
          title: "Recruit and Train Judges",
          description: "Find qualified judges from local businesses, universities, and STEM professionals.",
          checklist: [
            "Contact local universities and businesses",
            "Aim for 1 judge per 5-7 projects",
            "Create judging rubrics",
            "Schedule judge training session"
          ]
        },
        {
          title: "Support Student Projects",
          description: "Provide resources and guidance to help students develop strong projects.",
          checklist: [
            "Host project idea workshops",
            "Share scientific method guides",
            "Connect students with mentors",
            "Schedule checkpoint meetings"
          ]
        },
        {
          title: "Arrange Prizes and Recognition",
          description: "Secure awards, certificates, and prizes for participants.",
          checklist: [
            "Contact local sponsors for prizes",
            "Order participation certificates",
            "Plan category awards",
            "Consider special recognition awards"
          ]
        }
      ]
    },
    {
      title: "Execution Phase",
      timeline: "1-2 weeks before",
      icon: Users,
      steps: [
        {
          title: "Finalize Logistics",
          description: "Confirm all arrangements and prepare materials.",
          checklist: [
            "Confirm venue and equipment",
            "Print judging forms and scoresheets",
            "Create display number assignments",
            "Prepare volunteer schedules"
          ]
        },
        {
          title: "Setup and Event Day",
          description: "Organize the space and run a smooth event.",
          checklist: [
            "Arrange tables and display areas",
            "Set up registration/check-in area",
            "Manage judging rounds",
            "Coordinate award ceremony"
          ]
        },
        {
          title: "Post-Event Activities",
          description: "Follow up after the fair to celebrate success and improve for next year.",
          checklist: [
            "Send thank you notes",
            "Gather feedback from participants",
            "Document lessons learned",
            "Publicize winners and highlights"
          ]
        }
      ]
    }
  ];

  const resources = [
    {
      title: "Project Registration Form Template",
      type: "Template",
      description: "Customizable form for student project registration"
    },
    {
      title: "Judging Rubric & Scoresheet",
      type: "Guide",
      description: "Standardized criteria for fair evaluation"
    },
    {
      title: "Scientific Method Poster",
      type: "Printable",
      description: "Visual guide for students on the research process"
    },
    {
      title: "Sponsor Outreach Letter",
      type: "Template",
      description: "Sample letter for requesting prize donations"
    },
    {
      title: "Display Board Guidelines",
      type: "Guide",
      description: "Rules and tips for creating effective presentations"
    },
    {
      title: "Timeline Planning Spreadsheet",
      type: "Tool",
      description: "Customizable planning calendar template"
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
              Science Fair
              <br />
              <span className="text-primary">Setup Guide</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive, step-by-step guide to organizing a successful science fair 
              at your school. From initial planning to awards ceremony—we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Navigation */}
      <section className="py-12 border-b border-border sticky top-16 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {phases.map((phase, index) => (
              <button
                key={phase.title}
                onClick={() => setActivePhase(index)}
                className={`flex items-center gap-3 px-6 py-3 transition-all ${
                  activePhase === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <phase.icon className="w-5 h-5" />
                <span className="font-medium">{phase.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Phase Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="w-6 h-6 text-accent-foreground" />
              <span className="text-lg font-medium text-accent-foreground">{phases[activePhase].timeline}</span>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {phases[activePhase].steps.map((step, index) => (
                <AccordionItem key={step.title} value={`step-${index}`} className="border border-border bg-card">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-card-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="ml-14 pt-4 border-t border-border">
                      <h4 className="font-medium mb-4 text-foreground">Checklist:</h4>
                      <ul className="space-y-3">
                        {step.checklist.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Downloadable Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Free templates, guides, and tools to help you organize your science fair
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((resource) => (
              <div key={resource.title} className="bg-card border border-border p-6 hover:shadow-lg transition-shadow group">
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                  {resource.type}
                </span>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Download <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Need More Help?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our team is here to support you. Reach out for personalized guidance 
            or to request additional resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/state-resources">Find State Resources</Link>
            </Button>
            <Button size="lg" variant="outline">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SetupGuide;
