import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Launch Catalyst Video",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=450&fit=crop",
    duration: "2:45",
    category: "Product Launch",
    url: "https://launch-catalyst-video.netlify.app",
  },
  {
    id: 2,
    title: "Brand Heart Documentary",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop",
    duration: "4:30",
    category: "Documentary",
    url: "https://brandheartdocumentry.netlify.app",
  },
  {
    id: 3,
    title: "Holiday Revenue Campaign",
    thumbnail: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=450&fit=crop",
    duration: "1:15",
    category: "Campaign",
    url: "https://holidayrevenuerocket.netlify.app",
  },
  {
    id: 4,
    title: "Aura Cartel Experience",
    thumbnail: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=800&h=450&fit=crop",
    duration: "3:20",
    category: "Brand Experience",
    url: "https://aura-cartel-experience.netlify.app",
  },
];

const VideoShowcase = () => {
  return (
    <section id="videos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
            Video Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Video Editing Showcase
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From quick social cuts to full production campaigns — compelling video content that converts.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.a
          href="https://brandheartdocumentry.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video rounded-3xl overflow-hidden mb-8 group cursor-pointer block"
        >
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&h=900&fit=crop"
            alt="Featured video"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center shadow-glow"
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground ml-1" fill="currentColor" />
            </motion.div>
          </div>
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <span className="inline-block px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium rounded-full mb-3">
              Featured Project
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground flex items-center gap-3">
              Brand Heart Documentary
              <ExternalLink className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-muted-foreground mt-2">Award-winning brand documentary • 4:30</p>
          </div>
        </motion.a>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center">
                    <Play className="w-5 h-5 text-accent-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-background/80 backdrop-blur-sm text-foreground text-xs rounded">
                  {video.duration}
                </span>
              </div>
              <span className="text-xs text-accent font-medium">{video.category}</span>
              <h4 className="font-medium text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                {video.title}
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
