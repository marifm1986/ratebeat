import { MortgageOptionLayout } from '../layouts/MortgageOptionLayout';
import { HeroSection } from '../components/HeroSection';

export const RefinancePage = () => {
  const heroContent = {
    title: "Refinance Your Mortgage",
    subtitle: "Refinancing Options", 
    description: `
      <p>Refinancing means replacing your current mortgage with a new one, potentially with better terms, lower rates, or different loan duration. This process allows you to take advantage of improved market conditions or changes in your financial situation.</p>
      <p>Common reasons to refinance include lowering interest rates, reducing monthly payments, switching from ARM to fixed-rate, or accessing home equity. Many homeowners refinance to secure better terms when market rates drop or their credit score improves.</p>
      <p>Cash-out refinancing allows you to access your home's equity for debt consolidation, home improvements, or other major expenses. This option lets you borrow more than you owe and receive the difference in cash while potentially securing better loan terms.</p>
    `,
    badgeText: "Popular Refinancing Option",
    badgeIcon: "Refi",
    badgeColor: "bg-purple-500"
  };

  return (
    <MortgageOptionLayout>
      <HeroSection {...heroContent} />

      {/* Rates Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden relative">
              <div className="relative bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-8 py-8">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg"></div>
                  <span className="text-white font-semibold text-lg">Live Rates</span>
                </div>
                <h3 className="text-white text-center text-3xl font-bold mb-2">Current Refinance Rates</h3>
                <p className="text-white/90 text-center text-lg">Updated every 15 minutes</p>
              </div>
              
              <div className="relative p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-md">
                    <div className="text-4xl font-bold text-purple-600 mb-2">6.125%</div>
                    <div className="text-gray-600 font-medium mb-1">30-Year Fixed</div>
                    <div className="text-sm text-gray-500">APR 6.185%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 shadow-md">
                    <div className="text-4xl font-bold text-purple-600 mb-2">5.875%</div>
                    <div className="text-gray-600 font-medium mb-1">15-Year Fixed</div>
                    <div className="text-sm text-gray-500">APR 5.935%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 shadow-md">
                    <div className="text-4xl font-bold text-orange-600 mb-2">5.75%</div>
                    <div className="text-gray-600 font-medium mb-1">Cash-Out Refi</div>
                    <div className="text-sm text-gray-500">APR 6.125%</div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg mr-4">
                    Get My Refinance Rate
                  </button>
                  <span className="text-gray-600">Rates updated as of {new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MortgageOptionLayout>
  );
};
