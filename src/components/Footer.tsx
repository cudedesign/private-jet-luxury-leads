const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-schibsted text-xl mb-2">Private Jet London</h3>
            <p className="text-sm text-gray-300">Luxury air travel at its finest</p>
          </div>
          <div className="text-sm text-gray-300">
            <p>&copy; {currentYear} Private Jet London. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;