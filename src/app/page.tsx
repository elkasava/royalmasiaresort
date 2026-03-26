import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CabanasSection from "@/components/CabanasSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import PricingSection from "@/components/PricingSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CabanasSection />
        <FacilitiesSection />
        <ActivitiesSection />
        <PricingSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
