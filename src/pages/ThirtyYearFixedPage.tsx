import { MortgageOptionLayout } from '../layouts/MortgageOptionLayout';
import { HeroSection } from '../components/HeroSection';
import { Link } from 'react-router-dom';

export const ThirtyYearFixedPage = () => {
  const heroContent = {
    title: "30-Year Fixed-Rate Mortgage",
    subtitle: "Loans",
    description: `
      <p>Traditionally, the 30-year fixed mortgage is possibly the most popular <span class="text-[#2c5aa0] font-semibold">mortgage loan</span> on the market. It is characterized by <span class="text-[#2c5aa0] font-semibold">interest rate</span> and monthly payment that remains the same over the life of the loan. For example, if a 30-year mortgage with a fixed rate of $300 would pay at that rate for the entire 30 years despite many changes in the real estate market. If you get a mortgage with <span class="text-[#2c5aa0] font-semibold">adjustable interest rates</span>, then your payments can go up and down depending on the market rates. The 30-year term picks a very low interest rate since you hold it for a lot longer than some other type.</p>
      <p>Another thing that you need to know is that you will be paying about all the interest than the principal at the beginning of your debt payments but midway of the life of the loan this will be reversed.</p>
    `,
    badgeText: "Featured Mortgage Product",
    badgeIcon: "30yr",
    badgeColor: "bg-[#2c5aa0]"
  };

  return (
    <MortgageOptionLayout>
      <HeroSection {...heroContent} />

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

          {/* Call to Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-[#2c5aa0] rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-[#2c5aa0] group-hover:to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <span className="text-3xl group-hover:text-white transition-colors">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2c5aa0] transition-colors mb-3">Get Pre-approved</h3>
              </div>
            </div>
            
            <div className="group bg-white hover:bg-green-50 border-2 border-gray-200 hover:border-green-500 rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-500 group-hover:to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <span className="text-3xl group-hover:text-white transition-colors">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-3">Get Rate Quote</h3>
              </div>
            </div>
            
            <div className="group bg-white hover:bg-purple-50 border-2 border-gray-200 hover:border-purple-500 rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 group-hover:from-purple-500 group-hover:to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <span className="text-3xl group-hover:text-white transition-colors">✨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors mb-3">Apply Now</h3>
              </div>
            </div>
          </div>

          {/* Rates Section - Centered with Better Width */}
          <div className="mb-20">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2c5aa0]/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative bg-gradient-to-r from-[#2c5aa0] via-blue-600 to-blue-700 px-8 py-8">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg"></div>
                    <h3 className="text-3xl font-bold text-white">Live Market Rates</h3>
                  </div>
                  <p className="text-blue-100 text-center text-lg">Updated every 15 minutes • Compare multiple lenders</p>
                  
                  {/* Modern accent line */}
                  <div className="mt-4 flex justify-center">
                    <div className="w-20 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  {/* Constrained iframe width for better proportions */}
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-100 rounded-2xl p-8 border-2 border-gray-100 shadow-inner relative overflow-hidden">
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                      
                      <div className="relative">
                        <iframe 
                          src="https://www.mortgagecalculator.org/rates-widgets/mortgages/text-widget.php?advanced&data=30yr_fr|15yr_fr|5yr_ar"
                          width="100%" 
                          height="500"
                          frameBorder="0"
                          className="w-full rounded-xl shadow-lg"
                          title="Current Mortgage Rates"
                          loading="lazy"
                          style={{ border: 'none' }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                    <button className="group bg-[#2c5aa0] hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                      <span className="flex items-center justify-center">
                        Get My Personalized Rate
                        <div className="ml-2 w-2 h-2 bg-white rounded-full group-hover:scale-110 transition-transform"></div>
                      </span>
                    </button>
                    <button className="group bg-white border-2 border-[#2c5aa0] text-[#2c5aa0] hover:bg-[#2c5aa0] hover:text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <span className="flex items-center justify-center">
                        Schedule Consultation
                        <div className="ml-2 w-2 h-2 bg-current rounded-full group-hover:scale-110 transition-transform"></div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits</h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">It provides the lowest monthly installments than typical fixed-rate loans.</h3>
                  <p className="text-gray-600 leading-relaxed">
                    This allows you more flexibility so you can pay off your mortgage any time without prepayment penalties. You could also pay off your mortgage before 30 years by just adding a few hundred dollars to your monthly payments against the principal amount.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    As the payments are predictable you can fund other priorities when your income increases like your retirement savings, vacations, home renovation, etc.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">Less stress as you need not worry about the rising market prices.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">As you qualify for a larger loan based on your ability to make payments it will allow you to buy a more expensive house.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    You can avoid <span className="text-[#2c5aa0] font-semibold underline cursor-pointer hover:text-blue-800">mortgage insurance</span> if you make a down payment of 20% or more.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    If mortgage rates sink you can <span className="text-[#2c5aa0] font-semibold underline cursor-pointer hover:text-blue-800">refinance</span> your primary home up to 97% of its value.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">You can purchase your primary home with a low down payment of 3%.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cons Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Cons of a 30-year fixed Mortgage</h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">The major drawback is that you are charged a higher interest rate.</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">You pay an unbelievable amount (about 40% more) of interest than 15-year loans.</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">
                  You will build very little <span className="text-[#2c5aa0] font-semibold underline cursor-pointer hover:text-blue-800">home equity</span> as the lion's share of your first 10 years of payments goes towards your interest.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <p className="text-gray-700 leading-relaxed">
                If you keep your monthly payments low and do not intend to sell your home for many years than the 30-year fixed-rate mortgage will be the right loan for you.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                If you have any more questions about the 30-year mortgage do contact our experts at <span className="text-[#2c5aa0] font-semibold">(877) 877 7575</span>.
              </p>
            </div>
          </div>

          {/* Action Buttons - Enhanced Design */}
          {/* Final Call to Action */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-[#2c5aa0] rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-[#2c5aa0] group-hover:to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <svg className="w-8 h-8 text-[#2c5aa0] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2c5aa0] transition-colors mb-3">Get Pre-approved</h3>
              </div>
            </div>
            
            <div className="group bg-white hover:bg-green-50 border-2 border-gray-200 hover:border-green-500 rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-500 group-hover:to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-3">Get Rate Quote</h3>
              </div>
            </div>
            
            <div className="group bg-white hover:bg-purple-50 border-2 border-gray-200 hover:border-purple-500 rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 group-hover:from-purple-500 group-hover:to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors mb-3">Apply Now</h3>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-20">
            {/* Disclaimer */}
            <div className="text-center mb-12">
              <div className="max-w-4xl mx-auto text-sm text-gray-500 leading-relaxed">
                <p className="mb-2">
                  Above rates based on VA property search for your individual county. This report shows the rates corresponding to the highest-level based on a loan amount of $350,000, with a loan
                </p>
                <p>
                  to value of 80% and credit score of 740. Rate-lock lengths and actual interest rates may vary. Shop and Compare with
                  <Link to="#" className="text-[#2c5aa0] hover:text-blue-800 underline mx-1">Bank Rate</Link>
                </p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get Pre-approved</h3>
                <p className="text-gray-600">Start your mortgage application process</p>
              </div>
              
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rate Comparison</h3>
                <p className="text-gray-600">Compare rates from multiple lenders</p>
              </div>
              
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Calculate Savings</h3>
                <p className="text-gray-600">See how much you can save</p>
              </div>
            </div>
          </div>
    </MortgageOptionLayout>
  );
};
