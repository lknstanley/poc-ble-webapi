import { useState } from "react";
import { Link, NavLink } from "react-router";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/scanner", label: "Scanner", icon: "📱" },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
              onClick={closeMenu}
            >
              Bluetooth WebAPI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "bg-blue-100 text-blue-700 border-b-2 border-blue-700"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`
                  }
                >
                  <span>{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center gap-3 ${
                  isActive
                    ? "bg-blue-100 text-blue-700 border-l-4 border-blue-700"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
