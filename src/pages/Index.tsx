import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import VideoShowcase from "@/components/VideoShowcase";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Creative Portfolio | E-Commerce, Marketing & Video Production</title>
        <meta 
          name="description" 
          content="Creative portfolio showcasing e-commerce branding, digital marketing campaigns, and professional video editing projects. View my work in brand growth and visual storytelling." 
        />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <HeroSection />
        <PortfolioGrid />
        <VideoShowcase />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
