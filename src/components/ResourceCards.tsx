import React from 'react';
import { Home, Grid, Percent, ArrowRight, RefreshCw } from 'lucide-react';

// EducationalCards section component
export const ResourceCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Home buying",
      description: "Everything to know about buying a home",
      icon: Home,
      bgColor: "bg-red-700/80",
      hoverColor: "",
      textColor: "text-white",
      iconColor: "text-white",
      descriptionColor: "opacity-80",
      arrowBg: "bg-white/20",
      arrowColor: "opacity-60",
      shadow: "shadow-xl"
    },
    {
      id: 2,
      title: "Calculators",
      description: "Discover what's possible based on your numbers",
      icon: Grid,
      bgColor: "bg-gray-50",
      hoverColor: "hover:bg-gray-100",
      textColor: "text-gray-900",
      iconColor: "text-gray-700",
      descriptionColor: "text-gray-600",
      arrowBg: "bg-gray-200",
      arrowColor: "text-gray-400",
      shadow: ""
    },
    {
      id: 3,
      title: "Rate updates",
      description: "Get the latest about rates and what lower rates mean for you.",
      icon: Percent,
      bgColor: "bg-gray-50",
      hoverColor: "hover:bg-gray-100",
      textColor: "text-gray-900",
      iconColor: "text-gray-700",
      descriptionColor: "text-gray-600",
      arrowBg: "bg-gray-200",
      arrowColor: "text-gray-400",
      shadow: ""
    },
    {
      id: 4,
      title: "Refinancing",
      description: "Understand the ins and outs of refinancing",
      icon: RefreshCw,
      bgColor: "bg-gray-50",
      hoverColor: "hover:bg-gray-100",
      textColor: "text-gray-900",
      iconColor: "text-gray-700",
      descriptionColor: "text-gray-600",
      arrowBg: "bg-gray-200",
      arrowColor: "text-gray-400",
      shadow: ""
    }
  ];

  return (
    <div className="bg-white rounded-3xl w-full py-10 lg:py-18 shadow-lg">
      {/* Main heading */}
      <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12 leading-snug">
        Confidence comes with learning
      </h2>
      
      {/* Container for the four cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {cardData.map((card) => {
          const IconComponent = card.icon;
          return (
            <div 
              key={card.id}
              className={`${card.bgColor} ${card.hoverColor} ${card.shadow} rounded-2xl p-6 transition-all cursor-pointer group flex flex-col items-start justify-between min-h-[320px] max-w-2xl mx-auto ${card.textColor}`}
            >
              <div>
                <IconComponent className={`w-6 h-6 ${card.iconColor} mb-6`} />
                <h3 className="text-3xl font-semibold mb-2 leading-tight">{card.title}</h3>
                <p className={`text-lg ${card.descriptionColor}`}>{card.description}</p>
              </div>
              <div className="self-start mt-auto">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${card.arrowBg}`}>
                  <ArrowRight className={`w-5 h-5 ${card.arrowColor} group-hover:translate-x-1 transition-transform`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};