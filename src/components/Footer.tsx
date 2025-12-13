const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Creative Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Behance
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
