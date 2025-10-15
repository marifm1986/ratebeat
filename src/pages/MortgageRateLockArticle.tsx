import React from 'react'
import { ChevronRight, Volume2, Share2, Clock, User } from 'lucide-react'
interface MortgageRateLockArticleProps {
    'data-id'?: string
}
const qualificationOptions = [
    {
        icon: '🏠',
        title: 'Purchase a home',
        description: 'Find your dream home',
    },
    {
        icon: '💰',
        title: 'Refinance a home',
        description: 'Lower your payment',
    },
    {
        icon: '💵',
        title: 'Get a cash-out refinance',
        description: 'Tap into equity',
    },
    {
        icon: '📊',
        title: 'Explore my options',
        description: 'See what you qualify for',
    },
]
const relatedResources = [
    {
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
        title: 'How the Fed rate drop will affect your home search',
        description:
            'Understand how Federal Reserve rate changes impact your home buying journey and mortgage options.',
        readTime: '7 min read',
    },
    {
        image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400',
        title: 'Mortgage interest rates today: Check current rates',
        description:
            'Stay up to date with the latest mortgage rates and trends in the housing market.',
        readTime: '5 min read',
    },
    {
        image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400',
        title:
            'How much can I borrow? Use this to find out what your mortgage payment',
        description:
            'Calculate your potential mortgage payment and understand your borrowing capacity.',
        readTime: '6 min read',
    },
]
export const MortgageRateLockArticle: React.FC<
    MortgageRateLockArticleProps
> = ({ 'data-id': dataId }) => {
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
                            Mortgage basics
                        </a>
                        <ChevronRight className="w-4 h-4" />
                        <a href="#" className="hover:text-black">
                            Mortgage rates
                        </a>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-black">
                            Should I lock in my mortgage rate today?
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
                            Should I lock in my mortgage rate today?
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>By Victoria Araj</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>10 min read</span>
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
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                            alt="Happy couple with house keys"
                            className="w-full h-auto rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
                {/* Article Introduction */}
                <div className="mt-12 prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        If you're in the market for a home or looking to refinance your
                        mortgage, you've probably heard about mortgage rate locks. A rate
                        lock can protect you from rising interest rates, but it also means
                        you won't benefit if rates drop. So should you lock in your rate
                        today, or wait and see what happens? The answer depends on your
                        specific situation, risk tolerance, and market conditions. Here's
                        what you need to know to make an informed decision about locking in
                        your mortgage rate.
                    </p>
                </div>
                {/* Main Content Sections */}
                <div className="mt-12 space-y-12">
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Mortgage rate locks
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                A <strong>mortgage rate lock</strong> is a commitment from a
                                lender to honor a specific interest rate for a set period,
                                typically 30 to 60 days. During this time, even if market rates
                                rise, your locked rate remains the same. Rate locks protect
                                borrowers from interest rate volatility during the mortgage
                                approval process.
                            </p>
                            <p>
                                Most lenders offer rate locks once you've submitted a complete
                                mortgage application and received loan approval. The lock period
                                needs to be long enough to complete your home purchase or
                                refinance, but not so long that you pay unnecessary fees. Some
                                lenders charge a fee to lock your rate, while others offer it
                                for free.
                            </p>
                            <p>
                                It's important to understand that a rate lock is not the same as
                                loan approval. You still need to meet all the lender's
                                requirements and close on your loan within the lock period. If
                                you don't close in time, your rate lock may expire, and you'll
                                need to either extend it (often for a fee) or accept the current
                                market rate.
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
                                Explore my rate
                            </button>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            When should I lock in my mortgage rate?
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Deciding when to lock your mortgage rate is one of the most
                                important decisions you'll make during the home buying or
                                refinancing process. There are several factors to consider:
                            </p>
                            <p>
                                <strong>Market conditions:</strong> If rates are currently low
                                or trending upward, locking in sooner rather than later may be
                                wise. However, if rates are high and expected to fall, you might
                                want to wait.
                            </p>
                            <p>
                                <strong>Your timeline:</strong> How soon do you need to close?
                                If you're under contract to buy a home with a specific closing
                                date, you'll want to lock your rate early enough to ensure it
                                doesn't expire before closing.
                            </p>
                            <p>
                                <strong>Your risk tolerance:</strong> Are you comfortable with
                                the possibility that rates might drop after you lock? Or would
                                you prefer the certainty of knowing your rate won't increase?
                            </p>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Pros of locking your mortgage rate today
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                There are several advantages to locking in your mortgage rate,
                                especially in certain market conditions:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>You protect yourself from rate increases:</strong> If
                                    rates rise after you lock, you're protected. This peace of
                                    mind can be valuable, especially in volatile markets.
                                </li>
                                <li>
                                    <strong>
                                        You'll have a sense of what your payment will be:
                                    </strong>{' '}
                                    Knowing your exact interest rate allows you to budget
                                    accurately and plan your finances with confidence.
                                </li>
                                <li>
                                    <strong>You'll have peace of mind:</strong> Rate locks remove
                                    uncertainty from the home buying process, allowing you to
                                    focus on other aspects of your purchase or refinance.
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Cons of locking your mortgage rate today
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                While rate locks offer protection, they also come with some
                                potential downsides:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Some lenders may charge you a fee:</strong> Not all
                                    rate locks are free. You may need to pay an upfront fee or a
                                    higher interest rate to secure the lock.
                                </li>
                                <li>
                                    <strong>You won't benefit if rates drop:</strong> If market
                                    rates fall after you lock, you're generally stuck with your
                                    higher rate unless your lender offers a float-down option.
                                </li>
                                <li>
                                    <strong>Locking too early leaves you unprotected:</strong> If
                                    you lock too early and your closing is delayed, your rate lock
                                    may expire, forcing you to extend it (often for a fee) or
                                    accept current market rates.
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* CTA Section */}
                    <section className="bg-gray-50 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Take the first step toward the right mortgage
                        </h2>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Apply online for expert recommendations with real interest rates
                            and payments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Get pre-approved
                            </button>
                            <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                                Explore my options
                            </button>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            What to do if you choose not to lock in your mortgage rate today
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                If you decide not to lock your rate right away, you're not
                                without options. Here are some strategies to help you navigate
                                an unlocked rate:
                            </p>
                        </div>
                    </section>
                    <section>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">
                            Communicate with your mortgage lender
                        </h3>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Stay in close contact with your lender and let them know you're
                                monitoring rates. Many lenders will notify you of significant
                                rate changes and can help you decide when to lock. Ask about
                                their rate lock policies, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>How long you can lock your rate</li>
                                <li>Whether they offer float-down options if rates decrease</li>
                                <li>What fees, if any, are associated with locking</li>
                                <li>
                                    How quickly they can process a rate lock when you're ready
                                </li>
                            </ul>
                            <p>
                                Your lender wants you to close on your loan, so they're
                                motivated to help you get the best rate possible. Don't hesitate
                                to ask questions and seek their advice.
                            </p>
                        </div>
                    </section>
                    <section>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">
                            Monitor the market
                        </h3>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Keep an eye on mortgage rate trends and economic indicators that
                                influence rates. Pay attention to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Federal Reserve announcements and meetings</li>
                                <li>
                                    Economic reports on employment, inflation, and GDP growth
                                </li>
                                <li>
                                    The 10-year Treasury yield, which mortgage rates typically
                                    follow
                                </li>
                                <li>General market volatility and investor sentiment</li>
                            </ul>
                            <p>
                                You might also consider setting up rate alerts through your
                                lender or a mortgage rate tracking website. This way, you'll be
                                notified immediately if rates make a significant move in either
                                direction.
                            </p>
                        </div>
                    </section>
                    <section>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">
                            Improve your qualifying factors
                        </h3>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                If you have time before you need to lock your rate, use it to
                                strengthen your mortgage application. Improving your
                                qualifications can help you secure a better rate when you do
                                lock. Consider:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Boosting your credit score:</strong> Pay down credit
                                    card balances, make all payments on time, and avoid opening
                                    new credit accounts.
                                </li>
                                <li>
                                    <strong>Increasing your down payment:</strong> A larger down
                                    payment can qualify you for better rates and help you avoid
                                    private mortgage insurance (PMI).
                                </li>
                                <li>
                                    <strong>Reducing your debt-to-income ratio:</strong> Pay off
                                    debts or increase your income to improve this key metric that
                                    lenders use to evaluate your application.
                                </li>
                                <li>
                                    <strong>Shopping around:</strong> Get quotes from multiple
                                    lenders to ensure you're getting the best rate available for
                                    your situation.
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="bg-gray-50 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Get approved to see what you can afford
                        </h2>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Rocket Mortgage® lets you do it all online.
                        </p>
                        <div className="text-center">
                            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Get my approval
                            </button>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            What if interest rates fall after you've locked in?
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                What if you lock your rate and then rates drop significantly?
                                You have a few options:
                            </p>
                            <p>
                                <strong>Float-down option:</strong> Some lenders offer a
                                float-down provision that allows you to take advantage of lower
                                rates if they fall before closing. However, this typically comes
                                with restrictions and may require an additional fee. Not all
                                lenders offer this option, and those that do may have specific
                                conditions, such as rates needing to drop by a certain amount.
                            </p>
                            <p>
                                <strong>Let the rate lock expire and re-lock:</strong> If rates
                                drop significantly and you have time before closing, you could
                                let your rate lock expire and lock in the new, lower rate.
                                However, this strategy is risky—if rates rise again before you
                                re-lock, you could end up with a higher rate than your original
                                lock.
                            </p>
                            <p>
                                <strong>Negotiate with your lender:</strong> If rates drop after
                                you've locked, talk to your lender. While they're not obligated
                                to lower your rate, some lenders may be willing to work with
                                you, especially if you're a strong borrower or if they want to
                                maintain a good relationship with you.
                            </p>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            The bottom line: You have options for your interest rate
                        </h2>
                        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                The best time to lock your rate will vary based on your specific
                                situation and market conditions. If rates are low or rising,
                                locking in sooner may give you peace of mind. If rates are high
                                and expected to fall, you might choose to wait—though this comes
                                with the risk that rates could rise instead.
                            </p>
                            <p>
                                Ultimately, the decision comes down to your risk tolerance,
                                timeline, and financial goals. Work closely with your lender,
                                stay informed about market trends, and don't be afraid to ask
                                questions. Whether you choose to lock your rate today or wait,
                                understanding your options will help you make the best decision
                                for your situation.
                            </p>
                            <p>
                                Ready to explore your mortgage options?{' '}
                                <strong>Get pre-qualified today</strong> to see what rates you
                                qualify for.
                            </p>
                        </div>
                    </section>
                    {/* Author Bio */}
                    <section className="border-t pt-8">
                        <div className="flex gap-6 items-start">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
                                alt="Victoria Araj"
                                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                            />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Victoria Araj</h3>
                                <div className="prose max-w-none text-gray-700 leading-relaxed text-sm">
                                    <p>
                                        Victoria Araj is a Team Leader for Rocket Mortgage and held
                                        roles in mortgage banking, public relations and more in her
                                        19+ years with the company. She holds a bachelor's degree in
                                        journalism with an emphasis in political science from
                                        Michigan State University, and a master's degree in public
                                        administration from the University of Michigan.
                                    </p>
                                </div>
                            </div>
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
                                    className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
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
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
