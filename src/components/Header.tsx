import React, { useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon, UserIcon } from 'lucide-react';
export const Header = () => {
  return (
    <header className="w-full py-4 px-[48px] flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-10">
          <img
            src="/ratebeat-logo.png"
            alt="Ratebeat Logo"
            className="h-12"
          />
        </div>
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Buy
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Refinance
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Rates
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Loan options
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-6">
        <a
          href="tel:(888) 555-1234"
          className="text-gray-800 hover:text-gray-600 hidden md:flex items-center"
        >
          <span className="mr-2">(888) 555-1234</span>
        </a>
        <button className="bg-transparent border border-gray-300 rounded-md px-4 py-2 text-gray-800">
          Sign In
        </button>
      </div>
    </header>
  )
};