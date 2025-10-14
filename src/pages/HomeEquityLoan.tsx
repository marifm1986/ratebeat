import React, { useState } from 'react'
import {
    ChevronRight,
    Calculator,
    FileText,
    Clock,
    Home,
    DollarSign,
    MessageCircle,
    BarChart3,
    ChevronDown,
} from 'lucide-react'
interface HomeEquityLoanProps {
    'data-id'?: string
}
export const HomeEquityLoan: React.FC<HomeEquityLoanProps> = ({
    'data-id': dataId,
}) => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }
    const benefits = [
        {
            icon: DollarSign,
            title: 'Turn your equity into cash',
            description:
                'Use the equity built up in your home to help pay for a big expense or Milestone.',
        },
        {
            icon: BarChart3,
            title: 'Keep your current rate',
            description:
                'If you already have a low rate, a home equity loan can let you access cash while keeping your low rate.',
        },
    ]
    const discoveryCards = [
        {
            icon: Calculator,
            title: 'Run the numbers',
            description:
                'Find out how much equity you have to work with and how much you could borrow.',
        },
        {
            icon: FileText,
            title: 'Give into the details',
            description:
                'Explore how a Home Equity Loan can work for you, including rates, terms and payments.',
        },
        {
            icon: Clock,
            title: 'Apply in 10 minutes',
            description:
                'Get approved in as little as 15 minutes with an application that takes just 10 minutes to complete.',
        },
    ]
    const faqs = [
        {
            question: "What's a home equity?",
            answer:
                "Home equity is the difference between your home's current value and what you owe on your mortgage. For example, if your home is worth $400,000 and you owe $250,000 on your mortgage, you have $150,000 in equity. You can borrow against a portion of that equity with a Home Equity Loan.",
        },
        {
            question: 'How do I know how much home equity I have?',
            answer:
                "To calculate your home equity, subtract the outstanding balance on your mortgage from your home's current market value. You may also need to subtract any second mortgages or home equity lines of credit (HELOCs) you have. We recommend getting a professional appraisal to determine your home's current market value, or you can look at recent comparable sales in your neighborhood.",
        },
        {
            question: 'How does a Home Equity Loan work?',
            answer:
                "A Home Equity Loan is a fixed-rate loan from Ratebeat which:\n\n• Lets you borrow cash from your home's equity in a lump sum payment and get it back in as few as 10 days\n• Typically ranges from 10 to 30 years and comes with a fixed interest rate that won't change for the life of the loan\n• Provides stable monthly payments and protects you from rate increases\n• If you meet certain criteria you can get a loan with no origination fees\n• Your new equity becomes permanent in a more equitable way than a cash-out refinance",
        },
        {
            question: 'Am I eligible for a Home Equity Loan?',
            answer:
                "You're eligible if you meet these requirements:\n\n• You have enough equity in your home. Typically you can borrow up to 90% of your home's value, minus what you owe. So if your home is worth $300,000 and you owe $200,000, you could be eligible to borrow up to $70,000.\n• You have a credit score of at least 620 for a Conventional Home Equity Loan or 580 for an FHA loan.\n• You have a debt-to-income ratio below 50%.",
        },
        {
            question:
                "Can I get a Home Equity Loan with Ratebeat if I'm working with another lender?",
            answer:
                'Yes, you can get a Home Equity Loan from Ratebeat even if you have a mortgage with another lender. In most cases, you can apply for a Home Equity Loan with us.',
        },
        {
            question: 'What can I use my funds for?',
            answer:
                "You can use a Home Equity Loan for any purpose, including for home improvements, consolidating high-interest debt, paying for education, covering medical expenses, or funding other major expenses. However, using the funds for purposes that increase your home's value or improve your financial situation is generally recommended.",
        },
        {
            question: 'Will taking out a Home Equity Loan affect my credit?',
            answer:
                'Yes, borrowing a loan will have an impact on your credit. When you apply, there will be a hard inquiry on your credit report, which may temporarily lower your score by a few points. However, if you make your payments on time, a Home Equity Loan can help improve your credit by demonstrating responsible borrowing and potentially lowering your overall credit utilization if you use it to pay off high-interest debt.',
        },
    ]
    return (
        <div className="w-full bg-white" data-id={dataId}>
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Home Equity Loan
                        </h1>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Tap into your home's equity – without giving up a low rate on your
                            current mortgage. Get what it takes to pay for a Home Equity Loan
                            from Ratebeat®.
                        </p>
                        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            Explore my options
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1681824769295-d374573f22f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                            alt="Couple at home"
                            className="rounded-3xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* Let Your Home Help Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
                                alt="Couple renovating"
                                className="rounded-3xl w-full h-auto object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                                Let your home help with what's next
                            </h2>
                            <div className="space-y-6">
                                {benefits.map((benefit, index) => {
                                    const Icon = benefit.icon
                                    return (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <Icon className="w-6 h-6 text-gray-700" />
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
                                    )
                                })}
                            </div>
                            <button className="mt-8 border border-gray-300 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
                                Explore my options
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Discover What's Possible Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            Discover what's possible
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {discoveryCards.map((card, index) => {
                            const Icon = card.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
                                >
                                    <Icon className="w-8 h-8 mb-4 text-gray-700" />
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm">
                                        {card.description}
                                    </p>
                                    <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            {/* Access Equity Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Not sure how to access your home's equity?
                            </h2>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                We're here to help you understand your options and choose the
                                best solution to help you accomplish your goals.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                                    Compare options
                                </button>
                                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                    Get an equity estimate
                                </button>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
                                alt="House exterior"
                                className="rounded-3xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Explore Options Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Explore your options
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Considering a cash-out refinance? Learn how it works and compares
                            to a Home Equity Loan to see if it's the right move for you.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-gray-300">
                                        <th className="text-left py-6 px-6"></th>
                                        <th className="text-center py-6 px-6">
                                            <div className="font-bold text-gray-900 text-lg">
                                                Home Equity Loan
                                            </div>
                                        </th>
                                        <th className="text-center py-6 px-6">
                                            <div className="font-bold text-gray-900 text-lg">
                                                Cash-out refinance
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-6 px-6 font-semibold text-gray-900">
                                            Term length
                                        </td>
                                        <td className="text-center py-6 px-6 text-gray-700">
                                            10 or 20 years
                                        </td>
                                        <td className="text-center py-6 px-6 text-gray-700">
                                            8 – 30 years
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-6 px-6 font-semibold text-gray-900">
                                            Mortgage payments
                                        </td>
                                        <td className="text-center py-6 px-6 text-gray-700">
                                            2 separate payments
                                        </td>
                                        <td className="text-center py-6 px-6 text-gray-700">
                                            1 single payment
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            Compare side-by-side
                        </button>
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
                        We know you have questions about home equity loans. Here are some
                        answers to help.
                    </p>
                    <div className="space-y-4">
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
                                        <p className="whitespace-pre-line">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <button className="text-gray-900 underline hover:text-gray-700">
                            Learn more about Home Equity Loans
                        </button>
                    </div>
                </div>
            </section>
            {/* Curious Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Curious? Let's chat
                        </h2>
                        <p className="text-gray-600">
                            Every question you have is important – and it only takes a minute
                            (or two) to get an answer from our team.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <MessageCircle className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                Get in touch now
                            </h3>
                            <p className="text-gray-600 mb-6">Chat with a loan expert</p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <Calculator className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                Estimate your equity
                            </h3>
                            <p className="text-gray-600 mb-6">Calculate the possibilities</p>
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
                        You've invested in your home
                        <br />— let it return the favor
                    </h2>
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
                        Explore the options
                    </button>
                </div>
            </section>
            {/* Footer Disclaimer */}
            <section className="bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs text-gray-500 leading-relaxed">
                        * Important legal disclosures
                    </p>
                    <p className="text-xs text-gray-500 mt-4 leading-relaxed">
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
