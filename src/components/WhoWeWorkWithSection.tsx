import { Check } from 'lucide-react';

const WhoWeWorkWithSection = () => {
  const clients = [
    'Small business owners and founders',
    'Early-stage and growing companies',
    'Service-based and product-based businesses',
    'Entrepreneurs seeking clarity, structure, and measurable financial improvement',
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="section-heading text-foreground mb-6">
            Who We <span className="text-secondary">Work With</span>
          </h2>
          <p className="section-subheading mx-auto">
            We partner with:
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <ul className="space-y-4">
            {clients.map((client, index) => (
              <li key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-foreground text-lg">{client}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-lg font-medium text-foreground max-w-xl mx-auto">
          If you care about <span className="text-secondary">profitability, not just revenue</span>, we're aligned.
        </p>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;
