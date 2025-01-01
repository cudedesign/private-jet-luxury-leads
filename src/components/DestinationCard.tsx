import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-gold hover:bg-gold/90 text-white">
              Enquire about {name}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-schibsted text-navy">
                Enquire about {name}
              </DialogTitle>
            </DialogHeader>
            <ContactForm />
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;