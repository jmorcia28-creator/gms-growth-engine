const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading text-foreground mb-6">
            About <span className="text-secondary">GMS Advisors</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            GMS Advisors was built to bridge the gap between institutional-grade strategy and real-world small business execution.
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Our founders bring experience from management consulting, M&A advisory, equity research, and equity and debt capital raising—combined with hands-on experience founding and operating multiple small businesses across diverse industries.
          </p>
          
          <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
            We apply the same rigor used at top financial institutions to the problems small business owners face every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
