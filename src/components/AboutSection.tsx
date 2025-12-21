import { motion } from "framer-motion";
import { MapPin, Briefcase, Award, Zap } from "lucide-react";
import bosedePrecious from "@/assets/bosede-precious.png";

const highlights = [
  { icon: Briefcase, label: "5+ Years", desc: "Professional Experience" },
  { icon: Award, label: "100+", desc: "Projects Delivered" },
  { icon: Zap, label: "Conversion", desc: "Focused Approach" },
  { icon: MapPin, label: "Remote", desc: "Global Clients" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Image frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border/50">
                <img
                  src={bosedePrecious}
                  alt="Bosede Precious Olorunda - Nova Sync"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Name overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Bosede Precious Olorunda
                  </h3>
                  <p className="text-accent font-medium">Founder, Nova Sync</p>
                </div>
              </div>
              
              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-2xl border border-accent/30 flex items-center justify-center"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-6">
              About Me
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              I Build Websites That <span className="text-accent">Work</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Hi, I'm <span className="text-foreground font-semibold">Bosede Precious Olorunda</span>, 
                the creative force behind Nova Sync. I specialize in building high-converting websites, 
                e-commerce platforms, and digital experiences that don't just look beautiful — they deliver results.
              </p>
              <p>
                With expertise spanning web design, development, sales funnels, CRM automation, and 
                digital marketing, I help startups, SaaS companies, and e-commerce brands transform 
                their online presence into a powerful conversion engine.
              </p>
              <p>
                My approach combines strategic thinking with meticulous execution. Every pixel has a purpose. 
                Every section guides users toward action. Because a beautiful website that doesn't convert 
                is just expensive art.
              </p>
            </div>
            
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">{item.label}</p>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
