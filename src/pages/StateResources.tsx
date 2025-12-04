import { useState, useMemo } from "react";
import { Search, MapPin, ExternalLink, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface StateData {
  name: string;
  abbreviation: string;
  region: string;
  fairName: string;
  website: string;
  registrationDeadline: string;
  isefAffiliated: boolean;
  highlights: string[];
}

const stateData: StateData[] = [
  { name: "Alabama", abbreviation: "AL", region: "Southeast", fairName: "Alabama State Science & Engineering Fair", website: "https://www.uah.edu/assef", registrationDeadline: "February", isefAffiliated: true, highlights: ["Strong engineering focus", "University partnerships", "Regional qualifier system"] },
  { name: "Alaska", abbreviation: "AK", region: "West", fairName: "Alaska Science & Engineering Fair", website: "https://www.asdk12.org", registrationDeadline: "March", isefAffiliated: true, highlights: ["Environmental science emphasis", "Remote school support", "Virtual judging options"] },
  { name: "Arizona", abbreviation: "AZ", region: "Southwest", fairName: "Arizona Science & Engineering Fair", website: "https://azsef.org", registrationDeadline: "January", isefAffiliated: true, highlights: ["Multiple regional fairs", "STEM industry mentorship", "Bilingual resources"] },
  { name: "Arkansas", abbreviation: "AR", region: "Southeast", fairName: "Arkansas State Science Fair", website: "https://ualr.edu/sciencefair", registrationDeadline: "February", isefAffiliated: true, highlights: ["Agricultural research focus", "Rural school outreach", "University mentorship"] },
  { name: "California", abbreviation: "CA", region: "West", fairName: "California State Science Fair", website: "https://www.cde.ca.gov/pd/ca/sc/cssf.asp", registrationDeadline: "March", isefAffiliated: true, highlights: ["Largest state fair", "Strong tech industry support", "12 affiliated regional fairs"] },
  { name: "Colorado", abbreviation: "CO", region: "West", fairName: "Colorado Science & Engineering Fair", website: "https://csef.colostate.edu", registrationDeadline: "February", isefAffiliated: true, highlights: ["Space science focus", "Rural outreach programs", "Teacher training"] },
  { name: "Connecticut", abbreviation: "CT", region: "Northeast", fairName: "Connecticut Science & Engineering Fair", website: "https://ctsciencefair.org", registrationDeadline: "January", isefAffiliated: true, highlights: ["Strong biomedical track", "Corporate sponsorships", "Research mentorship"] },
  { name: "Delaware", abbreviation: "DE", region: "Northeast", fairName: "Delaware Valley Science Fairs", website: "https://dvsf.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Pharmaceutical industry connections", "Small class sizes", "Personalized mentorship"] },
  { name: "Florida", abbreviation: "FL", region: "Southeast", fairName: "Florida State Science & Engineering Fair", website: "https://www.floridasef.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Marine science emphasis", "NASA partnerships", "17 regional fairs"] },
  { name: "Georgia", abbreviation: "GA", region: "Southeast", fairName: "Georgia Science & Engineering Fair", website: "https://www.georgiacenter.uga.edu", registrationDeadline: "February", isefAffiliated: true, highlights: ["Agriculture research track", "CDC partnerships", "Rural school support"] },
  { name: "Hawaii", abbreviation: "HI", region: "West", fairName: "Hawaii State Science & Engineering Fair", website: "https://www.sciencefairhawaii.org", registrationDeadline: "March", isefAffiliated: true, highlights: ["Environmental focus", "Marine biology emphasis", "Island school support"] },
  { name: "Idaho", abbreviation: "ID", region: "West", fairName: "Idaho Science & Engineering Fair", website: "https://www.uidaho.edu/sci/physics/outreach/isef", registrationDeadline: "March", isefAffiliated: true, highlights: ["Natural resources focus", "Agricultural science", "Rural community support"] },
  { name: "Illinois", abbreviation: "IL", region: "Midwest", fairName: "Illinois Junior Academy of Science", website: "https://www.ijas.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Strong research tradition", "University partnerships", "Chicago regional support"] },
  { name: "Indiana", abbreviation: "IN", region: "Midwest", fairName: "Hoosier Science & Engineering Fair", website: "https://www.hsef.purdue.edu", registrationDeadline: "February", isefAffiliated: true, highlights: ["Purdue partnership", "Engineering excellence", "Manufacturing focus"] },
  { name: "Iowa", abbreviation: "IA", region: "Midwest", fairName: "Iowa State Science & Technology Fair", website: "https://www.sciowa.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Agricultural innovation", "STEM education focus", "Rural school support"] },
  { name: "Kansas", abbreviation: "KS", region: "Midwest", fairName: "Kansas State Science Fair", website: "https://www.kansasstatefair.com", registrationDeadline: "February", isefAffiliated: true, highlights: ["Agricultural research", "Aviation industry ties", "University partnerships"] },
  { name: "Kentucky", abbreviation: "KY", region: "Southeast", fairName: "Kentucky Science & Engineering Fair", website: "https://ksef.murraystate.edu", registrationDeadline: "February", isefAffiliated: true, highlights: ["Energy research focus", "Healthcare partnerships", "Rural outreach"] },
  { name: "Louisiana", abbreviation: "LA", region: "Southeast", fairName: "Louisiana Science & Engineering Fair", website: "https://www.lsef.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Environmental science", "Energy industry support", "Coastal research"] },
  { name: "Maine", abbreviation: "ME", region: "Northeast", fairName: "Maine State Science Fair", website: "https://www.mssf.usm.maine.edu", registrationDeadline: "March", isefAffiliated: true, highlights: ["Marine research focus", "Environmental studies", "Small school support"] },
  { name: "Maryland", abbreviation: "MD", region: "Northeast", fairName: "Maryland Science & Engineering Fair", website: "https://www.mdsciencefair.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["NIH partnerships", "Biotech industry", "DC area resources"] },
  { name: "Massachusetts", abbreviation: "MA", region: "Northeast", fairName: "Massachusetts State Science & Engineering Fair", website: "https://scifair.com", registrationDeadline: "January", isefAffiliated: true, highlights: ["MIT/Harvard connections", "Biotech industry support", "Advanced research tracks"] },
  { name: "Michigan", abbreviation: "MI", region: "Midwest", fairName: "Science & Engineering Fair of Metro Detroit", website: "https://www.sefmd.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Automotive engineering focus", "Manufacturing partnerships", "Great Lakes research"] },
  { name: "Minnesota", abbreviation: "MN", region: "Midwest", fairName: "Minnesota Academy of Science", website: "https://www.mnacadsci.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Medical device industry", "3M partnerships", "Environmental research"] },
  { name: "Mississippi", abbreviation: "MS", region: "Southeast", fairName: "Mississippi Science & Engineering Fair", website: "https://www.mssef.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Agricultural focus", "NASA Stennis partnerships", "Rural school support"] },
  { name: "Missouri", abbreviation: "MO", region: "Midwest", fairName: "Missouri Academy of Science", website: "https://www.missouriacademyofscience.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Agricultural research", "Healthcare industry ties", "Urban and rural support"] },
  { name: "Montana", abbreviation: "MT", region: "West", fairName: "Montana Science Fair", website: "https://hs.umt.edu/mtsciencefair", registrationDeadline: "March", isefAffiliated: true, highlights: ["Environmental focus", "Wildlife research", "Rural community support"] },
  { name: "Nebraska", abbreviation: "NE", region: "Midwest", fairName: "Nebraska Junior Academy of Sciences", website: "https://www.unl.edu/njas", registrationDeadline: "February", isefAffiliated: true, highlights: ["Agricultural science", "University partnerships", "Rural outreach"] },
  { name: "Nevada", abbreviation: "NV", region: "West", fairName: "Nevada State Science Fair", website: "https://www.nvsef.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Energy research", "Mining industry ties", "Desert ecology focus"] },
  { name: "New Hampshire", abbreviation: "NH", region: "Northeast", fairName: "New Hampshire Science & Engineering Exposition", website: "https://www.nhsee.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Technology focus", "Small school support", "Industry mentorship"] },
  { name: "New Jersey", abbreviation: "NJ", region: "Northeast", fairName: "New Jersey Science Fair", website: "https://www.njsciencefair.org", registrationDeadline: "January", isefAffiliated: true, highlights: ["Pharmaceutical industry", "Strong STEM schools", "Research opportunities"] },
  { name: "New Mexico", abbreviation: "NM", region: "Southwest", fairName: "New Mexico Science & Engineering Fair", website: "https://www.nmsef.net", registrationDeadline: "February", isefAffiliated: true, highlights: ["National labs partnerships", "Space research", "Bilingual resources"] },
  { name: "New York", abbreviation: "NY", region: "Northeast", fairName: "New York State Science & Engineering Fair", website: "https://www.nysssef.org", registrationDeadline: "January", isefAffiliated: true, highlights: ["Multiple regional fairs", "NYC research opportunities", "Strong mentorship network"] },
  { name: "North Carolina", abbreviation: "NC", region: "Southeast", fairName: "North Carolina Science & Engineering Fair", website: "https://www.ncsef.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Research Triangle partnerships", "Biotechnology focus", "Rural outreach"] },
  { name: "North Dakota", abbreviation: "ND", region: "Midwest", fairName: "North Dakota State Science Fair", website: "https://www.ndsu.edu/sciencefair", registrationDeadline: "March", isefAffiliated: true, highlights: ["Agricultural research", "Energy industry focus", "Rural school support"] },
  { name: "Ohio", abbreviation: "OH", region: "Midwest", fairName: "Ohio Academy of Science", website: "https://www.ohiosci.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Strong manufacturing ties", "Medical research focus", "State university support"] },
  { name: "Oklahoma", abbreviation: "OK", region: "Southwest", fairName: "Oklahoma State Science & Engineering Fair", website: "https://www.oksef.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Energy industry focus", "Weather research", "Native American outreach"] },
  { name: "Oregon", abbreviation: "OR", region: "West", fairName: "Oregon Science & Engineering Fair", website: "https://www.oregonsef.org", registrationDeadline: "March", isefAffiliated: true, highlights: ["Environmental science", "Tech industry ties", "Sustainability focus"] },
  { name: "Pennsylvania", abbreviation: "PA", region: "Northeast", fairName: "Pennsylvania Junior Academy of Science", website: "https://www.pjas.net", registrationDeadline: "January", isefAffiliated: true, highlights: ["Long-standing tradition", "Regional competition system", "Industry partnerships"] },
  { name: "Rhode Island", abbreviation: "RI", region: "Northeast", fairName: "Rhode Island Science & Engineering Fair", website: "https://www.risef.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Marine research", "Brown University ties", "Small state advantages"] },
  { name: "South Carolina", abbreviation: "SC", region: "Southeast", fairName: "South Carolina Science Fair", website: "https://www.scstatelibrary.org/sciencefair", registrationDeadline: "February", isefAffiliated: true, highlights: ["Manufacturing focus", "Coastal research", "University partnerships"] },
  { name: "South Dakota", abbreviation: "SD", region: "Midwest", fairName: "South Dakota State Science Fair", website: "https://www.sdstatefair.com", registrationDeadline: "March", isefAffiliated: true, highlights: ["Agricultural science", "Rural community focus", "Native American outreach"] },
  { name: "Tennessee", abbreviation: "TN", region: "Southeast", fairName: "Tennessee Science & Engineering Fair", website: "https://www.tnsef.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Healthcare research", "Music industry STEM", "Oak Ridge partnerships"] },
  { name: "Texas", abbreviation: "TX", region: "Southwest", fairName: "Texas Science & Engineering Fair", website: "https://www.txsef.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Large state competition", "Energy industry focus", "Strong STEM pipeline"] },
  { name: "Utah", abbreviation: "UT", region: "West", fairName: "Utah Science & Engineering Fair", website: "https://www.usef.byu.edu", registrationDeadline: "February", isefAffiliated: true, highlights: ["Tech industry growth", "University support", "Environmental research"] },
  { name: "Vermont", abbreviation: "VT", region: "Northeast", fairName: "Vermont State Science Fair", website: "https://www.vtscifair.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Environmental focus", "Sustainable agriculture", "Small school support"] },
  { name: "Virginia", abbreviation: "VA", region: "Southeast", fairName: "Virginia State Science & Engineering Fair", website: "https://www.vssef.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Defense industry connections", "NASA Langley partnerships", "Strong computer science"] },
  { name: "Washington", abbreviation: "WA", region: "West", fairName: "Washington State Science & Engineering Fair", website: "https://www.wssef.org", registrationDeadline: "March", isefAffiliated: true, highlights: ["Tech industry support", "Microsoft/Amazon mentors", "Environmental science"] },
  { name: "West Virginia", abbreviation: "WV", region: "Southeast", fairName: "West Virginia State Science Fair", website: "https://www.wvsef.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Energy research", "Rural school support", "Appalachian outreach"] },
  { name: "Wisconsin", abbreviation: "WI", region: "Midwest", fairName: "Wisconsin Science & Engineering Fair", website: "https://www.wissciencefair.org", registrationDeadline: "February", isefAffiliated: true, highlights: ["Manufacturing ties", "Dairy/agriculture research", "University partnerships"] },
  { name: "Wyoming", abbreviation: "WY", region: "West", fairName: "Wyoming State Science Fair", website: "https://www.uwyo.edu/sciencefair", registrationDeadline: "March", isefAffiliated: true, highlights: ["Energy research focus", "Wildlife studies", "Rural school support"] },
];

const regions = ["All Regions", "Northeast", "Southeast", "Midwest", "Southwest", "West"];

const StateResources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedState, setSelectedState] = useState<StateData | null>(null);

  const filteredStates = useMemo(() => {
    return stateData.filter(state => {
      const matchesSearch = state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           state.abbreviation.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === "All Regions" || state.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              State-by-State
              <br />
              <span className="text-primary">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find science fair opportunities, registration deadlines, and resources 
              specific to your state. Every state has pathways to prestigious competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border sticky top-16 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by state name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 text-sm font-medium transition-all ${
                    selectedRegion === region
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* States Grid and Detail View */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* States List */}
            <div className="lg:col-span-1">
              <h2 className="text-lg font-semibold mb-4 text-foreground">
                {filteredStates.length} States Found
              </h2>
              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                {filteredStates.map((state) => (
                  <button
                    key={state.abbreviation}
                    onClick={() => setSelectedState(state)}
                    className={`w-full text-left p-4 border transition-all flex items-center justify-between group ${
                      selectedState?.abbreviation === state.abbreviation
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary flex items-center justify-center font-bold text-secondary-foreground">
                        {state.abbreviation}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{state.name}</h3>
                        <p className="text-sm text-muted-foreground">{state.region}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${
                      selectedState?.abbreviation === state.abbreviation ? "rotate-90" : "group-hover:translate-x-1"
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* State Detail */}
            <div className="lg:col-span-2">
              {selectedState ? (
                <div className="bg-card border border-border p-8 animate-fade-in">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="w-5 h-5 text-accent-foreground" />
                        <span className="text-sm text-accent-foreground font-medium">{selectedState.region}</span>
                        {selectedState.isefAffiliated && (
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium">
                            ISEF Affiliated
                          </span>
                        )}
                      </div>
                      <h2 className="text-3xl font-bold text-card-foreground">{selectedState.name}</h2>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">State Science Fair</h3>
                      <p className="text-lg text-muted-foreground mb-3">{selectedState.fairName}</p>
                      <a
                        href={selectedState.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        Visit Official Website <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-muted p-4">
                        <h4 className="font-medium mb-2 text-foreground">Registration Deadline</h4>
                        <p className="text-muted-foreground">Typically {selectedState.registrationDeadline}</p>
                      </div>
                      <div className="bg-muted p-4">
                        <h4 className="font-medium mb-2 text-foreground">ISEF Pathway</h4>
                        <p className="text-muted-foreground">
                          {selectedState.isefAffiliated 
                            ? "Direct pathway to Regeneron ISEF"
                            : "Check regional affiliations"}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-foreground">Key Highlights</h3>
                      <ul className="space-y-2">
                        {selectedState.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent-foreground mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h3 className="font-semibold mb-3 text-foreground">Next Steps</h3>
                      <div className="flex flex-wrap gap-3">
                        <Button>Download State Guide</Button>
                        <Button variant="outline">Find Regional Fairs</Button>
                        <Button variant="ghost">Contact State Coordinator</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-muted h-full flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-foreground mb-2">Select a State</h3>
                    <p className="text-muted-foreground">Click on a state to view detailed resources</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ISEF Info */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              The Path to Regeneron ISEF
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              The Regeneron International Science and Engineering Fair (ISEF) is the world's largest 
              pre-college science competition. Students compete for nearly $9 million in awards annually.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-primary-foreground/10 p-6">
                <h3 className="font-semibold text-primary-foreground mb-2">Local Fair</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Start at your school or district science fair to qualify for regionals
                </p>
              </div>
              <div className="bg-primary-foreground/10 p-6">
                <h3 className="font-semibold text-primary-foreground mb-2">Regional/State Fair</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Compete at ISEF-affiliated regional or state fairs
                </p>
              </div>
              <div className="bg-primary-foreground/10 p-6">
                <h3 className="font-semibold text-primary-foreground mb-2">Regeneron ISEF</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Top finalists advance to compete at the international level
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StateResources;