import { motion } from "framer-motion";
import { 
  Globe, 
  ShoppingCart, 
  TrendingUp, 
  Cog, 
  Mail, 
  Users,
  Smartphone,
  Zap,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Modern, high-converting websites built with strategic UI/UX. From WordPress to custom solutions, every pixel is designed to guide visitors toward action.",
    features: ["Responsive Design", "Speed Optimization", "Custom Development"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Complete e-commerce solutions on Shopify, WooCommerce, and BigCommerce. Product pages, checkout flows, and payment integrations that maximize sales.",
    features: ["Shopify/WooCommerce", "Payment Gateway", "Checkout Optimization"],
  },
  {
    icon: TrendingUp,
    title: "Sales Funnels & CRO",
    description: "Strategic sales funnels and landing pages engineered for conversion. A/B testing, lead capture optimization, and data-driven improvements.",
    features: ["Funnel Strategy", "A/B Testing", "Lead Capture"],
  },
  {
    icon: Cog,
    title: "CRM & Automation",
    description: "Streamline your business with CRM customization, workflow automation, and third-party integrations. Save time and never miss a lead.",
    features: ["CRM Setup", "Workflow Automation", "API Integrations"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Email systems that nurture leads and drive sales. Newsletter design, automation sequences, and list building strategies that convert.",
    features: ["Email Automation", "Newsletter Design", "List Building"],
  },
  {
    icon: Users,
    title: "B2B Lead Generation",
    description: "Lead funnels and qualification systems designed for B2B businesses. CRM-driven lead management and conversion-focused forms.",
    features: ["Lead Funnels", "Lead Qualification", "CRM Integration"],
  },
  {
    icon: Smartphone,
    title: "App Store Optimization",
    description: "Boost your app visibility with ASO strategies. Keyword research, listing optimization, and screenshot design that drives downloads.",
    features: ["Keyword Research", "Listing Optimization", "Visual Design"],
  },
  {
    icon: Zap,
    title: "No-Code Solutions",
    description: "Rapid development with Knack, Webflow, and other no-code platforms. Internal tools, dashboards, and database-driven applications.",
    features: ["Knack Development", "Internal Tools", "Dashboards"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I <span className="text-accent">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack digital solutions designed to grow your business. From design to deployment, 
            I handle everything with a conversion-first approach.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-background border border-border hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm flex-grow mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
