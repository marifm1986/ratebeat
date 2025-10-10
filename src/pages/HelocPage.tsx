import { useState } from 'react';
import { Check, Star, ChevronDown } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { IframeModal } from '../components/IframeModal';

export const HelocPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <main>
        {/* Hero Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-6">
                  <span className="text-[#2c5aa0] font-semibold text-sm tracking-wide uppercase">
                    Better Home Equity Line of Credit
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Get the cash you need.<br />
                  Apply from your couch.
                </h1>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-[#2c5aa0] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Apply 100% online and quickly tap into your equity</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-[#2c5aa0] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Access up to $500,000 from Better Equity Line of Credit</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-[#2c5aa0] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Available for primary, second, and investment homes</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-[#2c5aa0] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">One-time $500+ "Reduction" at 24 hours, calls in 7 days</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#2c5aa0] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors mb-6"
                >
                  Find my rate
                </button>

                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Excellent</span>
                </div>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src="/hero.webp"
                  alt="Couple looking at laptop together"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">nytimes</div>
                <div className="text-xs text-gray-500">The New York Times</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">WSJ</div>
                <div className="text-xs text-gray-500">The Wall Street Journal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">investopedia</div>
                <div className="text-xs text-gray-500">Investopedia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">$100k+</div>
                <div className="text-xs text-gray-500">Average loan amount</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Goodbye waiting game. Hello cash. */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Goodbye waiting game. Hello cash.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Introducing One Day HELOC™—your express lane to accessing cash from your home with our Home Equity Line of Credit!
                Once you complete your application tasks, you'll get an approval decision in 24 hours, and your cash in 7 days.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Get the most out of your home equity */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-6">
                  <span className="text-[#2c5aa0] font-semibold text-sm tracking-wide">
                    Get the most out of your home equity
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Access up to 90% of your property's value
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  You can get up to a $500,000 line of credit while accessing up to 90% of
                  your home equity.* Don't worry, you don't have to use all at once. And you'll
                  only pay interest on what you withdraw, not the entire line of credit.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#2c5aa0] hover:text-blue-700 font-semibold transition-colors inline-flex items-center"
                >
                  Get started →
                </button>
              </div>
              <div>
                <img
                  src="/mobile.webp"
                  alt="Mobile phone showing HELOC application"
                  className="w-full max-w-md mx-auto rounded-2xl"
                />
                <p className="text-xs text-gray-500 text-center mt-4">
                  Image is for example purposes only. Your values will vary.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Available for different properties */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="/Better.webp"
                  alt="Modern vacation home"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div>
                <div className="mb-6">
                  <span className="text-[#2c5aa0] font-semibold text-sm tracking-wide">
                    Available for different properties
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Tap vacation homes and investment properties
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Many HELOCs are only available on primary residences. Our new digital
                  HELOC lets you tap into the equity of second homes, as well as investment
                  properties.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#2c5aa0] hover:text-blue-700 font-semibold transition-colors inline-flex items-center"
                >
                  Get started →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Better savings - Pay interest only on what you withdraw */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-6">
                  <span className="text-[#2c5aa0] font-semibold text-sm tracking-wide">
                    Better savings
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Pay interest only on what you withdraw
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With a HELOC, you'll pay interest on the amount you withdraw, not the
                  entire loan amount. Plus, Better Mortgage cuts out the unnecessary fees so
                  we can pass along those savings to our customers.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#2c5aa0] hover:text-blue-700 font-semibold transition-colors inline-flex items-center"
                >
                  Get started →
                </button>
              </div>
              <div>
                <img
                  src="/oneDay.webp"
                  alt="Person working on laptop"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apply in minutes.
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Won't affect your credit score.
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Goodbye waiting game, hello cash - your express lane to accessing cash from your home in one click away.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#2c5aa0] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Start getting cash
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-xs text-gray-500 leading-relaxed">
              <p className="mb-4">
                **One Day HELOC guarantee only applies to One Day HELOC™ product by Better Mortgage Corporation. Applicant must complete an eligible application and review and accept the terms of the HELOC by 5pm on a business day. Your funds must be validated during underwriting. Funding is subject to satisfactory underwriting review and applicant meeting Better Mortgage underwriting guidelines. Not all applicants will qualify. See terms and conditions for additional important details.
              </p>
              <p>
                Better Mortgage Corporation provides home loans through Better Mortgage Corporation and Better Equity Line of Credit through Better Mortgage Corporation, 415 Mission St, Suite 300, San Francisco, CA 94105. Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act License #4131429; Licensed as a residential mortgage loan originator in New York - License #H-80006; Licensed as a residential mortgage loan originator in Florida - License #MO26066; Licensed by the New Jersey Department of Banking and Insurance. Please consult the applicable licensing authority to verify current licensing. For licensing information, see the Nationwide Multistate Licensing System (NMLS) - www.nmlsconsumeraccess.org; or call (855) 411-BETTER. Better Mortgage Corporation NMLS #330511.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Related FAQs
              </h2>
              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(0)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900">Does getting pre-approved with Better Mortgage commit you to a loan?</h3>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 0 && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Curious if getting pre-approved with Better Mortgage commits you to a loan? Find out what pre-approval really means and how it impacts your home-buying journey. <span className="text-[#2c5aa0] cursor-pointer hover:text-blue-700">Read more</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900">What is a conventional mortgage?</h3>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 1 && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        A conventional mortgage (also known as a non-FHA loan) is a type of home loan that is not insured or guaranteed by the federal government. Instead, it's backed by a private lender—such as Better Mortgage. Conventional loans are the most common type of home loan, making up nearly three quarters of home loans. If you apply for a conventional loan with less than a 20% down payment, you'll be required to pay for private mortgage insurance (PMI). <span className="text-[#2c5aa0] cursor-pointer hover:text-blue-700">Read more</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900">What are Better Mortgage's minimum credit score requirements for FHA loans?</h3>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === 2 && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Learn about Better Mortgage's minimum credit score requirements for FHA loans. <span className="text-[#2c5aa0] cursor-pointer hover:text-blue-700">Read more</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-[#2c5aa0] hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                  Visit our learning center
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {/* Modal */}
        <IframeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          iframeUrl="https://ratebeat.floify.com/apply-now"
          title="Better Home Equity Line of Credit Application"
        />
      </main>
    </div>
  );
};
