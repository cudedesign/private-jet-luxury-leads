import { ShieldCheck, Settings, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const SafetySection = () => {
  const features = [
    {
      title: "Rigorous maintenance and inspection protocols",
      description: "Regular maintenance checks and thorough inspections ensure aircraft safety.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "State-of-the-art avionics and emergency equipment",
      description: "Advanced navigation systems and comprehensive safety equipment.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Experienced crews prioritising safety and comfort",
      description: "Highly trained pilots and crew members dedicated to your safety.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-schibsted text-center mb-4">
          Private Jet Charter Safety and Security
        </h2>
        <h3 className="text-xl text-center text-gray-600 mb-12">
          Safety Features and Protocols
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gold/10 rounded-lg text-gold">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;