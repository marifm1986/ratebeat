import React, { useState } from 'react';
import {
  ChevronRight,
  Home,
  DollarSign,
  Calculator,
  Clock,
  TrendingDown,
  Wallet,
  FileText,
  Shield,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { FinalCTA } from '../components/FinalCTA';
import { LegalDisclaimer } from '../components/LegalDisclaimer';

// Color variants with static Tailwind classes
const COLOR_VARIANTS: Record<
  string,
  { icon: string; badgeBg: string; badgeRing: string; hoverBg: string; cardBg: string; textColor: string }
> = {
  blue: { icon: 'text-blue-700', badgeBg: 'bg-blue-100', badgeRing: 'ring-blue-200', hoverBg: 'hover:bg-blue-50', cardBg: 'bg-blue-50', textColor: 'text-blue-900' },
  red: { icon: 'text-red-700', badgeBg: 'bg-red-100', badgeRing: 'ring-red-200', hoverBg: 'hover:bg-red-50', cardBg: 'bg-red-50', textColor: 'text-red-900' },
  green: { icon: 'text-green-700', badgeBg: 'bg-green-100', badgeRing: 'ring-green-200', hoverBg: 'hover:bg-green-50', cardBg: 'bg-green-50', textColor: 'text-green-900' },
  purple: { icon: 'text-purple-700', badgeBg: 'bg-purple-100', badgeRing: 'ring-purple-200', hoverBg: 'hover:bg-purple-50', cardBg: 'bg-purple-50', textColor: 'text-purple-900' },
  orange: { icon: 'text-orange-700', badgeBg: 'bg-orange-100', badgeRing: 'ring-orange-200', hoverBg: 'hover:bg-orange-50', cardBg: 'bg-orange-50', textColor: 'text-orange-900' },
  teal: { icon: 'text-teal-700', badgeBg: 'bg-teal-100', badgeRing: 'ring-teal-200', hoverBg: 'hover:bg-teal-50', cardBg: 'bg-teal-50', textColor: 'text-teal-900' },
  pink: { icon: 'text-pink-700', badgeBg: 'bg-pink-100', badgeRing: 'ring-pink-200', hoverBg: 'hover:bg-pink-50', cardBg: 'bg-pink-50', textColor: 'text-pink-900' },
  indigo: { icon: 'text-indigo-700', badgeBg: 'bg-indigo-100', badgeRing: 'ring-indigo-200', hoverBg: 'hover:bg-indigo-50', cardBg: 'bg-indigo-50', textColor: 'text-indigo-900' },
};

const RefinanceGetStartedPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Loan options data
  const loanOptions = [
    {
      name: 'FHA Loan',
      description: 'Government-backed loans with lower down payment requirements and flexible credit standards.',
      icon: Home,
      color: 'blue',
      href: '/fha-loan'
    },
    {
      name: 'Home Equity Loan',
      description: 'Borrow against your home\'s equity with a fixed rate and predictable monthly payments.',
      icon: DollarSign,
      color: 'green',
      href: '/home-equity-loan'
    },
    {
      name: 'Jumbo Smart refinance',
      description: 'Refinance large loan amounts above conforming loan limits with competitive rates.',
      icon: TrendingDown,
      color: 'purple',
      href: '/jumbo-loan'
    },
    {
      name: 'All loan options',
      description: 'Explore all available refinance options to find the perfect fit for your financial goals.',
      icon: FileText,
      color: 'orange',
      href: '/home-loans'
    }
  ];

  // Benefits data
  const benefits = [
    {
      name: 'Access cash quickly',
      description: 'Use your equity to pay off debt, update your space, or invest in what you want.',
      icon: Wallet,
      color: 'blue',
      href: '#access-cash'
    },
    {
      name: 'Lower your payment',
      description: 'Save each month or go mortgage-free sooner, without ever leaving your couch.',
      icon: TrendingDown,
      color: 'green',
      href: '#lower-payment'
    },
    {
      name: 'Calculate your savings',
      description: 'Compare rates and explore our exclusive offers – no credit check needed.',
      icon: Calculator,
      color: 'purple',
      href: '/refinance-calculator'
    }
  ];

  // Refi journey steps
  const refiSteps = [
    {
      name: 'Build your dream loan',
      description: 'Customize terms, explore discounts, and let us know if you need cash.',
      icon: Home,
      color: 'blue'
    },
    {
      name: 'Apply in less than 10 minutes',
      description: 'The process is easy and we\'ll make sure you have all the info you need.',
      icon: Clock,
      color: 'green'
    },
    {
      name: 'Easy, stress-free closing',
      description: 'Close from anywhere with award-winning guidance from our team.',
      icon: Shield,
      color: 'purple'
    }
  ];

  // Resources data
  const resources = [
    {
      name: 'Get an Official Mortgage Review®',
      description: 'We\'ll bring your current mortgage together and find opportunities that make sense.',
      image: '/ref1.png',
      tag: 'Free resource',
      href: '#mortgage-review'
    },
    {
      name: 'Cash-out calculator',
      description: 'Play with the numbers and see how much cash you can access based on your home\'s equity.',
      image: '/ref2.png',
      tag: 'Free resource',
      href: '/home-equity-calculator'
    },
    {
      name: 'Payment calculator',
      description: 'See what you could save each month with more favorable terms and lower payments.',
      image: '/image5.png',
      tag: 'Free resource',
      href: '/refinance-calculator'
    }
  ];

  const faqs = [
    {
      question: "What is refinancing and how does it work?",
      answer: "Refinancing is the process of replacing your current mortgage with a new one, typically to secure a lower interest rate, reduce monthly payments, change loan terms, or access home equity. The new loan pays off the existing mortgage, and you begin making payments on the new loan with updated terms."
    },
    {
      question: "When is the right time to refinance?",
      answer: "Consider refinancing when interest rates drop significantly below your current rate (typically 0.5-1% lower), your credit score has improved, you want to switch from an adjustable to fixed-rate mortgage, or you need to access home equity. Calculate your break-even point to ensure the savings outweigh the closing costs."
    },
    {
      question: "How much does it cost to refinance?",
      answer: "Refinancing typically costs 2-5% of the loan amount in closing costs, which can include appraisal fees, title insurance, origination fees, and other charges. Some lenders offer no-closing-cost refinances where fees are rolled into the loan or offset by a higher interest rate."
    },
    {
      question: "Will refinancing hurt my credit score?",
      answer: "Refinancing may cause a small, temporary dip in your credit score due to the hard inquiry and new account opening. However, this impact is usually minimal (5-10 points) and temporary. Over time, consistent on-time payments on your new loan can actually improve your credit score."
    },
    {
      question: "What documents do I need to refinance?",
      answer: "Common documents include recent pay stubs, W-2s or tax returns (typically 2 years), bank statements, current mortgage statement, homeowners insurance information, and proof of identity. Self-employed borrowers may need additional documentation like profit and loss statements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Unlock your equity for less.
              </h1>
              <p className="text-xl mb-8 text-gray-600 leading-relaxed">
                Get the cash you need to make big dreams happen or refinance into
                a lower payment and save each month. Explore what it all can do
                for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold">
                  Apply in 10 minutes
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold">
                  Estimate my rate
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/know-your-equiety-and-get-the-cash-you-need.webp"
                alt="Happy homeowner"
                className="rounded-2xl shadow-2xl w-full"
              />
              <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Let's chat</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore What's Next Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Explore what's next for your home
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {loanOptions.map(({ name, icon: Icon, color, href }, idx) => {
              const variant = COLOR_VARIANTS[color] ?? COLOR_VARIANTS.blue;
              const Wrapper: React.ElementType = href ? 'a' : 'button';
              const wrapperProps = href
                ? { href, 'aria-label': name }
                : { type: 'button', 'aria-label': name } as const;

              return (
                <Wrapper
                  key={idx}
                  {...wrapperProps}
                  className={[
                    'group relative w-full rounded-2xl p-6',
                    variant.cardBg,
                    variant.hoverBg,
                    'transition-all duration-200 cursor-pointer',
                    'ring-1 ring-transparent hover:ring-gray-200 hover:shadow-xl',
                    'outline-none focus:outline-none',
                    'flex flex-col justify-between min-h-[140px]',
                  ].join(' ')}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <Icon className={['w-6 h-6', variant.icon].join(' ')} />
                  </div>
                  <div className="title-wrapper flex flex-col">
                    <p
                      className={[
                        'text-left text-lg font-semibold mb-1',
                        variant.textColor,
                      ].join(' ')}
                    >
                      {name}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fresh Start Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Get a fresh start in as little as 14 days
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map(({ name, description, icon: Icon, color, href }, idx) => {
              const variant = COLOR_VARIANTS[color] ?? COLOR_VARIANTS.blue;
              const Wrapper: React.ElementType = href ? 'a' : 'div';
              const wrapperProps = href ? { href, 'aria-label': name } : {};

              return (
                <Wrapper
                  key={idx}
                  {...wrapperProps}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full ${variant.badgeBg} flex items-center justify-center mb-4`}>
                    <Icon className={['w-6 h-6', variant.icon].join(' ')} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
                  <div className="flex items-center text-gray-900 font-medium group-hover:gap-2 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Refi Journey Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/image6.png"
                alt="Family at home"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                A refi journey that's simple
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Snag a rate you love and get the support you need every step of
                the way.
              </p>

              <div className="space-y-6">
                {refiSteps.map(({ name, description, icon: Icon }, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Get started now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map(({ name, description, image, tag, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
            If you're curious, let's chat
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg max-w-2xl mx-auto">
            Every question you have is important, that's why we'll answer them 24/7.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-200 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get in touch now
              </h3>
              <p className="text-gray-600 mb-4">Chat with a loan expert</p>
              <div className="flex items-center text-gray-900 font-medium">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-200 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get my refi estimate
              </h3>
              <p className="text-gray-600 mb-4">Refresh your finances</p>
              <div className="flex items-center text-gray-900 font-medium">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Options CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            More refinance options than ever
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            So you're more likely to get approved and less likely to waste time.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Apply in 10 minutes
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Everything you need to know about refinancing your home.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-100 transition-colors rounded-lg"
                >
                  <span className="font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <LegalDisclaimer
        content={` Refinancing your current mortgage loan over the life of the loan.

Tap into November 2024 survey of current Rocket Mortgage LLC clients (not the final VA Approved Lender over the life of the loan.

You will borrow the same amount you currently owe minus the property is and for the added down (excluding closing costs) and close it at a term to make the loan originated.

Subject to credit approval. Terms, rates, and program availability may vary and are subject to change. Credit, income and asset review is required. Not all loans or loan programs qualify.

® Rocket Mortgage, LLC; NMLS #3030; www.nmlsconsumeraccess.org. Equal Housing Lender. Licensed in 50 states.`}
      />

      {/* Final CTA */}
      <FinalCTA 
        title="Ready to unlock your home's potential?"
        description="Start your refinance journey today and discover how much you could save."
        buttonText="Get started now"
      />
    </div>
  );
};

export default RefinanceGetStartedPage;
