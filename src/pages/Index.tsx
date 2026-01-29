import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LogoStrip from '@/components/LogoStrip';
import AboutSection from '@/components/AboutSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import ExperienceSection from '@/components/ExperienceSection';
import ServicesSection from '@/components/ServicesSection';
import AISection from '@/components/AISection';
import WhyUsSection from '@/components/WhyUsSection';
import WhoWeWorkWithSection from '@/components/WhoWeWorkWithSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <LogoStrip />
        <AboutSection />
        <WhoWeAreSection />
        <ExperienceSection />
        <ServicesSection />
        <AISection />
        <WhyUsSection />
        <WhoWeWorkWithSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
