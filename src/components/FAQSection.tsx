import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-schibsted font-bold text-navy mb-8">Private Jet Charter FAQs</h2>
        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="cost">
                <AccordionTrigger className="text-lg font-semibold">
                  What is the cost of a private jet charter flight?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  The cost of chartering a private jet can vary significantly based on several factors. The primary determinants include the aircraft type, the distance and duration of your journey, the number of passengers, and the specific services or amenities requested. Also, fluctuating fuel prices, airport landing fees, and crew expenses can impact the final cost. For instance, a short trip on a light jet may cost a few thousand pounds, while a long-haul flight on a large jet can range into tens of thousands. To get a precise figure tailored to your trip, it's best to request a personalised quote from a trusted private jet charter provider.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pets">
                <AccordionTrigger className="text-lg font-semibold">
                  Can I bring pets on board?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Many private jets are designed with pet-friendly accommodations to ensure your furry companions travel comfortably. When booking, you must notify the charter company about your pet to confirm the aircraft's pet policies and any requirements for carriers or restraints. Some jets even offer specialised seating or additional pet amenities, ensuring safety and comfort throughout the flight. Whether flying with a dog, cat, or other small animal, a private jet charter makes travelling with pets stress-free. You can enjoy their company without compromising on luxury.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="amenities">
                <AccordionTrigger className="text-lg font-semibold">
                  What amenities are available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Private jets have various luxury amenities designed to enhance the travel experience. For long-haul flights, passengers can enjoy plush, ergonomic seating that transforms into beds, state-of-the-art entertainment systems, and in-flight Wi-Fi to stay connected. Gourmet catering is a hallmark of private jet travel, offering a personalised menu with fine wines, spirits, and high-end cuisine. Additional amenities may include private lavatories, ample luggage space, and, sometimes, conference facilities for business meetings. Your flight can be tailored with bespoke options to meet specific needs, creating a seamless and enjoyable journey.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;