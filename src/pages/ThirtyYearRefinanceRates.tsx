import React, { useState } from 'react'
import { ChevronRight, Check, X, Star } from 'lucide-react'
interface ThirtyYearRefinanceRatesProps {
  'data-id'?: string
}
const rateComparison = [
  {
    title: '30-year fixed',
    rate: '6.875%',
    apr: '6.91%',
    monthlyPayment: '$2,307',
    points: '1.625',
    pointsCost: '$5,688',
  },
  {
    title: '30-year FHA',
    rate: '6.625%',
    apr: '6.64%',
    monthlyPayment: '$2,287',
    points: '1.875',
    pointsCost: '$6,563',
  },
  {
    title: '30-year VA',
    rate: '6.625%',
    apr: '6.07%',
    monthlyPayment: '$2,168',
    points: '1.875',
    pointsCost: '$6,563',
  },
]
const factorsList = [
  {
    icon: '📊',
    title: 'Economic',
    description:
      "The broader economy has a big impact on mortgage rates. When the economy is strong, rates tend to rise. When it's weak, rates tend to fall.",
  },
  {
    icon: '👤',
    title: 'Personal',
    description:
      'Your personal financial situation also affects your rate. Lenders look at your credit score, income, debt-to-income ratio and more.',
  },
  {
    icon: '🏠',
    title: 'Loan type',
    description:
      'Different types of loans have different rates. For example, FHA loans typically have lower rates than conventional loans.',
  },
]
const prosConsList = {
  pros: [
    {
      title: 'Lower monthly payment',
      description:
        'A 30-year mortgage spreads payments over a longer period, which generally results in a lower monthly payment compared to shorter-term loans.',
    },
    {
      title: 'More flexibility with your money',
      description:
        "With lower monthly payments, you'll have more cash available each month for other expenses, savings, or investments.",
    },
    {
      title: 'Easier to qualify',
      description:
        "Because monthly payments are lower, it's typically easier to qualify for a 30-year mortgage than a shorter-term loan.",
    },
  ],
  cons: [
    {
      title: 'Higher total interest',
      description:
        "Over the life of the loan, you'll pay significantly more in interest with a 30-year mortgage compared to shorter terms.",
    },
    {
      title: 'Slower equity building',
      description:
        "With lower monthly payments, you'll build equity in your home more slowly than you would with a shorter-term loan.",
    },
    {
      title: 'Higher interest rate',
      description:
        'Lenders typically charge higher interest rates for 30-year mortgages compared to shorter-term loans like 15 or 20-year mortgages.',
    },
  ],
}
const faqItems = [
  {
    question: 'What are 30-year refinance rates today?',
    answer:
      "Current 30-year refinance rates vary based on your credit score, loan amount, and other factors. Check the rates displayed above for today's current rates.",
  },
  {
    question: 'How do 30-year refinance rates compare to other loan terms?',
    answer:
      '30-year refinance rates are typically higher than shorter-term loans like 15 or 20-year mortgages, but offer lower monthly payments.',
  },
  {
    question: 'Should I refinance into a 30-year mortgage?',
    answer:
      'Refinancing into a 30-year mortgage can make sense if you want to lower your monthly payment, access home equity, or switch from an adjustable-rate to a fixed-rate mortgage.',
  },
  {
    question: 'What do I need to qualify for a 30-year refinance?',
    answer:
      "To qualify for a 30-year refinance, you'll typically need a credit score of at least 620, sufficient income, a debt-to-income ratio below 43%, and adequate home equity.",
  },
  {
    question: 'How do 30-year refinance rates work?',
    answer:
      "When you refinance with a 30-year mortgage, you're replacing your current loan with a new 30-year loan. Your rate is determined by market conditions and your financial profile.",
  },
  {
    question: 'What are the benefits of a 30-year refinance?',
    answer:
      'Benefits include lower monthly payments, more financial flexibility, easier qualification, and the ability to access home equity through a cash-out refinance.',
  },
  {
    question: 'How can I get the best 30-year refinance rate?',
    answer:
      'To get the best rate, improve your credit score, reduce your debt-to-income ratio, shop around with multiple lenders, and consider paying points to lower your rate.',
  },
  {
    question: "What's the difference between a 30-year fixed and 30-year ARM?",
    answer:
      'A 30-year fixed-rate mortgage has the same interest rate for the entire loan term, while a 30-year ARM has a rate that can adjust after an initial fixed period.',
  },
]
const learningArticles = [
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
    title: 'Refinancing: what it is and how does it work?',
    description:
      'Learn the basics of mortgage refinancing and how it can benefit you.',
  },
  {
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400',
    title: 'Pros and cons of refinancing a mortgage',
    description:
      'Understand the advantages and drawbacks of refinancing your home loan.',
  },
  {
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400',
    title: 'What is a rate-and-term refinance?',
    description:
      'Discover how a rate-and-term refinance can help you save money.',
  },
]
export const ThirtyYearRefinanceRates: React.FC<
  ThirtyYearRefinanceRatesProps
> = ({ 'data-id': dataId }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  return (
    <div data-id={dataId} className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                30-year refinance rates
              </h1>
              <p className="text-gray-600 mb-6">
                Check today's 30-year refinance rates and see how much you could
                save by refinancing. Get a personalized rate estimate in minutes
                with no impact to your credit score.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Estimate my rate
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600"
                alt="Happy family at home"
                className="rounded-2xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Rate Comparison Section */}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {rateComparison.map((card, index) => (
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
        <p className="text-xs text-gray-500 text-center">
          Rates are current as of 12:43 PM PST on October 10, 2024
        </p>
      </div>
      {/* 30-year Jumbo Fixed Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border">
              <h3 className="text-xl font-bold mb-6">30-year jumbo fixed</h3>
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
            <div className="bg-white rounded-2xl overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1554224311-beee4f8a6952?w=400"
                alt="Mortgage calculator"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Mortgage payoff calculator
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  See how much you could save by making extra payments on your
                  mortgage.
                </p>
                <a href="#" className="text-sm font-semibold hover:underline">
                  Try the calculator
                </a>
              </div>
            </div>
          </div>
        </div>
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
              Find out how much equity you have in your home and how you can use
              it.
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
              See how your mortgage payments are split between principal and
              interest over time.
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
            Discover your personalised rate
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a custom rate based on your financial situation. It's free and
            won't affect your credit score.
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
              src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600"
              alt="Family planning finances"
              className="rounded-2xl w-full h-auto shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Many factors determine your 30-year mortgage refinance rate
            </h2>
            <p className="text-gray-600 mb-8">
              Your mortgage rate is influenced by a variety of factors, both
              economic and personal. Understanding these factors can help you
              get the best rate possible.
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
            Pros and cons of a 30-year refinance
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
          30-year refinance rate frequently asked questions
        </h2>
        <p className="text-gray-600 mb-8">
          Still have questions? Here are the most frequently asked questions
          about 30-year refinance rates.
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
            Learn about refinance rates
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
              Read our entire Learning Center
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
