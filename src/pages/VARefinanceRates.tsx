import React, { useState } from 'react'
import { ChevronRight, Check, X, Star } from 'lucide-react'
interface VARefinanceRatesProps {
  'data-id'?: string
}
const rateCards = [
  {
    title: '30-year VA',
    rate: '6.625%',
    apr: '6.07%',
    monthlyPayment: '$2,168',
    points: '1.875',
    pointsCost: '$6,563',
  },
  {
    title: '20-year VA',
    rate: '6.375%',
    apr: '6.518%',
    monthlyPayment: '$2,476',
    points: '1.875',
    pointsCost: '$6,563',
  },
  {
    title: '20-year VA',
    rate: '6.375%',
    apr: '6.518%',
    monthlyPayment: '$2,476',
    points: '2',
    pointsCost: '$7,000',
  },
  {
    title: '15-year VA',
    rate: '5.750%',
    apr: '6.045%',
    monthlyPayment: '$2,293',
    points: '2',
    pointsCost: '$7,000',
  },
  {
    title: '10-year VA',
    rate: '5.625%',
    apr: '6.067%',
    monthlyPayment: '$3,075',
    points: '2',
    pointsCost: '$7,000',
  },
]
const factorsList = [
  {
    icon: '💳',
    title: 'Credit score',
    description:
      'Your credit score is one of the most important factors in determining your VA refinance rate. Higher credit scores typically qualify for better rates.',
  },
  {
    icon: '📊',
    title: 'Debt-to-income ratio (DTI)',
    description:
      'Lenders look at how much of your monthly income goes toward debt payments. A lower DTI ratio can help you qualify for better rates.',
  },
  {
    icon: '📈',
    title: 'Market conditions',
    description:
      'The Federal Reserve sets monetary policy that, indirectly, and the housing market all influence mortgage rates, including VA rates.',
  },
]
const prosConsList = {
  pros: [
    {
      title: 'No down payment',
      description:
        "Unlike many other loan types, VA loans don't require a down payment. This makes refinancing more accessible and can save you thousands upfront.",
    },
    {
      title: 'No private mortgage insurance',
      description:
        "VA loans don't require private mortgage insurance (PMI), which can save you hundreds of dollars each month compared to conventional loans with less than 20% down.",
    },
    {
      title: 'Pay less mortgage insurance overall',
      description:
        "While VA loans do have a funding fee, it's typically lower than the mortgage insurance required on FHA or conventional loans with low down payments.",
    },
  ],
  cons: [
    {
      title: 'VA funding fee',
      description:
        'Most VA loans require a funding fee, which can be financed into the loan amount. However, some borrowers with service-related disabilities are exempt from this fee.',
    },
    {
      title: 'There are property standards',
      description:
        "VA loans require the property to meet VA appraisal requirements. If your home doesn't meet these standards, you may need to make repairs before refinancing.",
    },
    {
      title: 'Not everyone can get a VA loan',
      description:
        "VA loans are only available to eligible veterans, active-duty service members, and surviving spouses. You'll need a Certificate of Eligibility to qualify.",
    },
  ],
}
const faqItems = [
  {
    question: 'What are VA loan refinance rates today?',
    answer:
      "Current VA loan refinance rates vary based on market conditions, your credit score, loan amount, and other factors. Check the rates displayed above for today's current VA rates.",
  },
  {
    question: 'How can I get a VA loan?',
    answer:
      "To get a VA loan, you must be an eligible veteran, active-duty service member, National Guard member, reservist, or surviving spouse. You'll need to obtain a Certificate of Eligibility (COE) from the VA and meet the lender's credit and income requirements.",
  },
  {
    question: 'Should I refinance my VA loan?',
    answer:
      'Consider refinancing your VA loan when interest rates drop significantly, your credit score improves, you want to switch from an adjustable-rate to a fixed-rate mortgage, or you need to access home equity through a cash-out refinance.',
  },
  {
    question: 'What are the types of refinancing options for VA loans?',
    answer:
      'VA borrowers have several refinancing options: VA Interest Rate Reduction Refinance Loan (IRRRL) for lowering your rate with minimal documentation, VA cash-out refinance for accessing home equity, and conventional refinancing if you want to refinance out of your VA loan.',
  },
  {
    question: 'How long does it take for a VA refinance?',
    answer:
      'A VA refinance typically takes 30-45 days from application to closing. VA IRRRLs (streamline refinances) may be faster due to reduced documentation requirements, while cash-out refinances may take longer.',
  },
  {
    question: 'What credit score do I need to refinance with a VA loan?',
    answer:
      "While the VA doesn't set a minimum credit score requirement, most lenders require a credit score of at least 620 for a VA refinance. Some lenders may have higher requirements, and borrowers with higher credit scores typically qualify for better rates.",
  },
  {
    question:
      "What's the difference between refinancing a VA loan and other loans?",
    answer:
      "VA loan refinancing offers unique benefits like no down payment requirement, no private mortgage insurance, and the streamlined IRRRL option. However, you must be an eligible veteran or service member, and there's a VA funding fee (though it can be financed into the loan).",
  },
]
const learningArticles = [
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
    title:
      'What is the minimum VA home loan credit score for home purchase or refinance?',
    description:
      'Learn about VA loan credit score requirements and how they affect your eligibility.',
  },
  {
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400',
    title: 'VA cash-out refinance: What it is and how it works',
    description:
      'Discover how VA cash-out refinancing can help you access your home equity.',
  },
  {
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400',
    title: 'VA loan down payment requirements',
    description:
      'Understand VA loan down payment rules and how they benefit veterans.',
  },
]
export const VARefinanceRates: React.FC<VARefinanceRatesProps> = ({
  'data-id': dataId,
}) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  return (
    <div data-id={dataId} className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                VA loan refinance rates
              </h1>
              <p className="text-gray-600 mb-6">
                Discover current VA loan rates and how Ratebeat® can
                help you refinance. A lower VA rate could mean a lower monthly
                payment and better terms. See your options in minutes.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Estimate my rate
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600"
                alt="Veteran at home"
                className="rounded-2xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Rate Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex justify-center gap-4 mb-8 border-b">
          <button className="pb-3 px-4 border-b-2 border-black font-semibold">
            Purchase rates
          </button>
          <button className="pb-3 px-4 text-gray-500 hover:text-black">
            Refinance rates
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center mb-8 max-w-4xl mx-auto">
          Monthly payment estimates above are for a loan amount of $350K. Taxes
          and insurance are included when the estimate, your situation payment
          will be greater.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {rateCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6">{card.title}</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-gray-500">Rate</span>
                  <span className="text-2xl font-bold">{card.rate}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-gray-500">APR</span>
                  <span className="text-2xl font-bold">{card.apr}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-gray-500">Mo. payment</span>
                  <span className="text-2xl font-bold">
                    {card.monthlyPayment}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-gray-500">Points</span>
                  <span className="text-sm font-bold">
                    {card.points} ({card.pointsCost})
                  </span>
                </div>
              </div>
              <button className="w-full border-2 border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors mb-3">
                Estimate my rate
              </button>
              <a
                href="#"
                className="block text-center text-sm text-gray-600 hover:text-black"
              >
                Learn about this loan
              </a>
            </div>
          ))}
          {/* 30-year VA Jumbo Card */}
          <div className="bg-white rounded-2xl p-6 border hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-6">30-year VA jumbo</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-gray-500">Rate</span>
                <span className="text-2xl font-bold">7.250%</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-gray-500">APR</span>
                <span className="text-2xl font-bold">6.54%</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-gray-500">Mo. payment</span>
                <span className="text-2xl font-bold">$3,419</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-gray-500">Points</span>
                <span className="text-sm font-bold">1.75 ($6,125)</span>
              </div>
            </div>
            <button className="w-full border-2 border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors mb-3">
              Estimate my rate
            </button>
            <a
              href="#"
              className="block text-center text-sm text-gray-600 hover:text-black"
            >
              Learn about this loan
            </a>
          </div>
          {/* Mortgage Review Card */}
          <div className="bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
              alt="Mortgage review"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Free Official Mortgage Review®
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Let us guide you every step along the refinance process and help
                you find the best rate for your situation.
              </p>
              <a href="#" className="text-sm font-semibold hover:underline">
                Get my review
              </a>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center">
          Rates are current as of 12:43 PM PST on October 10, 2024
        </p>
      </div>
      {/* Explore the Connection Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Explore the connection
          <br />
          between rate and monthly
          <br />
          payment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold">Home equity calculator</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Estimate how much equity you have in your home and how you can use
              it.
            </p>
            <button className="flex items-center gap-2 text-black font-semibold hover:underline">
              <span>→</span>
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold">Amortization calculator</h3>
            </div>
            <p className="text-gray-600 mb-6">
              See how your mortgage payments are split between principal and
              interest over time.
            </p>
            <button className="flex items-center gap-2 text-black font-semibold hover:underline">
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
      {/* Personalized Rate Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Discover your personalized rate
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you're considering refinancing, you'll want to know your
            personalized rate and see if you can save. See your rate in less
            than 2 minutes with no impact to your credit score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Estimate my rate
            </button>
            <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
              Talk to an expert
            </button>
          </div>
        </div>
      </div>
      {/* Factors Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600"
              alt="Veteran planning finances"
              className="rounded-2xl w-full h-auto shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What factors determine your VA loan refinance rate?
            </h2>
            <p className="text-gray-600 mb-8">
              Your VA loan refinance rate is influenced by several factors.
              Understanding these can help you get the best rate possible.
            </p>
            <div className="space-y-6">
              {factorsList.map((factor, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                    {factor.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{factor.title}</h3>
                    <p className="text-sm text-gray-600">
                      {factor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Pros and Cons Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Pros and cons of a VA refinance
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">PROS</h3>
              </div>
              <div className="space-y-6">
                {prosConsList.pros.map((pro, index) => (
                  <div key={index}>
                    <h4 className="font-bold mb-2">{pro.title}</h4>
                    <p className="text-sm text-gray-600">{pro.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">CONS</h3>
              </div>
              <div className="space-y-6">
                {prosConsList.cons.map((con, index) => (
                  <div key={index}>
                    <h4 className="font-bold mb-2">{con.title}</h4>
                    <p className="text-sm text-gray-600">{con.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          VA loan refinance rates frequently asked questions
        </h2>
        <p className="text-gray-600 mb-8">
          Still have questions? Here are the most frequently asked questions
          about VA loan refinance rates. Visit our{' '}
          <a href="#" className="underline">
            VA Loan Learning Center
          </a>
          .
        </p>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="font-semibold text-lg pr-4">{item.question}</h3>
                <ChevronRight
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`}
                />
              </button>
              {expandedFaq === index && (
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Learning Articles */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Learn about VA loans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {learningArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">6 min read</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="text-sm font-semibold hover:underline">
              Visit our Learning Center
            </a>
          </div>
        </div>
      </div>
      {/* Footer Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t">
        <p className="text-xs text-gray-500 leading-relaxed">
          * Important legal disclosures
        </p>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          Rates shown are based on a sample borrower profile and may not reflect
          your situation. Your actual rate will depend on many factors such as
          your credit, income, loan type, loan amount, and property value. Rates
          are subject to change without notice. For current rates please call
          800-555-0100. Lending services provided by Ratebeat, LLC. NMLS
          #3030. Equal Housing Lender. Licensed in 50 states.
        </p>
      </div>
    </div>
  )
}
