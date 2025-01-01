import { Card, CardContent } from "@/components/ui/card";

const AirportsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-schibsted font-bold text-navy mb-8 text-center">
          London Private Jet Airports
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-4">
              <img
                src="/lovable-uploads/5d0857f1-76de-46d3-9bba-08c9a66c8291.png"
                alt="Luxurious private jet interior with a passenger in a yellow suit working on their phone, showcasing premium business travel accommodations"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-schibsted font-bold text-navy mb-2">London City Airport</h3>
              <p className="text-gray-600">Closest to central London, perfect for business travelers.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <img
                src="/lovable-uploads/d6029bf7-9b09-4b33-bd8b-a026143fefbd.png"
                alt="Interior view of a private jet cabin showing two luxurious leather seats with quilted white cushions, demonstrating premium comfort"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-schibsted font-bold text-navy mb-2">Farnborough Airport</h3>
              <p className="text-gray-600">Dedicated private jet airport with premium facilities.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <img
                src="/lovable-uploads/b5261617-be42-4844-8767-d1fcbc77115b.png"
                alt="Private jet cabin interior showing two passengers engaged in conversation, highlighting the spacious and elegant environment"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-schibsted font-bold text-navy mb-2">Luton Airport</h3>
              <p className="text-gray-600">Popular choice for private aviation with excellent connections.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AirportsSection;