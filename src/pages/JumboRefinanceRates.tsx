import React, { useState } from 'react'
import {
    ChevronRight,
    Check,
    X,
    TrendingUp,
    User,
    DollarSign,
} from 'lucide-react'
interface JumboRefinanceRatesProps {
    'data-id'?: string
}
const rateCards = [
    {
        title: '30-year jumbo fixed',
        rate: '6.625%',
        apr: '6.82%',
        monthlyPayment: '$6,333',
        points: '1.75 (points)',
    },
    {
        title: '30-year VA jumbo',
        rate: '7.250%',
        apr: '6.87%',
        monthlyPayment: '$6,075',
        points: '2 (points)',
    },
]
const factorsList = [
    {
        icon: TrendingUp,
        title: 'Economic',
        description:
            'Economic factors like Federal Reserve policy, inflation and the bond market all play a role in determining jumbo rates.',
    },
    {
        icon: User,
        title: 'Personal',
        description:
            'Your credit score, debt-to-income ratio and down payment size all impact the rate you qualify for.',
    },
    {
        icon: DollarSign,
        title: 'Loan term and type of rate',
        description:
            'Whether you choose a 15-year or 30-year loan, and whether you go with a fixed or adjustable rate, will affect your rate.',
    },
]
const prosConsList = {
    pros: [
        {
            title: 'Take cash out',
            description:
                "You can refinance your existing jumbo loan and pull cash from your home's equity to pay for other costs.",
        },
        {
            title: 'Pay your mortgage off sooner',
            description:
                'If you want to be mortgage-free faster, you can shorten your term, which can increase monthly payments.',
        },
        {
            title: 'Consolidate debt',
            description:
                'Refinancing a jumbo loan can allow you to consolidate high-interest debt and lengthen your term, which is a way to lower your mortgage payment.',
        },
    ],
    cons: [
        {
            title: 'There are costs for getting a new mortgage',
            description:
                "Just like when you bought your home, you can expect closing costs when refinancing - although they're typically lower.",
        },
        {
            title: 'Your existing mortgage payment will increase',
            description:
                "If you're refinancing to take cash out, borrowing more than the amount increases your debt.",
        },
        {
            title: "You'll need reserves when refinancing a jumbo loan.",
            description: '',
        },
    ],
}
const faqItems = [
    {
        question: 'How does refinancing a jumbo loan work?',
        answer:
            'Refinancing a jumbo loan works similarly to refinancing any other mortgage. You apply with a lender, get approved, and close on the new loan, which pays off your existing mortgage. The process typically takes 30-45 days.',
    },
    {
        question: 'How do I know if my jumbo loan when refinancing?',
        answer:
            'A jumbo loan exceeds the conforming loan limits set by the Federal Housing Finance Agency. These limits vary by location and property type, but generally, any loan over $726,200 is considered a jumbo loan in most areas.',
    },
    {
        question: 'How do I qualify for a jumbo loan refinance rate?',
        answer:
            'To qualify for a jumbo loan refinance, you typically need a credit score of at least 700, a debt-to-income ratio below 43%, significant cash reserves, and substantial equity in your home. Lenders may have additional requirements.',
    },
    {
        question: 'Should I refinance my jumbo loan?',
        answer:
            'You should consider refinancing your jumbo loan if interest rates have dropped significantly, your credit score has improved, you want to change your loan term, or you need to access home equity through a cash-out refinance.',
    },
    {
        question: 'What kinds of jumbo loans are there and can I refinance?',
        answer:
            'There are several types of jumbo loans, including fixed-rate jumbo loans, adjustable-rate jumbo mortgages (ARMs), jumbo interest-only loans, and jumbo VA loans. Most jumbo loans can be refinanced, subject to lender requirements.',
    },
]
const learningArticles = [
    {
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
        title: 'How to refinance a jumbo loan',
        description:
            'Learn the step-by-step process of refinancing your jumbo mortgage.',
        readTime: '7 min read',
    },
    {
        image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400',
        title: 'Refinancing: What is it and how does it work?',
        description:
            'Understand the fundamentals of mortgage refinancing and when it makes sense.',
        readTime: '6 min read',
    },
    {
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400',
        title: 'How long does it take to refinance a house?',
        description:
            'Discover the typical timeline for completing a mortgage refinance.',
        readTime: '5 min read',
    },
]
export const JumboRefinanceRates: React.FC<JumboRefinanceRatesProps> = ({
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
                                Jumbo loan refinance rates
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Explore Rocket Mortgage® jumbo loan rates and refinancing
                                options. A lower jumbo rate could mean a lower monthly payment
                                and better terms. Find out what rate you can get today.
                            </p>
                            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Estimate my rate
                            </button>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600"
                                alt="Luxury home exterior"
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
                    Monthly payment estimates above are for a loan amount of $1.5M. Taxes
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
                                    <span className="text-sm font-bold">{card.points}</span>
                                </div>
                            </div>
                            <button className="w-full border-2 border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors mb-3">
                                Estimate my rate
                            </button>
                            <a
                                href="#"
                                className="block text-center text-sm text-gray-600 hover:text-black"
                            >
                                Learn about this jumbo loan
                            </a>
                        </div>
                    ))}
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
                            it to your advantage.
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
                            See how your mortgage payment breaks down between principal and
                            interest over the life of your loan.
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
                        If you're considering refinancing your jumbo loan, you'll want to
                        know your personalized rate and see if you can save. Get your rate
                        in less than 2 minutes with no impact to your credit score.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                            Get pre-approved
                        </button>
                        <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                            Start my application
                        </button>
                    </div>
                </div>
            </div>
            {/* Factors Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
                            alt="Couple reviewing finances"
                            className="rounded-2xl w-full h-auto shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            What factors determine your jumbo loan refinance rate?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Jumbo refinance rates depend on things that determine your
                            interest rate versus what's out of your control – and what you can
                            control will help you get the best rate possible.
                        </p>
                        <div className="space-y-6">
                            {factorsList.map((factor, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <factor.icon className="w-5 h-5 text-gray-700" />
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
                        Pros and cons of refinancing a jumbo loan
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                    Jumbo loan refinance
                </h2>
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
                        Learn about jumbo loans and refinancing
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
                                        <span className="text-xs text-gray-500">
                                            {article.readTime}
                                        </span>
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
                    800-555-0100. Lending services provided by Rocket Mortgage, LLC. NMLS
                    #3030. Equal Housing Lender. Licensed in 50 states.
                </p>
            </div>
        </div>
    )
}
