import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Clock, ArrowRight } from "lucide-react";

import novaLuxeWeb from "@/assets/projects/nova-luxe-web.jpg";
import autoLeads from "@/assets/projects/auto-leads.jpg";
import holidayRevenue from "@/assets/projects/holiday-revenue.jpg";

const caseStudies = [
  {
    title: "Nova Luxe E-commerce",
    category: "E-commerce Redesign",
    image: novaLuxeWeb,
    challenge: "Low conversion rate of 0.8% despite high traffic. Cart abandonment at 78%.",
    solution: "Complete UX overhaul with streamlined checkout, trust signals, and urgency elements.",
    results: [
      { icon: TrendingUp, label: "Conversion Rate", value: "+340%", detail: "From 0.8% to 3.5%" },
      { icon: DollarSign, label: "Revenue Increase", value: "$127K", detail: "First 90 days" },
      { icon: Users, label: "Cart Recovery", value: "52%", detail: "Abandoned cart emails" },
      { icon: Clock, label: "Time to Convert", value: "-45%", detail: "Faster checkout" },
    ],
    testimonial: {
      quote: "Nova Sync transformed our online store. The results speak for themselves.",
      author: "Sarah Chen",
      role: "CEO, Nova Luxe"
    }
  },
  {
    title: "AutoPro Lead Generation",
    category: "B2B Lead Funnel",
    image: autoLeads,
    challenge: "Expensive paid ads with poor lead quality. Cost per lead at $85.",
    solution: "Built targeted landing pages with qualification forms and CRM automation.",
    results: [
      { icon: DollarSign, label: "Cost Per Lead", value: "-62%", detail: "From $85 to $32" },
      { icon: Users, label: "Lead Quality", value: "+180%", detail: "SQL rate improved" },
      { icon: TrendingUp, label: "Pipeline Value", value: "$340K", detail: "Monthly average" },
      { icon: Clock, label: "Response Time", value: "< 5min", detail: "Automated follow-up" },
    ],
    testimonial: {
      quote: "Our sales team finally has quality leads to work with. Game changer.",
      author: "Michael Torres",
      role: "VP Sales, AutoPro"
    }
  },
  {
    title: "Holiday Revenue Boost",
    category: "Seasonal Campaign",
    image: holidayRevenue,
    challenge: "Needed to maximize Q4 revenue with limited marketing budget.",
    solution: "Created high-converting landing pages with countdown timers and social proof.",
    results: [
      { icon: DollarSign, label: "Holiday Sales", value: "$89K", detail: "30-day campaign" },
      { icon: TrendingUp, label: "ROAS", value: "8.4x", detail: "Return on ad spend" },
      { icon: Users, label: "New Customers", value: "1,247", detail: "First-time buyers" },
      { icon: Clock, label: "Delivery Time", value: "5 days", detail: "Campaign launch" },
    ],
    testimonial: {
      quote: "Best holiday season we've ever had. Nova Sync delivered under pressure.",
      author: "Emma Rodriguez",
      role: "Marketing Director"
    }
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-6">
            Case Studies
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Results, <span className="text-accent">Real Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Detailed breakdowns of how strategic design and development 
            transformed businesses and drove measurable growth.
          </p>
        </motion.div>

        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl border border-border">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-bold text-foreground">
                  {study.title}
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      The Challenge
                    </h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      The Solution
                    </h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {study.results.map((result) => (
                    <div
                      key={result.label}
                      className="p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
                    >
                      <result.icon className="w-5 h-5 text-accent mb-2" />
                      <div className="text-2xl font-bold text-foreground">{result.value}</div>
                      <div className="text-sm text-muted-foreground">{result.label}</div>
                      <div className="text-xs text-muted-foreground/60 mt-1">{result.detail}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <p className="text-foreground italic mb-3">"{study.testimonial.quote}"</p>
                  <footer className="text-sm">
                    <span className="text-accent font-semibold">{study.testimonial.author}</span>
                    <span className="text-muted-foreground"> — {study.testimonial.role}</span>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Start Your Success Story
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
