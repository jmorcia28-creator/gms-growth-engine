import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const missionPages = [
    { label: 'All Missions', href: '/missions' },
    { label: 'For Students', href: '/students' },
    { label: 'For Individuals', href: '/individuals' },
    { label: 'For Small Businesses', href: '/small-businesses' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // Navigate to home first, then scroll
      window.location.href = `/${sectionId}`;
      return;
    }
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              GMS <span className="text-secondary">Advisors</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Mission Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMissionOpen(true)}
              onMouseLeave={() => setIsMissionOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Our Mission
                <ChevronDown size={16} className={`transition-transform ${isMissionOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMissionOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                    {missionPages.map((page) => (
                      <Link
                        key={page.label}
                        to={page.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('#about')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('#services')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('#experience')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('#why-us')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            
            <Button variant="gold" size="sm" onClick={() => scrollToSection('#contact')}>
              Work With Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {/* Mission Links */}
              <div className="border-b border-border pb-4 mb-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Our Mission</p>
                {missionPages.map((page) => (
                  <Link
                    key={page.label}
                    to={page.href}
                    className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
              
              <button
                onClick={() => scrollToSection('#about')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('#experience')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('#why-us')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              
              <Button variant="gold" size="sm" className="w-fit" onClick={() => scrollToSection('#contact')}>
                Work With Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
