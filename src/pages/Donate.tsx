import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, BookOpen, Award, Check } from "lucide-react";

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const impactLevels = [
  { amount: 25, title: "Starter Kit Sponsor", description: "Provides basic materials for one student's science fair project", icon: BookOpen },
  { amount: 50, title: "Research Guide", description: "Funds comprehensive research guides for 5 students", icon: BookOpen },
  { amount: 100, title: "School Partner", description: "Supports one school's science fair program for a month", icon: Users },
  { amount: 250, title: "Regional Champion", description: "Sponsors transportation for students to regional fairs", icon: Award },
  { amount: 500, title: "State Advocate", description: "Funds workshops and training for 10 teachers", icon: Users },
  { amount: 1000, title: "STEM Ambassador", description: "Establishes a complete science fair program at one school", icon: Heart },
];

const Donate = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const getDisplayAmount = () => {
    if (customAmount) return parseInt(customAmount) || 0;
    return selectedAmount || 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your donation!",
      description: `Your ${isMonthly ? "monthly" : "one-time"} gift of $${getDisplayAmount()} will help students discover their potential.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Support
              <br />
              <span className="text-primary">Science Education</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your donation helps bring science fair opportunities to students in underserved 
              communities. Every dollar makes a difference in a young scientist's journey.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <div className="bg-card border border-border p-8">
                <h2 className="text-2xl font-bold mb-6 text-card-foreground">Make a Donation</h2>

                {/* Frequency Toggle */}
                <div className="flex mb-8">
                  <button
                    type="button"
                    onClick={() => setIsMonthly(false)}
                    className={`flex-1 py-3 text-center font-medium transition-all ${
                      !isMonthly
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMonthly(true)}
                    className={`flex-1 py-3 text-center font-medium transition-all ${
                      isMonthly
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <Label className="mb-3 block">Select Amount</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-4 text-center font-bold transition-all ${
                          selectedAmount === amount
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                    <Input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="pl-8"
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full" disabled={!getDisplayAmount()}>
                      Donate ${getDisplayAmount()}{isMonthly ? "/month" : ""}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      STEMforChange is a 501(c)(3) nonprofit. Your donation is tax-deductible.
                    </p>
                  </div>
                </form>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 flex items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Tax Deductible</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Instant Receipt</span>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Your Impact</h2>
              <div className="space-y-4">
                {impactLevels.map((level) => {
                  const Icon = level.icon;
                  const isActive = getDisplayAmount() >= level.amount;
                  return (
                    <div
                      key={level.amount}
                      className={`p-4 border transition-all ${
                        isActive ? "border-primary bg-primary/5" : "border-border"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 flex items-center justify-center ${
                          isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-foreground">{level.title}</h3>
                            <span className={`text-sm font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                              ${level.amount}+
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{level.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="mt-8 p-6 bg-secondary">
                <h3 className="font-semibold mb-4 text-foreground">Where Your Money Goes</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Student Programs</span>
                    <span className="font-medium text-foreground">75%</span>
                  </div>
                  <div className="w-full bg-muted h-2">
                    <div className="bg-primary h-2" style={{ width: "75%" }} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Teacher Training</span>
                    <span className="font-medium text-foreground">15%</span>
                  </div>
                  <div className="w-full bg-muted h-2">
                    <div className="bg-primary h-2" style={{ width: "15%" }} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Operations</span>
                    <span className="font-medium text-foreground">10%</span>
                  </div>
                  <div className="w-full bg-muted h-2">
                    <div className="bg-primary h-2" style={{ width: "10%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl text-primary-foreground/90 italic mb-6">
              "Thanks to STEMforChange, I was able to participate in my first science fair. 
              That experience sparked my passion for research and now I'm pursuing a degree 
              in biomedical engineering."
            </p>
            <p className="text-primary-foreground font-semibold">— Maria S., Former Student</p>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Other Ways to Support</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border border-border text-center">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Corporate Matching</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Double your impact through your employer's matching gift program.
              </p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
            <div className="p-6 border border-border text-center">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Planned Giving</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Include STEMforChange in your will or estate planning.
              </p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
            <div className="p-6 border border-border text-center">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Stock Donations</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Donate appreciated securities for additional tax benefits.
              </p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
