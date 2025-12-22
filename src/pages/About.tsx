import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Award, Zap, Heart, Target, Lightbulb, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bosedePrecious from "@/assets/bosede-precious.png";

const values = [
  { icon: Target, title: "Conversion-First", description: "Every design decision is guided by one question: will this help convert visitors into customers?" },
  { icon: Lightbulb, title: "Strategic Thinking", description: "I don't just make things pretty. I craft experiences that align with your business goals." },
  { icon: Heart, title: "Client Partnership", description: "Your success is my success. I treat every project as if it were my own business." },
  { icon: Users, title: "User Psychology", description: "Understanding how users think and behave is the foundation of effective design." },
];

const journey = [
  { year: "2019", title: "Started Freelancing", description: "Began my journey as a web designer, helping small businesses establish online presence." },
  { year: "2020", title: "Mastered E-commerce", description: "Specialized in Shopify and WooCommerce, building stores that actually sell." },
  { year: "2021", title: "Founded Nova Sync", description: "Launched my brand focused on conversion-driven web solutions." },
  { year: "2022", title: "Expanded Services", description: "Added CRM automation, email marketing, and sales funnels to my offerings." },
  { year: "2023", title: "Global Clients", description: "Now serving clients across 15+ countries, from startups to established brands." },
  { year: "2024", title: "100+ Projects", description: "Reached the milestone of delivering over 100 successful projects." },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Nova Sync | Bosede Precious Olorunda - My Story</title>
        <meta name="description" content="Learn about Bosede Precious Olorunda, the founder of Nova Sync. 5+ years of experience building high-converting websites and digital experiences." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent rounded-[3rem] blur-3xl" />
                  <div className="relative rounded-[2rem] overflow-hidden border-2 border-accent/20">
                    <img
                      src={bosedePrecious}
                      alt="Bosede Precious Olorunda - Nova Sync Founder"
                      className="w-full aspect-[3/4] object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-2xl border border-accent/30 backdrop-blur-sm flex items-center justify-center"
                  >
                    <span className="text-3xl">🚀</span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-4 -left-4 px-6 py-3 bg-card border border-border rounded-full"
                  >
                    <span className="text-accent font-display font-bold">100+ Projects</span>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <span className="inline-block px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wider uppercase mb-8">
                  About Me
                </span>
                
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
                  Hey, I'm <span className="text-accent">Bosede</span>
                </h1>
                
                <div className="space-y-6 text-lg text-muted-foreground mb-10">
                  <p>
                    I'm a web designer, developer, and conversion strategist based in Nigeria, 
                    working with clients worldwide. I founded <span className="text-foreground font-semibold">Nova Sync</span> with 
                    a simple mission: build websites that don't just look beautiful—they deliver results.
                  </p>
                  <p>
                    With over 5 years of experience and 100+ successful projects, I've helped startups, 
                    SaaS companies, e-commerce brands, and growing businesses transform their online presence 
                    into powerful conversion engines.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "5+", label: "Years Experience" },
                    { value: "100+", label: "Projects Delivered" },
                    { value: "15+", label: "Countries Served" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center p-4 rounded-2xl bg-card border border-border/50"
                    >
                      <p className="font-display text-3xl font-bold text-accent">{stat.value}</p>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-24 bg-card relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
                My Values
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                What Drives <span className="text-accent">My Work</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-3xl bg-background border border-border hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Journey Timeline */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
                My Journey
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                How I Got <span className="text-accent">Here</span>
              </h2>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex gap-8 mb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-accent">{item.year}</span>
                  </div>
                  <div className={`flex-1 p-6 rounded-2xl bg-card border border-border ${index % 2 === 1 ? 'text-right' : ''}`}>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-card relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Build Something <span className="text-accent">Amazing</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Let's turn your vision into a high-converting digital reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  View My Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default About;
