import React, { useState } from 'react'
import { ChevronRight, Star } from 'lucide-react'
interface RefinanceRatesPageProps {
    'data-id'?: string
}
const rateCards = [
    {
        title: '30-year fixed',
        rate: '6.875%',
        apr: '6.91%',
        monthlyPayment: '$2,307',
        points: '1.625 (points)',
        badge: null,
    },
    {
        title: '20-year fixed',
        rate: '6.375%',
        apr: '6.704%',
        monthlyPayment: '$2,573',
        points: '1.625 (points)',
        badge: null,
    },
    {
        title: '30-year FHA',
        rate: '6.625%',
        apr: '6.64%',
        monthlyPayment: '$2,287',
        points: '1.875 (points)',
        badge: null,
    },
    {
        title: '30-year jumbo fixed',
        rate: '7.250%',
        apr: '6.54%',
        monthlyPayment: '$3,419',
        points: '1.75 (points)',
        badge: null,
    },
    {
        title: '30-year VA',
        rate: '6.625%',
        apr: '6.07%',
        monthlyPayment: '$2,168',
        points: '1.875 (points)',
        badge: null,
    },
]
const refinanceOptions = [
    {
        title: 'Refinance calculator',
        description:
            'Find out how much you could save by refinancing by using our free calculator.',
        icon: '🧮',
    },
    {
        title: 'Free Official Mortgage Review®',
        description:
            'Let us guide you every step along the refinance process and help you find the best rate for your situation.',
        icon: '📋',
    },
]
const learningArticles = [
    {
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
        title: 'How Long Does It Take To Refinance A House?',
        description:
            'Learn about the typical timeline for refinancing your mortgage.',
    },
    {
        image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400',
        title: 'Pros and cons of refinancing a mortgage',
        description:
            'Understand the benefits and drawbacks of mortgage refinancing.',
    },
    {
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400',
        title: 'When to refinance: Which option is right for you?',
        description: 'Discover when refinancing makes the most financial sense.',
    },
]
const faqItems = [
    {
        question: 'Why should I refinance my mortgage?',
        answer:
            "Here are some of the most common reasons you might consider refinancing, whether it's lowering the mortgage rate over your loan or taking cash out of your home equity.",
    },
    {
        question: 'How does refinancing a mortgage work?',
        answer:
            'Refinancing replaces your current mortgage with a new loan. The process is similar to getting your original mortgage, including credit checks, home appraisal, and closing costs.',
    },
    {
        question: 'When should I refinance my mortgage?',
        answer:
            'Consider refinancing when interest rates drop, your credit score improves, you want to change your loan term, or you need to access home equity.',
    },
    {
        question: "How are today's refinance rates calculated?",
        answer:
            'Refinance rates are influenced by economic factors, your credit score, loan-to-value ratio, loan amount, and the type of loan you choose.',
    },
    {
        question: "What's a mortgage rate lock?",
        answer:
            'A rate lock guarantees your interest rate for a specified period, typically 30-60 days, protecting you from rate increases during the application process.',
    },
    {
        question: 'How do I lock in a rate?',
        answer:
            "You can lock in your rate once you've been pre-approved and have selected a loan option. Your lender will provide details on the lock period and any associated fees.",
    },
    {
        question: 'What does refinancing into a lower rate mean?',
        answer:
            'Refinancing into a lower rate means replacing your current mortgage with a new one that has a lower interest rate, which can reduce your monthly payment and total interest paid.',
    },
]
export const RefinanceRatesPage: React.FC<RefinanceRatesPageProps> = ({
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
                            Today's Ratebeat
                            <br />
                            Mortgage® refinance
                            <br />
                            rates
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
                        All rates are current as of 12:43 PM PST on October 10, 2024.
                        Monthly payment estimates above are for a loan amount of $350K.
                        Taxes and insurance are included when the estimate, your situation
                        payment will be greater.
                    </p>
                    {/* Rate Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {rateCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 border hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-bold mb-6">{card.title}</h3>
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
                        <div className="bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
                                alt="Home equity"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    Looking for home Equity Loan Rates?
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Refinance gives you a fixed interest rate, flexible payment
                                    terms, including how to pay off your HELOC.
                                </p>
                                <a href="#" className="text-sm font-semibold hover:underline">
                                    Explore home equity options
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                        Rates are current as of 12:43 PM PST on October 10, 2024
                    </p>
                </div>
            </div>
            {/* Estimate Your Refinancing Options */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    Estimate your refinancing
                    <br />
                    options
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {refinanceOptions.map((option, index) => (
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
                                What's your personalized mortgage rate?
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
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
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
                                Join our clients who
                                <br />
                                give us 5 stars for rates
                                <br />
                                and service.
                            </h2>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Trustpilot_logo.svg/200px-Trustpilot_logo.svg.png"
                                    alt="Trustpilot"
                                    className="h-6"
                                />
                            </div>
                            <p className="text-gray-700 mb-4">
                                "We were so pleased documentation. I got a great rate, and we
                                answered. Happy with the service."
                            </p>
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-green-500 text-green-500"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center gap-2">
                            <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-200">
                                ‹
                            </button>
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
            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Mortgage refinance rates
                    <br />
                    frequently asked questions
                </h2>
                <p className="text-gray-600 mb-8">
                    Still have questions? Here are the most frequently asked questions
                    about refinancing. Visit our{' '}
                    <a href="#" className="underline">
                        Learning Center
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
