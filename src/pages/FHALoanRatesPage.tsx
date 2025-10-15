import React, { useState } from 'react'
import { ChevronRight, Star } from 'lucide-react'

interface FHALoanRatesPageProps {
    'data-id'?: string
}

const rateCards = [
    {
        title: '30-year FHA',
        rate: '5.875%',
        apr: '6.44%',
        monthlyPayment: '$2,060',
        points: '2 (points)',
    },
    {
        title: '20-year FHA',
        rate: '5.500%',
        apr: '6.15%',
        monthlyPayment: '$2,342',
        points: '2 (points)',
    },
    {
        title: '30-year FHA',
        rate: '5.875%',
        apr: '6.44%',
        monthlyPayment: '$2,060',
        points: '2 (points)',
    },
]

const additionalRateCards = [
    {
        title: '15-year FHA',
        rate: '5.25%',
        apr: '5.90%',
        monthlyPayment: '$2,847',
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
        title: 'Credit score',
        description:
            'Your credit score plays a big role in the interest rate you\'ll receive. Higher credit scores typically qualify for better rates.',
        icon: '📊',
    },
    {
        title: 'Down payment',
        description:
            'The size of your down payment can affect your rate. With FHA loans, you can put down as little as 3.5%.',
        icon: '💰',
    },
    {
        title: 'Market conditions',
        description:
            'Economic factors and Federal Reserve policies influence FHA loan rates, just like other mortgage rates.',
        icon: '📈',
    },
]

const prosConsList = {
    pros: [
        {
            title: 'Low down payment',
            description:
                'FHA loans allow qualified borrowers with a minimum credit score to make a down payment as low as 3.5% — much less than most other loans require.',
        },
        {
            title: 'Flexible debt-to-income ratio',
            description:
                'FHA loans are more forgiving of borrowers with higher debt-to-income ratios, making homeownership more accessible.',
        },
        {
            title: 'Lower credit score requirements',
            description:
                'You may qualify for an FHA loan with a credit score as low as 580 (or even 500 with a larger down payment).',
        },
    ],
    cons: [
        {
            title: 'Mortgage insurance premiums',
            description:
                'FHA loans require both upfront mortgage insurance (1.75% of the loan amount) and ongoing monthly mortgage insurance payments.',
        },
        {
            title: 'Loan limits',
            description:
                'FHA loans have limits that vary by county. In most areas, there\'s a cap on how much you can borrow, which may limit your home options.',
        },
        {
            title: 'Property requirements',
            description:
                'The home must meet certain FHA property standards, which may require repairs before you can close.',
        },
    ],
}

const learningArticles = [
    {
        image: '/image2.png',
        title: 'FHA loans: Requirements, loan limits, credit limits and more',
    },
    {
        image: '/image3.png',
        title: 'FHA streamline rate-and-term refinance: How it works',
    },
    {
        image: '/image.png',
        title: 'What are the pros and cons of FHA loans?',
    },
]

const faqItems = [
    {
        question: 'What is an FHA loan?',
        answer:
            'An FHA loan is a mortgage insured by the Federal Housing Administration. These loans are designed to help first-time homebuyers and people with less-than-perfect credit qualify for a mortgage. The FHA doesn\'t lend money directly – instead, it insures loans made by approved lenders.',
    },
    {
        question: 'How do FHA loan mortgage rates work?',
        answer:
            'FHA loan rates work similarly to conventional mortgage rates. They fluctuate based on market conditions, economic factors, and your personal financial profile. However, FHA rates may be slightly different because the government insurance reduces the lender\'s risk.',
    },
    {
        question: 'How do FHA rates compare to other rates?',
        answer:
            'FHA rates are often competitive with conventional loan rates, and sometimes even lower. However, when you factor in the mortgage insurance premiums required with FHA loans, the total cost may be higher over time. It\'s important to compare the complete picture, not just the interest rate.',
    },
    {
        question: 'What are FHA loan limits?',
        answer:
            'FHA loan limits vary by county and are based on local median home prices. In 2024, the standard limit for a single-family home is $498,257 in most areas, but can go up to $1,149,825 in high-cost areas. You can check the specific limits for your county on the HUD website.',
    },
    {
        question: 'What credit score do I need?',
        answer:
            'The minimum credit score for an FHA loan is typically 580 for a 3.5% down payment. If your credit score is between 500-579, you may still qualify but will need to make a larger down payment of at least 10%. Some lenders may have higher credit score requirements.',
    },
    {
        question: 'What are the different types of FHA loans?',
        answer:
            'There are several types of FHA loans: FHA 203(b) (standard home purchase loan), FHA 203(k) (renovation loan), FHA Streamline Refinance (for current FHA borrowers), FHA Cash-Out Refinance, and FHA Energy Efficient Mortgage. Each serves different purposes and has specific requirements.',
    },
    {
        question: 'Can I get an FHA loan if I already own a home?',
        answer:
            'Yes, you can get an FHA loan even if you currently own a home. However, FHA loans are typically intended as primary residence loans, so you\'ll need to live in the property you\'re purchasing. There are limited exceptions for certain situations like job relocation.',
    },
    {
        question: 'How is FHA mortgage insurance calculated?',
        answer:
            'FHA mortgage insurance has two components: an upfront premium (currently 1.75% of the loan amount) that can be rolled into your loan, and an annual premium (ranging from 0.45% to 1.05% of the loan amount) that\'s divided into monthly payments. The exact amount depends on your loan term, loan-to-value ratio, and loan amount.',
    },
    {
        question: 'Do FHA loans have more closing costs?',
        answer:
            'FHA loans don\'t necessarily have higher closing costs than conventional loans, but the upfront mortgage insurance premium adds to your initial costs. Standard closing costs for FHA loans include appraisal fees, title insurance, origination fees, and other typical mortgage expenses. However, FHA allows sellers to contribute up to 6% toward your closing costs.',
    },
]

export const FHALoanRatesPage: React.FC<FHALoanRatesPageProps> = ({
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
                                FHA loan rates
                            </h1>
                            <p className="text-gray-600 mb-6 text-lg">
                                Looking for your dream home? Whether you're a first-time buyer or have less-than-perfect credit, an FHA loan can make your goal of homeownership a reality.
                            </p>
                            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Estimate my rate
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="/image8.png"
                                alt="Couple packing boxes"
                                className="rounded-2xl w-full h-auto shadow-lg"
                            />
                            <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                                <span className="text-2xl">📞</span>
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
                        All rates are current as of {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} PST on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Monthly payment estimates above are for a loan amount of $350K. Taxes and insurance are included, when the estimate, your situation payment will be greater.
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
                    </div>

                    {/* Additional Rate Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {additionalRateCards.map((card, index) => (
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
                                    Get personalized rate and see if you qualify for our low down payment options.
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
                                src="/image9.png"
                                alt="Couple reviewing documents"
                                className="rounded-2xl w-full h-auto shadow-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                What factors determine
                                <br />
                                your FHA loan rate?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Several factors influence the interest rate you'll receive on an FHA loan. Understanding these can help you get the best rate possible.
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
                    Pros and cons of an FHA loan
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
                                "Great experience! The team made the FHA loan process smooth and easy. Highly recommend for first-time buyers."
                            </p>
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-green-500 text-green-500"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600">❤️ M. Johnson</p>
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
                        FHA loan rates
                        <br />
                        frequently asked
                        <br />
                        questions
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Still have questions? Here are some things we hear the most often from people interested in FHA loans. Visit our{' '}
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
                    Learn about FHA loans
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
