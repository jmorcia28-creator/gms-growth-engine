const LogoStrip = () => {
  const companies = [
    'Evercore',
    'Goldman Sachs',
    'Morgan Stanley',
    'MetLife',
    'Bank of America Merrill Lynch',
    'Credit Suisse',
    'Clinton Group',
    'Papyrus Capital',
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container-wide">
        <p className="text-center text-muted-foreground text-sm font-medium mb-10 uppercase tracking-wider">
          Trusted by Experience Across Institutional Finance & Small Business
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16">
          {companies.map((company) => (
            <span
              key={company}
              className="logo-strip-item text-xs md:text-sm whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
