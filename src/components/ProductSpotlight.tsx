import React from 'react';
import { ArrowRight } from 'lucide-react';

// ProductSpotlight section component
export const ProductSpotlight = () => {
  return (
    <div className="bg-white rounded-3xl w-full py-10 lg:py-18 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Main heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12 leading-snug">
          Product Spotlight
        </h2>
        
        <div className="space-y-16">
          {/* One Day Mortgage section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content: Text */}
            <div className="space-y-6">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Fast Track
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">One Day Mortgage</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Expedite your home loan journey. We streamline the process from rate lock to commitment letter in a single day,
                bypassing the weeks it typically takes with traditional lenders.
              </p>
              {/* Interactive button */}
              <div className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium px-6 py-3 rounded-full cursor-pointer transition-colors group">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            {/* Right Content: Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/2.jpg"
                alt="One Day Mortgage"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Better HELOC section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content: Image */}
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/1.jpg"
                alt="Better HELOC"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Right Content: Text */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Quick Access
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Better HELOC</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Gain fast access to cash with our Home Equity Line of Credit. Access up to 90% of your home equity in as little as 7 days,
                putting you in the driver's seat of your finances.
              </p>
              {/* Interactive button */}
              <div className="inline-flex items-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium px-6 py-3 rounded-full cursor-pointer transition-colors group">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};