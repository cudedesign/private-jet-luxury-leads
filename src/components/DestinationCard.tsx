import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DestinationCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const DestinationCard = ({ name, description, imageUrl }: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <div className="relative h-64">
        <img
          src={imageUrl}
          alt={`${name} Skyline`}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 flex flex-col gap-4">
        <h3 className="text-xl font-schibsted font-bold text-navy">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <Button className="w-full bg-gold hover:bg-gold/90 text-white">
          Enquire about {name}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;