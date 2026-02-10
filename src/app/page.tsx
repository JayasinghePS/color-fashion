import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-default)]">
      <Navbar />
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="about-section">
        <AboutSection />
      </div>
      <div id="services-section">
        <ServicesSection />
      </div>
      <div id="contact-section">
        <GetInTouchSection />
      </div>
      <Footer />
    </main>
  );
}
