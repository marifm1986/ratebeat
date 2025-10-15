import React, { useState } from 'react'
import { ChevronRight, Volume2, Share2, Clock, User } from 'lucide-react'
interface FederalFundsArticleProps {
    'data-id'?: string
}
const qualificationOptions = [
    {
        icon: '🏠',
        title: 'Purchase a new home',
        description: 'Find your dream home',
    },
    {
        icon: '💰',
        title: 'Refinance your mortgage',
        description: 'Lower your rate',
    },
    {
        icon: '💵',
        title: 'Get a cash-out refinance',
        description: 'Tap into equity',
    },
    {
        icon: '📊',
        title: 'Explore your options',
        description: 'Compare rates',
    },
]
const faqSections = [
    {
        title: 'How does the fed funds rate work?',
        content: [
            {
                question: 'What is the federal funds rate?',
                answer:
                    'The federal funds rate is the interest rate at which banks lend money to each other overnight. The Federal Reserve sets a target rate to influence economic activity.',
            },
            {
                question:
                    'How often does the Federal Reserve change the fed funds rate?',
                answer:
                    'The Federal Open Market Committee (FOMC) meets eight times per year to review economic conditions and adjust the federal funds rate as needed.',
            },
            {
                question:
                    "What's the difference between the federal funds rate and the discount rate?",
                answer:
                    'The federal funds rate is what banks charge each other, while the discount rate is what the Federal Reserve charges banks directly for short-term loans.',
            },
        ],
    },
    {
        title: 'Fed funds rate FAQs',
        content: [
            {
                question: 'Can the federal funds rate go to zero or become negative?',
                answer:
                    'Yes, the federal funds rate can go to zero, as it did during the 2008 financial crisis and the COVID-19 pandemic. While negative rates are theoretically possible, the Fed has historically avoided them.',
            },
            {
                question: 'How does the Fed rate affect mortgage rates?',
                answer:
                    'The Fed rate indirectly influences mortgage rates. When the Fed raises rates, borrowing costs typically increase across the economy, including mortgage rates. However, mortgage rates are more directly tied to the 10-year Treasury yield.',
            },
        ],
    },
]
const relatedResources = [
    {
        title: 'What Is APR?',
        description:
            'Learn how APR affects your mortgage and what it means for your monthly payment.',
        readTime: '6 min read',
    },
    {
        title: 'Fixed-Rate vs. Adjustable-Rate Mortgage',
        description:
            'Discover the differences between fixed and adjustable rate mortgages.',
        readTime: '8 min read',
    },
    {
        title: 'How To Get The Best Mortgage Rate',
        description:
            'Tips and strategies to secure the lowest possible mortgage rate.',
        readTime: '7 min read',
    },
]
export const FederalFundsArticle: React.FC<FederalFundsArticleProps> = ({
    'data-id': dataId,
}) => {
    const [expandedFaq, setExpandedFaq] = useState<{
        section: number
        item: number
    } | null>(null)
    const toggleFaq = (sectionIndex: number, itemIndex: number) => {
        if (
            expandedFaq?.section === sectionIndex &&
            expandedFaq?.item === itemIndex
        ) {
            setExpandedFaq(null)
        } else {
            setExpandedFaq({
                section: sectionIndex,
                item: itemIndex,
            })
        }
    }
    return (
        <div data-id={dataId} className="w-full bg-white min-h-screen">
            {/* Breadcrumb Navigation */}
            <div className="border-b">
                <div className="max-w-4xl mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <a href="#" className="hover:text-black">
                            Home
                        </a>
                        <ChevronRight className="w-4 h-4" />
                        <a href="#" className="hover:text-black">
                            Learn
                        </a>
                        <ChevronRight className="w-4 h-4" />
                        <a href="#" className="hover:text-black">
                            Interest Rates
                        </a>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-black">
                            How the federal funds rate affects mortgage rates
                        </span>
                    </div>
                </div>
            </div>
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column - Content */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            How the federal funds rate affects mortgage rates
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>By Kevin Graham</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 min read</span>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-colors mb-6">
                            <Volume2 className="w-4 h-4" />
                            Listen to this article
                        </button>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600">Share:</span>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                                    <span className="text-xs font-bold">f</span>
                                </button>
                                <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                                    <span className="text-xs font-bold">𝕏</span>
                                </button>
                                <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                                    <span className="text-xs font-bold">in</span>
                                </button>
                                <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Right Column - Image */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800"
                            alt="Federal Reserve Building"
                            className="w-full h-auto rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
                {/* Article Introduction */}
                <div className="mt-12 prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        If you watch or read about the economy regularly, you've probably
                        heard mention of the <strong>federal funds rate</strong>. It's a big
                        deal, and if you're thinking about getting a mortgage, you should
                        know how it affects interest rates. Here's what you need to know
                        about the federal funds rate and how it relates to mortgage rates.
                    </p>
                </div>
                {/* Main Content Sections */}
                <div className="mt-12 space-y-12">
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            What is the federal funds rate?
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                The federal funds rate is the interest rate at which banks and
                                other depository institutions lend money to each other, usually
                                on an overnight basis. The Federal Reserve uses the federal
                                funds rate as a way to influence monetary policy.
                            </p>
                            <p>
                                When the Fed wants to stimulate the economy, it lowers the
                                federal funds rate. This makes it cheaper for banks to borrow
                                money, which they can then lend to businesses and consumers at
                                lower rates. Conversely, when the Fed wants to slow down the
                                economy to combat inflation, it raises the federal funds rate.
                            </p>
                            <p>
                                The Federal Open Market Committee (FOMC) meets eight times a
                                year to review economic conditions and determine whether to
                                adjust the federal funds rate. These meetings are closely
                                watched by economists, investors, and anyone with a stake in the
                                economy.
                            </p>
                        </div>
                    </section>
                    {/* Qualification Section */}
                    <section className="bg-gray-50 rounded-2xl p-8 sm:p-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                            See what you qualify for
                        </h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {qualificationOptions.map((option, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl mb-3">{option.icon}</div>
                                    <h3 className="font-semibold text-sm mb-1">{option.title}</h3>
                                    <p className="text-xs text-gray-600">{option.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Get started
                            </button>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            How does the fed funds rate work?
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                The federal funds rate is a target rate set by the FOMC. Banks
                                don't have to follow it exactly, but they generally stay close
                                to the target. The Fed uses several tools to influence the
                                actual rate, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Open market operations:</strong> The Fed buys and
                                    sells government securities to influence the amount of money
                                    in the banking system.
                                </li>
                                <li>
                                    <strong>Reserve requirements:</strong> The Fed can change how
                                    much money banks are required to keep in reserve, affecting
                                    how much they can lend.
                                </li>
                                <li>
                                    <strong>Discount rate:</strong> The Fed can adjust the rate at
                                    which it lends directly to banks.
                                </li>
                            </ul>
                            <p>
                                When the Fed lowers the federal funds rate, it becomes cheaper
                                for banks to borrow money. This typically leads to lower
                                interest rates throughout the economy, including mortgage rates,
                                auto loans, and credit cards.
                            </p>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            How the federal funds rate affects mortgage rates
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                While the federal funds rate doesn't directly determine mortgage
                                rates, it does have an indirect influence. Here's how:
                            </p>
                            <p>
                                <strong>Short-term vs. long-term rates:</strong> The federal
                                funds rate primarily affects short-term interest rates. Mortgage
                                rates, especially for 30-year fixed mortgages, are long-term
                                rates that are more closely tied to the 10-year Treasury yield.
                            </p>
                            <p>
                                <strong>Market expectations:</strong> When the Fed signals that
                                it will raise or lower rates, it influences investor
                                expectations about future economic conditions. This can cause
                                bond yields (including Treasury yields) to move, which in turn
                                affects mortgage rates.
                            </p>
                            <p>
                                <strong>Inflation concerns:</strong> The Fed often adjusts the
                                federal funds rate in response to inflation. Higher inflation
                                typically leads to higher mortgage rates as lenders demand
                                higher returns to compensate for the decreased purchasing power
                                of future payments.
                            </p>
                        </div>
                    </section>
                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Take the first step toward the right mortgage
                        </h2>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            When you're ready, we're here. Get started on your home loan
                            journey today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Get pre-approved
                            </button>
                            <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                                Calculate payment
                            </button>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Fed funds rate historical trends and effects
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                The federal funds rate has varied significantly over the
                                decades, reflecting different economic conditions and policy
                                priorities:
                            </p>
                            <p>
                                <strong>1980s:</strong> The Fed, under Chairman Paul Volcker,
                                raised rates dramatically to combat double-digit inflation. The
                                federal funds rate reached a peak of over 20% in 1981.
                            </p>
                            <p>
                                <strong>2008 Financial Crisis:</strong> In response to the
                                financial crisis, the Fed lowered the federal funds rate to near
                                zero (0-0.25%) and kept it there for several years to stimulate
                                the economy.
                            </p>
                            <p>
                                <strong>2020 COVID-19 Pandemic:</strong> The Fed again lowered
                                rates to near zero to support the economy during the
                                pandemic-induced recession.
                            </p>
                            <p>
                                <strong>Recent trends:</strong> As the economy recovered and
                                inflation increased, the Fed began raising rates in 2022 to
                                combat inflation, with multiple rate increases throughout 2022
                                and 2023.
                            </p>
                        </div>
                    </section>
                    {/* FAQ Sections */}
                    {faqSections.map((section, sectionIndex) => (
                        <section key={sectionIndex}>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                                {section.title}
                            </h2>
                            <div className="space-y-4">
                                {section.content.map((faq, itemIndex) => (
                                    <div key={itemIndex} className="border-b pb-4">
                                        <button
                                            onClick={() => toggleFaq(sectionIndex, itemIndex)}
                                            className="w-full flex justify-between items-center text-left"
                                        >
                                            <h3 className="font-semibold text-lg pr-4">
                                                {faq.question}
                                            </h3>
                                            <ChevronRight
                                                className={`w-5 h-5 flex-shrink-0 transition-transform ${expandedFaq?.section === sectionIndex && expandedFaq?.item === itemIndex ? 'rotate-90' : ''}`}
                                            />
                                        </button>
                                        {expandedFaq?.section === sectionIndex &&
                                            expandedFaq?.item === itemIndex && (
                                                <p className="mt-3 text-gray-700 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                    <section className="bg-gray-50 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                            See what you're eligible for
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Get my rate
                            </button>
                            <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                                Refinance options
                            </button>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            The bottom line: Watching the Fed can relay important information
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Understanding the federal funds rate and how it affects mortgage
                                rates can help you make more informed decisions about when to
                                buy a home or refinance your mortgage. While you can't control
                                the Fed's decisions, you can stay informed about economic trends
                                and time your mortgage application accordingly.
                            </p>
                            <p>
                                Keep in mind that mortgage rates are influenced by many factors
                                beyond the federal funds rate, including your credit score, down
                                payment, loan type, and current market conditions. The best way
                                to get a great rate is to shop around, compare offers from
                                multiple lenders, and work on improving your financial profile.
                            </p>
                        </div>
                    </section>
                    {/* Author Bio */}
                    <section className="border-t pt-8">
                        <h3 className="text-xl font-bold mb-4">Kevin Graham</h3>
                        <div className="prose max-w-none text-gray-700 leading-relaxed">
                            <p>
                                Kevin Graham is a Senior Blog Writer for Rocket Companies. He
                                specializes in economics, mortgage qualification and personal
                                finance topics. As someone with cerebral palsy spastic
                                quadriplegia that requires the use of a wheelchair, he also
                                takes on articles around modifying your home for physical
                                challenges and smart home tech. Kevin has a BA in Journalism
                                from Oakland University. Prior to joining Rocket Mortgage he
                                freelanced for various newspapers in the Metro Detroit area.
                            </p>
                        </div>
                    </section>
                    {/* Related Resources */}
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                            Related resources
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedResources.map((resource, index) => (
                                <div
                                    key={index}
                                    className="border rounded-xl p-6 hover:shadow-md transition-shadow"
                                >
                                    <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {resource.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">
                                            {resource.readTime}
                                        </span>
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
