import React, { useState } from 'react'
import { ChevronRight, Star } from 'lucide-react'

interface MortgageRatesPageProps {
    'data-id'?: string
}

const rateCards = [
    {
        title: '30-year fixed',
        rate: '6.375%',
        apr: '6.44%',
        monthlyPayment: '$2,184',
        points: 'LEPS (points)',
    },
    {
        title: '20-year fixed',
        rate: '6.06%',
        apr: '6.08%',
        monthlyPayment: '$2,009',
        points: 'LEPS (points)',
    },
    {
        title: '30-year FHA',
        rate: '5.875%',
        apr: '6.48%',
        monthlyPayment: '$2,060',
        points: '2 (points)',
    },
    {
        title: '30-year jumbo fixed',
        rate: '6.625%',
        apr: '6.96%',
        monthlyPayment: '$3,233',
        points: '1.75 (points)',
    },
    {
        title: '30-year VA',
        rate: '6.00%',
        apr: '6.20%',
        monthlyPayment: '$2,009',
        points: '2 (points)',
    },
]

const calculatorOptions = [
    {
        title: 'Mortgage calculator',
        description:
            'Get an estimate of how much your monthly payment will be and see how interest rates affect it.',
        icon: '🧮',
    },
    {
        title: 'Home affordability calculator',
        description:
            'See how much home you can really afford and stay within your budget.',
        icon: '🏠',
    },
]

const learningArticles = [
    {
        image: '/image2.png',
        title: 'Mortgage interest rate forecast for 2025',
        description:
            'Stay informed on the latest predictions for mortgage rates in the upcoming year.',
    },
    {
        image: '/image3.png',
        title: 'Historical increases: rates 1971 to the present',
        description:
            'Explore how mortgage rates have evolved over the past five decades.',
    },
    {
        image: '/image4.png',
        title: '30-year mortgage rates: A complete guide',
        description:
            'Everything you need to know about 30-year fixed mortgage rates.',
    },
]

const faqItems = [
    {
        question: 'What is a mortgage rate?',
        answer:
            'A mortgage rate is the interest rate charged on a mortgage loan. It determines how much you\'ll pay in interest over the life of your loan. Rates can be fixed (staying the same throughout the loan term) or adjustable (changing periodically based on market conditions).',
    },
    {
        question: 'How are mortgage rates determined?',
        answer:
            'Mortgage rates are influenced by various factors including the federal funds rate set by the Federal Reserve, inflation, economic growth, housing market conditions, and your personal financial situation including credit score, down payment, loan type, and loan term.',
    },
    {
        question: 'How can I get the best mortgage rate?',
        answer:
            'To get the best rate: improve your credit score, save for a larger down payment (20% or more), compare rates from multiple lenders, consider different loan terms, buy mortgage points if it makes financial sense, and get pre-approved to strengthen your negotiating position.',
    },
    {
        question: 'What\'s a mortgage rate, and should I do it?',
        answer:
            'A mortgage rate lock guarantees your interest rate for a specified period (typically 30-60 days) while you complete the home buying process. You should lock your rate when you find a favorable rate and are ready to move forward with your purchase, protecting yourself from potential rate increases.',
    },
    {
        question: 'How can I lock in a low mortgage rate?',
        answer:
            'You can lock in your rate once you\'ve been pre-approved and selected a home. Work with your lender to determine the optimal time to lock based on market conditions and your closing timeline. Some lenders offer float-down options if rates decrease after you lock.',
    },
    {
        question: 'What\'s the difference between interest rate and APR?',
        answer:
            'The interest rate is the cost of borrowing money, expressed as a percentage. APR (Annual Percentage Rate) includes the interest rate plus other loan costs like origination fees, discount points, and mortgage insurance, giving you a more complete picture of the loan\'s total cost.',
    },
    {
        question: 'What is a mortgage rate forecast, and why does it matter?',
        answer:
            'A mortgage rate forecast predicts future rate trends based on economic indicators. While not guaranteed, forecasts help you make informed decisions about when to buy or refinance. Understanding rate trends can help you time your purchase or refinance for maximum savings.',
    },
]

export const MortgageRatesPage: React.FC<MortgageRatesPageProps> = ({
    'data-id': dataId,
}) => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

    return (
        <div data-id={dataId} className="w-full bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Today's Rocket
                            <br />
                            Mortgage® rates
                        </h1>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Check today's rates and get a personalized estimate in seconds
                            with zero impact to your credit score.
                        </p>
                        <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                            Estimate my rate
                        </button>
                    </div>

                    {/* Rate Type Tabs */}
                    <div className="flex justify-center gap-4 mb-8 border-b">
                        <button className="pb-3 px-4 border-b-2 border-black font-semibold">
                            Purchase rates
                        </button>
                        <button className="pb-3 px-4 text-gray-500 hover:text-black">
                            Refinance rates
                        </button>
                    </div>

                    <p className="text-xs text-gray-500 text-center mb-8 max-w-4xl mx-auto">
                        All rates are current as of {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} PST on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.
                        Monthly payment estimates above are for a loan amount of $350K.
                        Taxes and insurance are excluded from the estimate, your actual
                        payment will be greater.
                    </p>

                    {/* Rate Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {rateCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 border hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold">{card.title}</h3>
                                    {index === 0 && (
                                        <span className="flex items-center gap-1 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                                            <Star className="w-3 h-3 fill-current" />
                                            Call now
                                        </span>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Rate</p>
                                        <p className="text-2xl font-bold">{card.rate}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">APR</p>
                                        <p className="text-2xl font-bold">{card.apr}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Mo. payment</p>
                                        <p className="text-2xl font-bold">{card.monthlyPayment}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Points</p>
                                        <p className="text-sm font-bold">{card.points}</p>
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

                        {/* Home Equity Card */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="/image.png"
                                alt="Home equity"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    You could get 8% off your interest rate if you qualify
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Find out where you stand with your credit and get
                                    personalized recommendations on your property value.
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                        📱 Call now
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                        Rates are current as of {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} PST on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>
            </div>

            {/* Explore Connection Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    Explore the connection
                    <br />
                    between rate and monthly
                    <br />
                    payment
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {calculatorOptions.map((option, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-8">
                            <div className="text-4xl mb-4">{option.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                            <p className="text-gray-600 mb-6">{option.description}</p>
                            <button className="flex items-center gap-2 text-black font-semibold hover:underline">
                                <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Personalized Rate Section */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                What's your personalized
                                <br />
                                mortgage rate?
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Knowing where you stand today will help you make a smart
                                decision on when to refinance. Get a personalized rate based on
                                your income and credit profile.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Your tailored rate can be found in less than 2 minutes — and
                                it's free!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="border-2 border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                                    Connect with an expert
                                </button>
                                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                    Start my approval
                                </button>
                            </div>
                        </div>
                        <div>
                            <img
                                src="/image5.png"
                                alt="Happy homeowner"
                                className="rounded-2xl w-full h-auto shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-red-600 text-white rounded-2xl p-8 sm:p-12 flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                Join our clients who give
                                <br />
                                us 5 stars and
                                <br />
                                service
                            </h2>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="font-bold text-lg">Trustpilot</span>
                            </div>
                            <p className="text-gray-700 mb-4">
                                "We were able to ask questions as documents were submitted in
                                a timely manner and way clear text easy find her best
                            </p>
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-green-500 text-green-500"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600">❤️ G from OR</p>
                        </div>
                        <div className="flex justify-center gap-2">
                            <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200">
                                ‹
                            </button>
                            <span className="text-sm text-gray-500">1 / 6</span>
                            <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200">
                                ›
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Learning Articles */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        Learn about mortgage rates
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
                                        <span className="text-xs text-gray-500">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <a href="#" className="text-sm font-semibold hover:underline">
                            View our blog
                        </a>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Mortgage interest rate
                    <br />
                    FAQs
                </h2>
                <p className="text-gray-600 mb-8">
                    Still have questions? Check out commonly asked questions about today's
                    mortgage interest rates. Check out our{' '}
                    <a href="#" className="underline">
                        Learning Center
                    </a>{' '}
                    for more answers.
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
