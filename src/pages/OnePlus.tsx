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
    Calculator,
} from 'lucide-react'
interface OnePlusProps {
    'data-id'?: string
}
export const OnePlus: React.FC<OnePlusProps> = ({ 'data-id': dataId }) => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }
    const benefits = [
        {
            title: 'Say Lower 1% of your down payment',
            description:
                "Put down just 1% and we'll cover another 2% — so you'll have the 3% you need to get started.",
        },
        {
            title: 'Or pay less rate',
            description:
                "Reduce your rate by 0.25% so you can save on your monthly payment and the amount of interest you'll pay over the life of the loan.",
        },
    ]
    const faqs = [
        {
            question: "How can I know if I'm income qualified for ONE+?",
            answer:
                "ONE+ by Ratebeat is income-based. You can only qualify if you'll have income that's at or below 80% of the median income for your area. That means that the income limit for ONE+ depends on where you live. If you'd like to see if you're income qualified, reach out to a Home Loan Expert to see if you qualify.",
        },
        {
            question: 'Who can apply for ONE+?',
            answer:
                "ONE+ is designed for first-time home buyers or those who haven't owned a home in the past three years. You'll need to meet income requirements (at or below 80% of area median income), have a credit score of at least 620, and plan to use the property as your primary residence.",
        },
        {
            question: 'What are the property types allowed for ONE+?',
            answer:
                'You can use ONE+ to purchase a single-family home, townhome, or condominium. The property must be your primary residence. Investment properties and vacation homes are not eligible for the ONE+ program.',
        },
        {
            question: 'What are the details of the 1% down option?',
            answer:
                "If you choose the 1% down option, you put down just 1% of the purchase price, and Ratebeat will contribute 2% as a lender credit. This gets you to the 3% down payment required. This option is great if you're short on cash for your down payment but can handle a slightly higher monthly payment.",
        },
        {
            question: 'How does the rate reduction option work?',
            answer:
                "With the rate reduction option, you'll get a 0.25% reduction on your interest rate. This means lower monthly payments and less interest paid over the life of your loan. This option is ideal if you have the 3% down payment saved and want to minimize your long-term costs.",
        },
        {
            question: 'Do I have to choose between the 1% down and rate reduction?',
            answer:
                "Yes, you'll need to choose one benefit. You can either get help with your down payment (1% down with 2% lender credit) OR get the 0.25% rate reduction. Your Home Loan Expert can help you determine which option makes the most financial sense for your situation.",
        },
    ]
    return (
        <div className="w-full bg-white" data-id={dataId}>
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div>
                        <p className="text-sm text-gray-600 mb-4">
                            ONE+ BY Ratebeat®
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            ONE+ by Ratebeat®
                        </h1>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            We know that saving for a down payment can be tough. That's why we
                            created ONE+, a home loan that makes homeownership more affordable
                            by offering either a lower down payment or a lower interest rate.
                        </p>
                        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            Start approval
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1536010305525-f7aa0834e2c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                            alt="Happy couple"
                            className="rounded-3xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* Affordable Home Loan Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1531218614045-e596f12f0393?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                                alt="Woman relaxing"
                                className="rounded-3xl w-full h-auto object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                                A home loan that makes home more affordable
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
                                Compare my down payment
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
                            If you'd like to see a more in-depth breakdown, we encourage you
                            to check out our <span className="font-semibold">guide</span> or{' '}
                            <span className="font-semibold">talk to us</span>. Don't if you're
                            qualified for this loan? We can help you with any questions you
                            have and provide a full breakdown.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-red-500 text-white p-8 rounded-2xl">
                            <TrendingDown className="w-8 h-8 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Income</h3>
                            <p className="text-sm mb-6 opacity-90">
                                Your income must be at or below 80% of your area's median
                                income. Income limits vary by location.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                                About income limits <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                            <Home className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900">The home</h3>
                            <p className="text-sm mb-6 text-gray-600">
                                This must be your primary residence. You can buy a single-family
                                home, townhome, or condo.
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
                                Closing costs
                            </h3>
                            <p className="text-sm mb-6 text-gray-600">
                                You'll need to cover closing costs, which can be paid with gift
                                funds or down payment assistance.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                About closing costs <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Guidance Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                                alt="Woman on phone"
                                className="rounded-3xl w-full h-auto object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Get low-stakes guidance before you apply
                            </h2>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                Not sure if ONE+ is right for you? Chat with a Home Loan Expert
                                to explore your options and get personalized guidance. There's
                                no commitment and no impact to your credit score — just honest
                                advice to help you make the best decision.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                    Connect with an expert
                                </button>
                                <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                                    Compare my down payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Comparison Table Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Comparing ONE+ by Ratebeat
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Compare programs to see which one works best for you. Here's how
                            ONE+ stacks up against other low down payment options.
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
                                                ONE+
                                            </div>
                                        </th>
                                        <th className="text-center py-6 px-6">
                                            <div className="font-bold text-gray-900 text-lg">
                                                HomeReady® & Home Possible®
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
                                            Minimum down
                                        </td>
                                        <td className="text-center py-6 px-6 text-gray-700">Yes</td>
                                        <td className="text-center py-6 px-6 text-gray-700">Yes</td>
                                        <td className="text-center py-6 px-6 text-gray-700">No</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-6 px-6 font-semibold text-gray-900">
                                            Income cap (up to 80% of AMI)
                                        </td>
                                        <td className="text-center py-6 px-6 text-gray-700">Yes</td>
                                        <td className="text-center py-6 px-6 text-gray-700">Yes</td>
                                        <td className="text-center py-6 px-6 text-gray-700">No</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-6 px-6 font-semibold text-gray-900">
                                            Mortgage insurance
                                        </td>
                                        <td className="text-center py-6 px-6 text-gray-700">Yes</td>
                                        <td className="text-center py-6 px-6 text-gray-700">Yes</td>
                                        <td className="text-center py-6 px-6 text-gray-700">Yes</td>
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
                            Learn more
                        </button>
                    </div>
                </div>
            </section>
            {/* Estimate Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Estimate and explore
                        </h2>
                        <p className="text-gray-600">
                            Calculators you'll want to use to learn more about what's
                            possible.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200">
                            <Calculator className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                Mortgage calculator
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Calculate your estimated monthly payment including taxes and
                                insurance.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200">
                            <Home className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                Home affordability calculator
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Discover how much you can afford based on your income and debt.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Articles Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Get more in-depth details
                        </h2>
                        <p className="text-gray-600">
                            Browse through guides and articles to learn more about ONE+ and
                            how it works.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
                                alt="House exterior"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-xs text-gray-500 mb-2">LEARN</p>
                                <h3 className="font-bold text-gray-900">
                                    ONE+ by Ratebeat: Is It Worth It Down payment
                                    assistance
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                                alt="Couple discussing"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-xs text-gray-500 mb-2">LEARN</p>
                                <h3 className="font-bold text-gray-900">
                                    What is PMI? Private mortgage insurance explained
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop"
                                alt="Person writing"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-xs text-gray-500 mb-2">LEARN</p>
                                <h3 className="font-bold text-gray-900">
                                    Down payment: What it is and how much it works
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Frequently asked questions
                    </h2>
                    <p className="text-gray-600 mb-12">
                        Answers to the most common questions we get about ONE+.
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
                            Want to learn about home buying?
                        </button>
                    </div>
                </div>
            </section>
            {/* Ask Us Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Don't wonder what's best. Ask us!
                        </h2>
                        <p className="text-gray-600">
                            We're here to help you explore your options and find the best home
                            loan for you.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <MessageCircle className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                Chat with an expert
                            </h3>
                            <p className="text-gray-600 mb-6">Available 24/7</p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
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
                        Imagine becoming a homeowner with ONE+ by Ratebeat
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
                        Mortgages are originated through Ratebeat, LLC, a
                        wholly-owned subsidiary of Ratebeat Companies, Inc. (NYSE: RKT). All
                        rights reserved. Equal Housing Lender. Licensed in 50 states. NMLS
                        #3030. Ratebeat, 1050 Woodward Avenue, Detroit, MI
                        48226-1906.
                    </p>
                </div>
            </section>
        </div>
    )
}
