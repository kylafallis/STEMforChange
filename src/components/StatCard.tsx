interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

export const StatCard = ({ number, label, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="text-center p-6 animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{number}</div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};
