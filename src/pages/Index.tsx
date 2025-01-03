import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import AirportsSection from "@/components/AirportsSection";
import FlightPlanningSection from "@/components/FlightPlanningSection";
import FlightOptionsSection from "@/components/FlightOptionsSection";
import CustomerServiceSection from "@/components/CustomerServiceSection";
import BookingSection from "@/components/BookingSection";
import CallToAction from "@/components/CallToAction";
import LuxuryTravelSection from "@/components/LuxuryTravelSection";
import SafetySection from "@/components/SafetySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-schibsted text-2xl md:text-3xl">Private Jet London</h1>
        <a href="mailto:contact@private-jet-london.com" className="text-white hover:text-gold transition-colors">
          contact@private-jet-london.com
        </a>
      </header>

      <HeroSection />
      <DestinationsSection />
      <FlightOptionsSection />
      <CustomerServiceSection />
      <BookingSection />
      <AirportsSection />
      <FlightPlanningSection />
      <CallToAction />
      <LuxuryTravelSection />
      <SafetySection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;