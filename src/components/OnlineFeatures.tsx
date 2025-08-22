import React from 'react';
import { Smile, FileText, Home } from 'lucide-react';

export const OnlineFeatures = () => {
  const features = [
    {
      id: 1,
      icon: Smile,
      title: "Real people, really easy.",
      description: "Talk to humans when you want — use simple online tools when you don’t.",
    },
    {
      id: 2,
      icon: FileText,
      title: "Home loans, made simpler.",
      description: "Less paperwork and eClosings are just a few ways we cut the hassle.",
    },
    {
      id: 3,
      icon: Home,
      title: "Making home more affordable.",
      description: "Buyer and homeowner programs — plus limited‑time offers — help lower costs.",
    },
  ];

  return (
    <div className="bg-white rounded-3xl w-full py-10 lg:py-18 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left: Phone / image block */}
          <div className="relative flex flex-col justify-center">
            {/* Phone mockup with constrained height */}
            <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl max-w-sm mx-auto">
              <div className="rounded-[2.5rem] overflow-hidden">
                <img
                  src="/mobile.jpg"
                  alt="Mobile app interface showcasing rates and calculators"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            </div>
            
            {/* Disclaimer text */}
            <p className="text-xs text-gray-400 text-center mt-6 max-w-xs mx-auto">
              Screen images simulated. Sequence shortened. Conditions may apply.
            </p>
          </div>

          {/* Right: Content block */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12 leading-tight">
              Online and on your side
            </h2>

            <div className="space-y-8">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.id} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Start my approval
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

