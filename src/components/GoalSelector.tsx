import React from 'react';
import { Home, Percent, CircleDollarSign, RefreshCcwDot } from 'lucide-react';

export const GoalSelector = () => {
  const cardsData = [
    {
      id: 1,
      Icon: Percent,
      title: "See today's rates",
      bgColor: "#f4f5f7",
      hoverColor: "#edf1ff",
      textColor: "#21273d"
    },
    {
      id: 2,
      Icon: CircleDollarSign,
      title: "Turn equity into cash",
      bgColor: "#f8f4f3",
      hoverColor: "#f4e4da",
      textColor: "#732612"
    },
    {
      id: 3,
      Icon: Home,
      title: "Buy a home and save",
      bgColor: "#f8f8f1",
      hoverColor: "#f0eed9",
      textColor: "#373620"
    },
    {
      id: 4,
      Icon: RefreshCcwDot,
      title: "Refinance with ease",
      bgColor: "#f5f3f4",
      hoverColor: "#fbf0f6",
      textColor: "#441327"
    }
  ];

  return (
    <div className="bg-white rounded-3xl px-10 py-10 lg:px-28 lg:py-18 shadow-lg">
      <h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-900 mb-8 lg:mb-12">
        What's your goal?
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card) => (
          <div 
            key={card.id}
            className="rounded-2xl p-6 transition-all cursor-pointer group flex flex-col items-start space-y-6" 
            style={{ backgroundColor: card.bgColor }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = card.hoverColor} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = card.bgColor}
          >
            <card.Icon className="w-6 h-6" style={{ color: card.textColor }} />
            <p className="text-lg font-medium leading-tight" style={{ color: card.textColor }}>
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
