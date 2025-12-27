import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, ShoppingCart, TrendingUp, Cog, Mail, Users, Smartphone, Zap,
  Check, ArrowRight, Sparkles, Star, Clock, Shield, Headphones, Rocket
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Modern, high-converting websites built with strategic UI/UX. From WordPress to Webflow to custom solutions.",
    features: [
      "Responsive & Mobile-First Design",
      "Website Redesign & Revamp",
      "Performance & Speed Optimization",
      "Custom Landing Pages",
      "WordPress & Webflow Development",
    ],
    gradient: "from-orange-500 to-red-500",
    price: "Starting at $1,500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Complete e-commerce solutions that maximize sales and provide seamless shopping experiences.",
    features: [
      "Shopify Development",
      "WooCommerce Development",
      "BigCommerce Development",
      "Product Page Optimization",
      "Payment Gateway Integration",
    ],
    gradient: "from-blue-500 to-cyan-500",
    price: "Starting at $2,000",
  },
  {
    icon: TrendingUp,
    title: "Sales Funnels & CRO",
    description: "Strategic funnels and landing pages engineered for maximum conversion rates.",
    features: [
      "Sales Funnel Strategy & Setup",
      "High-Converting Landing Pages",
      "Lead Capture & Optimization",
      "A/B Testing & CRO",
      "PPC Landing Page Optimization",
    ],
    gradient: "from-green-500 to-emerald-500",
    price: "Starting at $1,200",
  },
  {
    icon: Cog,
    title: "CRM & Automation",
    description: "Streamline your business with powerful automation and CRM customization.",
    features: [
      "CRM Development & Customization",
      "Workflow Automation",
      "Lead Management Systems",
      "Zapier & API Integrations",
      "Third-Party Tool Integrations",
    ],
    gradient: "from-purple-500 to-pink-500",
    price: "Starting at $800",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Email systems that nurture leads, build relationships, and drive consistent sales.",
    features: [
      "Email Marketing Setup",
      "Newsletter Design & Development",
      "Email Automation Funnels",
      "List Building & Lead Nurturing",
      "Platform Setup (Mailchimp, Klaviyo)",
    ],
    gradient: "from-yellow-500 to-orange-500",
    price: "Starting at $600",
  },
  {
    icon: Users,
    title: "B2B Lead Generation",
    description: "Lead funnels and qualification systems designed specifically for B2B businesses.",
    features: [
      "B2B Lead Funnel Creation",
      "Lead Capture Systems",
      "Lead Qualification Automation",
      "CRM-Driven Lead Management",
      "Conversion-Focused Forms",
    ],
    gradient: "from-indigo-500 to-blue-500",
    price: "Starting at $1,000",
  },
  {
    icon: Smartphone,
    title: "App Store Optimization",
    description: "Boost your app visibility and downloads with comprehensive ASO strategies.",
    features: [
      "ASO Strategy & Keyword Research",
      "App Store Listing Optimization",
      "App Description Rewrite",
      "Screenshot & Visual Optimization",
      "Review Growth Strategy",
    ],
    gradient: "from-teal-500 to-cyan-500",
    price: "Starting at $500",
  },
  {
    icon: Zap,
    title: "No-Code Solutions",
    description: "Rapid development with powerful no-code and low-code platforms.",
    features: [
      "Knack Development",
      "No-Code App Building",
      "Internal Tools & Dashboards",
      "Database-Driven Applications",
      "Hosting & Cloud Setup",
    ],
    gradient: "from-rose-500 to-pink-500",
    price: "Starting at $700",
  },
];

const processSteps = [
  { step: "01", title: "Discovery Call", description: "We discuss your goals, audience, and vision for the project in a free 30-minute consultation." },
  { step: "02", title: "Strategy & Proposal", description: "I create a detailed conversion-focused plan tailored to your specific needs and budget." },
  { step: "03", title: "Design Phase", description: "Beautiful, strategic designs that guide users to action. You get unlimited revisions until perfect." },
  { step: "04", title: "Development", description: "Clean, fast, and responsive code that performs. Built with the latest technologies." },
  { step: "05", title: "Testing & Launch", description: "Thorough testing across devices and browsers, followed by smooth deployment." },
  { step: "06", title: "Ongoing Support", description: "30-day free support post-launch, plus ongoing optimization options for continued success." },
];

const benefits = [
  { icon: Clock, title: "Fast Turnaround", description: "Most projects delivered within 2-4 weeks" },
  { icon: Shield, title: "Quality Guaranteed", description: "100% satisfaction or money back" },
  { icon: Headphones, title: "24/7 Support", description: "Always available when you need help" },
  { icon: Rocket, title: "Conversion Focused", description: "Every design decision drives results" },
];

const testimonials = [
  { name: "Alex Thompson", role: "CEO, TechStart", text: "Nova Sync delivered a website that increased our conversions by 250%. Absolutely incredible work.", rating: 5 },
  { name: "Sarah Chen", role: "Founder, StyleHub", text: "The e-commerce site exceeded all expectations. Sales doubled within the first month.", rating: 5 },
  { name: "Michael Ross", role: "Marketing Director", text: "Best investment we made. The sales funnel generates leads on autopilot now.", rating: 5 },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Nova Sync - Web Design, E-commerce & Conversion Optimization</title>
        <meta name="description" content="Full-stack digital services: Web design, e-commerce development, sales funnels, CRM automation, email marketing, and more. Transform your online presence." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Dramatic Hero */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-[1000px] h-[1000px] -translate-y-1/2 translate-x-1/2"
            >
              <div className="w-full h-full border border-accent/10 rounded-full" />
              <div className="absolute inset-10 border border-accent/10 rounded-full" />
              <div className="absolute inset-20 border border-accent/10 rounded-full" />
            </motion.div>
            <div className="absolute top-40 left-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wider uppercase mb-10"
              >
                <Sparkles className="w-5 h-5" />
                Full-Stack Digital Solutions
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-8"
              >
                Services That
                <span className="text-accent block mt-2">Drive Results</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
              >
                From stunning web design to powerful automation, comprehensive digital solutions 
                that transform your online presence and accelerate growth.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/portfolio" className="btn-secondary text-lg px-8 py-4">
                  View Portfolio
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Benefits Bar */}
        <section className="py-8 bg-accent">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-accent-foreground"
                >
                  <benefit.icon className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">{benefit.title}</h3>
                    <p className="text-sm opacity-80">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
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
                What I Offer
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Comprehensive <span className="text-accent">Solutions</span>
              </h2>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative p-8 rounded-3xl bg-background border border-border hover:border-accent/30 transition-all duration-300 h-full">
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                            {service.title}
                          </h3>
                          <span className="text-accent font-semibold text-sm">{service.price}</span>
                        </div>
                        <p className="text-muted-foreground mb-6">{service.description}</p>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-accent flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
                How It Works
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                My Proven <span className="text-accent">Process</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="absolute -top-5 -left-2 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/80 text-accent-foreground font-display font-bold flex items-center justify-center text-xl shadow-lg shadow-accent/30">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-4 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
                Client Love
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                What Clients <span className="text-accent">Say</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-background border border-border"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6">"{testimonial.text}"</p>
                  <div>
                    <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Ready to Transform Your <span className="text-accent">Business</span>?
              </h2>
              <p className="text-muted-foreground text-xl mb-10">
                Book a free 30-minute consultation and let's discuss your project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                  Book Free Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="https://wa.me/message/62PWVK7X73BMD1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  WhatsApp Me
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Services;
