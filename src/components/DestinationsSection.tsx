import DestinationCard from "./DestinationCard";

const destinations = [
  {
    name: "New York",
    description: "Fly from London to New York with ease and sophistication. Experience unmatched comfort on a private jet, save time, and arrive refreshed in the heart of the Big Apple.",
    imageUrl: "/lovable-uploads/4dcb63bc-ba9a-4de0-b487-8fd671d967aa.png"
  },
  {
    name: "Dubai",
    description: "Reach Dubai, the city of luxury, in style. Enjoy direct private jet charters from London, designed to elevate your travel experience to this opulent destination.",
    imageUrl: "/lovable-uploads/b58a3f7d-6500-4573-b4ae-40f58bc83c11.png"
  },
  {
    name: "Las Vegas",
    description: "Head to the world's entertainment capital with a direct private jet flight from London. Enjoy a seamless journey packed with luxury and convenience.",
    imageUrl: "/lovable-uploads/f4c85c9f-c410-4573-a1de-4571b56cc52e.png"
  },
  {
    name: "France",
    description: "Travel from London to Paris effortlessly. A private jet charter ensures a quick, stylish trip to the City of Light, perfect for business or leisure.",
    imageUrl: "/lovable-uploads/b423ed93-6c0e-4f08-a83a-258e7f019c53.png"
  },
  {
    name: "Ibiza",
    description: "Make your escape to Ibiza unforgettable. Book a private jet for an exclusive, comfortable journey to this iconic island destination.",
    imageUrl: "/lovable-uploads/ca4209a2-7cb8-4daf-992b-87763be37bfc.png"
  }
];

const DestinationsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-schibsted font-bold text-navy text-center mb-12">
          Private Jet Destinations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              name={destination.name}
              description={destination.description}
              imageUrl={destination.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;