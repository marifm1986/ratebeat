import React, { useState } from 'react'
import {
    ChevronRight,
    Home,
    CreditCard,
    DollarSign,
    TrendingDown,
    MessageCircle,
    Phone,
    ChevronDown,
    Check,
} from 'lucide-react'
interface HomeReadyHomePossibleProps {
    'data-id'?: string
}
export const HomeReadyHomePossible: React.FC<HomeReadyHomePossibleProps> = ({
    'data-id': dataId,
}) => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }
    const benefits = [
        {
            title: 'Lower upfront costs',
            description:
                'Putting together the cash for a down payment can be reduced with HomeReady® and Home Possible®.',
        },
        {
            title: 'Reduced down payment',
            description:
                'HomeReady and Home Possible loans allow you to put down as little as 3% and can even use a gift from family.',
        },
        {
            title: 'Reduced mortgage insurance',
            description: 'Get a lower rate on private mortgage insurance premiums.',
        },
    ]
    const faqs = [
        {
            question: "How can I know if I'm income qualified?",
            answer:
                "HomeReady and Home Possible loans are income-based — you can only qualify if you'll have income that's at or below 80% of the median income for your area. That means that the income limit for HomeReady and Home Possible depends on where you live. If you'd like to see if you're income qualified, reach out to a Home Loan Expert to see if you qualify. Or, if you'd like to see the income limits in your area, you can visit the Fannie Mae and Freddie Mac websites and look up your county.",
        },
        {
            question:
                'Do HomeReady and Home Possible only let first-time home buyers?',
            answer:
                "No, you don't need to be a first-time home buyer to use HomeReady or Home Possible loans. However, the property must be your primary residence. You can be a repeat buyer and still qualify if you meet the income requirements and other eligibility criteria.",
        },
        {
            question:
                'How do I choose plans for HomeReady and Home Possible programs?',
            answer:
                "Your mortgage expert will guide you through the options and help you choose the program that works best for your situation. Both programs have similar requirements, but there may be slight differences in pricing and underwriting guidelines. We'll help you compare both options and determine which one is the better fit for your specific circumstances.",
        },
        {
            question:
                'Is HomeReady and Home Possible only for buying a single-family home?',
            answer:
                'No. Home buyers are allowed to buy 1-4-unit properties and buy in qualify for HomeReady or Home Possible on condos and townhomes as well. The property must be your primary residence, but you have flexibility in the type of property you purchase.',
        },
    ]
    return (
        <div className="w-full bg-white" data-id={dataId}>
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div>
                        <p className="text-sm text-gray-600 mb-4">
                            HOMEREADY® AND HOME POSSIBLE®
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            HomeReady® and Home Possible®
                        </h1>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            HomeReady and Home Possible loans are government-backed loans
                            designed to make it possible. You could have 97 down and still be
                            able to get a loan at competitive rates, and access to home
                            affordability.
                        </p>
                        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            Start approval
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                            alt="Man smiling"
                            className="rounded-3xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* Budget Benefits Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                                alt="Father and daughter"
                                className="rounded-3xl w-full h-auto object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                                Home buying that's easier on your budget? It's possible.
                            </h2>
                            <div className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-gray-700" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-8 border border-gray-300 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
                                Get pre-approved
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Guidelines Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Guidelines for this loan
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            If you want details on these guidelines, we encourage you to check
                            out our <span className="font-semibold">guide</span> or{' '}
                            <span className="font-semibold">talk to us</span>. Learn if you
                            meet the guidelines for HomeReady or Home Possible by talking to a
                            Home Loan Expert.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-red-500 text-white p-8 rounded-2xl">
                            <TrendingDown className="w-8 h-8 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Income limits</h3>
                            <p className="text-sm mb-6 opacity-90">
                                You'll need income at or below 80% of your area's median income.
                                This limit depends on where you buy a home.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                                About DTI <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                            <Home className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                Home type
                            </h3>
                            <p className="text-sm mb-6 text-gray-600">
                                It needs to be your primary residence. You can buy a
                                single-family home, condo or townhome, or a 2-4 unit
                                multi-family home.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                About home types <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                            <CreditCard className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                Credit and debt
                            </h3>
                            <p className="text-sm mb-6 text-gray-600">
                                You'll need a credit score of at least 620 and a debt-to-income
                                ratio below 50%.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                About credit <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                            <DollarSign className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                Mortgage costs
                            </h3>
                            <p className="text-sm mb-6 text-gray-600">
                                You'll need at least 3% down and private mortgage insurance
                                (PMI) until you have 20% equity.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                About mortgage costs <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Real People Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Answers when you need them. Real people when it matters.
                            </h2>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                Ratebeat Ameri is here for you 24/7 to guide you through your
                                homebuying questions. We're here to help make the process as
                                easy and stress-free as possible. We're always available to
                                answer your questions and get you on the right track, right now.
                            </p>
                            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                Ask a question
                            </button>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                                alt="Man working"
                                className="rounded-3xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Comparison Table Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Comparing HomeReady® and Home Possible®
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            HomeReady and Home Possible are similar programs with similar
                            requirements. But there are some differences that can make one a
                            better fit for you than the other. Here's how they stack up.
                        </p>
                    </div>
                    <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-gray-300">
                                        <th className="text-left py-6 px-6"></th>
                                        <th className="text-center py-6 px-6">
                                            <div className="font-bold text-gray-900 text-lg">
                                                HomeReady® & Home Possible®
                                            </div>
                                        </th>
                                        <th className="text-center py-6 px-6">
                                            <div className="font-bold text-gray-900 text-lg">
                                                CMG® by Ratebeat®
                                            </div>
                                        </th>
                                        <th className="text-center py-6 px-6">
                                            <div className="font-bold text-gray-900 text-lg">
                                                FHA (3)
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-6 px-6 font-semibold text-gray-900">
                                            Income cap
                                        </td>
                                        <td className="text-center py-6 px-6 text-gray-700">Yes</td>
                                        <td className="text-center py-6 px-6 text-gray-700">Yes</td>
                                        <td className="text-center py-6 px-6 text-gray-700">No</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-6 px-6 font-semibold text-gray-900">
                                            Mortgage insurance
                                        </td>
                                        <td className="text-center py-6 px-6 text-gray-700">
                                            Reduced pricing
                                        </td>
                                        <td className="text-center py-6 px-6 text-gray-700">
                                            Reduced pricing
                                        </td>
                                        <td className="text-center py-6 px-6 text-gray-700">
                                            Standard pricing
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 px-6"></td>
                                        <td className="text-center py-6 px-6">
                                            <button className="text-gray-900 underline hover:text-gray-700 text-sm">
                                                Learn more
                                            </button>
                                        </td>
                                        <td className="text-center py-6 px-6">
                                            <button className="text-gray-900 underline hover:text-gray-700 text-sm">
                                                Learn more
                                            </button>
                                        </td>
                                        <td className="text-center py-6 px-6"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            Start approval
                        </button>
                    </div>
                </div>
            </section>
            {/* Articles Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Get more in-depth details
                        </h2>
                        <p className="text-gray-600">
                            Browse through guides and articles to learn more about HomeReady
                            and Home Possible.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop"
                                alt="Person writing"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-xs text-gray-500 mb-2">LEARN</p>
                                <h3 className="font-bold text-gray-900">
                                    HomeReady mortgage: How to apply for this loan
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
                                alt="House with key"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-xs text-gray-500 mb-2">LEARN</p>
                                <h3 className="font-bold text-gray-900">
                                    A detailed guide to mortgage insurance
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
                                alt="Business meeting"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-xs text-gray-500 mb-2">LEARN</p>
                                <h3 className="font-bold text-gray-900">
                                    Home Possible®: What is it and how does it work?
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
                        We know you have questions about HomeReady and Home Possible. Here
                        are some answers from real people who are looking answers.
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
                    <div className="text-center">
                        <button className="text-gray-900 underline hover:text-gray-700">
                            Learn more about Home Equity
                        </button>
                    </div>
                </div>
            </section>
            {/* Ask Us Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Don't wonder what's best. Ask us!
                        </h2>
                        <p className="text-gray-600">
                            We're pretty sure Ratebeat can help you out. We've already helped 3
                            million families. Let's see if we're right for you.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200">
                            <MessageCircle className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                Chat with an expert
                            </h3>
                            <p className="text-gray-600 mb-6">Available 24/7</p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200">
                            <Phone className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Call us</h3>
                            <p className="text-gray-600 mb-6">We're here to help</p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Final CTA */}
            <section className="bg-gray-900 text-white py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                        Your homeownership dream is possible
                    </h2>
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
                        Start approval
                    </button>
                </div>
            </section>
            {/* Footer Disclaimer */}
            <section className="bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        * Important legal disclosures
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        HomeReady and Home Possible are registered trademarks of Fannie Mae
                        and Freddie Mac respectively. Mortgages are originated through
                        Ratebeat, LLC, a wholly-owned subsidiary of Ratebeat Companies,
                        Inc. (NYSE: RKT). All rights reserved. Equal Housing Lender.
                        Licensed in 50 states. NMLS #3030. Ratebeat, 1050 Woodward
                        Avenue, Detroit, MI 48226-1906.
                    </p>
                </div>
            </section>
        </div>
    )
}
