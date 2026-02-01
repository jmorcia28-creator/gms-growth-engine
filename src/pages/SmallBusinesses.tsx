import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Building2, TrendingUp, BarChart3, Target, CheckCircle, Briefcase, PieChart, Wallet, Users, Lightbulb, Handshake, MessageSquare } from 'lucide-react';

const SmallBusinesses = () => {
  const businessAdvisory = [
    { icon: Target, title: 'Strategic planning' },
    { icon: TrendingUp, title: 'Operational improvements' },
    { icon: BarChart3, title: 'Performance analysis' },
    { icon: Lightbulb, title: 'Growth and expansion planning' },
  ];

  const financialServices = [
    { icon: PieChart, title: 'Financial analysis and reporting' },
    { icon: Wallet, title: 'Cash flow management' },
    { icon: TrendingUp, title: 'Profitability improvement' },
    { icon: Users, title: 'Decision support for owners' },
  ];

  const whoWeWorkWith = [
    'Small and growing businesses',
    'Founder-led companies',
    'Service-based and operating businesses',
    'Owners seeking clarity and expert support',
  ];

  const whyUs = [
    { icon: Briefcase, text: 'Practical, founder-focused advice' },
    { icon: BarChart3, text: 'Financial and operational expertise' },
    { icon: MessageSquare, text: 'Clear insights, not jargon' },
    { icon: Handshake, text: 'Long-term partnership mindset' },
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
              <Building2 size={20} />
              <span className="text-sm font-medium">For Small Businesses</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
              Helping Small Businesses Grow{' '}
              <span className="text-secondary">Smarter and Stronger</span>
            </h1>
            
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Business advisory and financial services designed to support sustainable growth and better decision-making.
            </p>
            
            <Button variant="hero-primary" size="xl">
              Talk to an Advisor
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
            <h2 className="section-heading text-foreground mb-6">Our Mission for Small Businesses</h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GMS Advisors partners with small business owners to provide clear, strategic guidance across operations, finance, and growth planning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to help businesses build strong foundations, improve financial performance, and prepare for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-heading text-foreground mb-4">Our Services</h2>
            <p className="section-subheading mx-auto">
              Comprehensive support for every aspect of your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Business Advisory */}
            <Card className="card-elevated border-0">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Briefcase className="text-secondary" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Business Advisory
                </h3>
                <div className="space-y-4">
                  {businessAdvisory.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className="text-secondary" size={20} />
                      <span className="text-muted-foreground">{item.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Financial Services */}
            <Card className="card-elevated border-0">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <PieChart className="text-secondary" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Financial Services
                </h3>
                <div className="space-y-4">
                  {financialServices.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className="text-secondary" size={20} />
                      <span className="text-muted-foreground">{item.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Work With & Why GMS */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading text-foreground mb-8">Who We Work With</h2>
              <ul className="space-y-4">
                {whoWeWorkWith.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-secondary" size={14} />
                    </div>
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary rounded-2xl p-8 md:p-10">
              <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-8">
                Why GMS Advisors
              </h3>
              <div className="space-y-5">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-secondary" size={20} />
                    </div>
                    <span className="text-primary-foreground mt-2">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="stat-number mb-2">42%</p>
              <p className="text-muted-foreground">Avg. Profit Increase</p>
            </div>
            <div>
              <p className="stat-number mb-2">100+</p>
              <p className="text-muted-foreground">Businesses Advised</p>
            </div>
            <div>
              <p className="stat-number mb-2">15+</p>
              <p className="text-muted-foreground">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Build a Stronger Business with{' '}
            <span className="text-secondary">Confidence</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
            Let's talk about where your business is today—and where it could be in a year.
          </p>
          <Button variant="hero-primary" size="xl">
            Start a Conversation
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmallBusinesses;
