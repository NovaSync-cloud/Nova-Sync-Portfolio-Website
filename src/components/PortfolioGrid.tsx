import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Luxe Beauty",
    category: "E-Commerce",
    description: "Premium beauty brand e-commerce experience",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
    tags: ["Beauty", "E-Commerce", "Luxury"],
    url: "https://the-luxe-beauty.lovable.app",
  },
  {
    id: 2,
    title: "Nior Flash Sales",
    category: "E-Commerce",
    description: "High-converting flash sale landing pages",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=600&fit=crop",
    tags: ["Flash Sales", "Conversion", "E-Commerce"],
    url: "https://nior-flash-sales.lovable.app",
  },
  {
    id: 3,
    title: "Aura Elite Earbuds",
    category: "Product",
    description: "Premium audio product launch and branding",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600&fit=crop",
    tags: ["Product", "Tech", "Launch"],
    url: "https://aura-elite-earbuds.lovable.app",
  },
  {
    id: 4,
    title: "Maison Fashion Boutique",
    category: "E-Commerce",
    description: "Luxury boutique brand identity and digital presence",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["Fashion", "Luxury", "E-Commerce"],
    url: "https://maison-fashion-boutique.lovable.app",
  },
  {
    id: 5,
    title: "The Nexus Watch",
    category: "Product",
    description: "Luxury timepiece brand experience",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    tags: ["Watches", "Luxury", "Branding"],
    url: "https://the-nexus-watch.lovable.app",
  },
  {
    id: 6,
    title: "HeritageStitch",
    category: "E-Commerce",
    description: "Artisanal fashion brand storytelling",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
    tags: ["Fashion", "Heritage", "Storytelling"],
    url: "https://heritagestitch.lovable.app",
  },
];

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Creative Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            E-commerce branding, digital marketing campaigns, and video production that drives results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-background border border-border hover:border-accent/50 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
