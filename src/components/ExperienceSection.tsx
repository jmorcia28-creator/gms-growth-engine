import { Building, Lightbulb } from 'lucide-react';

const ExperienceSection = () => {
  const institutions = [
    'Evercore',
    'Goldman Sachs',
    'Morgan Stanley',
    'Bank of America Merrill Lynch',
    'Credit Suisse',
    'MetLife',
    'Clinton Group (hedge fund)',
    'Papyrus Capital',
  ];

  const industries = [
    'Academia and education',
    'Performing arts',
    'Tutoring and test preparation',
    'Technology-enabled services',
    'Professional services and finance',
    'Other founder-led small businesses',
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-muted/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-heading text-foreground mb-4">
            Our <span className="text-secondary">Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Institutional Background */}
          <div className="card-elevated p-8 md:p-10 hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <Building className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Institutional Background
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Our team's experience includes work with and at leading financial institutions:
            </p>
            
            <ul className="space-y-3">
              {institutions.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
              This background shapes how we approach strategy, valuation, capital allocation, and decision-making.
            </p>
          </div>

          {/* Small Business Experience */}
          <div className="card-elevated p-8 md:p-10 hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Small Business & Industry
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              We have founded and advised businesses across industries including:
            </p>
            
            <ul className="space-y-3">
              {industries.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
              This breadth allows us to adapt proven frameworks to the realities of different operating models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
