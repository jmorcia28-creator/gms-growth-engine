import { Brain, BarChart3, Zap, Target } from 'lucide-react';

const AISection = () => {
  const features = [
    { icon: Brain, label: 'AI-Assisted Workflows' },
    { icon: BarChart3, label: 'Advanced Analytics' },
    { icon: Zap, label: 'Real-Time Insights' },
    { icon: Target, label: 'Precision Forecasting' },
  ];

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-6">
              AI, Analytics & <span className="text-secondary">Modern Consulting</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              We leverage modern analytics, AI-assisted workflows, and structured financial modeling to help founders move faster and make better decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <span className="text-sm font-medium text-center">{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg font-medium text-secondary">
              This isn't "AI for buzz."
            </p>
            <p className="text-primary-foreground/80">
              It's AI and analytics applied to pricing, forecasting, operations, and strategic planning—where it actually matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
