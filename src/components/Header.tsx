import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isBuyDropdownOpen, setIsBuyDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="w-full py-4 px-[48px] flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-10">
          <a href="/">
            <img
              src="/ratebeat-logo.png"
              alt="Ratebeat Logo"
              className="h-12"
            />
          </a>
        </div>
        <nav className="hidden md:flex space-x-8 font-medium">
          {/* Buy dropdown */}
          <div className="relative">
            <button
              className="text-gray-800 hover:text-gray-600 flex items-center gap-1"
              onClick={() => {
                setIsBuyDropdownOpen(!isBuyDropdownOpen);
                if (!isBuyDropdownOpen) {
                  setActiveSubmenu(null);
                }
              }}
              onBlur={(e) => {
                // Only close if we're not clicking within the dropdown
                if (!e.currentTarget.closest('[data-dropdown]')?.contains(e.relatedTarget as Node)) {
                  setTimeout(() => {
                    setIsBuyDropdownOpen(false);
                    setActiveSubmenu(null);
                  }, 200);
                }
              }}
            >
              Buy
              <ChevronDown className={`w-4 h-4 transition-transform ${isBuyDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isBuyDropdownOpen && (
              <div 
                className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 ${
                  activeSubmenu === 'calculators' ? 'w-[400px]' : 'w-[1000px]'
                }`}
                data-dropdown
              >
                {activeSubmenu === 'calculators' ? (
                  // Calculators Submenu - 1 Column Layout
                  <div className="p-8">
                    {/* Back navigation */}
                    <div className="mb-8">
                      <button 
                        onClick={() => setActiveSubmenu(null)}
                        className="text-gray-800 hover:text-gray-600 text-base flex items-center gap-2"
                      >
                        ← Buy a home
                      </button>
                    </div>
                    
                    {/* All calculators CTA */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-6 p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <h3 className="text-xl font-medium text-gray-900">All calculators</h3>
                        <span className="text-gray-400 text-xl">→</span>
                      </div>
                    </div>
                    
                    {/* Popular calculators */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Popular</h4>
                      <div className="space-y-2">
                        <a href="#" className="block text-gray-800 hover:text-gray-600 text-base py-2 px-4 rounded-lg hover:bg-gray-50">
                          Home affordability calculator
                        </a>
                        <a href="#" className="block text-gray-800 hover:text-gray-600 text-base py-2 px-4 rounded-lg hover:bg-gray-50">
                          Mortgage calculator
                        </a>
                        <a href="#" className="block text-gray-800 hover:text-gray-600 text-base py-2 px-4 rounded-lg hover:bg-gray-50">
                          Rent vs. buy calculator
                        </a>
                        <a href="#" className="block text-gray-800 hover:text-gray-600 text-base py-2 px-4 rounded-lg hover:bg-gray-50">
                          Amortization calculator
                        </a>
                        <a href="#" className="block text-gray-800 hover:text-gray-600 text-base py-2 px-4 rounded-lg hover:bg-gray-50">
                          Down payment calculator
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Main Buy Dropdown - 3 Column Layout
                  <div className="grid grid-cols-3 h-full">
                    {/* Left Column - Navigation */}
                    <div className="p-8 space-y-6">
                      {/* Buy a home section */}
                      <div className="mb-8">
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Buy a home</h3>
                        <div className="space-y-6">
                          <button 
                            onClick={() => setActiveSubmenu('calculators')}
                            className="block text-gray-800 hover:text-gray-600 text-lg text-left"
                          >
                            Calculators
                          </button>
                          <a href="#" className="block text-gray-800 hover:text-gray-600 text-lg">
                            Español
                          </a>
                          <a href="#" className="block text-gray-800 hover:text-gray-600 text-lg">
                            Learn
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Middle Column - Get started & Popular */}
                    <div className="p-8 border-l border-gray-200">
                      {/* Get started section */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-medium text-gray-900">Get started</h3>
                          <span className="text-gray-400 text-xl">→</span>
                        </div>
                      </div>
                      
                      {/* Popular section */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-6">Popular</h4>
                        <div className="space-y-6">
                          <a href="#" className="block text-gray-800 hover:text-gray-600 text-lg">
                            Purchase loan options
                          </a>
                          <a href="#" className="block text-gray-800 hover:text-gray-600 text-lg">
                            VA & military purchase resources
                          </a>
                          <a href="#" className="block text-gray-800 hover:text-gray-600 text-lg">
                            Chat
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - RentRewards */}
                    <div className="bg-gray-50 p-8 rounded-r-lg border-l border-gray-200">
                      <div className="h-full flex flex-col">
                        <div className="mb-6">
                          <img
                            src="/hero.webp"
                            alt="For renters"
                            className="w-full h-48 rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="inline-block bg-red-500 text-white px-3 py-2 rounded text-sm font-medium mb-4">
                            For renters
                          </div>
                          <h4 className="font-medium text-gray-900 text-xl mb-3 leading-tight">
                            Turn your monthly rent into a head start on a home of your own
                          </h4>
                          <a href="#" className="text-gray-600 text-base underline hover:text-gray-800">
                            Learn about RentRewards
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
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