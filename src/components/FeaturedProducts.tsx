import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const FeaturedProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Got questions?<br />
            We've got answers
          </h2>
        </div>

        {/* Product Grid - Simplified Layout */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* How AI Mortgage Lending Card */}
          <div className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How AI Mortgage Lending is Transforming the Home Loan Process
            </h3>
            <button className="w-10 h-10 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center mb-4 border border-gray-200 transition-colors">
              <ChevronRight className="w-5 h-5 text-teal-600" />
            </button>
            <img 
              src="/Better.webp" 
              alt="Person on couch with laptop"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* One Day Mortgage Card */}
          <div 
            onClick={() => navigate('/one-day-mortgage')}
            className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              One Day Mortgage¹
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.¹
            </p>
            <button className="w-10 h-10 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center mb-4 border border-gray-200 transition-colors">
              <ChevronRight className="w-5 h-5 text-teal-600" />
            </button>
            <div className="bg-teal-100 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="text-5xl font-bold text-teal-700">1</div>
                <div className="text-left">
                  <div className="text-xl font-bold text-teal-700">One Day</div>
                  <div className="text-xl font-bold text-teal-700">Mortgage™</div>
                </div>
              </div>
            </div>
          </div>

          {/* Better HELOC Card */}
          <div 
            onClick={() => navigate('/heloc')}
            className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex gap-4 mb-4">
              <img 
                src="/buy.webp" 
                alt="Couple looking at laptop"
                className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Better HELOC
                </h3>
                <button className="w-10 h-10 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center border border-gray-200 transition-colors">
                  <ChevronRight className="w-5 h-5 text-teal-600" />
                </button>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit². Access up to 90% of your home equity as cash in as little as 7 days.³
            </p>
          </div>

          {/* Insurance Card */}
          <div className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Insurance
            </h3>
            <button className="w-10 h-10 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center mb-4 border border-gray-200 transition-colors">
              <ChevronRight className="w-5 h-5 text-teal-600" />
            </button>
            <img 
              src="/hero.webp" 
              alt="Family with insurance"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
