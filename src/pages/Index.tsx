import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import VideoShowcase from "@/components/VideoShowcase";
import ServicesSection from "@/components/ServicesSection";
import MoreWork from "@/components/MoreWork";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
        <ServicesSection />
        <MoreWork />
        <CaseStudiesSection />
        <AboutSection />
        <TestimonialsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
