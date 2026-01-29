import { Briefcase, TrendingUp, Building2, Users } from 'lucide-react';

const WhoWeAreSection = () => {
  const expertise = [
    {
      icon: Briefcase,
      title: 'Management Consulting & M&A Advisory',
    },
    {
      icon: TrendingUp,
      title: 'Public and Private Equity Research',
    },
    {
      icon: Building2,
      title: 'Equity and Debt Capital Raising',
    },
    {
      icon: Users,
      title: 'Strategic & Financial Analysis',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">
              Who <span className="text-secondary">We Are</span>
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4">
              We are consultants, investors, and operators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-base md:text-lg font-medium">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-primary-foreground/80 mb-6">
              In parallel, we've started, managed, and scaled multiple small businesses across a wide range of industries—giving us a rare operator-first perspective.
            </p>
            <p className="text-xl md:text-2xl font-serif text-secondary italic">
              "We don't just advise founders.
              <br />
              We think and operate like them."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
