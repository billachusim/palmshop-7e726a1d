import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesPreview } from "@/components/landing/FeaturesPreview";
import { HardwareSection } from "@/components/landing/HardwareSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { DownloadSection } from "@/components/landing/DownloadSection";
import { ContactSection } from "@/components/landing/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesPreview />
        <HardwareSection />
        <PricingSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
