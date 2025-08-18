import React, { useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon, UserIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-orange-500">
                RateBeat
              </span>
            </div>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Home Purchase
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Refinance
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Mortgage Types
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Learning Center
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About Us
              </a>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              <PhoneIcon className="h-4 w-4 mr-1" />
              <span>(888) 555-1234</span>
            </a>
            <a href="#" className="ml-6 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50">
              <UserIcon className="h-4 w-4 mr-1" />
              Sign In
            </a>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Home Purchase
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Refinance
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Mortgage Types
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Learning Center
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              About Us
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <a href="#" className="flex items-center text-gray-700 text-base font-medium">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>(888) 555-1234</span>
              </a>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl border border-gray-300">
                Sign In
              </a>
            </div>
          </div>
        </div>}
    </header>;
};