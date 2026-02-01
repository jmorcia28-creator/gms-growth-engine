import { TrendingUp, Award, Users, MessageCircle, HandHeart, Briefcase, Gem } from 'lucide-react';

const WhyUsSection = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Clients see an average 42% increase in gross profit in year one.',
      stat: '42%',
      statLabel: 'Average Profit Increase',
    },
    {
      icon: Award,
      title: 'Institutional Rigor, Small Business Focus',
      description: 'Big-firm thinking applied to founder-led companies.',
    },
    {
      icon: Briefcase,
      title: 'Founder-to-Founder Perspective',
      description: "We've built and run businesses ourselves.",
    },
    {
      icon: MessageCircle,
      title: 'Hands-On Engagement',
      description: 'Direct access to senior advisors—no junior teams, no generic playbooks.',
    },
    {
      icon: HandHeart,
      title: 'You\'re Not Alone',
      description: 'Helping individuals navigate financial pressure with confidence and direction.',
    },
    {
      icon: Gem,
      title: 'Proven Student Outcomes',
      description: 'Our students have secured offers at the world\'s leading investments banks.',
      stat:' ',
      statLabel: 'Evercore, Centerview, Houlihan Lokey, Piper Jaffrays, and Bank of America',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-heading text-foreground mb-4">
            Why <span className="text-secondary">GMS Advisors</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border transition-all duration-300 ${
                index === 0 || index===5
                  ? 'bg-primary text-primary-foreground border-primary col-span-1 md:col-span-2 lg:col-span-1'
                  : 'bg-card border-border hover:border-secondary/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    index === 0 || index===5 ? 'bg-secondary/20' : 'bg-secondary/10'
                  }`}
                >
                  <reason.icon className={`w-6 h-6 ${index === 0 || index===5 ? 'text-secondary' : 'text-secondary'}`} />
                </div>
                <div>
                  <h3 className={`font-serif text-xl font-semibold mb-2 ${index === 0 || index===5 ? '' : 'text-foreground'}`}>
                    {reason.title}
                  </h3>
                  <p className={`${index === 0 || index===5 ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {reason.description}
                  </p>
                  {reason.stat && (
                    <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                      <span className="stat-number">{reason.stat}</span>
                      <p className="text-sm text-secondary mt-1">{reason.statLabel}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
