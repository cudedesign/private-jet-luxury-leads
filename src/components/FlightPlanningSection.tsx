const FlightPlanningSection = () => {
  const steps = [
    {
      title: "Choose Your Destination and Dates",
      description: "Begin by deciding where and when you'd like to fly. Whether you're planning a business trip to Paris or a leisure getaway to Ibiza, knowing your destination and schedule allows us to tailor your experience from the start."
    },
    {
      title: "Select Your Aircraft and Amenities",
      description: "Work with our team to choose the ideal aircraft type for your journey. From light jets for short distances to large jets for maximum luxury and space, we'll help you select the right option. You can also customise your flight with amenities like gourmet catering, Wi-Fi, or pet-friendly setups."
    },
    {
      title: "Consider the Details",
      description: "Together, we'll plan the specifics of your flight, including duration, potential weather considerations, and the best route to maximise efficiency. Collaborating with our experts ensures your journey is seamless and stress-free from takeoff to landing."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-schibsted font-bold text-navy text-center mb-6">
          Private Jet Charter Flight Planning
        </h2>
        <h3 className="text-xl md:text-2xl font-schibsted text-navy text-center mb-12">
          How to Plan Your Flight
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-schibsted font-bold text-navy mb-4">
                {step.title}
              </h4>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightPlanningSection;