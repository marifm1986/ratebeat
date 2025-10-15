import { useState } from 'react';
import { IframeModal } from './IframeModal';

export const MortgageOptionFooter = () => {
  const [isPreApprovedModalOpen, setIsPreApprovedModalOpen] = useState(false);
  const [isRateQuoteModalOpen, setIsRateQuoteModalOpen] = useState(false);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Get Pre-approved */}
          <div 
            className="group bg-white hover:bg-blue-50 border border-gray-200 hover:border-[#2c5aa0] rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
            onClick={() => setIsPreApprovedModalOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 group-hover:from-[#2c5aa0] group-hover:to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <img 
                    src="/mortage-options/icon_1.png" 
                    alt="Get Pre-approved" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2c5aa0] group-hover:text-blue-700 transition-colors mb-2">
                Get Pre-approved
              </h3>
            </div>
          </div>

          {/* Get Rate Quote */}
          <div 
            className="group bg-white hover:bg-blue-50 border border-gray-200 hover:border-[#2c5aa0] rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
            onClick={() => setIsRateQuoteModalOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-[#2c5aa0] group-hover:to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <img 
                    src="/mortage-options/icon_2.png" 
                    alt="Get Rate Quote" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2c5aa0] group-hover:text-blue-700 transition-colors mb-2">
                Get Rate Quote
              </h3>
            </div>
          </div>

          {/* Apply Now */}
          <div className="group bg-white hover:bg-blue-50 border border-gray-200 hover:border-[#2c5aa0] rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 group-hover:from-[#2c5aa0] group-hover:to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <img 
                    src="/mortage-options/icon_3.png" 
                    alt="Apply Now" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2c5aa0] group-hover:text-blue-700 transition-colors mb-2">
                Apply Now
              </h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <IframeModal
        isOpen={isPreApprovedModalOpen}
        onClose={() => setIsPreApprovedModalOpen(false)}
        iframeUrl="https://nmann-purchase-site-8566.itclix.com/"
        title="Get Pre-approved"
      />
      
      <IframeModal
        isOpen={isRateQuoteModalOpen}
        onClose={() => setIsRateQuoteModalOpen(false)}
        iframeUrl="https://nmann-rates-site-8566.itclix.com/"
        title="Get Rate Quote"
      />
    </div>
  );
};
