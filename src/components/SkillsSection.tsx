import { motion } from "framer-motion";
import { 
  Palette, 
  Code, 
  ShoppingCart, 
  TrendingUp, 
  Mail, 
  Users, 
  Smartphone, 
  Share2,
  Server,
  Blocks
} from "lucide-react";

const skillCategories = [
  {
    icon: Palette,
    title: "Web Design & Development",
    skills: [
      "Modern, High-Converting UI/UX",
      "WordPress & Webflow Development",
      "Custom Landing Pages",
      "Responsive & Mobile-First Design",
      "Website Redesign & Revamp",
      "Performance & Speed Optimization"
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    skills: [
      "E-commerce Website Design",
      "Shopify Development",
      "WooCommerce Development",
      "BigCommerce Development",
      "Product Page Optimization",
      "Payment Gateway Integration"
    ],
  },
  {
    icon: TrendingUp,
    title: "Sales Funnels & CRO",
    skills: [
      "Sales Funnel Strategy & Setup",
      "High-Converting Landing Pages",
      "Lead Capture & Optimization",
      "A/B Testing & CRO",
      "PPC Landing Page Optimization",
      "Checkout & Conversion Optimization"
    ],
  },
  {
    icon: Code,
    title: "CRM & Automation",
    skills: [
      "CRM Development & Customization",
      "Workflow Automation",
      "Marketing Automation",
      "Lead Management Systems",
      "Email Automation Sequences",
      "Zapier & API Integrations"
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    skills: [
      "Email Marketing Setup",
      "Newsletter Design & Development",
      "Email Automation Funnels",
      "List Building & Lead Nurturing",
      "Mailchimp, Klaviyo Setup",
      "Campaign Optimization"
    ],
  },
  {
    icon: Users,
    title: "B2B Lead Generation",
    skills: [
      "B2B Lead Funnel Creation",
      "Lead Capture Systems",
      "Lead Qualification Automation",
      "CRM-Driven Lead Management",
      "Conversion-Focused Forms",
      "Outreach Strategy"
    ],
  },
  {
    icon: Smartphone,
    title: "App Store Optimization",
    skills: [
      "ASO Strategy",
      "Keyword Research",
      "App Store Listing Optimization",
      "App Description Rewrite",
      "Screenshot & Visual Optimization",
      "Review Growth Strategy"
    ],
  },
  {
    icon: Share2,
    title: "Social Media & Growth",
    skills: [
      "Social Media Management",
      "Brand Presence Optimization",
      "Content Strategy",
      "Conversion-Focused Social Pages",
      "Automation for Social Leads",
      "Community Building"
    ],
  },
  {
    icon: Server,
    title: "DevOps & Advanced Tech",
    skills: [
      "Kubernetes Implementation",
      "Deployment & Infrastructure",
      "GitHub & Version Control",
      "CI/CD Workflow",
      "Hosting & Cloud Setup",
      "Docker & Containerization"
    ],
  },
  {
    icon: Blocks,
    title: "No-Code / Low-Code",
    skills: [
      "Knack Development",
      "No-Code App Building",
      "Internal Tools & Dashboards",
      "Database-Driven Applications",
      "Automation Workflows",
      "Custom Integrations"
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-6">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-spectrum capabilities from strategy to execution — everything you need 
            to build, grow, and convert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <category.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Also bringing:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Conversion-Focused Thinking",
              "Client Communication",
              "Business-Driven Design",
              "UX Research",
              "Fast Turnaround",
              "Problem Solving",
              "Scalable System Design"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm border border-border/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
