import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, ShoppingCart, TrendingUp, Cog, Mail, Users, Smartphone, Zap,
  Check, ArrowRight, Sparkles
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
    color: "from-orange-500/20 to-red-500/20",
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
    color: "from-blue-500/20 to-cyan-500/20",
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
    color: "from-green-500/20 to-emerald-500/20",
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
    color: "from-purple-500/20 to-pink-500/20",
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
    color: "from-yellow-500/20 to-orange-500/20",
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
    color: "from-indigo-500/20 to-blue-500/20",
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
    color: "from-teal-500/20 to-cyan-500/20",
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
    color: "from-rose-500/20 to-pink-500/20",
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We discuss your goals, audience, and vision for the project." },
  { step: "02", title: "Strategy", description: "I create a conversion-focused plan tailored to your needs." },
  { step: "03", title: "Design", description: "Beautiful, strategic designs that guide users to action." },
  { step: "04", title: "Development", description: "Clean, fast, and responsive code that performs." },
  { step: "05", title: "Launch", description: "Thorough testing and smooth deployment of your project." },
  { step: "06", title: "Growth", description: "Ongoing optimization and support for continued success." },
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
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wider uppercase mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Full-Stack Digital Services
              </motion.div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
                Services That <span className="text-accent">Deliver</span> Results
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                From stunning web design to powerful automation, I offer comprehensive digital solutions 
                that help your business grow and convert.
              </p>
              
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-24 bg-card relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="container mx-auto px-6">
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative p-8 rounded-3xl bg-background border border-border hover:border-accent/30 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <service.icon className="w-8 h-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
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
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
                My Process
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                How We <span className="text-accent">Work Together</span>
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
                  <span className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent text-accent-foreground font-display font-bold flex items-center justify-center text-lg">
                    {step.step}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-4 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-24 bg-card relative">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's Build Something <span className="text-accent">Incredible</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Ready to transform your online presence? Let's discuss your project.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Services;
