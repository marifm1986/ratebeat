import React, { useState } from 'react'
import {
    ChevronRight,
    DollarSign,
    TrendingDown,
    CreditCard,
    Home,
    Check,
    ChevronDown,
} from 'lucide-react'
interface CashOutRefinanceProps {
    'data-id'?: string
}
export const CashOutRefinance: React.FC<CashOutRefinanceProps> = ({
    'data-id': dataId,
}) => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }
    const benefits = [
        {
            icon: DollarSign,
            title: 'Equity becomes cash',
            description:
                'Get cash without selling your home. Enjoy access to the cash you need instantly, hassle-free.',
        },
        {
            icon: TrendingDown,
            title: 'Lower interest rate',
            description:
                'Replacing high-interest debt with a lower rate could save you money each month.',
        },
        {
            icon: CreditCard,
            title: 'One monthly payment',
            description:
                'Simplify life by having everything together in one mortgage payment instead of many loans.',
        },
    ]
    const flexibilityItems = [
        'Renovate your space and boost equity',
        'Pay for education that opens new doors',
        'Take a big first step towards debt-free living',
        'Invest in yourself and grow your net worth',
    ]
    const faqs = [
        {
            question: 'Is a cash-out refinance right for me?',
            answer:
                'A cash-out refinance might be right if you: have equity in your home that you want to access as cash, want a lower interest rate on your mortgage payments, want to consolidate high-interest debt, or plan to use the cash for a purpose that adds long-term value.',
        },
        {
            question: 'How does a cash-out refinance work?',
            answer:
                "A cash-out refinance replaces your current mortgage with a larger loan. The difference between the new loan and your old mortgage balance is given to you in cash. You'll make one monthly payment on the new, larger mortgage.",
        },
        {
            question:
                'How is a cash-out refinance different from a cash-out loan refinance?',
            answer:
                "These terms are often used interchangeably. Both refer to refinancing your mortgage for more than you owe and receiving the difference in cash. The key is that you're replacing your existing mortgage with a new one.",
        },
        {
            question: 'What can I use a cash-out refinance for?',
            answer:
                "You can use the cash for virtually anything: home improvements, debt consolidation, education expenses, starting a business, emergency expenses, or investment opportunities. However, using it for purposes that increase your home's value or improve your financial situation is generally recommended.",
        },
        {
            question: 'What are the closing costs for a cash-out refinance?',
            answer:
                'Closing costs typically range from 2% to 5% of the loan amount and may include: appraisal fees, origination fees, title insurance, credit report fees, and other standard mortgage closing costs. Some lenders offer options to roll these costs into your loan.',
        },
    ]
    return (
        <div className="w-full bg-white" data-id={dataId}>
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div>
                        <p className="text-sm text-gray-600 mb-4">CASH-OUT REFINANCE</p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Turn your home's equity into cash
                        </h1>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Whether it's a home project, paying off debt or another big
                            expense, there's a Ratebeat® Mortgage home loan that'll turn the
                            equity in your home into the cash you need to make it happen.
                        </p>
                        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            See what you qualify for
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661281211518-7bc99840fe64?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                            alt="Family at home"
                            className="rounded-3xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* Secondary Hero Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Get a mortgage that fits your life & goals
                            </h2>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                You can use your home's equity to get cash now. The difference
                                between what you owe and what your home is worth is your equity,
                                and you can use it to make the most of your money.
                            </p>
                            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                Understand the details
                            </button>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <img
                                src="./know-your-equiety-and-get-the-cash-you-need.webp"
                                alt="Equity calculator"
                                className="rounded-3xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Lock Rate Section */}
            <section className="py-12 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Lock a new rate & get funded
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 mb-4">
                                        <Icon className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-center">
                        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            Explore cash-out
                        </button>
                    </div>
                </div>
            </section>
            {/* Financial Flexibility Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                                Discover financial flexibility
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Use the equity you've built to create new opportunities.
                            </p>
                            <div className="space-y-4 mb-8">
                                {flexibilityItems.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black flex items-center justify-center mt-0.5">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-gray-900">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                Understand cash-out
                            </button>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop"
                                alt="Woman working"
                                className="rounded-3xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Guidelines Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Guidelines for cash-out refinancing
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Here's what you need to know if you'd like to borrow more than you
                            owe and get the extra cash.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-red-500 text-white p-8 rounded-2xl">
                            <DollarSign className="w-8 h-8 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Equity</h3>
                            <p className="text-sm mb-6 opacity-90">
                                You must have equity in your home. Most lenders will let you
                                borrow up to 80% of your home's value.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                                Understand equity <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                            <CreditCard className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Credit</h3>
                            <p className="text-sm mb-6 text-gray-600">
                                You'll typically need a credit score of 620 or higher, depending
                                on the loan type.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                About credit <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                            <TrendingDown className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                Debt-to-income
                            </h3>
                            <p className="text-sm mb-6 text-gray-600">
                                Your monthly debt payments shouldn't exceed 50% of your gross
                                income.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                About debt-to-income <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                            <Home className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                Your home
                            </h3>
                            <p className="text-sm mb-6 text-gray-600">
                                Your home must meet minimum property standards and may need an
                                appraisal.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                About appraisals <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Comparison Table Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Compare what's out there
                        </h2>
                        <p className="text-gray-600">
                            Let's break it down so you can see the difference between a
                            cash-out option.
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-gray-300">
                                    <th className="text-left py-4 px-4"></th>
                                    <th className="text-center py-4 px-4 font-bold text-gray-900">
                                        Cash-out refinance
                                    </th>
                                    <th className="text-center py-4 px-4 font-bold text-gray-900">
                                        Rate-and-term refinance
                                    </th>
                                    <th className="text-center py-4 px-4 font-bold text-gray-900">
                                        Home Equity Loan
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 px-4 font-semibold text-gray-900">
                                        Allows for rate reduction
                                    </td>
                                    <td className="text-center py-4 px-4">Yes</td>
                                    <td className="text-center py-4 px-4">Yes</td>
                                    <td className="text-center py-4 px-4">
                                        No (fixed second loan)
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 px-4 font-semibold text-gray-900">
                                        Accesses home equity
                                    </td>
                                    <td className="text-center py-4 px-4">Yes</td>
                                    <td className="text-center py-4 px-4">No</td>
                                    <td className="text-center py-4 px-4">Yes</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-4 px-4 font-semibold text-gray-900">
                                        Best for
                                    </td>
                                    <td className="text-center py-4 px-4">Accessing cash</td>
                                    <td className="text-center py-4 px-4">
                                        Lowering monthly payments
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        Keeping current mortgage intact
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center gap-4 mt-8">
                        <button className="text-gray-900 underline hover:text-gray-700">
                            Learn more
                        </button>
                        <button className="text-gray-900 underline hover:text-gray-700">
                            Learn more
                        </button>
                    </div>
                </div>
            </section>
            {/* Resources Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            Free resources & guidance
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                                alt="Couple discussing"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-gray-900">
                                    Cash-out refinance guide
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
                                alt="House exterior"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-gray-900">
                                    Cash-out refinance vs. HELOC
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop"
                                alt="Woman smiling"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-gray-900">
                                    Refinance to pay off debt: Is it right for you?
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Frequently asked questions
                    </h2>
                    <p className="text-gray-600 mb-12">
                        We can answer any questions about cash-out refinancing, and we're
                        here to help.
                    </p>
                    <div className="space-y-4 mb-8">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {openFAQ === index && (
                                    <div className="px-6 pb-6 text-gray-600">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                            Call (888) 980-6716
                        </button>
                        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            Chat live
                        </button>
                    </div>
                    <div className="mt-8 text-center">
                        <button className="text-gray-900 underline hover:text-gray-700">
                            Learn more about cash-out refinance
                        </button>
                    </div>
                </div>
            </section>
            {/* Final CTA */}
            <section className="bg-gray-900 text-white py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Ready to put your equity to work?
                    </h2>
                    <p className="text-gray-300 mb-8">
                        We're pretty sure Ratebeat can help you out. We've already helped 3
                        million families. Let's see if we're right for you.
                    </p>
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
                        Explore cash-out
                    </button>
                </div>
            </section>
        </div>
    )
}
