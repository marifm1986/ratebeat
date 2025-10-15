import { MortgageOptionLayout } from '../layouts/MortgageOptionLayout';
import { HeroSection } from '../components/HeroSection';

export const VALoansPage = () => {
  const description = `
    <p>VA loans are mortgage loans guaranteed by the U.S. Department of Veterans Affairs, available to active-duty service members, veterans, and eligible surviving spouses. These loans represent a valuable benefit earned through military service.</p>
    <p>Key benefits include no down payment requirement, no private mortgage insurance (PMI), competitive interest rates, and limited closing costs. VA loans also offer more flexible credit requirements and the ability to reuse the benefit multiple times throughout your lifetime.</p>
    <p>Eligibility requires a Certificate of Eligibility (COE) and meeting service requirements. This benefit recognizes the sacrifice made by those who served our country and helps make homeownership more accessible for military families.</p>
  `;

  return (
    <MortgageOptionLayout>
      <HeroSection
        title="VA Home Loans"
        subtitle="Veterans Affairs Loans"
        description={description}
        badgeText="Military & Veterans Benefit"
        badgeIcon="VA"
        badgeColor="bg-green-600"
      />

      {/* Rates Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden relative">
              <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 px-8 py-8">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg"></div>
                  <span className="text-white font-semibold text-lg">Live Rates</span>
                </div>
                <h3 className="text-white text-center text-3xl font-bold mb-2">Today's VA Loan Rates</h3>
                <p className="text-white/90 text-center text-lg">No PMI • No Down Payment</p>
              </div>
              
              <div className="relative p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-md">
                    <div className="text-4xl font-bold text-green-600 mb-2">6.125%</div>
                    <div className="text-gray-600 font-medium mb-1">30-Year Fixed</div>
                    <div className="text-sm text-gray-500">APR 6.185%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 shadow-md">
                    <div className="text-4xl font-bold text-green-600 mb-2">5.875%</div>
                    <div className="text-gray-600 font-medium mb-1">15-Year Fixed</div>
                    <div className="text-sm text-gray-500">APR 5.935%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 shadow-md">
                    <div className="text-4xl font-bold text-orange-600 mb-2">5.75%</div>
                    <div className="text-gray-600 font-medium mb-1">ARM 5/1</div>
                    <div className="text-sm text-gray-500">APR 6.125%</div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg mr-4">
                    Get My VA Rate
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
