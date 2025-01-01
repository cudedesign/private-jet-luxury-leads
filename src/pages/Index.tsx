import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

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

      {/* Hero Section */}
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

      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-schibsted font-bold text-navy text-center mb-12">
            Private Jet Destinations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* New York */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <img
                  src="/lovable-uploads/4dcb63bc-ba9a-4de0-b487-8fd671d967aa.png"
                  alt="New York Skyline"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-schibsted font-bold text-navy mb-3">New York</h3>
                <p className="text-gray-600">
                  Fly from London to New York with ease and sophistication. Experience unmatched comfort on a private jet, save time, and arrive refreshed in the heart of the Big Apple.
                </p>
              </CardContent>
            </Card>

            {/* Dubai */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <img
                  src="/lovable-uploads/b58a3f7d-6500-4573-b4ae-40f58bc83c11.png"
                  alt="Dubai Skyline"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-schibsted font-bold text-navy mb-3">Dubai</h3>
                <p className="text-gray-600">
                  Reach Dubai, the city of luxury, in style. Enjoy direct private jet charters from London, designed to elevate your travel experience to this opulent destination.
                </p>
              </CardContent>
            </Card>

            {/* Las Vegas */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <img
                  src="/lovable-uploads/f4c85c9f-c410-4573-a1de-4571b56cc52e.png"
                  alt="Las Vegas Skyline"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-schibsted font-bold text-navy mb-3">Las Vegas</h3>
                <p className="text-gray-600">
                  Head to the world's entertainment capital with a direct private jet flight from London. Enjoy a seamless journey packed with luxury and convenience.
                </p>
              </CardContent>
            </Card>

            {/* France */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <img
                  src="/lovable-uploads/b423ed93-6c0e-4f08-a83a-258e7f019c53.png"
                  alt="Paris Skyline"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-schibsted font-bold text-navy mb-3">France</h3>
                <p className="text-gray-600">
                  Travel from London to Paris effortlessly. A private jet charter ensures a quick, stylish trip to the City of Light, perfect for business or leisure.
                </p>
              </CardContent>
            </Card>

            {/* Ibiza */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-64">
                <img
                  src="/lovable-uploads/ca4209a2-7cb8-4daf-992b-87763be37bfc.png"
                  alt="Ibiza Coast"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-schibsted font-bold text-navy mb-3">Ibiza</h3>
                <p className="text-gray-600">
                  Make your escape to Ibiza unforgettable. Book a private jet for an exclusive, comfortable journey to this iconic island destination.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;