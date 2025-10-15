import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'

interface JumboLoanRatesPageProps {
    'data-id'?: string
}

const rateCards = [
    {
        title: '30-year jumbo fixed',
        rate: '6.625%',
        apr: '6.69%',
        monthlyPayment: '$8,333',
        points: 'Varies',
        loanAmount: '$1.3M',
    },
    {
        title: '30-year VA jumbo',
        rate: '6.81%',
        apr: '7.01%',
        monthlyPayment: '$8,882',
        points: 'Varies',
        loanAmount: '$1.8M',
    },
]

const calculatorOptions = [
    {
        title: 'Mortgage calculator',
        description:
            'Try playing with different loan amounts, and interest rates to see how it changes monthly mortgage payments.',
        icon: '📊',
        href: '/mortgage-Calculator',
    },
    {
        title: 'Home affordability calculator',
        description:
            'Estimate your budget for a home and the rate you may need to come within your budget to stay comfortably prepared.',
        icon: '🏠',
        href: '/affordability-calculator',
    },
]

const factorsList = [
    {
        title: 'Economic',
        description:
            'Macroeconomic trends like the federal funds rate and the housing market can have large impacts.',
        icon: '📊',
    },
    {
        title: 'Personal',
        description:
            'Your credit score, down payment, and debt-to-income ratio all play a major role in determining your interest rate and how much you\'ll pay.',
        icon: '👤',
    },
    {
        title: 'Loan term and type of rate',
        description:
            'Shorter loan terms usually have lower rates. Whether you choose a fixed or adjustable rate (or 5-year vs 10-year etc.) will also affect the rate you can lock in.',
        icon: '📋',
    },
]

const prosConsList = {
    pros: [
        {
            title: 'High-value home purchases',
            description:
                'Jumbo loans let you finance expensive homes that exceed conforming loan limits.',
        },
        {
            title: 'Competitive rates',
            description:
                'With strong credit and financial profile, jumbo loan rates can be competitive.',
        },
        {
            title: 'Less pressure to make huge down payments',
            description:
                'Many jumbo loans require just 10% to 20% down. You don\'t need to put down 30% to buy a home.',
        },
        {
            title: 'Variety of product types',
            description:
                'Like conventional loans, you can get fixed-rate, adjustable-rate and different term options with jumbo loans (JUMBOs).',
        },
    ],
    cons: [
        {
            title: 'Stricter qualification',
            description:
                'Borrowing jumbo loans are tougher. Standards include higher credit scores and larger reserves.',
        },
        {
            title: 'You\'ll pay more interest overall',
            description:
                'Since you have a bigger loan amount, a standard and consistent 4% increase in interest rate can make a much larger difference to your bottom line than a smaller loan.',
        },
        {
            title: 'Higher closing costs',
            description:
                'You may end up paying 0.5% to 1.5% more in origination fees and closing costs with a jumbo loan. Some lenders also require two appraisals, which could add costs. Having multiple appraisals is not the norm though.',
        },
        {
            title: 'Close on your own terms',
            description:
                'Because of how large these loans are, you can\'t refinance as easily. It\'s typically harder to make a short direct downward to 15 years when you have a 30-year as a Jumbo.',
        },
    ],
}

const learningArticles = [
    {
        image: '/image6.png',
        title: 'Jumbo loan. Limits, rates, requirements and more',
    },
    {
        image: '/image2.png',
        title: 'Opening new doors to homeownership with a Jumbo Smart loan',
    },
    {
        image: '/image3.png',
        title: 'Jumbo loan vs. conventional loan - what\'s the difference?',
    },
]

const faqItems = [
    {
        question: 'What are jumbo loan rates?',
        answer:
            'Jumbo loan rates are the interest rates charged on jumbo mortgages—loans that exceed conforming loan limits set by Fannie Mae and Freddie Mac. In most areas of the US, this means loans above $766,550 (2024), though the limit is higher in high-cost areas. Rates can vary widely based on your credit, down payment, and current market conditions.',
    },
    {
        question: 'What is a jumbo loan?',
        answer:
            'A jumbo loan is a mortgage that exceeds the conforming loan limits set by the Federal Housing Finance Agency (FHFA). These loans are typically used to finance luxury properties or homes in highly competitive real estate markets. Since these loans aren\'t backed by Fannie Mae or Freddie Mac, lenders take on more risk, which usually means stricter qualification requirements.',
    },
    {
        question: 'When would you need a jumbo loan?',
        answer:
            'You\'ll need a jumbo loan if the amount you\'re borrowing exceeds the conforming loan limits in your area. For example, if you\'re buying a $1.2 million home with 20% down, you\'d need a loan of $960,000—well above standard conforming limits. This is common in expensive housing markets like California, New York, or Hawaii.',
    },
    {
        question: 'How do I qualify for a jumbo loan?',
        answer:
            'To qualify for a jumbo loan, you typically need: a credit score of at least 700 (though 740+ is preferred), a debt-to-income ratio below 43%, significant cash reserves (often 6-12 months of payments), a down payment of at least 10-20%, full documentation of income and assets, and a strong employment history. Requirements vary by lender.',
    },
    {
        question: 'Are jumbo loan rates higher than conventional?',
        answer:
            'Not always. Jumbo loan rates used to be consistently higher, but the gap has narrowed in recent years. Sometimes jumbo rates are even lower than conventional rates, especially for borrowers with excellent credit and substantial assets. The rate you get depends heavily on your financial profile and the current market.',
    },
    {
        question: 'What\'s a jumbo loan?',
        answer:
            'A jumbo loan (or non-conforming loan) is any mortgage that\'s larger than the limits set by Fannie Mae and Freddie Mac. For 2024, this means loans over $766,550 in most counties, or up to $1,149,825 in high-cost areas. These loans follow different underwriting standards since they can\'t be sold to government-sponsored enterprises.',
    },
    {
        question: 'Is the mortgage process different for a jumbo loan?',
        answer:
            'Yes and no. The application process itself is similar, but expect: more documentation requirements, possibly two property appraisals instead of one, stricter income and asset verification, longer processing times, and more scrutiny of your financial history. Lenders want to be absolutely certain you can handle the larger payment.',
    },
    {
        question: 'Should I get a jumbo loan?',
        answer:
            'Consider a jumbo loan if: you\'re buying a high-value property that requires borrowing above conforming limits, you have excellent credit and substantial savings, you can comfortably afford the monthly payments with room to spare, and you plan to stay in the home long-term. Make sure the benefits outweigh the stricter requirements and potential costs.',
    },
]

export const JumboLoanRatesPage: React.FC<JumboLoanRatesPageProps> = ({
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
                                Jumbo loan rates
                            </h1>
                            <p className="text-gray-600 mb-6 text-lg">
                                Looking to buy a home? Check out our current rates for
                                buying a home. Then go all the way past sections like what'll
                                get you the best rate to home.
                            </p>
                            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Estimate my rate
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="/image5.png"
                                alt="Family at dining table"
                                className="rounded-2xl w-full h-auto shadow-lg"
                            />
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
                        Sample rates are current as of {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} PST on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Rates will vary based on a range of factors. Sample rates are current as of the publication date to the general audience.
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
                                <div className="mb-4">
                                    <p className="text-xs text-gray-500 mb-1">Loan amount</p>
                                    <p className="text-lg font-bold">{card.loanAmount}</p>
                                </div>
                                <button className="w-full border-2 border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors mb-3">
                                    Estimate my rate
                                </button>
                                <a
                                    href="/jumbo-loan"
                                    className="block text-center text-sm text-gray-600 hover:text-black"
                                >
                                    Learn about Jumbo Loans
                                </a>
                            </div>
                        ))}

                        {/* Special Card - Will you need a jumbo loan? */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="/image7.png"
                                alt="Person using calculator"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    Will you need a jumbo
                                    loan?
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Find out whether the amount you'll need to borrow to
                                    purchase your dream home will put you in jumbo loan
                                    territory.
                                </p>
                                <a href="/affordability-calculator" className="text-sm font-semibold hover:underline flex items-center gap-1">
                                    Read more <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                        These rates are current at {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} PST on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.
                    </p>
                </div>
            </div>

            {/* Explore Connection Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    Explore the connection
                </h2>
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    between rate and monthly
                    <br />
                    payment
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {calculatorOptions.map((option, index) => (
                        <a
                            key={index}
                            href={option.href}
                            className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
                        >
                            <div className="text-4xl mb-4">{option.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                            <p className="text-gray-600 mb-4">{option.description}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Discover Personalized Rate Section */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Discover your
                        <br />
                        personalized rate
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        If you want to know what you qualify for, what are typical rates
                        in your area, or what it will take to afford your dream home, let
                        us know! We can help you explore the right next step.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                            Chat with an advisor
                        </button>
                        <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                            Start my application
                        </button>
                    </div>
                </div>
            </div>

            {/* What Factors Determine Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="/image8.png"
                            alt="Woman thinking"
                            className="rounded-2xl w-full h-auto shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            What factors determine
                            <br />
                            your jumbo loan rate?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            You can't control some things that determine your interest rate.
                            Others, like credit score, are within your control. No matter what
                            the factors are that affect your odds, you get a clear picture
                            of what to expect.
                        </p>
                        <div className="space-y-6">
                            {factorsList.map((factor, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                                            {factor.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
                                        <p className="text-gray-600">{factor.description}</p>
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
                        Pros and cons of a jumbo
                        <br />
                        loan
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Pros */}
                        <div className="bg-white rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold">+</span>
                                </div>
                                <h3 className="text-2xl font-bold">PROS</h3>
                            </div>
                            <ul className="space-y-6">
                                {prosConsList.pros.map((pro, index) => (
                                    <li key={index}>
                                        <h4 className="font-bold mb-2">{pro.title}</h4>
                                        <p className="text-gray-600 text-sm">{pro.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cons */}
                        <div className="bg-white rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                    <span className="text-red-600 font-bold">−</span>
                                </div>
                                <h3 className="text-2xl font-bold">CONS</h3>
                            </div>
                            <ul className="space-y-6">
                                {prosConsList.cons.map((con, index) => (
                                    <li key={index}>
                                        <h4 className="font-bold mb-2">{con.title}</h4>
                                        <p className="text-gray-600 text-sm">{con.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Jumbo Loan Rate FAQ Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Jumbo loan rate
                </h2>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    frequently asked
                </h2>
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                    questions
                </h2>
                <p className="text-gray-600 mb-8 max-w-3xl">
                    Trying to figure out what a jumbo loan is? Curious how jumbo rates
                    compare to other loans? We've collected questions people
                    understand the most when you and what better loan option it takes.
                </p>

                <div className="space-y-4 mb-12">
                    {faqItems.map((faq, index) => (
                        <div key={index} className="border rounded-xl overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                                onClick={() =>
                                    setExpandedFaq(expandedFaq === index ? null : index)
                                }
                            >
                                <span className="font-semibold text-lg pr-4">
                                    {faq.question}
                                </span>
                                <ChevronRight
                                    className={`w-6 h-6 flex-shrink-0 transition-transform ${
                                        expandedFaq === index ? 'rotate-90' : ''
                                    }`}
                                />
                            </button>
                            {expandedFaq === index && (
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-sm text-gray-500">
                    Still require more documentation than every form to get your actual rate based on the market today.
                </p>
            </div>

            {/* Learn About Jumbo Loans Section */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                        Learn about jumbo loans
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {learningArticles.map((article, index) => (
                            <a
                                key={index}
                                href="#"
                                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-lg group-hover:underline">
                                        {article.title}
                                    </h3>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a href="/blog" className="text-sm font-semibold hover:underline">
                            Visit our Learning Center →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
