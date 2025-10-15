import { MortgageOptionLayout } from '../layouts/MortgageOptionLayout';
import { HeroSection } from '../components/HeroSection';

export const JumboLoansPage = () => {
  const description = `
    <p>Jumbo loans (non-conforming mortgages) exceed the conforming loan limits set by Fannie Mae and Freddie Mac, designed for financing luxury properties and high-value homes that require larger loan amounts than conventional mortgages can provide.</p>
    <p>Loan limits vary by county, typically starting above $766,550 in most areas and higher in expensive markets like California and New York. These loans require larger down payments, stronger credit profiles, and more substantial financial reserves than conventional mortgages.</p>
    <p>Ideal candidates are high-income borrowers purchasing expensive properties who need financing beyond conventional loan limits. Jumbo loans enable access to luxury real estate markets and premium properties in desirable locations.</p>
  `;

  return (
    <MortgageOptionLayout>
      <HeroSection
        title="Jumbo Loans"
        subtitle="Non-Conforming Mortgages"
        description={description}
        badgeText="High-Value Property Financing"
        badgeIcon="$$"
        badgeColor="bg-amber-500"
      />

      {/* Rates Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden relative">
              <div className="relative bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-8 py-8">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg"></div>
                  <span className="text-white font-semibold text-lg">Live Rates</span>
                </div>
                <h3 className="text-white text-center text-3xl font-bold mb-2">Today's Jumbo Loan Rates</h3>
                <p className="text-white/90 text-center text-lg">For loans above $766,550</p>
              </div>
              
              <div className="relative p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-md">
                    <div className="text-4xl font-bold text-amber-600 mb-2">6.375%</div>
                    <div className="text-gray-600 font-medium mb-1">30-Year Fixed</div>
                    <div className="text-sm text-gray-500">APR 6.435%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 shadow-md">
                    <div className="text-4xl font-bold text-amber-600 mb-2">6.125%</div>
                    <div className="text-gray-600 font-medium mb-1">15-Year Fixed</div>
                    <div className="text-sm text-gray-500">APR 6.185%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 shadow-md">
                    <div className="text-4xl font-bold text-orange-600 mb-2">6.0%</div>
                    <div className="text-gray-600 font-medium mb-1">ARM 7/1</div>
                    <div className="text-sm text-gray-500">APR 6.375%</div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg mr-4">
                    Get My Jumbo Rate
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
