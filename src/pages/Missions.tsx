import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  GraduationCap, 
  Heart, 
  Building2, 
  CheckCircle, 
  Users, 
  Briefcase, 
  BookOpen,
  Target,
  TrendingUp,
  Shield,
  Compass,
  Award,
  BarChart3,
  PieChart,
  Wallet,
  Lightbulb,
  Handshake,
  MessageSquare
} from 'lucide-react';

const Missions = () => {
  const [activeTab, setActiveTab] = useState('students');

  const missions = [
    {
      id: 'students',
      icon: GraduationCap,
      title: 'For Students',
      headline: 'Helping Students Turn Potential into Real Careers',
      description: 'Student consulting, job opportunities, and professional training designed to help you qualify for roles at leading banks and top organizations.',
      color: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
      href: '/students',
    },
    {
      id: 'individuals',
      icon: Heart,
      title: 'For Individuals',
      headline: 'You Don\'t Have to Face Financial Struggles Alone',
      description: 'Practical financial guidance designed to help individuals regain stability, clarity, and confidence.',
      color: 'bg-rose-500/10',
      iconColor: 'text-rose-500',
      href: '/individuals',
    },
    {
      id: 'small-businesses',
      icon: Building2,
      title: 'For Small Businesses',
      headline: 'Helping Small Businesses Grow Smarter and Stronger',
      description: 'Business advisory and financial services designed to support sustainable growth and better decision-making.',
      color: 'bg-emerald-500/10',
      iconColor: 'text-emerald-500',
      href: '/small-businesses',
    },
  ];

  const studentOfferings = [
    { icon: Users, title: 'Student Consulting', description: 'Personalized career path guidance' },
    { icon: Briefcase, title: 'Job Opportunities', description: 'Internships and entry-level roles' },
    { icon: BookOpen, title: 'Corporate Training', description: 'Banking and finance workshops' },
  ];

  const individualHelp = [
    { icon: Compass, title: 'Financial Clarity', description: 'Assessment and understanding' },
    { icon: TrendingUp, title: 'Budgeting Guidance', description: 'Cash flow management' },
    { icon: Shield, title: 'Debt Support', description: 'Navigate financial pressure' },
  ];

  const businessServices = [
    { icon: Target, title: 'Strategic Planning', description: 'Growth and expansion roadmaps' },
    { icon: BarChart3, title: 'Performance Analysis', description: 'Operational improvements' },
    { icon: PieChart, title: 'Financial Services', description: 'Reporting and cash flow' },
  ];

  const studentBenefits = [
    'University and college students',
    'Fresh graduates',
    'Students interested in banking, finance, consulting',
    'Those seeking real-world mentorship',
  ];

  const individualBenefits = [
    'Individuals experiencing financial stress',
    'People seeking guidance and direction',
    'Those wanting to regain control of finances',
    'Anyone looking for clarity and support',
  ];

  const businessBenefits = [
    'Small and growing businesses',
    'Founder-led companies',
    'Service-based businesses',
    'Owners seeking expert support',
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
              <Target size={20} />
              <span className="text-sm font-medium">Our Mission</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
              Empowering People and Businesses to{' '}
              <span className="text-secondary">Thrive</span>
            </h1>
            
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              At GMS Advisors, we're committed to providing practical guidance and support for students, individuals, and small businesses navigating their financial journey.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mission Cards Overview */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-heading text-foreground mb-4">Who We Serve</h2>
            <p className="section-subheading mx-auto">
              Tailored guidance for every stage of your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission) => (
              <Card 
                key={mission.id} 
                className="card-elevated hover-lift border-0 cursor-pointer transition-all duration-300 group"
                onClick={() => setActiveTab(mission.id)}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl ${mission.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <mission.icon className={mission.iconColor} size={32} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {mission.description}
                  </p>
                  <Link 
                    to={mission.href}
                    className="inline-flex items-center text-secondary font-medium hover:underline"
                  >
                    Learn more <ArrowRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-heading text-foreground mb-4">Explore Our Programs</h2>
            <p className="section-subheading mx-auto">
              Click on each tab to discover how we can help you.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 h-auto p-1 mb-12">
              <TabsTrigger 
                value="students" 
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <GraduationCap size={18} />
                <span className="hidden sm:inline">Students</span>
              </TabsTrigger>
              <TabsTrigger 
                value="individuals"
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Heart size={18} />
                <span className="hidden sm:inline">Individuals</span>
              </TabsTrigger>
              <TabsTrigger 
                value="small-businesses"
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Building2 size={18} />
                <span className="hidden sm:inline">Businesses</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="students" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Empowering Future Finance Professionals
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    GMS Advisors is committed to helping students gain clarity, confidence, and competitive skills to succeed in today's job market—especially in finance, banking, and professional services.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {studentOfferings.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="text-secondary" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="gold" asChild>
                    <Link to="/students">
                      Explore Student Programs <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </div>

                <div className="bg-primary rounded-2xl p-8">
                  <h4 className="font-serif text-xl font-semibold text-primary-foreground mb-6">
                    Who This Is For
                  </h4>
                  <ul className="space-y-4">
                    {studentBenefits.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-primary-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                    <div className="flex items-center gap-3">
                      <Award className="text-secondary" size={24} />
                      <div>
                        <p className="text-secondary font-semibold">Industry-backed</p>
                        <p className="text-primary-foreground/70 text-sm">Real-world standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="individuals" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Navigate Financial Challenges with Confidence
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    At GMS Advisors, we believe everyone deserves access to clear, honest financial guidance—especially during challenging times. Our mission is to help you understand your situation and move toward stability.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {individualHelp.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="text-secondary" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="gold" asChild>
                    <Link to="/individuals">
                      Get Financial Guidance <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </div>

                <div className="bg-primary rounded-2xl p-8">
                  <h4 className="font-serif text-xl font-semibold text-primary-foreground mb-6">
                    Who This Is For
                  </h4>
                  <ul className="space-y-4">
                    {individualBenefits.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-primary-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                    <div className="flex items-center gap-3">
                      <Handshake className="text-secondary" size={24} />
                      <div>
                        <p className="text-secondary font-semibold">Human-first approach</p>
                        <p className="text-primary-foreground/70 text-sm">No judgment, just support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="small-businesses" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Strategic Guidance for Business Growth
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    GMS Advisors partners with small business owners to provide clear, strategic guidance across operations, finance, and growth planning. We help you build strong foundations for long-term success.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {businessServices.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="text-secondary" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="gold" asChild>
                    <Link to="/small-businesses">
                      Talk to an Advisor <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </div>

                <div className="bg-primary rounded-2xl p-8">
                  <h4 className="font-serif text-xl font-semibold text-primary-foreground mb-6">
                    Who We Work With
                  </h4>
                  <ul className="space-y-4">
                    {businessBenefits.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-primary-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="text-secondary" size={24} />
                      <div>
                        <p className="text-secondary font-semibold">Long-term partnership</p>
                        <p className="text-primary-foreground/70 text-sm">Clear insights, not jargon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="stat-number mb-2">500+</p>
              <p className="text-muted-foreground">Students Mentored</p>
            </div>
            <div className="p-6">
              <p className="stat-number mb-2">100+</p>
              <p className="text-muted-foreground">Individuals Helped</p>
            </div>
            <div className="p-6">
              <p className="stat-number mb-2">150+</p>
              <p className="text-muted-foreground">Businesses Advised</p>
            </div>
            <div className="p-6">
              <p className="stat-number mb-2">15+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Ready to Take the{' '}
            <span className="text-secondary">Next Step?</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
            Whether you're a student, an individual, or a business owner—we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-primary" size="xl" asChild>
              <Link to="/#contact">
                Get Started Today
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <Link to="/#about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Missions;
