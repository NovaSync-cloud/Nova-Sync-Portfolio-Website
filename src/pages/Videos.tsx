import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";
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
  },
  {
    id: 2,
    title: "Instagram Portfolio Design",
    description: "Creative portfolio design inspired by Instagram aesthetics with modern UI elements.",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    video: "/videos/instagram-portfolio.mp4",
    category: "Social Media",
    duration: "1:45",
  },
  {
    id: 3,
    title: "Digital Craft Studio",
    description: "Professional studio website with creative animations and premium feel.",
    thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=450&fit=crop",
    video: "/videos/digital-craft-studio.mp4",
    category: "Studio",
    duration: "3:12",
  },
  {
    id: 4,
    title: "Portfolio Website v2",
    description: "Second iteration of portfolio design with enhanced user experience.",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=450&fit=crop",
    video: "/videos/portfolio-website-2.mp4",
    category: "Web Design",
    duration: "2:18",
  },
  {
    id: 5,
    title: "Project Recording",
    description: "Behind-the-scenes look at the development process and design decisions.",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop",
    video: "/videos/project-recording.mp4",
    category: "Process",
    duration: "4:05",
  },
];

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);

  return (
    <>
      <Helmet>
        <title>Video Showcase | Nova Sync - See Our Projects in Action</title>
        <meta name="description" content="Watch video walkthroughs of Nova Sync's web design and development projects. See how we create high-converting digital experiences." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-card via-background to-card" />
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8"
              >
                <Play className="w-12 h-12 text-accent" />
              </motion.div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
                Video <span className="text-accent">Showcase</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Watch detailed walkthroughs of my projects and see how I approach 
                web design and development.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Video */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-border group cursor-pointer"
              onClick={() => setActiveVideo(videos[0])}
            >
              <div className="aspect-video">
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
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                    <Play className="w-10 h-10 text-accent-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-3">
                  Featured
                </span>
                <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                  {videos[0].title}
                </h3>
                <p className="text-muted-foreground">{videos[0].description}</p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Video Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">
                All <span className="text-accent">Videos</span>
              </h2>
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
                  <div className="relative rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all">
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
                      <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 text-accent-foreground ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 rounded-full text-foreground text-sm font-medium">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6 bg-card">
                      <span className="inline-block px-2 py-0.5 bg-accent/20 text-accent text-xs font-medium rounded-full mb-2">
                        {video.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{video.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Video Modal */}
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo.video}
                className="w-full rounded-2xl border border-border"
                controls
                autoPlay
              />
              <div className="mt-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {activeVideo.title}
                </h3>
                <p className="text-muted-foreground">{activeVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        <Footer />
      </main>
    </>
  );
};

export default Videos;
