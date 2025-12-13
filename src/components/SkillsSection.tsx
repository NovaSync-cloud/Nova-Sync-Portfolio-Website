import { motion } from "framer-motion";
import { Palette, Video, TrendingUp, Megaphone, ShoppingBag, BarChart3 } from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "Brand Design",
    description: "Visual identity systems, logo design, and cohesive brand guidelines",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "End-to-end video creation from concept to color-graded final cut",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description: "Product photography, catalog design, and conversion-focused layouts",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Social campaigns, paid advertising, and content strategy",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven campaigns that scale brands and boost revenue",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Performance tracking, A/B testing, and optimization insights",
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Expertise & Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Full-spectrum creative capabilities from concept to execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <skill.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
