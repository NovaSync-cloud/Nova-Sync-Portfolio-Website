import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import VideoShowcase from "@/components/VideoShowcase";
import MoreWork from "@/components/MoreWork";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nova Sync | Bosede Precious Olorunda - Web Design & Conversion Specialist</title>
        <meta 
          name="description" 
          content="Nova Sync builds high-converting websites, e-commerce platforms, sales funnels, and CRM automation. Transform traffic into customers with conversion-focused web design." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        <HeroSection />
        <PortfolioGrid />
        <VideoShowcase />
        <MoreWork />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
