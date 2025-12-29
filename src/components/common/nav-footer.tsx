const NavFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Brand Section */}
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-bold">POC WebAPI BLE</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
            Proof of Concept for Web Bluetooth API integration. Explore
            Bluetooth Low Energy device connectivity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default NavFooter;
