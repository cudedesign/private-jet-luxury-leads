import ContactForm from "@/components/ContactForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/3f3e43ac-36d7-42c4-b2e3-bdeb19ca3f1d.png"
          alt="Private Jet on Tarmac"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-schibsted font-bold leading-tight">
              Private Jet London: Your Guide to Luxury Air Travel Options
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Looking for a bespoke travel experience? Private jet charter services in London provide unparalleled convenience, luxury, and flexibility. Whether flying for business or leisure, explore premium options for private jets to and from London, an exciting city filled with rich cultural heritage and iconic landmarks.
            </p>
          </div>
          <div className="md:ml-auto w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;