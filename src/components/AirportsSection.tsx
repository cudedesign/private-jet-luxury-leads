const AirportsSection = () => {
  const airports = [
    {
      name: "London City Airport (LCY)",
      description: "London City Airport is a top choice for private jet charter flights. It is just 8.7 miles from central London and offers stunning views of the Thames River. The airport is easily accessible by car or taxi, so you can avoid the crowds of larger airports for a smoother experience.",
      imageUrl: "/lovable-uploads/3f3e43ac-36d7-42c4-b2e3-bdeb19ca3f1d.png"
    },
    {
      name: "Biggin Hill Airport",
      description: "Located 12 miles from Central London, Biggin Hill Airport is a favourite for private aviation. With modern facilities and quick access to the city, it's ideal for business aviation and personal travel.",
      imageUrl: "/lovable-uploads/3f3e43ac-36d7-42c4-b2e3-bdeb19ca3f1d.png"
    },
    {
      name: "Farnborough Airport",
      description: "Farnborough Airport, located in Hampshire, offers a premier experience for private jet passengers. It is renowned for exceptional service, privacy, and quick access to London.",
      imageUrl: "/lovable-uploads/3f3e43ac-36d7-42c4-b2e3-bdeb19ca3f1d.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-schibsted font-bold text-navy text-center mb-12">
          London Airports for Private Jets
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {airports.map((airport) => (
            <div 
              key={airport.name} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={airport.imageUrl}
                  alt={airport.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-schibsted font-bold text-navy mb-3">
                  {airport.name}
                </h3>
                <p className="text-gray-600">
                  {airport.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirportsSection;