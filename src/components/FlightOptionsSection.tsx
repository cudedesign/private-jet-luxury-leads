import { Plane, Users, Timer, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const FlightOptionsSection = () => {
  const options = [
    {
      title: "Light Jets",
      description: "Ideal for short trips and small groups.",
      icon: <Plane className="w-6 h-6" />
    },
    {
      title: "Midsize Jets",
      description: "Perfect for medium-range flights.",
      icon: <Timer className="w-6 h-6" />
    },
    {
      title: "Super Midsize Jets",
      description: "Added space for long-range comfort.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Large Jets",
      description: "Luxury travel for larger groups.",
      icon: <Crown className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-schibsted text-center mb-12">
          Private Jet Charter Flight Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gold/10 rounded-lg text-gold">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightOptionsSection;