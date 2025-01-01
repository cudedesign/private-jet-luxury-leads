import { Landmark, Building, Trees, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const LuxuryTravelSection = () => {
  const destinations = [
    {
      title: "Iconic landmarks",
      description: "Buckingham Palace, National History Museum, Tower Bridge, Big Ben, and Westminster Abbey.",
      icon: <Landmark className="w-6 h-6" />
    },
    {
      title: "Cultural gems",
      description: "British Museum, National Gallery, and fascinating museums.",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Green escapes",
      description: "Hyde Park, St James's Park, and Regent's Park.",
      icon: <Trees className="w-6 h-6" />
    },
    {
      title: "Shopping and dining",
      description: "Explore Bond Street, Mayfair, and the West End.",
      icon: <ShoppingBag className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-schibsted text-center mb-4">
          Luxury Travel in London
        </h2>
        <h3 className="text-xl text-center text-gray-600 mb-12">
          Popular Tourist Destinations and Experiences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gold/10 rounded-lg text-gold">
                    {destination.icon}
                  </div>
                  <CardTitle className="text-xl">{destination.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {destination.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryTravelSection;