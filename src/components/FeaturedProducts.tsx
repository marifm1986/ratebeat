import { useNavigate } from "react-router-dom";
import { ChevronRight, Clock, DollarSign } from "lucide-react";

export const FeaturedProducts = () => {
  const navigate = useNavigate();
  
  // Featured Options
  const featuredOptions = [
    {
      id: 'one-day',
      title: "One Day Mortgage™",
      description: "Get your Commitment Letter in 24 hours instead of waiting weeks. Speed up the process and head straight home.",
      link: "/one-day-mortgage",
      badge: "24 Hours",
      icon: "clock"
    },
    {
      id: 'heloc',
      title: "Home Equity Line of Credit (HELOC)",
      description: "Get the cash you need. Apply from your couch. Access up to $500,000 from Better Equity Line of Credit.",
      link: "/heloc",
      badge: "Up to $500K",
      icon: "dollar"
    }
  ];

  return (
    <section className="bg-white rounded-3xl px-10 py-10 lg:px-28 lg:py-18 shadow-lg">
      <div className="title-wrapper flex flex-col mb-12">
        <h2 className="text-center text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
          Featured Mortgage Products
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Fast-track your home financing goals with our premium mortgage solutions designed for speed and convenience.
        </p>
      </div>

      <div className="w-full bg-gray-100 px-8 py-10 rounded-lg mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Need help choosing the right option?
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Our mortgage experts can help you decide between One Day Mortgage™ 
              and HELOC based on your specific needs.
            </p>
          </div>
          <button className="bg-[#2c5aa0] text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
            Talk to an Expert
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {featuredOptions.map((option) => (
          <a
            key={option.id}
            href={option.link}
            onClick={(e) => {
              e.preventDefault();
              navigate(option.link);
            }}
            className="group relative w-full rounded-2xl p-6 bg-blue-50 hover:bg-blue-100 focus:bg-gray-100 transition-all duration-200 cursor-pointer ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl focus:ring-gray-300 outline-none focus:outline-none flex flex-col justify-between min-h-[180px]"
            aria-label={option.title}
          >
            <div className="flex items-start gap-4 mb-4">
              {option.icon === 'clock' ? (
                <Clock className="w-6 h-6 text-blue-700" />
              ) : (
                <DollarSign className="w-6 h-6 text-blue-700" />
              )}
              <div className="bg-blue-100 px-3 py-1 rounded-full ring-1 ring-blue-200">
                <span className="text-blue-900 text-sm font-medium">{option.badge}</span>
              </div>
            </div>
            
            <div className="title-wrapper flex flex-col mb-4">
              <p className="text-left text-lg md:text-xl font-medium leading-snug text-blue-900 mb-2">
                {option.title}
              </p>
              <p className="text-left text-blue-900 opacity-80">
                {option.description}
              </p>
            </div>

            <div className="mt-4 self-end">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                <ChevronRight className="w-5 h-5 text-blue-900 group-hover:scale-125 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to get started?
              </h3>
              <p className="text-gray-600">
                Both options offer fast processing and competitive rates. 
                Choose the one that best fits your home financing needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => navigate('/one-day-mortgage')}
                className="bg-[#2c5aa0] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Start One Day Mortgage™
              </button>
              <button 
                onClick={() => navigate('/heloc')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Apply for HELOC
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
