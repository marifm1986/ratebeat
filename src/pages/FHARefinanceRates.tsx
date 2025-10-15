import React, { useState } from 'react'
import { ChevronRight, Check, X, Star } from 'lucide-react'
interface FHARefinanceRatesProps {
  'data-id'?: string
}
const rateCards = [
  {
    title: '30-year FHA',
    rate: '6.625%',
    apr: '6.64%',
    monthlyPayment: '$2,287',
    points: '1.875',
    pointsCost: '$6,563',
  },
  {
    title: '20-year FHA',
    rate: '6.375%',
    apr: '6.704%',
    monthlyPayment: '$2,573',
    points: '1.625',
    pointsCost: '$5,688',
  },
  {
    title: '20-year FHA',
    rate: '6.375%',
    apr: '6.704%',
    monthlyPayment: '$2,573',
    points: '1.625',
    pointsCost: '$5,688',
  },
  {
    title: '15-year FHA',
    rate: '5.750%',
    apr: '6.045%',
    monthlyPayment: '$2,844',
    points: '2',
    pointsCost: '$7,000',
  },
]
const factorsList = [
  {
    icon: '💳',
    title: 'Credit score',
    description:
      'Your credit score is one of the most important factors in determining your FHA refinance rate. Higher credit scores typically qualify for better rates.',
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
      'Economic factors like inflation, Federal Reserve policy, and the bond market all influence mortgage rates, including FHA rates.',
  },
]
const prosConsList = {
  pros: [
    {
      title: 'Lower down payment',
      description:
        'FHA loans allow down payments as low as 3.5% for borrowers with credit scores of 580 or higher. This makes homeownership more accessible.',
    },
    {
      title: 'More lenient credit requirements',
      description:
        "FHA loans are available to borrowers with lower credit scores compared to conventional loans, making them a good option if your credit isn't perfect.",
    },
    {
      title: 'Lower monthly payments',
      description:
        'FHA refinancing can help you secure a lower interest rate, which translates to lower monthly mortgage payments and more money in your pocket.',
    },
  ],
  cons: [
    {
      title: 'Mortgage insurance required',
      description:
        'FHA loans require both an upfront mortgage insurance premium (MIP) and annual MIP, which can add to your overall costs.',
    },
    {
      title: 'Loan limits',
      description:
        "FHA loans have maximum loan limits that vary by county. If you need to borrow more than the limit, you'll need a different type of loan.",
    },
    {
      title: 'Property standards',
      description:
        "FHA loans require the property to meet certain standards. If your home doesn't meet these requirements, you may need to make repairs before refinancing.",
    },
  ],
}
const faqItems = [
  {
    question: 'What are FHA refinance rates today?',
    answer:
      "Current FHA refinance rates vary based on market conditions, your credit score, loan amount, and other factors. Check the rates displayed above for today's current FHA rates.",
  },
  {
    question: 'When should I refinance my FHA loan?',
    answer:
      'Consider refinancing your FHA loan when interest rates drop significantly, your credit score improves, you want to remove mortgage insurance, or you need to access home equity.',
  },
  {
    question: 'What is an FHA Streamline Refinance?',
    answer:
      'An FHA Streamline Refinance is a simplified refinancing option for existing FHA borrowers. It requires less documentation and no appraisal in most cases, making the process faster and easier.',
  },
  {
    question: 'How do FHA refinance rates compare to conventional rates?',
    answer:
      "FHA refinance rates are often competitive with conventional rates, and may be lower for borrowers with lower credit scores. However, you'll need to factor in mortgage insurance costs.",
  },
  {
    question: 'Can I refinance from a conventional loan to an FHA loan?',
    answer:
      "Yes, you can refinance from a conventional loan to an FHA loan. This might make sense if you want to take advantage of FHA's more lenient credit requirements or lower down payment options.",
  },
  {
    question: 'What credit score do I need for an FHA refinance?',
    answer:
      'The minimum credit score for an FHA refinance is typically 580 for a 3.5% down payment, or 500-579 with a 10% down payment. However, many lenders have higher requirements.',
  },
  {
    question: 'How long does an FHA refinance take?',
    answer:
      'An FHA refinance typically takes 30-45 days from application to closing. FHA Streamline Refinances may be faster, while cash-out refinances may take longer.',
  },
  {
    question: 'What are the closing costs for an FHA refinance?',
    answer:
      'Closing costs for an FHA refinance typically range from 2-5% of the loan amount. These costs include appraisal fees, title insurance, origination fees, and the upfront mortgage insurance premium.',
  },
]
const learningArticles = [
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
    title: 'FHA loan limits: How much can you borrow in 2024?',
    description:
      'Learn about FHA loan limits by county and how they affect your borrowing power.',
  },
  {
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400',
    title: 'FHA streamline refinance: Pros, cons and requirements',
    description:
      "Discover the benefits of FHA streamline refinancing and whether it's right for you.",
  },
  {
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400',
    title: 'How to refinance FHA to conventional loan',
    description:
      'Learn when and how to refinance from an FHA loan to a conventional mortgage.',
  },
]
export const FHARefinanceRates: React.FC<FHARefinanceRatesProps> = ({
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
                FHA refinance rates
              </h1>
              <p className="text-gray-600 mb-6">
                Explore Rocket Mortgage® FHA loan rates and refinancing
                options. A lower FHA rate could mean a lower monthly payment and
                better terms. Discover your custom rate options in minutes.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Estimate my rate
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600"
                alt="Parent holding baby"
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
          All rates are current as of 12:43 PM PST on October 10, 2024. Monthly
          payment estimates above are for a loan amount of $350K. Taxes and
          insurance are included when the estimate, your situation payment will
          be greater.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
        </div>
        {/* Mortgage Review Card */}
        <div className="bg-white rounded-2xl overflow-hidden border max-w-md mx-auto">
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
        <p className="text-xs text-gray-500 text-center mt-8">
          Rates are current as of 12:43 PM PST on October 10, 2024
        </p>
      </div>
      {/* Better Understand Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Better understand your home's finances
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
              Estimate how much equity you'll have in your home after
              refinancing.
            </p>
            <button className="flex items-center gap-2 text-black font-semibold hover:underline">
              <span>Calculate equity</span>
              <ChevronRight className="w-4 h-4" />
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
              See how much you'll pay in interest and principal over the life of
              your loan.
            </p>
            <button className="flex items-center gap-2 text-black font-semibold hover:underline">
              <span>View schedule</span>
              <ChevronRight className="w-4 h-4" />
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
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600"
              alt="Family planning finances"
              className="rounded-2xl w-full h-auto shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What factors determine your FHA refinance rate?
            </h2>
            <p className="text-gray-600 mb-8">
              Your FHA refinance rate is influenced by several factors.
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
            Pros and cons of an FHA refinance
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
      {/* Testimonial Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-red-600 text-white rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Join our clients who give us 5 stars for rates and service
          </h2>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-white text-white" />
            ))}
          </div>
          <p className="text-sm opacity-90">
            Rated 4.8/5 based on 10,000+ reviews
          </p>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          FHA loan refinance rates frequently asked questions
        </h2>
        <p className="text-gray-600 mb-8">
          Still have questions? Here are the most frequently asked questions
          about FHA refinance rates.
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
            Learn about FHA loans
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
              View our entire Learning Center
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
          800-555-0100. Lending services provided by Rocket Mortgage, LLC. NMLS
          #3030. Equal Housing Lender. Licensed in 50 states.
        </p>
      </div>
    </div>
  )
}
