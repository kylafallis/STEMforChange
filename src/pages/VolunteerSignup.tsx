import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Users, Heart, Clock, Award, CheckCircle } from "lucide-react";

const expertiseOptions = [
  "Biology / Life Sciences",
  "Chemistry",
  "Physics",
  "Engineering",
  "Computer Science",
  "Environmental Science",
  "Mathematics",
  "Medicine / Health Sciences",
  "Social Sciences",
  "Earth Science",
];

const availabilityOptions = [
  "Weekday mornings",
  "Weekday afternoons",
  "Weekday evenings",
  "Weekend mornings",
  "Weekend afternoons",
];

const roleOptions = [
  { id: "mentor", label: "Research Mentor", description: "Guide students through their research projects" },
  { id: "judge", label: "Science Fair Judge", description: "Evaluate projects at local or regional fairs" },
  { id: "coordinator", label: "Event Coordinator", description: "Help organize science fair events" },
  { id: "teacher", label: "Teacher Support", description: "Assist teachers in setting up school programs" },
];

const VolunteerSignup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    expertise: [] as string[],
    availability: [] as string[],
    roles: [] as string[],
    experience: "",
    motivation: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (field: "expertise" | "availability" | "roles", value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for volunteering. We'll be in touch soon.",
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
              Become a
              <br />
              <span className="text-primary">Volunteer</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Share your expertise and passion for science. Help inspire the next 
              generation of researchers, innovators, and problem solvers.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4">
              <Users className="w-10 h-10 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Active Volunteers</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <Heart className="w-10 h-10 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">10,000+</p>
                <p className="text-sm text-muted-foreground">Students Helped</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <Clock className="w-10 h-10 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">5,000+</p>
                <p className="text-sm text-muted-foreground">Volunteer Hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <Award className="w-10 h-10 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">48</p>
                <p className="text-sm text-muted-foreground">States Reached</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Personal Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
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
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Volunteer Roles */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Volunteer Roles</h2>
                  <p className="text-muted-foreground mb-4">Select the roles you're interested in:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {roleOptions.map((role) => (
                      <div
                        key={role.id}
                        className={`p-4 border cursor-pointer transition-all ${
                          formData.roles.includes(role.id)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => handleCheckboxChange("roles", role.id)}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox
                            checked={formData.roles.includes(role.id)}
                            onCheckedChange={() => handleCheckboxChange("roles", role.id)}
                          />
                          <div>
                            <p className="font-medium text-foreground">{role.label}</p>
                            <p className="text-sm text-muted-foreground">{role.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Areas of Expertise */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Areas of Expertise</h2>
                  <div className="flex flex-wrap gap-3">
                    {expertiseOptions.map((expertise) => (
                      <button
                        key={expertise}
                        type="button"
                        onClick={() => handleCheckboxChange("expertise", expertise)}
                        className={`px-4 py-2 text-sm font-medium transition-all ${
                          formData.expertise.includes(expertise)
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {expertise}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Availability</h2>
                  <div className="flex flex-wrap gap-3">
                    {availabilityOptions.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleCheckboxChange("availability", time)}
                        className={`px-4 py-2 text-sm font-medium transition-all ${
                          formData.availability.includes(time)
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Additional Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="experience">Relevant Experience</Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="Tell us about your background and experience..."
                        className="mt-1 min-h-[100px]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="motivation">Why do you want to volunteer?</Label>
                      <Textarea
                        id="motivation"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        placeholder="What motivates you to help students with science fairs?"
                        className="mt-1 min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Submit Application
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-card-foreground">Why Volunteer?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Make a direct impact on students' STEM journeys</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Flexible time commitment that works for you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Connect with a community of STEM professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Receive training and ongoing support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Recognition for your contributions</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-2 text-foreground">Have Questions?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact our volunteer coordinator at volunteer@stemforchange.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VolunteerSignup;