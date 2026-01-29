import { TrendingUp, Calculator, Settings, Rocket, Handshake, HeadphonesIcon } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Profitability & Pricing Strategy',
      description: 'Optimize your pricing and margins for sustainable growth.',
    },
    {
      icon: Calculator,
      title: 'Financial Modeling & Forecasting',
      description: 'Data-driven projections and unit economics analysis.',
    },
    {
      icon: Settings,
      title: 'Operational Efficiency',
      description: 'Streamline operations and reduce unnecessary costs.',
    },
    {
      icon: Rocket,
      title: 'Growth & Scaling Strategy',
      description: 'Build a roadmap for sustainable expansion.',
    },
    {
      icon: Handshake,
      title: 'M&A Evaluation & Support',
      description: 'Strategic guidance for acquisitions and partnerships.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Founder-Level Advisory',
      description: 'Ongoing support tailored to your unique challenges.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="section-heading text-foreground mb-6">
            What <span className="text-secondary">We Do</span>
          </h2>
          <p className="section-subheading mx-auto">
            We help founders make better decisions, improve margins, and build sustainable businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-xl mx-auto">
          Everything we do is data-driven, practical, and customized to your business.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
