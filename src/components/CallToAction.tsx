import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="bg-navy text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-schibsted font-bold mb-6">
          Ready to Experience Luxury Air Travel?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Contact us today to plan your private jet journey. Our team is ready to create your perfect flight experience.
        </p>
        <Button 
          size="lg"
          className="bg-gold hover:bg-gold/90 text-navy font-semibold gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Start Planning Your Journey
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;