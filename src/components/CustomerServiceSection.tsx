import { HeartHandshake, Calendar, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const CustomerServiceSection = () => {
  const services = [
    {
      title: "Personalised Attention",
      description: "Personalised attention from experienced staff.",
      icon: <HeartHandshake className="w-6 h-6" />
    },
    {
      title: "Flexible Options",
      description: "Flexible flight options tailored to your needs.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Safety & Luxury",
      description: "Luxury amenities and an uncompromising focus on safety.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-schibsted text-center mb-12">
          Private Jet Charter Customer Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gold/10 rounded-lg text-gold">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerServiceSection;