import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "E-Commerce", "Marketing", "Video"];

const projects = [
  {
    id: 1,
    title: "Luxe Beauty Brand Launch",
    category: "E-Commerce",
    description: "Complete brand identity and e-commerce growth strategy",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop",
    tags: ["Branding", "Social Media", "Email Marketing"],
  },
  {
    id: 2,
    title: "Holiday Sales Campaign",
    category: "Marketing",
    description: "Multi-channel digital marketing driving 340% ROI",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop",
    tags: ["Paid Ads", "Creative Direction", "Analytics"],
  },
  {
    id: 3,
    title: "Product Launch Video",
    category: "Video",
    description: "Cinematic product reveal with 2M+ views",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    tags: ["Video Production", "Motion Graphics", "Sound Design"],
  },
  {
    id: 4,
    title: "Fashion E-Commerce Rebrand",
    category: "E-Commerce",
    description: "Full visual identity overhaul increasing conversions by 85%",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    tags: ["UI/UX", "Photography", "Brand Strategy"],
  },
  {
    id: 5,
    title: "Social Media Ad Series",
    category: "Marketing",
    description: "Viral campaign reaching 5M+ impressions",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    tags: ["Content Creation", "Copywriting", "A/B Testing"],
  },
  {
    id: 6,
    title: "Brand Story Documentary",
    category: "Video",
    description: "Award-winning brand documentary",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    tags: ["Directing", "Editing", "Color Grading"],
  },
];

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A selection of projects showcasing e-commerce growth, marketing excellence, and creative video production.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground/70">
                    #{tag.replace(" ", "")}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
