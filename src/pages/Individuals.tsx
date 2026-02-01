import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Heart, Shield, TrendingUp, Target, CheckCircle, Users, Compass, Handshake } from 'lucide-react';

const Individuals = () => {
  const howWeHelp = [
    { icon: Compass, title: 'Financial clarity and assessment' },
    { icon: TrendingUp, title: 'Budgeting and cash flow guidance' },
    { icon: Shield, title: 'Support navigating debt and financial pressure' },
    { icon: Target, title: 'Goal setting for short- and long-term stability' },
    { icon: Heart, title: 'Practical, judgment-free advice' },
  ];

  const approach = [
    'No shame',
    'No unrealistic promises',
    'No one-size-fits-all solutions',
  ];

  const whoIsFor = [
    'Individuals experiencing financial stress',
    'People seeking guidance and direction',
    'Those who want to regain control of their finances',
    'Anyone looking for clarity and support',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
              <Heart size={20} />
              <span className="text-sm font-medium">For Individuals</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
              You Don't Have to Face Financial Struggles{' '}
              <span className="text-secondary">Alone</span>
            </h1>
            
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Practical financial guidance designed to help individuals regain stability, clarity, and confidence.
            </p>
            
            <Button variant="hero-primary" size="xl">
              Get Financial Guidance
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading text-foreground mb-6">Our Mission for Individuals</h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At GMS Advisors, we believe everyone deserves access to clear, honest financial guidance—especially during challenging times.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to help individuals understand their financial situation, explore realistic options, and move toward a more stable future.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-heading text-foreground mb-4">How We Help</h2>
            <p className="section-subheading mx-auto">
              Practical support tailored to your unique situation.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {howWeHelp.map((item, index) => (
              <Card key={index} className="card-elevated hover-lift border-0">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-medium text-foreground mt-2">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-foreground mb-6">Our Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We take a human-first approach. That means:
              </p>
              
              <div className="space-y-4 mb-8">
                {approach.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Instead, we focus on understanding your situation and identifying steps that actually make sense for you.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-10">
                <Handshake className="text-secondary mb-6" size={48} />
                <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-4">
                  A Partnership, Not a Lecture
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  We're here to walk alongside you, providing the guidance and support you need to navigate your financial journey with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading text-foreground mb-4">Who This Is For</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {whoIsFor.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-card rounded-xl p-5 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="text-secondary" size={14} />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Take the First Step Toward{' '}
            <span className="text-secondary">Financial Stability</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
            You don't have to figure it out alone. Let's start the conversation.
          </p>
          <Button variant="hero-primary" size="xl">
            Schedule a Consultation
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Individuals;
