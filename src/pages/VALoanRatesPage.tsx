import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'

interface VALoanRatesPageProps {
    'data-id'?: string
}

const rateCards = [
    {
        title: '30-year VA',
        rate: '6.00%',
        apr: '6.625%',
        monthlyPayment: '$2,009',
        points: '2 (points)',
    },
    {
        title: '20-year VA',
        rate: '5.625%',
        apr: '6.125%',
        monthlyPayment: '$2,379',
        points: '2 (points)',
    },
    {
        title: '20-year VA',
        rate: '5.625%',
        apr: '6.125%',
        monthlyPayment: '$2,485',
        points: '2 (points)',
    },
]

const additionalRateCards = [
    {
        title: '15-year VA',
        rate: '5.25%',
        apr: '5.87%',
        monthlyPayment: '$2,847',
        points: '2 (points)',
    },
    {
        title: '30-year VA jumbo',
        rate: '5.45%',
        apr: '6.01%',
        monthlyPayment: '$3,127',
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
            'While VA loans don\'t have a minimum credit score requirement from the VA, most lenders require at least 620. A higher score can help you get better rates.',
        icon: '📊',
    },
    {
        title: 'Debt-to-income ratio (DTI)',
        description:
            'Your DTI shows how much of your monthly income goes toward debt. VA loans typically allow higher DTIs than other loans.',
        icon: '💰',
    },
    {
        title: 'Market conditions',
        description:
            'Economic factors like Federal Reserve policies and bond market activity influence VA loan rates, just like other mortgage rates.',
        icon: '📈',
    },
]

const prosConsList = {
    pros: [
        {
            title: 'No down payment',
            description:
                'Most VA loans don\'t require any down payment, making it easier for veterans and service members to buy a home.',
        },
        {
            title: 'Low (or no) mortgage insurance',
            description:
                'Unlike conventional loans, you don\'t pay ongoing mortgage insurance. You only pay a one-time VA funding fee, which can be rolled into your loan.',
        },
        {
            title: 'Lower credit score requirements',
            description:
                'VA loans are more forgiving of credit issues, making them accessible to more borrowers.',
        },
        {
            title: 'No prepayment penalties',
            description:
                'You can pay off your VA loan early without any penalties, which can save you thousands in interest.',
        },
    ],
    cons: [
        {
            title: 'VA funding fee',
            description:
                'Most VA loans require a one-time funding fee (typically 2.15% for first-time users), though veterans with service-connected disabilities and surviving spouses are exempt.',
        },
        {
            title: 'Minimum property requirements',
            description:
                'The property must meet VA minimum property requirements to ensure it\'s safe and sanitary. This may limit your options or require repairs before closing.',
        },
        {
            title: 'Closing costs',
            description:
                'Although you potentially can\'t make a down payment, you may still need to pay certain closing costs up front. Sellers can pay up to 4% of the loan amount.',
        },
    ],
}

const learningArticles = [
    {
        image: '/image2.png',
        title: 'VA loans: Rules, requirements, limits and more',
    },
    {
        image: '/image3.png',
        title: 'A guide to the types of VA loans',
    },
    {
        image: '/image4.png',
        title: 'VA loan down payment requirements',
    },
]

const faqItems = [
    {
        question: 'What is a VA loan?',
        answer:
            'A VA loan is a mortgage loan guaranteed by the U.S. Department of Veterans Affairs. These loans are available to active-duty service members, veterans, and eligible surviving spouses. The VA doesn\'t lend money directly – instead, it guarantees loans made by private lenders, which allows lenders to offer better terms.',
    },
    {
        question: 'Who can get a VA loan?',
        answer:
            'VA loans are available to active-duty service members, veterans who meet minimum service requirements, National Guard and Reserve members, and certain surviving spouses. You\'ll need a Certificate of Eligibility (COE) from the VA to apply. Most lenders also require a minimum credit score around 620, though the VA itself doesn\'t set a minimum.',
    },
    {
        question: 'Who qualifies for a VA loan?',
        answer:
            'To qualify, you typically need to meet service requirements (generally 90 consecutive days during wartime or 181 days during peacetime), have a valid Certificate of Eligibility, meet the lender\'s credit and income requirements, intend to occupy the home as your primary residence, and have sufficient income to cover monthly payments and other expenses.',
    },
    {
        question: 'Why use a VA loan vs. a VA loan?',
        answer:
            'VA loans often offer better terms than conventional loans: no down payment required (vs. typically 3-20% down), no private mortgage insurance (PMI), more flexible credit requirements, and competitive interest rates. However, you do pay a VA funding fee, and there are property requirements that must be met.',
    },
    {
        question: 'Are there limits to how much VA loan?',
        answer:
            'As of 2020, there is no longer a cap on VA loans for borrowers with full entitlement. However, the amount you can borrow still depends on what you can afford based on your income, debts, and credit profile. If you\'ve used your VA loan benefit before and haven\'t restored your full entitlement, limits may apply.',
    },
    {
        question: 'What are the different types of VA loans?',
        answer:
            'The main types include: VA Purchase Loans (for buying a home), VA Cash-Out Refinance (to refinance and take cash from equity), VA Interest Rate Reduction Refinance Loan (IRRRL or VA Streamline for lowering your rate), Native American Direct Loan (NADL for homes on federal trust land), and Adapted Housing Grants (for veterans with certain disabilities).',
    },
    {
        question: 'What is the difference between a VA loan and a conventional loan?',
        answer:
            'Key differences: VA loans require no down payment vs. conventional loans typically need 3-20% down; VA loans have no ongoing mortgage insurance vs. conventional loans require PMI with less than 20% down; VA loans have more flexible credit requirements; VA loans charge a one-time funding fee vs. conventional loans have ongoing PMI; and VA loans are only for eligible veterans and service members.',
    },
    {
        question: 'Should I use a VA loan mortgage loan?',
        answer:
            'If you\'re eligible for a VA loan and buying a primary residence, it\'s often your best option. The no down payment feature alone can save you tens of thousands of dollars upfront. The lack of PMI also saves money over the life of the loan. However, consider the funding fee and property requirements. Compare offers from multiple lenders to ensure you\'re getting the best deal.',
    },
    {
        question: 'Does a VA loan have mortgage insurance?',
        answer:
            'VA loans don\'t require monthly mortgage insurance premiums (MIP or PMI) like FHA and conventional loans do. Instead, you pay a one-time VA funding fee at closing, which can be rolled into your loan amount. This funding fee varies based on factors like your down payment amount, whether it\'s your first VA loan, and your military category. Some veterans with service-connected disabilities are exempt from this fee.',
    },
]

export const VALoanRatesPage: React.FC<VALoanRatesPageProps> = ({
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
                                VA loan rates
                            </h1>
                            <p className="text-gray-600 mb-6 text-lg">
                                Here's everything you need to know about VA loans and their rates. Whether you're a veteran, active-duty service member, or eligible surviving spouse, a VA loan can help you buy your home with little to no down payment.
                            </p>
                            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Estimate my rate
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="/image10.png"
                                alt="Service member"
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
                        All rates are current as of {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} PST on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Monthly payment estimates above are for a loan amount of $350K. Taxes and insurance are included in the estimate, your situation payment will be greater.
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
                                    Learn about VA loans
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
                                    Learn about jumbo loans
                                </a>
                            </div>
                        ))}

                        {/* Special Card */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src="/image11.png"
                                alt="Happy homeowner"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    We help make home
                                    <br />
                                    affordable.
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Get the inside scoop on what you can afford and calculate your payment with our free tools.
                                </p>
                                <a href="#" className="text-sm font-semibold hover:underline">
                                    Research our affordability tools →
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
                    <div className="max-w-2xl mx-auto text-center mb-12">
                        <p className="text-gray-600 mb-6">
                            If you're wondering what rate you may qualify for, take into account your credit score. See a tax-free cash back for a application will help you see where you stand and what you can expect.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Your tailored rate can be found in less than 2 minutes — and it's free!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Chat with an expert
                            </button>
                            <button className="border-2 border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                                Start my application
                            </button>
                        </div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                        Factors that determine
                        <br />
                        your VA loan rate
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-3xl">
                        VA loans are backed by the U.S. Department of Veterans Affairs and are available to eligible veterans, active-duty service members, and surviving spouses. Several factors influence the interest rate you'll get on a VA loan. Here are the main ones:
                    </p>
                    <div className="space-y-6">
                        {factorsList.map((factor, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="text-2xl flex-shrink-0">{factor.icon}</div>
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

            {/* Pros and Cons Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    Pros and cons of a VA loan
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

            {/* FAQ Section */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        VA loan rates
                        <br />
                        frequently asked
                        <br />
                        questions
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Have more questions? Here's the most frequent things we hear from people looking for and getting VA loans. Check out our{' '}
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
                    Learn about VA loans
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
                    800-555-0100. Lending services provided by Ratebeat, LLC. NMLS
                    #3030. Equal Housing Lender. Licensed in 50 states.
                </p>
            </div>
        </div>
    )
}
