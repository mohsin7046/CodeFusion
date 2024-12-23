import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* <img
              className="h-8 w-auto"
              src="/logo.png"
              alt="Rate it"
            /> */}
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Code Fusion
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600"
            >
              How it works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </a>
            <a href="#importance" className="text-gray-600 hover:text-blue-600">
              Why it’s important
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              About us
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
              Login
            </button>
            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Sign up
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#how-it-works"
              className="block text-gray-600 hover:text-blue-600"
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="block text-gray-600 hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href="#importance"
              className="block text-gray-600 hover:text-blue-600"
            >
              Why it’s important
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-blue-600"
            >
              About us
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-blue-600"
            >
              Contact
            </a>
          </div>
          <div className="px-4 py-2 flex space-x-4">
            <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
              Login
            </button>
            <button className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
