import { MortgageOptionLayout } from '../layouts/MortgageOptionLayout';
import { HeroSection } from '../components/HeroSection';

export const ConventionalLoansPage = () => {
  const description = `
    <p>Conventional loans are traditional mortgages not insured or guaranteed by the federal government, offered by private lenders and conforming to Fannie Mae and Freddie Mac guidelines. They represent the most common type of home financing in the market.</p>
    <p>These loans typically require higher credit scores (620+) and down payments ranging from 3% to 20%, with PMI required for down payments under 20%. Conventional loans offer competitive rates and flexible terms for qualified borrowers.</p>
    <p>This option is ideal for borrowers with strong credit and stable income who want flexible loan terms and the ability to remove PMI once reaching 20% equity. Conventional loans provide the most loan options and competitive pricing for well-qualified applicants.</p>
  `;

  return (
    <MortgageOptionLayout>
      <HeroSection
        title="Conventional Loans"
        subtitle="Traditional Mortgage Options"
        description={description}
        badgeText="Most Popular Loan Type"
        badgeIcon="Conv"
        badgeColor="bg-[#2c5aa0]"
      />

      {/* Rates Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden relative">
              <div className="relative bg-gradient-to-r from-[#2c5aa0] via-blue-600 to-blue-700 px-8 py-8">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg"></div>
                  <span className="text-white font-semibold text-lg">Live Rates</span>
                </div>
                <h3 className="text-white text-center text-3xl font-bold mb-2">Today's Conventional Loan Rates</h3>
                <p className="text-white/90 text-center text-lg">Competitive rates for qualified borrowers</p>
              </div>
              
              <div className="relative p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-md">
                    <div className="text-4xl font-bold text-[#2c5aa0] mb-2">6.25%</div>
                    <div className="text-gray-600 font-medium mb-1">30-Year Fixed</div>
                    <div className="text-sm text-gray-500">APR 6.31%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-md">
                    <div className="text-4xl font-bold text-blue-600 mb-2">5.875%</div>
                    <div className="text-gray-600 font-medium mb-1">15-Year Fixed</div>
                    <div className="text-sm text-gray-500">APR 5.935%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 shadow-md">
                    <div className="text-4xl font-bold text-green-600 mb-2">5.75%</div>
                    <div className="text-gray-600 font-medium mb-1">ARM 5/1</div>
                    <div className="text-sm text-gray-500">APR 6.125%</div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-[#2c5aa0] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg mr-4">
                    Get My Rate
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
