const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-foreground text-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-serif text-xl font-semibold">
              GMS <span className="text-secondary">Advisors</span>
            </span>
            <p className="text-sm text-background/60 mt-1">
              Helping Small Businesses Grow Smarter
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-background/70 hover:text-background transition-colors">About</a>
            <a href="#services" className="text-background/70 hover:text-background transition-colors">Services</a>
            <a href="#experience" className="text-background/70 hover:text-background transition-colors">Experience</a>
            <a href="#contact" className="text-background/70 hover:text-background transition-colors">Contact</a>
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
