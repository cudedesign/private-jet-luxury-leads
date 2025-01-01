import { Phone, Mail, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const BookingSection = () => {
  const steps = [
    {
      title: "Get in Touch",
      description: "You can contact our team by phone, email, or online booking form. Please provide essential details such as your destination, preferred dates, and the number of passengers.",
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: "Customise Your Flight",
      description: "Work with our experts to choose the perfect aircraft from our fleet, tailored to your needs. We'll guide you through options for in-flight amenities and logistics.",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Confirm & Fly",
      description: "Please review and sign your personalised charter agreement, then complete your booking with payment. Your private jet will then be ready to deliver a seamless and luxurious travel experience.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-schibsted text-center mb-4">
          Booking a Private Jet Charter
        </h2>
        <h3 className="text-xl text-center text-gray-600 mb-12">
          How to Book
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gold/10 rounded-lg text-gold">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;