import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "Nova Sync transformed our outdated website into a conversion machine. Our lead generation increased by 340% within the first month. Bosede truly understands what makes a website sell.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Founder, Luxe Commerce",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Working with Nova Sync was a game-changer for our e-commerce brand. The attention to detail, strategic thinking, and flawless execution exceeded all expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Marketing Director, SaaS Pro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The sales funnel Bosede built for us has been generating consistent leads on autopilot. Professional, creative, and results-driven. This is what premium web design looks like.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "Owner, Fresh Recovery Wellness",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "From concept to launch, Nova Sync delivered a website that perfectly captures our brand essence. The booking system integration works flawlessly and our appointments have doubled.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jessica Williams",
    role: "E-commerce Manager, Aura Cartel",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content: "Nova Sync doesn't just build websites — they build revenue-generating assets. Our conversion rate improved by 280% after the redesign. Worth every penny.",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "Exceptional work! The CRM automation setup has saved us countless hours. Bosede's expertise in conversion optimization is unmatched. A true professional.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Clients <span className="text-accent">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Don't just take my word for it — hear from the businesses I've helped transform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-background border border-border hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-accent" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground flex-grow mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
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
          <p className="text-muted-foreground mb-6">
            Ready to join these successful businesses?
          </p>
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
