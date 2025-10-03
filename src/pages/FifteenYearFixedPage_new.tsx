import { MortgageOptionLayout } from '../layouts/MortgageOptionLayout';
import { HeroSection } from '../components/HeroSection';

export const FifteenYearFixedPage = () => {
  const description = `
    <p>A 15-year fixed-rate mortgage is a home loan with an interest rate that remains constant throughout the entire 15-year repayment period. This type of mortgage offers several advantages over longer-term loans, including significant interest savings and faster equity building.</p>
    <p>With a 15-year mortgage, homeowners typically benefit from lower interest rates compared to 30-year loans, often 0.25% to 0.75% lower. While monthly payments are higher due to the shorter repayment period, the total amount of interest paid over the life of the loan is substantially reduced.</p>
    <p>This loan type is ideal for borrowers who have stable incomes and can afford higher monthly payments in exchange for long-term savings. The predictable payment structure helps with budgeting, and the faster equity accumulation can provide greater financial security.</p>
  `;

  return (
    <MortgageOptionLayout>
      <HeroSection
        title="15-Year Fixed-Rate Mortgage"
        subtitle="15-Year Fixed-Rate Mortgage"
        description={description}
        badgeText="Fixed-Rate Mortgage"
        badgeIcon="15Y"
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
                <h3 className="text-white text-center text-3xl font-bold mb-2">Today's 15-Year Fixed Rates</h3>
                <p className="text-white/90 text-center text-lg">Updated every 15 minutes</p>
              </div>
              
              <div className="relative p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-md">
                    <div className="text-4xl font-bold text-[#2c5aa0] mb-2">6.25%</div>
                    <div className="text-gray-600 font-medium mb-1">Current Rate</div>
                    <div className="text-sm text-gray-500">APR 6.31%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 shadow-md">
                    <div className="text-4xl font-bold text-green-600 mb-2">6.125%</div>
                    <div className="text-gray-600 font-medium mb-1">Best Rate</div>
                    <div className="text-sm text-gray-500">APR 6.185%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 shadow-md">
                    <div className="text-4xl font-bold text-orange-600 mb-2">6.375%</div>
                    <div className="text-gray-600 font-medium mb-1">Avg Rate</div>
                    <div className="text-sm text-gray-500">APR 6.435%</div>
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
