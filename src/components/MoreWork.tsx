import { motion } from "framer-motion";
import { ExternalLink, Briefcase } from "lucide-react";

const moreProjects = [
  {
    id: 1,
    title: "Vitality Recovery",
    description: "Health & wellness brand identity and marketing",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    category: "Wellness",
    url: "https://vitality-recovery.lovable.app",
  },
  {
    id: 2,
    title: "The Luxe Cars",
    description: "Premium automotive dealership digital presence",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    category: "Automotive",
    url: "https://the-luxe-cars.lovable.app",
  },
  {
    id: 3,
    title: "Drive More",
    description: "Automotive lead generation and sales platform",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    category: "Automotive",
    url: "https://drive-more.lovable.app",
  },
  {
    id: 4,
    title: "Unparallel Luxury",
    description: "Luxury automotive digital experience",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    category: "Luxury",
    url: "https://unparallel-luxury.lovable.app",
  },
  {
    id: 5,
    title: "Nova Sync Luxe Web",
    description: "Premium web presence for luxury brand",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop",
    category: "Luxury",
    url: "https://nova-sync-luxe-web.netlify.app",
  },
  {
    id: 6,
    title: "Aurelius Insurance",
    description: "Insurance brand marketing and lead generation",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    category: "Insurance",
    url: "https://aurelius-insurance.lovable.app",
  },
  {
    id: 7,
    title: "Insurance SecureGuard",
    description: "Insurance platform with trust-focused design",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    category: "Insurance",
    url: "https://insurance-secureguard.lovable.app",
  },
  {
    id: 8,
    title: "Prime Realty",
    description: "Real estate brand identity and property showcase",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    category: "Real Estate",
    url: "https://prime-realty.lovable.app",
  },
];

const MoreWork = () => {
  return (
    <section id="more-work" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
            <Briefcase className="w-4 h-4 inline mr-2" />
            More Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Additional Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore more projects across various industries — from automotive to wellness and insurance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-0.5 bg-accent/20 text-accent text-xs font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1">{project.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreWork;
