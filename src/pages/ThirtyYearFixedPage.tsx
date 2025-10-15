import { MortgageOptionLayout } from '../layouts/MortgageOptionLayout';
import { HeroSection } from '../components/HeroSection';

export const ThirtyYearFixedPage = () => {
  const description = `
    <p>Traditionally, the 30-year fixed mortgage is possibly the most popular <span class="text-[#2c5aa0] font-semibold">mortgage loan</span> on the market. It is characterized by <span class="text-[#2c5aa0] font-semibold">interest rate</span> and monthly payment that remains the same over the life of the loan. For example, if a 30-year mortgage with a fixed rate of $300 would pay at that rate for the entire 30 years despite many changes in the real estate market.</p>
    <p>If you get a mortgage with <span class="text-[#2c5aa0] font-semibold">adjustable interest rates</span>, then your payments can go up and down depending on the market rates. The 30-year term picks a very low interest rate since you hold it for a lot longer than some other type.</p>
    <p>Another thing that you need to know is that you will be paying about all the interest than the principal at the beginning of your debt payments but midway of the life of the loan this will be reversed.</p>
  `;

  return (
    <MortgageOptionLayout>
      <HeroSection
        title="30-Year Fixed-Rate Mortgage"
        subtitle="30-Year Fixed-Rate Mortgage"
        description={description}
        badgeText="Featured Mortgage Product"
        badgeIcon="30Y"
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
                <h3 className="text-white text-center text-3xl font-bold mb-2">Today's 30-Year Fixed Rates</h3>
                <p className="text-white/90 text-center text-lg">Updated every 15 minutes</p>
              </div>
              
              <div className="relative p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-md">
                    <div className="text-4xl font-bold text-[#2c5aa0] mb-2">6.75%</div>
                    <div className="text-gray-600 font-medium mb-1">Current Rate</div>
                    <div className="text-sm text-gray-500">APR 6.81%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 shadow-md">
                    <div className="text-4xl font-bold text-green-600 mb-2">6.625%</div>
                    <div className="text-gray-600 font-medium mb-1">Best Rate</div>
                    <div className="text-sm text-gray-500">APR 6.685%</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 shadow-md">
                    <div className="text-4xl font-bold text-orange-600 mb-2">6.875%</div>
                    <div className="text-gray-600 font-medium mb-1">Avg Rate</div>
                    <div className="text-sm text-gray-500">APR 6.935%</div>
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

      {/* Requirements Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Requirements to Qualify for a 30-year mortgage</h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">You need a minimum down payment of 3%.</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">620 is the minimum credit score required.</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">sa
                  Your debt-to-income ratio should be less than 50%. You can calculate your <span className="text-[#2c5aa0] font-semibold underline cursor-pointer hover:text-blue-800">debt-to-income ratio (DTI)</span> by adding all your debt payments and divide the total by your monthly pre-tax income.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">You need 2% to 6% cash in hand to cover the closing costs.</p>
              </div>
            </div>
          </div>


    </MortgageOptionLayout>
  );
};
