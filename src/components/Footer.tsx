import { Linkedin } from 'lucide-react'; // Fix: lowercase 'd'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-foreground text-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-xl font-semibold">
              GMS <span className="text-secondary">Advisors</span>
            </span>
            <p className="text-sm text-background/60 mt-1">
              Helping Small Businesses Grow Smarter
            </p>
            
            <a 
              href="https://www.linkedin.com/company/gms-investment-group"
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 text-sm transition-all"
              style={{
                backgroundColor: '#0077B5',
                color: '#ffffff',
                padding: '8px 16px',
                borderRadius: '4px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex', // Fix: Use flex for alignment
                alignItems: 'center',   // Fix: Centers icon with text
                gap: '8px'              // Adds space between icon and text
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#005582')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0077B5')}
            >
              <Linkedin size={16} strokeWidth={2.5} />
              Follow us on LinkedIn
            </a>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-background/70 hover:text-background transition-colors">About</a>
            <a href="#services" className="text-background/70 hover:text-background transition-colors">Services</a>
            <a href="#experience" className="text-background/70 hover:text-background transition-colors">Experience</a>
            <a href="#contact" className="text-background/70 hover:text-background transition-colors">Contact</a>
            <a href="/missions" className="text-background/70 hover:text-background transition-colors">Missions</a>
          </nav>
          
          <p className="text-sm text-background/50">
            © {currentYear} GMS Advisors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;