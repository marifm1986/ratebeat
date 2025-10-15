import React, { useState } from 'react'
import { ChevronRight, Star } from 'lucide-react'

interface ThirtyYearMortgageRatesPageProps {
    'data-id'?: string
}

const rateCards = [
    {
        title: '30-year fixed',
        rate: '6.375%',
        apr: '6.44%',
        monthlyPayment: '$2,184',
        points: '2 (points)',
    },
    {
        title: '30-year FHA',
        rate: '5.875%',
        apr: '6.48%',
        monthlyPayment: '$2,060',
        points: '2 (points)',
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
        href: '/mortgage-Calculator',
    },
    {
        title: 'Home affordability calculator',
        description:
            'See how much home you can really afford and stay within your budget.',
        icon: '🏠',
        href: '/affordability-calculator',
    },
]

const factorsList = [
    {
        title: 'Economic factors',
        description:
            'Federal Reserve policies and the federal funds rate influence mortgage rates significantly.',
        icon: '📊',
    },
    {
        title: 'Personal',
        description:
            'Your credit score and financial history affect the rate lenders offer you.',
        icon: '👤',
    },
    {
        title: 'Loan type',
        description:
            'Conventional, FHA, VA, and jumbo loans each come with different rate structures.',
        icon: '🏦',
    },
]

const prosConsList = {
    pros: [
        {
            title: 'Predictability',
            description:
                'Your monthly payment (principal and interest) stays the same throughout the entire 30-year period.',
        },
        {
            title: 'Affordability',
            description:
                'Lower monthly payments give you more flexibility with cash flow and savings.',
        },
        {
            title: 'Long-term',
            description:
                'With more time to pay off the loan, you can settle into one property for the long term.',
        },
    ],
    cons: [
        {
            title: 'Higher interest',
            description:
                'You typically have a higher rate than you could get with a shorter term, which means you end up paying more in interest.',
        },
        {
            title: 'Less equity',
            description:
                'It can take years to build home equity, because you pay so much interest at the beginning.',
        },
        {
            title: 'Long commitment',
            description:
                'If you relocate or your financial situation changes, a 30-year term might not align with your goals.',
        },
    ],
}

const learningArticles = [
    {
        image: '/image2.png',
        title: 'What Is a 30-year fixed mortgage?',
    },
    {
        image: '/image3.png',
        title: 'Historical mortgage rates: 1971 to the present',
    },
    {
        image: '/image4.png',
        title: '15-year vs. 30-year mortgage',
    },
]

const faqItems = [
    {
        question: 'What is a 30-year mortgage rate?',
        answer:
            'A 30-year mortgage rate is the interest rate charged on a mortgage loan with a 30-year repayment term. This is one of the most popular mortgage options in the U.S. The rate can be fixed (staying the same for 30 years) or adjustable (changing periodically based on market conditions).',
    },
    {
        question: 'How does a 30-year fixed-rate mortgage work?',
        answer:
            'With a 30-year fixed-rate mortgage, you borrow money to buy a home and pay it back over 30 years with a consistent interest rate. Your monthly payment stays the same throughout the loan term, though the proportion going toward principal versus interest changes over time. Early payments are mostly interest, while later payments go more toward the principal balance.',
    },
    {
        question: 'How does a 30-year loan work with mortgage rates?',
        answer:
            'The mortgage rate determines how much interest you\'ll pay over the life of the loan. With a 30-year term, you\'ll pay more total interest compared to shorter terms, but your monthly payments will be lower. The rate is applied to your remaining balance each month to calculate the interest portion of your payment.',
    },
    {
        question: 'Is a lower interest rate always better?',
        answer:
            'Generally yes, but you should consider the full picture. A lower rate means less interest paid over time and lower monthly payments. However, you should also factor in closing costs, points, loan terms, and your long-term financial goals. Sometimes paying points upfront for a lower rate makes sense; other times it doesn\'t.',
    },
    {
        question: 'What should I look for in 30-year mortgage rates?',
        answer:
            'Look beyond just the interest rate. Consider the APR (which includes fees), whether rates are fixed or adjustable, loan origination fees, discount points, closing costs, lender reputation, and the total cost over the loan term. Compare offers from multiple lenders and ensure the loan structure aligns with your financial situation.',
    },
    {
        question: 'How does the Federal Reserve impact mortgage rates?',
        answer:
            'The Federal Reserve influences mortgage rates indirectly through its monetary policy decisions, particularly the federal funds rate. When the Fed raises rates to combat inflation, mortgage rates typically increase. When the Fed lowers rates to stimulate the economy, mortgage rates often decrease. However, mortgage rates are also influenced by bond market conditions and investor demand.',
    },
    {
        question: 'What are the pros and cons of a 30-year mortgage?',
        answer:
            'Pros: Lower monthly payments provide more budget flexibility, predictable payments with fixed rates, easier to qualify for compared to shorter terms, and allows you to invest money elsewhere. Cons: Higher total interest paid over the loan life, slower equity building in early years, higher interest rates compared to 15-year loans, and longer commitment period.',
    },
    {
        question: 'What\'s the difference between a 15-year and a 30-year fixed-rate mortgage?',
        answer:
            'The main differences are: Loan term (15 vs 30 years), monthly payment amount (15-year has higher payments), total interest paid (15-year pays significantly less), interest rates (15-year typically has lower rates), and equity building speed (15-year builds equity faster). A 15-year mortgage helps you own your home sooner and saves money on interest, while a 30-year offers more monthly flexibility.',
    },
]

export const ThirtyYearMortgageRatesPage: React.FC<ThirtyYearMortgageRatesPageProps> = ({
    'data-id': dataId,
}) => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

    return (
        <div data-id={dataId} className="w-full bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                30-year
                                <br />
                                mortgage rates
                            </h1>
                            <p className="text-gray-600 mb-6 text-lg">
                                See the current 30-year mortgage rate and explore how a
                                30-year fixed-rate mortgage affects your budget compared to other loan options.
                            </p>
                            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Check my rate
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="/image5.png"
                                alt="Person working on laptop"
                                className="rounded-2xl w-full h-auto shadow-lg"
                            />
                            <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                                <span className="text-2xl">📱</span>
                                <span className="text-sm font-medium">Call now</span>
                            </div>
                        </div>
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
                        Rates are current as of {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} PST on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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

                        {/* Special Card */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="/image6.png"
                                alt="Happy homeowner"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    We help make home
                                    <br />
                                    affordable
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Get the inside scoop on what you can afford and explore
                                    next steps on your path to homeownership.
                                </p>
                                <a href="#" className="text-sm font-semibold hover:underline">
                                    Calculate affordability →
                                </a>
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
                        <a
                            key={index}
                            href={option.href}
                            className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                        >
                            <div className="text-4xl mb-4">{option.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                            <p className="text-gray-600 mb-6">{option.description}</p>
                            <div className="flex items-center gap-2 text-black font-semibold">
                                <span>→</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Discover Personalized Rate Section */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        Discover your personalized
                        <br />
                        rate
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <img
                                src="/image7.png"
                                alt="Person reviewing documents"
                                className="rounded-2xl w-full h-auto shadow-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                Many factors determine
                                <br />
                                your 30-year mortgage
                                <br />
                                rate
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Knowing what things help influence your interest rate may
                                help you get the best 30-year mortgage deal for your
                                situation. Let's break a few of the most important factors down.
                            </p>
                            <div className="space-y-4">
                                {factorsList.map((factor, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="text-2xl">{factor.icon}</div>
                                        <div>
                                            <h4 className="font-bold mb-1">{factor.title}</h4>
                                            <p className="text-gray-600 text-sm">
                                                {factor.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pros and Cons Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    Pros and cons of a 30-year
                    <br />
                    mortgage
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Pros */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-green-600">✓</span> Pros
                        </h3>
                        <div className="space-y-6">
                            {prosConsList.pros.map((item, index) => (
                                <div key={index}>
                                    <h4 className="font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cons */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-red-600">✗</span> Cons
                        </h3>
                        <div className="space-y-6">
                            {prosConsList.cons.map((item, index) => (
                                <div key={index}>
                                    <h4 className="font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
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
                                us 5 stars for rates and
                                <br />
                                service
                            </h2>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="font-bold text-lg">⭐ Trustpilot</span>
                            </div>
                            <p className="text-gray-700 mb-4">
                                "The staff was knowledgeable and helpful, and they were
                                patient with us in every step of the way."
                            </p>
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-green-500 text-green-500"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600">❤️ E. Rogers</p>
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

            {/* FAQ Section */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        30-year mortgage rates
                        <br />
                        frequently asked
                        <br />
                        questions
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Still have questions? Here's what first-time buyers frequently ask
                        about 30-year rates. Learn more in our{' '}
                        <a href="#" className="underline">
                            Learning Center
                        </a>
                        .
                    </p>
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg border">
                                <button
                                    onClick={() =>
                                        setExpandedFaq(expandedFaq === index ? null : index)
                                    }
                                    className="w-full flex justify-between items-center text-left p-6"
                                >
                                    <h3 className="font-semibold text-lg pr-4">
                                        {item.question}
                                    </h3>
                                    <ChevronRight
                                        className={`w-5 h-5 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`}
                                    />
                                </button>
                                {expandedFaq === index && (
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-700 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Learning Articles */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    Learn more about mortgage rates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {learningArticles.map((article, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow border"
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-4">{article.title}</h3>
                                <div className="flex items-center justify-between">
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <a href="#" className="text-sm font-semibold hover:underline">
                        Visit our Learning Center →
                    </a>
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
