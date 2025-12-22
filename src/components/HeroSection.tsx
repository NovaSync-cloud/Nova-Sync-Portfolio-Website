import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const overlayTexts = [
  { text: "Most websites look good.", highlight: "Few actually convert." },
  { text: "Nova Sync builds websites", highlight: "engineered to convert." },
  { text: "For startups, SaaS,", highlight: "e-commerce & growing businesses." },
  { text: "This isn't just design —", highlight: "it's conversion strategy." },
  { text: "Every section is built to", highlight: "guide users to action." },
  { text: "Clean UI. Strategic layout.", highlight: "Premium execution." },
  { text: "Designed with psychology,", highlight: "not guesswork." },
  { text: "Mobile-first. Fast.", highlight: "Intuitive." },
  { text: "Built to support marketing,", highlight: "sales, and growth." },
  { text: "I don't just design websites —", highlight: "I build conversion systems." },
  { text: "Nova Sync —", highlight: "Where design meets results." },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % overlayTexts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBackground} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>
      
      {/* Animated overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/10 to-transparent rounded-full blur-[80px]" />
        </div>
        
        {/* Geometric patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-1/4 w-24 h-24 border border-accent/20 rounded-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-accent/10 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 left-20 w-32 h-32 border border-border/30 rounded-full"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Animated overlay text */}
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <span className="text-muted-foreground text-sm md:text-base tracking-wide">
                  {overlayTexts[currentIndex].text}
                </span>
                <span className="text-accent text-sm md:text-base tracking-wide font-semibold ml-1">
                  {overlayTexts[currentIndex].highlight}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wider uppercase mb-8"
          >
            Web Designer & Developer | Conversion Specialist
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-8"
          >
            Building Websites That
            <span className="text-accent block mt-2"> Convert Visitors</span>
            <span className="text-foreground">Into Customers</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            E-commerce development, sales funnels, CRM automation, and conversion-focused 
            web design that transforms traffic into revenue.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#portfolio" className="btn-primary">
              View Portfolio
            </a>
            <a href="#contact" className="btn-secondary">
              Work With Me
            </a>
          </motion.div>
          
          {/* Brand tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 text-muted-foreground/60 text-sm tracking-widest uppercase"
          >
            Design is the tool. <span className="text-accent">Conversion</span> is the goal.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
