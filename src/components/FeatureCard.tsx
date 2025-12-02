import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="group p-8 bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
