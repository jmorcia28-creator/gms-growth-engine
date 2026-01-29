import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container-wide relative z-10 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-secondary font-medium text-sm md:text-base uppercase tracking-widest mb-6 animate-fade-in-up">
            Small Business Consulting
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Helping Small Businesses Grow Smarter—
            <span className="text-secondary">and More Profitably</span>
          </h1>

          {/* Subheadline */}
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            GMS Advisors is a boutique small business consulting firm that helps founders improve profitability, optimize operations, and scale with confidence.
          </p>

          {/* Stat */}
          <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-primary-foreground/90 text-base md:text-lg">
              Our clients see an average{' '}
              <span className="text-secondary font-semibold text-xl md:text-2xl">42% increase</span>{' '}
              in gross profit within their first year working with us.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero-primary" size="xl">
              Work With Us
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button variant="hero-secondary" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
