const LogoStrip = () => {
  const companies = [
    { name: 'Bank of America', logo: '/logos/Bank of America.png' },
    { name: 'Merrill Lynch', logo: '/logos/Merrill Lynch.png' },
    { name: 'Credit Suisse', logo: '/logos/Credit Suisse.png' },
    { name: 'Clinton Group', logo: '/logos/Clinton Group.png' },
    { name: 'Papyrus Capital', logo: '/logos/Papyrus Capital.png' },
  ];

  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 md:py-20 bg-muted/50 overflow-hidden">
      <div className="container-wide">
        <p className="text-center text-muted-foreground text-sm font-medium mb-10 uppercase tracking-wider">
          Trusted by Experience Across Institutional Finance & Small Business
        </p>
      </div>
      
      <div className="relative w-full">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/50 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll-logos hover:pause-animation">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 group cursor-pointer"
            >
              <div className="relative flex items-center justify-center h-16 md:h-20 w-32 md:w-40 transition-all duration-300 ease-out group-hover:scale-110">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-full max-w-full object-contain filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <span 
                  className="hidden text-xs md:text-sm whitespace-nowrap text-muted-foreground font-medium uppercase tracking-wider transition-colors duration-300 group-hover:text-foreground"
                >
                  {company.name}
                </span>
              </div>
              
              {/* Hover tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-xs text-muted-foreground whitespace-nowrap bg-background/90 px-2 py-1 rounded shadow-sm">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
