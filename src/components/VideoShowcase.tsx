import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, X } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Digital Portfolio Showcase",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=450&fit=crop",
    category: "Portfolio",
    videoUrl: "/videos/portfolio-website-1.mp4",
  },
  {
    id: 2,
    title: "Instagram Portfolio Video",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=450&fit=crop",
    category: "Social Media",
    videoUrl: "/videos/instagram-portfolio.mp4",
  },
  {
    id: 3,
    title: "Project Recording",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop",
    category: "Case Study",
    videoUrl: "/videos/project-recording.mp4",
  },
  {
    id: 4,
    title: "Digital Craft Studio",
    thumbnail: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=450&fit=crop",
    category: "Branding",
    videoUrl: "/videos/digital-craft-studio.mp4",
  },
  {
    id: 5,
    title: "Portfolio Website 2",
    thumbnail: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=800&h=450&fit=crop",
    category: "Web Design",
    videoUrl: "/videos/portfolio-website-2.mp4",
  },
];

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = (videoUrl: string) => {
    setActiveVideo(videoUrl);
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={() => handlePlayVideo(videos[0].videoUrl)}
          className="relative aspect-video rounded-3xl overflow-hidden mb-8 group cursor-pointer"
        >
          <img
            src={videos[0].thumbnail}
            alt={videos[0].title}
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
            <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground">
              {videos[0].title}
            </h3>
            <p className="text-muted-foreground mt-2">{videos[0].category}</p>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.slice(1).map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handlePlayVideo(video.videoUrl)}
              className="group cursor-pointer"
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
              </div>
              <span className="text-xs text-accent font-medium">{video.category}</span>
              <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                {video.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
          onClick={handleCloseVideo}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 p-2 text-foreground hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              ref={videoRef}
              src={activeVideo}
              className="w-full h-full rounded-2xl bg-card"
              controls
              autoPlay
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            <button
              onClick={togglePlayPause}
              className="absolute bottom-4 left-4 p-3 rounded-full bg-accent/90 text-accent-foreground hover:bg-accent transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" fill="currentColor" />}
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoShowcase;
