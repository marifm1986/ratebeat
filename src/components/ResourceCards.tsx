import React from 'react';
import { Home, Grid, Percent, ArrowRight, RefreshCw } from 'lucide-react';

export const ResourceCards = () => {
  const cardData = [
    {
      id: 1,
      title: 'Home buying',
      description: 'Everything to know about buying a home',
      icon: Home,
      bgColor: 'bg-red-700/80',
      hoverColor: 'hover:bg-red-700',
      textColor: 'text-white',
      iconColor: 'text-white',
      descriptionColor: 'text-white/80',
      arrowBg: 'bg-white/20',
      arrowColor: 'text-white/70',
      shadow: 'shadow-xl',
    },
    {
      id: 2,
      title: 'Calculators',
      description: "Discover what's possible based on your numbers",
      icon: Grid,
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:bg-gray-100',
      textColor: 'text-gray-900',
      iconColor: 'text-gray-700',
      descriptionColor: 'text-gray-600',
      arrowBg: 'bg-gray-200',
      arrowColor: 'text-gray-400',
      shadow: '',
    },
    {
      id: 3,
      title: 'Rate updates',
      description: 'Get the latest about rates and what lower rates mean for you.',
      icon: Percent,
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:bg-gray-100',
      textColor: 'text-gray-900',
      iconColor: 'text-gray-700',
      descriptionColor: 'text-gray-600',
      arrowBg: 'bg-gray-200',
      arrowColor: 'text-gray-400',
      shadow: '',
    },
    {
      id: 4,
      title: 'Refinancing',
      description: 'Understand the ins and outs of refinancing',
      icon: RefreshCw,
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:bg-gray-100',
      textColor: 'text-gray-900',
      iconColor: 'text-gray-700',
      descriptionColor: 'text-gray-600',
      arrowBg: 'bg-gray-200',
      arrowColor: 'text-gray-400',
      shadow: '',
    },
  ];

  return (
    <section className="bg-white rounded-3xl px-10 py-10 lg:px-28 lg:py-18 shadow-lg">
      {/* unified horizontal padding so content doesn’t feel boxed */}
      <div>
<h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-900 mb-8 lg:mb-12">
          Confidence comes with learning
        </h2>

        {/* Full-width grid (no max-width limiter) with sane container padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cardData.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`${card.bgColor} ${card.hoverColor} ${card.shadow} rounded-2xl p-6 transition-all cursor-pointer group flex flex-col items-start justify-between min-h-[280px] h-full ${card.textColor}`}
              >
                <div>
                  <Icon className={`w-6 h-6 ${card.iconColor} mb-6`} />
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className={`text-base sm:text-lg ${card.descriptionColor}`}>{card.description}</p>
                </div>

                <div className="self-start mt-6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${card.arrowBg}`}>
                    <ArrowRight className={`w-5 h-5 ${card.arrowColor} group-hover:translate-x-1 transition-transform`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
