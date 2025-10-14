import React, { useState } from 'react'
import {
  ChevronRight,
  Home,
  User,
  DollarSign,
  FileText,
  Calculator,
  MessageCircle,
  Phone,
  ChevronDown,
} from 'lucide-react'
interface AdjustableRateMortgageProps {
  'data-id'?: string
}
export const AdjustableRateMortgage: React.FC<AdjustableRateMortgageProps> = ({
  'data-id': dataId,
}) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }
  const faqs = [
    {
      question: 'How does an adjustable-rate mortgage work?',
      answer:
        'An adjustable-rate mortgage (ARM) has an interest rate that can change over time. It typically starts with a lower fixed rate for an initial period, then adjusts periodically based on market conditions.',
    },
    {
      question: 'What are the benefits of an ARM?',
      answer:
        'ARMs often have lower initial interest rates than fixed-rate mortgages, resulting in lower initial monthly payments. This can help you qualify for a larger loan amount or save money in the early years of your mortgage.',
    },
    {
      question: 'What are the risks of an ARM?',
      answer:
        'The main risk is that your interest rate and monthly payment can increase over time. This means your housing costs could become less predictable and potentially unaffordable if rates rise significantly.',
    },
    {
      question: 'Who are adjustable-rate mortgages best for?',
      answer:
        "ARMs work well for borrowers who plan to sell or refinance before the rate adjusts, expect their income to increase, or believe interest rates will remain stable or decrease. They're also good for those who want lower initial payments.",
    },
    {
      question:
        'What are the different types of adjustable-rate mortgage loans?',
      answer:
        'Common ARM types include 3/1, 5/1, 7/1, and 10/1 ARMs. The first number represents the fixed-rate period in years, and the second shows how often the rate adjusts after that (typically annually). There are also interest-only ARMs and payment-option ARMs.',
    },
  ]
  return (
    <div className="w-full bg-white" data-id={dataId}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-sm text-gray-600 mb-4">
              ADJUSTABLE-RATE MORTGAGE
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Adjustable-rate mortgage (ARM)
            </h1>
            <p className="text-gray-700 mb-8 leading-relaxed">
              If you plan to sell your home for just a few years and aren't in a
              rush these can provide better, or ARM has lower interest rates
              that can result in a lower monthly payment.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Get an estimate
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
              alt="Happy couple"
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop"
                alt="Person smiling"
                className="rounded-3xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                A home loan that can save on interest during the first few years
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <DollarSign className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Low introductory interest rate
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Lower initial rate compared to most fixed-rate mortgages
                      during the initial fixed-rate period.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Calculator className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Lower monthly payments
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Lower interest rate means lower monthly payments during
                      the initial period.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FileText className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      More payments against principal
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Lower interest charges can help you pay down the loan
                      balance faster.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Home className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Refinance options
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Sell or refinance your home before the adjustment period
                      to a fixed-rate mortgage.
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-8 border border-gray-300 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
                More at a glance
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
              <span className="font-semibold">talk to us</span>. We'll be able
              to help you with any questions you have and provide a full
              breakdown.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-500 text-white p-8 rounded-2xl">
              <Home className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-3">The home</h3>
              <p className="text-sm mb-6 opacity-90">
                This will be your primary home or second home, not an investment
                property.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                About ownership <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <User className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Credit profile
              </h3>
              <p className="text-sm mb-6 text-gray-600">
                You'll typically need a credit score of 620 or higher.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                About credit <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <Calculator className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Debt-to-income
              </h3>
              <p className="text-sm mb-6 text-gray-600">
                Your debt-to-income ratio should be 50% or less.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                About DTI <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <DollarSign className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Closing costs
              </h3>
              <p className="text-sm mb-6 text-gray-600">
                Understand what you'll pay in closing costs and fees to cover
                closing costs.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                About closing costs <ChevronRight className="w-4 h-4" />
              </button>
            </div>
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
              Discover how much you'll pay or how much you could potentially
              save.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <Calculator className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Down payment calculator
              </h3>
              <p className="text-gray-600 mb-6">
                Figure out how much you'll need to pay for your new home and how
                to afford it.
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
                Understand how much home you can afford, and if you can't, what
                you could potentially save.
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
              Explore the pros and cons, understand the pros and cons and
              reasons, then understand more.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
                alt="Couple looking at laptop"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">LEARN</p>
                <h3 className="font-bold text-gray-900 mb-2">
                  What is an adjustable-rate mortgage?
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
                <h3 className="font-bold text-gray-900 mb-2">
                  7/6 ARM: Definition and how it works
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
                <h3 className="font-bold text-gray-900 mb-2">
                  Adjustable-rate mortgage (ARM) vs. fixed-rate mortgage
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
            Answers to questions anyone who has even just heard about these
            loans may have.
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
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Don't wonder what's best. Ask us!
            </h2>
            <p className="text-gray-600">
              We're here to help you with all of your questions related to home
              loans. We're here.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <MessageCircle className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Chat with an expert
              </h3>
              <p className="text-gray-600 mb-6">We're here to help you</p>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Phone className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Call us</h3>
              <p className="text-red-500 mb-6 font-semibold">(833) 493-5030</p>
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
            We'll help you get the home loan that's right for you
          </h2>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
            Start my approval
          </button>
        </div>
      </section>
    </div>
  )
}
