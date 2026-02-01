import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, GraduationCap, Briefcase, BookOpen, CheckCircle, Users, Target, Award, Heart } from 'lucide-react';

const Students = () => {
  const offerings = [
    {
      icon: Users,
      title: 'Student Consulting',
      description: 'Personalized guidance on career paths, resumes, interviews, and professional readiness.',
    },
    {
      icon: Briefcase,
      title: 'Student Job Opportunities',
      description: 'Access to internships, part-time roles, and entry-level positions aligned with your academic background.',
    },
    {
      icon: BookOpen,
      title: 'Banking & Corporate Training',
      description: 'Workshops and training programs focused on real-world skills.',
      list: [
        'Resume and CV optimization',
        'Interview preparation',
        'Financial fundamentals',
        'Professional communication',
        'How to qualify for roles at leading banks',
      ],
    },
  ];

  const whoIsFor = [
    'University and college students',
    'Fresh graduates',
    'Students interested in banking, finance, consulting, or corporate careers',
    'Students seeking real-world exposure and mentorship',
  ];

  const whyUs = [
    { icon: Award, text: 'Industry-backed guidance' },
    { icon: Target, text: 'Practical, career-focused training' },
    { icon: CheckCircle, text: 'Real-world standards, not generic advice' },
    { icon: Heart, text: 'A supportive, student-first approach' },
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
              <GraduationCap size={20} />
              <span className="text-sm font-medium">For Students</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
              Helping Students Turn Potential into{' '}
              <span className="text-secondary">Real Careers</span>
            </h1>
            
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Student consulting, job opportunities, and professional training designed to help you qualify for roles at leading banks and top organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero-primary" size="xl">
                Explore Student Programs
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="hero-secondary" size="xl">
                Apply for Opportunities
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading text-foreground mb-6">Our Mission for Students</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              GMS Advisors is committed to helping students gain clarity, confidence, and competitive skills to succeed in today's job market—especially in finance, banking, and professional services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We go beyond theory by offering practical consulting, hands-on experience, and guidance on how to meet the hiring standards of top-tier institutions.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-heading text-foreground mb-4">What We Offer Students</h2>
            <p className="section-subheading mx-auto">
              Comprehensive support to launch your career in finance and beyond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <Card key={index} className="card-elevated hover-lift border-0">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                    <offering.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{offering.description}</p>
                  {offering.list && (
                    <ul className="space-y-2">
                      {offering.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-foreground mb-6">Who This Is For</h2>
              <ul className="space-y-4">
                {whoIsFor.map((item, index) => (
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
              <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-6">
                Why GMS Advisors
              </h3>
              <div className="space-y-4">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className="text-secondary" size={20} />
                    <span className="text-primary-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Start Building Your Future{' '}
            <span className="text-secondary">Today</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
            Take the first step toward a career in finance, banking, or professional services.
          </p>
          <Button variant="hero-primary" size="xl">
            Get Started with Student Programs
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Students;
