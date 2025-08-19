import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="bg-white py-6 lg:py-12 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 items-stretch min-h-[400px] lg:min-h-[600px]">
          <div
            className="col-span-1 lg:col-span-2 flex flex-col justify-center space-y-6 lg:space-y-10 rounded-3xl p-6 lg:p-8"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <p className="text-sm text-green-600 font-medium">Rate Shopping?</p>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Get your low rate
            </h1>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-full">
              <div className="space-y-4 flex-1">
                <div className="bg-white rounded-2xl p-6 border-2 border-transparent hover:border-gray-300 transition-all cursor-pointer group shadow-sm">
                  <div className="flex items-center justify-between lg:justify-between">
                    <span className="text-lg font-medium text-gray-900">I'm buying</span>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-colors">
                      <ArrowRight className="h-6 w-6 text-gray-600" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border-2 border-transparent hover:border-gray-300 transition-all cursor-pointer group shadow-sm">
                  <div className="flex items-center justify-between lg:justify-between">
                    <div>
                      <div className="text-lg font-medium text-gray-900">Estimate my monthly</div>
                      <div className="text-lg font-medium text-gray-900">payment</div>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-colors">
                      <ArrowRight className="h-6 w-6 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-6 h-full border-2 border-transparent hover:border-gray-300 transition-all cursor-pointer group flex flex-col justify-between shadow-sm">
                  <div className="text-lg font-medium text-gray-900">See today's rates</div>
                  <div className="flex justify-end lg:justify-start lg:items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-colors lg:mr-3">
                      <ArrowRight className="h-6 w-6 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:col-span-1 relative lg:ml-8 items-center h-full">
            <div className="rounded-3xl overflow-hidden w-full h-full drop-shadow-xl">
              <img 
                src="/hero.webp"
                alt="Woman holding wicker basket in front of house" 
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
