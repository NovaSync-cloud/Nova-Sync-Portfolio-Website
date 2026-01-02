import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, Play, Filter, Award, TrendingUp, Users, Globe } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import luxeCommerce from "@/assets/projects/luxe-commerce.jpg";
import holidayRevenue from "@/assets/projects/holiday-revenue.jpg";
import maisonBoutique from "@/assets/projects/maison-boutique.jpg";
import auraCartel from "@/assets/projects/aura-cartel.jpg";
import freshRecovery from "@/assets/projects/fresh-recovery.jpg";
import novaLuxury from "@/assets/projects/nova-luxury.jpg";
import novaLuxeWeb from "@/assets/projects/nova-luxe-web.jpg";
import anchorShine from "@/assets/projects/anchor-shine.jpg";
import insurePeace from "@/assets/projects/insure-peace.jpg";
import autoLeads from "@/assets/projects/auto-leads.jpg";
import novasyncDealers from "@/assets/projects/novasync-dealers.jpg";
import novaDealers from "@/assets/projects/nova-dealers.jpg";

const categories = ["All", "E-Commerce", "Marketing", "Automotive", "Wellness", "Luxury", "Lead Gen"];

const stats = [
  { icon: Award, value: "50+", label: "Projects Delivered" },
  { icon: TrendingUp, value: "340%", label: "Avg. Conversion Increase" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Globe, value: "15+", label: "Countries Served" },
];

const projects = [
  {
    id: 1,
    title: "Luxe Commerce Launch",
    category: "E-Commerce",
    description: "Premium e-commerce platform with stunning product showcases and seamless checkout flow. Generated $2.4M in first-year revenue.",
    image: luxeCommerce,
    tags: ["Shopify", "E-Commerce", "Branding"],
    url: "https://luxe-commerce-launch.netlify.app",
    featured: true,
    stats: { conversion: "+340%", revenue: "$2.4M" }
  },
  {
    id: 2,
    title: "Holiday Revenue Rocket",
    category: "Marketing",
    description: "Seasonal marketing campaign that drove 340% increase in holiday sales with strategic email sequences.",
    image: holidayRevenue,
    tags: ["Campaign", "Sales Funnel", "Seasonal"],
    url: "https://holidayrevenuerocket.netlify.app",
    featured: true,
    stats: { conversion: "+280%", revenue: "$890K" }
  },
  {
    id: 3,
    title: "Maison Boutique",
    category: "E-Commerce",
    description: "Luxury boutique e-commerce with elegant design and premium user experience for high-end fashion.",
    image: maisonBoutique,
    tags: ["Luxury", "E-Commerce", "Fashion"],
    url: "https://maisonboutique.netlify.app",
    featured: true,
    stats: { conversion: "+210%", revenue: "$1.2M" }
  },
  {
    id: 4,
    title: "Aura Cartel Experience",
    category: "Marketing",
    description: "Immersive brand experience with conversion-focused landing pages and automated lead nurturing.",
    image: auraCartel,
    tags: ["Branding", "Landing Page", "Experience"],
    url: "https://aura-cartel-experience.netlify.app",
    featured: true,
    stats: { conversion: "+185%", revenue: "$650K" }
  },
  {
    id: 5,
    title: "Fresh Recovery Wellness",
    category: "Wellness",
    description: "Health & wellness platform with booking integration and lead capture.",
    image: freshRecovery,
    tags: ["Wellness", "Booking", "Lead Gen"],
    url: "https://frestrecoverywellness.netlify.app",
  },
  {
    id: 6,
    title: "NovaSync Luxury Digital",
    category: "Luxury",
    description: "Premium digital experience for luxury automotive brand.",
    image: novaLuxury,
    tags: ["Luxury", "Automotive", "Premium"],
    url: "https://novasync-luxury-digital-opus.netlify.app",
  },
  {
    id: 7,
    title: "Nova Sync Luxe Web",
    category: "Luxury",
    description: "Elegant web presence for premium luxury brand.",
    image: novaLuxeWeb,
    tags: ["Luxury", "Web Design", "Branding"],
    url: "https://nova-sync-luxe-web.netlify.app",
  },
  {
    id: 8,
    title: "Anchor & Shine",
    category: "Marketing",
    description: "Brand identity and digital marketing campaign with lead generation.",
    image: anchorShine,
    tags: ["Branding", "Marketing", "Campaign"],
    url: "https://anchor-and-shine.netlify.app",
  },
  {
    id: 9,
    title: "Insure Peace Now",
    category: "Lead Gen",
    description: "Insurance lead generation platform with high-converting forms.",
    image: insurePeace,
    tags: ["Insurance", "Lead Gen", "Forms"],
    url: "https://insure-peace-now.netlify.app",
  },
  {
    id: 10,
    title: "Auto Leads Accelerator",
    category: "Automotive",
    description: "Automotive lead generation funnel with CRM integration.",
    image: autoLeads,
    tags: ["Automotive", "Lead Gen", "CRM"],
    url: "https://autoleadsaccelerator.netlify.app",
  },
  {
    id: 11,
    title: "NovaSync Dealers",
    category: "Automotive",
    description: "Automotive dealership digital platform with inventory management.",
    image: novasyncDealers,
    tags: ["Automotive", "Dealership", "Platform"],
    url: "https://novasyncdealers.netlify.app",
  },
  {
    id: 12,
    title: "Nova Dealers",
    category: "Automotive",
    description: "Premium auto sales platform with modern design.",
    image: novaDealers,
    tags: ["Automotive", "Sales", "Platform"],
    url: "https://novadealers.netlify.app",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | Nova Sync - Web Design & Development Projects</title>
        <meta name="description" content="Explore Nova Sync's portfolio of high-converting websites, e-commerce platforms, and digital experiences. Real results from real projects." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wider uppercase mb-8">
                My Work
              </span>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
                Projects That <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">Convert</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                A curated collection of websites, e-commerce platforms, and digital experiences 
                I've built for clients worldwide — each one designed to drive real business results.
              </p>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="font-display text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Filter */}
        <section className="py-8 bg-card border-y border-border sticky top-20 z-40">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Filter className="w-5 h-5 text-muted-foreground" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-background text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">
                Featured <span className="text-accent">Projects</span>
              </h2>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {filteredProjects.filter(p => p.featured).map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    </div>
                    
                    {/* Stats Badge */}
                    {project.stats && (
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="px-3 py-1.5 bg-accent/90 text-accent-foreground text-xs font-bold rounded-full backdrop-blur-sm">
                          {project.stats.conversion}
                        </span>
                        <span className="px-3 py-1.5 bg-foreground/90 text-background text-xs font-bold rounded-full backdrop-blur-sm">
                          {project.stats.revenue}
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4">
                        {project.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors flex items-center gap-3">
                        {project.title}
                        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* All Projects Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">
                All <span className="text-accent">Projects</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.filter(p => !p.featured).map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block px-2 py-0.5 bg-accent/20 text-accent text-xs font-medium rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                        {project.title}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Video Showcase CTA */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
                <Play className="w-10 h-10 text-accent" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                See Projects in <span className="text-accent">Action</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Watch video walkthroughs of some of my best work.
              </p>
              <Link to="/videos" className="btn-primary">
                Watch Videos
              </Link>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Portfolio;
