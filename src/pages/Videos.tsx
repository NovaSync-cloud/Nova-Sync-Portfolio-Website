import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Eye, Calendar, Sparkles, Video, Film, Clapperboard } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const videos = [
  {
    id: 1,
    title: "Portfolio Website Showcase",
    description: "A complete walkthrough of a modern portfolio website design with smooth animations and conversion-focused layout.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    video: "/videos/portfolio-website-1.mp4",
    category: "Web Design",
    duration: "2:34",
    views: "2.4K",
    date: "Dec 2024",
  },
  {
    id: 2,
    title: "Instagram Portfolio Design",
    description: "Creative portfolio design inspired by Instagram aesthetics with modern UI elements.",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    video: "/videos/instagram-portfolio.mp4",
    category: "Social Media",
    duration: "1:45",
    views: "1.8K",
    date: "Dec 2024",
  },
  {
    id: 3,
    title: "Digital Craft Studio",
    description: "Professional studio website with creative animations and premium feel.",
    thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=450&fit=crop",
    video: "/videos/digital-craft-studio.mp4",
    category: "Studio",
    duration: "3:12",
    views: "3.1K",
    date: "Nov 2024",
  },
  {
    id: 4,
    title: "Portfolio Website v2",
    description: "Second iteration of portfolio design with enhanced user experience.",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=450&fit=crop",
    video: "/videos/portfolio-website-2.mp4",
    category: "Web Design",
    duration: "2:18",
    views: "2.1K",
    date: "Nov 2024",
  },
  {
    id: 5,
    title: "Project Recording",
    description: "Behind-the-scenes look at the development process and design decisions.",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop",
    video: "/videos/project-recording.mp4",
    category: "Process",
    duration: "4:05",
    views: "1.5K",
    date: "Oct 2024",
  },
];

const stats = [
  { label: "Videos Created", value: "50+", icon: Video },
  { label: "Total Views", value: "25K+", icon: Eye },
  { label: "Projects Showcased", value: "100+", icon: Film },
];

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <Helmet>
        <title>Video Showcase | Nova Sync - See Our Projects in Action</title>
        <meta name="description" content="Watch video walkthroughs of Nova Sync's web design and development projects. See how we create high-converting digital experiences." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Cinematic Hero with Video Background */}
        <section className="relative h-[80vh] overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              ref={heroVideoRef}
              src="/videos/digital-craft-studio.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          </div>
          
          {/* Animated Overlay Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm mb-8"
                >
                  <Clapperboard className="w-5 h-5 text-accent" />
                  <span className="text-accent font-medium">Digital Portfolio Showcase</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-8"
                >
                  Projects in
                  <span className="text-accent block">Motion</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12"
                >
                  Experience the craft behind every project. Watch detailed walkthroughs 
                  and see conversion-focused design in action.
                </motion.p>
                
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  onClick={() => setActiveVideo(videos[0])}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative flex items-center gap-4 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg group-hover:scale-105 transition-transform">
                    <Play className="w-6 h-6" />
                    Watch Featured Video
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-t from-card to-transparent backdrop-blur-sm"
          >
            <div className="container mx-auto px-6">
              <div className="flex justify-center md:justify-start gap-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <stat.icon className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Featured Video Section */}
        <section className="py-24 bg-card relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
                Featured
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Latest <span className="text-accent">Showcase</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border-2 border-accent/20 group cursor-pointer"
              onClick={() => setActiveVideo(videos[0])}
            >
              <div className="aspect-video relative">
                <video
                  src={videos[0].video}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-28 h-28 rounded-full bg-accent flex items-center justify-center shadow-2xl shadow-accent/50"
                  >
                    <Play className="w-12 h-12 text-accent-foreground ml-1" />
                  </motion.div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                    Featured
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Eye className="w-4 h-4" />
                    {videos[0].views} views
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {videos[0].date}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {videos[0].title}
                </h3>
                <p className="text-muted-foreground text-lg max-w-2xl">{videos[0].description}</p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Video Grid */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[200px] -translate-y-1/2" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                All <span className="text-accent">Videos</span>
              </h2>
              <div className="flex gap-2">
                {["All", "Web Design", "Social Media", "Process"].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-card text-muted-foreground hover:text-foreground border border-border hover:border-accent/50 transition-all"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {videos.slice(1).map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setActiveVideo(video)}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all bg-card">
                    <div className="aspect-video relative">
                      <video
                        src={video.video}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/5 transition-colors flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
                        >
                          <Play className="w-7 h-7 text-accent-foreground ml-0.5" />
                        </motion.div>
                      </div>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 rounded-full text-foreground text-sm font-medium backdrop-blur-sm">
                        {video.category}
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 rounded-full text-foreground text-sm font-medium backdrop-blur-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {video.views}
                        </span>
                        <span>{video.date}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{video.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Create Your <span className="text-accent">Showcase</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Let's build a website that's worth showcasing. Start your project today.
              </p>
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setActiveVideo(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 right-6 w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors z-10"
                onClick={() => setActiveVideo(null)}
              >
                <X className="w-7 h-7" />
              </motion.button>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src={activeVideo.video}
                  className="w-full rounded-2xl border-2 border-accent/20 shadow-2xl"
                  controls
                  autoPlay
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                      {activeVideo.category}
                    </span>
                    <span className="text-muted-foreground">{activeVideo.duration}</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-foreground mb-3">
                    {activeVideo.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">{activeVideo.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <Footer />
      </main>
    </>
  );
};

export default Videos;
