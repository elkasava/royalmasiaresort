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
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import BookingWidget from "@/components/BookingWidget";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <ScrollReveal />
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
      <BookingWidget />
    </>
  );
}
