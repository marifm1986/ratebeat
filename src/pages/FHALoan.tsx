import React, { useState } from 'react'
import {
  ChevronRight,
  Home,
  CreditCard,
  Shield,
  DollarSign,
  Calculator,
  MessageCircle,
  Phone,
  Check,
  ChevronDown,
} from 'lucide-react'
import { Link } from 'react-router-dom'
interface FHALoanProps {
  'data-id'?: string
}
export const FHALoan: React.FC<FHALoanProps> = ({ 'data-id': dataId }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }
  const benefits = [
    {
      title: '3.5% down payment',
      description: 'Put down as little as 3.5% for a down payment',
    },
    {
      title: 'Lower credit requirements',
      description:
        'Get approved with a credit score as low as 580 to qualify with a 3.5% down payment',
    },
    {
      title: 'Flexible borrowing options',
      description:
        'Use gift funds from family, friends or employers to cover closing costs and down payment',
    },
  ]
  const faqs = [
    {
      question: 'Can I have an FHA loan on an FHA loan?',
      answer:
        "Generally, you can only have one FHA loan at a time. However, there are some exceptions, such as if you're relocating for work or if the size of your family has increased. You'll need to meet specific criteria and provide documentation to qualify for a second FHA loan.",
    },
    {
      question: 'Can I get more than one FHA loan?',
      answer:
        "While you can only have one FHA loan at a time in most cases, you can get another FHA loan after you've paid off or sold the property with your first FHA loan. There are also limited exceptions that allow for a second FHA loan, such as relocation, increase in family size, or vacating a jointly owned property.",
    },
    {
      question: 'Am I FHA loan-ready for first-time home buyers?',
      answer:
        "FHA loans are popular among first-time home buyers, but you don't have to be a first-time buyer to qualify. You'll need a credit score of at least 580 for a 3.5% down payment, or 500-579 for a 10% down payment. Your debt-to-income ratio should generally be 50% or less, and you'll need to show steady employment history.",
    },
    {
      question:
        'What are the income limits for FHA loans compared to other options?',
      answer:
        "FHA loans don't have specific income limits in most areas. However, your income needs to be sufficient to cover your mortgage payment and other debts while maintaining a debt-to-income ratio of 50% or less. Some areas may have different requirements based on local housing costs.",
    },
    {
      question: 'Why does down payment assistance exist for FHA loans?',
      answer:
        'Down payment assistance programs exist to help make homeownership more accessible, especially for first-time buyers and those with limited savings. These programs can provide grants or low-interest loans to help cover your down payment and closing costs, making it easier to qualify for an FHA loan.',
    },
    {
      question: 'What are the refinancing options with an FHA loan?',
      answer:
        "FHA loans offer several refinancing options including the FHA Streamline Refinance (which requires minimal documentation), cash-out refinancing (to access your home's equity), and rate-and-term refinancing (to change your interest rate or loan term). Each option has specific requirements and benefits.",
    },
  ]
  return (
    <div className="w-full bg-white" data-id={dataId}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-sm text-gray-600 mb-4">FHA LOAN</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              FHA loan
            </h1>
            <p className="text-gray-700 mb-8 leading-relaxed">
              With a down payment as low as 3.5% and more lenient credit
              requirements, an FHA loan from Ratebeat® can help make
              your homeownership dreams a reality.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              See what you qualify for
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1622610607501-32ac9c927216?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
              alt="Couple moving in"
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      {/* Making Homeownership Accessible Section */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://plus.unsplash.com/premium_photo-1680720885676-81e3bdee4237?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="Couple discussing"
                className="rounded-3xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Making homeownership more accessible
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
              <span className="font-semibold">talk to us</span>.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-500 text-white p-8 rounded-2xl">
              <Home className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-3">The home</h3>
              <p className="text-sm mb-6 opacity-90">
                You'll need to use the home as your primary residence.
                Investment properties and vacation homes aren't eligible for FHA
                loans.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                About eligibility <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <CreditCard className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Credit and debt
              </h3>
              <p className="text-sm mb-6 text-gray-600">
                A credit score above 580 will allow you to put down as little as
                3.5%. A score between 500-579 requires 10% down.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                About credit <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <Shield className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">MIP</h3>
              <p className="text-sm mb-6 text-gray-600">
                You'll pay an upfront mortgage insurance premium (MIP) and
                monthly MIP to protect the lender.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                About MIP <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <DollarSign className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Closing costs
              </h3>
              <p className="text-sm mb-6 text-gray-600">
                In addition to your down payment, you'll need to cover closing
                costs, which can be paid with gift funds.
              </p>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                About closing costs <ChevronRight className="w-4 h-4" />
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
                Ratebeat Home is here for FHA loans and through your homebuying
                questions. We're here to help make the process as easy and
                stress-free as possible. We're always available to answer your
                questions and provide support when you need it.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Ask a question
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                alt="Person on phone"
                className="rounded-3xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Estimate Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Estimate and explore
            </h2>
            <p className="text-gray-600">
              Get a sense of what you can afford and plan your homebuying
              journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Calculator className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Down payment calculator
              </h3>
              <p className="text-gray-600 mb-6">
                Learn how much you'll need to save for a down payment and how to
                save it.
              </p>
              <Link to='/down-payment-calculator' className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <Home className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Home affordability calculator
              </h3>
              <p className="text-gray-600 mb-6">
                Figure out how much home you can afford based on your income,
                debt and other factors.
              </p>
              <Link to='/affordability-calculator' className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
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
              Browse through guides and articles to learn more about FHA loans
              and how they work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
                alt="Person reading"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  FHA loans: Requirements, loan limits and rates
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
                <h3 className="font-bold text-gray-900 mb-2">
                  FHA vs. conventional loan: Definition and differences
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
                <h3 className="font-bold text-gray-900 mb-2">
                  FHA loan refinance: Requirements, pros and cons
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
            Get answers to common questions about FHA loans and the application
            process.
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
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Don't wonder what's best. Ask us!
            </h2>
            <p className="text-gray-600">
              We're here to help you navigate the FHA loan process. Let's talk.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <MessageCircle className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Chat with an expert
              </h3>
              <p className="text-gray-600 mb-6">We're 4 months from 9 p.m.</p>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <Phone className="w-8 h-8 mb-4 text-gray-700" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Call us</h3>
              <p className="text-red-500 mb-6 font-semibold">(888) 980-6716</p>
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
            Achieve your homeownership goals with an FHA loan
          </h2>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
            Start my approval
          </button>
        </div>
      </section>
    </div>
  )
}
