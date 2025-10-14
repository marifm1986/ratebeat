import React, { useState } from 'react'
import {
    ChevronRight,
    Home,
    Clock,
    DollarSign,
    TrendingUp,
    ChevronDown,
    MessageCircle,
    Phone,
} from 'lucide-react'
interface BridgeLoanProps {
    'data-id'?: string
}
export const BridgeLoan: React.FC<BridgeLoanProps> = ({
    'data-id': dataId,
}) => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }
    const faqs = [
        {
            question:
                'Why should I choose a bridge loan instead of a Home Equity Loan?',
            answer:
                "A bridge loan is designed specifically for homeowners who are in the process of buying a home and selling a home at the same time. Unlike a home equity loan, a bridge loan provides immediate funds to help you purchase your new home before your current home sells. It's ideal when you need to act quickly on a new home opportunity while waiting for your old home to sell.",
        },
        {
            question: 'What are the pros and cons of a bridge loan?',
            answer:
                "Pros include quick access to funds, ability to make non-contingent offers on new homes, and flexibility in timing. Cons include higher interest rates than traditional mortgages, additional closing costs, and the risk of carrying two mortgages if your old home doesn't sell quickly.",
        },
        {
            question: 'Am I eligible for a bridge loan?',
            answer:
                "You need a credit score of 680 or above and a minimum debt-to-income ratio of 45%. Most lenders also require home equity in your current home (typically 20% or more). The home you're selling must meet certain criteria, and you'll need to show proof of ability to carry both loans if needed.",
        },
        {
            question: 'Do I have to have my current home listed for sale?',
            answer:
                "Typically your current home needs to be listed for sale - otherwise you'll need to have a listing agent agreement or a guaranteed buyer agreement in place before closing on your bridge loan.",
        },
        {
            question: 'What can I use the money for?',
            answer:
                'You can use it to cover part or all of the down payment and closing costs on your new home or to pay off your old mortgage. You can also use the funds to make repairs or improvements to either property.',
        },
        {
            question: 'How does it impact my debt-to-income (DTI) ratio?',
            answer:
                "We use bridge loan into the required loan payment to figure out your DTI. On the new home, we'll only count 75% of the mortgage payment if you have questions about your unique DTI scenario, talk to us.",
        },
        {
            question: "What happens if my home doesn't sell within 6 months?",
            answer:
                "Your bridge loan stays open until you pay it back. Since the expiration date is 6 months, you'll need to refinance the bridge loan into a conventional loan or extend the bridge loan term. Contact us to discuss your options if you're approaching the 6-month mark.",
        },
    ]
    const steps = [
        {
            number: 1,
            title: 'Prepare to sell your home',
            description:
                "We'll help you understand what you need to do to sell your current home so you're ready to list your current home for sale.",
        },
        {
            number: 2,
            title: 'Apply for a bridge loan',
            description:
                "You can apply for a bridge loan online or over the phone. We'll walk you through each step and help you understand what you need to provide.",
        },
        {
            number: 3,
            title: 'Buy your new home with us',
            description:
                'Use your bridge loan to cover the down payment and closing costs when you buy a new home with Ratebeat.',
        },
        {
            number: 4,
            title: 'Pay only interest each month',
            description:
                "Make interest-only payments. Your job is to get the property on the end of the line sold. We'll help you get there and then selling your home.",
        },
    ]
    return (
        <div className="w-full bg-white" data-id={dataId}>
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Bridge loan
                        </h1>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Ready to buy a new home but still need to sell your current one?
                            Ratebeat® can help.
                        </p>
                        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            See if you qualify
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661771671323-c639a299f3b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1633"
                            alt="House with sold sign"
                            className="rounded-3xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* Perks Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhhcHB5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
                                alt="Woman smiling"
                                className="rounded-3xl w-full h-auto object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                                What are the perks of a bridge loan?
                            </h2>
                            <p className="text-gray-600 mb-8">
                                A bridge loan lets you use the equity of your current home
                                before it's sold to cover the down payment and closing costs on
                                your new home.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <Clock className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            Reduce stress while moving
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Avoid moving twice or putting things in a temporary or
                                            unexpected move.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <TrendingUp className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            Make more competitive offers
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Make offers on homes without a home sale contingency to
                                            put in a better position.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <Home className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            Get more out of your home
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            A bridge loan lets you try to sell at a better offer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-8 border border-gray-300 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
                                Start the conversation
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* How Does It Work Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            How does it work?
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Also called a swing loan or a gap loan, a bridge loan is designed
                            to help ease the transition between homes.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
                        {steps.map((step) => (
                            <div key={step.number} className="relative">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
                                        {step.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                        Have more burning questions, and we're here to answer them.
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
                        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                            Get started
                        </button>
                        <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                            Call (888) 980-6716
                        </button>
                    </div>
                </div>
            </section>
            {/* Keep Exploring Section */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            Keep exploring
                        </h2>
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
                                    Discover how much home equity you have
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
                                alt="Person thinking"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-xs text-gray-500 mb-2">LEARN</p>
                                <h3 className="font-bold text-gray-900">
                                    What is a bridge loan and how does it work?
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
                                alt="Keys and documents"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-xs text-gray-500 mb-2">LEARN</p>
                                <h3 className="font-bold text-gray-900">
                                    How to buy and sell a home at the same time
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Chat CTA Section */}
            <section className="bg-gray-50 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Curious? Let's chat
                        </h2>
                        <p className="text-gray-600">
                            Have questions? We're here. We're always here for you.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200">
                            <MessageCircle className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                Get in touch now
                            </h3>
                            <p className="text-gray-600 mb-6">Chat with our team</p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200">
                            <Phone className="w-8 h-8 mb-4 text-gray-700" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900">
                                Give us a call
                            </h3>
                            <p className="text-gray-600 mb-6">We're here to help</p>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer CTA */}
            <section className="bg-gray-900 text-white py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                        Get the time you need with a bridge loan
                    </h2>
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
                        Start my approval
                    </button>
                </div>
            </section>
        </div>
    )
}
